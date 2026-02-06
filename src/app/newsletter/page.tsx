import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { EmailSignupForm } from "@/components/newsletter/EmailSignupForm";

export const metadata: Metadata = {
  title: "뉴스레터",
  description: "매주 최신 건강수명(healthspan) 인사이트를 이메일로 받아보세요",
};

export default function NewsletterPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-5xl">📬</span>
          <h1 className="mt-4 text-3xl font-bold text-text-primary md:text-4xl">
            건강수명(healthspan) 뉴스레터
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            매주 엄선된 건강수명(healthspan) 연구 인사이트를 한국어로 전해드립니다. PubMed,
            bioRxiv, medRxiv의 최신 논문을 의사과학자가 직접 분석합니다.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-white p-8">
            <h2 className="mb-2 text-xl font-bold text-text-primary">
              무료 구독 신청
            </h2>
            <p className="mb-6 text-sm text-text-muted">
              스팸 없이, 주 1회 핵심 인사이트만 전달합니다.
            </p>
            <EmailSignupForm />
          </div>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                icon: "📄",
                title: "주간 리서치 리뷰",
                desc: "가장 중요한 논문 3-5편을 선별하여 핵심 내용을 요약합니다.",
              },
              {
                icon: "💡",
                title: "실용적 인사이트",
                desc: "연구 결과를 일상에 적용할 수 있는 실천 가이드를 제공합니다.",
              },
              {
                icon: "🔍",
                title: "팩트체크 완료",
                desc: "AI 팩트체크를 거친 검증된 정보만 전달합니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-warm-50 p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-2 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
