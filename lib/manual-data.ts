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
  thisMonth: 1194.41,
  lastMonth: 8617.56,
  last3Months: 0.0,
  last6Months: 22147.59,
  thisYear: 22147.59,
  allTime: 22147.59,
  availableBalance: 1224.41,
  pendingBalance: 1960.00,
  totalEarnings: 22147.59,
  nextWithdrawalDate: "29-06-2026",
}

/**
 * Current Manual Recent Activity Data
 * ONLY add/replace/remove records the user explicitly provides
 * Do NOT generate automatic activity
 */
export const manualRecentActivity: ManualRecentActivity[] = [
  { date: "Jun 29, 2026", impressions: 2433, clicks: 30, revenue: 5.33, ctr: "1.23%", ecpm: "35.89" },
  { date: "Jun 28, 2026", impressions: 2343, clicks: 34, revenue: 4.77, ctr: "1.45%", ecpm: "30.44" },
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
  // June 2026 (Latest)
  { date: "Jun 29, 2026", impressions: 2433, clicks: 30, revenue: 5.33, ctr: "1.23%", ecpm: "35.89" },
  { date: "Jun 28, 2026", impressions: 2343, clicks: 34, revenue: 4.77, ctr: "1.45%", ecpm: "30.44" },
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
  
  // May 2026
  { date: "May 31, 2026", impressions: 12980, clicks: 452, revenue: 87.28, ctr: "3.48%", ecpm: "142.15" },
  { date: "May 30, 2026", impressions: 12971, clicks: 450, revenue: 87.22, ctr: "3.47%", ecpm: "141.10" },
  { date: "May 29, 2026", impressions: 12955, clicks: 446, revenue: 87.12, ctr: "3.44%", ecpm: "139.27" },
  { date: "May 28, 2026", impressions: 12940, clicks: 442, revenue: 87.01, ctr: "3.42%", ecpm: "138.18" },
  { date: "May 27, 2026", impressions: 12922, clicks: 438, revenue: 86.88, ctr: "3.39%", ecpm: "137.04" },
  { date: "May 26, 2026", impressions: 12901, clicks: 434, revenue: 86.72, ctr: "3.36%", ecpm: "135.27" },
  { date: "May 25, 2026", impressions: 12888, clicks: 430, revenue: 86.58, ctr: "3.34%", ecpm: "134.03" },
  { date: "May 24, 2026", impressions: 12864, clicks: 426, revenue: 86.36, ctr: "3.31%", ecpm: "133.14" },
  { date: "May 23, 2026", impressions: 12841, clicks: 423, revenue: 86.14, ctr: "3.29%", ecpm: "132.05" },
  { date: "May 22, 2026", impressions: 12817, clicks: 419, revenue: 85.92, ctr: "3.27%", ecpm: "131.18" },
  { date: "May 21, 2026", impressions: 12794, clicks: 415, revenue: 85.69, ctr: "3.24%", ecpm: "130.06" },
  { date: "May 20, 2026", impressions: 12770, clicks: 412, revenue: 85.47, ctr: "3.22%", ecpm: "129.27" },
  { date: "May 19, 2026", impressions: 12746, clicks: 408, revenue: 85.25, ctr: "3.20%", ecpm: "128.11" },
  { date: "May 18, 2026", impressions: 12723, clicks: 405, revenue: 85.02, ctr: "3.18%", ecpm: "127.25" },
  { date: "May 17, 2026", impressions: 12699, clicks: 401, revenue: 84.80, ctr: "3.16%", ecpm: "126.10" },
  { date: "May 16, 2026", impressions: 12676, clicks: 397, revenue: 84.57, ctr: "3.13%", ecpm: "125.21" },
  { date: "May 15, 2026", impressions: 12652, clicks: 394, revenue: 84.34, ctr: "3.11%", ecpm: "124.08" },
  { date: "May 14, 2026", impressions: 12628, clicks: 390, revenue: 84.12, ctr: "3.09%", ecpm: "123.17" },
  { date: "May 13, 2026", impressions: 12605, clicks: 386, revenue: 83.89, ctr: "3.06%", ecpm: "122.03" },
  { date: "May 12, 2026", impressions: 12581, clicks: 383, revenue: 83.65, ctr: "3.04%", ecpm: "121.19" },
  { date: "May 11, 2026", impressions: 12558, clicks: 379, revenue: 83.42, ctr: "3.02%", ecpm: "120.05" },
  { date: "May 10, 2026", impressions: 12534, clicks: 376, revenue: 83.21, ctr: "3.00%", ecpm: "119.33" },
  { date: "May 09, 2026", impressions: 12510, clicks: 372, revenue: 82.99, ctr: "2.97%", ecpm: "118.18" },
  { date: "May 08, 2026", impressions: 12487, clicks: 369, revenue: 82.77, ctr: "2.95%", ecpm: "117.04" },
  { date: "May 07, 2026", impressions: 35673, clicks: 2886, revenue: 987.44, ctr: "8.09%", ecpm: "487.33" },
  { date: "May 06, 2026", impressions: 35504, clicks: 2824, revenue: 971.15, ctr: "7.95%", ecpm: "480.22" },
  { date: "May 05, 2026", impressions: 35336, clicks: 2765, revenue: 954.88, ctr: "7.82%", ecpm: "474.07" },
  { date: "May 04, 2026", impressions: 35165, clicks: 2707, revenue: 938.41, ctr: "7.70%", ecpm: "468.19" },
  { date: "May 03, 2026", impressions: 34993, clicks: 2648, revenue: 922.75, ctr: "7.57%", ecpm: "462.08" },
  { date: "May 02, 2026", impressions: 34821, clicks: 2591, revenue: 906.18, ctr: "7.44%", ecpm: "456.22" },
  { date: "May 01, 2026", impressions: 34652, clicks: 2543, revenue: 890.33, ctr: "7.34%", ecpm: "450.44" },
  
  // April 2026
  { date: "Apr 30, 2026", impressions: 7250, clicks: 736, revenue: 81.40, ctr: "10.14%", ecpm: "165.50" },
  { date: "Apr 29, 2026", impressions: 7248, clicks: 735, revenue: 80.95, ctr: "10.13%", ecpm: "165.00" },
  { date: "Apr 28, 2026", impressions: 7280, clicks: 715, revenue: 89.00, ctr: "9.82%", ecpm: "135.00" },
  { date: "Apr 27, 2026", impressions: 7250, clicks: 700, revenue: 88.10, ctr: "9.66%", ecpm: "134.60" },
  { date: "Apr 26, 2026", impressions: 7280, clicks: 715, revenue: 89.00, ctr: "9.82%", ecpm: "135.00" },
  { date: "Apr 25, 2026", impressions: 7250, clicks: 700, revenue: 88.10, ctr: "9.66%", ecpm: "134.60" },
  { date: "Apr 24, 2026", impressions: 7230, clicks: 705, revenue: 87.45, ctr: "9.75%", ecpm: "134.80" },
  { date: "Apr 23, 2026", impressions: 7215, clicks: 710, revenue: 86.20, ctr: "9.84%", ecpm: "135.00" },
  { date: "Apr 22, 2026", impressions: 7780, clicks: 731, revenue: 88.95, ctr: "9.40%", ecpm: "129.60" },
  { date: "Apr 21, 2026", impressions: 7770, clicks: 732, revenue: 89.80, ctr: "9.42%", ecpm: "130.80" },
  { date: "Apr 20, 2026", impressions: 7750, clicks: 733, revenue: 90.10, ctr: "9.46%", ecpm: "131.20" },
  { date: "Apr 19, 2026", impressions: 7720, clicks: 733, revenue: 89.20, ctr: "9.50%", ecpm: "130.50" },
  { date: "Apr 18, 2026", impressions: 7690, clicks: 733, revenue: 88.75, ctr: "9.53%", ecpm: "129.90" },
  { date: "Apr 17, 2026", impressions: 7650, clicks: 732, revenue: 87.90, ctr: "9.57%", ecpm: "128.40" },
  { date: "Apr 16, 2026", impressions: 7620, clicks: 731, revenue: 86.45, ctr: "9.59%", ecpm: "126.80" },
  { date: "Apr 15, 2026", impressions: 7604, clicks: 730, revenue: 85.31, ctr: "9.60%", ecpm: "125.10" },
  { date: "Apr 14, 2026", impressions: 7650, clicks: 738, revenue: 88.20, ctr: "9.65%", ecpm: "130.10" },
  { date: "Apr 13, 2026", impressions: 7610, clicks: 735, revenue: 85.75, ctr: "9.66%", ecpm: "123.80" },
  { date: "Apr 12, 2026", impressions: 7580, clicks: 731, revenue: 82.40, ctr: "9.64%", ecpm: "120.50" },
  { date: "Apr 11, 2026", impressions: 7630, clicks: 735, revenue: 86.33, ctr: "9.63%", ecpm: "120.00" },
  { date: "Apr 09, 2026", impressions: 7212, clicks: 712, revenue: 81.40, ctr: "9.87%", ecpm: "119.20" },
  { date: "Apr 08, 2026", impressions: 7210, clicks: 710, revenue: 84.85, ctr: "9.85%", ecpm: "117.50" },
  { date: "Apr 07, 2026", impressions: 7280, clicks: 735, revenue: 84.35, ctr: "10.10%", ecpm: "118.00" },
  { date: "Apr 06, 2026", impressions: 5980, clicks: 700, revenue: 82.00, ctr: "11.71%", ecpm: "122.00" },
  { date: "Apr 05, 2026", impressions: 5280, clicks: 770, revenue: 85.00, ctr: "14.58%", ecpm: "120.00" },
  { date: "Apr 04, 2026", impressions: 5620, clicks: 738, revenue: 87.65, ctr: "13.13%", ecpm: "118.40" },
  { date: "Apr 03, 2026", impressions: 5780, clicks: 740, revenue: 89.11, ctr: "12.80%", ecpm: "119.10" },
  { date: "Apr 02, 2026", impressions: 5540, clicks: 736, revenue: 88.21, ctr: "13.29%", ecpm: "117.60" },
  { date: "Apr 01, 2026", impressions: 5380, clicks: 735, revenue: 86.31, ctr: "13.65%", ecpm: "115.00" },
  
  // March 2026
  { date: "Mar 31, 2026", impressions: 14600, clicks: 565, revenue: 175.30, ctr: "3.87%", ecpm: "12.00" },
  { date: "Mar 15, 2026", impressions: 13800, clicks: 535, revenue: 165.80, ctr: "3.88%", ecpm: "12.01" },
  { date: "Mar 01, 2026", impressions: 13000, clicks: 505, revenue: 157.50, ctr: "3.88%", ecpm: "12.12" },
  
  // February 2026
  { date: "Feb 28, 2026", impressions: 12800, clicks: 495, revenue: 155.25, ctr: "3.87%", ecpm: "12.13" },
  { date: "Feb 15, 2026", impressions: 12000, clicks: 465, revenue: 145.10, ctr: "3.88%", ecpm: "12.09" },
  { date: "Feb 01, 2026", impressions: 11200, clicks: 435, revenue: 137.10, ctr: "3.88%", ecpm: "12.23" },
  
  // January 2026
  { date: "Jan 31, 2026", impressions: 11000, clicks: 425, revenue: 135.40, ctr: "3.86%", ecpm: "12.31" },
  { date: "Jan 15, 2026", impressions: 10200, clicks: 395, revenue: 125.20, ctr: "3.87%", ecpm: "12.27" },
  { date: "Jan 01, 2026", impressions: 9500, clicks: 370, revenue: 120.25, ctr: "3.89%", ecpm: "12.66" },
  
  // December 2025
  { date: "Dec 31, 2025", impressions: 9000, clicks: 350, revenue: 115.50, ctr: "3.89%", ecpm: "12.83" },
  { date: "Dec 15, 2025", impressions: 8200, clicks: 320, revenue: 105.30, ctr: "3.90%", ecpm: "12.84" },
  { date: "Dec 01, 2025", impressions: 7800, clicks: 305, revenue: 98.30, ctr: "3.91%", ecpm: "12.60" },
  
  // November 2025
  { date: "Nov 30, 2025", impressions: 7500, clicks: 290, revenue: 95.75, ctr: "3.87%", ecpm: "12.77" },
  { date: "Nov 15, 2025", impressions: 6800, clicks: 260, revenue: 85.50, ctr: "3.82%", ecpm: "12.57" },
  { date: "Nov 01, 2025", impressions: 6050, clicks: 235, revenue: 78.20, ctr: "3.88%", ecpm: "12.92" },
  
  // October 2025
  { date: "Oct 30, 2025", impressions: 5850, clicks: 225, revenue: 75.15, ctr: "3.85%", ecpm: "12.85" },
  { date: "Oct 15, 2025", impressions: 5200, clicks: 200, revenue: 65.40, ctr: "3.85%", ecpm: "12.58" },
  { date: "Oct 03, 2025", impressions: 4500, clicks: 173, revenue: 57.05, ctr: "3.84%", ecpm: "12.68" },
  { date: "Oct 02, 2025", impressions: 4350, clicks: 168, revenue: 56.10, ctr: "3.86%", ecpm: "12.89" },
  { date: "Oct 01, 2025", impressions: 4200, clicks: 162, revenue: 55.20, ctr: "3.86%", ecpm: "13.14" },
  
  // September 2025
  { date: "Sep 10, 2025", impressions: 4050, clicks: 155, revenue: 54.30, ctr: "3.83%", ecpm: "13.41" },
  { date: "Sep 09, 2025", impressions: 3950, clicks: 150, revenue: 53.10, ctr: "3.80%", ecpm: "13.44" },
  { date: "Sep 08, 2025", impressions: 3900, clicks: 148, revenue: 52.25, ctr: "3.79%", ecpm: "13.40" },
  { date: "Sep 07, 2025", impressions: 3820, clicks: 145, revenue: 51.40, ctr: "3.80%", ecpm: "13.46" },
  { date: "Sep 06, 2025", impressions: 3750, clicks: 142, revenue: 50.15, ctr: "3.79%", ecpm: "13.37" },
  { date: "Sep 05, 2025", impressions: 3680, clicks: 140, revenue: 49.25, ctr: "3.80%", ecpm: "13.38" },
  { date: "Sep 04, 2025", impressions: 3550, clicks: 135, revenue: 48.10, ctr: "3.80%", ecpm: "13.55" },
  { date: "Sep 03, 2025", impressions: 3420, clicks: 132, revenue: 47.30, ctr: "3.86%", ecpm: "13.82" },
  { date: "Sep 02, 2025", impressions: 3380, clicks: 128, revenue: 46.15, ctr: "3.79%", ecpm: "13.65" },
  { date: "Sep 01, 2025", impressions: 3250, clicks: 125, revenue: 45.20, ctr: "3.85%", ecpm: "13.91" },
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
