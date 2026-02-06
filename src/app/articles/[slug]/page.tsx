import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleDetailContent } from "@/components/articles/ArticleDetailContent";
import { getArticleBySlug, getAllArticles } from "@/lib/content";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "아티클을 찾을 수 없습니다" };
  return {
    title: article.korean_title,
    description: article.korean_summary,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticleDetailContent article={article} />;
}
