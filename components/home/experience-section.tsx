"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

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
            <ExperienceCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative ${index % 2 !== 0 ? "lg:translate-y-24" : ""}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative border border-white/10 bg-white/5 p-12 backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        <div style={{ transform: "translateZ(50px)" }}>
          <span className="block font-mono text-sm tracking-widest text-white/50 mb-8">{step.id}</span>
          <h3 className="mb-4 text-3xl font-serif font-light">{step.title}</h3>
          <p className="text-white/70 font-light leading-relaxed">{step.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
