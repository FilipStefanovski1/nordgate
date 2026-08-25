import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoiCalculator } from "@/components/calculator/RoiCalculator";

export function CalculatorSection() {
  return (
    <section id="calculator" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <div>
          <SectionHeading
            eyebrow="Calculate your opportunity"
            title="What could this be worth?"
            description="Estimate the commercial value of an engagement using your own sales assumptions."
          />
        </div>

        <div className="mt-14">
          <RoiCalculator />
        </div>
      </Container>
    </section>
  );
}
