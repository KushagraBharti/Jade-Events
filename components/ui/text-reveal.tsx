"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealType = "char" | "word" | "line"
type RevealDirection = "up" | "down" | "left" | "right" | "fade"

interface TextRevealProps {
  children: string
  type?: RevealType
  direction?: RevealDirection
  className?: string
  delay?: number
  staggerDelay?: number
  duration?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
  splitClassName?: string
  highlightWords?: string[]
  highlightClassName?: string
}

const getInitialState = (direction: RevealDirection) => {
  switch (direction) {
    case "up":
      return { y: "100%", opacity: 0 }
    case "down":
      return { y: "-100%", opacity: 0 }
    case "left":
      return { x: "100%", opacity: 0 }
    case "right":
      return { x: "-100%", opacity: 0 }
    case "fade":
    default:
      return { opacity: 0 }
  }
}

const getAnimateState = (direction: RevealDirection) => {
  switch (direction) {
    case "up":
    case "down":
      return { y: 0, opacity: 1 }
    case "left":
    case "right":
      return { x: 0, opacity: 1 }
    case "fade":
    default:
      return { opacity: 1 }
  }
}

export function TextReveal({
  children,
  type = "word",
  direction = "up",
  className,
  delay = 0,
  staggerDelay = 0.03,
  duration = 0.5,
  once = true,
  as: Component = "div",
  splitClassName,
  highlightWords = [],
  highlightClassName = "text-gradient-gold",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: getInitialState(direction),
    visible: {
      ...getAnimateState(direction),
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const splitText = () => {
    if (type === "char") {
      return children.split("").map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            variants={itemVariants}
            className={cn("inline-block", char === " " && "w-[0.25em]", splitClassName)}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))
    }

    if (type === "word") {
      return children.split(" ").map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        )
        return (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              variants={itemVariants}
              className={cn(
                "inline-block",
                splitClassName,
                isHighlighted && highlightClassName
              )}
            >
              {word}
            </motion.span>
          </span>
        )
      })
    }

    if (type === "line") {
      return children.split("\n").map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span variants={itemVariants} className={cn("block", splitClassName)}>
            {line}
          </motion.span>
        </span>
      ))
    }

    return children
  }

  const MotionComponent = motion[Component] || motion.div

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {splitText()}
    </MotionComponent>
  )
}

interface SplitTextProps {
  children: string
  className?: string
  charClassName?: string
  delay?: number
  staggerDelay?: number
  duration?: number
}

export function SplitText({
  children,
  className,
  charClassName,
  delay = 0,
  staggerDelay = 0.02,
  duration = 0.4,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          className={cn("inline-block", charClassName)}
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration,
                delay: delay + index * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: RevealDirection
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={getInitialState(direction)}
        animate={isInView ? getAnimateState(direction) : getInitialState(direction)}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  duration?: number
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitialState(direction),
        visible: {
          ...getAnimateState(direction),
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
