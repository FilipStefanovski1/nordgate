import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/animations/StaggerReveal";

const markets = ["Sweden", "Denmark", "Norway", "Finland"];
const capabilities = ["Market entry", "Sales execution", "Business development"];

function Row({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-x-6 sm:gap-x-10">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700 sm:text-base">
            {item}
          </span>
          {i < items.length - 1 && <span className="hidden h-4 w-px bg-border-strong sm:block" aria-hidden="true" />}
        </span>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="border-b border-border-soft bg-white py-14 sm:py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
          Built for established B2B companies entering the Nordics
        </p>

        <StaggerReveal className="mt-8 flex flex-col items-center gap-6 sm:mt-10 sm:gap-7">
          <Row items={markets} />
          <span className="h-px w-12 bg-border-strong" aria-hidden="true" />
          <Row items={capabilities} />
        </StaggerReveal>
      </Container>
    </section>
  );
}
