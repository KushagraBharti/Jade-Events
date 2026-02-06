"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode } from "react"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Overlay that slides during transition
const overlayVariants = {
  initial: {
    scaleY: 0,
  },
  enter: {
    scaleY: [0, 1, 1, 0],
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      times: [0, 0.4, 0.6, 1],
    },
  },
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {/* Transition overlay */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none origin-bottom"
          variants={overlayVariants}
          style={{
            background: "linear-gradient(to bottom, rgba(212, 175, 55, 0.1), black)",
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
