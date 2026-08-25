export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const marketEntryServices: ServiceGroup[] = [
  {
    title: "Market insight",
    description: "Find where the opportunity actually is, before committing resources.",
    items: [
      "Market and opportunity assessment",
      "Choosing the right Nordic market",
      "Competitor and positioning review",
    ],
  },
  {
    title: "Sales setup",
    description: "Build the commercial infrastructure before outreach begins.",
    items: [
      "Target-group and ICP definition",
      "Target account identification",
      "Messaging and sales analytics",
    ],
  },
  {
    title: "Sales execution",
    description: "We run the selling, not just the planning.",
    items: [
      "Cold calling, email and LinkedIn outreach",
      "Booking qualified meetings",
      "Account development and follow-up",
    ],
  },
];
