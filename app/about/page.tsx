"use client"

import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"
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

export default function AboutPage() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="flex min-h-screen flex-col"
    >
      <main className="flex-1 soft-snap">
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
    </motion.div>
  )
}