export type CapabilityCategory = {
  title: string;
  description: string;
};

export const capabilityCategories: CapabilityCategory[] = [
  { title: "Technology", description: "Software development capacity and technical specialists." },
  { title: "Finance operations", description: "Back-office and finance administration capacity." },
  { title: "Customer operations", description: "Front-line support and account coordination." },
  { title: "Research and marketing", description: "Market research, content and campaign execution." },
];

export const partnerCriteria: string[] = [
  "Competence and relevant industry experience",
  "Verifiable references and previous work",
  "Delivery capacity and reliability",
  "Cultural compatibility with Nordic working practices",
];

export const coordinationSteps: { title: string; description: string }[] = [
  { title: "Understand the requirement", description: "We clarify scope, constraints and success criteria." },
  { title: "Shortlist and vet", description: "We propose vetted partners and assess competence and references." },
  { title: "Support the decision", description: "We help you compare and select with confidence." },
  { title: "Stay the point of contact", description: "We coordinate onboarding and the cooperation that follows." },
];
