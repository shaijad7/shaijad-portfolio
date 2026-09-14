import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <Section className="py-16 md:py-20 items-start justify-center min-h-[50vh] relative overflow-hidden">
      {/* Subtle art-directed technical background element */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-end opacity-20 dark:opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border border-outline/20 translate-x-1/3 blur-3xl bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-8">
        {portfolio.availability && (
          <div className="inline-flex items-center gap-2 rounded-full border border-outline/50 bg-surface/50 backdrop-blur-sm px-3 py-1.5 text-xs font-mono text-on-surface-variant w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            {portfolio.availability}
          </div>
        )}
        
        <h1 className="font-geist text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-on-surface text-balance leading-[1.1] md:leading-[1.05]">
          {portfolio.hero.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-mono leading-relaxed">
          {portfolio.hero.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button size="lg" className="rounded-full gap-2 px-8" asChild>
            <a href="#work">
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          {portfolio.socials.github && (
            <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
              <a href={portfolio.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          )}
          <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
            <a href="/Shaijad-Shaikh-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
