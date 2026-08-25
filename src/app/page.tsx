import { Hero } from "@/components/sections/Hero";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { OfferAccordion } from "@/components/sections/OfferAccordion";
import { MarketEntryProblem } from "@/components/sections/MarketEntryProblem";
import { HumanStory } from "@/components/sections/HumanStory";
import { TeamSection } from "@/components/sections/TeamSection";
import { MarketEntryStages } from "@/components/sections/MarketEntryStages";
import { MarketReadinessSprint } from "@/components/sections/MarketReadinessSprint";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyMarquee />
      <OfferAccordion />
      <MarketEntryProblem />
      <HumanStory />
      <TeamSection />
      <MarketEntryStages />
      <MarketReadinessSprint />
      <FinalCta />
    </>
  );
}
