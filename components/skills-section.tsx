"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "PHP"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML / CSS"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Flask", "Node.js", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["SQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    category: "ML & Data",
    skills: ["Scikit-learn", "Pandas", "Streamlit", "TensorFlow"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Linux"],
  },
]

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
        <div className="mt-3 h-px w-12 bg-amber-400" />
      </motion.div>

      <div className="space-y-0">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-6 py-6 border-t border-border items-baseline"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{group.category}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm text-foreground font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </div>
  )
}
