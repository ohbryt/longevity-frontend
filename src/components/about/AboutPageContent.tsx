"use client";

import { Container } from "@/components/common/Container";
import { SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function AboutPageContent() {
  const { lang } = useLanguage();

  const features = [
    { label: t("about.feature.daily", lang), desc: t("about.feature.dailyDesc", lang) },
    { label: t("about.feature.weekly", lang), desc: t("about.feature.weeklyDesc", lang) },
    { label: t("about.feature.evidence", lang), desc: t("about.feature.evidenceDesc", lang) },
    { label: t("about.feature.confidence", lang), desc: t("about.feature.confidenceDesc", lang) },
    { label: t("about.feature.practical", lang), desc: t("about.feature.practicalDesc", lang) },
    { label: t("about.feature.koreanFirst", lang), desc: t("about.feature.koreanFirstDesc", lang) },
  ];

  const sources = [
    { name: "PubMed / MEDLINE", desc: t("about.source.pubmed", lang) },
    { name: "bioRxiv", desc: t("about.source.biorxiv", lang) },
    { name: "medRxiv", desc: t("about.source.medrxiv", lang) },
    { name: "ClinicalTrials.gov", desc: t("about.source.ctgov", lang) },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-warm-100 text-5xl">
              🧬
            </div>
            <h1 className="text-3xl font-bold text-text-primary">
              {SITE_NAME}
            </h1>
            <p className="mt-2 text-text-secondary">
              {t("about.subtitle", lang)}
            </p>
          </div>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              <strong className="text-text-primary">{SITE_NAME}</strong>
              {t("about.intro", lang)}
            </p>

            <h2 className="pt-4 text-2xl font-bold text-text-primary">
              {t("about.missionTitle", lang)}
            </h2>

            <p>{t("about.missionText", lang)}</p>

            <ul className="space-y-3 pl-5 list-disc marker:text-terracotta-400">
              {features.map((f) => (
                <li key={f.label}>
                  <strong className="text-text-primary">{f.label}</strong>{" "}
                  &mdash; {f.desc}
                </li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-text-primary">
              {t("about.sourcesTitle", lang)}
            </h2>

            <p>{t("about.sourcesIntro", lang)}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {sources.map((source) => (
                <div
                  key={source.name}
                  className="rounded-lg border border-border bg-warm-50 p-4"
                >
                  <p className="font-medium text-text-primary">{source.name}</p>
                  <p className="mt-1 text-sm text-text-muted">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
