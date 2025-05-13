"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

// Sample testimonials - replace with your actual testimonials
const testimonials = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    position: "Professor of Computer Science",
    organization: "University Name",
    image: "/placeholder.svg?height=100&width=100&query=female professor portrait",
    quote:
      "One of the most dedicated students I've had the pleasure of teaching. Their project on machine learning algorithms demonstrated exceptional technical skills and innovative thinking.",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Senior Software Engineer",
    organization: "Tech Company Inc.",
    image: "/placeholder.svg?height=100&width=100&query=male software engineer portrait",
    quote:
      "During their internship, they quickly adapted to our development workflow and made significant contributions to our project. Their problem-solving skills and attention to detail were impressive.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Project Lead",
    organization: "Student Hackathon",
    image: "/placeholder.svg?height=100&width=100&query=female project manager portrait",
    quote:
      "Led their team to victory in our annual hackathon by developing an innovative solution to a complex problem. Their leadership and technical expertise were key to the team's success.",
  },
]

export default function TestimonialsSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Testimonials</h2>
        <div className="mt-4 h-1 w-20 bg-slate-500 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          What professors, mentors, and colleagues have to say about my work and collaboration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 text-slate-400">
                  <Quote className="h-8 w-8" />
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.position}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
