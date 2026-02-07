import type { ContentPillar, NavLink } from "./types";

export const SITE_NAME = "Longevity Lab";
export const SITE_DESCRIPTION =
  "최신 건강수명(healthspan) 논문을 분석하여 실생활 인사이트로 전하는 리서치 플랫폼";

export const NAV_LINKS: NavLink[] = [
  { label: "홈", href: "/" },
  { label: "아티클", href: "/articles" },
  { label: "소개", href: "/about" },
  { label: "뉴스레터", href: "/newsletter" },
];

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    icon: "🔬",
    title: "노화 역전 연구",
    description:
      "세놀리틱스, 줄기세포, 텔로미어 연구 등 최신 노화 역전 과학을 쉽게 풀어드립니다.",
  },
  {
    icon: "💊",
    title: "대사 건강",
    description:
      "인슐린 저항성, GLP-1, 미토콘드리아 건강 등 대사질환과 장수의 연결고리를 탐구합니다.",
  },
  {
    icon: "🧬",
    title: "후성유전학과 에이징",
    description:
      "후성유전체 시계, DNA 메틸화, 유전자 발현 조절을 통한 노화 이해와 대응법을 다룹니다.",
  },
  {
    icon: "🧪",
    title: "보충제와 약물",
    description:
      "NAD+, NMN, 라파마이신, 메트포르민 등 장수 관련 물질의 최신 임상 근거를 분석합니다.",
  },
  {
    icon: "🏃",
    title: "생활습관과 장수",
    description:
      "운동, 수면, 식이 패턴이 노화에 미치는 영향을 과학적 근거와 함께 안내합니다.",
  },
  {
    icon: "🎗️",
    title: "암 진단과 치료",
    description:
      "조기 진단 바이오마커, 면역항암제, 표적치료 등 최신 종양학 연구와 임상시험을 분석합니다.",
  },
];

export const SOURCE_FILTERS = [
  { value: "all", label: "전체" },
  { value: "pubmed", label: "PubMed" },
  { value: "biorxiv", label: "bioRxiv" },
  { value: "medrxiv", label: "medRxiv" },
  { value: "clinical_trial", label: "ClinicalTrials.gov" },
];
