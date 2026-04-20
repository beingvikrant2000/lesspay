export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-6 relative">
      {/* Section annotations - responsive */}
      <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-blue p-2 rotate-2 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">
          no shortcuts 🔍
        </p>
      </div>
      <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-orange p-2 -rotate-1 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          6 steps to clarity
        </p>
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
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                1. Immerse
              </p>
              <p className="text-sm text-foreground/80">
                Live in the market. Use the product daily. Talk to users.
                Understand the problem, not just the solution.
              </p>
            </div>

            <div className="sticky-note sticky-pink p-4 rotate-1 group">
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                2. Deconstruct
              </p>
              <p className="text-sm text-foreground/80">
                Break down the product layer-by-layer. Why this feature? Why
                this flow? What problem does it solve?
              </p>
            </div>

            <div className="sticky-note sticky-blue p-4 -rotate-2 group">
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                3. Analyze
              </p>
              <p className="text-sm text-foreground/80">
                Map business model, revenue streams, competitive positioning.
                Follow the money trails and market dynamics.
              </p>
            </div>
          </div>

          {/* More process steps */}
          <div className="space-y-4">
            <div className="sticky-note sticky-green p-4 rotate-2 group">
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                4. Synthesize
              </p>
              <p className="text-sm text-foreground/80">
                Find patterns. What&apos;s hidden? What connects? Where&apos;s the real
                insight buried in the noise?
              </p>
            </div>

            <div className="sticky-note sticky-orange p-4 -rotate-1 group">
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                5. Recommend
              </p>
              <p className="text-sm text-foreground/80">
                Actionable strategies based on insights. Not theory. Not
                guesses. Backed by analysis and market reality.
              </p>
            </div>

            <div className="sticky-note sticky-pink p-4 rotate-1 group">
              <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
                6. Iterate
              </p>
              <p className="text-sm text-foreground/80">
                Strategies evolve as markets shift. The process doesn&apos;t end—it
                compounds with every new insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
