"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-slate-500">Your Name</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-400">
              Aspiring Software Engineer | Passionate about AI & Machine Learning
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            I'm a Computer Science student with a focus on artificial intelligence and software development. I build
            innovative solutions to complex problems using cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#projects">
              <Button className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto lg:ml-auto"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-xl">
            <Image
              src="/profile-placeholder.png"
              alt="Your Professional Portrait - Replace with your photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-slate-100 dark:bg-slate-800 p-4 rounded-full shadow-lg">
            <div className="text-3xl font-bold">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Coding</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
