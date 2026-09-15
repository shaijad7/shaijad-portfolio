"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Trophy, Award, Activity } from "lucide-react"

export function Achievements() {
  const hasAchievements = portfolio.achievements?.length > 0;
  const hasCertifications = portfolio.certifications?.length > 0;
  const hasActivities = portfolio.activities?.length > 0;

  if (!hasAchievements && !hasCertifications && !hasActivities) return null;

  return (
    <Section id="achievements" className="py-20 md:py-24 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Recognition & Activities</h2>
          <p className="text-on-surface-variant text-lg mt-1">Milestones, certifications, and activities beyond academics.</p>
        </div>
        <div className="hidden md:block text-right max-w-sm">
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Learning. Participating. Contributing.<br />
            Always moving forward.
          </p>
          <div className="h-px w-12 bg-outline-variant/50 ml-auto mt-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasAchievements && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container hover:border-amber-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-geist text-sm md:text-base uppercase tracking-widest font-semibold text-on-surface">Achievements</h3>
            </div>
            
            <ul className="flex flex-col gap-6">
              {portfolio.achievements.map((item: {title: string, description?: string, year?: string}, i: number) => (
                <li key={i} className="flex flex-col gap-2 pb-5 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <span className="text-on-surface font-medium text-base leading-tight">{item.title}</span>
                  {(item.description || item.year) && (
                    <div className="flex items-center gap-3">
                      {item.year && <span className="text-on-surface-variant font-mono text-xs px-2.5 py-1 rounded bg-surface border border-outline-variant/30">{item.year}</span>}
                      {item.description && <span className="text-on-surface-variant text-sm">{item.description}</span>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {hasCertifications && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-8 p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-geist text-sm md:text-base uppercase tracking-widest font-semibold text-on-surface">Certifications</h3>
            </div>

            <div className="flex flex-col gap-6">
              {portfolio.certifications.map((cert: {title: string, provider: string, year: string, skills?: string[]}, i: number) => (
                <div key={i} className="flex flex-col gap-2 pb-5 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <span className="text-on-surface font-medium text-base leading-tight">{cert.title}</span>
                  <span className="text-sm text-on-surface-variant">{cert.provider} • {cert.year}</span>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {cert.skills.map((skill: string) => (
                        <span key={skill} className="px-3 py-1.5 text-xs uppercase tracking-wider rounded border border-outline-variant/30 bg-surface text-on-surface-variant font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {hasActivities && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col gap-8 p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface-container hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-geist text-sm md:text-base uppercase tracking-widest font-semibold text-on-surface">Activities</h3>
            </div>

            <ul className="flex flex-col gap-6">
              {portfolio.activities.map((item: {title: string, description?: string}, i: number) => (
                <li key={i} className="flex flex-col gap-2 pb-5 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <span className="text-on-surface font-medium text-base leading-tight">{item.title}</span>
                  {item.description && <span className="text-on-surface-variant text-sm leading-relaxed">{item.description}</span>}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 md:mt-20 flex items-center justify-center gap-6 text-sm text-on-surface-variant text-center"
      >
        <div className="hidden sm:block h-px w-16 bg-outline-variant/30" />
        <p>Grateful for the opportunities, people, and experiences.</p>
        <div className="hidden sm:block h-px w-16 bg-outline-variant/30" />
      </motion.div>
    </Section>
  )
}
