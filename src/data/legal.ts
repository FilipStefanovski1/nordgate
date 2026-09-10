/**
 * Legal page content.
 *
 * Deliberately English-only and kept out of `messages/`: these are binding
 * documents, and machine-translating them into four languages would risk the
 * versions saying subtly different things. The surrounding page chrome stays
 * localized, and each page carries a short localized note explaining that the
 * legal text itself is published in English.
 *
 * Everything below describes what the site actually does today — one
 * functional language cookie, one contact form, no analytics or advertising
 * trackers. If that changes, this file has to change with it.
 */

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  /** ISO date, rendered in the visitor's locale. */
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

/** Registered company details, shown at the foot of both legal documents. */
export const companyDetails = {
  legalName: "NordGate ApS",
  street: "Rødovre Parkvej 301, 2.",
  postal: "2610 Rødovre",
  country: "Denmark",
  cvr: "44931214",
  email: "info@thenordgate.com",
  phone: "+45 52 58 65 80",
  phoneHref: "+4552586580",
} as const;

const LAST_UPDATED = "2026-09-10";

export const privacyPolicy: LegalDocument = {
  lastUpdated: LAST_UPDATED,
  intro:
    "This policy explains what personal data NordGate collects through this website, why we collect it, and what rights you have over it.",
  sections: [
    {
      heading: "Who is responsible for your data",
      paragraphs: [
        `${companyDetails.legalName} (CVR ${companyDetails.cvr}) is the data controller for personal data collected through this website. You can reach us at ${companyDetails.email} or ${companyDetails.phone}.`,
      ],
    },
    {
      heading: "What we collect",
      paragraphs: [
        "We only collect personal data that you actively give us. Specifically:",
      ],
      bullets: [
        "Contact form: your name, work email address, company, the topic you select, and the message you write.",
        "Alongside a form submission we also record the language you were browsing in and the page you submitted from, so we can reply in the right language and with the right context.",
        "If you book a meeting, that booking is handled by Google Calendar on Google's own infrastructure, under Google's privacy terms rather than ours.",
        "Our hosting provider keeps standard server logs, including IP addresses, for security and reliability purposes.",
      ],
    },
    {
      heading: "Why we collect it, and on what basis",
      paragraphs: [
        "We use the details you submit to respond to your enquiry and, where relevant, to discuss working together. The legal basis is your consent, which you give via the checkbox on the form, together with our legitimate interest in responding to business enquiries and taking steps at your request before entering into a contract.",
        "We do not use your details for automated decision-making or profiling, and we do not sell them.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This website sets one functional cookie, NEXT_LOCALE, which remembers the language you chose so the site can show it again on your next visit. It contains nothing but a language code.",
        "We do not use analytics, advertising or tracking cookies, and there is no third-party tracking on this site.",
      ],
    },
    {
      heading: "Who else processes your data",
      paragraphs: [
        "We use a small number of service providers to run the site and reply to you. They process data on our instructions only:",
      ],
      bullets: [
        "Vercel — website hosting and delivery.",
        "Resend — delivery of the notification and confirmation emails triggered by the contact form.",
        "Google — only if you choose to book a meeting through the booking link.",
      ],
    },
    {
      heading: "International transfers",
      paragraphs: [
        "Some of these providers may process data outside the EU/EEA. Where that happens, the transfer is covered by appropriate safeguards such as the European Commission's Standard Contractual Clauses.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep enquiry correspondence for as long as needed to answer you and, if we go on to work together, for the duration of that relationship plus any period required by Danish bookkeeping law. If an enquiry does not lead anywhere, we delete it once it is no longer relevant. You can ask us to delete it sooner at any time.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Under the GDPR you have the right to request access to the personal data we hold about you, to have it corrected or deleted, to restrict or object to how we process it, and to receive it in a portable format. Where processing is based on consent, you can withdraw that consent at any time.",
        `To exercise any of these rights, email us at ${companyDetails.email}. If you are not satisfied with how we handle your request, you can complain to the Danish Data Protection Agency (Datatilsynet) at datatilsynet.dk.`,
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "The site is served over HTTPS, and form submissions are transmitted encrypted. Access to enquiry correspondence is limited to the people at NordGate who need it in order to reply.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "If we change how we handle personal data, we will update this page and the date shown above. Material changes will be reflected here before they take effect.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  lastUpdated: LAST_UPDATED,
  intro:
    "These terms cover your use of this website. They do not govern any consulting engagement with NordGate — that is always set out in a separate written agreement.",
  sections: [
    {
      heading: "About these terms",
      paragraphs: [
        `This website is operated by ${companyDetails.legalName} (CVR ${companyDetails.cvr}). By using the site you accept these terms. If you do not accept them, please do not use the site.`,
      ],
    },
    {
      heading: "Using this website",
      paragraphs: [
        "You may use this site to learn about NordGate and to get in touch with us. You agree not to misuse it — for example by attempting to disrupt it, gain unauthorised access to it, scrape it at a scale that degrades it for others, or submit false or unlawful content through the contact form.",
      ],
    },
    {
      heading: "Information on this site is not an offer",
      paragraphs: [
        "The descriptions of services on this site are for information only. They are not an offer, a quotation, or a commitment to deliver any particular outcome. Any engagement, its scope, its pricing and its deliverables are agreed separately in writing.",
        "Where the site includes estimation tools, the figures they produce are illustrative projections based on the assumptions you enter. They are not forecasts, guarantees, or advice.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The content of this site — including text, layout, graphics, and the NordGate name and logo — belongs to NordGate or its licensors. You may read, share and quote it with attribution, but you may not reproduce it commercially or present it as your own without our written permission. Third-party logos shown on the site remain the property of their respective owners.",
      ],
    },
    {
      heading: "Links to other sites",
      paragraphs: [
        "This site links to third-party services, including our booking page and our social media profiles. We are not responsible for their content, availability or privacy practices, and linking to them is not an endorsement.",
      ],
    },
    {
      heading: "Availability and accuracy",
      paragraphs: [
        "We aim to keep the site accurate and available, but we provide it as-is. We do not warrant that it will be uninterrupted, error-free, or that the information on it is complete or current at any given moment.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by Danish law, NordGate is not liable for indirect or consequential loss arising from your use of, or inability to use, this website — including loss of profit, revenue, data or business opportunity. Nothing in these terms limits liability that cannot be limited by law.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by Danish law. Any dispute arising from them is subject to the jurisdiction of the Danish courts.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The version published on this page, with the date shown above, is the one that applies.",
      ],
    },
  ],
};
