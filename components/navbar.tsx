"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"

type NavItem = {
  label: string
  href: string
}

type NavbarProps = {
  portfolioItems?: NavItem[]
  caseStudyItems?: NavItem[]
  caseStudyTitle?: string
  className?: string
  showMobileMenu?: boolean
}

const defaultCaseStudyItems: NavItem[] = [
  { label: "Problem", href: "#problem" },
  { label: "Teardown", href: "#teardown" },
  { label: "Insight", href: "#insight" },
  { label: "Strategy", href: "#strategy" },
  { label: "Roadmap", href: "#roadmap" },
]

const defaultPortfolioItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Analyzer", href: "#analyzer" },
  // { label: "Process", href: "#process" },
  { label: "Contact", href: "/contact" },
]

function toTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export function Navbar({
  portfolioItems = defaultPortfolioItems,
  caseStudyItems = defaultCaseStudyItems,
  caseStudyTitle,
  className = "",
  showMobileMenu = true,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const pathname = usePathname()
  const isOnCaseStudy = pathname.startsWith("/case-studies")
  const isOnContact = pathname === "/contact"

  const currentCaseStudyTitle = useMemo(() => {
    if (caseStudyTitle) return caseStudyTitle
    if (!isOnCaseStudy) return ""
    const maybeSlug = pathname.split("/")[2]
    if (!maybeSlug) return "Case Study"
    return toTitleFromSlug(maybeSlug)
  }, [caseStudyTitle, isOnCaseStudy, pathname])

  const shouldShowItemLinks = !isOnContact
  const navItems = isOnCaseStudy ? caseStudyItems : portfolioItems

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash)
    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`bg-background fixed left-1/2 z-50 flex -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "scale-95" : ""
      } ${className}`}
    >
      <div
        style={{ justifyContent: "center", width: "100vw" }}
        className="sticky-note sticky-yellow hand-drawn -rotate-1 px-6 py-6"
      >
        <div className="flex items-center justify-between gap-4 md:justify-center md:gap-6">
        {isOnCaseStudy || isOnContact ? (
          <>
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <div className="h-6 w-px bg-foreground/20" />
            <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              {isOnCaseStudy ? currentCaseStudyTitle : "Contact"}
            </span>
            {shouldShowItemLinks && (
              <>
                <div className="h-6 w-px bg-foreground/20" />
                <div className="hidden md:flex items-center gap-4">
                  {navItems.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-sm transition-all hover:underline hover:underline-offset-4 ${
                        i % 2 === 0 ? "rotate-1" : "-rotate-1"
                      } ${activeHash === item.href ? "font-semibold" : ""}`}
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
            <a href="/lesspay" className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
              Portfolio
            </a>
            <div className="h-6 w-px bg-foreground/20" />
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item, i) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-all hover:underline hover:underline-offset-4 ${
                      i % 2 === 0 ? "rotate-1" : "-rotate-1"
                    } ${pathname === item.href ? "font-semibold" : ""}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-all hover:underline hover:underline-offset-4 ${
                      i % 2 === 0 ? "rotate-1" : "-rotate-1"
                    } ${activeHash === item.href ? "font-semibold" : ""}`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </>
        )}

          {showMobileMenu && shouldShowItemLinks && navItems.length > 0 && (
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden rounded-md border border-foreground/20 p-2 transition-colors hover:bg-foreground/5"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          )}
        </div>

        {showMobileMenu && shouldShowItemLinks && navItems.length > 0 && mobileOpen && (
          <div className="mt-4 border-t border-foreground/15 pt-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded px-2 py-1 text-sm transition-colors hover:bg-foreground/5 ${
                      pathname === item.href ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded px-2 py-1 text-sm transition-colors hover:bg-foreground/5 ${
                      activeHash === item.href ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
