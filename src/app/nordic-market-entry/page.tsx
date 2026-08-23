import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { OnboardingTimeline } from "@/components/timeline/OnboardingTimeline";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { FinalCta } from "@/components/sections/FinalCta";
import { marketEntryServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Nordic Market Entry",
  description:
    "Build your Nordic market before you build a Nordic office. NordGate assesses, targets and executes Nordic sales on behalf of established international companies.",
};

export default function NordicMarketEntryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nordic market entry"
        title="Build your Nordic market before you build a Nordic office."
        description="From market assessment to booked meetings, NordGate runs the full commercial motion so you can validate and grow in the Nordics without a local team on day one."
      />

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <div>
            <SectionHeading
              eyebrow="What's included"
              title="Three phases. One accountable partner."
              description="Market insight defines where to play. Sales setup builds the infrastructure. Sales execution turns it into meetings, delivered by the same team throughout."
            />
          </div>
          <div className="mt-14">
            <ServiceGroups groups={marketEntryServices} />
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <div>
            <SectionHeading
              eyebrow="Onboarding"
              title="From first conversation to live outreach."
            />
          </div>
          <div className="mt-16">
            <OnboardingTimeline />
          </div>
        </Container>
      </section>

      <CalculatorSection />
      <WhoWeWorkWith />
      <FinalCta />
    </>
  );
}
