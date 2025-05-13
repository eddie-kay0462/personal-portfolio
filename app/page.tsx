import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveDown, Github, Linkedin, Mail } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import TestimonialsSection from "@/components/testimonials-section"

// Preload the hero image
export const metadata = {
  other: {
    "image-preload": [{ href: "/placeholder.svg?key=3kbx4", as: "image" }],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <Button variant="ghost" size="icon">
              <MoveDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
        <SkillsSection />
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <BlogSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-slate-800">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-slate-800">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-slate-800">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
