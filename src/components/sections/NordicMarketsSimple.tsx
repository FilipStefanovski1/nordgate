import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const countries = ["Sweden", "Denmark", "Norway", "Finland"];

export function NordicMarketsSimple() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-blue-600">Nordic markets</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              One region. Four distinct markets.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              The Nordics aren&apos;t one homogeneous market. Each country has its own commercial
              culture and decision-making patterns, and entry requires a considered approach per
              market.
            </p>
          </div>

          <StaggerReveal className="flex flex-col divide-y divide-border-strong/60 lg:pl-4">
            {countries.map((country, i) => (
              <div key={country} className="flex items-baseline gap-6 py-5">
                <span className="coord-label text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-2xl font-semibold text-ink-900 sm:text-3xl">{country}</span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
