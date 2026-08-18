import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightArticles } from "@/data/insights";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <article className="bg-white pt-32 pb-20 sm:pt-36 sm:pb-24">
      <Container className="max-w-3xl">
        <Eyebrow>{article.category}</Eyebrow>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">{article.excerpt}</p>
      </Container>
    </article>
  );
}
