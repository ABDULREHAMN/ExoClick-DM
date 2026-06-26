"use client"

import React, { useState } from "react"
import { MessageCircle, X, ChevronDown, ChevronUp } from "lucide-react"

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const queueStatus = {
    status: "Pending",
    usersAhead: 7,
    message: "7 users are ahead of you. Please wait for your turn.",
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Minimized Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Open live chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-96">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-semibold text-sm">Live Support</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-blue-700 rounded transition-colors"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                {isMinimized ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-blue-700 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex-1 p-4 flex flex-col overflow-y-auto">
              {/* Queue Status */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-amber-900">
                    {queueStatus.status}
                  </span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {queueStatus.message}
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-xs font-semibold text-amber-900">
                    Position in queue: #{queueStatus.usersAhead + 1}
                  </p>
                </div>
              </div>

              {/* Chat Info */}
              <div className="text-center py-2 px-2">
                <p className="text-xs text-gray-500">
                  Our support team will be with you shortly
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          {!isMinimized && (
            <div className="bg-gray-50 border-t p-3">
              <textarea
                placeholder="Type your message..."
                className="w-full p-2 text-xs border rounded bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                rows={2}
              />
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 rounded font-medium transition-colors">
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
