"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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
    image: "/images/jade-events/jade3.png",
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
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          {/* Title Card */}
          <div className="flex h-[60vh] w-[40vw] shrink-0 flex-col justify-center">
            <h2 className="text-8xl font-serif font-light text-white">
              Selected <br /> <span className="italic text-white/50">Works</span>
            </h2>
            <p className="mt-8 max-w-md text-sm font-mono tracking-widest text-white/70 uppercase">
              A curated collection of our most ambitious and immersive event designs.
            </p>
          </div>

          {/* Gallery Items */}
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioItem({ item }: { item: typeof portfolioItems[0] }) {
  return (
    <div className="group relative h-[60vh] w-[35vw] shrink-0 overflow-hidden bg-white/5">
      <motion.div
        className="relative h-full w-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width:1280px) 35vw, (min-width:1024px) 45vw, (min-width:768px) 60vw, 90vw"
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/40">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs tracking-widest text-white uppercase">{item.category}</span>
          <span className="font-mono text-xs tracking-widest text-white uppercase">{item.year}</span>
        </div>
        <h3 className="text-4xl font-serif font-light text-white">{item.title}</h3>
      </div>
    </div>
  )
}
