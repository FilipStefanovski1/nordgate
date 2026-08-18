export type MarketInfo = {
  code: "SE" | "DK" | "NO" | "FI";
  name: string;
  characteristics: string;
  salesEnvironment: string;
  entryConsiderations: string;
  businessBehavior: string;
};

export const markets: MarketInfo[] = [
  {
    code: "SE",
    name: "Sweden",
    characteristics:
      "A large, digitally mature market with a strong culture of consensus and flat organisational structures. Decisions are thorough and often involve several stakeholders.",
    salesEnvironment:
      "Buyers expect well-prepared, data-backed conversations. Trust is built gradually, and early meetings tend to focus on understanding rather than closing.",
    entryConsiderations:
      "Sweden rewards patience and precision. A credible local presence and fluent account handling matter more than aggressive outreach volume.",
    businessBehavior:
      "Direct but understated communication. Hierarchy is soft, so it is common for several people to weigh in before a decision is made.",
  },
  {
    code: "DK",
    name: "Denmark",
    characteristics:
      "A compact, pragmatic market where relationships and speed of execution are valued. Copenhagen concentrates much of the country's commercial decision-making.",
    salesEnvironment:
      "Danish buyers respond well to directness and a clear commercial case. Meetings move faster than in the other Nordic markets once trust is established.",
    entryConsiderations:
      "A short, well-targeted account list tends to outperform broad outreach. Personal introductions carry real weight.",
    businessBehavior:
      "Informal in tone, decisive in practice. Flat hierarchies mean the person you meet is often close to the actual decision.",
  },
  {
    code: "NO",
    name: "Norway",
    characteristics:
      "A resource-rich economy with strong purchasing power and a concentration of decision-making in a handful of regional hubs beyond Oslo.",
    salesEnvironment:
      "Relationship-led and cautious with new suppliers. Local reference points and a demonstrated understanding of Norwegian business practice matter early on.",
    entryConsiderations:
      "Sector concentration (energy, maritime, public sector) means account selection is critical. The right ten accounts outperform the wrong hundred.",
    businessBehavior:
      "Egalitarian and consensus-driven, with a preference for long-term supplier relationships over transactional deals.",
  },
  {
    code: "FI",
    name: "Finland",
    characteristics:
      "A technically sophisticated market with high trust in data, documentation and demonstrable results over sales narrative.",
    salesEnvironment:
      "Outreach that leads with substance performs well. Finnish buyers are comfortable moving quickly once the commercial logic is clear.",
    entryConsiderations:
      "Understated positioning and technical credibility outperform overtly promotional messaging.",
    businessBehavior:
      "Reserved communication style, low tolerance for overselling, and a strong premium on reliability and follow-through.",
  },
];
