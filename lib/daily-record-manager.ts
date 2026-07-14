/**
 * Daily Record Manager
 * Handles automatic creation of daily records at 00:00 with zero values
 * Ensures one record per day, never skips dates, always appends new records
 */

import { ManualDailyReport, ManualRecentActivity } from './manual-data'

export interface DailyRecordZero extends ManualDailyReport {
  isZeroRecord?: boolean
}

/**
 * Format date to "MMM DD, YYYY" format (e.g., "Jul 13, 2026")
 */
export function formatDateForActivity(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }
  return date.toLocaleDateString('en-US', options)
}

/**
 * Format date to "MMM DD, YYYY" format for daily reports
 */
export function formatDateForReport(date: Date): string {
  return formatDateForActivity(date)
}

/**
 * Check if a date record exists in the data
 */
export function hasDateRecord(
  dateStr: string,
  records: ManualDailyReport[]
): boolean {
  return records.some((r) => r.date === dateStr)
}

/**
 * Get the latest date from records
 */
export function getLatestRecordDate(
  records: ManualDailyReport[]
): Date | null {
  if (records.length === 0) return null

  // Parse the first record (newest first)
  const dateStr = records[0].date
  const parts = dateStr.match(/([A-Za-z]+)\s+(\d+),\s+(\d+)/)
  if (!parts) return null

  const monthStr = parts[1]
  const day = parseInt(parts[2])
  const year = parseInt(parts[3])

  const monthMap: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  }

  const month = monthMap[monthStr] ?? 0
  return new Date(year, month, day, 0, 0, 0)
}

/**
 * Create a zero-valued daily record for a specific date
 */
export function createZeroDailyRecord(date: Date): ManualDailyReport {
  return {
    date: formatDateForReport(date),
    impressions: 0,
    clicks: 0,
    revenue: 0,
    ctr: '0.00%',
    ecpm: '0.00',
  }
}

/**
 * Ensure daily records exist for all dates from startDate to endDate
 * Fills gaps with zero-valued records
 */
export function ensureDailyRecordsExist(
  records: ManualDailyReport[],
  startDate: Date,
  endDate: Date
): ManualDailyReport[] {
  const result = [...records]
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    const dateStr = formatDateForReport(currentDate)

    if (!hasDateRecord(dateStr, result)) {
      // Insert zero-valued record at the top (newest first)
      result.unshift(createZeroDailyRecord(new Date(currentDate)))
    }

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return result
}

/**
 * Check if today's record exists, create if missing
 */
export function ensureTodayRecordExists(
  records: ManualDailyReport[]
): ManualDailyReport[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const todayStr = formatDateForReport(today)

  if (!hasDateRecord(todayStr, records)) {
    // Add today's zero-valued record to the top
    return [createZeroDailyRecord(today), ...records]
  }

  return records
}

/**
 * Update recent activity with today's record (if zero) or latest data
 */
export function updateRecentActivityWithLatest(
  dailyReports: ManualDailyReport[],
  recentActivity: ManualRecentActivity[]
): ManualRecentActivity[] {
  if (dailyReports.length === 0) return recentActivity

  const latestReport = dailyReports[0]
  const latestActivityDate = recentActivity.length > 0 ? recentActivity[0].date : null

  // If latest daily report is newer, update recent activity
  if (latestReport.date !== latestActivityDate) {
    return [
      {
        date: latestReport.date,
        impressions: latestReport.impressions,
        clicks: latestReport.clicks,
        revenue: latestReport.revenue,
        ctr: latestReport.ctr,
        ecpm: latestReport.ecpm,
      },
      ...recentActivity,
    ]
  }

  return recentActivity
}

/**
 * Replace zero values in a record with actual data
 * Only updates fields that were zero, never modifies non-zero values
 */
export function replaceZeroValuesInRecord(
  targetDateStr: string,
  records: ManualDailyReport[],
  newData: Partial<ManualDailyReport>
): ManualDailyReport[] {
  return records.map((record) => {
    if (record.date === targetDateStr) {
      return {
        ...record,
        // Only replace zero values
        impressions: newData.impressions !== undefined && record.impressions === 0 ? newData.impressions : record.impressions,
        clicks: newData.clicks !== undefined && record.clicks === 0 ? newData.clicks : record.clicks,
        revenue: newData.revenue !== undefined && record.revenue === 0 ? newData.revenue : record.revenue,
        ctr: newData.ctr !== undefined && record.ctr === '0.00%' ? newData.ctr : record.ctr,
        ecpm: newData.ecpm !== undefined && record.ecpm === '0.00' ? newData.ecpm : record.ecpm,
      }
    }
    return record
  })
}
