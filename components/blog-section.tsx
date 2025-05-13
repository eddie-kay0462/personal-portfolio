"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog posts - replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt: "An introduction to machine learning concepts and how to start your journey in this exciting field.",
    image: "/placeholder.svg?key=lt9uf",
    date: "May 10, 2023",
    readTime: "8 min read",
    tags: ["Machine Learning", "AI", "Beginners"],
    url: "#",
  },
  {
    id: 2,
    title: "Building Responsive Web Applications with React",
    excerpt: "Learn how to create responsive and user-friendly web applications using React and modern CSS techniques.",
    image: "/placeholder.svg?height=300&width=600&query=react web development",
    date: "April 22, 2023",
    readTime: "6 min read",
    tags: ["React", "Web Development", "CSS"],
    url: "#",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Performance",
    excerpt: "Tips and techniques for improving the performance of your database queries in high-traffic applications.",
    image: "/placeholder.svg?height=300&width=600&query=database optimization",
    date: "March 15, 2023",
    readTime: "10 min read",
    tags: ["Databases", "Performance", "SQL"],
    url: "#",
  },
]

export default function BlogSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Blog & Articles</h2>
        <div className="mt-4 h-1 w-20 bg-slate-500 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I share my thoughts, tutorials, and insights on various topics in computer science and software development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-slate-500 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={post.url} className="w-full">
                  <Button variant="ghost" className="w-full justify-between group">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" size="lg">
          View All Articles
        </Button>
      </div>
    </div>
  )
}
