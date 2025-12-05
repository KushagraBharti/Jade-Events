"use client"

import { ReactLenis } from "lenis/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
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
    }, [])

    return (
        <ReactLenis root>
            <motion.div
                className={`custom-cursor ${isHovered ? "hovered" : ""}`}
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
            <div className="grain-overlay" />
            {children}
        </ReactLenis>
    )
}
