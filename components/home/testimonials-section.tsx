"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useState, useRef } from "react"
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
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-zinc-950 text-white overflow-hidden py-40"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />

      {/* Animated Quote Icon */}
      <motion.div
        className="absolute top-20 left-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Quote size={120} className="text-jade-gold" />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-8 right-8 w-20 h-20 border-t border-r border-jade-gold/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-jade-gold/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm tracking-widest text-jade-gold/60">TESTIMONIALS</span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(-1)}
              className="hidden md:flex h-16 w-16 rounded-full border border-white/20 hover:border-jade-gold/50 hover:bg-jade-gold/10 text-white transition-all hover:scale-110 shrink-0 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-8 w-8 transition-transform group-hover:-translate-x-1" />
            </Button>
          </motion.div>

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
                {/* Quote with subtle animation */}
                <motion.p
                  className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed tracking-wide text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>

                <motion.div
                  className="mt-12 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-xl font-medium tracking-widest uppercase">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-sm font-mono text-jade-gold/60 tracking-widest uppercase">
                    {testimonials[currentIndex].role}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="mx-auto mt-4 h-[1px] bg-gradient-to-r from-transparent via-jade-gold/30 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(1)}
              className="hidden md:flex h-16 w-16 rounded-full border border-white/20 hover:border-jade-gold/50 hover:bg-jade-gold/10 text-white transition-all hover:scale-110 shrink-0 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Controls & Indicators */}
        <motion.div
          className="flex flex-col items-center gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Mobile Buttons */}
          <div className="flex md:hidden gap-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(-1)}
              className="h-12 w-12 rounded-full border border-white/20 hover:border-jade-gold/50 hover:bg-jade-gold/10 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => swipe(1)}
              className="h-12 w-12 rounded-full border border-white/20 hover:border-jade-gold/50 hover:bg-jade-gold/10 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicators with gold accent */}
          <div className="flex items-center gap-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className="h-1 rounded-full transition-all duration-300"
                animate={{
                  width: index === currentIndex ? 48 : 16,
                  backgroundColor: index === currentIndex
                    ? "var(--jade-gold)"
                    : "rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{
                  backgroundColor: index === currentIndex
                    ? "var(--jade-gold)"
                    : "rgba(255, 255, 255, 0.4)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
