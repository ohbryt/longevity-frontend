import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-warm-100 via-warm-50 to-cream py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-serif text-sm italic tracking-widest text-warm-500 uppercase">
            Evidence-Based Longevity Science
          </p>
          <h1 className="text-4xl font-bold leading-tight text-text-primary md:text-[3.25rem]">
            가장 앞선
            <br />
            <span className="text-terracotta-500">헬스스팬 인사이트</span>
          </h1>

          <div className="divider-ornament mx-auto mt-8 max-w-xs">
            <span className="text-lg text-warm-400">&loz;</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            최신 노화과학 논문을 분석하고, 실생활에 적용할 수 있는
            <br className="hidden sm:block" />
            인사이트로 전해드립니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/articles">최신 아티클 보기</Button>
            <Button href="/newsletter" variant="outline">
              뉴스레터 구독하기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
