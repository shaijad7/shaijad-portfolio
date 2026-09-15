"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"

export function Experience() {
  return (
    <Section id="experience" className="border-b border-outline-variant/30 py-20 md:py-24">
      <div className="flex flex-col gap-4 mb-12 md:mb-16">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Experience</h2>
      </div>

      <div className="flex flex-col gap-12 md:gap-16 relative">
        {/* Vertical timeline line for desktop */}
        <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/30" />
        
        {portfolio.experience.map((exp: {company: string, location: string, role: string, period: string, description: string, technologies: string[]}, index: number) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row relative group"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/4 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-surface ring-4 ring-surface transition-colors duration-300 group-hover:bg-primary" />
            
            <div className="md:w-1/4 shrink-0 mb-4 md:mb-0 md:pr-12 md:text-right mt-1.5">
              <p className="font-mono text-sm text-primary font-medium">{exp.period}</p>
            </div>
            
            <div className="md:w-3/4 flex flex-col gap-4 md:pl-12">
              <div className="flex flex-col gap-1">
                <h3 className="font-geist text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{exp.role}</h3>
                <div className="flex items-center flex-wrap gap-2 text-on-surface-variant font-medium text-lg">
                  <span>{exp.company}</span>
                  <span className="text-outline-variant text-sm">•</span>
                  <span className="font-mono text-sm">{exp.location}</span>
                </div>
              </div>
              
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl">
                {exp.description}
              </p>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech: string) => (
                    <span key={tech} className="text-xs text-on-surface font-mono font-medium px-3 py-1.5 bg-surface-container border border-outline-variant/50 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
