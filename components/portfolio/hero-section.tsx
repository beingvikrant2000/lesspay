export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pb-12 pt-0 relative">
      <div className="absolute hidden top-20 left-4 md:top-22 md:left-50 sticky-note sticky-blue p-2 md:p-3 rotate-4 md:block">
        <p className="font-[family-name:var(--font-caveat)] text-lg">
          breaks things on purpose
        </p>
      </div>
      <div className="absolute top-40 right-2 md:top-68 md:right-60 sticky-note sticky-pink p-2 md:p-3 -rotate-9 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-lg italic">
          ~thinks
        </p>
      </div>
      <div className="absolute bottom-40 left-2 md:bottom-82 md:left-62 sticky-note sticky-orange p-2 md:p-3 -rotate-4 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-lg">
          asks why 7 times
        </p>
      </div>
      <div className="absolute top-40 right-2 md:top-18 md:right-72 sticky-note sticky-orange p-2 md:p-3 -rotate-9 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-lg">
          product = behavior + business
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 mb-0">
        <div className="sticky-note sticky-yellow p-8 md:p-12 -rotate-1 mb-0 inline-block">
          <div className="tape" />
          <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-foreground/70 mb-4">
            Hi, I&apos;m
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Vikrant Tanwar
          </h1>
          <div
            className="w-32 h-1 bg-foreground/30 mx-auto mb-0"
            style={{
              borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            }}
          />
        </div>

        <div className="sticky-note sticky-green pb-6 pt-0 rotate-1 max-w-2xl mt-0 mx-auto mb-8">
          {/* <p className="text-lg md:text-xl text-foreground/80 text-balance">
            Product Owner & Strategist exploring the intersection of technology,
            business models, and user behavior
          </p> */}
          <p className="text-lg md:text-xl text-foreground/80 text-balance">
            I break products to understand why they win or fail.
          </p>

          <p className="text-sm md:text-base text-foreground/60 mt-3 max-w-xl mx-auto">
            Focused on problem clarity, user behavior, and business models—not
            just features.
          </p>
        </div>

        <div className="relative inline-block mb-12">
          <div className="sticky-note sticky-pink p-4 -rotate-2 inline-block">
            {/* <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl italic">
              Deep dives into product strategy, competitive positioning, and
              growth
            </p> */}
            <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl italic">
              I look past features - into behavior, incentives, and why users
              stay.
            </p>
          </div>
          <div className="absolute -right-52 top-2 sticky-note sticky-blue p-2 rotate-9 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-lg">
              obsessed
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="font-[family-name:var(--font-caveat)] text-foreground/50 text-sm">
              scroll to see how I think
          </p>
          <div className="animate-bounce text-foreground/50">↓</div>
        </div>
      </div>
    </section>
  );
}
