import { StickyNote } from "./sticky-note"

export function FooterSection() {
  return (
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
              Let&apos;s connect
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
  )
}