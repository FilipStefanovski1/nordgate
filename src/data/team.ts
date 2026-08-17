export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    name: "Anders Hansen",
    role: "Co-Founder & Head of Partnerships",
    initials: "AH",
    bio: [
      "5+ years of experience in sales and commercial management across the Danish energy and telecom sectors.",
      "A network across the Nordic political system, including a background in the Nordic Council.",
      "Master's in Business Economics and Administration from Aalborg University.",
    ],
  },
  {
    name: "Samuel N. Vickius",
    role: "Co-Founder & Head of Sales",
    initials: "SV",
    bio: [
      "Background in business development, stakeholder relations and cross-border cooperation across European markets.",
      "Understands both Nordic and Southeast European business environments.",
      "Focused on commercial opportunities and long-term partnerships.",
    ],
  },
];
