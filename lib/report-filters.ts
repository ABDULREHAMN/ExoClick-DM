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
 * Shows EVERY SINGLE DAY within the selected range as individual rows
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
      // Every day within the last 7 days from today
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 6) // Include today + 6 previous days = 7 days
      endDate = new Date(today)
      break
    
    case "Last 30 Days":
      // Every day within the last 30 days from today
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 29) // Include today + 29 previous days = 30 days
      endDate = new Date(today)
      break
    
    case "Last 3 Months":
      // Every day from the last 3 months (including partial months)
      startDate = new Date(today)
      startDate.setMonth(startDate.getMonth() - 2) // Go back 2 full months + current month
      startDate.setDate(1) // Start from first day of that month
      endDate = new Date(today)
      break
    
    case "Last 6 Months":
      // Every day from the last 6 months (including partial months)
      startDate = new Date(today)
      startDate.setMonth(startDate.getMonth() - 5) // Go back 5 full months + current month
      startDate.setDate(1) // Start from first day of that month
      endDate = new Date(today)
      break
    
    case "This Month":
      // Every day in the current month
      startDate = new Date(currentYear, currentMonth, 1)
      endDate = new Date(today)
      break
    
    case "Last Month":
      // Every day in the previous month
      startDate = new Date(currentYear, currentMonth - 1, 1)
      endDate = new Date(currentYear, currentMonth, 0) // Last day of previous month
      break
    
    case "This Year":
      // Every day from January 1 to today of current year
      startDate = new Date(currentYear, 0, 1)
      endDate = new Date(today)
      break
    
    case "All Time":
      // Every single imported daily record, no date filtering
      startDate = null
      endDate = new Date("2099-12-31") // Far future to include all dates
      break
    
    default:
      // Default to Last 7 Days
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() - 6)
      endDate = new Date(today)
  }

  // Filter reports within date range - INCLUDE EVERY MATCHING DAY
  const filtered = allReports.filter((report) => {
    const reportDate = parseDate(report.date)
    
    // Reset time to compare dates only (ignore time portion)
    reportDate.setHours(0, 0, 0, 0)
    const compareStart = startDate ? new Date(startDate) : null
    if (compareStart) compareStart.setHours(0, 0, 0, 0)
    
    const compareEnd = new Date(endDate)
    compareEnd.setHours(0, 0, 0, 0)
    
    // Check if report date falls within range
    if (compareStart && reportDate < compareStart) return false
    if (reportDate > compareEnd) return false
    
    return true
  })

  // Sort by date (newest first) - EVERY DAY AS INDIVIDUAL ROW
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
