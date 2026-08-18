export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdownItem = NavLink & {
  description?: string;
};

export type NavEntry =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; items: NavDropdownItem[] };

export const primaryNav: NavEntry[] = [
  { type: "link", label: "Nordic Market Entry", href: "/nordic-market-entry" },
  {
    type: "dropdown",
    label: "Services",
    items: [
      {
        label: "International Capabilities",
        href: "/capabilities",
        description: "Vetted international capacity for Nordic companies.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Resources",
    items: [
      {
        label: "How It Works",
        href: "/how-it-works",
        description: "The full NordGate process, end to end.",
      },
      {
        label: "Insights",
        href: "/insights",
        description: "Perspectives on Nordic market entry and sales.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "People",
    items: [
      {
        label: "About",
        href: "/about",
        description: "Our story, philosophy and team.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with NordGate.",
      },
    ],
  },
];

export const headerSecondaryCta: NavLink = {
  label: "Calculate ROI",
  href: "/how-it-works#calculator",
};

export const headerCta: NavLink = {
  label: "Book meeting",
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
