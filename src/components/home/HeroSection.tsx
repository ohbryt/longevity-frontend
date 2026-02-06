"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function HeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative bg-gradient-to-b from-warm-100 via-warm-50 to-cream py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-serif text-sm italic tracking-widest text-warm-500 uppercase">
            {t("hero.tagline", lang)}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-text-primary md:text-[3.25rem]">
            {t("hero.title1", lang)}
            <br />
            <span className="text-terracotta-500">{t("hero.title2", lang)}</span>
          </h1>

          <div className="divider-ornament mx-auto mt-8 max-w-xs">
            <span className="text-lg text-warm-400">&loz;</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            {t("hero.description", lang).split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden sm:block" />}
                {line}
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/articles">{t("hero.cta.articles", lang)}</Button>
            <Button href="/newsletter" variant="outline">
              {t("hero.cta.newsletter", lang)}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
