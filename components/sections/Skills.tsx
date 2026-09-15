"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Code2, Monitor, Server, Database, BrainCircuit, Cpu, Smartphone, Wrench, Layers, ArrowRight } from "lucide-react"

export function Skills() {
  const mainCategories = [
    { 
      id: "languages",
      title: "Languages", 
      items: portfolio.skills.languages,
      icon: Code2,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/30"
    },
    { 
      id: "frontend",
      title: "Frontend", 
      items: portfolio.skills.frontend,
      icon: Monitor,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/30"
    },
    { 
      id: "backend",
      title: "Backend", 
      items: portfolio.skills.backend,
      icon: Server,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/30"
    },
    { 
      id: "database",
      title: "Database", 
      items: portfolio.skills.database,
      icon: Database,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/30"
    },
    { 
      id: "ai",
      title: "AI / Machine Learning", 
      items: portfolio.skills.ai,
      icon: BrainCircuit,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "group-hover:border-pink-500/30"
    },
    { 
      id: "hardware",
      title: "Hardware / Computer Vision", 
      items: portfolio.skills.hardware,
      icon: Cpu,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "group-hover:border-amber-500/30"
    },
    { 
      id: "mobile",
      title: "Mobile", 
      items: portfolio.skills.mobile,
      icon: Smartphone,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "group-hover:border-teal-500/30"
    },
    { 
      id: "tools",
      title: "Tools", 
      items: portfolio.skills.tools,
      icon: Wrench,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "group-hover:border-rose-500/30"
    },
  ].filter(c => c.items && c.items.length > 0)

  const frameworks = portfolio.skills.frameworks;

  return (
    <Section id="skills" className="py-20 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Skills</h2>
          <p className="text-on-surface-variant text-lg mt-2">Technologies and tools I work with</p>
        </div>
        <div className="hidden md:block text-right max-w-sm">
          <p className="text-on-surface-variant text-sm">
            A combination of software, hardware and emerging technologies to build real-world solutions.
          </p>
          <div className="h-px w-12 bg-outline-variant/50 ml-auto mt-4" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((category, index) => (
            <motion.div 
              key={category.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col gap-5 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container transition-all duration-300 group ${category.border}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${category.bg} ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-geist text-base md:text-lg font-semibold text-on-surface leading-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="p-2 rounded-full border border-outline-variant/30 bg-surface-container opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {category.items.map(item => (
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

        {/* Full width Frameworks card */}
        {frameworks && frameworks.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-surface-container-low to-surface-container border border-indigo-500/20 group hover:border-indigo-500/40 transition-all duration-300 overflow-hidden relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none" />
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
                <Layers className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-geist text-lg md:text-xl font-semibold text-on-surface">
                Frameworks / Stack
              </h3>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 flex-1 relative z-10">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {frameworks.map(item => (
                  <span 
                    key={item} 
                    className="text-xs md:text-sm text-on-surface font-mono font-medium px-4 py-2 bg-surface-container-high border border-outline-variant/50 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="p-2 rounded-full border border-outline-variant/30 bg-surface-container opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                <ArrowRight className="w-4 h-4 text-on-surface-variant" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 flex items-center justify-center gap-4 text-sm text-on-surface-variant text-center"
      >
        <div className="hidden sm:block h-px w-12 bg-outline-variant/30" />
        <p>Continuously learning, building, and exploring new technologies.</p>
        <div className="hidden sm:block h-px w-12 bg-outline-variant/30" />
      </motion.div>
    </Section>
  )
}
