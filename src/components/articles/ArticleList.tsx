"use client";

import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function ArticleList({ articles }: { articles: Article[] }) {
  const { lang } = useLanguage();

  if (articles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-text-muted">{t("article.noArticles", lang)}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.paper.doi} article={article} />
      ))}
    </div>
  );
}
