import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getFeaturedArticles } from "@/lib/content";

export function FeaturedArticles() {
  const articles = getFeaturedArticles(3);

  if (articles.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="최신 연구 인사이트"
          subtitle="이번 주 가장 주목할 만한 장수과학 연구를 소개합니다"
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
