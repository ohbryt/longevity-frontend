import type { Article } from "@/lib/types";
import type { Lang } from "./dictionary";

export function getArticleTitle(article: Article, lang: Lang): string {
  if (lang === "en") {
    return article.english_title || article.paper.title || article.korean_title;
  }
  return article.korean_title;
}

export function getArticleSummary(article: Article, lang: Lang): string {
  if (lang === "en") {
    // Prefer paper abstract (full English) over english_summary (often truncated)
    return article.paper.abstract || article.english_summary || article.korean_summary;
  }
  return article.korean_summary;
}
