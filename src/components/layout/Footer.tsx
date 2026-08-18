import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNav, headerCta, headerSecondaryCta } from "@/data/navigation";
import { locations } from "@/data/locations";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <Container className="pt-20 sm:pt-24">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-16 sm:pb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-cyan-300">Get started</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Ready to enter the Nordics?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
              Tell us about your company and we&apos;ll tell you honestly whether, and how,
              NordGate can help you grow here.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={headerCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-600"
            >
              {headerCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href={headerSecondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              {headerSecondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Commercial execution for companies entering and growing in the Nordics.
            </p>
            <p className="coord-label mt-6 text-white/40">Copenhagen · Stockholm · Skopje</p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <p className="eyebrow text-white/40">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">© {year} NordGate. All rights reserved.</p>
          <ul className="flex gap-6">
            {locations.map((loc) => (
              <li key={loc.city} className="coord-label text-white/35">
                {loc.city} {loc.lat.toFixed(1)}°N
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Oversized editorial wordmark — deliberately cropped, architectural rather than a literal logo lockup */}
      <ScrollReveal
        as="div"
        y={20}
        className="mt-10 h-[clamp(3.25rem,10vw,8.5rem)] overflow-hidden sm:mt-14"
        start="top 100%"
        end="top 96%"
      >
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap pl-4 text-[clamp(4.5rem,19vw,15rem)] font-bold leading-none tracking-tight text-white/[0.08] sm:pl-8"
        >
          NORDGATE
        </p>
      </ScrollReveal>
    </footer>
  );
}
