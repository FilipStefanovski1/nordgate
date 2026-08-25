import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutreachCycle } from "@/components/sections/OutreachCycle";
import { ResponsibilitySplit } from "@/components/sections/ResponsibilitySplit";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The NordGate process, from market assessment to onboarding, outreach execution and continuous market feedback.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="One process, start to finish."
        description="A single accountable team, not a report handed over at the end of a project."
      />

      <ProcessSection background="white" />

      <EditorialImage
        background="soft"
        src={editorialImages.eventAuditorium.src}
        alt={editorialImages.eventAuditorium.alt}
        position={editorialImages.eventAuditorium.position}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sales execution"
              title="Outreach that keeps learning."
              description="Every qualified meeting feeds market feedback back into targeting and messaging."
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <OutreachCycle />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Division of work" title="What you bring. What we run." />
          </Reveal>
          <Reveal delay className="mt-12">
            <ResponsibilitySplit />
          </Reveal>
        </Container>
      </section>

      <CalculatorSection />
      <FinalCta />
    </>
  );
}
