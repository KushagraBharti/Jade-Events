"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "The Vision",
    description:
      "We begin in the abstract. A conversation to uncover the essence of your celebration.",
  },
  {
    number: "02",
    title: "The Blueprint",
    description:
      "Concepts solidify into design. Mood boards, sketches, and material selection.",
  },
  {
    number: "03",
    title: "The Refinement",
    description:
      "Every detail is scrutinized. We iterate until perfection is achieved.",
  },
  {
    number: "04",
    title: "The Realization",
    description:
      "Execution day. The vision manifests into reality, immersive and flawless.",
  },
]

function ProcessCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  
  // Stagger pattern: right column cards are offset down
  const isRightColumn = index % 2 === 1

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border border-white/10 bg-white/[0.03] p-10 md:p-12 transition-all duration-300 hover:border-jade-gold/30 hover:bg-white/[0.06] h-[280px] md:h-[320px] flex flex-col ${isRightColumn ? 'md:mt-24' : ''}`}
    >
      {/* Step number */}
      <motion.span
        className="font-mono text-sm tracking-widest text-white/40 mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
      >
        {step.number}
      </motion.span>

      {/* Title */}
      <motion.h3
        className="text-2xl md:text-3xl font-serif font-light text-white mb-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-white/60 font-light leading-relaxed text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
      >
        {step.description}
      </motion.p>

      {/* Hover accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-jade-gold/40 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(255, 153, 51, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <motion.span
            className="block font-mono text-sm tracking-widest text-jade-gold/60 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            HOW WE WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="font-serif italic font-light text-white">The</span>
            <span className="font-serif font-extralight text-white/80 ml-2">Process</span>
          </motion.h2>
        </motion.div>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-3">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 rotate-45 bg-jade-saffron/30"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
