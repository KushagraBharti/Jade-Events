"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/text-reveal"

const paragraphs = [
  "Jade Events Decorations was born from a simple observation: many South Asian families in the DFW area were searching for decor services that truly understood their cultural traditions while offering the sophistication of modern design.",
  "Founded in 2019 by two friends with a shared passion for event design and cultural authenticity, we set out to fill this gap. What started as a small operation working out of a garage has grown into a trusted name for premium event decor across the Frisco and DFW area.",
  "Today, we're proud to have created memorable experiences for hundreds of families, from intimate birthday celebrations to grand wedding festivities. Each event is an opportunity to blend the rich traditions of South Asian culture with contemporary aesthetics that reflect our clients' unique personalities.",
  "We remain a boutique, two-person studio by choice—it allows us to maintain the personal touch and attention to detail that our clients have come to expect.",
]

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])

  return (
    <section ref={sectionRef} className="w-full bg-muted/30 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image with Parallax and Reveal */}
          <div ref={imageRef} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            {/* Image reveal mask */}
            <motion.div
              className="absolute inset-0 z-10 bg-background"
              initial={{ scaleX: 1 }}
              animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ transformOrigin: "right" }}
            />

            {/* Parallax image container */}
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                src="/images/jade-events/jade6.png"
                alt="Jade Events team at work"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Gold accent border that draws in */}
            <motion.div
              className="absolute inset-0 border-2 border-jade-gold/0 rounded-lg pointer-events-none z-20"
              initial={{ borderColor: "rgba(212, 175, 55, 0)" }}
              animate={isInView ? { borderColor: "rgba(212, 175, 55, 0.2)" } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            />

            {/* Corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-jade-gold/40 rounded-tl-lg z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-jade-gold/40 rounded-br-lg z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
          </div>

          {/* Content with Staggered Reveals */}
          <div ref={contentRef} className="flex flex-col justify-center space-y-6">
            <StaggerContainer delay={0.4} staggerDelay={0.15}>
              <div>
                <StaggerItem direction="fade">
                  <motion.span
                    className="font-mono text-sm tracking-widest text-primary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    OUR STORY
                  </motion.span>
                </StaggerItem>

                <StaggerItem>
                  <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
                    <Reveal delay={0.6} direction="up" className="pb-1">
                      <span className="block">A Passion for</span>
                    </Reveal>
                    <Reveal delay={0.8} direction="up" className="pb-2">
                      <span className="block font-semibold">
                        Meaningful{" "}
                        <span className="relative inline-block">
                          Celebrations
                          <motion.span
                            className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-jade-gold to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ transformOrigin: "left" }}
                          />
                        </span>
                      </span>
                    </Reveal>
                  </h2>
                </StaggerItem>
              </div>
            </StaggerContainer>

            {/* Paragraphs with staggered reveal */}
            <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 1 + index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {paragraph.includes("2019") ? (
                    <>
                      {paragraph.split("2019")[0]}
                      <span className="text-jade-gold font-semibold">2019</span>
                      {paragraph.split("2019")[1]}
                    </>
                  ) : paragraph.includes("hundreds") ? (
                    <>
                      {paragraph.split("hundreds")[0]}
                      <span className="text-jade-saffron/90">hundreds</span>
                      {paragraph.split("hundreds")[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </motion.p>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-jade-gold to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
                style={{ transformOrigin: "left" }}
              />
              <span className="text-xs font-mono tracking-widest text-jade-gold/60">
                EST. 2019
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
