export function generateSlug(doi: string): string {
  return doi
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function formatDate(dateString: string, lang: "ko" | "en" = "ko"): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString;
  }
  const locale = lang === "en" ? "en-US" : "ko-KR";
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString;
  }
  return date.toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
}

export function getSourceLabel(topics: string[]): string {
  if (topics.includes("clinical_trial")) return "ClinicalTrials.gov";
  if (topics.includes("biorxiv")) return "bioRxiv";
  if (topics.includes("medrxiv")) return "medRxiv";
  if (topics.includes("pubmed")) return "PubMed";
  return "Research";
}

export function getSourceColor(topics: string[]): string {
  if (topics.includes("clinical_trial")) return "bg-emerald-100 text-emerald-800";
  if (topics.includes("biorxiv")) return "bg-blue-100 text-blue-800";
  if (topics.includes("medrxiv")) return "bg-purple-100 text-purple-800";
  if (topics.includes("pubmed")) return "bg-amber-100 text-amber-800";
  return "bg-stone-100 text-stone-800";
}

export function getConfidenceLabel(score: number, lang: "ko" | "en" = "ko"): string {
  if (lang === "en") {
    if (score >= 0.9) return "High Confidence";
    if (score >= 0.7) return "Medium Confidence";
    return "Needs Review";
  }
  if (score >= 0.9) return "높은 신뢰도";
  if (score >= 0.7) return "보통 신뢰도";
  return "검토 필요";
}

export function getConfidenceColor(score: number): string {
  if (score >= 0.9) return "bg-green-100 text-green-800";
  if (score >= 0.7) return "bg-yellow-100 text-yellow-800";
  return "bg-red-100 text-red-800";
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}
