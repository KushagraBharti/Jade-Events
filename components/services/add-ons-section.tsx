"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { Sparkles, Flower2, Lightbulb, Camera, Music, Utensils } from "lucide-react"
import { motion } from "framer-motion"

const addOns = [
  {
    icon: Flower2,
    name: "Premium Florals",
    description: "Exotic flowers and custom arrangements",
    image: "/images/jade-events/nbp-floral.png",
  },
  {
    icon: Lightbulb,
    name: "Enhanced Lighting",
    description: "Uplighting, string lights, and specialty effects",
    image: "/images/jade-events/nbp-lighting.png",
  },
  {
    icon: Sparkles,
    name: "Luxury Draping",
    description: "Ceiling drapes and fabric installations",
    image: "/images/jade-events/nbp-drapes.png",
  },
  {
    icon: Camera,
    name: "Photo Booth Setup",
    description: "Themed backdrop with props",
    image: "/images/jade-events/nbp-photo.png",
  },
  {
    icon: Music,
    name: "Stage Design",
    description: "Custom stage decor for performances",
    image: "/images/jade-events/nbp-stage.png",
  },
  {
    icon: Utensils,
    name: "Table Styling",
    description: "Premium linens, chargers, and place settings",
    image: "/images/jade-events/nbp-table.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 15,
    },
  },
}

export function AddOnsSection() {
  return (
    <section className="w-full bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-white md:text-5xl">
            Enhance Your Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-white/70">
            Add these premium services to any package for a truly unforgettable event
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {addOns.map((addOn, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard
                  icon={addOn.icon}
                  title={addOn.name}
                  description={addOn.description}
                  index={index}
                  initial={{ opacity: 1, y: 0 }} // Reset internal initial since we control it with parent
                  whileInView={{ opacity: 1, y: 0 }} // Reset internal whileInView
                  transition={{ duration: 0 }} // Reset internal transition
                  enableTilt={true}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px -10px rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  backgroundImage={addOn.image}
                  className="h-full"
                />
              </motion.div>
            )
          })}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 lg:col-start-2">
            <TiltCard
              title="And More..."
              description="We can customize however you want to bring your vision to life."
              index={addOns.length}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 }}
              enableTilt={true}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              backgroundImage="/images/jade-events/nbp-more.png"
              className="h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
