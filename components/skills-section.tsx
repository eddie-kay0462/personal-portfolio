"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, Cpu, Users, MessageSquare, Brain, Lightbulb } from "lucide-react"

// Sample skills data - replace with your actual skills
const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 85 },
  { name: "Git", level: 90 },
  { name: "TensorFlow", level: 65 },
  { name: "C++", level: 75 },
  { name: "HTML/CSS", level: 85 },
]

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Problem Solving", level: 90 },
  { name: "Time Management", level: 85 },
  { name: "Leadership", level: 80 },
  { name: "Adaptability", level: 90 },
  { name: "Critical Thinking", level: 85 },
  { name: "Creativity", level: 80 },
]

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-10 w-10" />,
    skills: ["Python", "Java", "JavaScript", "C++", "TypeScript"],
  },
  {
    name: "Web Development",
    icon: <Globe className="h-10 w-10" />,
    skills: ["React", "HTML/CSS", "Node.js", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Databases",
    icon: <Database className="h-10 w-10" />,
    skills: ["SQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "DevOps & Tools",
    icon: <Server className="h-10 w-10" />,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Linux"],
  },
  {
    name: "AI & Machine Learning",
    icon: <Cpu className="h-10 w-10" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"],
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
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">My Skills</h2>
        <div className="mt-4 h-1 w-20 bg-slate-500 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I've developed a diverse set of technical and soft skills through academic projects, personal exploration, and
          collaborative work.
        </p>
      </motion.div>

      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="progress">Proficiency</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>

        {/* Technical Skills with Progress Bars */}
        <TabsContent value="progress">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-slate-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Skills by Categories */}
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="text-slate-500 mb-2">{category.icon}</div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-slate-500 mr-2"></div>
                          <span className="text-slate-600 dark:text-slate-400">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Soft Skills */}
        <TabsContent value="soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Interpersonal Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-slate-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Teamwork</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      I excel in collaborative environments, contributing effectively while respecting diverse
                      perspectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-slate-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Communication</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      I communicate complex technical concepts clearly to both technical and non-technical audiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Cognitive Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-slate-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Problem Solving</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      I approach complex problems methodically, breaking them down into manageable components.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-slate-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Creativity</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      I think outside the box to develop innovative solutions to technical challenges.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Progress bars for soft skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 mt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {softSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between items-center">
                      <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
