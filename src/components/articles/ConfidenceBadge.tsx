"use client";

import { Badge } from "@/components/common/Badge";
import { getConfidenceLabel, getConfidenceColor } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ConfidenceBadge({ score }: { score: number }) {
  const { lang } = useLanguage();

  return (
    <Badge className={getConfidenceColor(score)}>
      {getConfidenceLabel(score, lang)} ({Math.round(score * 100)}%)
    </Badge>
  );
}
