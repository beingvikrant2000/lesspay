"use client"

import Link from "next/link"
import { caseStudies } from "@/data/case-studies"
import { ProductAnalyzer } from "@/components/product-analyzer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar placeholder for spacing */}
      <div className="h-24" />

      {/* Hero section - About you */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Decorative witty notes - responsive */}
        <div className="absolute top-20 left-4 md:top-22 md:left-50 sticky-note sticky-blue p-2 md:p-3 rotate-4 block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">breaks things on purpose</p>
        </div>
        <div className="absolute top-40 right-2 md:top-58 md:right-72 sticky-note sticky-pink p-2 md:p-3 -rotate-9 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg italic">~thinks</p>
        </div>
        <div className="absolute bottom-40 left-2 md:bottom-82 md:left-62 sticky-note sticky-orange p-2 md:p-3 -rotate-4 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">asks why 7 times</p>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main title card */}
          <div className="sticky-note sticky-yellow p-8 md:p-12 -rotate-1 mb-8 inline-block">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-foreground/70 mb-4">
              Hi, I'm
            </p>
            <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              Vikrant Tanwar
            </h1>
            <div
              className="w-32 h-1 bg-foreground/30 mx-auto mb-4"
              style={{
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
              }}
            />
          </div>

          {/* Tagline */}
          <div className="sticky-note sticky-green p-6 rotate-1 max-w-2xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-foreground/80 text-balance">
              Product Owner & Strategist exploring the intersection of technology, business models, and user behavior
            </p>
          </div>

          {/* Subtitle note with annotation */}
          <div className="relative inline-block mb-12">
            <div className="sticky-note sticky-pink p-4 -rotate-2 inline-block">
              <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl italic">
                Deep dives into product strategy, competitive positioning, and growth
              </p>
            </div>
            <div className="absolute -right-52 top-2 sticky-note sticky-blue p-2 rotate-9 hidden md:block">
              <p className="font-[family-name:var(--font-caveat)] text-lg">obsessed</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="font-[family-name:var(--font-caveat)] text-foreground/50 text-sm">scroll down</p>
            <div className="animate-bounce text-foreground/50">↓</div>
          </div>
        </div>
      </section>

      {/* Product Analyzer Section */}
      <section className="py-20 md:py-24 px-6 relative" id="analyzer">
        {/* Decorative annotations */}
        <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-pink p-2 rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">try it out ✨</p>
        </div>
        <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-green p-2 -rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">see the method</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Section header */}
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

          {/* Analyzer Component */}
          <div className="sticky-note sticky-yellow p-6 md:p-8 rotate-1 relative">
            <div className="tape" />
            <ProductAnalyzer />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 px-6 bg-secondary/30 relative" id="about">
        {/* Side annotations - responsive */}
        <div className="absolute right-2 top-32 md:right-20 md:top-40 sticky-note sticky-orange p-2 -rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">very strategic</p>
        </div>
        <div className="absolute left-2 bottom-40 md:left-16 md:bottom-24 sticky-note sticky-pink p-2 rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">data-driven-ish</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - About text */}
            <div>
              <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-6">
                <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
                  About Me
                </p>
              </div>

              <div className="space-y-4 text-foreground/80">
                <p>
                  I'm a Product Owner with a passion for understanding markets, building products that solve real problems, and creating strategies that drive sustainable growth.
                </p>
                <p>
                  My approach combines competitive analysis, user research, and data-driven insights to uncover hidden opportunities and build products that matter.
                </p>
                <p>
                  Whether it's analyzing emerging startups, deconstructing market leaders, or charting growth pathways—I dig deep to find the insights hiding in plain sight.
                </p>
              </div>

              {/* Floating annotation */}
              <div className="relative mt-8 h-12">
                <div className="absolute -left-24 -top-2 sticky-note sticky-yellow p-2 rotate-3 hidden lg:block">
                  <p className="font-[family-name:var(--font-caveat)] text-sm">founder energy</p>
                </div>
              </div>
            </div>

            {/* Right side - Expertise */}
            <div className="sticky-note sticky-yellow p-8 rotate-1 relative">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold mb-6">
                What I Do
              </p>

              <div className="space-y-4">
                <div className="group relative">
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">Product Strategy</p>
                  <p className="text-sm text-foreground/70">Building roadmaps aligned with market opportunities and user needs</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">Competitive Analysis</p>
                  <p className="text-sm text-foreground/70">Understanding market dynamics, positioning, and differentiation</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">Business Model Design</p>
                  <p className="text-sm text-foreground/70">Exploring revenue models, unit economics, and scaling mechanisms</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">Growth Strategy</p>
                  <p className="text-sm text-foreground/70">Identifying levers for user acquisition, retention, and expansion</p>
                </div>
              </div>

              {/* Corner annotation */}
              <div className="absolute -bottom-12 -right-24 sticky-note sticky-green p-2 -rotate-1 hidden lg:block">
                <p className="font-[family-name:var(--font-caveat)] text-sm">ships fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach / Philosophy */}
      <section className="py-20 px-6 relative">
        {/* Section annotations - responsive */}
        <div className="absolute top-32 right-2 md:top-40 md:right-20 sticky-note sticky-blue p-2 rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">spicy takes ⚡</p>
        </div>
        <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-pink p-2 -rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">not advice btw</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="sticky-note sticky-green p-4 -rotate-2 inline-block mb-8">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              How I Think
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
            {/* Principle 1 */}
            <div className="sticky-note sticky-yellow p-6 rotate-1 group relative">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">
                Why Before How
              </p>
              <p className="text-sm text-foreground/80">
                Every feature, every pivot, every strategy must answer "why are we doing this?" before "how do we do it?" The best products are built on clear conviction, not just execution.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="sticky-note sticky-pink p-6 -rotate-2 group relative">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">
                Context is King
              </p>
              <p className="text-sm text-foreground/80">
                Great products don't exist in a vacuum. They live within markets, ecosystems, and competitive landscapes. Understanding context turns data into wisdom.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="sticky-note sticky-blue p-6 rotate-2 group relative">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">
                Users Change Faster
              </p>
              <p className="text-sm text-foreground/80">
                Your product isn't solved. Your competition isn't static. Your users' needs aren't permanent. Everything is in flux. Adapt or lose.
              </p>
            </div>
          </div>

          <div className="sticky-note sticky-orange p-6 rotate-1 max-w-2xl relative">
            <p className="text-sm text-foreground/80">
              <span className="font-semibold">The Core Belief:</span> The best product strategy comes from obsessively understanding three things—your users, your market, and your business. Miss any one and you'll build something broken.
            </p>
            <div className="absolute -bottom-12 -right-16 sticky-note sticky-yellow p-2 rotate-1 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">the trifecta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights / Hot Takes */}
      <section className="py-20 px-6 bg-secondary/30 relative">
        {/* Section annotations - responsive */}
        <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-orange p-2 rotate-2 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">hard won 🏆</p>
        </div>
        <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-green p-2 -rotate-3 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">pattern recognition</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-8">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              Recent Learnings
            </p>
          </div>

          <div className="space-y-6 relative">
            {/* Insight 1 */}
            <div className="sticky-note sticky-yellow p-6 -rotate-1 group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                Loyalty Over Features
              </p>
              <p className="text-sm text-foreground/80 mb-3">
                I used to think features drive adoption. Now I know loyalty drives defensibility. A product with good features dies fast. A product users are loyal to survives.
              </p>
              <p className="text-xs text-foreground/60 italic">From analyzing 20+ fintech apps</p>
            </div>

            {/* Insight 2 */}
            <div className="sticky-note sticky-pink p-6 rotate-2 group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                Copy is Strategy
              </p>
              <p className="text-sm text-foreground/80 mb-3">
                The way a product talks about itself reveals its actual strategy. "Easy" means simple. "Powerful" means complex. "Community" means network effects. Stop guessing—read the copy.
              </p>
              <p className="text-xs text-foreground/60 italic">Noticed this pattern across 100+ startups</p>
            </div>

            {/* Insight 3 */}
            <div className="sticky-note sticky-green p-6 -rotate-2 group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                First Movers Don't Win, Fast Learners Do
              </p>
              <p className="text-sm text-foreground/80 mb-3">
                Speed-to-market matters less than speed-to-insight. Companies that move fast and learn slow lose to companies that move smart and adapt quick.
              </p>
              <p className="text-xs text-foreground/60 italic">Every market pivot I've analyzed confirms this</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Methodology */}
      <section id="process" className="py-20 px-6 relative">
        {/* Section annotations - responsive */}
        <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-blue p-2 rotate-2 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">no shortcuts 🔍</p>
        </div>
        <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-orange p-2 -rotate-1 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">6 steps to clarity</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="sticky-note sticky-orange p-4 rotate-1 inline-block mb-8">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              My Process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Process steps */}
            <div className="space-y-4">
              <div className="sticky-note sticky-yellow p-4 -rotate-1 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">1. Immerse</p>
                <p className="text-sm text-foreground/80">Live in the market. Use the product daily. Talk to users. Understand the problem, not just the solution.</p>
              </div>

              <div className="sticky-note sticky-pink p-4 rotate-1 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">2. Deconstruct</p>
                <p className="text-sm text-foreground/80">Break down the product layer-by-layer. Why this feature? Why this flow? What problem does it solve?</p>
              </div>

              <div className="sticky-note sticky-blue p-4 -rotate-2 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">3. Analyze</p>
                <p className="text-sm text-foreground/80">Map business model, revenue streams, competitive positioning. Follow the money trails and market dynamics.</p>
              </div>
            </div>

            {/* More process steps */}
            <div className="space-y-4">
              <div className="sticky-note sticky-green p-4 rotate-2 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">4. Synthesize</p>
                <p className="text-sm text-foreground/80">Find patterns. What's hidden? What connects? Where's the real insight buried in the noise?</p>
              </div>

              <div className="sticky-note sticky-orange p-4 -rotate-1 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">5. Recommend</p>
                <p className="text-sm text-foreground/80">Actionable strategies based on insights. Not theory. Not guesses. Backed by analysis and market reality.</p>
              </div>

              <div className="sticky-note sticky-pink p-4 rotate-1 group">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">6. Iterate</p>
                <p className="text-sm text-foreground/80">Strategies evolve as markets shift. The process doesn't end—it compounds with every new insight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / By The Numbers */}
      <section className="py-20 px-6 bg-secondary/30 relative">
        {/* Section annotations */}
        <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-pink p-2 rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">receipts 📊</p>
        </div>
        <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-blue p-2 -rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">in the trenches</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-12">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              By The Numbers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="sticky-note sticky-yellow p-6 rotate-1 text-center group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">20+</p>
              <p className="text-sm text-foreground/80">Products Analyzed</p>
            </div>

            <div className="sticky-note sticky-pink p-6 -rotate-2 text-center group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">8</p>
              <p className="text-sm text-foreground/80">Market Categories</p>
            </div>

            <div className="sticky-note sticky-green p-6 rotate-1 text-center group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">100+</p>
              <p className="text-sm text-foreground/80">Competitive Landscapes</p>
            </div>

            <div className="sticky-note sticky-blue p-6 -rotate-1 text-center group">
              <div className="tape" />
              <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">∞</p>
              <p className="text-sm text-foreground/80">Things Left to Learn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies section */}
      <section id="work" className="py-24 px-6 relative">
        {/* Section intro annotation - responsive */}
        <div className="absolute top-32 right-2 md:top-40 md:right-32 sticky-note sticky-pink p-2 rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">spoiler: lots of spreadsheets</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-12 relative">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              Featured Case Studies
            </p>
            <div className="absolute -right-32 top-0 sticky-note sticky-orange p-2 rotate-1 hidden md:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">scroll!</p>
            </div>
          </div>

          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="relative group">
                <Link href={caseStudy.route}>
                  <div
                    className={`sticky-note ${
                      index % 4 === 0
                        ? "sticky-yellow"
                        : index % 4 === 1
                          ? "sticky-pink"
                          : index % 4 === 2
                            ? "sticky-blue"
                            : "sticky-green"
                    } p-8 ${
                      index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-2" : "rotate-3"
                    } h-full cursor-pointer hover:shadow-lg transition-shadow`}
                  >
                    <div className="tape" />
                    <div className="space-y-4">
                      <div>
                        <p className="font-[family-name:var(--font-caveat)] text-sm text-foreground/60 mb-1">
                          Case Study
                        </p>
                        <h3 className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-2">
                          {caseStudy.title}
                        </h3>
                        <div
                          className="w-12 h-1 bg-foreground/20"
                          style={{
                            borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                          }}
                        />
                      </div>

                      <p className="text-sm text-foreground/70 text-balance">
                        {caseStudy.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                        <span>Explore</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* Empty state hint */}
            <div className="absolute -bottom-24 left-1/3 sticky-note sticky-green p-2 rotate-1 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">more coming soon™</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 relative border-t">
        {/* Footer annotations */}
        <div className="absolute top-20 left-20 sticky-note sticky-blue p-2 -rotate-3 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">👋</p>
        </div>
        <div className="absolute top-32 right-24 sticky-note sticky-pink p-2 rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-sm">no spam promise</p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="sticky-note sticky-yellow p-10 md:p-12 rotate-1 inline-block relative">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-lg text-foreground/60 mb-2">
              Let's connect
            </p>
            <p className="font-[family-name:var(--font-caveat)] text-3xl md:text-4xl font-bold mb-4">
              Vikrant Tanwar
            </p>
            <div
              className="w-20 h-1 bg-foreground/30 mx-auto mb-4"
              style={{
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
              }}
            />
            <p className="text-sm text-foreground/60">
              Product Owner & Strategist
            </p>

            {/* Corner annotation */}
            <div className="absolute -bottom-16 -right-20 sticky-note sticky-green p-2 rotate-3 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">always curious</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
