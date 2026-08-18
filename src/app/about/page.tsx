import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { NetworkAdvantage } from "@/components/sections/NetworkAdvantage";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "NordGate is a commercial bridge between the Nordic region and Eastern Europe. Our purpose, mission, vision and the team behind it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NordGate"
        title="Two regions. One commercial bridge."
        description="NordGate connects companies, capabilities and opportunities across the Nordic region and international markets. Built on local knowledge and hands-on execution, not slide decks."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <ScrollReveal>
              <Eyebrow>Purpose</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                To simplify how companies grow across borders, connecting the right companies,
                people and opportunities on both sides of the Nordic gateway.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                To simplify cross-border business development by connecting the right companies,
                people and opportunities through local market knowledge, trusted relationships and
                practical commercial execution.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                To become a leading gateway between the Nordic region and Eastern Europe.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-24 sm:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading tone="light" eyebrow="Where we operate" title="Copenhagen · Stockholm · Skopje" />
          </ScrollReveal>
          <div className="mt-14">
            <LocationsGrid />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <ScrollReveal className="max-w-3xl">
            <SectionHeading
              eyebrow="Operating philosophy"
              title={
                <>
                  We don&apos;t simply tell companies how to sell in the Nordics.
                  <br />
                  We sell on their behalf.
                </>
              }
              description="NordGate is a commercial execution partner, not just an advisory firm. That distinction shapes how we scope engagements and how we measure success."
            />
          </ScrollReveal>
        </Container>
      </section>

      <NetworkAdvantage />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Principles" title="How we work, in six commitments." />
          </ScrollReveal>
          <div className="mt-14">
            <PrinciplesGrid />
          </div>
        </Container>
      </section>

      <TeamSection />
      <FinalCta />
    </>
  );
}
