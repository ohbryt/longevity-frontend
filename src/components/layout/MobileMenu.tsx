"use client";

import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-[80vw] max-w-72 bg-cream p-6 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-text-primary">
            {SITE_NAME}
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary hover:bg-warm-100"
            aria-label="메뉴 닫기"
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-base font-medium text-text-secondary transition-colors hover:bg-warm-100 hover:text-terracotta-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
