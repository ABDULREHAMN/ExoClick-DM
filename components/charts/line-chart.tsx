"use client"

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

// Historical data from September 2025 through June 2026 (daily revenue)
const data = [
  { name: "Sep 01, 2025", revenue: 45.20 },
  { name: "Sep 02, 2025", revenue: 46.15 },
  { name: "Sep 03, 2025", revenue: 47.30 },
  { name: "Sep 04, 2025", revenue: 48.10 },
  { name: "Sep 05, 2025", revenue: 49.25 },
  { name: "Sep 06, 2025", revenue: 50.15 },
  { name: "Sep 07, 2025", revenue: 51.40 },
  { name: "Sep 08, 2025", revenue: 52.25 },
  { name: "Sep 09, 2025", revenue: 53.10 },
  { name: "Sep 10, 2025", revenue: 54.30 },
  { name: "Oct 01, 2025", revenue: 55.20 },
  { name: "Oct 15, 2025", revenue: 65.40 },
  { name: "Oct 30, 2025", revenue: 75.15 },
  { name: "Nov 15, 2025", revenue: 85.50 },
  { name: "Nov 30, 2025", revenue: 95.75 },
  { name: "Dec 15, 2025", revenue: 105.30 },
  { name: "Dec 31, 2025", revenue: 115.50 },
  { name: "Jan 15, 2026", revenue: 125.20 },
  { name: "Jan 31, 2026", revenue: 135.40 },
  { name: "Feb 15, 2026", revenue: 145.10 },
  { name: "Feb 28, 2026", revenue: 155.25 },
  { name: "Mar 15, 2026", revenue: 165.80 },
  { name: "Mar 31, 2026", revenue: 175.30 },
  { name: "Apr 01, 2026", revenue: 86.31 },
  { name: "Apr 15, 2026", revenue: 87.50 },
  { name: "Apr 30, 2026", revenue: 81.40 },
  { name: "May 01, 2026", revenue: 890.33 },
  { name: "May 15, 2026", revenue: 84.34 },
  { name: "May 31, 2026", revenue: 87.28 },
  { name: "Jun 01, 2026", revenue: 81.59 },
  { name: "Jun 02, 2026", revenue: 87.33 },
  { name: "Jun 03, 2026", revenue: 37.33 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} angle={-45} textAnchor="end" height={100} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "none",
          }}
          formatter={(value: number) => [`$${value.toFixed(2)}`, "Revenue"]}
          labelFormatter={(label) => `${label}`}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Daily Revenue"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ r: 3, strokeWidth: 1 }}
          activeDot={{ r: 5, strokeWidth: 2 }}
          isAnimationActive={true}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
