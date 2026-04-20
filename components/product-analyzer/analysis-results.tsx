"use client"

import { useState } from "react"
import { Copy, Mail } from "lucide-react"
import { ScribbleArrow, ScribbleUnderline, ScribbleCircle } from "@/components/ui/scribbles"


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

interface Props {
  analysis: AnalysisResponse
  onEmailSubmit: (email: string) => Promise<void>
  onReset: () => void
  isEmailLoading?: boolean
}

export function AnalysisResults({
  analysis,
  onEmailSubmit,
  onReset,
  isEmailLoading = false,
}: Props) {
  const [copied, setCopied] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleCopy = async () => {
    const text = Object.entries(analysis)
      .map(([k, v]) => `${k.toUpperCase()}\n${v}\n`)
      .join("\n")

    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.includes("@")) {
      setError("Valid email required")
      return
    }

    try {
      await onEmailSubmit(email)
      setShowEmail(false)
      setEmail("")
      setError("")
    } catch {
      setError("Failed to send")
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-24 relative">

      {/* HERO */}
      <section className="text-center relative">
        
        {/* Annotation */}
        <div className="absolute -top-10 right-10 sticky-note sticky-blue p-2 rotate-6 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">
            strong take?
          </p>
        </div>

        <div className="sticky-note sticky-yellow p-10 md:p-14 -rotate-1 inline-block max-w-3xl">
          <div className="tape" />

          <p className="text-sm text-foreground/60 mb-3">
            Product Breakdown
          </p>

          <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-6xl font-bold mb-6">
            {analysis.productName}
          </h1>

          <div className="sticky-note sticky-pink p-3 -rotate-2 inline-block mb-6">
            <p className="font-[family-name:var(--font-caveat)] text-lg italic">
              {analysis.verdict}
            </p>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed">
            {analysis.overview}
          </p>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Annotation */}
        <div className="absolute -left-10 top-10 sticky-note sticky-pink p-2 -rotate-6 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">
            this is where it breaks
          </p>
        </div>

        {[
          ["Problem", analysis.problem, "sticky-blue"],
          ["Value", analysis.value, "sticky-green"],
          ["Business", analysis.business, "sticky-yellow"],
          ["Growth", analysis.growth, "sticky-pink"],
          ["Risks", analysis.risks, "sticky-orange"],
        ].map(([title, content, color], i) => (
          <div
            key={title}
            className={`sticky-note ${color} p-6 ${
              i % 2 ? "rotate-2" : "-rotate-2"
            } hover:scale-105 transition-transform`}
          >
            <div className="tape" />

            <p className="font-[family-name:var(--font-caveat)] text-xl font-bold mb-3">
              {title}
            </p>

            <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {content}
            </p>
          </div>
        ))}
      </section>

      {/* DEEP DIVE */}
      <section className="space-y-16 relative">

        {/* User Behavior */}
        <div className="relative">
          <div className="absolute -right-12 -top-6 sticky-note sticky-yellow p-2 rotate-3 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm italic">
              users don’t say this
            </p>
          </div>

          <div className="sticky-note sticky-blue p-8 rotate-1 max-w-3xl">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold mb-4">
              User Behavior
            </p>
            <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {analysis.user_behavior}
            </p>
          </div>
        </div>

        {/* Competition */}
        <div className="relative ml-auto max-w-3xl">
          <div className="absolute -left-16 bottom-0 sticky-note sticky-orange p-2 -rotate-3 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              crowded af
            </p>
          </div>

          <div className="sticky-note sticky-pink p-8 -rotate-1">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold mb-4">
              Competition
            </p>
            <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {analysis.competition}
            </p>
          </div>
        </div>

      </section>

      {/* STRATEGY */}
      <section className="space-y-16 relative">

        {/* 0→1 */}
        <div className="relative">
          <div className="absolute right-0 -top-8 sticky-note sticky-blue p-2 rotate-6 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              real insight here
            </p>
          </div>

          <div className="sticky-note sticky-yellow p-10 rotate-1 max-w-3xl">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-4">
              0 → 1 Insight
            </p>
            <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {analysis.zero_to_one}
            </p>
          </div>
        </div>

        {/* 30-60-90 */}
        <div className="relative ml-auto max-w-3xl">
          <div className="absolute -left-10 -bottom-6 sticky-note sticky-green p-2 -rotate-6 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              will they actually do this?
            </p>
          </div>

          <div className="sticky-note sticky-green p-10 -rotate-1">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-4">
              30 / 60 / 90 Plan
            </p>
            <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {analysis.execution_30_60_90}
            </p>
          </div>
        </div>

      </section>

      {/* ACTIONS */}
      <section className="relative pt-12 border-t flex flex-col md:flex-row gap-6">

        {/* Annotation */}
        <div className="absolute right-10 -top-6 sticky-note sticky-pink p-2 rotate-3 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">
            ship it?
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="sticky-note sticky-blue p-5 rotate-1 flex-1 flex items-center justify-center gap-3 text-lg"
        >
          <Copy className="w-5 h-5" />
          {copied ? "Copied" : "Copy Report"}
        </button>

        <button
          onClick={() => setShowEmail(true)}
          className="sticky-note sticky-pink p-5 -rotate-1 flex-1 flex items-center justify-center gap-3 text-lg"
        >
          <Mail className="w-5 h-5" />
          Email Report
        </button>

        <button
          onClick={onReset}
          className="sticky-note sticky-yellow p-5 rotate-2 flex-1 text-lg cursor-pointer"
        >
          New Analysis
        </button>

      </section>

      {/* EMAIL MODAL */}
      {showEmail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleEmail}
            className="sticky-note sticky-yellow p-10 rotate-1 w-full max-w-md"
          >
            <div className="tape" />

            <p className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-6">
              Send Report
            </p>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg mb-4"
            />

            {error && (
              <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-black text-white py-3 rounded-lg"
              >
                {isEmailLoading ? "Sending..." : "Send"}
              </button>

              <button
                type="button"
                onClick={() => setShowEmail(false)}
                className="flex-1 border py-3 rounded-lg "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  )
}