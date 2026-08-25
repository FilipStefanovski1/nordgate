import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { routing, localeHreflang, localeOpenGraph, type Locale } from "@/i18n/routing";
import { buildAlternates } from "@/lib/seo/alternates";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL("https://thenordgate.com"),
    title: { default: t("title"), template: `%s | NordGate` },
    description: t("description"),
    alternates: buildAlternates("/", locale as Locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "NordGate",
      type: "website",
      locale: localeOpenGraph[locale as Locale],
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description") },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={localeHreflang[locale as Locale]}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Progressive-enhancement flag for the reveal system: only hide
            .reveal content pre-animation once JS is confirmed running and
            the visitor hasn't asked for reduced motion. Content stays fully
            visible by default otherwise. Runs before hydration/paint. */}
        <Script
          id="reveal-js-flag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js');}}catch(e){}",
          }}
        />
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
