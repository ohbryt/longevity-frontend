import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { PaperInfo } from "@/components/articles/PaperInfo";
import { KeyInsights } from "@/components/articles/KeyInsights";
import { PracticalTips } from "@/components/articles/PracticalTips";
import { ConfidenceBadge } from "@/components/articles/ConfidenceBadge";
import { CitationList } from "@/components/articles/CitationList";
import { getArticleBySlug, getAllArticles } from "@/lib/content";
import { formatDate, getSourceLabel, getSourceColor } from "@/lib/utils";

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

  return (
    <article className="py-12">
      <Container>
        <div className="mb-8">
          <Link
            href="/articles"
            className="text-sm text-text-muted transition-colors hover:text-terracotta-500"
          >
            &larr; 아티클 목록으로
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
                {formatDate(article.created_at)}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {article.korean_title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {article.korean_summary}
            </p>

            <hr className="my-8 border-border" />

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
