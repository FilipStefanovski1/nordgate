import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const scope = [
  "Target-market assessment",
  "Competitor and opportunity mapping",
  "Ideal-customer definition",
  "Recommended market-entry plan",
];

export function MarketReadinessSprint() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">A clear starting point</p>
            <h2 className="mt-4 max-w-sm text-balance font-serif text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Nordic Market Readiness Sprint
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-500">
              A fixed-scope engagement to test whether the Nordics are worth pursuing, before
              any larger commitment.
            </p>
            <Button href="/contact" className="mt-7">
              Enquire about the Sprint
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-x-10 border-t border-border-soft sm:grid-cols-2">
            {scope.map((item, i) => (
              <div key={item} className="flex gap-4 border-b border-border-soft py-5">
                <span className="coord-label pt-0.5 text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium text-ink-900">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
