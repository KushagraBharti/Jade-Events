"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState, type MouseEvent, type ReactNode } from "react"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  // Spotlight Effect
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
      {/* Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
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

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold leading-none tracking-tighter text-white drop-shadow-2xl">
              <span className="block">JADE</span>
              <span className="block italic font-light">EVENTS</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <p className="max-w-2xl text-sm font-mono tracking-widest uppercase text-white/70 leading-relaxed">
              Jade Events Decorations has a sterling reputation for delivering exceptional event functions and wedding design services to private clients.
            </p>

            <div className="flex gap-8">
              <MagneticButton>
                <Link href="/#contact" className="text-white text-sm font-bold tracking-widest uppercase hover:underline decoration-1 underline-offset-8">
                  Start Project
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/#portfolio" className="text-white/50 text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">
                  View Works
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 mix-blend-difference"
      >
        <div className="h-16 w-[1px] bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-1/2 w-full bg-white"
          />
        </div>
      </motion.div>
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
    >
      {children}
    </motion.div>
  )
}
