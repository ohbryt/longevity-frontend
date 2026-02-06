import type { Metadata } from "next";
import { NewsletterPageContent } from "@/components/newsletter/NewsletterPageContent";

export const metadata: Metadata = {
  title: "뉴스레터",
  description: "매주 최신 건강수명(healthspan) 인사이트를 이메일로 받아보세요",
};

export default function NewsletterPage() {
  return <NewsletterPageContent />;
}
