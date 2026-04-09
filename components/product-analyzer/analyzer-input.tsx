"use client"

import { useState } from "react"

interface AnalysisRequest {
  productName: string
  productDescription?: string
  userEmail?: string
}

interface ProductAnalyzerInputProps {
  onSubmit: (data: AnalysisRequest) => Promise<void>
  isLoading: boolean
  error?: string
}

export function ProductAnalyzerInput({ onSubmit, isLoading, error }: ProductAnalyzerInputProps) {
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [localError, setLocalError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError("")

    if (!productName.trim()) {
      setLocalError("Product name is required")
      return
    }

    try {
      await onSubmit({ productName, productDescription, userEmail })
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : "Failed to analyze product")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
      <div>
        <label htmlFor="productName" className="block text-sm font-medium mb-2">
          Product Name <span className="text-foreground/50">*</span>
        </label>
        <input
          type="text"
          id="productName"
          placeholder="e.g., Notion, Figma, Stripe..."
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value)
            setLocalError("")
          }}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="productDescription" className="block text-sm font-medium mb-2">
          Product Description <span className="text-foreground/50 text-xs">(optional)</span>
        </label>
        <textarea
          id="productDescription"
          placeholder="What does it do? What problem does it solve? Be specific..."
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          disabled={isLoading}
          rows={3}
          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
        />
      </div>

      <div>
        <label htmlFor="userEmail" className="block text-sm font-medium mb-2">
          Email <span className="text-foreground/50 text-xs">(optional - get results sent)</span>
        </label>
        <input
          type="email"
          id="userEmail"
          placeholder="your@email.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          disabled={isLoading}
          className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !productName.trim()}
        className="w-full bg-foreground text-background px-4 py-2 rounded font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Analyzing..." : "Analyze This Product"}
      </button>

      {(error || localError) && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded text-sm">
          Error: {error || localError}
        </div>
      )}
    </form>
  )
}
