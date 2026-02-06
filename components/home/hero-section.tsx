"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState, type MouseEvent, type ReactNode } from "react"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"

// Floating particle component
function FloatingParticle({ delay, duration, size, startX, startY }: {
  delay: number
  duration: number
  size: number
  startX: number
  startY: number
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        background: `radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.6, 0],
        scale: [0, 1, 1, 0.5],
        y: [0, -100, -200, -300],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}

// Generate random particles
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 10,
    size: 3,
    startX: Math.random() * 100,
    startY: 50 + Math.random() * 50,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}
    </div>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  // Spotlight Effect with gold tint
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center group"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Spotlight Background with gold tint */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.06),
              rgba(255, 255, 255, 0.08) 40%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Image (Revealed by Spotlight/Scroll) */}
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <div className="relative h-full w-full">
          <Image
            src="/images/jade-events/stock1.jpg"
            alt="Jade Events Decor"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </motion.div>

      {/* Subtle vignette with gold edges */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold leading-none tracking-tighter text-white drop-shadow-2xl">
              <motion.span
                className="block py-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                JADE
              </motion.span>
              <motion.span
                className="block italic font-light py-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                EVENTS
              </motion.span>
            </h1>

            {/* Animated underline */}
            <motion.div
              className="mx-auto mt-4 h-[1px] bg-gradient-to-r from-transparent via-jade-gold/50 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <p className="max-w-2xl text-sm font-mono tracking-widest uppercase text-white/70 leading-relaxed">
              Jade Events Decorations has a sterling reputation for delivering exceptional event functions and wedding design services to private clients.
            </p>

            <div className="flex gap-8">
              <MagneticButton>
                <Link
                  href="/#contact"
                  className="relative text-white text-sm font-bold tracking-widest uppercase group/btn"
                >
                  <span className="relative z-10">Start Project</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-jade-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/#portfolio"
                  className="relative text-white/50 text-sm font-bold tracking-widest uppercase hover:text-white transition-colors group/btn"
                >
                  <span>View Works</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-white/30"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with breathing gold effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 mix-blend-difference"
      >
        <div className="relative h-16 w-[1px] overflow-hidden">
          {/* Background track */}
          <div className="absolute inset-0 bg-white/20" />

          {/* Animated indicator */}
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-1/2 w-full"
            style={{
              background: "linear-gradient(to bottom, var(--jade-gold), white, var(--jade-gold))",
            }}
          />
        </div>

        {/* Scroll text */}
        <motion.span
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.3em] text-white/40 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          SCROLL
        </motion.span>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t border-l border-jade-gold/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-jade-gold/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      />
    </section>
  )
}

function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}
