export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Nordic Market Entry", href: "/nordic-market-entry" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const headerCta: NavLink = {
  label: "Explore your market",
  href: "/contact",
};

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About NordGate", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Nordic Market Entry", href: "/nordic-market-entry" },
      { label: "International Capabilities", href: "/capabilities" },
    ],
  },
];
