import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CONTENT_PILLARS } from "@/lib/constants";

export function ValueProposition() {
  return (
    <section className="bg-warm-50 py-20">
      <Container>
        <SectionHeading
          title="다루는 주제"
          subtitle="장수과학의 핵심 분야를 깊이 있게 다룹니다"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTENT_PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group rounded-lg border border-border bg-white p-7 transition-all hover:border-warm-300 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100 text-lg group-hover:bg-terracotta-50 transition-colors">
                  {pillar.icon}
                </span>
                <span className="text-xs font-medium tracking-wider text-warm-400 uppercase">
                  Vol. {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
