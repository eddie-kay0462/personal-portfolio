"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    number: "01",
    title: "CSOFT",
    subtitle: "Career Services on Your Fingertips",
    description:
      "A platform that digitizes career management for university students — internship requests, attendance, career resources, all in one place. Student usage went up 40% in the first two weeks after launch. It's live and being used by real people on campus.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    image: "/CSOFT.png",
    github: "https://github.com/eddie-kay0462/CSOFT",
    demo: "https://croft.vercel.app/",
    period: "May 2025",
  },
  {
    number: "02",
    title: "E-School Manager",
    subtitle: "School Administration Platform",
    description:
      "A full school management system built for Ghanaian schools — handles student records, attendance, grades, and admin workflows. Replaces paper-based processes that most schools still rely on. Built for real clients, used in production.",
    tags: ["React", "PHP", "MySQL", "Bootstrap"],
    image: "/placeholder.jpg",
    github: "https://github.com/eddie-kay0462/E-School-Manager",
    demo: null,
    period: "Ongoing",
  },
  {
    number: "03",
    title: "Football Player Rating Predictor",
    subtitle: "Machine Learning · Python",
    description:
      "Trained a model on player statistics to predict ratings within a 5% margin of error. Built an interactive Streamlit app so anyone can input stats and get a prediction in real time. Simple idea, properly executed.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    image: "/algorithm-visualization.png",
    github: "https://github.com/eddie-kay0462",
    demo: null,
    period: "June 2024",
  },
  {
    number: "04",
    title: "Campus Marketplace",
    subtitle: "Google Hackathon Finalist · UK",
    description:
      "A marketplace for campus sole trades — students advertising their skills (tutoring, design, laundry, food, whatever) to other students. Built in a hackathon setting and made it to the finals of the Google Developer Student Solutions Hackathon in the UK.",
    tags: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    image: "/placeholder.jpg",
    github: "https://github.com/eddie-kay0462/hvp",
    demo: null,
    period: "April 2025",
  },
]

export default function ProjectsSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
        <div className="mt-3 h-px w-12 bg-amber-400" />
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-t border-border group"
          >
            {/* Left — info */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-muted-foreground/50 font-mono">{project.number}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight">{project.title}</h3>
                    <p className="text-sm text-amber-500 font-medium mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm max-w-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-semibold text-foreground hover:text-amber-500 transition-colors"
                  >
                  </Link>
                )}
                <span className="ml-auto text-xs text-muted-foreground/50">{project.period}</span>
              </div>
            </div>

            {/* Right — image */}
            <div className="overflow-hidden rounded-sm border border-border bg-muted/30">
              <div className="relative h-56 lg:h-full min-h-[200px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border pt-8">
          <Link
            href="https://github.com/eddie-kay0462"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            See everything on GitHub <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
