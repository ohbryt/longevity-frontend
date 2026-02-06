"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/common/Container";
import { MobileMenu } from "./MobileMenu";
import { SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";
import type { NavLink } from "@/lib/types";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const navLinks: NavLink[] = [
    { label: t("nav.home", lang), href: "/" },
    { label: t("nav.articles", lang), href: "/articles" },
    { label: t("nav.about", lang), href: "/about" },
    { label: t("nav.newsletter", lang), href: "/newsletter" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta-500 text-sm text-white font-serif font-bold">
              L
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-tight text-text-primary tracking-tight">
                {SITE_NAME}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] font-medium tracking-wide text-text-secondary transition-colors hover:text-terracotta-500 uppercase"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="rounded-full border border-warm-300 px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:bg-warm-100 hover:text-terracotta-500"
            >
              {lang === "ko" ? "EN" : "한국어"}
            </button>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-text-secondary hover:bg-warm-100 md:hidden"
            aria-label="메뉴 열기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>
      <div className="border-b border-border" />

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}
