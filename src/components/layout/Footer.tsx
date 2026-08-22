import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { locations } from "@/data/locations";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container>
        {/* Compact, secondary company/navigation cluster — deliberately small and asymmetric */}
        <div className="flex flex-col gap-10 pb-12 pt-20 sm:pt-24 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pt-28">
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
                    <li key={link.label}>
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

      {/* The final visual moment of the site — enormous, centered, barely cropped */}
      <ScrollReveal as="div" start="top 100%" end="top 97%" className="overflow-hidden">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap text-center text-[clamp(3.4rem,18vw,15rem)] font-bold leading-[0.8] tracking-tight"
          style={{ color: "rgba(129, 166, 219, 0.22)" }}
        >
          NORDGATE
        </p>
      </ScrollReveal>
    </footer>
  );
}
