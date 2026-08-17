import { pricingConfig } from "@/data/pricing";

export type RoiInputs = {
  averageOrderValue: number;
  customerLifetimeMonths: number;
  conversionRate: number; // 0–1
  meetingsPerMonth: number;
  projectMonths: number;
};

export type RoiResult = {
  totalMeetings: number;
  expectedCustomers: number;
  directRevenue: number;
  lifetimeValue: number;
  leadListCost: number;
  retainerCost: number;
  successFee: number;
  totalCosts: number;
  netValue: number;
  returnMultiple: number;
  breakEvenDeals: number;
};

/**
 * Mirrors NordGate's supplied ROI spreadsheet model. All figures are
 * expected-value projections, not guarantees — see calculator UI copy.
 */
export function calculateRoi(inputs: RoiInputs): RoiResult {
  const { averageOrderValue, customerLifetimeMonths, conversionRate, meetingsPerMonth, projectMonths } = inputs;

  const totalMeetings = meetingsPerMonth * projectMonths;
  const expectedCustomers = totalMeetings * conversionRate;
  const directRevenue = expectedCustomers * averageOrderValue;
  // Order value is treated as annual value in the source model.
  const lifetimeValue = (directRevenue * customerLifetimeMonths) / 12;

  const leadListCost = pricingConfig.leadListFee;
  const retainerCost = pricingConfig.monthlyRetainer * projectMonths;
  const successFee = directRevenue * pricingConfig.successFeePercentage;
  const totalCosts = leadListCost + retainerCost + successFee;

  const netValue = lifetimeValue - totalCosts;
  const returnMultiple = totalCosts > 0 ? lifetimeValue / totalCosts : 0;

  // Deals required so direct revenue (deals × order value) covers total cost.
  const breakEvenDeals = averageOrderValue > 0 ? totalCosts / averageOrderValue : 0;

  return {
    totalMeetings,
    expectedCustomers,
    directRevenue,
    lifetimeValue,
    leadListCost,
    retainerCost,
    successFee,
    totalCosts,
    netValue,
    returnMultiple,
    breakEvenDeals,
  };
}
