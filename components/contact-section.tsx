"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in touch</h2>
            <div className="mt-3 h-px w-12 bg-amber-400" />
          </div>

          <p className="text-muted-foreground text-[1.05rem] leading-relaxed max-w-md">
            I'm graduating in May 2026 and actively looking for internships and
            graduate roles in software engineering. If you're building something
            interesting, I'd love to hear about it.
          </p>

          {/* Direct contacts */}
          <div className="space-y-5 pt-2">
            {[
              { label: "Email", value: "eddiemens0462@gmail.com", href: "mailto:eddiemens0462@gmail.com" },
              { label: "Phone", value: "+233 553 987 468", href: "tel:+233553987468" },
              { label: "LinkedIn", value: "edward-ofosu-mensah", href: "https://www.linkedin.com/in/edward-ofosu-mensah" },
              { label: "GitHub", value: "eddie-kay0462", href: "https://github.com/eddie-kay0462" },
              { label: "Location", value: "Berekuso, Eastern Region · Ghana 🇬🇭", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-6 border-t border-border pt-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-foreground hover:text-amber-500 transition-colors flex items-center gap-1"
                  >
                    {item.value}
                    {item.href.startsWith("http") && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                )}
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col items-start justify-center h-full py-16 space-y-4">
              <CheckCircle2 className="h-10 w-10 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Message received.</h3>
                <p className="text-muted-foreground text-sm mt-1">I'll reply within a day or two.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-sm border-border bg-transparent focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-sm border-border bg-transparent focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="rounded-sm border-border bg-transparent focus:border-foreground transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-sm bg-foreground text-background hover:bg-foreground/90 font-semibold py-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  )
}
