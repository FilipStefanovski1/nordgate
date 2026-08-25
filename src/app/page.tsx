import { Hero } from "@/components/sections/Hero";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { OfferAccordion } from "@/components/sections/OfferAccordion";
import { MarketEntryProblem } from "@/components/sections/MarketEntryProblem";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HumanStory } from "@/components/sections/HumanStory";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyMarquee />
      <OfferAccordion />
      <MarketEntryProblem />
      <ProcessSection />
      <HumanStory />
      <FinalCta />
    </>
  );
}
