"use client"

import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CounterProps {
  value: number
  className?: string
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  once?: boolean
}

export function Counter({
  value,
  className,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  once = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    duration: duration * 1000,
  })

  const display = useTransform(spring, (current) => Math.floor(current))

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, spring, value, delay])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

interface AnimatedNumberProps {
  value: string
  className?: string
  delay?: number
}

export function AnimatedNumber({ value, className, delay = 0 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <span ref={ref} className={cn("inline-flex overflow-hidden", className)}>
      {value.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : { y: "100%", opacity: 0 }
          }
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

interface PriceCounterProps {
  price: number
  className?: string
  delay?: number
  currency?: string
}

export function PriceCounter({
  price,
  className,
  delay = 0,
  currency = "$",
}: PriceCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 20,
  })

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(price)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, spring, price, delay])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay }}
      >
        {currency}
      </motion.span>
      <motion.span>{display}</motion.span>
    </span>
  )
}
