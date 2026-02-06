"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactSection } from "@/components/home/contact-section"
import { motion } from "framer-motion"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="flex min-h-screen flex-col"
    >
      <main className="flex-1 soft-snap">
        <HeroSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </motion.div>
  )
}