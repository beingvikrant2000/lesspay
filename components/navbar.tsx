"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const caseStudyItems = [
  { label: "Problem", href: "#problem" },
  { label: "Teardown", href: "#teardown" },
  { label: "Insight", href: "#insight" },
  { label: "Strategy", href: "#strategy" },
  { label: "Roadmap", href: "#roadmap" },
]

const portfolioItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isOnCaseStudy = pathname.startsWith("/case-studies")
  const isOnContact = pathname === "/contact"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`bg-background flex  fixed  left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "scale-95" : ""}`}>
      <div style={{ justifyContent: "center", width: "100vw" }} className="sticky-note sticky-yellow px-6 py-6 -rotate-1 hand-drawn flex items-center gap-6">
        {isOnCaseStudy || isOnContact ? (
          <>
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <div className="h-6 w-px bg-foreground/20" />
            <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              {isOnCaseStudy ? "LessPay" : "Contact"}
            </span>
            {isOnCaseStudy && (
              <>
                <div className="h-6 w-px bg-foreground/20" />
                <div className="hidden md:flex items-center gap-4">
                  {caseStudyItems.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-sm hover:underline hover:underline-offset-4 transition-all ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              Portfolio
            </span>
            <div className="h-6 w-px bg-foreground/20" />
            <div className="hidden md:flex items-center gap-4">
              {portfolioItems.map((item, i) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm hover:underline hover:underline-offset-4 transition-all ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-sm hover:underline hover:underline-offset-4 transition-all ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
