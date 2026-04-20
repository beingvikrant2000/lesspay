export function InsightsSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30 relative">
      {/* Section annotations - responsive */}
      <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-orange p-2 rotate-2 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">
          hard won 🏆
        </p>
      </div>
      <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-green p-2 -rotate-3 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          pattern recognition
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-4">
          <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
            What I’ve learned from analyzing products
          </p>
        </div>

        <div className=" relative">
          {/* Insight 1 */}
          <div className="sticky-note sticky-yellow p-6 mb-6 -rotate-1 group">
            <div className="tape" />
            {/* <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              Loyalty Over Features
            </p>
            <p className="text-sm text-foreground/80 mb-3">
              I used to think features drive adoption. Now I know loyalty drives
              defensibility. A product with good features dies fast. A product
              users are loyal to survives.
            </p>
            <p className="text-xs text-foreground/60 italic">
              From analyzing 20+ fintech apps
            </p> */}
            <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              Features drive acquisition. Behavior drives retention.
            </p>

            <p className="text-sm text-foreground/80 mb-3">
              Most products optimize onboarding and feature velocity. Very few
              design for habit formation and long-term usage.
            </p>

            <p className="text-xs text-foreground/60 italic">
              Retention is a product decision, not a growth tactic
            </p>
          </div>

          {/* Insight 2 */}
          <div className="sticky-note sticky-pink p-6 rotate-1 group">
            <div className="tape" />
            {/* <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              Copy is Strategy
            </p>
            <p className="text-sm text-foreground/80 mb-3">
              The way a product talks about itself reveals its actual strategy.
              "Easy" means simple. "Powerful" means complex. "Community" means
              network effects. Stop guessing—read the copy.
            </p>
            <p className="text-xs text-foreground/60 italic">
              Noticed this pattern across 100+ startups
            </p> */}
            <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              User intent is more important than user feedback
            </p>

            <p className="text-sm text-foreground/80 mb-3">
              What users say is often inconsistent with what they do. Behavior
              reveals friction. Feedback often hides it.
            </p>

            <p className="text-xs text-foreground/60 italic">
              Watch actions, not opinions
            </p>
          </div>

          {/* Insight 3 */}
          <div className="sticky-note sticky-green p-6 -rotate-1 group">
            <div className="tape" />
            {/* <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              First Movers Don't Win, Fast Learners Do
            </p>
            <p className="text-sm text-foreground/80 mb-3">
              Speed-to-market matters less than speed-to-insight. Companies that
              move fast and learn slow lose to companies that move smart and
              adapt quick.
            </p>
            <p className="text-xs text-foreground/60 italic">
              Every market pivot I've analyzed confirms this
            </p> */}
            <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">
              User intent is more important than user feedback
            </p>

            <p className="text-sm text-foreground/80 mb-3">
              What users say is often inconsistent with what they do. Behavior
              reveals friction. Feedback often hides it.
            </p>

            <p className="text-xs text-foreground/60 italic">
              Watch actions, not opinions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
