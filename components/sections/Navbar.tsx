"use client"

import * as React from "react"
import { portfolio } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay so animation can close cleanly
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-outline-variant bg-background/90 backdrop-blur-md shadow-sm"
            : "border-outline-variant/50 bg-background/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="font-geist text-lg font-semibold hover:text-primary transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {portfolio.name}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-primary rounded-t-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:inline-flex rounded-full font-medium" asChild>
              <a href="/Shaijad-Shaikh-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 z-[70] h-full w-72 max-w-[85vw] bg-surface-container-low border-l border-outline-variant flex flex-col md:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between p-5 border-b border-outline-variant">
                <span className="font-geist font-semibold text-on-surface">{portfolio.name}</span>
                <button
                  className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeSection === link.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="p-4 border-t border-outline-variant">
                <Button className="w-full rounded-full" asChild>
                  <a href="/Shaijad-Shaikh-Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
