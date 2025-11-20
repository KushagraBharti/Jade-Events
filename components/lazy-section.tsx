"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type LazySectionProps = {
  children: ReactNode
  className?: string
  minHeight?: string
  rootMargin?: string
}

// Intersection-observer gate to avoid mounting heavy client sections until they're near the viewport.
export function LazySection({ children, className, minHeight, rootMargin = "200px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={minHeight ? { minHeight } : undefined}
      aria-busy={!isReady}
      aria-live="polite"
    >
      {isReady ? children : null}
    </div>
  )
}
