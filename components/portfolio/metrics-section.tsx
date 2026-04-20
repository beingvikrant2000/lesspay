{
  /* Impact / By The Numbers */
}

export function MetricsSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30 relative">
      {/* Section annotations */}
      <div className="absolute top-32 right-2 md:top-40 md:right-24 sticky-note sticky-pink p-2 rotate-3 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">
          receipts 📊
        </p>
      </div>
      <div className="absolute bottom-40 left-2 md:left-16 sticky-note sticky-blue p-2 -rotate-2 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          in the trenches
        </p>
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
            <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">
              20+
            </p>
            <p className="text-sm text-foreground/80">Products Analyzed</p>
          </div>

          <div className="sticky-note sticky-pink p-6 -rotate-2 text-center group">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">
              8
            </p>
            <p className="text-sm text-foreground/80">Market Categories</p>
          </div>

          <div className="sticky-note sticky-green p-6 rotate-1 text-center group">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">
              100+
            </p>
            <p className="text-sm text-foreground/80">Competitive Landscapes</p>
          </div>

          <div className="sticky-note sticky-blue p-6 -rotate-1 text-center group">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-4xl font-bold text-foreground mb-2">
              ∞
            </p>
            <p className="text-sm text-foreground/80">Things Left to Learn</p>
          </div>
        </div>
      </div>
    </section>
  );
}
