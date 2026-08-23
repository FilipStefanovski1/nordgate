import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function WhyModelMakesSense() {
  return (
    <section className="bg-navy-950 py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="cyan">Why this model works</Eyebrow>
          <p className="mt-6 text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl">
            Build the market before you build the team.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            You can assess and develop Nordic demand before committing to local hires,
            infrastructure and a complete local sales organisation. Prove the opportunity first,
            then decide what to build permanently.
          </p>
        </div>
      </Container>
    </section>
  );
}
