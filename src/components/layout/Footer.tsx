"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import type { NavLink } from "@/lib/types";

export function Footer() {
  const { lang } = useLanguage();

  const navLinks: NavLink[] = [
    { label: t("nav.home", lang), href: "/" },
    { label: t("nav.articles", lang), href: "/articles" },
    { label: t("nav.about", lang), href: "/about" },
    { label: t("nav.newsletter", lang), href: "/newsletter" },
  ];

  return (
    <footer className="border-t border-border bg-warm-50 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta-500 text-xs text-white font-serif font-bold">
                L
              </span>
              <span className="font-serif text-lg font-bold text-text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {t("footer.description", lang)}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-text-secondary uppercase">
              {t("footer.quickLinks", lang)}
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-terracotta-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-text-secondary uppercase">
              {t("footer.sources", lang)}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>PubMed / MEDLINE</li>
              <li>bioRxiv / medRxiv</li>
              <li>ClinicalTrials.gov</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. {t("footer.disclaimer", lang)}
          </p>
          <p className="mt-2 tracking-wide">
            Brown Biotech Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
