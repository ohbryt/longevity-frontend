"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
        setMessage("구독해 주셔서 감사합니다! 매주 최신 인사이트를 보내드리겠습니다.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "구독 처리 중 문제가 발생했습니다.");
      }
    } catch {
      setStatus("error");
      setMessage("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력하세요"
          required
          className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-terracotta-300 focus:outline-none focus:ring-2 focus:ring-terracotta-100"
        />
        <Button type="submit" className={status === "loading" ? "opacity-60" : ""}>
          {status === "loading" ? "처리 중..." : "구독하기"}
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
