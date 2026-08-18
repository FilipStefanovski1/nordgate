import { Hero } from "@/components/sections/Hero";
import { PositioningStatement } from "@/components/sections/PositioningStatement";
import { TwoWaysWeHelp } from "@/components/sections/TwoWaysWeHelp";
import { MarketEntryStages } from "@/components/sections/MarketEntryStages";
import { WhatWeHandle } from "@/components/sections/WhatWeHandle";
import { WhyModelMakesSense } from "@/components/sections/WhyModelMakesSense";
import { NordicMarketsSimple } from "@/components/sections/NordicMarketsSimple";
import { CapabilitiesTeaser } from "@/components/sections/CapabilitiesTeaser";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningStatement />
      <TwoWaysWeHelp />
      <MarketEntryStages />
      <WhatWeHandle />
      <WhyModelMakesSense />
      <NordicMarketsSimple />
      <CapabilitiesTeaser />
      <TeamSection background="soft" />
      <FinalCta />
    </>
  );
}
