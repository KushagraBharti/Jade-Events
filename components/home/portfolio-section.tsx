"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Reveal } from "@/components/ui/text-reveal"

const portfolioItems = [
  {
    id: 1,
    title: "Royal Jaipur",
    category: "Wedding",
    image: "/images/jade-events/jade2.png",
    year: "2024"
  },
  {
    id: 2,
    title: "Midnight Garden",
    category: "Reception",
    image: "/images/jade-events/jade7.png",
    year: "2023"
  },
  {
    id: 3,
    title: "Golden Jubilee",
    category: "Anniversary",
    image: "/images/jade-events/jade4.png",
    year: "2024"
  },
  {
    id: 4,
    title: "Neon Sangeet",
    category: "Pre-Wedding",
    image: "/images/jade-events/jade5.png",
    year: "2023"
  },
  {
    id: 5,
    title: "White Lotus",
    category: "Ceremony",
    image: "/images/jade-events/jade6.png",
    year: "2024"
  },
]

export function PortfolioSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-black">
      {/* Background gradient accents */}
      <div
        className="fixed top-0 left-0 w-full h-screen pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          {/* Title Card */}
          <div ref={titleRef} className="flex h-[60vh] w-[40vw] shrink-0 flex-col justify-center relative">
            <motion.span
              className="font-mono text-sm tracking-widest text-jade-gold/60 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              PORTFOLIO
            </motion.span>

            <h2 className="text-8xl font-serif font-light text-white overflow-hidden">
              <Reveal delay={0.2} direction="up">
                <span className="block">Selected</span>
              </Reveal>
              <Reveal delay={0.4} direction="up">
                <span className="block italic text-white/50">Works</span>
              </Reveal>
            </h2>

            <motion.div
              className="mt-4 h-[1px] bg-gradient-to-r from-jade-gold/50 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "150px" } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p
              className="mt-8 max-w-md text-sm font-mono tracking-widest text-white/70 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A curated collection of our most ambitious and immersive event designs.
            </motion.p>

            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-0 left-0 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll</span>
              <motion.div
                className="w-16 h-[1px] bg-white/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/2 bg-white/50"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Gallery Items */}
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}

        </motion.div>
      </div>
    </section>
  )
}

function PortfolioItem({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={itemRef}
      className="group relative h-[60vh] w-[35vw] shrink-0 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "inset 0 0 0 1px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.1)"
            : "inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 0 rgba(212, 175, 55, 0)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Image container with parallax */}
      <motion.div
        className="relative h-full w-full"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width:1280px) 35vw, (min-width:1024px) 45vw, (min-width:768px) 60vw, 90vw"
          className="object-cover transition-all duration-700"
          style={{
            filter: isHovered ? "grayscale(0)" : "grayscale(1)",
          }}
        />

        {/* Gold overlay on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <motion.span
            className="font-mono text-xs tracking-widest text-white uppercase px-3 py-1"
            animate={{
              backgroundColor: isHovered ? "rgba(212, 175, 55, 0.2)" : "transparent",
              borderColor: isHovered ? "rgba(212, 175, 55, 0.4)" : "rgba(255, 255, 255, 0.2)",
            }}
            style={{ border: "1px solid" }}
            transition={{ duration: 0.3 }}
          >
            {item.category}
          </motion.span>
          <motion.span
            className="font-mono text-xs tracking-widest text-white/60 uppercase"
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            {item.year}
          </motion.span>
        </div>

        {/* Bottom row - Title */}
        <div>
          <motion.h3
            className="text-4xl font-serif font-light text-white"
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.4 }}
          >
            {item.title}
          </motion.h3>

          {/* Animated underline */}
          <motion.div
            className="h-[1px] bg-gradient-to-r from-jade-gold to-transparent mt-3"
            animate={{ width: isHovered ? "100px" : "0px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* View indicator */}
          
        </div>
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-4 left-4 w-6 h-6 border-t border-l border-jade-gold/0 z-20"
        animate={{ borderColor: isHovered ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-jade-gold/0 z-20"
        animate={{ borderColor: isHovered ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0)" }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.div>
  )
}
