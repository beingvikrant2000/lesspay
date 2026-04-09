"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnalysisResults } from "@/components/product-analyzer/analysis-results"
import { ArrowLeft, Download } from "lucide-react"

interface AnalysisResponse {
  productName: string
  market_opportunity: string | Record<string, unknown>
  customer_insights: string | Record<string, unknown>
  value_proposition: string | Record<string, unknown>
  product_quality: string | Record<string, unknown>
  unit_economics: string | Record<string, unknown>
  revenue_model: string | Record<string, unknown>
  cost_structure: string | Record<string, unknown>
  competitive_position: string | Record<string, unknown>
  defensibility: string | Record<string, unknown>
  growth_mechanics: string | Record<string, unknown>
  product_strategy: string | Record<string, unknown>
  go_to_market: string | Record<string, unknown>
  financial_health: string | Record<string, unknown>
  team_quality: string | Record<string, unknown>
  risk_assessment: string | Record<string, unknown>
  metrics_analytics: string | Record<string, unknown>
  product_market_fit: string | Record<string, unknown>
  regulatory_compliance: string | Record<string, unknown>
  future_potential: string | Record<string, unknown>
  executive_summary: string
}

export default function AnalysisResultPage() {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null)
  const [isEmailLoading, setIsEmailLoading] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get analysis from localStorage
    const stored = localStorage.getItem("productAnalysis")
    if (stored) {
      setAnalysis(JSON.parse(stored))
    }
    setLoading(false)
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
    } catch (err) {
      throw err
    } finally {
      setIsEmailLoading(false)
    }
  }

  const handleReset = () => {
    // Redirect back to home
    window.location.href = "/lesspay/"
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 animate-spin">
            <div className="w-10 h-10 rounded-full border-2 border-slate-300 border-t-slate-700" />
          </div>
          <p className="text-slate-600 font-medium">Analyzing product...</p>
        </div>
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900">No Analysis Found</h1>
          <p className="text-slate-600">Please go back and analyze a product first.</p>
          <Link
            href="/lesspay/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Analyzer
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{analysis.productName}</h1>
            <p className="text-slate-600 mt-1">Product Analysis Report</p>
          </div>
          <Link
            href="/lesspay/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* Main Content */}
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
