import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { editorialImages } from "@/data/editorial-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "NordGate is a commercial bridge between the Nordic region and Eastern Europe. Our purpose, the team behind it and where we operate.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NordGate"
        title="Two regions. One bridge."
        description="We connect companies, capabilities and opportunities across the Nordics and international markets."
      />

      <ImageTextSplit
        imageSide="left"
        image={editorialImages.founders}
        eyebrow="Why we exist"
        title="We sell on their behalf."
        description="Nordgate is a commercial execution partner, not only an advisory firm. We simplify cross-border growth through local market knowledge, trusted relationships and practical commercial work — and that distinction shapes how we scope every engagement."
      />

      <TeamSection background="soft" />

      <EditorialImage
        src={editorialImages.eventAuditorium.src}
        alt={editorialImages.eventAuditorium.alt}
        position={editorialImages.eventAuditorium.position}
      />

      <section className="bg-navy-950 py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Where we operate"
              title="Local presence, not a distant HQ."
              description="From Copenhagen, Stockholm and Skopje we work across chamber networks, companies, decision-makers, agencies and service providers on both sides of the gateway."
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <LocationsGrid />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Principles" title="How we work." />
          </Reveal>
          <Reveal delay className="mt-12">
            <PrinciplesGrid />
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
