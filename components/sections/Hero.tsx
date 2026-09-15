"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <Section className="pt-8 md:pt-12 lg:pt-16 pb-16 items-start relative overflow-hidden">
      {/* Subtle art-directed technical background element */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-end opacity-20 dark:opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border border-outline/20 translate-x-1/3 blur-3xl bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-4 md:gap-5">
        {portfolio.availability && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-outline/50 bg-surface/50 backdrop-blur-sm px-3 py-1.5 text-xs font-mono text-on-surface-variant w-fit shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            {portfolio.availability}
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-geist text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-bold tracking-tight text-on-surface text-balance leading-[1.1] md:leading-[1.05]"
        >
          I build <span className="text-cyan-400 italic font-light">web</span>, <span className="text-purple-400 font-mono font-medium tracking-tight">mobile</span>, and
          <br className="hidden md:block" />
          <span className="inline-block mt-1">
            <span className="text-amber-500 font-semibold tracking-normal">AI-powered</span> applications.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-[18px] text-on-surface-variant max-w-[650px] font-mono leading-relaxed mt-2"
        >
          {portfolio.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-4">
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
              <a href={portfolio.socials.resume} target="_blank" rel="noreferrer">Download Resume</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-on-surface-variant/70">
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
