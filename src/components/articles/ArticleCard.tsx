"use client";

import Link from "next/link";
import { Badge } from "@/components/common/Badge";
import type { Article } from "@/lib/types";
import { formatDate, getSourceLabel, getSourceColor, truncate } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import { getArticleTitle, getArticleSummary } from "@/lib/i18n/article-helpers";

export function ArticleCard({ article }: { article: Article }) {
  const { lang } = useLanguage();

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-white transition-all hover:shadow-lg"
    >
      {/* Top accent bar */}
      <div className="h-1 rounded-t-lg bg-gradient-to-r from-terracotta-300 to-warm-300" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <Badge className={getSourceColor(article.paper.topics)}>
            {getSourceLabel(article.paper.topics)}
          </Badge>
          <span className="text-xs text-text-muted">
            {formatDate(article.created_at, lang)}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold leading-snug text-text-primary group-hover:text-terracotta-600 transition-colors">
          {getArticleTitle(article, lang)}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {truncate(getArticleSummary(article, lang), 120)}
        </p>

        <div className="mt-4 border-t border-border pt-3 flex items-center justify-between">
          <span className="text-xs italic text-text-muted">
            {article.paper.journal}
          </span>
          <span className="text-xs font-medium text-terracotta-500 opacity-0 transition-opacity group-hover:opacity-100">
            {t("article.read", lang)} &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
