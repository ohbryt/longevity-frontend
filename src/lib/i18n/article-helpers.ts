import type { Article } from "@/lib/types";
import type { Lang } from "./dictionary";

export function getArticleTitle(article: Article, lang: Lang): string {
  if (lang === "en" && article.english_title) return article.english_title;
  return article.korean_title;
}

export function getArticleSummary(article: Article, lang: Lang): string {
  if (lang === "en" && article.english_summary) return article.english_summary;
  return article.korean_summary;
}
