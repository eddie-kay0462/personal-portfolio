"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Brain, Users, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
        <div className="mt-4 h-1 w-20 bg-slate-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">My Journey</h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              I'm a passionate Computer Science student currently pursuing my degree at [Your University]. My academic
              journey has been focused on developing a strong foundation in software engineering principles, algorithms,
              and artificial intelligence.
            </p>
            <p>
              Throughout my studies, I've developed a particular interest in machine learning and its applications in
              solving real-world problems. I enjoy the challenge of working with complex datasets and building models
              that can extract meaningful insights.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or
              exploring the latest developments in technology through online courses and technical blogs.
            </p>
          </div>
          <div>
            <Button className="mt-4" variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Brain className="h-10 w-10 text-slate-500 mb-4" />
                <h4 className="text-lg font-medium mb-2">Problem Solving</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I approach complex problems with analytical thinking and creative solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-slate-500 mb-4" />
                <h4 className="text-lg font-medium mb-2">Teamwork</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I thrive in collaborative environments and enjoy working with diverse teams.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-slate-500 mb-4" />
                <h4 className="text-lg font-medium mb-2">Time Management</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I efficiently prioritize tasks and meet deadlines while maintaining high-quality work.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2 text-slate-900 dark:text-white">Career Aspirations</h4>
            <p className="text-slate-600 dark:text-slate-400">
              My goal is to become a skilled software engineer specializing in AI applications, contributing to
              innovative projects that make a positive impact on society. I'm particularly interested in [specific area
              of interest] and hope to work with forward-thinking companies that value innovation and continuous
              learning.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
