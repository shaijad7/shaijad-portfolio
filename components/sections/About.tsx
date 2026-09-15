import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import Image from "next/image"

export function About() {
  return (
    <Section id="about" className="border-t border-outline-variant py-20 md:py-24">
      <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-24 items-center md:items-start">
        <div className="md:w-3/5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-geist text-sm uppercase tracking-widest font-semibold text-primary">About</h2>
            {portfolio.about.heading && (
              <h3 className="font-geist text-3xl md:text-4xl font-semibold text-on-surface leading-tight">
                {portfolio.about.heading}
              </h3>
            )}
          </div>
          <div className="text-on-surface-variant font-mono space-y-6 text-base md:text-lg leading-relaxed">
            {portfolio.about.bio.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="md:w-2/5 w-full max-w-sm">
          <div className="relative aspect-[3/4] w-full mx-auto overflow-hidden rounded-2xl bg-surface-container-high transition-all duration-700 shadow-md ring-1 ring-outline/30 group">
            {portfolio.profile?.image ? (
              <Image 
                src={portfolio.profile.image} 
                alt={portfolio.profile.alt || portfolio.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  )
}
