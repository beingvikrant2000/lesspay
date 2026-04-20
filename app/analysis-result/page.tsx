"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnalysisResults } from "@/components/product-analyzer/analysis-results"
import { ArrowLeft } from "lucide-react"

interface AnalysisResponse {
  productName: string
  overview: string
  problem: string
  user_behavior: string
  value: string
  business: string
  competition: string
  growth: string
  risks: string
  zero_to_one: string
  execution_30_60_90: string
  verdict: string
}

export default function AnalysisResultPage() {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isEmailLoading, setIsEmailLoading] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("productAnalysis")

    if (!stored) {
      setIsHydrated(true)
      return
    }

    try {
      const parsed = JSON.parse(stored) as AnalysisResponse
      setAnalysis(parsed.overview ? parsed : null)
    } catch {
      setAnalysis(null)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  const handleEmailSubmit = async (email: string) => {
    if (!analysis) return

    setIsEmailLoading(true)

    try {
      const response = await fetch("/lesspay/api/analyze-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysis,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email")
      }
    } finally {
      setIsEmailLoading(false)
    }
  }

  const handleReset = () => {
    localStorage.removeItem("productAnalysis")
    window.location.href = "/lesspay/"
  }

  if (!isHydrated) {
    return <div className="min-h-screen bg-background" />
  }

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">No Analysis Found</h1>
          <Link
            href="/lesspay/"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Analyzer
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      {/* HEADER */}
      <div className="border-b sticky top-0 bg-background z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold">{analysis.productName}</h1>

          <Link
            href="/lesspay/"
            className="flex items-center gap-2 text-sm hover:opacity-70"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnalysisResults
          analysis={analysis}
          onEmailSubmit={handleEmailSubmit}
          onReset={handleReset}
          isEmailLoading={isEmailLoading}
        />
      </div>
    </div>
  )
}