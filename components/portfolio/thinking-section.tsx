import { StickyNote } from "./sticky-note";

export function ThinkingSection() {
  return (
    <section className="py-20 px-6 relative">
      {/* Section annotations - responsive */}
      <div className="absolute top-32 right-2 md:top-40 md:right-20 sticky-note sticky-blue p-2 rotate-3 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">
          spicy takes ⚡
        </p>
      </div>
      <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-pink p-2 -rotate-2 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          not advice btw
        </p>
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
              Every feature, every pivot, every strategy must answer &quot;why are we
              doing this?&quot; before &quot;how do we do it?&quot; The best products are built
              on clear conviction, not just execution.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="sticky-note sticky-pink p-6 -rotate-2 group relative">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">
              Context is King
            </p>
            <p className="text-sm text-foreground/80">
              Great products don&apos;t exist in a vacuum. They live within markets,
              ecosystems, and competitive landscapes. Understanding context
              turns data into wisdom.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="sticky-note sticky-blue p-6 rotate-2 group relative">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">
              Users Change Faster
            </p>
            <p className="text-sm text-foreground/80">
              Your product isn&apos;t solved. Your competition isn&apos;t static. Your
              users&apos; needs aren&apos;t permanent. Everything is in flux. Adapt or
              lose.
            </p>
          </div>
        </div>

        <div className="sticky-note sticky-orange p-6 rotate-1 max-w-2xl relative">
          <p className="text-sm text-foreground/80">
            <span className="font-semibold">The Core Belief:</span> The best
            product strategy comes from obsessively understanding three
            things—your users, your market, and your business. Miss any one and
            you&apos;ll build something broken.
          </p>
          <div className="absolute -bottom-12 -right-16 sticky-note sticky-yellow p-2 rotate-1 hidden lg:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              the trifecta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
