"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About</h2>
            <div className="mt-3 h-px w-12 bg-amber-400" />
          </div>

          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              I'm a final-year Computer Science student at{" "}
              <span className="text-foreground font-medium">Ashesi University</span> in Ghana,
              graduating June 2026 with a 3.60 GPA. Ashesi is a liberal arts university that trains
              engineers to think independently — and that's shaped how I approach every problem I work on.
            </p>
            <p>
              I build real products. A career platform now used by students across campus.
              A machine learning model that predicts football player ratings within a 5% margin.
              A peer-to-peer marketplace that got to the finals of a hackathon in the UK (NorthEastern University + Ashesi Center for Entrepreneurship).
            </p>
            <p>
              I've interned at a London-based consulting firm, led a developer community of 100+ students,
              and spent time with Harvard MBA students analyzing startup compensation structures.
              I'm a MasterCard Foundation Scholar and have been on the Dean's List every year (2023-2026).
            </p>
            <p>
              When I'm not at a keyboard, I'm watching football, planning events, or thinking about
              what technology can do for Ghana and the continent.
            </p>
          </div>

          {/* Simple identity row */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
            {[
              { label: "Nationality", value: "Ghanaian 🇬🇭" },
              { label: "Location", value: "Berekuso, Eastern Region" },
              { label: "Email", value: "eddiemens0462@gmail.com" },
              { label: "LinkedIn", value: "edward-ofosu-mensah", href: "https://www.linkedin.com/in/edward-ofosu-mensah" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-amber-500 transition-colors flex items-center gap-1"
                  >
                    {item.value} <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1CHq0XHwTlAW1b0VDTy3HvtLPRIl_uQ0R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border px-4 py-2.5 rounded-sm hover:border-foreground transition-colors"
          >
            View full CV <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* Right — CV Preview (live Google Drive embed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -top-2 -left-2 w-16 h-1 bg-amber-400" />
          <div className="border border-border rounded-sm overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1CHq0XHwTlAW1b0VDTy3HvtLPRIl_uQ0R/preview"
              className="w-full"
              style={{ height: "700px" }}
              allow="autoplay"
              title="Edward Ofosu Mensah — CV"
            />
          </div>
          <div className="mt-3 flex justify-end">
            <a
              href="https://drive.google.com/file/d/1CHq0XHwTlAW1b0VDTy3HvtLPRIl_uQ0R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Open in Google Drive <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
