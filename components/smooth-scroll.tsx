"use client"

import dynamic from "next/dynamic"
import { ReactLenis } from "lenis/react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useMotionValue } from "framer-motion"

const LazyKonamiCode = dynamic(
  () => import("@/components/effects/konami-code").then((module) => module.KonamiCodeProvider),
  { ssr: false }
)

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [showCursor, setShowCursor] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  useEffect(() => {
    const html = document.documentElement
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!supportsFinePointer || prefersReducedMotion) {
      html.classList.remove("has-custom-cursor")
      return
    }

    html.classList.add("has-custom-cursor")
    setShowCursor(true)

    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const nextMode = target?.closest("[data-cursor='native']")
        ? "is-native"
        : target?.closest("a, button, [role='button'], input, textarea, select")
          ? "is-hovered"
          : ""

      if (cursorRef.current) {
        cursorRef.current.classList.toggle("is-hovered", nextMode === "is-hovered")
        cursorRef.current.classList.toggle("is-native", nextMode === "is-native")
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerover", handlePointerOver, { passive: true })

    return () => {
      html.classList.remove("has-custom-cursor")
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerover", handlePointerOver)
    }
  }, [cursorX, cursorY])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.95,
        touchMultiplier: 1,
      }}
    >
      {/* Custom cursor */}
      {showCursor && (
        <motion.div
          ref={cursorRef}
          className="custom-cursor"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        />
      )}

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Konami code easter egg */}
      <LazyKonamiCode>{children}</LazyKonamiCode>
    </ReactLenis>
  )
}
