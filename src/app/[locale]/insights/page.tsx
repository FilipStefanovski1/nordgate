import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo/alternates";
import type { Locale } from "@/i18n/routing";
import { Newspaper } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { insightArticles, insightCategories } from "@/data/insights";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.insights" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/insights", locale as Locale),
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("insights");

  return (
    <>
      <PageHeader
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroBody")}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          {insightArticles.length > 0 && (
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
          )}

          {insightArticles.length === 0 ? (
            <div className="mt-16 flex flex-col items-center rounded-2xl border border-dashed border-border-strong px-8 py-24 text-center">
              <Newspaper className="h-8 w-8 text-ink-400" aria-hidden="true" />
              <p className="mt-6 text-lg font-semibold text-ink-900">
                {t("emptyTitle")}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                {t("emptyBody")}
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
