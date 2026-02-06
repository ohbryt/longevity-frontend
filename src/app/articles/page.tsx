import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArticleList } from "@/components/articles/ArticleList";
import { ArticleFilters } from "@/components/articles/ArticleFilters";
import { getArticlesBySource } from "@/lib/content";

export const metadata: Metadata = {
  title: "아티클",
  description: "최신 건강수명(healthspan) 연구를 의사과학자의 시선으로 분석합니다",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source = "all" } = await searchParams;
  const articles = getArticlesBySource(source);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="아티클"
          subtitle="최신 건강수명(healthspan) 연구를 의사과학자의 시선으로 분석합니다"
        />
        <Suspense>
          <ArticleFilters />
        </Suspense>
        <ArticleList articles={articles} />
      </Container>
    </section>
  );
}
