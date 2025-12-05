"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const packages = [
  {
    id: 1,
    name: "Birthday Celebrations",
    startingPrice: "$750",
    description: "Perfect for milestone birthdays and intimate celebrations",
    features: [
      "Custom theme consultation",
      "Balloon arrangements & installations",
      "Table centerpieces",
      "Backdrop design",
      "Setup and breakdown",
      "Up to 50 guests",
    ],
    image: "/images/jade-events/jade2.png",
  },
  {
    id: 2,
    name: "Wedding Packages",
    startingPrice: "$2,000",
    description: "Comprehensive decor for your special day",
    features: [
      "Full venue transformation",
      "Mandap or ceremony backdrop",
      "Reception decor",
      "Floral arrangements",
      "Lighting design",
      "Table settings & centerpieces",
      "Welcome area setup",
      "Full-day coordination",
    ],
    image: "/images/jade-events/jade6.png",
    featured: true,
  },
  {
    id: 3,
    name: "Traditional Functions",
    startingPrice: "$1,000",
    description: "Authentic decor for Sangeet, Mehndi, Haldi, and more",
    features: [
      "Culturally authentic designs",
      "Traditional floral arrangements",
      "Seating area decor",
      "Stage or focal point design",
      "Lighting & draping",
      "Setup and breakdown",
    ],
    image: "/images/jade-events/jade3.png",
  },
]

export function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-light tracking-tight text-white md:text-5xl"
          >
            Our Service Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-white/70"
          >
            Each package is customizable to fit your vision and budget
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <TiltCard
              key={pkg.id}
              index={index}
              innerClassName="p-0"
              className={pkg.featured ? "rounded-xl" : ""}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              enableTilt={false}
              whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(255,255,255,0.1)" }}
            >
              <div className="flex flex-col h-full">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
                    <p className="mt-2 font-mono text-sm text-white/60">{pkg.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-semibold text-white">{pkg.startingPrice}</span>
                    <span className="font-mono text-sm text-white/60"> starting</span>
                  </div>
                  <ul className="mb-6 space-y-3 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-white/80" />
                        <span className="font-mono text-sm text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
