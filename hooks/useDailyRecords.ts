'use client'

import { useEffect, useState } from 'react'
import {
  ensureTodayRecordExists,
  updateRecentActivityWithLatest,
} from '@/lib/daily-record-manager'
import { ManualDailyReport, ManualRecentActivity } from '@/lib/manual-data'

/**
 * Hook for automatic daily record management
 * Ensures a zero-valued record exists for today if missing
 * Updates recent activity with the latest record
 */
export function useDailyRecords(
  initialDailyReports: ManualDailyReport[],
  initialRecentActivity: ManualRecentActivity[]
) {
  const [dailyReports, setDailyReports] = useState<ManualDailyReport[]>(
    initialDailyReports
  )
  const [recentActivity, setRecentActivity] = useState<ManualRecentActivity[]>(
    initialRecentActivity
  )
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Ensure today's record exists on mount and when date changes
    const updateDailyRecords = () => {
      const updatedReports = ensureTodayRecordExists(dailyReports)
      const updatedActivity = updateRecentActivityWithLatest(
        updatedReports,
        recentActivity
      )

      setDailyReports(updatedReports)
      setRecentActivity(updatedActivity)
      setInitialized(true)
    }

    updateDailyRecords()

    // Check for new day at midnight
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)

    const timeUntilMidnight = tomorrow.getTime() - now.getTime()
    const midnightTimer = setTimeout(() => {
      updateDailyRecords()
      // Check again every 24 hours
      setInterval(updateDailyRecords, 24 * 60 * 60 * 1000)
    }, timeUntilMidnight)

    return () => clearTimeout(midnightTimer)
  }, [])

  return {
    dailyReports,
    recentActivity,
    setDailyReports,
    setRecentActivity,
    initialized,
  }
}
