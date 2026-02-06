"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
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
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={sectionRef} className="relative py-40 bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 80%, rgba(255, 153, 51, 0.02) 0%, transparent 50%)",
          }}
        />
      </motion.div>

      <div className="w-full max-w-[80%] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.span
            className="block font-mono text-sm tracking-widest text-jade-gold/60 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            HOW WE WORK
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              The{" "}
            </motion.span>
            <motion.span
              className="inline-block italic text-white/50"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Process
            </motion.span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-[1px] bg-gradient-to-r from-jade-gold/50 to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "150px" } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Grid layout - staggered */}
        <div className="grid gap-10 md:gap-24 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={index % 2 !== 0 ? "lg:mt-40" : ""}
            >
              <TiltCard
                title={step.title}
                description={step.description}
                number={step.id}
                index={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                enableTilt={true}
                className="h-[200px]"
                innerClassName="p-6 md:p-8"
                whileHover={{
                  borderColor: "rgba(212, 175, 55, 0.3)",
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
