"use client";

import { useMemo, useState } from "react";
import { calculateRoi } from "@/lib/calculator/roi";
import { formatCurrency, formatDecimal } from "@/lib/calculator/format";
import { calculatorDefaults, currencies, type CurrencyCode } from "@/data/pricing";
import { Button } from "@/components/ui/Button";

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-sm font-medium text-ink-700">{label}</label>
        <span className="text-sm font-semibold text-ink-900">
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border-soft accent-blue-700"
        aria-label={label}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [currency, setCurrency] = useState<CurrencyCode>(calculatorDefaults.currency);
  const [averageOrderValue, setAverageOrderValue] = useState(calculatorDefaults.averageOrderValue);
  const [customerLifetimeMonths, setCustomerLifetimeMonths] = useState(calculatorDefaults.customerLifetimeMonths);
  const [conversionRate, setConversionRate] = useState(calculatorDefaults.conversionRate * 100);
  const [meetingsPerMonth, setMeetingsPerMonth] = useState(calculatorDefaults.meetingsPerMonth);
  const [projectMonths, setProjectMonths] = useState(calculatorDefaults.projectMonths);

  const result = useMemo(
    () =>
      calculateRoi({
        averageOrderValue,
        customerLifetimeMonths,
        conversionRate: conversionRate / 100,
        meetingsPerMonth,
        projectMonths,
      }),
    [averageOrderValue, customerLifetimeMonths, conversionRate, meetingsPerMonth, projectMonths]
  );

  const fmt = (v: number) => formatCurrency(v, currency);

  return (
    <div className="rounded-3xl border border-border-soft bg-white p-6 sm:p-10 lg:p-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-blue-600">Scenario inputs</p>
          <h3 className="mt-2 text-xl font-semibold text-ink-900 sm:text-2xl">Your assumptions</h3>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="currency" className="text-sm text-ink-500">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="rounded-lg border border-border-strong bg-white px-3 py-2 text-sm font-medium text-ink-900"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <p className="eyebrow text-ink-400">Customer economics</p>
          <Field
            label="Average order value"
            value={averageOrderValue}
            onChange={setAverageOrderValue}
            min={1000}
            max={200000}
            step={1000}
          />
          <Field
            label="Average customer lifetime"
            value={customerLifetimeMonths}
            onChange={setCustomerLifetimeMonths}
            min={1}
            max={60}
            step={1}
            suffix=" months"
          />
          <Field
            label="Conversion rate per qualified meeting"
            value={conversionRate}
            onChange={setConversionRate}
            min={1}
            max={60}
            step={1}
            suffix="%"
          />

          <p className="eyebrow mt-2 text-ink-400">NordGate delivery</p>
          <Field
            label="Meetings per month"
            value={meetingsPerMonth}
            onChange={setMeetingsPerMonth}
            min={1}
            max={20}
            step={1}
          />
          <Field
            label="Project length"
            value={projectMonths}
            onChange={setProjectMonths}
            min={1}
            max={24}
            step={1}
            suffix=" months"
          />
        </div>

        {/* Result panel — one clear focal number, then the breakdown that earns it */}
        <div className="rounded-2xl bg-navy-950 p-6 text-white sm:p-8">
          <p className="eyebrow text-white/50">Return per {currency} invested</p>
          <p className="mt-2 text-5xl font-semibold sm:text-6xl">
            {formatDecimal(result.returnMultiple, 1)}×
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            Every {currency} invested corresponds to approximately{" "}
            <span className="font-medium text-white/85">{formatDecimal(result.returnMultiple, 1)}×</span> in projected
            customer lifetime value, based on the assumptions on the left.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 text-sm">
            <div>
              <p className="text-white/50">Lifetime value</p>
              <p className="mt-1 text-base font-semibold">{fmt(result.lifetimeValue)}</p>
            </div>
            <div>
              <p className="text-white/50">Total NordGate cost</p>
              <p className="mt-1 text-base font-semibold">{fmt(result.totalCosts)}</p>
            </div>
            <div>
              <p className="text-white/50">Net value</p>
              <p className="mt-1 text-base font-semibold">{fmt(result.netValue)}</p>
            </div>
            <div>
              <p className="text-white/50">Deals to break even</p>
              <p className="mt-1 text-base font-semibold">{formatDecimal(result.breakEvenDeals, 1)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* How the number is built — the education, not a repeat of the result */}
      <div className="mt-12">
        <p className="eyebrow text-ink-400">How this is calculated</p>
        <div className="mt-4 overflow-x-auto">
          <div className="flex min-w-max items-center gap-3 rounded-2xl border border-border-soft bg-bg-soft px-6 py-6 sm:gap-4 sm:px-8">
            <EquationStep label="Meetings" sub={`${meetingsPerMonth}/mo × ${projectMonths} mo`} value={formatDecimal(result.totalMeetings, 0)} />
            <Arrow />
            <EquationStep label="Expected new customers" sub={`× ${conversionRate}% conversion`} value={formatDecimal(result.expectedCustomers, 1)} />
            <Arrow />
            <EquationStep label="Direct revenue" sub={`× ${fmt(averageOrderValue)}`} value={fmt(result.directRevenue)} />
            <Arrow />
            <EquationStep label="Estimated lifetime value" sub={`× ${customerLifetimeMonths} mo ÷ 12`} value={fmt(result.lifetimeValue)} highlight />
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-400">
        This is a projection based on the assumptions entered and is not a guarantee of future results.
      </p>

      <div className="mt-8">
        <Button href="/contact" variant="primary">
          Talk to NordGate about this scenario
        </Button>
      </div>
    </div>
  );
}

function EquationStep({ label, sub, value, highlight }: { label: string; sub: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`flex min-w-[150px] flex-col items-center gap-1 rounded-xl px-4 py-3 text-center ${
        highlight ? "bg-navy-950 text-white" : "bg-white"
      }`}
    >
      <span className="text-lg font-semibold sm:text-xl">{value}</span>
      <span className={`text-xs ${highlight ? "text-white/60" : "text-ink-500"}`}>{label}</span>
      <span className={`coord-label ${highlight ? "text-white/35" : "text-ink-400"}`}>{sub}</span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="text-ink-400" aria-hidden="true">
      →
    </span>
  );
}
