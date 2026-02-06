import type { Paper } from "@/lib/types";

export function PaperInfo({ paper }: { paper: Paper }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        원문 논문 정보
      </h3>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-text-muted">저널</dt>
          <dd className="font-medium text-text-primary">{paper.journal}</dd>
        </div>
        <div>
          <dt className="text-text-muted">출판일</dt>
          <dd className="font-medium text-text-primary">{paper.pub_date}</dd>
        </div>
        <div>
          <dt className="text-text-muted">저자</dt>
          <dd className="text-text-primary">
            {paper.authors.slice(0, 3).join(", ")}
            {paper.authors.length > 3 && ` 외 ${paper.authors.length - 3}명`}
          </dd>
        </div>
        <div>
          <dt className="text-text-muted">DOI</dt>
          <dd>
            <a
              href={`https://doi.org/${paper.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-500 hover:underline break-all"
            >
              {paper.doi}
            </a>
          </dd>
        </div>
        {paper.relevance_score > 0 && (
          <div>
            <dt className="text-text-muted">관련성 점수</dt>
            <dd className="font-medium text-text-primary">
              {paper.relevance_score.toFixed(1)} / 5.0
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
