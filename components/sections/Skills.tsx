"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import {
  Smartphone, Code2, Server, Database,
  BrainCircuit, Globe, Wrench
} from "lucide-react"

const categories = [
  {
    id: "android",
    title: "Android Development",
    items: portfolio.skills.android,
    icon: Smartphone,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "group-hover:border-teal-500/40",
    glow: "shadow-teal-500/10",
    featured: true,
  },
  {
    id: "languages",
    title: "Programming Languages",
    items: portfolio.skills.languages,
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
    glow: "",
    featured: false,
  },
  {
    id: "backend",
    title: "Backend Development",
    items: portfolio.skills.backend,
    icon: Server,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/30",
    glow: "",
    featured: false,
  },
  {
    id: "database",
    title: "Databases",
    items: portfolio.skills.database,
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/30",
    glow: "",
    featured: false,
  },
  {
    id: "webdev",
    title: "Web Development",
    items: portfolio.skills.webdev,
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/30",
    glow: "",
    featured: false,
  },
  {
    id: "ai",
    title: "AI & Computer Vision",
    items: portfolio.skills.ai,
    icon: BrainCircuit,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/30",
    glow: "",
    featured: false,
  },
  {
    id: "tools",
    title: "Cloud, Tools & DevOps",
    items: portfolio.skills.tools,
    icon: Wrench,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/30",
    glow: "",
    featured: false,
  },
].filter((c) => c.items && c.items.length > 0)

export function Skills() {
  const [featured, ...rest] = categories

  return (
    <Section id="skills" className="py-12 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Skills</h2>
          <p className="text-on-surface-variant text-base sm:text-lg">Technologies and tools I work with</p>
        </div>
        <div className="hidden md:block text-right max-w-sm">
          <p className="text-on-surface-variant text-sm">
            Focused on Android and application development across mobile, web, and backend.
          </p>
          <div className="h-px w-12 bg-outline-variant/50 ml-auto mt-3" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Android Development — featured, full-width accent card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-teal-500/5 via-surface-container-low to-surface-container-low border border-teal-500/20 group ${featured.border} transition-all duration-300 hover:border-teal-500/40 relative overflow-hidden`}
          >
            {/* Subtle accent glow */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-teal-500/5 blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 md:w-56 shrink-0 relative z-10">
              <div className={`p-4 rounded-xl ${featured.bg} ${featured.color} transition-transform duration-300 group-hover:scale-110 ring-1 ring-teal-500/20`}>
                <featured.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-geist text-lg font-bold text-on-surface">{featured.title}</h3>
                <p className="text-xs text-teal-400/80 font-mono mt-0.5">Primary Focus</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
              {featured.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-on-surface font-mono font-medium px-4 py-2 bg-surface border border-teal-500/20 rounded-full hover:border-teal-500/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Remaining categories — responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`flex flex-col gap-5 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container transition-all duration-300 group ${category.border}`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${category.bg} ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                  <category.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-geist text-base font-semibold text-on-surface leading-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-on-surface font-mono font-medium px-3 py-1.5 bg-surface border border-outline-variant/50 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 flex items-center justify-center gap-4 text-sm text-on-surface-variant text-center"
      >
        <div className="hidden sm:block h-px w-12 bg-outline-variant/30" />
        <p>Continuously learning, building, and exploring new technologies.</p>
        <div className="hidden sm:block h-px w-12 bg-outline-variant/30" />
      </motion.div>
    </Section>
  )
}
