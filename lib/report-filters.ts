import { manualDailyReports } from "./manual-data"

export interface FilteredReport {
  date: string
  impressions: number
  clicks: number
  revenue: number
  ctr: string
  ecpm: string
}

/**
 * Convert manual daily report to formatted report for display
 */
function formatReport(report: any): FilteredReport {
  const impressions = typeof report.impressions === "number" ? report.impressions : parseInt(report.impressions.toString().replace(/,/g, ""))
  const clicks = typeof report.clicks === "number" ? report.clicks : parseInt(report.clicks.toString().replace(/,/g, ""))
  const revenue = typeof report.revenue === "number" ? report.revenue : parseFloat(report.revenue.toString().replace("$", ""))
  const ctr = typeof report.ctr === "string" ? report.ctr : `${(clicks / impressions * 100).toFixed(2)}%`
  const ecpm = typeof report.ecpm === "string" ? report.ecpm : `$${(revenue / impressions * 1000).toFixed(2)}`

  return {
    date: report.date,
    impressions,
    clicks,
    revenue,
    ctr,
    ecpm,
  }
}

/**
 * Parse date string in format "Jun 27, 2026"
 */
function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

/**
 * Get the latest date from reports
 */
function getLatestDate(): Date {
  if (manualDailyReports.length === 0) return new Date()
  const latestReport = manualDailyReports[0]
  return parseDate(latestReport.date)
}

/**
 * Filter reports based on date range
 */
export function getReportsByDateRange(range: string): FilteredReport[] {
  const allReports = [...manualDailyReports]
  const today = getLatestDate()

  let startDate: Date | null = null
  let endDate: Date = today
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  switch (range) {
    case "Last 7 Days":
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 7)
      break
    case "Last 30 Days":
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 30)
      break
    case "Last 3 Months":
      startDate = new Date(today)
      startDate.setMonth(startDate.getMonth() - 3)
      break
    case "Last 6 Months":
      startDate = new Date(today)
      startDate.setMonth(startDate.getMonth() - 6)
      break
    case "This Month":
      startDate = new Date(currentYear, currentMonth, 1)
      break
    case "Last Month":
      startDate = new Date(currentYear, currentMonth - 1, 1)
      endDate = new Date(currentYear, currentMonth, 0)
      break
    case "This Year":
      startDate = new Date(currentYear, 0, 1)
      break
    case "All Time":
      // Return all reports sorted by date (newest first)
      return allReports
        .map(formatReport)
        .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    default:
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 7)
  }

  // Filter reports within date range
  const filtered = allReports.filter((report) => {
    const reportDate = parseDate(report.date)
    if (startDate && reportDate < startDate) return false
    if (reportDate > endDate) return false
    return true
  })

  // Sort by date (newest first)
  return filtered
    .map(formatReport)
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
}

/**
 * Calculate totals from filtered reports
 */
export function calculateReportTotals(reports: FilteredReport[]) {
  if (reports.length === 0) {
    return {
      totalRevenue: "0.00",
      totalImpressions: "0",
      totalClicks: "0",
      avgCTR: "0.00%",
      avgECPM: "$0.00",
    }
  }

  const totalRevenue = reports.reduce((sum, report) => sum + report.revenue, 0)
  const totalImpressions = reports.reduce((sum, report) => sum + report.impressions, 0)
  const totalClicks = reports.reduce((sum, report) => sum + report.clicks, 0)

  const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00"
  const avgECPM = totalImpressions > 0 ? ((totalRevenue / totalImpressions) * 1000).toFixed(2) : "0.00"

  return {
    totalRevenue: totalRevenue.toFixed(2),
    totalImpressions: totalImpressions.toLocaleString(),
    totalClicks: totalClicks.toLocaleString(),
    avgCTR: `${avgCTR}%`,
    avgECPM: `$${avgECPM}`,
  }
}
