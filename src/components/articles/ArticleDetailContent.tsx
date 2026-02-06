"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { PaperInfo } from "@/components/articles/PaperInfo";
import { KeyInsights } from "@/components/articles/KeyInsights";
import { PracticalTips } from "@/components/articles/PracticalTips";
import { ConfidenceBadge } from "@/components/articles/ConfidenceBadge";
import { CitationList } from "@/components/articles/CitationList";
import { formatDate, getSourceLabel, getSourceColor } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import { getArticleTitle, getArticleSummary } from "@/lib/i18n/article-helpers";
import type { Article } from "@/lib/types";

export function ArticleDetailContent({ article }: { article: Article }) {
  const { lang } = useLanguage();

  return (
    <article className="py-12">
      <Container>
        <div className="mb-8">
          <Link
            href="/articles"
            className="text-sm text-text-muted transition-colors hover:text-terracotta-500"
          >
            &larr; {t("article.backToList", lang)}
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge className={getSourceColor(article.paper.topics)}>
                {getSourceLabel(article.paper.topics)}
              </Badge>
              <ConfidenceBadge score={article.confidence_score} />
              <span className="text-sm text-text-muted">
                {formatDate(article.created_at, lang)}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {getArticleTitle(article, lang)}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {getArticleSummary(article, lang)}
            </p>

            <hr className="my-8 border-border" />

            {lang === "en" && (
              <div className="mb-6 rounded-lg border border-warm-200 bg-warm-50 px-4 py-3 text-sm text-text-secondary">
                {t("article.bodyNotice", lang)}
              </div>
            )}

            <ArticleBody content={article.korean_body} />
          </div>

          {/* Sidebar */}
          <aside className="mt-10 space-y-6 lg:mt-0">
            <PaperInfo paper={article.paper} />
            <KeyInsights insights={article.key_insights} />
            <PracticalTips tips={article.practical_applications} />
            <CitationList citations={article.citations} />
          </aside>
        </div>
      </Container>
    </article>
  );
}
