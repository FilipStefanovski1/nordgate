export type OnboardingStage = {
  index: string;
  title: string;
  description: string;
};

/**
 * Provisional onboarding structure — not yet verified against an official
 * NordGate onboarding document. Content lives here so it can be replaced
 * without touching the timeline component.
 */
export const onboardingStages: OnboardingStage[] = [
  {
    index: "01",
    title: "Discovery & commercial alignment",
    description:
      "We map your product, existing customers and international experience to confirm fit and align on ambition.",
  },
  {
    index: "02",
    title: "Market and ICP definition",
    description:
      "We select the most relevant Nordic market and define the ideal customer profile within it.",
  },
  {
    index: "03",
    title: "Target list and sales setup",
    description:
      "We build the target account list, identify decision-makers and prepare the commercial infrastructure.",
  },
  {
    index: "04",
    title: "Messaging and outreach preparation",
    description:
      "We adapt positioning and messaging to local expectations and prepare outreach across every channel.",
  },
  {
    index: "05",
    title: "Nordic outreach launches",
    description:
      "We begin direct outreach — calls, email, LinkedIn and meeting requests — on your behalf.",
  },
  {
    index: "06",
    title: "Meetings, feedback and optimisation",
    description:
      "We book qualified meetings, gather market feedback and continuously refine targeting and messaging.",
  },
];
