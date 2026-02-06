"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef, useState, type ReactNode, useCallback } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

// Konami Code Easter Egg
const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA"
]

function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([])
  const [showConfetti, setShowConfetti] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setKeys((prev) => {
      const newKeys = [...prev, e.code].slice(-10)
      if (newKeys.length === 10 && newKeys.every((key, i) => key === KONAMI_CODE[i])) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
        return []
      }
      return newKeys
    })
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const confettiColors = ["#D4AF37", "#FF9933", "#C71585", "#8B0000", "#0D9488"]

  return (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Sparkle burst */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 20 }, (_, i) => {
              const angle = (i / 20) * 360
              const distance = 100 + Math.random() * 150
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 4 + Math.random() * 6,
                    height: 4 + Math.random() * 6,
                    background: `radial-gradient(circle, #D4AF37 0%, #FF9933 50%, transparent 100%)`,
                    boxShadow: "0 0 10px #D4AF37",
                  }}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.cos((angle * Math.PI) / 180) * distance,
                    y: Math.sin((angle * Math.PI) / 180) * distance,
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 0.8, delay: Math.random() * 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )
            })}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 100,
                height: 100,
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, transparent 70%)",
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Confetti rain */}
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: -20,
                width: 6 + Math.random() * 8,
                height: (6 + Math.random() * 8) * 0.6,
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                borderRadius: 2,
              }}
              initial={{ y: 0, rotate: 0, opacity: 1 }}
              animate={{
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                rotate: Math.random() * 720,
                opacity: [1, 1, 0],
                x: (Math.random() - 0.5) * 200,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: [0.1, 0.25, 0.1, 1],
              }}
            />
          ))}

          {/* Secret message */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="text-6xl md:text-8xl font-serif font-bold text-gradient-gold mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 40px rgba(212, 175, 55, 0.8)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ✨ NAMASTE ✨
            </motion.div>
            <motion.p
              className="text-white/80 font-mono text-sm tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              You found the secret!
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [showCursor, setShowCursor] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const hoveredRef = useRef(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 })
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 })

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    if (!supportsFinePointer) return

    setShowCursor(true)

    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const nextHovered = Boolean(target?.closest("a, button, [role='button'], input, textarea, select"))
      if (hoveredRef.current !== nextHovered) {
        hoveredRef.current = nextHovered
        setIsHovered(nextHovered)
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerover", handlePointerOver)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerover", handlePointerOver)
    }
  }, [cursorX, cursorY])

  return (
    <ReactLenis root>
      {/* Custom cursor */}
      {showCursor && (
        <motion.div
          className={`custom-cursor ${isHovered ? "hovered" : ""}`}
          style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        />
      )}

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Konami code easter egg */}
      <KonamiCode />

      {children}
    </ReactLenis>
  )
}
