"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface HennaBorderProps {
  children: ReactNode
  className?: string
  isActive?: boolean
  variant?: "subtle" | "prominent"
  color?: "gold" | "saffron" | "magenta"
}

const colorMap = {
  gold: { primary: "#D4AF37", secondary: "#E5C76B" },
  saffron: { primary: "#FF9933", secondary: "#FFB366" },
  magenta: { primary: "#C71585", secondary: "#DB4D9C" },
}

// SVG pattern for henna-style border
function HennaPattern({ color, position }: { color: typeof colorMap.gold; position: "top" | "bottom" | "left" | "right" }) {
  const isVertical = position === "left" || position === "right"
  const width = isVertical ? 20 : "100%"
  const height = isVertical ? "100%" : 20

  return (
    <svg
      className={`absolute ${position}-0 ${isVertical ? "top-0 h-full" : "left-0 w-full"}`}
      style={{
        width,
        height,
        opacity: 0,
      }}
      viewBox={isVertical ? "0 0 20 100" : "0 0 100 20"}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={`henna-pattern-${position}`}
          patternUnits="userSpaceOnUse"
          width={isVertical ? "20" : "40"}
          height={isVertical ? "40" : "20"}
        >
          {/* Paisley-inspired curves */}
          <path
            d={isVertical
              ? "M10,0 Q15,10 10,20 Q5,30 10,40"
              : "M0,10 Q10,5 20,10 Q30,15 40,10"
            }
            fill="none"
            stroke={color.primary}
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          {/* Decorative dots */}
          <circle
            cx={isVertical ? "10" : "10"}
            cy={isVertical ? "10" : "10"}
            r="1.5"
            fill={color.secondary}
            fillOpacity="0.8"
          />
          <circle
            cx={isVertical ? "10" : "30"}
            cy={isVertical ? "30" : "10"}
            r="1"
            fill={color.primary}
            fillOpacity="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#henna-pattern-${position})`} />
    </svg>
  )
}

export function HennaBorder({
  children,
  className = "",
  isActive = false,
  variant = "subtle",
  color = "gold",
}: HennaBorderProps) {
  const colors = colorMap[color]

  return (
    <motion.div
      className={`relative ${className}`}
      initial={false}
      animate={isActive ? "active" : "inactive"}
    >
      {/* Corner flourishes */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => {
        const isTop = corner.includes("top")
        const isLeft = corner.includes("left")

        return (
          <motion.svg
            key={corner}
            className={`absolute w-8 h-8 pointer-events-none ${isTop ? "top-0" : "bottom-0"} ${isLeft ? "left-0" : "right-0"}`}
            viewBox="0 0 32 32"
            style={{
              transform: `scale(${isLeft ? 1 : -1}, ${isTop ? 1 : -1})`,
            }}
            variants={{
              inactive: { opacity: 0, scale: 0.8 },
              active: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Henna corner design */}
            <motion.path
              d="M0,0 L0,12 Q0,8 4,8 L12,8 Q8,8 8,4 L8,0"
              fill="none"
              stroke={colors.primary}
              strokeWidth={variant === "prominent" ? "2" : "1"}
              strokeOpacity={variant === "prominent" ? "0.8" : "0.4"}
              variants={{
                inactive: { pathLength: 0 },
                active: { pathLength: 1 },
              }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Decorative curl */}
            <motion.path
              d="M4,12 Q8,12 8,16 Q8,20 12,20"
              fill="none"
              stroke={colors.secondary}
              strokeWidth="1"
              strokeOpacity="0.6"
              variants={{
                inactive: { pathLength: 0, opacity: 0 },
                active: { pathLength: 1, opacity: 0.6 },
              }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Dot accents */}
            <motion.circle
              cx="6"
              cy="6"
              r="1.5"
              fill={colors.primary}
              variants={{
                inactive: { scale: 0, opacity: 0 },
                active: { scale: 1, opacity: 0.8 },
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
            />
            <motion.circle
              cx="14"
              cy="14"
              r="1"
              fill={colors.secondary}
              variants={{
                inactive: { scale: 0, opacity: 0 },
                active: { scale: 1, opacity: 0.6 },
              }}
              transition={{ duration: 0.3, delay: 0.5 }}
            />
          </motion.svg>
        )
      })}

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit"
        variants={{
          inactive: {
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
          },
          active: {
            boxShadow: `inset 0 0 0 1px ${colors.primary}40, 0 0 20px ${colors.primary}20`,
          },
        }}
        transition={{ duration: 0.4 }}
      />

      {children}
    </motion.div>
  )
}

// Simplified hover wrapper for cards
export function HennaHoverCard({
  children,
  className = "",
  color = "gold",
}: {
  children: ReactNode
  className?: string
  color?: "gold" | "saffron" | "magenta"
}) {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover="active"
      initial="inactive"
    >
      <HennaBorder isActive={false} color={color}>
        <motion.div
          variants={{
            inactive: {},
            active: {},
          }}
        >
          {children}
        </motion.div>
      </HennaBorder>
    </motion.div>
  )
}
