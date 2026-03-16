"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "Jul 2025 – Aug 2025",
    role: "Software Engineering Intern",
    org: "Newton Europe",
    location: "London (Remote)",
    description:
      "Built features for a scholarship management platform that onboarded 200+ applications in its first month. Worked across the full stack in a fast-paced consulting environment.",
  },
  {
    period: "Aug 2024 – May 2025",
    role: "Google Developer Student Club Lead",
    org: "Ashesi University",
    location: "Ghana",
    description:
      "Took a community of developers and grew attendance by 50% in the first few weeks. Ran 20+ workshops across web development, cloud computing, and AI. Organized 10 workshops per semester — planned, marketed, and facilitated all of them.",
  },
  {
    period: "Oct 2024 – Jan 2025",
    role: "Participant — Immersive Field Course",
    org: "Harvard Business School",
    location: "Accra, Ghana",
    description:
      "Worked alongside HBS MBA students analyzing Startfield's compensation and career development practices. A rare look inside how top-tier business strategy gets made.",
  },
  {
    period: "Ongoing",
    role: "Freelance Full-Stack Developer",
    org: "Independent",
    location: "Ghana",
    description:
      "Built and maintained websites for schools and small businesses. Mostly React/PHP work. Clients came through referral. Projects ranged from landing pages to full admin dashboards.",
  },
  {
    period: "2022 – 2026",
    role: "B.Sc. Computer Science",
    org: "Ashesi University",
    location: "Berekuso, Ghana",
    description:
      "GPA 3.50/4.00. Dean's List every year (2023–2026). MasterCard Foundation Scholar. Coursework spans algorithms, software engineering, AI, and systems.",
  },
]

export default function ExperienceSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
        <div className="mt-3 h-px w-12 bg-amber-400" />
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-8 border-t border-border group"
          >
            {/* Period */}
            <div className="md:pt-0.5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{exp.period}</p>
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <h3 className="font-semibold text-foreground text-lg leading-tight">{exp.role}</h3>
                <span className="hidden sm:block text-muted-foreground">·</span>
                <p className="text-muted-foreground text-sm">
                  {exp.org}
                  <span className="text-muted-foreground/50 ml-2">{exp.location}</span>
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{exp.description}</p>
            </div>
          </motion.div>
        ))}
        {/* Final border */}
        <div className="border-t border-border" />
      </div>
    </div>
  )
}
