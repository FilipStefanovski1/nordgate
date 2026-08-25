export type ProcessFlowStage = {
  index: string;
  title: string;
  description: string;
};

/**
 * Concise stage copy for the HorizontalProcessFlow diagram — shorter than
 * the onboarding timeline's copy so it reads cleanly against the network
 * at every breakpoint. Same six stages, same factual meaning.
 */
export const processFlowStages: ProcessFlowStage[] = [
  {
    index: "01",
    title: "Discovery & commercial alignment",
    description: "Align on the product, existing customers and lessons from international sales.",
  },
  {
    index: "02",
    title: "Market and opportunity assessment",
    description: "Assess Nordic markets and identify the strongest commercial opportunity.",
  },
  {
    index: "03",
    title: "ICP and target account definition",
    description: "Define the ideal customer, priority accounts and relevant decision-makers.",
  },
  {
    index: "04",
    title: "Sales setup and messaging",
    description: "Build positioning, messaging and locally adapted outreach sequences.",
  },
  {
    index: "05",
    title: "Outreach launch",
    description: "Launch calls, email and LinkedIn outreach to book qualified meetings.",
  },
  {
    index: "06",
    title: "Meetings, feedback and optimisation",
    description: "Use real market feedback to improve targeting, messaging and follow-up.",
  },
];
