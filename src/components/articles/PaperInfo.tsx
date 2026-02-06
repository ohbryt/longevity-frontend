"use client";

import type { Paper } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function PaperInfo({ paper }: { paper: Paper }) {
  const { lang } = useLanguage();

  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        {t("sidebar.paperInfo", lang)}
      </h3>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-text-muted">{t("sidebar.journal", lang)}</dt>
          <dd className="font-medium text-text-primary">{paper.journal}</dd>
        </div>
        <div>
          <dt className="text-text-muted">{t("sidebar.pubDate", lang)}</dt>
          <dd className="font-medium text-text-primary">{paper.pub_date}</dd>
        </div>
        <div>
          <dt className="text-text-muted">{t("sidebar.authors", lang)}</dt>
          <dd className="text-text-primary">
            {paper.authors.slice(0, 3).join(", ")}
            {paper.authors.length > 3 &&
              ` ${t("sidebar.authorsMore", lang).replace("{n}", String(paper.authors.length - 3))}`}
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
            <dt className="text-text-muted">{t("sidebar.relevance", lang)}</dt>
            <dd className="font-medium text-text-primary">
              {paper.relevance_score.toFixed(1)} / 5.0
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
