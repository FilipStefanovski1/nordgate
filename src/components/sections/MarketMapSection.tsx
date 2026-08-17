import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { NordicMap } from "@/components/maps/NordicMap";

export function MarketMapSection() {
  return (
    <section className="bg-bg-soft py-24 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Four markets, one region"
            title="One region. Four distinct markets."
            description="Sweden, Denmark, Norway and Finland share a region but not a playbook. Select a market to see how NordGate approaches it."
          />
        </ScrollReveal>

        <div className="mt-14">
          <NordicMap />
        </div>
      </Container>
    </section>
  );
}
