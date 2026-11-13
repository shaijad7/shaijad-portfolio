"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <Section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-14 lg:pb-16 items-center relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-25 dark:opacity-15">
        <div className="w-[850px] h-[550px] rounded-full border border-outline/20 blur-3xl bg-gradient-to-b from-primary/15 via-teal-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-6">
        {/* Top badges: Availability & Android Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {portfolio.availability && (
            <div className="inline-flex items-center gap-2 rounded-full border border-outline/50 bg-surface/50 backdrop-blur-sm px-3.5 py-1.5 text-xs font-mono text-on-surface-variant shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              {portfolio.availability}
            </div>
          )}

          {portfolio.hero.focusLabel && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-500/10 border border-teal-500/20 shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-teal-400" strokeWidth={1.5} />
              <span className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase">
                {portfolio.hero.focusLabel}
              </span>
            </div>
          )}
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-geist text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-on-surface text-balance leading-[1.15] md:leading-[1.1] max-w-3xl"
        >
          I build <span className="text-cyan-400 italic font-light">web</span>, <span className="text-purple-400 font-mono font-medium tracking-tight">mobile</span>, and
          <br className="hidden sm:block" />
          <span className="inline-block mt-1">
            <span className="text-amber-500 font-semibold tracking-normal">AI-powered</span> applications.
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-[19px] text-on-surface-variant max-w-2xl font-mono leading-relaxed"
        >
          {portfolio.hero.description}
        </motion.p>

        {/* Call-to-action buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 sm:mt-3 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full gap-2 px-8 h-12 text-sm font-medium shadow-md shadow-primary/10" asChild>
              <a href="#work">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            {portfolio.socials.github && (
              <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-sm font-medium" asChild>
                <a href={portfolio.socials.github} target="_blank" rel="noreferrer">GitHub</a>
              </Button>
            )}
            <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-sm font-medium" asChild>
              <a href={portfolio.socials.resume} target="_blank" rel="noreferrer">Download Resume</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-on-surface-variant/70">
            {portfolio.socials.github && (
              <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-sm font-mono flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                Github
              </a>
            )}
            {portfolio.socials.email && (
              <a href={`mailto:${portfolio.socials.email}`} className="hover:text-primary transition-colors text-sm font-mono flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
