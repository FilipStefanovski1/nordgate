import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { locations } from "@/data/locations";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              A Nordic market-entry and business-development company connecting companies,
              capabilities and opportunities across the Nordic region and Eastern Europe.
            </p>
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

          <div>
            <p className="eyebrow text-white/40">Where we work</p>
            <ul className="mt-4 flex flex-col gap-3">
              {locations.map((loc) => (
                <li key={loc.city} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-white/75">{loc.city}</span>
                  <span className="coord-label text-white/35">
                    {loc.lat.toFixed(2)}°N {loc.lon.toFixed(2)}°E
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">© {year} NordGate. All rights reserved.</p>
          <p className="coord-label text-white/35">Copenhagen · Stockholm · Skopje</p>
        </div>
      </Container>
    </footer>
  );
}
