"use client"

import { Card } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We meet to discuss your vision, event details, cultural preferences, and budget. This complimentary session helps us understand your unique needs.",
  },
  {
    number: "02",
    title: "Design Proposal",
    description:
      "Within 3-5 days, we present a detailed proposal with mood boards, color palettes, and itemized pricing tailored to your event.",
  },
  {
    number: "03",
    title: "Refinement & Planning",
    description:
      "We refine the design based on your feedback and finalize all details. A timeline and logistics plan ensure smooth execution.",
  },
  {
    number: "04",
    title: "Setup & Execution",
    description:
      "Our team arrives early on event day to transform your venue. We handle everything from setup to breakdown, so you can focus on celebrating.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-muted-foreground"
          >
            Our streamlined process ensures a stress-free experience from concept to celebration
          </motion.p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <Card className="relative border-border bg-card p-8 transition-shadow hover:shadow-xl">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-4 text-5xl font-light text-primary/30"
                >
                  {step.number}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="mb-3 text-2xl font-semibold text-foreground"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  className="font-mono text-sm leading-relaxed text-muted-foreground"
                >
                  {step.description}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
