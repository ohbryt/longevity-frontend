import fs from "fs";
import path from "path";
import type { Article } from "./types";
import { generateSlug, getSourceLabel } from "./utils";

function getContentDir(): string {
  if (process.env.CONTENT_DIR) return process.env.CONTENT_DIR;

  // Try local content/ first (copied by prebuild), then parent automation/
  const local = path.join(process.cwd(), "content");
  if (fs.existsSync(local)) return local;

  return path.join(process.cwd(), "..", "automation", "content_drafts");
}

function parseArticle(data: Article, filename: string): Article {
  return {
    ...data,
    slug: generateSlug(data.paper.doi),
    source: getSourceLabel(data.paper.topics),
  };
}

export function getAllArticles(): Article[] {
  const contentDir = getContentDir();

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .reverse();

  const articles: Article[] = [];

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const data = JSON.parse(raw) as Article;
      if (data.status === "ready_for_review") {
        articles.push(parseArticle(data, file));
      }
    } catch {
      // skip malformed files
    }
  }

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug) || null;
}

export function getFeaturedArticles(count = 3): Article[] {
  const articles = getAllArticles();
  return articles
    .sort((a, b) => b.paper.relevance_score - a.paper.relevance_score)
    .slice(0, count);
}

export function getArticlesBySource(source: string): Article[] {
  if (source === "all") return getAllArticles();
  return getAllArticles().filter((a) => a.paper.topics.includes(source));
}
