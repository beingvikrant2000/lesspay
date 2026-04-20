import { ProductAnalyzer } from "@/components/product-analyzer"

export function AnalyzerSection() {
  return (
    <section className="py-20 md:py-24 px-6 relative" id="analyzer">
      <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-pink p-2 rotate-3 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">try it out ✨</p>
      </div>
      <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-green p-2 -rotate-2 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">see the method</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-8 relative">
          <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
            Try It Yourself
          </p>
          <div className="absolute -right-40 top-0 sticky-note sticky-orange p-2 rotate-1 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">experience the analysis</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-foreground/80 mb-3">
            Curious how I analyze products? Enter any product below and watch me break down the Problem, Insight, Strategy, and Growth Levers.
          </p>
          <p className="text-sm text-foreground/60">
            This is real-time analysis using my product thinking framework. Get results emailed to you instantly.
          </p>
        </div>

        <div className="sticky-note sticky-yellow p-6 md:p-8 rotate-1 relative">
          <div className="tape" />
          <ProductAnalyzer />
        </div>
      </div>
    </section>
  )
}