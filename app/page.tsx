"use client"

import Link from "next/link"
import { caseStudies } from "@/data/case-studies"
import { ArrowRight } from "lucide-react"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar placeholder for spacing */}
      <div className="h-24" />

      {/* Hero section - About you */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Decorative witty notes */}
        <div className="absolute top-40 left-1/4 sticky-note sticky-blue p-3 rotate-3 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">breaks things on purpose</p>
        </div>
        <div className="absolute top-1/3 right-1/4 sticky-note sticky-pink p-3 -rotate-2 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg italic">~thinks</p>
        </div>
        <div className="absolute bottom-1/4 left-1/3 sticky-note sticky-orange p-3 rotate-2 hidden lg:block">
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
            <div className="absolute -right-24 -top-2 sticky-note sticky-blue p-3 rotate-6 hidden md:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">obsessed</p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 px-6 bg-secondary/30 relative">
        {/* Side annotations */}
        <div className="absolute right-1/4 top-32 sticky-note sticky-orange p-3 -rotate-3 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">very strategic</p>
        </div>
        <div className="absolute left-1/3 bottom-20 sticky-note sticky-pink p-3 rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">data-driven-ish</p>
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
              <div className="relative mt-8">
                <div className="absolute -left-20 -top-4 sticky-note sticky-yellow p-3 rotate-3 hidden lg:block">
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
                  <div className="absolute -right-24 top-0 sticky-note sticky-pink p-3 rotate-2 hidden group-hover:block z-10">
                    <p className="font-[family-name:var(--font-caveat)] text-sm">fancy planning</p>
                  </div>
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
              <div className="absolute -bottom-10 -right-20 sticky-note sticky-green p-3 -rotate-1 hidden lg:block">
                <p className="font-[family-name:var(--font-caveat)] text-sm">ships fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies section */}
      <section className="py-24 px-6 relative">
        {/* Section intro annotation */}
        <div className="absolute -top-12 right-1/3 sticky-note sticky-pink p-3 rotate-3 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">spoiler: lots of spreadsheets</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-12 relative">
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              Featured Case Studies
            </p>
            <div className="absolute -right-28 top-0 sticky-note sticky-orange p-3 rotate-1 hidden md:block">
              <p className="font-[family-name:var(--font-caveat)] text-lg">scroll!</p>
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
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card hover annotations */}
                <div className="absolute -top-8 -right-8 sticky-note sticky-pink p-3 rotate-2 hidden group-hover:block z-10">
                  <p className="font-[family-name:var(--font-caveat)] text-sm">trust me on this</p>
                </div>
              </div>
            ))}

            {/* Empty state hint */}
            <div className="absolute -bottom-20 left-1/4 sticky-note sticky-green p-3 rotate-1 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-lg">more coming soon™</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 relative border-t">
        {/* Footer annotations */}
        <div className="absolute top-16 left-1/4 sticky-note sticky-blue p-3 -rotate-3 hidden lg:block">
          <p className="font-[family-name:var(--font-caveat)] text-lg">👋</p>
        </div>
        <div className="absolute top-24 right-1/3 sticky-note sticky-pink p-3 rotate-2 hidden md:block">
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
            <div className="absolute -bottom-12 -right-24 sticky-note sticky-green p-3 rotate-3 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">always curious</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
