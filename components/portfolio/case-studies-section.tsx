import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

{
  /* Case studies section */
}

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-24 px-6 relative">
      {/* Section intro annotation - responsive */}
      <div className="absolute top-32 right-2 md:top-40 md:right-32 sticky-note sticky-pink p-2 rotate-3 block">
        {/* <p className="font-[family-name:var(--font-caveat)] text-md">
          spoiler: lots of spreadsheets
        </p> */}
        <p className="font-[family-name:var(--font-caveat)] text-md">
          real products, real thinking
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block mb-0 relative">
          <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
            How I break real products
          </p>
          <div className="absolute -right-32 top-0 sticky-note sticky-orange p-2 rotate-1 hidden md:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              scroll!
            </p>
          </div>
        </div>
        <div className="sticky-note sticky-blue p-4  mb-12 relative">
          <p className="text-foreground/80 mb-3">
            These are real products analyzed through problem clarity, user
            behavior, and business models.
          </p>

          <p className="text-sm text-foreground/60">
            Not feature reviews. Strategic breakdowns.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="relative group">
              <Link href={caseStudy.route}>
                <div
                  className={`sticky-note ${
                    index % 4 === 0
                      ? "sticky-yellow-color"
                      : index % 4 === 1
                        ? "sticky-pink"
                        : index % 4 === 2
                          ? "sticky-blue-color"
                          : "sticky-green-color"
                  } p-8 ${
                    index % 3 === 0
                      ? "rotate-1"
                      : index % 3 === 1
                        ? "-rotate-2"
                        : "rotate-3"
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
                          borderRadius:
                            "255px 15px 225px 15px/15px 225px 15px 255px",
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
          <div className="absolute -bottom-24 left-1/2 sticky-note sticky-green p-2 rotate-1 hidden lg:block">
            <p className="font-[family-name:var(--font-caveat)] text-sm">
              more coming soon™
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
