export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  bio: string[];
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "Anders Hansen",
    role: "Co-Founder & Head of Partnerships",
    initials: "AH",
    photo: "/team/anders-hansen.jpg",
    bio: [
      "5+ years of experience in sales and commercial management across the Danish energy and telecom sectors.",
      "A network across the Nordic political system, including a background in the Nordic Council.",
      "Master's in Business Economics and Administration from Aalborg University.",
    ],
    linkedin: "https://www.linkedin.com/in/anders-peter-hansen1995/",
  },
  {
    name: "Samuel N. Vickius",
    role: "Co-Founder & Head of Sales",
    initials: "SV",
    photo: "/team/samuel-vickius.jpg",
    bio: [
      "Background in business development, stakeholder relations and cross-border cooperation across European markets.",
      "Understands both Nordic and Southeast European business environments.",
      "Focused on commercial opportunities and long-term partnerships.",
    ],
    linkedin: "https://www.linkedin.com/in/samuelnvickius/",
  },
];
