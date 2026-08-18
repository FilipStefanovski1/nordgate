import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { OnboardingTimeline } from "@/components/timeline/OnboardingTimeline";
import { OutreachCycle } from "@/components/sections/OutreachCycle";
import { ResponsibilitySplit } from "@/components/sections/ResponsibilitySplit";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The complete NordGate process, from market assessment to onboarding, outreach execution and continuous market feedback.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From market insight to a running Nordic sales motion."
        description="A single, accountable process, not a report handed over at the end of a project."
      />

      <ProcessSteps />

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Onboarding" title="Getting from signed to selling." />
          </ScrollReveal>
          <div className="mt-16">
            <OnboardingTimeline />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Sales execution"
              title="Outreach runs across every relevant channel, continuously."
            />
          </ScrollReveal>
          <div className="mt-14">
            <OutreachCycle />
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Division of work" title="What you bring. What NordGate runs." />
          </ScrollReveal>
          <div className="mt-14">
            <ResponsibilitySplit />
          </div>
        </Container>
      </section>

      <CalculatorSection />
      <FinalCta background="soft" />
    </>
  );
}
