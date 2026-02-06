export interface Paper {
  title: string;
  authors: string[];
  abstract: string;
  journal: string;
  doi: string;
  pub_date: string;
  url: string;
  full_text: string | null;
  relevance_score: number;
  topics: string[];
}

export interface Citation {
  doi: string;
  title: string;
  journal: string;
}

export interface Article {
  paper: Paper;
  content_type: string;
  korean_title: string;
  korean_summary: string;
  korean_body: string;
  english_title: string;
  english_summary: string;
  key_insights: string[];
  practical_applications: string[];
  citations: Citation[];
  fact_check_notes: string[];
  confidence_score: number;
  created_at: string;
  status: "ready_for_review" | "needs_revision";
  // computed fields
  slug?: string;
  source?: string;
}

export interface ContentPillar {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
