"use client"

import { useState } from "react"
import { Copy, Mail, Download } from "lucide-react"

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

interface AnalysisResultsProps {
  analysis: AnalysisResponse
  onEmailSubmit: (email: string) => Promise<void>
  onReset: () => void
  isEmailLoading?: boolean
}

const formatContent = (content: string | Record<string, unknown> | unknown): string => {
  if (typeof content === 'string') return content
  if (typeof content === 'object' && content !== null) {
    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content)
        return formatObject(parsed)
      } catch {
        return content
      }
    }
    return formatObject(content)
  }
  return String(content)
}

const formatObject = (obj: unknown): string => {
  if (obj === null || obj === undefined) return ''

  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj)
  }

  if (Array.isArray(obj)) {
    return obj
      .map(item => {
        if (typeof item === 'object') return formatObject(item)
        return String(item)
      })
      .join('\n')
  }

  if (typeof obj === 'object') {
    return Object.entries(obj)
      .map(([key, value]) => {
        const formattedKey = key
          .split('_')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ')

        if (typeof value === 'object' && value !== null) {
          if (Array.isArray(value)) {
            const items = (value as unknown[])
              .map(item => typeof item === 'object' ? formatObject(item) : String(item))
              .filter(s => s.length > 0)
            return items.length > 0 ? `${formattedKey}: ${items.join(', ')}` : ''
          } else {
            return `${formattedKey}: ${formatObject(value)}`
          }
        }
        return `${formattedKey}: ${String(value)}`
      })
      .filter(s => s.length > 0)
      .join('\n')
  }

  return ''
}

const analysisOrder = [
  { key: 'executive_summary', label: 'Executive Summary', section: 'overview' },
  { key: 'market_opportunity', label: 'Market Opportunity', section: 'market' },
  { key: 'customer_insights', label: 'Customer Insights', section: 'market' },
  { key: 'value_proposition', label: 'Value Proposition', section: 'product' },
  { key: 'product_quality', label: 'Product Quality', section: 'product' },
  { key: 'product_strategy', label: 'Product Strategy', section: 'product' },
  { key: 'product_market_fit', label: 'Product-Market Fit', section: 'product' },
  { key: 'unit_economics', label: 'Unit Economics', section: 'business' },
  { key: 'revenue_model', label: 'Revenue Model', section: 'business' },
  { key: 'cost_structure', label: 'Cost Structure', section: 'business' },
  { key: 'financial_health', label: 'Financial Health', section: 'business' },
  { key: 'competitive_position', label: 'Competitive Position', section: 'competition' },
  { key: 'defensibility', label: 'Defensibility & Moats', section: 'competition' },
  { key: 'growth_mechanics', label: 'Growth Mechanics', section: 'growth' },
  { key: 'go_to_market', label: 'Go-to-Market', section: 'growth' },
  { key: 'metrics_analytics', label: 'Metrics & Analytics', section: 'performance' },
  { key: 'team_quality', label: 'Team & Execution', section: 'execution' },
  { key: 'risk_assessment', label: 'Risk Assessment', section: 'risk' },
  { key: 'regulatory_compliance', label: 'Regulatory & Compliance', section: 'risk' },
  { key: 'future_potential', label: 'Future Potential', section: 'outlook' },
]

const sectionHeaders = {
  overview: { title: '📋 Overview', color: 'from-blue-600 to-blue-700' },
  market: { title: '🎯 Market Analysis', color: 'from-purple-600 to-purple-700' },
  product: { title: '✨ Product & Strategy', color: 'from-pink-600 to-pink-700' },
  business: { title: '💼 Business Model', color: 'from-amber-600 to-amber-700' },
  competition: { title: '⚔️ Competitive Landscape', color: 'from-red-600 to-red-700' },
  growth: { title: '🚀 Growth & Distribution', color: 'from-green-600 to-green-700' },
  performance: { title: '📊 Performance Metrics', color: 'from-indigo-600 to-indigo-700' },
  execution: { title: '👥 Team & Execution', color: 'from-teal-600 to-teal-700' },
  risk: { title: '⚠️ Risk & Compliance', color: 'from-orange-600 to-orange-700' },
  outlook: { title: '🔮 Future & Potential', color: 'from-violet-600 to-violet-700' },
}

export function AnalysisResults({
  analysis,
  onEmailSubmit,
  onReset,
  isEmailLoading = false,
}: AnalysisResultsProps) {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")

    if (!email.includes("@")) {
      setEmailError("Valid email required")
      return
    }

    try {
      await onEmailSubmit(email)
      setEmailSuccess(true)
      setEmail("")
      setShowEmailForm(false)
      setTimeout(() => setEmailSuccess(false), 3000)
    } catch (err) {
      setEmailError(err instanceof Error ? err.message : "Failed to send email")
    }
  }

  const handleCopy = async () => {
    const text = `${analysis.productName} - Product Analysis Report\n\n${analysisOrder.map(item => `${item.label}\n${formatContent(analysis[item.key as keyof AnalysisResponse])}\n`).join('\n')}`

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const groupedAnalysis = analysisOrder.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = []
    }
    acc[item.section].push(item)
    return acc
  }, {} as Record<string, typeof analysisOrder>)

  return (
    <div className="animate-in fade-in duration-500">
      {/* Executive Summary - Hero Section */}
      <div className="mb-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {analysis.productName}
        </h1>
        <p className="text-slate-300 text-lg mb-8 font-medium">Comprehensive Product Analysis Report</p>

        <div className="prose prose-invert max-w-none">
          <p className="text-slate-100 leading-relaxed text-lg whitespace-pre-wrap mb-0">
            {formatContent(analysis.executive_summary)}
          </p>
        </div>
      </div>

      {/* Report Sections */}
      <div className="space-y-16">
        {Object.entries(groupedAnalysis).map(([sectionKey, items]) => {
          const sectionInfo = sectionHeaders[sectionKey as keyof typeof sectionHeaders]
          return (
            <div key={sectionKey} className="space-y-6">
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${sectionInfo.color} text-white rounded-lg px-8 py-6 shadow-lg`}>
                <h2 className="text-3xl font-bold">
                  {sectionInfo.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="space-y-8">
                {items.map((item) => (
                  <div
                    key={item.key}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all p-8 scroll-mt-24"
                  >
                    {/* Subsection Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b-2 border-slate-100">
                      {item.label}
                    </h3>

                    {/* Content */}
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap m-0">
                        {formatContent(analysis[item.key as keyof AnalysisResponse])}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Action Bar - Floating */}
      <div className="mt-16 pt-12 border-t-2 border-slate-200 flex flex-col md:flex-row gap-3">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 flex-1 bg-slate-100 text-slate-900 px-6 py-4 rounded-lg font-semibold hover:bg-slate-200 transition-colors border border-slate-300 hover:border-slate-400 group text-lg"
        >
          <Copy className="w-5 h-5" />
          {copied ? "Copied!" : "Copy Report"}
        </button>

        <button
          onClick={() => setShowEmailForm(!showEmailForm)}
          className="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl group text-lg"
        >
          <Mail className="w-5 h-5" />
          Email Report
        </button>

        <button
          onClick={onReset}
          className="flex-1 border-2 border-slate-300 text-slate-900 px-6 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors bg-white hover:border-slate-400 text-lg"
        >
          New Analysis
        </button>
      </div>

      {/* Email Success Message */}
      {emailSuccess && (
        <div className="fixed top-8 right-4 p-5 bg-green-50 border-2 border-green-200 text-green-800 rounded-lg text-base font-semibold shadow-xl animate-in slide-in-from-right z-50">
          ✓ Report sent to your email!
        </div>
      )}

      {/* Email Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 space-y-6 border border-slate-200">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">Share Report</h3>
              <p className="text-slate-600 text-lg">Send this analysis to your email</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-semibold text-slate-900">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError("")
                  }}
                  disabled={isEmailLoading}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:bg-slate-50 transition-all text-base"
                  autoFocus
                />
              </div>

              {emailError && (
                <div className="p-4 bg-red-50 border-2 border-red-200 text-red-800 rounded-lg text-base font-semibold">
                  {emailError}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isEmailLoading || !email.includes("@")}
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-base"
                >
                  {isEmailLoading ? "Sending..." : "Send Report"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="flex-1 border-2 border-slate-300 text-slate-900 px-4 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors bg-white text-base"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
