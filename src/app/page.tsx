import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { ValueProposition } from "@/components/home/ValueProposition";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <ValueProposition />
      <NewsletterCTA />
    </>
  );
}
