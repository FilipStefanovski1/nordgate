import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { CoordinationSteps } from "@/components/sections/CoordinationSteps";
import { PartnerCriteria } from "@/components/sections/PartnerCriteria";
import { FinalCta } from "@/components/sections/FinalCta";
import { capabilityCategories } from "@/data/capabilities";
import { editorialImages } from "@/data/editorial-images";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "NordGate helps Nordic companies access vetted international service providers and operational capacity, selected, vetted and coordinated on your behalf.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="International capabilities"
        title="Capacity, without a new vendor hunt."
        description="For Nordic companies: we identify, vet and coordinate international providers and operational capacity on your behalf."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Where it helps" title="Capacity across four functions." />
          </Reveal>
          <Reveal delay className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityCategories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-border-soft p-7">
                <p className="text-base font-semibold text-ink-900">{cat.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{cat.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <ImageTextSplit
        background="soft"
        imageSide="right"
        image={editorialImages.eventPanelSkopje}
        eyebrow="Not a marketplace"
        title="A coordination layer, not a directory."
        description="Directories hand you a list and leave the evaluation to you. We stay involved — shortlisting, supporting the decision and remaining your single point of contact."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Selection and coordination, handled."
              description="You bring the requirement. We handle the search, the evaluation and the coordination that follows."
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <CoordinationSteps />
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Partner quality" title="What we screen for." />
          </Reveal>
          <Reveal delay className="mt-12">
            <PartnerCriteria />
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
