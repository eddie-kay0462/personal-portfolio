"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [inHero, setInHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setScrolled(window.scrollY > 20)
      setInHero(window.scrollY < heroHeight - 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHeroStyle = inHero && !isOpen

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isHeroStyle
          ? "bg-transparent"
          : scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-background",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="#hero"
            className={cn(
              "text-sm font-bold tracking-tight transition-colors",
              isHeroStyle ? "text-white" : "text-foreground",
            )}
          >
            Edward Mensah
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  isHeroStyle
                    ? "text-zinc-400 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={isHeroStyle ? "text-white hover:text-white hover:bg-white/10" : ""}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
