import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function PositioningStatement() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <ScrollReveal y={50}>
          <Eyebrow tone="cyan">The NordGate difference</Eyebrow>
          <p className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            We don&apos;t just advise you on the Nordic market.
            <br />
            We sell in it.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            NordGate operates as an extension of the client&apos;s commercial team — defining
            targets, identifying accounts, performing outreach, creating qualified meetings and
            developing the market.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
