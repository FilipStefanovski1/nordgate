import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroMap } from "@/components/maps/HeroMap";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <span className="eyebrow text-blue-600">Nordic market entry &amp; business development</span>
            <h1 className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4rem]">
              Your gateway to the Nordic market.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              NordGate helps established international companies enter, sell and grow across the
              Nordics through local market knowledge and hands-on commercial execution.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" className="group">
                Explore your Nordic potential
              </Button>
              <Button href="/how-it-works" variant="secondary" icon={false}>
                See how it works
              </Button>
            </div>

            <p className="coord-label mt-12 text-ink-400">Copenhagen · Stockholm · Skopje</p>
          </div>

          <HeroMap />
        </div>
      </Container>
    </section>
  );
}
