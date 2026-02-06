"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArticleList } from "@/components/articles/ArticleList";
import { ArticleFilters } from "@/components/articles/ArticleFilters";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import type { Article } from "@/lib/types";

export function ArticlesPageContent({ articles }: { articles: Article[] }) {
  const { lang } = useLanguage();

  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title={t("articles.title", lang)}
          subtitle={t("articles.subtitle", lang)}
        />
        <ArticleFilters />
        <ArticleList articles={articles} />
      </Container>
    </section>
  );
}
