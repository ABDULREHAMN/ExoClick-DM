/**
 * Invalid Traffic Review Management
 * Handles review process steps and payment slip calculations
 */

export interface ReviewStep {
  id: string
  step: number
  title: string
  status: "Completed" | "Pending"
}

export interface TrafficReview {
  status: "Review Completed" | "In Progress" | "Pending"
  invalidTrafficRate: number // percentage
  taxRate: number // percentage
}

export interface PaymentSlip {
  grossRevenue: number
  invalidTrafficDeduction: number
  taxDeduction: number
  netRevenue: number
  reviewStatus: string
}

// Review Process Steps
export const reviewSteps: ReviewStep[] = [
  {
    id: "setup_1",
    step: 1,
    title: "Account Setup",
    status: "Completed",
  },
  {
    id: "setup_2",
    step: 2,
    title: "Payment Method",
    status: "Completed",
  },
  {
    id: "setup_3",
    step: 3,
    title: "Identity Verification",
    status: "Completed",
  },
  {
    id: "setup_4",
    step: 4,
    title: "Final Review",
    status: "Pending",
  },
]

// Traffic Review Status
export const trafficReview: TrafficReview = {
  status: "Review Completed",
  invalidTrafficRate: 29,
  taxRate: 5,
}

/**
 * Calculate payment slip breakdown
 */
export function calculatePaymentSlip(grossRevenue: number): PaymentSlip {
  const invalidTrafficAmount = (grossRevenue * trafficReview.invalidTrafficRate) / 100
  const taxAmount = (grossRevenue * trafficReview.taxRate) / 100
  const netRevenue = grossRevenue - invalidTrafficAmount - taxAmount

  return {
    grossRevenue,
    invalidTrafficDeduction: invalidTrafficAmount,
    taxDeduction: taxAmount,
    netRevenue: Math.max(0, netRevenue),
    reviewStatus: trafficReview.status,
  }
}

/**
 * Get review progress percentage
 */
export function getReviewProgress(): number {
  const completedSteps = reviewSteps.filter((s) => s.status === "Completed").length
  return Math.round((completedSteps / reviewSteps.length) * 100)
}

/**
 * Check if review is complete
 */
export function isReviewComplete(): boolean {
  return trafficReview.status === "Review Completed"
}
