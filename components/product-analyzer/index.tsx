"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ProductAnalyzerInput } from "./analyzer-input"

interface AnalysisRequest {
  productName: string
  productDescription?: string
  userEmail?: string
}

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

export function ProductAnalyzer() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const handleAnalyze = async (data: AnalysisRequest) => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/lesspay/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to analyze product")
      }

      // Store analysis in localStorage and redirect
      localStorage.setItem("productAnalysis", JSON.stringify(result))

      // If email was provided, send it
      if (data.userEmail) {
        await sendEmail(data.userEmail, result)
      }

      router.push("/analysis-result")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const sendEmail = async (email: string, analysisData: AnalysisResponse) => {
    try {
      const response = await fetch("/lesspay/api/analyze-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysis: analysisData,
        }),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || "Failed to send email")
      }
    } catch (err) {
      console.error("Email send error:", err)
      // Don't throw - let the redirect happen even if email fails
    }
  }

  return (
    <div className="space-y-8">
      <ProductAnalyzerInput
        onSubmit={handleAnalyze}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}
