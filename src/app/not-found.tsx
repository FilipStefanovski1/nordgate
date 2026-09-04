import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import enMessages from "../../messages/en.json";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

/**
 * Root-level not-found boundary. Next.js resolves a genuinely unmatched URL
 * (no page anywhere matches it, prefixed or not) here rather than at a
 * nested `[locale]/not-found.tsx` — that file only ever fires for an
 * explicit `notFound()` call from within an already-resolved locale/page,
 * never for "no route matches this path" (confirmed empirically: a bad URL
 * under every locale, including `/sv/...`, renders this file).
 *
 * This sits outside `[locale]/layout.tsx`. Two things here are deliberately
 * NOT the real `Header`/`Footer`/`NextIntlClientProvider`: both locale
 * detection and `NextIntlClientProvider` itself force every route in the
 * app to render dynamically instead of statically prerendering the moment
 * they're used anywhere in the tree — confirmed empirically by bisecting
 * this file down to a single component at a time and comparing build
 * output. That regression (28 pages static -> dynamic) is worse than a
 * lighter-weight error page, so this renders plain English content with no
 * next-intl runtime involved at all: `en.json` is imported directly as a
 * static value, never read from the request.
 */
export default function RootNotFound() {
  const t = enMessages.errors;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full border-b border-border-soft bg-white py-3.5">
          <Container className="flex items-center justify-between gap-6">
            <Logo />
            <a
              href="https://calendar.app.google/KGMrBcRV6UitHaDb6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nordgate inline-flex h-[42px] items-center justify-center rounded px-5 text-sm font-semibold focus-visible:outline-[var(--nordgate-blue)]"
            >
              {enMessages.nav.bookMeeting}
            </a>
          </Container>
        </header>

        <main className="flex-1">
          <PageHeader
            eyebrow={t.notFoundEyebrow}
            title={t.notFoundTitle}
            description={t.notFoundBody}
          />
          <section className="bg-white pb-24 sm:pb-28">
            <Container>
              <Link
                href="/"
                className="btn-nordgate inline-flex h-[50px] items-center justify-center rounded px-6 text-[15px] font-semibold focus-visible:outline-[var(--nordgate-blue)]"
              >
                {t.backHome}
              </Link>
            </Container>
          </section>
        </main>
      </body>
    </html>
  );
}
