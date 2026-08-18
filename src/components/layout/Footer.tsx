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
    <footer className="bg-navy-950 text-white">
      <Container>
        {/* CTA — the dominant moment, lots of air around it */}
        <div className="pt-28 pb-24 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-40">
          <ScrollReveal>
            <h2 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem] lg:leading-[1.0]">
              Ready to enter the Nordics?
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/55">
              Tell us about your company and we&apos;ll tell you honestly whether, and how,
              NordGate can help you grow here.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
          </ScrollReveal>
        </div>

        {/* Compact, secondary company/navigation cluster — deliberately small and asymmetric */}
        <div className="flex flex-col gap-10 pb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-[220px]">
            <Logo variant="white" />
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Commercial execution for companies entering and growing in the Nordics.
            </p>
            <p className="coord-label mt-4 text-[11px] text-white/35">Copenhagen · Stockholm · Skopje</p>
          </div>

          <nav className="flex flex-wrap gap-x-12 gap-y-8" aria-label="Footer">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">{group.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Tiny print */}
        <div className="flex flex-col gap-2 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/25">© {year} NordGate. All rights reserved.</p>
          <ul className="flex gap-5">
            {locations.map((loc) => (
              <li key={loc.city} className="coord-label text-[10px] text-white/20">
                {loc.city} {loc.lat.toFixed(1)}°N
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* The final visual moment of the site — enormous, almost full width, barely cropped */}
      <ScrollReveal as="div" start="top 100%" end="top 97%" className="overflow-hidden">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap pl-5 text-[clamp(3.4rem,18vw,15rem)] font-bold leading-[0.8] tracking-tight sm:pl-8 lg:pl-10"
          style={{ color: "rgba(129, 166, 219, 0.22)" }}
        >
          NORDGATE
        </p>
      </ScrollReveal>
    </footer>
  );
}
