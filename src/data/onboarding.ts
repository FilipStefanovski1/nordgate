export type OnboardingStage = {
  index: string;
  title: string;
  description: string;
};

/** Centralised so NordGate can edit onboarding copy without touching the timeline component. */
export const onboardingStages: OnboardingStage[] = [
  {
    index: "01",
    title: "Discovery & commercial alignment",
    description:
      "We start by understanding your product, your existing customers and what you've already learned from selling internationally. This confirms fit before anything else moves forward.",
  },
  {
    index: "02",
    title: "Market and opportunity assessment",
    description:
      "We assess the Nordic markets against your product and prioritise where the opportunity is strongest, based on competitive landscape, buying behaviour and market access.",
  },
  {
    index: "03",
    title: "ICP and target account definition",
    description:
      "We define the ideal customer profile for the chosen market and build a working list of target accounts and the people inside them worth reaching.",
  },
  {
    index: "04",
    title: "Sales setup and messaging",
    description:
      "We prepare the commercial infrastructure: positioning, messaging and outreach sequencing, adapted to how the local market actually buys.",
  },
  {
    index: "05",
    title: "Outreach launch",
    description:
      "We begin direct outreach on your behalf across calls, email and LinkedIn, and start booking qualified meetings with the accounts we've prioritised.",
  },
  {
    index: "06",
    title: "Meetings, feedback and optimisation",
    description:
      "Every meeting generates market feedback. We use it to sharpen targeting, messaging and follow-up as the campaign runs.",
  },
  {
    index: "07",
    title: "Ongoing commercial development",
    description:
      "Once the motion is working, we keep developing the account base: expanding outreach, deepening relationships and reporting on what's moving.",
  },
];
