
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "I will definitely recommend Jade Event Decoration. Aparna has done two events for me and both of them have had spectacular decorations. All the guests have raved about how beautiful everything is. Aparna is extremely easy to talk to and ensures that her clients get what they want in the best possible way. She pays attention to every single detail and gives her best in not just the background decor but also table decorations. She is extremely experienced and has the best ideas to make your event memorable.",
    author: "Happy Client",
    role: "Private Event"
  },
  {
    id: 2,
    quote: "It's been long since I have logged in FB. But today I logged in to share Jade Event Decors amazing work. They have done a beautiful job on a floral backdrop that I requested for my daughter's 16th bday. Each flower was so well detailed with absolute perfection. They nailed it exactly like how my daughter and I wanted it to be. Jade Event Decors your team rocks. Keep up the awesome work and wish you all the best.",
    author: "Satisfied Parent",
    role: "Birthday Celebration"
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  }

  const swipe = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-950 text-white overflow-hidden py-24">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-10 pointer-events-none">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => swipe(-1)}
            className="hidden md:flex h-16 w-16 rounded-full border border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110 shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Content */}
          <div className="flex-1 max-w-4xl min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed tracking-wide text-white/90">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="mt-12 space-y-2">
                  <h4 className="text-xl font-medium tracking-widest uppercase">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm font-mono text-white/50 tracking-widest uppercase">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => swipe(1)}
            className="hidden md:flex h-16 w-16 rounded-full border border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110 shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Mobile Controls & Indicators */}
        <div className="flex flex-col items-center gap-8 mt-12 md:mt-16">
          {/* Mobile Buttons */}
          <div className="flex md:hidden gap-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(-1)}
              className="h-12 w-12 rounded-full border border-white/20 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(1)}
              className="h-12 w-12 rounded-full border border-white/20 hover:bg-white/20 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-1 transition-all duration-300 rounded-full ${index === currentIndex ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
