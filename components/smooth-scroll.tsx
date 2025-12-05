"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

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
      const nextHovered = Boolean((event.target as HTMLElement | null)?.closest("a,button"))
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
      {showCursor && (
        <motion.div
          className={`custom-cursor ${isHovered ? "hovered" : ""}`}
          style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        />
      )}
      <div className="grain-overlay" />
      {children}
    </ReactLenis>
  )
}
