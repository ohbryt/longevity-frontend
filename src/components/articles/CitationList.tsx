"use client";

import type { Citation } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function CitationList({ citations }: { citations: Citation[] }) {
  const { lang } = useLanguage();

  if (citations.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        {t("sidebar.citations", lang)}
      </h3>
      <ol className="space-y-2">
        {citations.map((c, i) => (
          <li key={i} className="text-sm text-text-secondary">
            <span className="mr-1 font-medium text-text-muted">[{i + 1}]</span>
            {c.title}{" "}
            <span className="italic text-text-muted">{c.journal}</span>
            {c.doi && (
              <>
                {" "}
                <a
                  href={`https://doi.org/${c.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-500 hover:underline"
                >
                  DOI
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
