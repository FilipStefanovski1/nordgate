import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { companies, type Company } from "@/data/companies";

export function CompanyMarquee() {
  if (companies.length === 0) return null;

  return (
    <section className="border-t border-border-soft bg-white py-16 sm:py-20">
      <Container>
        <p className="eyebrow text-ink-400">Selected companies we&apos;ve supported</p>
      </Container>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max items-center gap-16 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-12 motion-reduce:gap-y-8 motion-reduce:px-6">
          <LogoSet />
          <LogoSet duplicate className="motion-reduce:hidden" />
        </div>
      </div>
    </section>
  );
}

function LogoSet({ duplicate = false, className }: { duplicate?: boolean; className?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center gap-16", className)} aria-hidden={duplicate ? "true" : undefined}>
      {companies.map((company) => (
        <LogoItem key={company.name} company={company} interactive={!duplicate} />
      ))}
    </div>
  );
}

function LogoItem({ company, interactive }: { company: Company; interactive: boolean }) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={company.logo}
      alt={interactive ? company.alt : ""}
      className="h-8 w-auto max-w-[140px] shrink-0 object-contain grayscale opacity-60 transition-[filter,opacity] duration-200 ease-out hover:grayscale-0 hover:opacity-100 sm:h-9"
    />
  );

  if (company.href) {
    return (
      <a
        href={company.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={interactive ? undefined : -1}
        aria-label={interactive ? `${company.name} — opens in a new tab` : undefined}
        className="shrink-0"
      >
        {image}
      </a>
    );
  }

  return <span className="shrink-0">{image}</span>;
}
