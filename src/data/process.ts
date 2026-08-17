export type ProcessStage = {
  index: string;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    index: "01",
    title: "Understand the opportunity",
    description: "Assess market potential, competitors and country priorities.",
  },
  {
    index: "02",
    title: "Build the sales motion",
    description: "Define ICP, accounts, contacts, positioning and messaging.",
  },
  {
    index: "03",
    title: "Enter the market",
    description: "Execute direct outreach through phone, email, LinkedIn and meetings.",
  },
  {
    index: "04",
    title: "Create opportunities",
    description: "Generate qualified conversations and meetings.",
  },
  {
    index: "05",
    title: "Build the market",
    description:
      "Use real market feedback to improve positioning, follow-up and commercial development.",
  },
];
