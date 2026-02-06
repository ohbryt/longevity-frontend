"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function KeyInsights({ insights }: { insights: string[] }) {
  const { lang } = useLanguage();

  if (insights.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        {t("sidebar.keyInsights", lang)}
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
