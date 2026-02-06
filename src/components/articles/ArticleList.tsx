import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/lib/types";

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-text-muted">아직 발행된 아티클이 없습니다.</p>
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
