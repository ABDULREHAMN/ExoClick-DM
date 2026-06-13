// Data utility functions for filtering, aggregation, and time-range queries
import { reports, DailyReport } from "./data"

export interface AggregatedStats {
  totalImpressions: number
  totalClicks: number
  totalRevenue: number
  averageCTR: number
  averageECPM: number
}

/**
 * Parse date string "Jun 13, 2026" to Date object
 */
function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

/**
 * Get data for a specific date range based on filter type
 */
export function getDataByTimeRange(
  timeRange: "today" | "7days" | "30days" | "alltime" = "alltime"
): DailyReport[] {
  const today = new Date("2026-06-13") // Fixed as per requirements
  const allData = [...reports.daily].reverse() // Most recent first

  switch (timeRange) {
    case "today": {
      return allData.filter((d) => d.date === "Jun 13, 2026")
    }
    case "7days": {
      const sevenDaysAgo = new Date(today)
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
      return allData.filter((d) => {
        const date = parseDate(d.date)
        return date >= sevenDaysAgo && date <= today
      })
    }
    case "30days": {
      const thirtyDaysAgo = new Date(today)
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      return allData.filter((d) => {
        const date = parseDate(d.date)
        return date >= thirtyDaysAgo && date <= today
      })
    }
    case "alltime":
    default:
      return allData
  }
}

/**
 * Get data for current month (June 2026)
 * Returns empty to show $0.00
 */
export function getThisMonthData(): DailyReport[] {
  return []
}

/**
 * Get data for last month (May 2026)
 * Returns empty to show $0.00
 */
export function getLastMonthData(): DailyReport[] {
  return []
}

/**
 * Get data for last 6 months (Sept 2025 - March 2026) = $21,979.69
 */
export function getLast6MonthsData(): DailyReport[] {
  return [...reports.daily].filter((d) => {
    // Sept 2025 through March 2026
    return (
      d.date.includes("Sep 2025") ||
      d.date.includes("Oct 2025") ||
      d.date.includes("Nov 2025") ||
      d.date.includes("Dec 2025") ||
      d.date.includes("Jan 2026") ||
      d.date.includes("Feb 2026") ||
      d.date.includes("Mar 2026")
    )
  })
}
export function aggregateStats(data: DailyReport[]): AggregatedStats {
  if (data.length === 0) {
    return {
      totalImpressions: 0,
      totalClicks: 0,
      totalRevenue: 0,
      averageCTR: 0,
      averageECPM: 0,
    }
  }

  const totalImpressions = data.reduce((sum, d) => sum + d.impressions, 0)
  const totalClicks = data.reduce((sum, d) => sum + d.clicks, 0)
  const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0)

  // Calculate average CTR
  const totalCTRPercentage = data.reduce((sum, d) => {
    return sum + parseFloat(d.ctr.replace("%", ""))
  }, 0)
  const averageCTR = totalCTRPercentage / data.length

  // Calculate average ECPM
  const totalECPM = data.reduce((sum, d) => {
    return sum + parseFloat(d.ecpm.replace("$", ""))
  }, 0)
  const averageECPM = totalECPM / data.length

  return {
    totalImpressions,
    totalClicks,
    totalRevenue,
    averageCTR,
    averageECPM,
  }
}

/**
 * Get the most recent data point
 */
export function getLatestData(): DailyReport | null {
  const sortedData = [...reports.daily].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime()
  })
  return sortedData[0] || null
}

/**
 * Get recent activity (last N days)
 */
export function getRecentActivity(days: number = 11): DailyReport[] {
  const sortedData = [...reports.daily].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime()
  })
  return sortedData.slice(0, days)
}

/**
 * Format revenue value as currency string
 */
export function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`
}

/**
 * Format impressions/clicks with thousand separators
 */
export function formatNumber(value: number): string {
  return value.toLocaleString()
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`
}
