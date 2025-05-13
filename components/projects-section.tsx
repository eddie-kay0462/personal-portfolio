"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample project data - you would replace this with your actual projects
const projectsData = [
  {
    id: 1,
    title: "AI Image Recognition",
    description:
      "A machine learning project that uses convolutional neural networks to classify images with high accuracy.",
    image: "/placeholder.svg?key=fsm1e",
    tags: ["Python", "TensorFlow", "Computer Vision", "AI"],
    category: "AI",
    github: "https://github.com/yourusername/project1",
    demo: "https://demo-link.com/project1",
    role: "Lead Developer",
    challenges: "Implementing efficient data preprocessing and optimizing model performance.",
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description:
      "A web application that helps users track their expenses, set budgets, and visualize spending patterns.",
    image: "/placeholder.svg?key=x5qi0",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "Web Development",
    github: "https://github.com/yourusername/project2",
    demo: "https://demo-link.com/project2",
    role: "Full Stack Developer",
    challenges: "Ensuring data security and implementing real-time updates.",
  },
  {
    id: 3,
    title: "Sorting Algorithm Visualizer",
    description:
      "An interactive tool that visualizes various sorting algorithms to help understand their mechanics and efficiency.",
    image: "/algorithm-visualization.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    category: "Algorithms",
    github: "https://github.com/yourusername/project3",
    demo: "https://demo-link.com/project3",
    role: "Frontend Developer",
    challenges: "Creating smooth animations and optimizing performance for complex algorithms.",
  },
  {
    id: 4,
    title: "Smart Home IoT System",
    description:
      "A system that connects various smart home devices and provides a unified interface for control and automation.",
    image: "/placeholder.svg?key=de7fo",
    tags: ["Python", "Raspberry Pi", "MQTT", "IoT"],
    category: "IoT",
    github: "https://github.com/yourusername/project4",
    demo: null,
    role: "IoT Developer",
    challenges: "Ensuring reliable communication between different devices and implementing secure authentication.",
  },
]

// Categories for filtering
const categories = ["All", "AI", "Web Development", "Algorithms", "IoT"]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">My Projects</h2>
        <div className="mt-4 h-1 w-20 bg-slate-500 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and interests in various areas of computer
          science.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Role:</span> {project.role}
                  </p>
                  <p>
                    <span className="font-medium">Challenges:</span> {project.challenges}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                </Link>
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
