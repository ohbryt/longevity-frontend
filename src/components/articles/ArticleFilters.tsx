"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SOURCE_FILTERS } from "@/lib/constants";

export function ArticleFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSource = searchParams.get("source") || "all";

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("source");
    } else {
      params.set("source", value);
    }
    router.push(`/articles?${params.toString()}`);
  }

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {SOURCE_FILTERS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilter(filter.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeSource === filter.value
              ? "bg-terracotta-500 text-white"
              : "bg-warm-100 text-text-secondary hover:bg-warm-200"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
