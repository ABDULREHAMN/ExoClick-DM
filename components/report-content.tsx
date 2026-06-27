"use client"
import { useState, useMemo } from "react"
import { Download, Filter, RefreshCw, BarChart2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getReportsByDateRange, calculateReportTotals, type FilteredReport } from "@/lib/report-filters"

// Legacy hardcoded data - no longer used
const reportData = {
  "All Time": {
    "All Countries": {
      "All Devices": [
        // June 2026
        { date: "Jun 13, 2026", impressions: "4,322", clicks: "187", ctr: "4.33%", ecpm: "$83.32", revenue: "$32.87" },
        { date: "Jun 12, 2026", impressions: "12,564", clicks: "365", ctr: "2.91%", ecpm: "$83.98", revenue: "$83.98" },
        { date: "Jun 11, 2026", impressions: "12,536", clicks: "363", ctr: "2.90%", ecpm: "$83.54", revenue: "$83.54" },
        { date: "Jun 10, 2026", impressions: "12,503", clicks: "361", ctr: "2.89%", ecpm: "$83.21", revenue: "$83.21" },
        { date: "Jun 09, 2026", impressions: "12,482", clicks: "359", ctr: "2.88%", ecpm: "$83.00", revenue: "$83.04" },
        { date: "Jun 08, 2026", impressions: "12,455", clicks: "357", ctr: "2.87%", ecpm: "$82.71", revenue: "$82.77" },
        { date: "Jun 07, 2026", impressions: "12,426", clicks: "354", ctr: "2.85%", ecpm: "$82.36", revenue: "$82.43" },
        { date: "Jun 06, 2026", impressions: "12,405", clicks: "351", ctr: "2.83%", ecpm: "$82.02", revenue: "$82.11" },
        { date: "Jun 05, 2026", impressions: "12,388", clicks: "349", ctr: "2.82%", ecpm: "$81.67", revenue: "$81.88" },
        { date: "Jun 04, 2026", impressions: "12,361", clicks: "347", ctr: "2.81%", ecpm: "$81.33", revenue: "$81.54" },
        { date: "Jun 03, 2026", impressions: "12,332", clicks: "345", ctr: "2.80%", ecpm: "$81.00", revenue: "$81.22" },
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        // May 2026
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 30, 2026", impressions: "12,971", clicks: "450", ctr: "3.47%", ecpm: "$141.10", revenue: "$87.22" },
        { date: "May 29, 2026", impressions: "12,955", clicks: "446", ctr: "3.44%", ecpm: "$139.27", revenue: "$87.12" },
        { date: "May 28, 2026", impressions: "12,940", clicks: "442", ctr: "3.42%", ecpm: "$138.18", revenue: "$87.01" },
        { date: "May 27, 2026", impressions: "12,922", clicks: "438", ctr: "3.39%", ecpm: "$137.04", revenue: "$86.88" },
        { date: "May 26, 2026", impressions: "12,901", clicks: "434", ctr: "3.36%", ecpm: "$135.27", revenue: "$86.72" },
        { date: "May 25, 2026", impressions: "12,888", clicks: "430", ctr: "3.34%", ecpm: "$134.03", revenue: "$86.58" },
        { date: "May 24, 2026", impressions: "12,864", clicks: "426", ctr: "3.31%", ecpm: "$133.14", revenue: "$86.36" },
        { date: "May 23, 2026", impressions: "12,841", clicks: "423", ctr: "3.29%", ecpm: "$132.05", revenue: "$86.14" },
        { date: "May 22, 2026", impressions: "12,817", clicks: "419", ctr: "3.27%", ecpm: "$131.18", revenue: "$85.92" },
        { date: "May 21, 2026", impressions: "12,794", clicks: "415", ctr: "3.24%", ecpm: "$130.06", revenue: "$85.69" },
        { date: "May 20, 2026", impressions: "12,770", clicks: "412", ctr: "3.22%", ecpm: "$129.27", revenue: "$85.47" },
        { date: "May 19, 2026", impressions: "12,746", clicks: "408", ctr: "3.20%", ecpm: "$128.11", revenue: "$85.25" },
        { date: "May 18, 2026", impressions: "12,723", clicks: "405", ctr: "3.18%", ecpm: "$127.25", revenue: "$85.02" },
        { date: "May 17, 2026", impressions: "12,699", clicks: "401", ctr: "3.16%", ecpm: "$126.10", revenue: "$84.80" },
        { date: "May 16, 2026", impressions: "12,676", clicks: "397", ctr: "3.13%", ecpm: "$125.21", revenue: "$84.57" },
        { date: "May 15, 2026", impressions: "12,652", clicks: "394", ctr: "3.11%", ecpm: "$124.08", revenue: "$84.34" },
        { date: "May 14, 2026", impressions: "12,628", clicks: "390", ctr: "3.09%", ecpm: "$123.17", revenue: "$84.12" },
        { date: "May 13, 2026", impressions: "12,605", clicks: "386", ctr: "3.06%", ecpm: "$122.03", revenue: "$83.89" },
        { date: "May 12, 2026", impressions: "12,581", clicks: "383", ctr: "3.04%", ecpm: "$121.19", revenue: "$83.65" },
        { date: "May 11, 2026", impressions: "12,558", clicks: "379", ctr: "3.02%", ecpm: "$120.05", revenue: "$83.42" },
        { date: "May 10, 2026", impressions: "12,534", clicks: "376", ctr: "3.00%", ecpm: "$119.33", revenue: "$83.21" },
        { date: "May 09, 2026", impressions: "12,510", clicks: "372", ctr: "2.97%", ecpm: "$118.18", revenue: "$82.99" },
        { date: "May 08, 2026", impressions: "12,487", clicks: "369", ctr: "2.95%", ecpm: "$117.04", revenue: "$82.77" },
        { date: "May 07, 2026", impressions: "35,673", clicks: "2,886", ctr: "8.09%", ecpm: "$487.33", revenue: "$987.44" },
        { date: "May 06, 2026", impressions: "35,504", clicks: "2,824", ctr: "7.95%", ecpm: "$480.22", revenue: "$971.15" },
        { date: "May 05, 2026", impressions: "35,336", clicks: "2,765", ctr: "7.82%", ecpm: "$474.07", revenue: "$954.88" },
        { date: "May 04, 2026", impressions: "35,165", clicks: "2,707", ctr: "7.70%", ecpm: "$468.19", revenue: "$938.41" },
        { date: "May 03, 2026", impressions: "34,993", clicks: "2,648", ctr: "7.57%", ecpm: "$462.08", revenue: "$922.75" },
        { date: "May 02, 2026", impressions: "34,821", clicks: "2,591", ctr: "7.44%", ecpm: "$456.22", revenue: "$906.18" },
        { date: "May 01, 2026", impressions: "34,652", clicks: "2,543", ctr: "7.34%", ecpm: "$450.44", revenue: "$890.33" },
        // April 2026
        { date: "Apr 30, 2026", impressions: "7,250", clicks: "736", ctr: "10.14%", ecpm: "$165.50", revenue: "$81.40" },
        { date: "Apr 29, 2026", impressions: "7,248", clicks: "735", ctr: "10.13%", ecpm: "$165.00", revenue: "$80.95" },
        { date: "Apr 28, 2026", impressions: "7,280", clicks: "715", ctr: "9.82%", ecpm: "$135.00", revenue: "$89.00" },
        { date: "Apr 27, 2026", impressions: "7,250", clicks: "700", ctr: "9.66%", ecpm: "$134.60", revenue: "$88.10" },
        { date: "Apr 26, 2026", impressions: "7,280", clicks: "715", ctr: "9.82%", ecpm: "$135.00", revenue: "$89.00" },
        { date: "Apr 25, 2026", impressions: "7,250", clicks: "700", ctr: "9.66%", ecpm: "$134.60", revenue: "$88.10" },
        { date: "Apr 24, 2026", impressions: "7,230", clicks: "705", ctr: "9.75%", ecpm: "$134.80", revenue: "$87.45" },
        { date: "Apr 23, 2026", impressions: "7,215", clicks: "710", ctr: "9.84%", ecpm: "$135.00", revenue: "$86.20" },
        { date: "Apr 22, 2026", impressions: "7,780", clicks: "731", ctr: "9.40%", ecpm: "$129.60", revenue: "$88.95" },
        { date: "Apr 21, 2026", impressions: "7,770", clicks: "732", ctr: "9.42%", ecpm: "$130.80", revenue: "$89.80" },
        { date: "Apr 20, 2026", impressions: "7,750", clicks: "733", ctr: "9.46%", ecpm: "$131.20", revenue: "$90.10" },
        { date: "Apr 19, 2026", impressions: "7,720", clicks: "733", ctr: "9.50%", ecpm: "$130.50", revenue: "$89.20" },
        { date: "Apr 18, 2026", impressions: "7,690", clicks: "733", ctr: "9.53%", ecpm: "$129.90", revenue: "$88.75" },
        { date: "Apr 17, 2026", impressions: "7,650", clicks: "732", ctr: "9.57%", ecpm: "$128.40", revenue: "$87.90" },
        { date: "Apr 16, 2026", impressions: "7,620", clicks: "731", ctr: "9.59%", ecpm: "$126.80", revenue: "$86.45" },
        { date: "Apr 15, 2026", impressions: "7,604", clicks: "730", ctr: "9.60%", ecpm: "$125.10", revenue: "$85.31" },
        { date: "Apr 14, 2026", impressions: "7,650", clicks: "738", ctr: "9.65%", ecpm: "$130.10", revenue: "$88.20" },
        { date: "Apr 13, 2026", impressions: "7,610", clicks: "735", ctr: "9.66%", ecpm: "$123.80", revenue: "$85.75" },
        { date: "Apr 12, 2026", impressions: "7,580", clicks: "731", ctr: "9.64%", ecpm: "$120.50", revenue: "$82.40" },
        { date: "Apr 11, 2026", impressions: "7,630", clicks: "735", ctr: "9.63%", ecpm: "$120.00", revenue: "$86.33" },
        { date: "Apr 09, 2026", impressions: "7,212", clicks: "712", ctr: "9.87%", ecpm: "$119.20", revenue: "$81.40" },
        { date: "Apr 08, 2026", impressions: "7,210", clicks: "710", ctr: "9.85%", ecpm: "$117.50", revenue: "$84.85" },
        { date: "Apr 07, 2026", impressions: "7,280", clicks: "735", ctr: "10.10%", ecpm: "$118.00", revenue: "$84.35" },
        { date: "Apr 06, 2026", impressions: "5,980", clicks: "700", ctr: "11.71%", ecpm: "$122.00", revenue: "$82.00" },
        { date: "Apr 05, 2026", impressions: "5,280", clicks: "770", ctr: "14.58%", ecpm: "$120.00", revenue: "$85.00" },
        { date: "Apr 04, 2026", impressions: "5,620", clicks: "738", ctr: "13.13%", ecpm: "$118.40", revenue: "$87.65" },
        { date: "Apr 03, 2026", impressions: "5,780", clicks: "740", ctr: "12.80%", ecpm: "$119.10", revenue: "$89.11" },
        { date: "Apr 02, 2026", impressions: "5,540", clicks: "736", ctr: "13.29%", ecpm: "$117.60", revenue: "$88.21" },
        { date: "Apr 01, 2026", impressions: "5,380", clicks: "735", ctr: "13.65%", ecpm: "$115.00", revenue: "$86.31" },
        // March 2026
        { date: "Mar 31, 2026", impressions: "5,210", clicks: "742", ctr: "14.24%", ecpm: "$101.00", revenue: "$83.46" },
        { date: "Mar 23, 2026", impressions: "5,780", clicks: "778", ctr: "13.45%", ecpm: "$97.41", revenue: "$82.35" },
        { date: "Mar 22, 2026", impressions: "5,830", clicks: "797", ctr: "13.68%", ecpm: "$85.41", revenue: "$82.90" },
        { date: "Mar 17, 2026", impressions: "5,480", clicks: "790", ctr: "14.41%", ecpm: "$84.31", revenue: "$84.36" },
        { date: "Mar 16, 2026", impressions: "5,480", clicks: "790", ctr: "14.41%", ecpm: "$92.31", revenue: "$85.36" },
        { date: "Mar 15, 2026", impressions: "5,234", clicks: "742", ctr: "14.18%", ecpm: "$98.75", revenue: "$85.00" },
        { date: "Mar 13, 2026", impressions: "5,442", clicks: "765", ctr: "14.06%", ecpm: "$98.41", revenue: "$86.12" },
        { date: "Mar 12, 2026", impressions: "5,276", clicks: "776", ctr: "14.71%", ecpm: "$98.87", revenue: "$86.56" },
        { date: "Mar 11, 2026", impressions: "5,252", clicks: "765", ctr: "14.56%", ecpm: "$97.77", revenue: "$86.33" },
        { date: "Mar 10, 2026", impressions: "4,816", clicks: "798", ctr: "16.57%", ecpm: "$95.76", revenue: "$87.26" },
        { date: "Mar 09, 2026", impressions: "4,786", clicks: "787", ctr: "16.45%", ecpm: "$95.90", revenue: "$86.66" },
        { date: "Mar 08, 2026", impressions: "4,547", clicks: "776", ctr: "17.06%", ecpm: "$94.90", revenue: "$85.66" },
        { date: "Mar 07, 2026", impressions: "4,487", clicks: "765", ctr: "17.06%", ecpm: "$94.63", revenue: "$82.33" },
        { date: "Mar 06, 2026", impressions: "4,387", clicks: "755", ctr: "17.21%", ecpm: "$87.63", revenue: "$89.33" },
        { date: "Mar 05, 2026", impressions: "4,535", clicks: "743", ctr: "16.38%", ecpm: "$86.63", revenue: "$88.33" },
        { date: "Mar 04, 2026", impressions: "4,562", clicks: "720", ctr: "15.78%", ecpm: "$86.33", revenue: "$83.33" },
      ],
      Desktop: [
        { date: "Jun 03, 2026", impressions: "4,536", clicks: "199", ctr: "4.39%", ecpm: "$146.44", revenue: "$37.33" },
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "34,652", clicks: "2,543", ctr: "7.34%", ecpm: "$450.44", revenue: "$890.33" },
        { date: "Apr 30, 2026", impressions: "7,250", clicks: "736", ctr: "10.14%", ecpm: "$165.50", revenue: "$81.40" },
        { date: "Apr 01, 2026", impressions: "5,380", clicks: "735", ctr: "13.65%", ecpm: "$115.00", revenue: "$86.31" },
        { date: "Mar 31, 2026", impressions: "5,210", clicks: "742", ctr: "14.24%", ecpm: "$101.00", revenue: "$83.46" },
      ],
      Mobile: [
        { date: "Jun 03, 2026", impressions: "4,536", clicks: "199", ctr: "4.39%", ecpm: "$146.44", revenue: "$37.33" },
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "34,652", clicks: "2,543", ctr: "7.34%", ecpm: "$450.44", revenue: "$890.33" },
        { date: "Apr 30, 2026", impressions: "7,250", clicks: "736", ctr: "10.14%", ecpm: "$165.50", revenue: "$81.40" },
        { date: "Apr 01, 2026", impressions: "5,380", clicks: "735", ctr: "13.65%", ecpm: "$115.00", revenue: "$86.31" },
        { date: "Mar 31, 2026", impressions: "5,210", clicks: "742", ctr: "14.24%", ecpm: "$101.00", revenue: "$83.46" },
      ],
    },
  },
  "Last 7 Days": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 13, 2026", impressions: "4,322", clicks: "187", ctr: "4.33%", ecpm: "$83.32", revenue: "$32.87" },
        { date: "Jun 12, 2026", impressions: "12,564", clicks: "365", ctr: "2.91%", ecpm: "$83.98", revenue: "$83.98" },
        { date: "Jun 11, 2026", impressions: "12,536", clicks: "363", ctr: "2.90%", ecpm: "$83.54", revenue: "$83.54" },
        { date: "Jun 10, 2026", impressions: "12,503", clicks: "361", ctr: "2.89%", ecpm: "$83.21", revenue: "$83.21" },
        { date: "Jun 09, 2026", impressions: "12,482", clicks: "359", ctr: "2.88%", ecpm: "$83.00", revenue: "$83.04" },
        { date: "Jun 08, 2026", impressions: "12,455", clicks: "357", ctr: "2.87%", ecpm: "$82.71", revenue: "$82.77" },
        { date: "Jun 07, 2026", impressions: "12,426", clicks: "354", ctr: "2.85%", ecpm: "$82.36", revenue: "$82.43" },
      ],
      Desktop: [
        { date: "Jun 13, 2026", impressions: "4,322", clicks: "187", ctr: "4.33%", ecpm: "$83.32", revenue: "$32.87" },
        { date: "Jun 12, 2026", impressions: "12,564", clicks: "365", ctr: "2.91%", ecpm: "$83.98", revenue: "$83.98" },
        { date: "Jun 11, 2026", impressions: "12,536", clicks: "363", ctr: "2.90%", ecpm: "$83.54", revenue: "$83.54" },
        { date: "Jun 10, 2026", impressions: "12,503", clicks: "361", ctr: "2.89%", ecpm: "$83.21", revenue: "$83.21" },
        { date: "Jun 09, 2026", impressions: "12,482", clicks: "359", ctr: "2.88%", ecpm: "$83.00", revenue: "$83.04" },
        { date: "Jun 08, 2026", impressions: "12,455", clicks: "357", ctr: "2.87%", ecpm: "$82.71", revenue: "$82.77" },
        { date: "Jun 07, 2026", impressions: "12,426", clicks: "354", ctr: "2.85%", ecpm: "$82.36", revenue: "$82.43" },
      ],
      Mobile: [
        { date: "Jun 13, 2026", impressions: "4,322", clicks: "187", ctr: "4.33%", ecpm: "$83.32", revenue: "$32.87" },
        { date: "Jun 12, 2026", impressions: "12,564", clicks: "365", ctr: "2.91%", ecpm: "$83.98", revenue: "$83.98" },
        { date: "Jun 11, 2026", impressions: "12,536", clicks: "363", ctr: "2.90%", ecpm: "$83.54", revenue: "$83.54" },
        { date: "Jun 10, 2026", impressions: "12,503", clicks: "361", ctr: "2.89%", ecpm: "$83.21", revenue: "$83.21" },
        { date: "Jun 09, 2026", impressions: "12,482", clicks: "359", ctr: "2.88%", ecpm: "$83.00", revenue: "$83.04" },
        { date: "Jun 08, 2026", impressions: "12,455", clicks: "357", ctr: "2.87%", ecpm: "$82.71", revenue: "$82.77" },
        { date: "Jun 07, 2026", impressions: "12,426", clicks: "354", ctr: "2.85%", ecpm: "$82.36", revenue: "$82.43" },
      ],
    },
  },
  "Last 30 Days": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 03, 2026", impressions: "4,536", clicks: "199", ctr: "4.39%", ecpm: "$146.44", revenue: "$37.33" },
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 30, 2026", impressions: "12,971", clicks: "450", ctr: "3.47%", ecpm: "$141.10", revenue: "$87.22" },
        { date: "May 29, 2026", impressions: "12,955", clicks: "446", ctr: "3.44%", ecpm: "$139.27", revenue: "$87.12" },
        { date: "May 28, 2026", impressions: "12,940", clicks: "442", ctr: "3.42%", ecpm: "$138.18", revenue: "$87.01" },
        { date: "May 27, 2026", impressions: "12,922", clicks: "438", ctr: "3.39%", ecpm: "$137.04", revenue: "$86.88" },
        { date: "May 26, 2026", impressions: "12,901", clicks: "434", ctr: "3.36%", ecpm: "$135.27", revenue: "$86.72" },
        { date: "May 25, 2026", impressions: "12,888", clicks: "430", ctr: "3.34%", ecpm: "$134.03", revenue: "$86.58" },
        { date: "May 24, 2026", impressions: "12,864", clicks: "426", ctr: "3.31%", ecpm: "$133.14", revenue: "$86.36" },
        { date: "May 23, 2026", impressions: "12,841", clicks: "423", ctr: "3.29%", ecpm: "$132.05", revenue: "$86.14" },
        { date: "May 22, 2026", impressions: "12,817", clicks: "419", ctr: "3.27%", ecpm: "$131.18", revenue: "$85.92" },
        { date: "May 21, 2026", impressions: "12,794", clicks: "415", ctr: "3.24%", ecpm: "$130.06", revenue: "$85.69" },
        { date: "May 20, 2026", impressions: "12,770", clicks: "412", ctr: "3.22%", ecpm: "$129.27", revenue: "$85.47" },
        { date: "May 19, 2026", impressions: "12,746", clicks: "408", ctr: "3.20%", ecpm: "$128.11", revenue: "$85.25" },
        { date: "May 18, 2026", impressions: "12,723", clicks: "405", ctr: "3.18%", ecpm: "$127.25", revenue: "$85.02" },
        { date: "May 17, 2026", impressions: "12,699", clicks: "401", ctr: "3.16%", ecpm: "$126.10", revenue: "$84.80" },
        { date: "May 16, 2026", impressions: "12,676", clicks: "397", ctr: "3.13%", ecpm: "$125.21", revenue: "$84.57" },
        { date: "May 15, 2026", impressions: "12,652", clicks: "394", ctr: "3.11%", ecpm: "$124.08", revenue: "$84.34" },
        { date: "May 14, 2026", impressions: "12,628", clicks: "390", ctr: "3.09%", ecpm: "$123.17", revenue: "$84.12" },
        { date: "May 13, 2026", impressions: "12,605", clicks: "386", ctr: "3.06%", ecpm: "$122.03", revenue: "$83.89" },
        { date: "May 12, 2026", impressions: "12,581", clicks: "383", ctr: "3.04%", ecpm: "$121.19", revenue: "$83.65" },
        { date: "May 11, 2026", impressions: "12,558", clicks: "379", ctr: "3.02%", ecpm: "$120.05", revenue: "$83.42" },
        { date: "May 10, 2026", impressions: "12,534", clicks: "376", ctr: "3.00%", ecpm: "$119.33", revenue: "$83.21" },
        { date: "May 09, 2026", impressions: "12,510", clicks: "372", ctr: "2.97%", ecpm: "$118.18", revenue: "$82.99" },
        { date: "May 08, 2026", impressions: "12,487", clicks: "369", ctr: "2.95%", ecpm: "$117.04", revenue: "$82.77" },
        { date: "May 07, 2026", impressions: "35,673", clicks: "2,886", ctr: "8.09%", ecpm: "$487.33", revenue: "$987.44" },
        { date: "May 06, 2026", impressions: "35,504", clicks: "2,824", ctr: "7.95%", ecpm: "$480.22", revenue: "$971.15" },
        { date: "May 05, 2026", impressions: "35,336", clicks: "2,765", ctr: "7.82%", ecpm: "$474.07", revenue: "$954.88" },
        { date: "May 04, 2026", impressions: "35,165", clicks: "2,707", ctr: "7.70%", ecpm: "$468.19", revenue: "$938.41" },
        { date: "May 03, 2026", impressions: "34,993", clicks: "2,648", ctr: "7.57%", ecpm: "$462.08", revenue: "$922.75" },
        { date: "May 02, 2026", impressions: "34,821", clicks: "2,591", ctr: "7.44%", ecpm: "$456.22", revenue: "$906.18" },
        { date: "May 01, 2026", impressions: "34,652", clicks: "2,543", ctr: "7.34%", ecpm: "$450.44", revenue: "$890.33" },
      ],
      Desktop: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Mobile: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
    },
  },
  "Last 6 Months": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Desktop: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Mobile: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
    },
  },
  "This Year": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Desktop: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Mobile: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
    },
  },
  "Custom Range": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Desktop: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
      Mobile: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 01, 2026", impressions: "12,323", clicks: "345", ctr: "2.80%", ecpm: "$110.22", revenue: "$81.22" },
      ],
    },
  },
}

const statisticsTotals = {
  impressions: 391758,
  clicks: 12385,
  revenue: 2614.77,
  ecpm: 126.78,
  ctr: 3.16,
}

export function ReportContent() {
  const [showReport] = useState(true)
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 Days")
  const [selectedGroupBy, setSelectedGroupBy] = useState("Day")
  const [selectedMetrics, setSelectedMetrics] = useState("All Metrics")
  const [selectedSite, setSelectedSite] = useState("All Sites")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedDevice, setSelectedDevice] = useState("All Devices")
  const [isFiltered, setIsFiltered] = useState(false)

  // Get filtered reports based on date range - updates on date range change
  const currentReportData = useMemo(() => {
    return getReportsByDateRange(selectedDateRange)
  }, [selectedDateRange])

  // Calculate totals from filtered reports
  const totals = useMemo(() => {
    return calculateReportTotals(currentReportData)
  }, [currentReportData])

  const handleRefresh = () => {
    // Refresh by re-running the filters
    setSelectedDateRange(selectedDateRange)
  }

  const handleApplyFilters = () => {
    // Filters are applied automatically via useMemo
    // Mark as filtered if a specific range is selected
    if (selectedDateRange !== "All Time") {
      setIsFiltered(true)
    }
  }

  const handleReset = () => {
    setSelectedDateRange("Last 7 Days")
    setSelectedGroupBy("Day")
    setSelectedMetrics("All Metrics")
    setSelectedSite("All Sites")
    setSelectedCountry("All Countries")
    setSelectedDevice("All Devices")
    setIsFiltered(false)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center space-x-2 flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent" onClick={handleRefresh}>
                  <RefreshCw size={16} className="mr-2" />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh report data</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center bg-transparent">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export report as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Filter size={18} className="mr-2" />
          <h3 className="font-medium">Report Filters</h3>
          {isFiltered && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Filters Applied</span>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Date Range</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
              <option>All Time</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Group By</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedGroupBy}
              onChange={(e) => setSelectedGroupBy(e.target.value)}
            >
              <option>Hour</option>
              <option>Day</option>
              <option>Week</option>
              <option>Month</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Metrics</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedMetrics}
              onChange={(e) => setSelectedMetrics(e.target.value)}
            >
              <option>All Metrics</option>
              <option>Revenue Only</option>
              <option>Traffic Only</option>
              <option>Performance Only</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Sites</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
            >
              <option>https://techblogi.com</option>
              <option>All Sites</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Countries</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>All Countries</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Device</label>
            <select
              className="w-full p-2 border rounded-md bg-white"
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
            >
              <option>All Devices</option>
              <option>Desktop</option>
              <option>Mobile</option>
              <option>Tablet</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <Button className="bg-green-500 hover:bg-green-600 flex-1" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
            <Button variant="outline" onClick={handleReset} className="bg-transparent">
              Reset
            </Button>
          </div>
        </div>

        {/* Filter Summary */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            <strong>Current Filters:</strong> {selectedDateRange} • {selectedGroupBy} • {selectedSite} •{" "}
            {selectedCountry} • {selectedDevice} • {selectedMetrics}
          </div>
        </div>
      </Card>

      {/* Statistics Summary - Always visible */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalRevenue}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Impressions</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalImpressions}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Total Clicks</div>
          <div className="text-xl font-bold text-gray-800">{totals.totalClicks}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average CTR</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgCTR}</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Average eCPM</div>
          <div className="text-xl font-bold text-gray-800">{totals.avgECPM}</div>
        </div>
      </div>

      {/* Report Table */}
      {showReport && (
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Report Results</h3>
            <div className="text-sm text-gray-500">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Impressions</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Clicks</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">CTR</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">eCPM</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {currentReportData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center">
                      <div className="text-gray-400">
                        <BarChart2 className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm font-medium">No records available</p>
                        <p className="text-xs mt-1">Reports will be visible after data is added</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentReportData.map((row, index) => (
                    <ReportRow
                      key={index}
                      date={row.date}
                      impressions={row.impressions.toLocaleString()}
                      clicks={row.clicks.toLocaleString()}
                      ctr={row.ctr}
                      ecpm={row.ecpm}
                      revenue={`$${row.revenue.toFixed(2)}`}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  )
}

interface ReportRowProps {
  date: string
  impressions: string
  clicks: string
  ctr: string
  ecpm: string
  revenue: string
}

function ReportRow({ date, impressions, clicks, ctr, ecpm, revenue }: ReportRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4 text-sm">{date}</td>
      <td className="py-3 px-4 text-sm">{impressions}</td>
      <td className="py-3 px-4 text-sm">{clicks}</td>
      <td className="py-3 px-4 text-sm">{ctr}</td>
      <td className="py-3 px-4 text-sm">{ecpm}</td>
      <td className="py-3 px-4 text-sm font-medium">{revenue}</td>
    </tr>
  )
}
