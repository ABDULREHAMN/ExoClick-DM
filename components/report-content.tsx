"use client"
import { useState } from "react"
import { Download, Filter, RefreshCw, BarChart2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const reportData = {
  "Last 7 Days": {
    "All Countries": {
      "All Devices": [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 30, 2026", impressions: "12,971", clicks: "450", ctr: "3.47%", ecpm: "$141.10", revenue: "$87.22" },
        { date: "May 29, 2026", impressions: "12,955", clicks: "446", ctr: "3.44%", ecpm: "$139.27", revenue: "$87.12" },
        { date: "May 28, 2026", impressions: "12,940", clicks: "442", ctr: "3.42%", ecpm: "$138.18", revenue: "$87.01" },
        { date: "May 27, 2026", impressions: "12,922", clicks: "438", ctr: "3.39%", ecpm: "$137.04", revenue: "$86.88" },
      ],
      Desktop: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 30, 2026", impressions: "12,971", clicks: "450", ctr: "3.47%", ecpm: "$141.10", revenue: "$87.22" },
        { date: "May 29, 2026", impressions: "12,955", clicks: "446", ctr: "3.44%", ecpm: "$139.27", revenue: "$87.12" },
        { date: "May 28, 2026", impressions: "12,940", clicks: "442", ctr: "3.42%", ecpm: "$138.18", revenue: "$87.01" },
        { date: "May 27, 2026", impressions: "12,922", clicks: "438", ctr: "3.39%", ecpm: "$137.04", revenue: "$86.88" },
      ],
      Mobile: [
        { date: "Jun 02, 2026", impressions: "12,984", clicks: "454", ctr: "3.50%", ecpm: "$143.33", revenue: "$87.33" },
        { date: "Jun 01, 2026", impressions: "12,537", clicks: "442", ctr: "3.53%", ecpm: "$141.27", revenue: "$81.59" },
        { date: "May 31, 2026", impressions: "12,980", clicks: "452", ctr: "3.48%", ecpm: "$142.15", revenue: "$87.28" },
        { date: "May 30, 2026", impressions: "12,971", clicks: "450", ctr: "3.47%", ecpm: "$141.10", revenue: "$87.22" },
        { date: "May 29, 2026", impressions: "12,955", clicks: "446", ctr: "3.44%", ecpm: "$139.27", revenue: "$87.12" },
        { date: "May 28, 2026", impressions: "12,940", clicks: "442", ctr: "3.42%", ecpm: "$138.18", revenue: "$87.01" },
        { date: "May 27, 2026", impressions: "12,922", clicks: "438", ctr: "3.39%", ecpm: "$137.04", revenue: "$86.88" },
      ],
    },
  },
  "Last 30 Days": {
    "All Countries": {
      "All Devices": [
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
        { date: "May 07, 2026", impressions: "12,463", clicks: "365", ctr: "2.93%", ecpm: "$116.22", revenue: "$82.55" },
        { date: "May 06, 2026", impressions: "12,439", clicks: "362", ctr: "2.91%", ecpm: "$115.11", revenue: "$82.32" },
        { date: "May 05, 2026", impressions: "12,416", clicks: "358", ctr: "2.88%", ecpm: "$114.07", revenue: "$82.10" },
        { date: "May 04, 2026", impressions: "12,392", clicks: "355", ctr: "2.86%", ecpm: "$113.14", revenue: "$81.88" },
      ],
      Desktop: [
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
        { date: "May 07, 2026", impressions: "12,463", clicks: "365", ctr: "2.93%", ecpm: "$116.22", revenue: "$82.55" },
        { date: "May 06, 2026", impressions: "12,439", clicks: "362", ctr: "2.91%", ecpm: "$115.11", revenue: "$82.32" },
        { date: "May 05, 2026", impressions: "12,416", clicks: "358", ctr: "2.88%", ecpm: "$114.07", revenue: "$82.10" },
        { date: "May 04, 2026", impressions: "12,392", clicks: "355", ctr: "2.86%", ecpm: "$113.14", revenue: "$81.88" },
      ],
      Mobile: [
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
        { date: "May 07, 2026", impressions: "12,463", clicks: "365", ctr: "2.93%", ecpm: "$116.22", revenue: "$82.55" },
        { date: "May 06, 2026", impressions: "12,439", clicks: "362", ctr: "2.91%", ecpm: "$115.11", revenue: "$82.32" },
        { date: "May 05, 2026", impressions: "12,416", clicks: "358", ctr: "2.88%", ecpm: "$114.07", revenue: "$82.10" },
        { date: "May 04, 2026", impressions: "12,392", clicks: "355", ctr: "2.86%", ecpm: "$113.14", revenue: "$81.88" },
      ],
    },
  },
  "Last 3 Months": {
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
  const [currentReportData, setCurrentReportData] = useState(reportData["Last 7 Days"]["All Countries"]["All Devices"])
  const [isFiltered, setIsFiltered] = useState(false)

  const handleGenerateReport = () => {
    // Data already rendered, no action needed
  }

  const handleRefresh = () => {
    // Data already current, no action needed
  }

  const handleApplyFilters = () => {
    const dateData = reportData[selectedDateRange as keyof typeof reportData]
    const countryData = dateData?.[selectedCountry as keyof typeof dateData]
    const deviceData = countryData?.[selectedDevice as keyof typeof countryData]

    if (deviceData) {
      setCurrentReportData(deviceData)
      setIsFiltered(true)
    } else {
      setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
      setIsFiltered(false)
    }
  }

  const handleReset = () => {
    setSelectedDateRange("Last 7 Days")
    setSelectedGroupBy("Day")
    setSelectedMetrics("All Metrics")
    setSelectedSite("All Sites")
    setSelectedCountry("All Countries")
    setSelectedDevice("All Devices")

    setCurrentReportData(reportData["Last 7 Days"]["All Countries"]["All Devices"])
    setIsFiltered(false)
  }

  const calculateTotals = () => {
    if (currentReportData.length === 0) {
      return {
        totalRevenue: statisticsTotals.revenue.toFixed(3),
        totalImpressions: statisticsTotals.impressions.toLocaleString(),
        totalClicks: statisticsTotals.clicks.toLocaleString(),
        avgCTR: `${statisticsTotals.ctr.toFixed(2)}%`,
        avgECPM: `$${statisticsTotals.ecpm.toFixed(2)}`,
      }
    }

    const totalRevenue = currentReportData.reduce((sum, row) => {
      const revenue = Number.parseFloat(row.revenue.replace("$", "").replace(",", ""))
      return sum + revenue
    }, 0)

    const totalImpressions = currentReportData.reduce((sum, row) => {
      const impressions = Number.parseInt(row.impressions.replace(",", ""))
      return sum + impressions
    }, 0)

    const totalClicks = currentReportData.reduce((sum, row) => {
      const clicks = Number.parseInt(row.clicks.replace(",", ""))
      return sum + clicks
    }, 0)

    const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00"
    const avgECPM = totalImpressions > 0 ? ((totalRevenue / totalImpressions) * 1000).toFixed(2) : "0.00"

    return {
      totalRevenue: totalRevenue.toFixed(3),
      totalImpressions: totalImpressions.toLocaleString(),
      totalClicks: totalClicks.toLocaleString(),
      avgCTR: `${avgCTR}%`,
      avgECPM: `$${avgECPM}`,
    }
  }

  const totals = calculateTotals()

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
                      impressions={row.impressions}
                      clicks={row.clicks}
                      ctr={row.ctr}
                      ecpm={row.ecpm}
                      revenue={row.revenue}
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
