"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

const steps = [
  {
    id: "01",
    title: "The Vision",
    description: "We begin in the abstract. A conversation to uncover the essence of your celebration.",
  },
  {
    id: "02",
    title: "The Blueprint",
    description: "Concepts solidify into design. Mood boards, sketches, and material selection.",
  },
  {
    id: "03",
    title: "The Refinement",
    description: "Every detail is scrutinized. We iterate until perfection is achieved.",
  },
  {
    id: "04",
    title: "The Realization",
    description: "Execution day. The vision manifests into reality, immersive and flawless.",
  },
]

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tighter">
            The <span className="italic text-white/50">Process</span>
          </h2>
        </motion.div>

        <div className="grid gap-24 lg:grid-cols-2">
          {steps.map((step, index) => (
            <TiltCard
              key={step.id}
              title={step.title}
              description={step.description}
              number={step.id}
              index={index}
              className={index % 2 !== 0 ? "lg:translate-y-24" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
