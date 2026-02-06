"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import type { Article } from "@/lib/types";

export function FeaturedArticles({ articles }: { articles: Article[] }) {
  const { lang } = useLanguage();

  if (articles.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title={t("featured.title", lang)}
          subtitle={t("featured.subtitle", lang)}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.paper.doi} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
