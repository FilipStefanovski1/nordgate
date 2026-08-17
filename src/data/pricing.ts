/**
 * Central pricing configuration for the ROI calculator.
 * Edit these values to update NordGate's commercial model everywhere it is used.
 */
export const pricingConfig = {
  leadListFee: 2000,
  monthlyRetainer: 2500,
  successFeePercentage: 0.05,
};

export const calculatorDefaults = {
  currency: "EUR" as const,
  averageOrderValue: 20000,
  customerLifetimeMonths: 18,
  conversionRate: 0.15,
  meetingsPerMonth: 5,
  projectMonths: 6,
};

export type CurrencyCode = "EUR" | "SEK" | "DKK" | "NOK" | "GBP" | "USD";

export const currencies: { code: CurrencyCode; symbol: string; locale: string }[] = [
  { code: "EUR", symbol: "€", locale: "de-DE" },
  { code: "SEK", symbol: "kr", locale: "sv-SE" },
  { code: "DKK", symbol: "kr", locale: "da-DK" },
  { code: "NOK", symbol: "kr", locale: "nb-NO" },
  { code: "GBP", symbol: "£", locale: "en-GB" },
  { code: "USD", symbol: "$", locale: "en-US" },
];
