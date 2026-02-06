import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { ValueProposition } from "@/components/home/ValueProposition";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { getFeaturedArticles } from "@/lib/content";

export default function HomePage() {
  const articles = getFeaturedArticles(3);

  return (
    <>
      <HeroSection />
      <FeaturedArticles articles={articles} />
      <ValueProposition />
      <NewsletterCTA />
    </>
  );
}
