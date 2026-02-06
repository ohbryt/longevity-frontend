"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Lang } from "./dictionary";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ko",
  toggleLang: () => {},
});

const STORAGE_KEY = "longevity-lab-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en") setLang("en");
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
