export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/nordic-market-entry" },
  { label: "Approach", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export const headerCta: NavLink = {
  label: "Book a meeting",
  href: "/contact",
};

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Nordic Market Entry", href: "/nordic-market-entry" },
      { label: "Sales Execution", href: "/nordic-market-entry#sales-execution" },
      { label: "Business Development", href: "/nordic-market-entry" },
      { label: "International Capabilities", href: "/capabilities" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "ROI Calculator", href: "/how-it-works#calculator" },
      { label: "Insights", href: "/insights" },
    ],
  },
];
