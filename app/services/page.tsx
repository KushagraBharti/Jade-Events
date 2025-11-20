"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { PackagesSection } from "@/components/services/packages-section"
import { AddOnsSection } from "@/components/services/add-ons-section"
import { ProcessSection } from "@/components/services/process-section"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col"
    >
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <PackagesSection />
        <AddOnsSection />
        <ProcessSection />
      </main>
      <Footer />
    </motion.div>
  )
}
