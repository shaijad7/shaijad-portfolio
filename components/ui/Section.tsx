import * as React from "react"
import { cn } from "@/lib/utils"
import * as motion from "framer-motion/client"
import { HTMLMotionProps } from "framer-motion"

const Section = React.forwardRef<
  HTMLElement,
  HTMLMotionProps<"section">
>(({ className, ...props }, ref) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    ref={ref as React.Ref<HTMLElement>}
    className={cn(
      "w-full px-6 py-12 md:px-12 md:py-16 lg:py-20 max-w-7xl mx-auto flex flex-col gap-8 md:gap-10 scroll-mt-20 md:scroll-mt-24",
      className
    )}
    {...props}
  />
))
Section.displayName = "Section"

export { Section }
