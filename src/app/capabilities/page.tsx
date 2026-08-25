import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
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
        title="Nordic company? Access the right international capabilities."
        description="NordGate identifies, vets and coordinates international service providers, specialists and operational capacity, so you gain capacity without managing a new vendor relationship from scratch."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div>
            <SectionHeading eyebrow="Categories" title="Capacity across the functions that slow growth down." />
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCategories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-border-soft p-7">
                <p className="text-base font-semibold text-ink-900">{cat.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{cat.description}</p>
                <ul className="mt-5 flex flex-col gap-1.5">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="text-sm text-ink-500">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="Selection, vetting and coordination, handled for you."
              description="You bring the requirement. NordGate handles the search, the evaluation and the ongoing coordination."
            />
          </div>
          <div className="mt-14">
            <CoordinationSteps />
          </div>
        </Container>
      </section>

      <EditorialImage
        src={editorialImages.eventAuditorium.src}
        alt={editorialImages.eventAuditorium.alt}
        position={editorialImages.eventAuditorium.position}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div>
            <SectionHeading eyebrow="Partner quality" title="What NordGate screens for before any introduction." />
          </div>
          <div className="mt-14">
            <PartnerCriteria />
          </div>
        </Container>
      </section>

      <ImageTextSplit
        background="soft"
        imageSide="right"
        image={editorialImages.eventPanelSkopje}
        eyebrow="Not a marketplace"
        title="A coordination layer, not a directory."
        description="Directories hand you a list and leave the evaluation to you. Recruitment agencies focus on placing individuals, not outcomes."
      >
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
          NordGate stays involved throughout: understanding requirements, shortlisting vetted
          partners, supporting evaluation and remaining your single point of contact for as long
          as the cooperation runs.
        </p>
      </ImageTextSplit>

      <FinalCta />
    </>
  );
}
