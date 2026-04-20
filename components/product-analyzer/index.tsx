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

      // ✅ store new structure
      localStorage.setItem("productAnalysis", JSON.stringify(result))

      // optional email
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