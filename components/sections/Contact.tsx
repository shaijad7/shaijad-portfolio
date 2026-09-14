import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" className="py-20 md:py-24 bg-surface text-center items-center justify-center border-t border-outline-variant relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-30">
        <div className="w-[600px] h-[600px] rounded-full blur-[100px] bg-primary/10" />
      </div>

      <div className="flex flex-col items-center gap-6 max-w-3xl relative z-10">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface text-balance leading-tight">
          {portfolio.contact?.heading || "Ready to build something together?"}
        </h2>
        <p className="text-on-surface-variant font-mono text-lg max-w-2xl">
          {portfolio.contact?.description || "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button size="lg" className="rounded-full px-8 py-6 text-base" asChild>
            <a href={`mailto:${portfolio.contact?.email || portfolio.socials.email}`}>
              Send an Email
            </a>
          </Button>
          {portfolio.socials.github && (
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base" asChild>
              <a href={portfolio.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
