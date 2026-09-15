"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Mail, Code2, MapPin, FileText, ArrowUpRight } from "lucide-react"

export function Contact() {
  const contactItems = [
    {
      id: "email",
      label: "Email",
      value: portfolio.socials.email,
      href: `mailto:${portfolio.socials.email}`,
      icon: Mail,
      isExternal: false
    },
    {
      id: "github",
      label: "GitHub",
      value: portfolio.socials.github.replace("https://", ""),
      href: portfolio.socials.github,
      icon: Code2,
      isExternal: true
    },
    {
      id: "location",
      label: "Location",
      value: portfolio.location,
      href: null,
      icon: MapPin,
      isExternal: false
    },
    {
      id: "resume",
      label: "Resume",
      value: "Shaijad-Shaikh-Resume.pdf",
      href: portfolio.socials.resume,
      icon: FileText,
      isExternal: true
    }
  ];

  return (
    <Section id="contact" className="py-20 md:py-24 relative border-t border-outline-variant/50">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <p className="text-primary font-mono text-sm tracking-widest uppercase">GET IN TOUCH</p>
        <h2 className="font-geist text-4xl md:text-5xl font-bold text-on-surface">Have a project in mind? Let&apos;s talk.</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mt-2 leading-relaxed">
          I&apos;m open to freelance opportunities, internships, and interesting software projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {contactItems.map((item, index) => {
            const Content = (
              <>
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs font-semibold text-on-surface uppercase tracking-wider">{item.label}</span>
                    <span className="text-sm font-mono text-on-surface-variant truncate max-w-[200px] sm:max-w-xs">{item.value}</span>
                  </div>
                </div>
                {item.href && (
                  <div className="p-2 rounded-full border border-outline-variant/30 bg-surface opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-on-surface-variant" />
                  </div>
                )}
              </>
            );

            const cardClasses = "flex items-center justify-between p-5 md:p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:bg-surface hover:border-blue-500/30 transition-all duration-300 group";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.href ? (
                  <a 
                    href={item.href} 
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={cardClasses}
                  >
                    {Content}
                  </a>
                ) : (
                  <div className={cardClasses}>
                    {Content}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href={`mailto:${portfolio.socials.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
