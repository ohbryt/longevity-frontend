import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "소개",
  description: `${SITE_NAME}에 대해 알아보세요`,
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-warm-100 text-5xl">
              🧬
            </div>
            <h1 className="text-3xl font-bold text-text-primary">
              {SITE_NAME}
            </h1>
            <p className="mt-2 text-text-secondary">
              The Healthspan Briefing
            </p>
          </div>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              <strong className="text-text-primary">{SITE_NAME}</strong>은
              PubMed, bioRxiv, medRxiv, ClinicalTrials.gov 등 세계 주요 학술
              데이터베이스에서 헬스스팬(healthspan) 관련 최신 논문을 선별하고, 이를 한국어로
              분석하여 전달하는 플랫폼입니다.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-text-primary">
              플랫폼 미션
            </h2>

            <p>
              과학 논문은 전문가만 읽을 수 있어야 할까요? 우리는 그렇지 않다고
              생각합니다. 검증된 과학적 근거를 바탕으로, 누구나 이해할 수 있는
              언어로 건강 정보를 전달하는 것이 이 플랫폼의 목표입니다.
            </p>

            <ul className="space-y-3 pl-5 list-disc marker:text-terracotta-400">
              <li>
                <strong className="text-text-primary">매일 업데이트</strong>{" "}
                &mdash; 매일 최신 논문을 자동 수집·분석하여 새로운 아티클을
                업데이트합니다. 사이트에는 항상 가장 최신 연구가 반영됩니다.
              </li>
              <li>
                <strong className="text-text-primary">주간 뉴스레터</strong>{" "}
                &mdash; 매주 월요일, 한 주간 가장 주목할 만한 연구를 선별하여
                이메일로 전해드립니다.
              </li>
              <li>
                <strong className="text-text-primary">근거 기반</strong> &mdash;
                모든 콘텐츠는 동료심사(peer-reviewed) 논문 또는 프리프린트
                연구에 기반합니다.
              </li>
              <li>
                <strong className="text-text-primary">신뢰도 표시</strong>{" "}
                &mdash; 각 아티클에 AI 팩트체크 기반 신뢰도 점수를 제공합니다.
              </li>
              <li>
                <strong className="text-text-primary">실용적 관점</strong>{" "}
                &mdash; 연구 결과를 일상에 적용할 수 있는 인사이트로 변환합니다.
              </li>
              <li>
                <strong className="text-text-primary">한국어 우선</strong>{" "}
                &mdash; 한국 독자를 위해 모든 콘텐츠를 한국어로 작성합니다.
              </li>
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-text-primary">
              연구 소스
            </h2>

            <p>
              콘텐츠 생성에는 Gemini AI와 GPT-4를 활용하며, 원문 논문에 대한
              팩트체크를 거쳐 정확성을 보장합니다. 주요 데이터 소스는 다음과
              같습니다:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  name: "PubMed / MEDLINE",
                  desc: "의생명과학 분야 최대 학술 데이터베이스",
                },
                {
                  name: "bioRxiv",
                  desc: "생물학 분야 프리프린트 서버",
                },
                {
                  name: "medRxiv",
                  desc: "의학 분야 프리프린트 서버",
                },
                {
                  name: "ClinicalTrials.gov",
                  desc: "NIH 임상시험 등록 데이터베이스",
                },
              ].map((source) => (
                <div
                  key={source.name}
                  className="rounded-lg border border-border bg-warm-50 p-4"
                >
                  <p className="font-medium text-text-primary">{source.name}</p>
                  <p className="mt-1 text-sm text-text-muted">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
