import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PositioningStatement } from "@/components/sections/PositioningStatement";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MarketMapSection } from "@/components/sections/MarketMapSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { CapabilitiesTeaser } from "@/components/sections/CapabilitiesTeaser";
import { NetworkAdvantage } from "@/components/sections/NetworkAdvantage";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <PositioningStatement />
      <ProcessSteps />
      <MarketMapSection />
      <CalculatorSection />
      <WhoWeWorkWith />
      <CapabilitiesTeaser />
      <NetworkAdvantage />
      <TeamSection />
      <FinalCta />
    </>
  );
}
