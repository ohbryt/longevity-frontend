export function KeyInsights({ insights }: { insights: string[] }) {
  if (insights.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        핵심 인사이트
      </h3>
      <ul className="space-y-2">
        {insights.map((insight, i) => (
          <li key={i} className="flex gap-2 text-sm text-text-secondary">
            <span className="mt-0.5 shrink-0 text-terracotta-400">&#x2022;</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
