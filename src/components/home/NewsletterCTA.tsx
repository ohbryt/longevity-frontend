"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function NewsletterCTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-warm-200 bg-gradient-to-br from-warm-50 via-cream to-terracotta-50 p-10 text-center md:p-14">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-terracotta-100/40 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-warm-200/50 blur-2xl" />

          <div className="relative">
            <p className="mb-3 font-serif text-sm italic tracking-widest text-warm-500 uppercase">
              {t("cta.tagline", lang)}
            </p>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              {t("cta.title", lang)}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              {t("cta.description", lang)}
            </p>
            <div className="mt-8">
              <Button href="/newsletter">{t("cta.button", lang)}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
