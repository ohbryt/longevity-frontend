import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-50 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta-500 text-xs text-white font-serif font-bold">
                L
              </span>
              <span className="font-serif text-lg font-bold text-text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              최신 장수과학 연구 인사이트를 매주 전해드립니다.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-text-secondary uppercase">
              바로가기
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-terracotta-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-text-secondary uppercase">
              연구 소스
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>PubMed / MEDLINE</li>
              <li>bioRxiv / medRxiv</li>
              <li>ClinicalTrials.gov</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. 본 콘텐츠는 교육
            목적으로 제공되며 의학적 조언을 대체하지 않습니다.
          </p>
          <p className="mt-2 tracking-wide">
            Brown Biotech Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
