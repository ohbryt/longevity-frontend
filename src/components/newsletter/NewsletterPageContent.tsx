"use client";

import { Container } from "@/components/common/Container";
import { EmailSignupForm } from "@/components/newsletter/EmailSignupForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function NewsletterPageContent() {
  const { lang } = useLanguage();

  const features = [
    {
      icon: "📄",
      title: t("newsletter.feature1.title", lang),
      desc: t("newsletter.feature1.desc", lang),
    },
    {
      icon: "💡",
      title: t("newsletter.feature2.title", lang),
      desc: t("newsletter.feature2.desc", lang),
    },
    {
      icon: "🔍",
      title: t("newsletter.feature3.title", lang),
      desc: t("newsletter.feature3.desc", lang),
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-5xl">📬</span>
          <h1 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">
            {t("newsletter.title", lang)}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            {t("newsletter.description", lang)}
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-white p-8">
            <h2 className="mb-2 text-xl font-bold text-text-primary">
              {t("newsletter.signupTitle", lang)}
            </h2>
            <p className="mb-6 text-sm text-text-muted">
              {t("newsletter.signupDesc", lang)}
            </p>
            <EmailSignupForm />
          </div>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-warm-50 p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-2 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
