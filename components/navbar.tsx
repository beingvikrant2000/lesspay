"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Teardown", href: "#teardown" },
  { label: "Insight", href: "#insight" },
  { label: "Strategy", href: "#strategy" },
  { label: "Roadmap", href: "#roadmap" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`bg-background flex  fixed  left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "scale-95" : ""}`}>
      <div style={{ justifyContent: "center", width: "100vw" }} className="sticky-note sticky-yellow px-6 py-6 -rotate-1 hand-drawn flex items-center gap-6">
        <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
          LessPay
        </span>
        <div className="h-6 w-px bg-foreground/20" />
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm hover:underline hover:underline-offset-4 transition-all ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
