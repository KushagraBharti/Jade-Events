"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Use MotionValues instead of State to avoid re-renders on every mouse move
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]')
            ) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [mouseX, mouseY])

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <motion.div
                className={`custom-cursor ${isHovered ? "hovered" : ""}`}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            <div className="grain-overlay" />
            {children}
        </ReactLenis>
    )
}
