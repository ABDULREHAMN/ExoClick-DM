"use client"

import { Copy, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { KycModal } from "./kyc-modal" // Import the KYC modal
import { useKyc } from "./kyc-context" // Import the KYC context

export default function StandaloneWithdrawalHistory() {
  const { startKyc } = useKyc() // Get the startKyc function from context

  const withdrawals = [
    {
      date: "12 Oct 2025",
      method: "Payoneer",
      amount: 413.00,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Oct 2025",
      method: "Payoneer",
      amount: 310.22,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Nov 2025",
      method: "Payoneer",
      amount: 350.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Nov 2025",
      method: "Payoneer",
      amount: 410.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Dec 2025",
      method: "Payoneer",
      amount: 451.22,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Dec 2025",
      method: "Payoneer",
      amount: 498.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Jan 2026",
      method: "Payoneer",
      amount: 743.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Jan 2026",
      method: "Payoneer",
      amount: 755.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Feb 2026",
      method: "Payoneer",
      amount: 1002.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Feb 2026",
      method: "Payoneer",
      amount: 340.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Mar 2026",
      method: "Payoneer",
      amount: 1234.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Mar 2026",
      method: "Payoneer",
      amount: 980.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "12 Apr 2026",
      method: "Payoneer",
      amount: 1320.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "25 Apr 2026",
      method: "Payoneer",
      amount: 1123.33,
      status: "confirmed",
      details: "abdul.rehman.soashraf@gmail.com",
      isVerified: true,
    },
    {
      date: "14 May 2026",
      method: "Crypto (TRC20)",
      amount: 9757.78,
      status: "scheduled",
      details: "TRC20 Wallet Address",
      isVerified: true,
    },
  ]

  return (
    <div className="p-6 space-y-6 bg-[#f5f5f5] min-h-screen">
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Withdraw History</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Method</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Address / Email</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((withdrawal, index) => (
                <WithdrawalRow
                  key={index}
                  date={withdrawal.date}
                  method={withdrawal.method}
                  amount={`$${withdrawal.amount.toFixed(2)}`}
                  status={withdrawal.status as "withdrawn" | "scheduled" | "failed" | "confirmed"}
                  details={withdrawal.details}
                  isVerified={withdrawal.isVerified}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* KYC Modal Trigger Button */}
        <Button onClick={startKyc} className="bg-blue-600 text-white px-4 py-2 rounded">
          Start KYC Verification
        </Button>
        {/* Optional Direct KYC Page Link */}
        <a
          href="https://example.com/kyc-form"
          target="_blank"
          className="mt-2 inline-block text-sm text-blue-700 underline"
          rel="noreferrer"
        >
          Or click here to open full KYC form
        </a>
      </Card>

      {/* Render the KYC Modal */}
      <KycModal />
    </div>
  )
}

interface WithdrawalRowProps {
  date: string
  method: string
  amount: string
  status: "withdrawn" | "scheduled" | "failed" | "confirmed"
  details: string
  isVerified?: boolean
}

function WithdrawalRow({ date, method, amount, status, details, isVerified }: WithdrawalRowProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <tr>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2">{method}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className={`px-4 py-2 ${status === "confirmed" ? "text-green-600 font-semibold" : ""}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </td>
      <td className="px-4 py-2">
        {details.startsWith("0x") ? (
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs">
              {details.slice(0, 10)}...{details.slice(-8)}
            </span>
            {isVerified && (
              <Badge className="bg-green-100 text-green-800 text-xs flex items-center">
                <CheckCircle size={10} className="mr-1" />
                Verified
              </Badge>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard(details)}>
                    <Copy size={12} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy wallet address</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">{details}</span>
            {isVerified && (
              <Badge className="bg-green-100 text-green-800 text-xs flex items-center">
                <CheckCircle size={10} className="mr-1" />
                Verified
              </Badge>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard(details)}>
                    <Copy size={12} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy email address</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </td>
    </tr>
  )
}
