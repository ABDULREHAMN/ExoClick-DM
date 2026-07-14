import { Card } from "@/components/ui/card"
import { calculatePaymentSlip, trafficReview } from "@/lib/traffic-review-data"

interface PaymentSlipProps {
  grossRevenue: number
  showBreakdown?: boolean
  compact?: boolean
}

export function PaymentSlip({ grossRevenue, showBreakdown = true, compact = false }: PaymentSlipProps) {
  const slip = calculatePaymentSlip(grossRevenue)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`
  }

  if (!showBreakdown) {
    return (
      <div className="text-right">
        <p className="text-sm text-gray-600">Net Revenue</p>
        <p className="text-2xl font-bold text-green-600">{formatCurrency(slip.netRevenue)}</p>
        <p className="text-xs text-gray-500 mt-1">{slip.reviewStatus}</p>
      </div>
    )
  }

  return (
    <Card className={`${compact ? "p-3" : "p-6"} bg-white border-l-4 border-l-blue-500`}>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Gross Revenue</span>
          <span className="text-sm font-semibold">{formatCurrency(slip.grossRevenue)}</span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Invalid Traffic Deduction ({trafficReview.invalidTrafficRate}%)</span>
            <span className="text-sm font-semibold text-red-600">
              -{formatCurrency(slip.invalidTrafficDeduction)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tax Deduction ({trafficReview.taxRate}%)</span>
            <span className="text-sm font-semibold text-red-600">
              -{formatCurrency(slip.taxDeduction)}
            </span>
          </div>
        </div>

        <div className="border-t pt-3 bg-green-50 -mx-3 -mb-3 px-3 py-3 rounded-b">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-900">Net Revenue</span>
            <span className="text-lg font-bold text-green-700">{formatCurrency(slip.netRevenue)}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Review Status</span>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 font-medium">
              {slip.reviewStatus}
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}

/**
 * Compact version for inline display
 */
export function PaymentSlipCompact({ grossRevenue }: { grossRevenue: number }) {
  return <PaymentSlip grossRevenue={grossRevenue} showBreakdown={false} compact={true} />
}
