import * as React from "react"
import { portfolio } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-dim py-8">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-geist font-medium text-on-surface">{portfolio.name}</span>
          <span className="font-mono text-xs text-on-surface-variant">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-mono text-on-surface-variant">
          {portfolio.socials.github && (
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="hover:text-on-surface transition-colors">
              GitHub
            </a>
          )}
          {(portfolio.contact?.email || portfolio.socials?.email) && (
            <a href={`mailto:${portfolio.contact?.email || portfolio.socials.email}`} className="hover:text-on-surface transition-colors">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
