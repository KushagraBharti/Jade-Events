"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

const packages = [
  {
    id: 1,
    name: "Birthday Celebrations",
    startingPrice: "$800",
    description: "Perfect for milestone birthdays and intimate celebrations",
    features: [
      "Custom theme consultation",
      "Balloon arrangements & installations",
      "Table centerpieces",
      "Backdrop design",
      "Setup and breakdown",
      "Up to 50 guests",
    ],
    image: "/elegant-birthday-party-decoration-setup.jpg",
  },
  {
    id: 2,
    name: "Wedding Packages",
    startingPrice: "$3,500",
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
    image: "/traditional-indian-wedding-mandap-decoration.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Traditional Functions",
    startingPrice: "$1,200",
    description: "Authentic decor for Sangeet, Mehndi, Haldi, and more",
    features: [
      "Culturally authentic designs",
      "Traditional floral arrangements",
      "Seating area decor",
      "Stage or focal point design",
      "Lighting & draping",
      "Setup and breakdown",
    ],
    image: "/colorful-sangeet-ceremony-decoration.jpg",
  },
]

export function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full bg-muted/30 py-20 md:py-32">
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
            className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl"
          >
            Our Service Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-muted-foreground"
          >
            Each package is customizable to fit your vision and budget
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
            >
              <Card
                className={`overflow-hidden border-border bg-card transition-shadow hover:shadow-2xl ${pkg.featured ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.featured && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className="bg-primary px-4 py-2 text-center font-mono text-xs tracking-widest text-primary-foreground"
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      priority={pkg.featured}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </motion.div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <motion.div className="mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <span className="text-3xl font-semibold text-primary">{pkg.startingPrice}</span>
                    <span className="font-mono text-sm text-muted-foreground"> starting</span>
                  </motion.div>
                  <ul className="mb-6 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="font-mono text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Get a Quote
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
