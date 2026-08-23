import { Hero } from "@/components/sections/Hero";
import { MarketEntryProblem } from "@/components/sections/MarketEntryProblem";
import { NordicMarketsSimple } from "@/components/sections/NordicMarketsSimple";
import { Services } from "@/components/sections/Services";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { MarketEntryStages } from "@/components/sections/MarketEntryStages";
import { WhyModelMakesSense } from "@/components/sections/WhyModelMakesSense";
import { HumanStory } from "@/components/sections/HumanStory";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { CapabilitiesTeaser } from "@/components/sections/CapabilitiesTeaser";
import { MarketReadinessSprint } from "@/components/sections/MarketReadinessSprint";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketEntryProblem />
      <NordicMarketsSimple />
      <Services />
      <CompanyMarquee />
      <MarketEntryStages />
      <WhyModelMakesSense />
      <HumanStory />
      <FounderCredibility />
      <CapabilitiesTeaser />
      <MarketReadinessSprint />
      <TeamSection />
      <FinalCta />
    </>
  );
}
