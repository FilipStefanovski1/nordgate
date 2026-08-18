export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const marketEntryServices: ServiceGroup[] = [
  {
    title: "Market insight",
    description: "Understand where the opportunity actually is before committing resources.",
    items: [
      "Initial market and opportunity assessment",
      "Identifying the most relevant Nordic market",
      "Country reports and industry insights",
      "Competitor and positioning review",
      "Market-entry recommendations",
    ],
  },
  {
    title: "Sales setup",
    description: "Build the commercial infrastructure before outreach begins.",
    items: [
      "Readiness assessment",
      "Target-group definition and ICP development",
      "Target account identification",
      "Lead generation and qualification",
      "Messaging and sales analytics",
    ],
  },
  {
    title: "Sales execution",
    description: "NordGate executes the selling, not just the planning.",
    items: [
      "Cold calling, email and LinkedIn outreach",
      "Physical meetings and account development",
      "Booking qualified sales meetings",
      "Commercial follow-up",
      "Account management",
    ],
  },
];
