"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function PracticalTips({ tips }: { tips: string[] }) {
  const { lang } = useLanguage();

  if (tips.length === 0) return null;

  return (
    <div className="rounded-xl border border-terracotta-200 bg-terracotta-50 p-5">
      <h3 className="mb-3 text-sm font-semibold text-terracotta-800">
        {t("sidebar.practicalTips", lang)}
      </h3>
      <ul className="space-y-2">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-terracotta-700">
            <span className="mt-0.5 shrink-0">💡</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
