import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerNav } from "@/data/navigation";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  /** Optional optical-size override where a mark's glyph doesn't fill its box. */
  size?: string;
};

const socialLinks: SocialLink[] = [
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
    label: "X",
    href: "https://x.com/thenordgate",
    // Official X mark geometry, not an approximation — the previous path had
    // uneven stroke weights that read as slightly crooked next to the others.
    // Its glyph is inset in the 24px box (~81% fill) where the other three
    // run edge to edge, so it needs a nudge up in size to look the same
    // weight in the row.
    size: "h-5 w-5",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thenordgate/",
    icon: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.44a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
    ),
  },
];

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container>
        {/* One grid rather than three free-floating blocks — the columns share
            a track width, so they can't drift apart into uneven gaps. */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-14 pt-20 sm:grid-cols-3 sm:pt-24 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-x-12 lg:pt-28">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 lg:max-w-[280px]">
            <Logo variant="white" />
            <p className="mt-5 text-sm leading-relaxed text-white/55">{t("tagline")}</p>
            <ul className="mt-6 flex items-center gap-5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("socialLabel", { network: social.label })}
                    className="block text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={social.size ?? "h-[18px] w-[18px]"}
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.titleKey} aria-label={t(group.titleKey)}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                {t(group.titleKey)}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.hash ? { pathname: link.href, hash: link.hash } : link.href}
                      className="text-sm text-white/65 transition-colors duration-200 hover:text-white"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">{t("rights", { year })}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-xs text-white/55 transition-colors duration-200 hover:text-white"
              >
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-xs text-white/55 transition-colors duration-200 hover:text-white"
              >
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* The final visual moment of the site — enormous wordmark, cropped through its lower half */}
      <div className="relative h-[clamp(1.45rem,7.4vw,6.3rem)] w-full overflow-hidden" aria-hidden="true">
        <p className="text-gradient-noise absolute inset-x-0 top-0 select-none whitespace-nowrap text-center text-[clamp(2.7rem,14vw,12rem)] font-bold leading-none tracking-tight opacity-60">
          NORDGATE
        </p>
      </div>
    </footer>
  );
}
