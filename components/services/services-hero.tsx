"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TextReveal, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal"

export function ServicesHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const patternOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.05])
  const patternScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      {/* Animated Kolam Pattern */}
      <motion.div
        className="kolam-pattern absolute inset-0"
        style={{ opacity: patternOpacity, scale: patternScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Subtle gold gradient accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          background: "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="container relative mx-auto px-4 text-center md:px-6">
        <StaggerContainer delay={0.2} staggerDelay={0.1}>
          {/* Label */}
          <StaggerItem>
            <motion.span
              className="inline-block font-mono text-sm tracking-widest text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              OUR SERVICES
            </motion.span>
          </StaggerItem>

          {/* Main Title */}
          <StaggerItem>
            <h1 className="mt-4 text-balance text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Tailored Decor for
              </motion.span>
              <motion.span
                className="block font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Every{" "}
                <span className="relative inline-block">
                  Celebration
                  <motion.span
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-jade-gold to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </motion.span>
            </h1>
          </StaggerItem>

          {/* Description */}
          <StaggerItem>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-pretty font-mono text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <TextReveal
                as="span"
                type="word"
                delay={1}
                staggerDelay={0.02}
                duration={0.4}
                direction="fade"
              >
                From intimate gatherings to grand celebrations, we offer comprehensive decor packages designed to reflect your unique style and cultural heritage.
              </TextReveal>
            </motion.p>
          </StaggerItem>
        </StaggerContainer>

        {/* Floating decorative diamonds */}
        {[
          { top: "20%", left: "12%", size: "w-2.5 h-2.5", color: "bg-jade-gold/30", delay: 1.4 },
          { top: "15%", right: "10%", size: "w-2 h-2", color: "bg-jade-saffron/20", delay: 1.6 },
          { top: "40%", left: "8%", size: "w-1.5 h-1.5", color: "bg-jade-gold/25", delay: 1.8 },
          { bottom: "30%", right: "15%", size: "w-3 h-3", color: "bg-jade-gold/20", delay: 2.0 },
          { bottom: "15%", left: "20%", size: "w-2 h-2", color: "bg-jade-saffron/15", delay: 2.2 },
          { top: "60%", right: "5%", size: "w-2 h-2", color: "bg-jade-gold/15", delay: 2.4 },
          { top: "10%", left: "30%", size: "w-1.5 h-1.5", color: "bg-jade-gold/20", delay: 2.6 },
          { bottom: "40%", left: "5%", size: "w-2.5 h-2.5", color: "bg-jade-saffron/10", delay: 2.8 },
          { top: "75%", right: "20%", size: "w-1.5 h-1.5", color: "bg-jade-gold/25", delay: 3.0 },
        ].map((diamond, i) => (
          <motion.div
            key={i}
            className={`absolute rotate-45 pointer-events-none ${diamond.size} ${diamond.color}`}
            style={{ 
              top: diamond.top, 
              left: diamond.left, 
              right: diamond.right, 
              bottom: diamond.bottom 
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 0.6, 
              delay: diamond.delay, 
              ease: [0.16, 1, 0.3, 1],
              y: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: diamond.delay + 0.6
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}
