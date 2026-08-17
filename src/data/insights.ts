export type InsightCategory =
  | "Nordic Market Entry"
  | "Sales"
  | "Sweden"
  | "Denmark"
  | "Norway"
  | "Finland"
  | "Cross-Border Business";

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  publishedAt: string;
};

export const insightCategories: InsightCategory[] = [
  "Nordic Market Entry",
  "Sales",
  "Sweden",
  "Denmark",
  "Norway",
  "Finland",
  "Cross-Border Business",
];

/**
 * No articles have been published yet. This array is intentionally empty —
 * the /insights page renders a designed empty state rather than fabricated content.
 * Populate with real InsightArticle entries when NordGate publishes its first pieces.
 */
export const insightArticles: InsightArticle[] = [];
