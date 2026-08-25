import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerNav } from "@/data/navigation";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/thenordgate",
    icon: (
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.24 8.24h4.48V23H.24V8.24zm7.53 0h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V23h-4.48v-6.42c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23H7.77V8.24z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592706755292",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/thenordgate",
    icon: (
      <path d="M18.9 2h3.1l-6.79 7.77L23.16 22h-6.25l-4.9-6.4L6.3 22H3.2l7.26-8.3L1 2h6.41l4.43 5.85L18.9 2zm-1.09 18h1.72L7.28 3.9H5.43L17.81 20z" />
    ),
  },
];

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container>
        {/* Compact, secondary company/navigation cluster — deliberately small and asymmetric */}
        <div className="flex flex-col gap-10 pb-12 pt-20 sm:pt-24 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pt-28">
          <div className="max-w-[220px]">
            <Logo variant="white" />
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              {t("tagline")}
            </p>
            <ul className="mt-5 flex items-center gap-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("socialLabel", { network: social.label })}
                    className="text-white/45 transition-colors duration-200 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="flex flex-wrap gap-x-12 gap-y-8" aria-label={t("navLabel")}>
            {footerNav.map((group) => (
              <div key={group.titleKey}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">{t(group.titleKey)}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.key}>
                      <Link href={link.hash ? { pathname: link.href, hash: link.hash } : link.href} className="text-xs text-white/60 transition-colors hover:text-white">
                        {t(link.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Official company, contact and legal details */}
          <div className="min-w-[190px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30">{t("address")}</p>
            <address className="mt-3 flex flex-col gap-2 text-xs not-italic leading-relaxed text-white/60">
              <span className="whitespace-nowrap">
                NordGate ApS
                <br />
                Rødovre Parkvej 301, 2.
                <br />
                2610 Rødovre
                <br />
                Denmark
              </span>
              <span className="flex flex-col gap-1">
                <a href="tel:+4552586580" className="whitespace-nowrap transition-colors hover:text-white">
                  +45 52 58 65 80
                </a>
                <a href="mailto:info@thenordgate.com" className="whitespace-nowrap transition-colors hover:text-white">
                  info@thenordgate.com
                </a>
              </span>
              <span className="text-white/40">CVR: 44931214</span>
            </address>
          </div>
        </div>

        {/* Tiny print */}
        <div className="pb-10">
          <p className="text-[11px] text-white/25">{t("rights", { year })}</p>
        </div>
      </Container>

      {/* The final visual moment of the site — enormous wordmark, cropped through its lower half */}
      <div className="relative h-[clamp(1.9rem,9.5vw,8rem)] w-full overflow-hidden" aria-hidden="true">
        <p className="text-gradient-noise absolute inset-x-0 top-0 select-none whitespace-nowrap text-center text-[clamp(3.4rem,18vw,15rem)] font-bold leading-none tracking-tight opacity-60">
          NORDGATE
        </p>
      </div>
    </footer>
  );
}
