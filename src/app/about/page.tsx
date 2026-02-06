import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "소개",
  description: `${SITE_NAME}에 대해 알아보세요`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
