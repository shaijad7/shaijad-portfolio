"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const CATEGORIES = ["All", "Android & Mobile", "Web Development", "AI & Computer Vision", "Backend & Systems"] as const
type Category = typeof CATEGORIES[number]

function getCategoryColor(cat: string) {
  switch (cat) {
    case "Android & Mobile": return "text-teal-400 bg-teal-500/10 border-teal-500/20"
    case "AI & Computer Vision": return "text-pink-400 bg-pink-500/10 border-pink-500/20"
    case "Backend & Systems": return "text-purple-400 bg-purple-500/10 border-purple-500/20"
    case "Web Development": return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    default: return "text-on-surface-variant bg-surface-container border-outline-variant/30"
  }
}

export function SelectedWork() {
  const [expandedProject, setExpandedProject] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<Category>("All");

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return portfolio.projects;
    return portfolio.projects.filter(p => (p as { category?: string }).category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="work" className="bg-surface-container-low border-y border-outline-variant py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-3">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Featured Projects</h2>
        <p className="text-on-surface-variant font-mono text-base sm:text-lg max-w-2xl">
          A few projects I&apos;ve built while learning and working with different technologies.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedProject(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-mono font-medium border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary/10 text-primary border-primary/30"
                : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:border-primary/20 hover:text-on-surface"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-16 md:gap-28"
        >
          {filteredProjects.length === 0 && (
            <p className="text-on-surface-variant font-mono text-center py-12">
              No projects in this category yet.
            </p>
          )}

          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const projectCat = (project as { category?: string }).category;

            return (
              <div key={project.id} className="group flex flex-col gap-8 md:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                  {/* Image Section */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-2xl md:col-span-7 bg-surface-container-high border border-outline-variant/50 shadow-sm cursor-pointer transition-all duration-500 group-hover:shadow-lg group-hover:border-outline-variant ${
                      index % 2 !== 0 ? "md:order-last" : ""
                    }`}
                    onClick={() => toggleProject(project.id)}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 58vw"
                        className="object-contain p-2 sm:p-3 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                      />
                    ) : (
                      <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(128,128,128,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                    )}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />

                    {/* Category badge on image */}
                    {projectCat && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${getCategoryColor(projectCat)}`}>
                          {projectCat}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-5 md:col-span-5 py-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-mono font-medium">
                          {project.period}
                        </span>
                        {project.role && (
                          <span className="text-sm font-mono text-on-surface-variant">
                            {project.role}
                          </span>
                        )}
                      </div>
                      <h3
                        className="font-geist text-3xl md:text-4xl font-bold text-on-surface mt-2 group-hover:text-primary transition-colors duration-300 cursor-pointer"
                        onClick={() => toggleProject(project.id)}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-on-surface text-base font-medium mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-lg bg-surface-container text-on-surface font-mono font-medium border border-outline-variant/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 mt-2 pt-5 border-t border-outline-variant/50">
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-fixed transition-colors"
                      >
                        {isExpanded ? "Close Details" : "View Details"}
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-on-surface-variant transition-colors"
                        >
                          Live Demo <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-bold text-on-surface hover:text-on-surface-variant transition-colors"
                        >
                          Source <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-10 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-8 md:p-10 rounded-3xl border border-outline-variant/50 shadow-sm">
                          <div>
                            <h4 className="font-geist text-xl font-bold text-on-surface mb-4">Overview</h4>
                            <p className="text-on-surface-variant text-base leading-relaxed">
                              {project.caseStudy?.overview}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-geist text-xl font-bold text-on-surface mb-4">Key Contributions</h4>
                            <ul className="flex flex-col gap-2.5">
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
                                <div
                                  key={i}
                                  className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/50 shadow-sm group/img"
                                >
                                  <Image
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover/img:scale-105"
                                  />
                                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
