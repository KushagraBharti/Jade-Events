"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ReactLenis } from "lenis/react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const [isHovered, setIsHovered] = useState(false)
  const [enableEnhancements, setEnableEnhancements] = useState(false)
  const [showGrain, setShowGrain] = useState(false)

  // Respect reduced motion and touch-only devices to avoid unnecessary work.
  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)")

    const update = () => {
      const shouldEnable = !(reduceMotionQuery.matches || coarsePointerQuery.matches)
      setEnableEnhancements(shouldEnable)
      if (!shouldEnable) {
        setIsHovered(false)
      }
    }

    const listener = () => update()
    reduceMotionQuery.addEventListener?.("change", listener) ?? reduceMotionQuery.addListener(listener)
    coarsePointerQuery.addEventListener?.("change", listener) ?? coarsePointerQuery.addListener(listener)
    update()

    return () => {
      reduceMotionQuery.removeEventListener?.("change", listener) ?? reduceMotionQuery.removeListener(listener)
      coarsePointerQuery.removeEventListener?.("change", listener) ?? coarsePointerQuery.removeListener(listener)
    }
  }, [])

  // Defer the grain overlay until the browser is idle to reduce initial paint work.
  useEffect(() => {
    if (!enableEnhancements) {
      setShowGrain(false)
      return
    }

    let idleHandle: number | null = null
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleHandle = (window as any).requestIdleCallback(() => setShowGrain(true), { timeout: 1200 })
      } else {
        idleHandle = window.setTimeout(() => setShowGrain(true), 900)
      }
    }

    schedule()
    return () => {
      if (idleHandle !== null) {
        ;(window as any).cancelIdleCallback?.(idleHandle) ?? clearTimeout(idleHandle)
      }
    }
  }, [enableEnhancements])

  // Throttle cursor updates to the next animation frame to keep pointer tracking smooth.
  useEffect(() => {
    if (!enableEnhancements) return

    let frame = 0

    const moveCursor = (e: MouseEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const isInteractive =
        !!target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest('[role="button"]'))

      setIsHovered(isInteractive)
    }

    window.addEventListener("mousemove", moveCursor, { passive: true })
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [enableEnhancements, mouseX, mouseY])

  if (!enableEnhancements) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true, smoothTouch: false }}>
      <motion.div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {showGrain && createPortal(<div className="grain-overlay" aria-hidden />, document.body)}
      {children}
    </ReactLenis>
  )
}
