import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageTextSplit } from "@/components/ui/ImageTextSplit";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { MarketReadinessSprint } from "@/components/sections/MarketReadinessSprint";
import { FinalCta } from "@/components/sections/FinalCta";
import { marketEntryServices } from "@/data/services";
import { editorialImages } from "@/data/editorial-images";

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
        title="Build the market before the office."
        description="Validate and grow in the Nordics without standing up a local team on day one."
      />

      <WhoWeWorkWith />

      <ImageTextSplit
        imageSide="left"
        image={editorialImages.eventSpeaker}
        eyebrow="Why local matters"
        title="Four markets, four ways of deciding."
        description="Sweden, Denmark, Norway and Finland each have their own commercial culture and buying rhythm. Treating them as one market is where most entries stall."
      />

      <section className="bg-bg-soft py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What's included"
              title="Three phases. One partner."
              description="Insight defines where to play. Setup builds the infrastructure. Execution turns it into meetings."
            />
          </Reveal>
          <Reveal delay className="mt-12">
            <ServiceGroups groups={marketEntryServices} />
          </Reveal>
        </Container>
      </section>

      <MarketReadinessSprint />
      <FinalCta />
    </>
  );
}
