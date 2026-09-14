import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"

export function Skills() {
  const categories = [
    { title: "Languages", items: portfolio.skills.languages },
    { title: "Frontend", items: portfolio.skills.frontend },
    { title: "Backend", items: portfolio.skills.backend },
    { title: "Database", items: portfolio.skills.database },
    { title: "AI & ML", items: portfolio.skills.ai },
    { title: "IoT & Computer Vision", items: portfolio.skills.hardware },
    { title: "Mobile", items: portfolio.skills.mobile },
    { title: "Tools & Cloud", items: portfolio.skills.tools },
    { title: "Frameworks & Stack", items: portfolio.skills.frameworks },
  ].filter(c => c.items && c.items.length > 0)

  if (categories.length === 0) return null;

  return (
    <Section id="skills" className="border-t border-outline-variant py-24 bg-surface-container-lowest">
      <div className="flex flex-col gap-4 mb-16 md:mb-20">
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Skills & Tools</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-col gap-5 p-6 rounded-2xl bg-surface border border-outline-variant/50 shadow-sm hover:border-outline transition-colors group">
            <h3 className="font-geist text-xl font-semibold text-on-surface flex items-center justify-between">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map(item => (
                <span key={item} className="px-3 py-1.5 text-sm rounded-lg bg-surface-container-high/50 text-on-surface-variant font-mono group-hover:bg-surface-container group-hover:text-on-surface transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
