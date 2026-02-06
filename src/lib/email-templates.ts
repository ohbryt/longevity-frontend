import { SITE_NAME } from "./constants";
import type { Article } from "./types";

const BRAND_COLOR = "#c46140";
const BG_COLOR = "#faf8f5";
const TEXT_COLOR = "#3d3530";
const MUTED_COLOR = "#8a7e76";

function layout(content: string, preheader = ""): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${SITE_NAME}</title>
</head>
<body style="margin:0;padding:0;background:${BG_COLOR};font-family:'Noto Sans KR',-apple-system,sans-serif;color:${TEXT_COLOR};">
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG_COLOR};">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">
<!-- Header -->
<tr><td style="padding:32px 32px 24px;text-align:center;border-bottom:1px solid #ede8e3;">
  <div style="display:inline-block;width:36px;height:36px;line-height:36px;border-radius:50%;background:${BRAND_COLOR};color:#fff;font-weight:700;font-size:16px;text-align:center;">L</div>
  <div style="margin-top:8px;font-size:18px;font-weight:700;letter-spacing:0.5px;">${SITE_NAME}</div>
</td></tr>
<!-- Content -->
<tr><td style="padding:32px;">
${content}
</td></tr>
<!-- Footer -->
<tr><td style="padding:24px 32px;background:#faf8f5;text-align:center;font-size:12px;color:${MUTED_COLOR};border-top:1px solid #ede8e3;">
  <p style="margin:0;">본 메일은 ${SITE_NAME} 뉴스레터 구독자에게 발송됩니다.</p>
  <p style="margin:8px 0 0;">
    <a href="https://longevity-lab.io" style="color:${BRAND_COLOR};text-decoration:none;">웹사이트 방문</a>
    &nbsp;&middot;&nbsp;
    <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:${MUTED_COLOR};text-decoration:underline;">구독 취소</a>
  </p>
  <p style="margin:8px 0 0;">Brown Biotech Inc.</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export function welcomeEmailHtml(): string {
  return layout(
    `<h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:${TEXT_COLOR};">
  구독을 환영합니다!
</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${TEXT_COLOR};">
  ${SITE_NAME} 뉴스레터에 가입해 주셔서 감사합니다.
</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:${TEXT_COLOR};">
  매주 엄선된 건강수명(healthspan) 연구를 분석하여, 실생활에 적용할 수 있는 인사이트를 전해드리겠습니다. PubMed, bioRxiv, medRxiv, ClinicalTrials.gov의 최신 연구를 AI가 분석하고 전문가가 검수합니다.
</p>
<div style="text-align:center;">
  <a href="https://longevity-lab.io/articles" style="display:inline-block;padding:12px 28px;background:${BRAND_COLOR};color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
    최신 리서치 보기
  </a>
</div>`,
    "Longevity Lab 뉴스레터 구독이 완료되었습니다."
  );
}

export function digestEmailHtml(articles: Article[]): string {
  const articleCards = articles
    .map(
      (a) => `
<div style="margin-bottom:24px;padding:20px;border:1px solid #ede8e3;border-radius:10px;">
  <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:${BRAND_COLOR};margin-bottom:6px;">
    ${a.source || "Research"}
  </div>
  <h2 style="margin:0 0 8px;font-size:17px;font-weight:700;line-height:1.5;">
    <a href="https://longevity-lab.io/articles/${a.slug}" style="color:${TEXT_COLOR};text-decoration:none;">${a.korean_title}</a>
  </h2>
  <p style="margin:0 0 12px;font-size:13px;line-height:1.6;color:${MUTED_COLOR};">
    ${a.korean_summary.slice(0, 150)}...
  </p>
  <a href="https://longevity-lab.io/articles/${a.slug}" style="font-size:13px;color:${BRAND_COLOR};text-decoration:none;font-weight:600;">
    자세히 읽기 &rarr;
  </a>
</div>`
    )
    .join("");

  const today = new Date();
  const weekStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return layout(
    `<h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:${TEXT_COLOR};">
  Weekly Research Digest
</h1>
<p style="margin:0 0 24px;font-size:13px;color:${MUTED_COLOR};">${weekStr}</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:${TEXT_COLOR};">
  이번 주 주목할 만한 건강수명(healthspan) 연구 ${articles.length}편을 선별했습니다.
</p>
${articleCards}
<div style="margin-top:8px;text-align:center;">
  <a href="https://longevity-lab.io/articles" style="display:inline-block;padding:12px 28px;background:${BRAND_COLOR};color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
    모든 리서치 보기
  </a>
</div>`,
    `이번 주 건강수명(healthspan) 리서치 ${articles.length}편이 도착했습니다.`
  );
}
