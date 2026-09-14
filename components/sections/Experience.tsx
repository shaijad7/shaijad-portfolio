import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"

export function Experience() {
  return (
    <Section id="experience" className="py-16 md:py-20">
      <div className="flex flex-col gap-4 mb-10 md:mb-12">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Experience</h2>
      </div>

      <div className="flex flex-col gap-10 md:gap-12">
        {portfolio.experience.map((exp: {company: string, location: string, role: string, period: string, description: string, technologies: string[]}) => (
          <div key={exp.company} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
            <div className="md:w-1/4 shrink-0 mt-1">
              <p className="font-mono text-sm text-on-surface-variant font-medium">{exp.period}</p>
            </div>
            <div className="md:w-3/4 flex flex-col gap-3">
              <div className="flex flex-col">
                <h3 className="font-geist text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{exp.role}</h3>
                <p className="text-on-surface-variant text-lg font-medium">{exp.company} <span className="mx-2 text-outline-variant">•</span> <span className="font-mono text-sm">{exp.location}</span></p>
              </div>
              
              <p className="text-on-surface-variant text-base leading-relaxed max-w-3xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech: string) => (
                  <span key={tech} className="text-xs text-on-surface font-mono font-medium px-2.5 py-1 bg-surface-container-high/50 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
