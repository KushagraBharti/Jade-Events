"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"
import { Heart, Palette, Users, Sparkles, LucideIcon } from "lucide-react"
import { Reveal } from "@/components/ui/text-reveal"

const values = [
  {
    icon: Heart,
    title: "Cultural Authenticity",
    description:
      "We honor traditional South Asian aesthetics and rituals, ensuring every element is culturally meaningful and respectful.",
    accentColor: "var(--jade-deep-red)",
  },
  {
    icon: Palette,
    title: "Craftsmanship",
    description:
      "Every detail is thoughtfully designed and meticulously executed. We believe in quality over quantity, always.",
    accentColor: "var(--jade-gold)",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description:
      "As a small studio, we work directly with every client. Your vision becomes our mission, and your celebration becomes personal to us.",
    accentColor: "var(--jade-saffron)",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "While rooted in tradition, we embrace contemporary design principles to create spaces that feel fresh, elegant, and timeless.",
    accentColor: "var(--jade-magenta)",
  },
]

function GlowIcon({ icon: Icon, accentColor, index }: { icon: LucideIcon; accentColor: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="mb-6 inline-flex rounded-full p-4 w-fit relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 30px ${accentColor}40, 0 0 60px ${accentColor}20`,
      }}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
      }}
    >
      {/* Glow effect behind icon */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
        style={{
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
        }}
      />

      {/* Icon with rotation on reveal */}
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={isInView ? { rotate: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon className="h-6 w-6 text-white/80 relative z-10" />
      </motion.div>
    </motion.div>
  )
}

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 70%, rgba(199, 21, 133, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="font-mono text-sm tracking-widest text-jade-gold/60"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR VALUES
          </motion.span>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-white md:text-5xl overflow-hidden">
            <Reveal delay={0.3} direction="up">
              <span className="block">What Drives Us</span>
            </Reveal>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-6 h-[1px] bg-gradient-to-r from-transparent via-jade-gold/30 to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            return (
              <TiltCard
                key={index}
                title={value.title}
                description={value.description}
                index={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                enableTilt={false}
                whileHover={{
                  borderColor: "rgba(212, 175, 55, 0.4)",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05)",
                }}
              >
                <GlowIcon icon={value.icon} accentColor={value.accentColor} index={index} />
              </TiltCard>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rotate-45"
                style={{ backgroundColor: `${value.accentColor}50` }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
