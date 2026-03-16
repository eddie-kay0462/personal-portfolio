import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="py-24">
        <AboutSection />
      </section>

      <section id="experience" className="py-24 bg-muted/30">
        <ExperienceSection />
      </section>

      <section id="projects" className="py-24">
        <ProjectsSection />
      </section>

      <section id="skills" className="py-24 bg-muted/30">
        <SkillsSection />
      </section>

      <section id="contact" className="py-24">
        <ContactSection />
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edward Ofosu Mensah
          </p>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/eddie-kay0462" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/edward-ofosu-mensah-1" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:edofosu2022@gmail.com">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
