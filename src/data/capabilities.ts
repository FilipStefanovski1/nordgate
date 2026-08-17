export type CapabilityCategory = {
  title: string;
  description: string;
  examples: string[];
};

export const capabilityCategories: CapabilityCategory[] = [
  {
    title: "Technology",
    description: "Software development capacity and technical specialists.",
    examples: ["Software development", "Technical specialists", "QA & testing"],
  },
  {
    title: "Finance operations",
    description: "Back-office and finance administration capacity.",
    examples: ["Finance administration", "Back-office operations", "Reporting support"],
  },
  {
    title: "Customer operations",
    description: "Front-line and account support capacity.",
    examples: ["Customer support", "Account coordination", "Onboarding support"],
  },
  {
    title: "Marketing",
    description: "Content, campaigns and marketing execution capacity.",
    examples: ["Marketing", "Content", "Campaign execution"],
  },
  {
    title: "Research",
    description: "Market and commercial research capacity.",
    examples: ["Research", "Lead generation", "Market analysis"],
  },
  {
    title: "Business support",
    description: "Project-based specialists and operational teams.",
    examples: ["Project-based specialists", "Tailor-made operational teams"],
  },
];

export const partnerCriteria: string[] = [
  "Competence and relevant industry experience",
  "Clear, reliable communication",
  "Verifiable references and previous work",
  "Security and confidentiality",
  "Delivery capacity and reliability",
  "Cultural compatibility with Nordic working practices",
];

export const coordinationSteps: { title: string; description: string }[] = [
  { title: "Understand requirements", description: "We clarify scope, constraints and success criteria with you." },
  { title: "Define scope", description: "We translate requirements into a clear, deliverable scope of work." },
  { title: "Identify suitable partners", description: "We shortlist partners from our vetted international network." },
  { title: "Vet them", description: "We assess competence, references, reliability and cultural fit." },
  { title: "Support evaluation", description: "We help you compare and select the right partner with confidence." },
  { title: "Onboard the selected partner", description: "We coordinate onboarding so work starts on the right footing." },
  { title: "Coordinate cooperation", description: "We remain your single point of contact where coordination is needed." },
];
