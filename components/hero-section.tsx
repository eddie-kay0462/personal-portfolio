"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between">
      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 flex items-center pt-20 pb-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div>
              <p className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-5">
                Ghana 🇬🇭 · Open to opportunities
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] text-white">
                Edward<br />
                Ofosu<br />
                Mensah
              </h1>
            </div>

            <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
              CS student at Ashesi University. I build full-stack products,
              train ML models, and lead developer communities.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="bg-white text-zinc-950 hover:bg-zinc-100 font-semibold rounded-sm px-6 group"
                >
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-zinc-300 hover:text-white hover:bg-white/10 rounded-sm px-6"
                >
                  Get in touch
                </Button>
              </Link>
            </div>

            {/* Two key facts — no badge overload */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">University</p>
                <p className="text-white text-sm font-medium">Ashesi University · Class of 2026</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">GPA</p>
                <p className="text-white text-sm font-medium">3.60 / 4.00 · Dean's List</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Major</p>
                <p className="text-white text-sm font-medium">Computer Science</p>
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Amber accent line */}
              <div className="absolute -top-4 -left-4 w-24 h-1 bg-amber-400" />
              <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-amber-400" />

              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/computer-science-student-portrait.jpg"
                  alt="Edward Ofosu Mensah"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <p>MasterCard Foundation Scholar · Google Developer Student Club Lead</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/edward-ofosu-mensah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/eddie-kay0462"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="mailto:eddiemens0462@gmail.com"
              className="hover:text-white transition-colors"
            >
              eddiemens0462@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
