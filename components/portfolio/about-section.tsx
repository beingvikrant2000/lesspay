export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30 relative" id="about">
      {/* Side annotations - responsive */}
      <div className="absolute right-2 top-32 md:right-60 md:top-25 sticky-note sticky-orange p-2 -rotate-3 block">
        <p className="font-[family-name:var(--font-caveat)] text-xs md:text-sm">
          ships fast
        </p>
      </div>
      <div className="absolute left-2 bottom-40 md:left-126 md:bottom-20 sticky-note sticky-pink p-2 -rotate-2 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          data-driven-ish
        </p>
      </div>
      <div className="absolute left-2 bottom-40 md:left-150 md:top-24 sticky-note sticky-pink p-2 rotate-2 hidden md:block">
        <p className="font-[family-name:var(--font-caveat)] text-sm">
          founder energy
        </p>
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

            <div className="space-y-4 md:ps-6 text-foreground/80">
              {/* <p>
                I'm a Product Owner with a passion for understanding markets,
                building products that solve real problems, and creating
                strategies that drive sustainable growth.
              </p>
              <p>
                My approach combines competitive analysis, user research, and
                data-driven insights to uncover hidden opportunities and build
                products that matter.
              </p>
              <p>
                Whether it's analyzing emerging startups, deconstructing market
                leaders, or charting growth pathways—I dig deep to find the
                insights hiding in plain sight.
              </p> */}
              <p>
                I’m a Product Owner focused on understanding why products
                succeed or fail.
              </p>

              <p>
                I analyze products through user behavior, business models, and
                problem clarity—not just features.
              </p>

              <p>Most products don’t fail because of poor execution.</p>

              <p>They fail because the problem isn’t clearly defined.</p>

              <p>
                Teams move too fast to solutions without validating what
                actually matters.
              </p>

              <p className="font-semibold">That’s the gap I focus on.</p>
            </div>

            {/* Floating annotation */}
            {/* <div className="relative mt-8 h-12">
              <div className="absolute -left-24 -top-2 sticky-note sticky-yellow p-2 rotate-3 hidden lg:block">
                <p className="font-[family-name:var(--font-caveat)] text-sm">
                  founder energy
                </p>
              </div>
            </div> */}
          </div>

          {/* Right side - Expertise */}
          <div className="sticky-note sticky-yellow md:px-8 pt-0 pb-8 rotate-1 relative">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold mb-6">
              What I Do
            </p>

            <div className="space-y-4">
              <div className="group relative">
                <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">
                  Product Strategy
                </p>
                <p className="text-sm text-foreground/70">
                  Building roadmaps aligned with market opportunities and user
                  needs
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">
                  Competitive Analysis
                </p>
                <p className="text-sm text-foreground/70">
                  Understanding market dynamics, positioning, and
                  differentiation
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">
                  Business Model Design
                </p>
                <p className="text-sm text-foreground/70">
                  Exploring revenue models, unit economics, and scaling
                  mechanisms
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-caveat)] text-lg font-semibold mb-1">
                  Growth Strategy
                </p>
                <p className="text-sm text-foreground/70">
                  Identifying levers for user acquisition, retention, and
                  expansion
                </p>
              </div>
            </div>

            {/* Corner annotation */}
            <div className="absolute bottom-28 -right-0 sticky-note sticky-green p-2 rotate-9 hidden lg:block">
              <p className="font-[family-name:var(--font-caveat)] text-sm">
                very strategic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
