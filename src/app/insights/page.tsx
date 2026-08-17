import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { insightArticles, insightCategories } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on Nordic market entry, sales and cross-border business development from NordGate.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on Nordic market entry and sales."
        description="Notes from the field on entering Sweden, Denmark, Norway and Finland — published as NordGate develops them."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border-strong px-4 py-1.5 text-sm text-ink-500"
              >
                {cat}
              </span>
            ))}
          </div>

          {insightArticles.length === 0 ? (
            <div className="mt-16 flex flex-col items-center rounded-2xl border border-dashed border-border-strong px-8 py-24 text-center">
              <Newspaper className="h-8 w-8 text-ink-400" aria-hidden="true" />
              <p className="mt-6 text-lg font-semibold text-ink-900">
                NordGate&apos;s first insights are in progress.
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                We&apos;re preparing perspectives on Nordic market entry, sales execution and
                cross-border business development. Check back soon, or get in touch if you have a
                question we can answer directly.
              </p>
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {insightArticles.map((article) => (
                <a
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="rounded-2xl border border-border-soft p-7 transition-colors hover:border-blue-500"
                >
                  <p className="eyebrow text-blue-600">{article.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{article.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
