"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col"
    >
      <Header />
      <main className="flex-1">
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </motion.div>
  )
}
