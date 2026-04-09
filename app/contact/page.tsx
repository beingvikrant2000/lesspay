"use client"

import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/lesspay/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text()

      let data
      try {
        data = JSON.parse(text)
      } catch {
        console.error("Response is not JSON:", text)
        throw new Error(`Server error: ${text.substring(0, 100)}`)
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      console.error("Contact form error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar placeholder for spacing */}
      <div className="h-24" />

      {/* Hero section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-12 relative">
        <div className="absolute top-20 left-2 md:top-32 md:left-12 sticky-note sticky-blue p-2 md:p-3 rotate-3 block">
          <p className="font-[family-name:var(--font-caveat)] text-xs md:text-base">let's talk</p>
        </div>
        <div className="absolute bottom-40 right-2 md:bottom-32 md:right-12 sticky-note sticky-green p-2 md:p-3 -rotate-2 hidden md:block">
          <p className="font-[family-name:var(--font-caveat)] text-base">all ears</p>
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="sticky-note sticky-yellow p-8 md:p-12 -rotate-1 mb-8 inline-block">
            <div className="tape" />
            <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-foreground/70 mb-4">
              Get In Touch
            </p>
            <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-6xl font-bold tracking-tight">
              Let's Connect
            </h1>
            <div
              className="w-32 h-1 bg-foreground/30 mx-auto mt-4"
              style={{
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
              }}
            />
          </div>

          <div className="sticky-note sticky-pink p-6 rotate-1 max-w-xl mx-auto">
            <p className="text-lg text-foreground/80 text-balance">
              Have a question about product strategy, market analysis, or just want to chat? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="sticky-note sticky-blue p-4 -rotate-2 inline-block">
                <p className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
                  Reach Out
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="sticky-note sticky-green p-4 rotate-1">
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">Email</p>
                  <a
                    href="mailto:vikrant@example.com"
                    className="text-foreground/80 hover:text-foreground transition-colors break-all"
                  >
                    vikrant@example.com
                  </a>
                </div>

                {/* Social */}
                <div className="sticky-note sticky-orange p-4 -rotate-1">
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-3">Social</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-foreground/30">•</span>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="sticky-note sticky-pink p-4 rotate-2">
                  <p className="font-[family-name:var(--font-caveat)] text-lg font-bold mb-2">Response Time</p>
                  <p className="text-sm text-foreground/80">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="sticky-note sticky-yellow p-8 rotate-1 relative">
              <div className="tape" />
              <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-sm focus:outline-none focus:border-foreground/40 resize-none"
                    placeholder="Tell me more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full bg-foreground text-background px-4 py-2 rounded font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading && "Sending..."}
                  {submitted && "Message sent! ✓"}
                  {!loading && !submitted && "Send Message"}
                </button>

                {error && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded text-sm">
                    Error: {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to portfolio */}
      <section className="py-12 px-6 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group">
          <span>←</span>
          <span>Back to Portfolio</span>
        </Link>
      </section>
    </main>
  )
}
