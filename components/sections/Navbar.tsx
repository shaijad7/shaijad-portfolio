"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // We only care about intersecting entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple sections are visible, use the one that takes up the most space or is highest
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { 
        rootMargin: "-100px 0px -60% 0px", 
        threshold: 0 
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2">
          <span className="font-geist text-lg font-semibold">{portfolio.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 relative py-1 ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-primary rounded-t-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              )}
            </a>
          ))}
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
