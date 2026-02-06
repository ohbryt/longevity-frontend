import { NextRequest, NextResponse } from "next/server";
import { getAllArticles, getArticlesBySource } from "@/lib/content";

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get("source") || "all";
  const articles = source === "all" ? getAllArticles() : getArticlesBySource(source);

  return NextResponse.json({
    count: articles.length,
    articles: articles.map((a) => ({
      slug: a.slug,
      korean_title: a.korean_title,
      korean_summary: a.korean_summary,
      source: a.source,
      journal: a.paper.journal,
      doi: a.paper.doi,
      confidence_score: a.confidence_score,
      created_at: a.created_at,
    })),
  });
}
