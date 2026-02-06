"use client"

import Image from "next/image"
import { useRef } from "react"
import { Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
  {
    id: 3,
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
  },
]

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative h-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.name}
          fill
          sizes="(min-width:1280px) 30vw, (min-width:1024px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <motion.h3
            className="text-2xl font-serif font-light text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
          >
            {pkg.name}
          </motion.h3>
          <motion.p
            className="mt-2 font-mono text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
          >
            {pkg.description}
          </motion.p>
        </div>

        {/* Price */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
        >
          <span className="text-3xl font-semibold text-white">{pkg.startingPrice}</span>
          <span className="font-mono text-sm text-white/60"> starting</span>
        </motion.div>

        {/* Features */}
        <ul className="mb-6 space-y-3 flex-grow">
          {pkg.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.15 + i * 0.05 }}
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-jade-gold/70" />
              <span className="font-mono text-sm text-white/60">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
        >
          <Button
            asChild
            className="w-full rounded-none h-12 text-xs tracking-[0.15em] uppercase bg-white text-black relative overflow-hidden group/btn hover:text-black"
          >
            <Link href="/#contact" className="relative">
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-jade-gold translate-x-[-101%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <motion.span
            className="block font-mono text-sm tracking-widest text-jade-gold/60 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            PACKAGES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-serif font-light tracking-tight text-white md:text-5xl"
          >
            Our Service Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-white/70"
          >
            Each package is customizable to fit your vision and budget
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-jade-gold/30 to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
