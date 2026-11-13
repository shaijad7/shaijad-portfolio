"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, MapPin, Smartphone, Mail, Copy, Check, User } from "lucide-react"

export function About() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText("shaijadshaikh8380@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Section id="about" className="border-t border-outline-variant py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ==================================================== */}
        {/* LEFT COLUMN: Profile Presentation & Quick Profile    */}
        {/* ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-6 w-full"
        >
          {/* Portrait Image Card with Overlay */}
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface-container-high border border-outline-variant/30 shadow-xl group">
            {portfolio.profile?.image ? (
              <Image
                src={portfolio.profile.image}
                alt={portfolio.profile.alt || portfolio.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : null}

            {/* Subtle bottom shadow vignette behind overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

            {/* Glass Overlay Card at bottom of photo */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-geist font-bold text-on-surface text-lg leading-tight">
                  Shaijad Shaikh
                </span>
                <span className="text-xs font-mono text-teal-400 font-medium mt-0.5">
                  Android Developer
                </span>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            </div>
          </div>

          {/* Quick Profile Card */}
          <div className="rounded-3xl p-6 bg-surface-container-low border border-outline-variant/30 flex flex-col gap-5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <User className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase">
                QUICK PROFILE
              </h4>
            </div>

            <div className="flex flex-col gap-4 text-sm font-mono">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface border border-outline-variant/30 text-teal-400 mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-on-surface-variant/70 uppercase tracking-wider">Location</span>
                  <span className="text-on-surface font-medium text-sm">Nashik, Maharashtra, India</span>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface border border-outline-variant/30 text-teal-400 mt-0.5 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-on-surface-variant/70 uppercase tracking-wider">Role</span>
                  <span className="text-on-surface font-medium text-sm">Android Developer</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface border border-outline-variant/30 text-teal-400 mt-0.5 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-xs text-on-surface-variant/70 uppercase tracking-wider">Email</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href="mailto:shaijadshaikh8380@gmail.com"
                      className="text-on-surface hover:text-teal-400 transition-colors font-medium text-xs sm:text-sm truncate"
                    >
                      shaijadshaikh8380@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-1 rounded hover:bg-surface text-on-surface-variant hover:text-teal-400 transition-colors shrink-0"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================== */}
        {/* RIGHT COLUMN: About Description & Education Card     */}
        {/* ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-6 w-full"
        >
          {/* About Description Card */}
          <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-surface-container-low border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase">
                ABOUT ME
              </span>
              <h3 className="font-geist text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface leading-tight">
                {portfolio.about.heading}
              </h3>
            </div>

            <p className="text-on-surface-variant font-mono text-base sm:text-lg leading-relaxed">
              {portfolio.about.bio}
            </p>
          </div>

          {/* Education Card — Exact Replication of Reference */}
          <div className="rounded-2xl sm:rounded-[22px] p-6 sm:p-7 md:p-8 bg-[#0c0e12] border border-emerald-500/25 hover:border-emerald-500/40 transition-colors shadow-lg flex flex-col">
            {/* Header: bare green icon + bold white heading */}
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" strokeWidth={2} />
              <h4 className="font-geist text-lg sm:text-xl font-bold text-white tracking-tight">
                Education
              </h4>
            </div>

            {/* Thin horizontal divider */}
            <div className="h-px w-full bg-[#1e242b] my-4 sm:my-5" />

            {/* Timeline Entries */}
            <div className="flex flex-col">
              {[
                {
                  title: "B.E. Information Technology",
                  institution: "K.K. Wagh College of Engineering, Nashik",
                  duration: "2024 – 2027",
                  result: "CGPA: 8.0",
                  active: true,
                },
                {
                  title: "Diploma in Information Technology",
                  institution: "Government Polytechnic College, Ambad",
                  duration: "2021 – 2024",
                  result: "Percentage: 89.88%",
                  active: false,
                },
                {
                  title: "Secondary School Certificate (SSC)",
                  institution: "SCP Highschool, Jalna",
                  duration: "2020 – 2021",
                  result: "Percentage: 86.87%",
                  active: false,
                },
              ].map((item, index, arr) => (
                <div key={item.title} className="flex gap-3.5 sm:gap-4 group">
                  {/* Timeline marker and connecting line */}
                  <div className="flex flex-col items-center shrink-0">
                    {item.active ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4b5563] mt-1.5 shrink-0" />
                    )}
                    {index !== arr.length - 1 && (
                      <div className="w-px flex-1 bg-[#1f2937] my-1" />
                    )}
                  </div>

                  {/* Entry content */}
                  <div className={`flex-1 flex flex-col min-w-0 ${index !== arr.length - 1 ? "pb-6 sm:pb-7" : "pb-1"}`}>
                    {/* Row 1: Title and Date Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <h5 className="font-geist text-base sm:text-[17px] font-bold text-white tracking-tight">
                        {item.title}
                      </h5>
                      {item.active ? (
                        <span className="inline-flex items-center text-xs font-mono font-medium px-2.5 py-0.5 rounded-md border border-emerald-500/30 bg-[#0e1f18] text-emerald-400 shrink-0 w-fit">
                          {item.duration}
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs font-mono font-medium px-2.5 py-0.5 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 shrink-0 w-fit">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Row 2: Institution • Result */}
                    <p className="text-xs sm:text-[13px] md:text-sm font-sans text-zinc-400 flex flex-wrap items-center gap-1.5 mt-1 leading-relaxed">
                      <span>{item.institution}</span>
                      <span className="text-zinc-600 font-bold">•</span>
                      <span className="text-[#38BDF8] font-semibold">{item.result}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
