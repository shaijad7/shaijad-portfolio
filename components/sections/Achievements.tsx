import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"

export function Achievements() {
  const hasAchievements = portfolio.achievements?.length > 0;
  const hasCertifications = portfolio.certifications?.length > 0;
  const hasActivities = portfolio.activities?.length > 0;

  if (!hasAchievements && !hasCertifications && !hasActivities) return null;

  return (
    <Section id="achievements" className="border-t border-outline-variant py-24 bg-surface-container-low">
      <div className="flex flex-col gap-4 mb-16 md:mb-20">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Recognition & Activities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {hasAchievements && (
          <div className="flex flex-col gap-8">
            <h3 className="font-geist text-sm uppercase tracking-widest font-semibold text-primary">Achievements</h3>
            <ul className="flex flex-col gap-6">
              {portfolio.achievements.map((item: {title: string, description?: string, year?: string}, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface font-medium">{item.title}</span>
                    {item.description && <span className="text-on-surface-variant font-mono text-sm">{item.description}</span>}
                    {item.year && <span className="text-on-surface-variant font-mono text-xs">{item.year}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasCertifications && (
          <div className="flex flex-col gap-8">
            <h3 className="font-geist text-sm uppercase tracking-widest font-semibold text-primary">Certifications</h3>
            <div className="flex flex-col gap-6">
              {portfolio.certifications.map((cert: {title: string, provider: string, year: string, skills?: string[]}, i: number) => (
                <div key={i} className="border-l-2 border-outline-variant pl-4 flex flex-col gap-1">
                  <span className="text-on-surface font-medium">{cert.title}</span>
                  <span className="text-sm font-mono text-on-surface-variant">{cert.provider} • {cert.year}</span>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill: string) => (
                        <span key={skill} className="px-2 py-1 text-xs rounded-md bg-surface-container text-on-surface font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {hasActivities && (
          <div className="flex flex-col gap-8">
            <h3 className="font-geist text-sm uppercase tracking-widest font-semibold text-primary">Activities</h3>
            <ul className="flex flex-col gap-6">
              {portfolio.activities.map((item: {title: string, description?: string}, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-tertiary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface font-medium">{item.title}</span>
                    {item.description && <span className="text-on-surface-variant font-mono text-sm">{item.description}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
