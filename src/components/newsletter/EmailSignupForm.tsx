"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { t } from "@/lib/i18n/dictionary";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { lang } = useLanguage();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(t("form.success", lang));
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || t("form.error", lang));
      }
    } catch {
      setStatus("error");
      setMessage(t("form.networkError", lang));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("form.placeholder", lang)}
          required
          className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-terracotta-300 focus:outline-none focus:ring-2 focus:ring-terracotta-100"
        />
        <Button type="submit" className={status === "loading" ? "opacity-60" : ""}>
          {status === "loading" ? t("form.loading", lang) : t("form.submit", lang)}
        </Button>
      </div>
      {message && (
        <p
          className={`mt-3 text-center text-sm ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
