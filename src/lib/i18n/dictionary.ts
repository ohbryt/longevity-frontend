export type Lang = "ko" | "en";

const dictionary = {
  // Navigation
  "nav.home": { ko: "홈", en: "Home" },
  "nav.articles": { ko: "아티클", en: "Articles" },
  "nav.about": { ko: "소개", en: "About" },
  "nav.newsletter": { ko: "뉴스레터", en: "Newsletter" },

  // Hero
  "hero.tagline": {
    ko: "Evidence-Based Longevity Science",
    en: "Evidence-Based Longevity Science",
  },
  "hero.title1": { ko: "가장 앞선", en: "The Latest" },
  "hero.title2": { ko: "헬스스팬 인사이트", en: "Healthspan Insights" },
  "hero.description": {
    ko: "최신 노화과학 논문을 분석하고, 실생활에 적용할 수 있는\n인사이트로 전해드립니다.",
    en: "We analyze the latest aging science papers and deliver\nactionable insights for everyday life.",
  },
  "hero.cta.articles": { ko: "최신 아티클 보기", en: "Browse Articles" },
  "hero.cta.newsletter": { ko: "뉴스레터 구독하기", en: "Subscribe" },

  // Featured Articles
  "featured.title": { ko: "최신 연구 인사이트", en: "Latest Research Insights" },
  "featured.subtitle": {
    ko: "이번 주 가장 주목할 만한 건강수명(healthspan) 연구를 소개합니다",
    en: "Highlighting the most notable healthspan research this week",
  },

  // Value Proposition
  "value.title": { ko: "다루는 주제", en: "Topics We Cover" },
  "value.subtitle": {
    ko: "건강수명(healthspan)의 핵심 분야를 깊이 있게 다룹니다",
    en: "In-depth coverage of key healthspan research areas",
  },

  // Content Pillars
  "pillar.1.title": { ko: "노화 역전 연구", en: "Aging Reversal" },
  "pillar.1.desc": {
    ko: "세놀리틱스, 줄기세포, 텔로미어 연구 등 최신 노화 역전 과학을 쉽게 풀어드립니다.",
    en: "Senolytics, stem cells, telomere research — the latest science on reversing aging, explained simply.",
  },
  "pillar.2.title": { ko: "대사 건강", en: "Metabolic Health" },
  "pillar.2.desc": {
    ko: "인슐린 저항성, GLP-1, 미토콘드리아 건강 등 대사질환과 장수의 연결고리를 탐구합니다.",
    en: "Exploring insulin resistance, GLP-1, mitochondrial health, and the link between metabolic disease and longevity.",
  },
  "pillar.3.title": { ko: "후성유전학과 에이징", en: "Epigenetics & Aging" },
  "pillar.3.desc": {
    ko: "후성유전체 시계, DNA 메틸화, 유전자 발현 조절을 통한 노화 이해와 대응법을 다룹니다.",
    en: "Epigenetic clocks, DNA methylation, and gene expression regulation — understanding and addressing aging.",
  },
  "pillar.4.title": { ko: "보충제와 약물", en: "Supplements & Drugs" },
  "pillar.4.desc": {
    ko: "NAD+, NMN, 라파마이신, 메트포르민 등 장수 관련 물질의 최신 임상 근거를 분석합니다.",
    en: "Analyzing the latest clinical evidence on NAD+, NMN, rapamycin, metformin, and other longevity compounds.",
  },
  "pillar.5.title": { ko: "생활습관과 장수", en: "Lifestyle & Longevity" },
  "pillar.5.desc": {
    ko: "운동, 수면, 식이 패턴이 노화에 미치는 영향을 과학적 근거와 함께 안내합니다.",
    en: "How exercise, sleep, and dietary patterns impact aging — backed by scientific evidence.",
  },
  "pillar.6.title": { ko: "암 진단과 치료", en: "Cancer Dx & Therapeutics" },
  "pillar.6.desc": {
    ko: "조기 진단 바이오마커, 면역항암제, 표적치료 등 최신 종양학 연구와 임상시험을 분석합니다.",
    en: "Early-detection biomarkers, immunotherapy, targeted therapy — the latest oncology research and clinical trials.",
  },

  // Newsletter CTA
  "cta.tagline": { ko: "Weekly Research Digest", en: "Weekly Research Digest" },
  "cta.title": {
    ko: "매주 최신 건강수명(healthspan) 인사이트를 받아보세요",
    en: "Get weekly healthspan insights delivered to your inbox",
  },
  "cta.description": {
    ko: "PubMed, bioRxiv 등 주요 학술지의 최신 연구를 분석하여 알기 쉽게 전해드립니다.",
    en: "We analyze the latest research from PubMed, bioRxiv, and more — delivered in plain language.",
  },
  "cta.button": { ko: "무료 뉴스레터 구독", en: "Subscribe for Free" },

  // Article Card
  "article.read": { ko: "읽기", en: "Read" },
  "article.noArticles": {
    ko: "아직 발행된 아티클이 없습니다.",
    en: "No articles have been published yet.",
  },
  "article.backToList": { ko: "아티클 목록으로", en: "Back to Articles" },
  "article.bodyNotice": {
    ko: "",
    en: "Full article content is available in Korean.",
  },

  // Article Detail
  "articles.title": { ko: "아티클", en: "Articles" },
  "articles.subtitle": {
    ko: "최신 건강수명(healthspan) 연구를 의사과학자의 시선으로 분석합니다",
    en: "Analyzing the latest healthspan research through a physician-scientist's lens",
  },

  // Source Filters
  "filter.all": { ko: "전체", en: "All" },

  // Sidebar
  "sidebar.keyInsights": { ko: "핵심 인사이트", en: "Key Insights" },
  "sidebar.practicalTips": { ko: "실용적 적용", en: "Practical Applications" },
  "sidebar.paperInfo": { ko: "원문 논문 정보", en: "Original Paper Info" },
  "sidebar.citations": { ko: "참고문헌", en: "References" },
  "sidebar.journal": { ko: "저널", en: "Journal" },
  "sidebar.pubDate": { ko: "출판일", en: "Published" },
  "sidebar.authors": { ko: "저자", en: "Authors" },
  "sidebar.authorsMore": { ko: "외 {n}명", en: "and {n} more" },
  "sidebar.relevance": { ko: "관련성 점수", en: "Relevance Score" },

  // Confidence
  "confidence.high": { ko: "높은 신뢰도", en: "High Confidence" },
  "confidence.medium": { ko: "보통 신뢰도", en: "Medium Confidence" },
  "confidence.low": { ko: "검토 필요", en: "Needs Review" },

  // Footer
  "footer.description": {
    ko: "최신 건강수명(healthspan) 연구 인사이트를 매주 전해드립니다.",
    en: "Weekly healthspan research insights delivered to you.",
  },
  "footer.quickLinks": { ko: "바로가기", en: "Quick Links" },
  "footer.sources": { ko: "연구 소스", en: "Research Sources" },
  "footer.disclaimer": {
    ko: "본 콘텐츠는 교육 목적으로 제공되며 의학적 조언을 대체하지 않습니다.",
    en: "Content is for educational purposes only and does not replace medical advice.",
  },

  // Newsletter Page
  "newsletter.title": {
    ko: "건강수명(healthspan) 뉴스레터",
    en: "Healthspan Newsletter",
  },
  "newsletter.description": {
    ko: "매주 엄선된 건강수명(healthspan) 연구 인사이트를 한국어로 전해드립니다. PubMed, bioRxiv, medRxiv의 최신 논문을 의사과학자가 직접 분석합니다.",
    en: "Curated healthspan research insights delivered weekly. A physician-scientist analyzes the latest papers from PubMed, bioRxiv, and medRxiv.",
  },
  "newsletter.signupTitle": { ko: "무료 구독 신청", en: "Subscribe for Free" },
  "newsletter.signupDesc": {
    ko: "스팸 없이, 주 1회 핵심 인사이트만 전달합니다.",
    en: "No spam — just key insights, once a week.",
  },
  "newsletter.feature1.title": { ko: "주간 리서치 리뷰", en: "Weekly Research Review" },
  "newsletter.feature1.desc": {
    ko: "가장 중요한 논문 3-5편을 선별하여 핵심 내용을 요약합니다.",
    en: "We curate 3-5 key papers and summarize their core findings.",
  },
  "newsletter.feature2.title": { ko: "실용적 인사이트", en: "Practical Insights" },
  "newsletter.feature2.desc": {
    ko: "연구 결과를 일상에 적용할 수 있는 실천 가이드를 제공합니다.",
    en: "Actionable guides to apply research findings in everyday life.",
  },
  "newsletter.feature3.title": { ko: "팩트체크 완료", en: "Fact-Checked" },
  "newsletter.feature3.desc": {
    ko: "AI 팩트체크를 거친 검증된 정보만 전달합니다.",
    en: "Only verified information, reviewed through AI fact-checking.",
  },

  // Email Signup Form
  "form.placeholder": {
    ko: "이메일 주소를 입력하세요",
    en: "Enter your email address",
  },
  "form.submit": { ko: "구독하기", en: "Subscribe" },
  "form.loading": { ko: "처리 중...", en: "Processing..." },
  "form.success": {
    ko: "구독해 주셔서 감사합니다! 매주 최신 인사이트를 보내드리겠습니다.",
    en: "Thank you for subscribing! We'll send you weekly insights.",
  },
  "form.error": {
    ko: "구독 처리 중 문제가 발생했습니다.",
    en: "There was a problem processing your subscription.",
  },
  "form.networkError": {
    ko: "네트워크 오류가 발생했습니다. 다시 시도해 주세요.",
    en: "A network error occurred. Please try again.",
  },

  // About Page
  "about.subtitle": { ko: "The Healthspan Briefing", en: "The Healthspan Briefing" },
  "about.intro": {
    ko: "은 PubMed, bioRxiv, medRxiv, ClinicalTrials.gov 등 세계 주요 학술 데이터베이스에서 헬스스팬(healthspan) 관련 최신 논문을 선별하고, 이를 한국어로 분석하여 전달하는 플랫폼입니다.",
    en: " curates the latest healthspan research from major academic databases — PubMed, bioRxiv, medRxiv, ClinicalTrials.gov — analyzing and delivering it in accessible language.",
  },
  "about.missionTitle": { ko: "플랫폼 미션", en: "Our Mission" },
  "about.missionText": {
    ko: "과학 논문은 전문가만 읽을 수 있어야 할까요? 우리는 그렇지 않다고 생각합니다. 검증된 과학적 근거를 바탕으로, 누구나 이해할 수 있는 언어로 건강 정보를 전달하는 것이 이 플랫폼의 목표입니다.",
    en: "Should scientific papers be accessible only to experts? We don't think so. Our goal is to deliver health information in a language everyone can understand, grounded in verified scientific evidence.",
  },
  "about.feature.daily": { ko: "매일 업데이트", en: "Daily Updates" },
  "about.feature.dailyDesc": {
    ko: "매일 최신 논문을 자동 수집·분석하여 새로운 아티클을 업데이트합니다. 사이트에는 항상 가장 최신 연구가 반영됩니다.",
    en: "New papers are automatically collected and analyzed daily. The site always reflects the most current research.",
  },
  "about.feature.weekly": { ko: "주간 뉴스레터", en: "Weekly Newsletter" },
  "about.feature.weeklyDesc": {
    ko: "매주 월요일, 한 주간 가장 주목할 만한 연구를 선별하여 이메일로 전해드립니다.",
    en: "Every Monday, we curate the week's most notable research and deliver it to your inbox.",
  },
  "about.feature.evidence": { ko: "근거 기반", en: "Evidence-Based" },
  "about.feature.evidenceDesc": {
    ko: "모든 콘텐츠는 동료심사(peer-reviewed) 논문 또는 프리프린트 연구에 기반합니다.",
    en: "All content is based on peer-reviewed papers or preprint research.",
  },
  "about.feature.confidence": { ko: "신뢰도 표시", en: "Confidence Scores" },
  "about.feature.confidenceDesc": {
    ko: "각 아티클에 AI 팩트체크 기반 신뢰도 점수를 제공합니다.",
    en: "Each article includes an AI fact-check-based confidence score.",
  },
  "about.feature.practical": { ko: "실용적 관점", en: "Practical Perspective" },
  "about.feature.practicalDesc": {
    ko: "연구 결과를 일상에 적용할 수 있는 인사이트로 변환합니다.",
    en: "We transform research findings into actionable insights for daily life.",
  },
  "about.feature.koreanFirst": { ko: "한국어 우선", en: "Bilingual" },
  "about.feature.koreanFirstDesc": {
    ko: "한국 독자를 위해 모든 콘텐츠를 한국어로 작성합니다.",
    en: "Content is written primarily in Korean, with English UI support.",
  },
  "about.sourcesTitle": { ko: "연구 소스", en: "Research Sources" },
  "about.sourcesIntro": {
    ko: "콘텐츠 생성에는 Gemini AI와 GPT-4를 활용하며, 원문 논문에 대한 팩트체크를 거쳐 정확성을 보장합니다. 주요 데이터 소스는 다음과 같습니다:",
    en: "We use Gemini AI and GPT-4 for content generation, with fact-checking against original papers to ensure accuracy. Our primary data sources include:",
  },
  "about.source.pubmed": {
    ko: "의생명과학 분야 최대 학술 데이터베이스",
    en: "The largest academic database in biomedical sciences",
  },
  "about.source.biorxiv": {
    ko: "생물학 분야 프리프린트 서버",
    en: "Biology preprint server",
  },
  "about.source.medrxiv": {
    ko: "의학 분야 프리프린트 서버",
    en: "Medical preprint server",
  },
  "about.source.ctgov": {
    ko: "NIH 임상시험 등록 데이터베이스",
    en: "NIH clinical trials registry",
  },
} as const;

export type DictKey = keyof typeof dictionary;

export function t(key: DictKey, lang: Lang): string {
  return dictionary[key][lang];
}
