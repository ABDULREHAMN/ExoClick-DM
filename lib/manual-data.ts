/**
 * MANUAL DATA CONTROL MODE
 * All dashboard values are manually controlled. No automatic calculations.
 * Only update the exact fields specified by the user.
 * User values always have highest priority.
 */

export interface ManualDashboardValues {
  thisMonth: number
  lastMonth: number
  last3Months: number
  last6Months: number
  thisYear: number
  allTime: number
  availableBalance: number
  pendingBalance: number
  totalEarnings: number
  nextWithdrawalDate: string
}

export interface ManualRecentActivity {
  date: string
  impressions: number
  clicks: number
  revenue: number
  ctr: string
  ecpm: string
}

export interface ManualDailyReport {
  date: string
  impressions: number
  clicks: number
  revenue: number
  ctr: string
  ecpm: string
}

/**
 * Current Manual Dashboard Values
 * ONLY modify these exact values when user provides new data
 * Do NOT calculate or derive these values
 */
export const manualDashboard: ManualDashboardValues = {
  thisMonth: 1184.31,
  lastMonth: 8617.56,
  last3Months: 0.0,
  last6Months: 22137.49,
  thisYear: 22137.49,
  allTime: 22137.49,
  availableBalance: 1184.31,
  pendingBalance: 0.0,
  totalEarnings: 22137.49,
  nextWithdrawalDate: "29-06-2026",
}

/**
 * Current Manual Recent Activity Data
 * ONLY add/replace/remove records the user explicitly provides
 * Do NOT generate automatic activity
 */
export const manualRecentActivity: ManualRecentActivity[] = [
  { date: "Jun 27, 2026", impressions: 2458, clicks: 42, revenue: 4.25, ctr: "1.71%", ecpm: "35.18" },
  { date: "Jun 26, 2026", impressions: 2322, clicks: 37, revenue: 3.87, ctr: "1.59%", ecpm: "34.32" },
  { date: "Jun 25, 2026", impressions: 5464, clicks: 165, revenue: 13.98, ctr: "3.02%", ecpm: "53.98" },
  { date: "Jun 24, 2026", impressions: 5275, clicks: 156, revenue: 13.21, ctr: "2.96%", ecpm: "52.24" },
  { date: "Jun 23, 2026", impressions: 5168, clicks: 151, revenue: 12.86, ctr: "2.92%", ecpm: "51.59" },
  { date: "Jun 22, 2026", impressions: 5052, clicks: 146, revenue: 12.58, ctr: "2.89%", ecpm: "50.93" },
  { date: "Jun 21, 2026", impressions: 4946, clicks: 141, revenue: 12.31, ctr: "2.85%", ecpm: "50.28" },
  { date: "Jun 20, 2026", impressions: 4854, clicks: 136, revenue: 12.03, ctr: "2.80%", ecpm: "49.62" },
  { date: "Jun 19, 2026", impressions: 4765, clicks: 131, revenue: 11.79, ctr: "2.75%", ecpm: "48.97" },
  { date: "Jun 18, 2026", impressions: 4678, clicks: 126, revenue: 11.52, ctr: "2.69%", ecpm: "48.31" },
  { date: "Jun 17, 2026", impressions: 4589, clicks: 122, revenue: 11.24, ctr: "2.66%", ecpm: "47.66" },
  { date: "Jun 16, 2026", impressions: 4506, clicks: 118, revenue: 10.98, ctr: "2.62%", ecpm: "47.01" },
  { date: "Jun 15, 2026", impressions: 4418, clicks: 113, revenue: 10.73, ctr: "2.56%", ecpm: "46.35" },
  { date: "Jun 14, 2026", impressions: 4325, clicks: 109, revenue: 10.48, ctr: "2.52%", ecpm: "45.72" },
  { date: "Jun 13, 2026", impressions: 4232, clicks: 105, revenue: 10.22, ctr: "2.48%", ecpm: "45.00" },
]

/**
 * Current Manual Daily Reports Data
 * ONLY add/replace/remove records the user explicitly provides
 */
export const manualDailyReports: ManualDailyReport[] = [
  { date: "Jun 27, 2026", impressions: 2458, clicks: 42, revenue: 4.25, ctr: "1.71%", ecpm: "35.18" },
  { date: "Jun 26, 2026", impressions: 2322, clicks: 37, revenue: 3.87, ctr: "1.59%", ecpm: "34.32" },
  { date: "Jun 25, 2026", impressions: 5464, clicks: 165, revenue: 13.98, ctr: "3.02%", ecpm: "53.98" },
  { date: "Jun 24, 2026", impressions: 5275, clicks: 156, revenue: 13.21, ctr: "2.96%", ecpm: "52.24" },
  { date: "Jun 23, 2026", impressions: 5168, clicks: 151, revenue: 12.86, ctr: "2.92%", ecpm: "51.59" },
  { date: "Jun 22, 2026", impressions: 5052, clicks: 146, revenue: 12.58, ctr: "2.89%", ecpm: "50.93" },
  { date: "Jun 21, 2026", impressions: 4946, clicks: 141, revenue: 12.31, ctr: "2.85%", ecpm: "50.28" },
  { date: "Jun 20, 2026", impressions: 4854, clicks: 136, revenue: 12.03, ctr: "2.80%", ecpm: "49.62" },
  { date: "Jun 19, 2026", impressions: 4765, clicks: 131, revenue: 11.79, ctr: "2.75%", ecpm: "48.97" },
  { date: "Jun 18, 2026", impressions: 4678, clicks: 126, revenue: 11.52, ctr: "2.69%", ecpm: "48.31" },
  { date: "Jun 17, 2026", impressions: 4589, clicks: 122, revenue: 11.24, ctr: "2.66%", ecpm: "47.66" },
  { date: "Jun 16, 2026", impressions: 4506, clicks: 118, revenue: 10.98, ctr: "2.62%", ecpm: "47.01" },
  { date: "Jun 15, 2026", impressions: 4418, clicks: 113, revenue: 10.73, ctr: "2.56%", ecpm: "46.35" },
  { date: "Jun 14, 2026", impressions: 4325, clicks: 109, revenue: 10.48, ctr: "2.52%", ecpm: "45.72" },
  { date: "Jun 13, 2026", impressions: 4232, clicks: 105, revenue: 10.22, ctr: "2.48%", ecpm: "45.00" },
  { date: "Jun 12, 2026", impressions: 12564, clicks: 365, revenue: 83.98, ctr: "2.91%", ecpm: "83.98" },
  { date: "Jun 11, 2026", impressions: 12536, clicks: 363, revenue: 83.54, ctr: "2.90%", ecpm: "83.54" },
  { date: "Jun 10, 2026", impressions: 12503, clicks: 361, revenue: 83.21, ctr: "2.89%", ecpm: "83.21" },
  { date: "Jun 09, 2026", impressions: 12482, clicks: 359, revenue: 83.04, ctr: "2.88%", ecpm: "83.00" },
  { date: "Jun 08, 2026", impressions: 12455, clicks: 357, revenue: 82.77, ctr: "2.87%", ecpm: "82.71" },
  { date: "Jun 07, 2026", impressions: 12426, clicks: 354, revenue: 82.43, ctr: "2.85%", ecpm: "82.36" },
  { date: "Jun 06, 2026", impressions: 12405, clicks: 351, revenue: 82.11, ctr: "2.83%", ecpm: "82.02" },
  { date: "Jun 05, 2026", impressions: 12388, clicks: 349, revenue: 81.88, ctr: "2.82%", ecpm: "81.67" },
  { date: "Jun 04, 2026", impressions: 12361, clicks: 347, revenue: 81.54, ctr: "2.81%", ecpm: "81.33" },
  { date: "Jun 03, 2026", impressions: 12332, clicks: 345, revenue: 81.22, ctr: "2.80%", ecpm: "81.00" },
  { date: "Jun 02, 2026", impressions: 12984, clicks: 454, revenue: 87.33, ctr: "3.50%", ecpm: "143.33" },
  { date: "Jun 01, 2026", impressions: 12537, clicks: 442, revenue: 81.59, ctr: "3.53%", ecpm: "141.27" },
]

/**
 * Get manual dashboard values
 */
export function getManualDashboard(): ManualDashboardValues {
  return { ...manualDashboard }
}

/**
 * Get manual recent activity
 */
export function getManualRecentActivity(): ManualRecentActivity[] {
  return [...manualRecentActivity]
}

/**
 * Get manual daily reports
 */
export function getManualDailyReports(): ManualDailyReport[] {
  return [...manualDailyReports]
}
