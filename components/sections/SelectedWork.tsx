"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export function SelectedWork() {
  const [expandedProject, setExpandedProject] = React.useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <Section id="work" className="bg-surface-container-low border-y border-outline-variant py-24 md:py-32">
      <div className="flex flex-col gap-4 mb-16 md:mb-20">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Selected Work</h2>
        <p className="text-on-surface-variant font-mono text-lg max-w-2xl">
          A selection of recent projects and technical case studies.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-32">
        {portfolio.projects.map((project, index) => {
          const isExpanded = expandedProject === project.id;
          
          return (
            <div key={project.id} className="group flex flex-col gap-8 md:gap-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Image Section - Takes 7 columns on desktop */}
                <div 
                  className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:col-span-7 bg-surface-container-high border border-outline-variant/50 shadow-sm cursor-pointer ${index % 2 !== 0 ? 'md:order-last' : ''}`}
                  onClick={() => toggleProject(project.id)}
                >
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                  ) : (
                    <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" />
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
                </div>
                
                {/* Content Section - Takes 5 columns on desktop */}
                <div className="flex flex-col gap-6 md:col-span-5 py-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono font-medium">
                        {project.period}
                      </span>
                      {project.role && (
                        <span className="text-sm font-mono text-on-surface-variant">
                          {project.role}
                        </span>
                      )}
                    </div>
                    <h3 className="font-geist text-3xl md:text-4xl font-bold text-on-surface mt-2 group-hover:text-primary transition-colors duration-300 cursor-pointer" onClick={() => toggleProject(project.id)}>
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-on-surface text-lg font-medium mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-surface-container text-on-surface font-mono font-medium border border-outline-variant/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-6 pt-6 border-t border-outline-variant/50">
                    <button 
                      onClick={() => toggleProject(project.id)}
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-fixed transition-colors"
                    >
                      {isExpanded ? "Close Details" : "View Case Study"} 
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-on-surface-variant transition-colors">
                        Live Demo <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-on-surface-variant transition-colors">
                        Source <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Gallery & Details */}
              {isExpanded && (
                <div className="flex flex-col gap-12 mt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-8 md:p-12 rounded-3xl border border-outline-variant/50 shadow-sm">
                    <div>
                      <h4 className="font-geist text-xl font-bold text-on-surface mb-4">Overview</h4>
                      <p className="text-on-surface-variant text-base leading-relaxed">{project.caseStudy?.overview}</p>
                    </div>
                    <div>
                      <h4 className="font-geist text-xl font-bold text-on-surface mb-4">Key Responsibilities</h4>
                      <ul className="flex flex-col gap-2">
                        {project.caseStudy?.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-on-surface-variant text-base leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {project.gallery && project.gallery.length > 0 && (
                    <div className="flex flex-col gap-6">
                      <h4 className="font-geist text-2xl font-bold text-on-surface px-2">Project Gallery</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.map((img, i) => (
                          <div key={i} className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/50 shadow-sm group/img">
                            <Image 
                              src={img} 
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  )
}
