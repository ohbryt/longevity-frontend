import { Suspense } from "react";
import type { Metadata } from "next";
import { getArticlesBySource } from "@/lib/content";
import { ArticlesPageContent } from "@/components/articles/ArticlesPageContent";

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
    <Suspense>
      <ArticlesPageContent articles={articles} />
    </Suspense>
  );
}
