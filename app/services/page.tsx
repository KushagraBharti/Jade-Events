"use client"

import { ServicesHero } from "@/components/services/services-hero"
import { PackagesSection } from "@/components/services/packages-section"
import { AddOnsSection } from "@/components/services/add-ons-section"
import { ProcessSection } from "@/components/services/process-section"
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

export default function ServicesPage() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="flex min-h-screen flex-col"
    >
      <main className="flex-1 soft-snap">
        <ServicesHero />
        <PackagesSection />
        <AddOnsSection />
      </main>
    </motion.div>
  )
}