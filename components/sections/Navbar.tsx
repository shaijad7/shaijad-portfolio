import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
          <span className="font-geist text-lg font-semibold">{portfolio.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          <a href="#work" className="hover:text-on-surface transition-colors">Work</a>
          <a href="#about" className="hover:text-on-surface transition-colors">About</a>
          <a href="#experience" className="hover:text-on-surface transition-colors">Experience</a>
          <a href="#contact" className="hover:text-on-surface transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-full font-medium" asChild>
            <a href="/Shaijad-Shaikh-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
