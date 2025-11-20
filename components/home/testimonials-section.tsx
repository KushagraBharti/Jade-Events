"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const testimonials = [
  {
    quote: "An absolute masterpiece of design.",
    author: "Vogue India",
  },
  {
    quote: "They didn't just decorate; they created a world.",
    author: "The Kapoor Wedding",
  },
  {
    quote: "Elegance in its purest form.",
    author: "Architectural Digest",
  },
  {
    quote: "A visual symphony of light and shadow.",
    author: "Harper's Bazaar",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={ref} className="flex h-screen items-center justify-center bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="relative h-[40vh] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                filter: index === activeIndex ? "blur(0px)" : "blur(10px)",
                scale: index === activeIndex ? 1 : 0.95
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight">
                "{item.quote}"
              </p>
              <p className="mt-12 font-mono text-sm tracking-widest uppercase text-white/50">
                — {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
