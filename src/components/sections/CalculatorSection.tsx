import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RoiCalculator } from "@/components/calculator/RoiCalculator";

export function CalculatorSection() {
  return (
    <section id="calculator" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Calculate your opportunity"
            title="What could Nordic market entry be worth?"
            description="Estimate the potential commercial value generated through a NordGate engagement based on your own sales assumptions."
          />
        </ScrollReveal>

        <div className="mt-14">
          <RoiCalculator />
        </div>
      </Container>
    </section>
  );
}
