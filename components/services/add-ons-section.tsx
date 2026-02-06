"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Flower2, Lightbulb, Camera, Music, Utensils } from "lucide-react"

const addOns = [
  {
    icon: Flower2,
    name: "Premium Florals",
    description: "Exotic flowers and custom arrangements",
    image: "/images/jade-events/nbp-floral.png",
    accentColor: "var(--jade-gold)",
  },
  {
    icon: Lightbulb,
    name: "Enhanced Lighting",
    description: "Uplighting, string lights, and specialty effects",
    image: "/images/jade-events/nbp-lighting.png",
    accentColor: "var(--jade-saffron)",
  },
  {
    icon: Sparkles,
    name: "Luxury Draping",
    description: "Ceiling drapes and fabric installations",
    image: "/images/jade-events/nbp-drapes.png",
    accentColor: "var(--jade-magenta)",
  },
  {
    icon: Camera,
    name: "Photo Booth Setup",
    description: "Themed backdrop with props",
    image: "/images/jade-events/nbp-photo.png",
    accentColor: "var(--jade-gold)",
  },
  {
    icon: Music,
    name: "Stage Design",
    description: "Custom stage decor for performances",
    image: "/images/jade-events/nbp-stage.png",
    accentColor: "var(--jade-saffron)",
  },
  {
    icon: Utensils,
    name: "Table Styling",
    description: "Premium linens, chargers, and place settings",
    image: "/images/jade-events/nbp-table.png",
    accentColor: "var(--jade-gold)",
  },
]

function AddOnCard({ addOn, index }: { addOn: typeof addOns[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const Icon = addOn.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div className="group relative h-full border border-white/10 bg-white/5 overflow-hidden transition-all duration-200 ease-in-out hover:border-jade-gold/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.3),inset_0_0_20px_rgba(212,175,55,0.15)]">
        {/* Background image on hover */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <Image
            src={addOn.image}
            alt=""
            fill
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 p-10 min-h-[280px] flex flex-col">
          {/* Icon with glow */}
          <div
            className="mb-8 inline-flex rounded-full p-5 w-fit relative bg-white/10"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                background: `radial-gradient(circle, ${addOn.accentColor}20 0%, transparent 70%)`,
              }}
            />
            <Icon className="h-7 w-7 text-white/80 relative z-10" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-light text-white mb-3">
            {addOn.name}
          </h3>

          {/* Description */}
          <p className="text-white/60 font-mono text-base leading-relaxed">
            {addOn.description}
          </p>
        </div>

        {/* Bottom accent line on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"
          style={{ background: `linear-gradient(to right, ${addOn.accentColor}50, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export function AddOnsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(199, 21, 133, 0.02) 0%, transparent 50%)",
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
            ADD-ONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-serif font-light tracking-tight text-white md:text-5xl"
          >
            Enhance Your Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-white/70"
          >
            Add these premium services to any package for a truly unforgettable event
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-8 h-[1px] bg-gradient-to-r from-transparent via-jade-magenta/30 to-transparent"
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addOn, index) => (
            <AddOnCard key={addOn.name} addOn={addOn} index={index} />
          ))}

          {/* Custom card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-1 lg:col-start-2 h-full"
          >
            <div className="group relative h-full border border-white/10 bg-white/5 overflow-hidden transition-all duration-200 ease-in-out hover:border-jade-gold/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.3),inset_0_0_20px_rgba(212,175,55,0.15)]">
              {/* Background image on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                <Image
                  src="/images/jade-events/nbp-more.png"
                  alt=""
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center min-h-[280px]">
                <div className="w-10 h-10 rotate-45 border border-jade-gold/40 mb-8" />
                <h3 className="text-2xl font-serif font-light text-white mb-3">And More...</h3>
                <p className="text-white/60 font-mono text-base">
                  We can customize however you want to bring your vision to life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}