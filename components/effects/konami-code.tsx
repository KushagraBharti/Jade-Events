"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA"
]

// Confetti particle
function ConfettiParticle({ delay, x }: { delay: number; x: number }) {
  const colors = ["#D4AF37", "#FF9933", "#C71585", "#8B0000", "#0D9488"]
  const color = colors[Math.floor(Math.random() * colors.length)]
  const rotation = Math.random() * 360
  const size = 6 + Math.random() * 8

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: -20,
        width: size,
        height: size * 0.6,
        backgroundColor: color,
        borderRadius: 2,
      }}
      initial={{ y: 0, rotate: 0, opacity: 1 }}
      animate={{
        y: [0, window.innerHeight + 100],
        rotate: [rotation, rotation + 720],
        opacity: [1, 1, 0],
        x: [0, (Math.random() - 0.5) * 200],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        ease: [0.1, 0.25, 0.1, 1],
      }}
    />
  )
}

// Sparkle burst effect
function SparkleBurst() {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * 360,
    distance: 100 + Math.random() * 150,
    size: 4 + Math.random() * 6,
    delay: Math.random() * 0.2,
  }))

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[9999]">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            background: `radial-gradient(circle, #D4AF37 0%, #FF9933 50%, transparent 100%)`,
            boxShadow: "0 0 10px #D4AF37, 0 0 20px #D4AF37",
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((sparkle.angle * Math.PI) / 180) * sparkle.distance,
            y: Math.sin((sparkle.angle * Math.PI) / 180) * sparkle.distance,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            delay: sparkle.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
      {/* Central flash */}
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
  )
}

export function KonamiCodeProvider({ children }: { children: React.ReactNode }) {
  const [keys, setKeys] = useState<string[]>([])
  const [activated, setActivated] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setKeys((prev) => {
      const newKeys = [...prev, e.code].slice(-10)

      // Check if Konami code is complete
      if (newKeys.length === 10 && newKeys.every((key, i) => key === KONAMI_CODE[i])) {
        setActivated(true)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
        setTimeout(() => setActivated(false), 100)
        return []
      }

      return newKeys
    })
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Generate confetti particles
  const confettiParticles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
  }))

  return (
    <>
      {children}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Sparkle burst at center */}
            <SparkleBurst />

            {/* Confetti rain */}
            {confettiParticles.map((particle) => (
              <ConfettiParticle key={particle.id} delay={particle.delay} x={particle.x} />
            ))}

            {/* Secret message */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="text-center">
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
