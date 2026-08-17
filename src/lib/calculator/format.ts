import { currencies, type CurrencyCode } from "@/data/pricing";

export function formatCurrency(value: number, currency: CurrencyCode, maximumFractionDigits = 0): string {
  const meta = currencies.find((c) => c.code === currency) ?? currencies[0];
  return new Intl.NumberFormat(meta.locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatCompactCurrency(value: number, currency: CurrencyCode): string {
  const meta = currencies.find((c) => c.code === currency) ?? currencies[0];
  const formatted = new Intl.NumberFormat(meta.locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
  return `${meta.symbol}${formatted}`;
}

export function formatMultiple(value: number): string {
  return `${value.toFixed(1)}×`;
}

export function formatDecimal(value: number, digits = 1): string {
  return value.toFixed(digits);
}
