import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform, type MotionProps } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
    title?: string
    description?: string
    number?: string
    icon?: LucideIcon
    children?: ReactNode
    className?: string
    innerClassName?: string
    index?: number
    initial?: MotionProps["initial"]
    whileInView?: MotionProps["whileInView"]
    viewport?: MotionProps["viewport"]
    transition?: MotionProps["transition"]
    enableTilt?: boolean
    whileHover?: MotionProps["whileHover"]
    backgroundImage?: string
}

export function TiltCard({
    title,
    description,
    number,
    icon: Icon,
    children,
    className,
    innerClassName,
    index = 0,
    initial,
    whileInView,
    viewport,
    transition,
    enableTilt = true,
    whileHover,
    backgroundImage
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        if (!enableTilt) return
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPct = (clientX - left) / width - 0.5
        const yPct = (clientY - top) / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    function handleMouseLeave() {
        if (!enableTilt) return
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    return (
        <motion.div
            initial={initial || { opacity: 0, y: 50 }}
            whileInView={whileInView || { opacity: 1, y: 0 }}
            viewport={viewport || { once: true }}
            transition={transition || { duration: 0.8, delay: index * 0.1 }}
            className={cn("relative h-full", className)}
            style={{ perspective: 800 }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={whileHover}
                style={enableTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
                className={cn(
                    "group relative h-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors overflow-hidden",
                    !innerClassName?.includes("p-") && "p-8 md:p-12",
                    innerClassName
                )}
            >
                {/* Background Image Reveal */}
                {backgroundImage && (
                    <div
                        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ transform: "translateZ(-20px)" }}
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src={backgroundImage}
                                alt=""
                                fill
                                sizes="(min-width:1280px) 33vw, (min-width:1024px) 45vw, (min-width:768px) 50vw, 100vw"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/60" />
                        </div>
                    </div>
                )}

                <div style={{ transform: "translateZ(80px)" }} className="relative z-10 flex flex-col h-full">
                    {number && (
                        <span className="block font-mono text-sm tracking-widest text-white/50 mb-8">{number}</span>
                    )}

                    {Icon && (
                        <div className="mb-6 inline-flex rounded-full bg-white/5 p-4 w-fit">
                            <Icon className="h-6 w-6 text-white/80" />
                        </div>
                    )}

                    {title && <h3 className="mb-4 text-2xl md:text-3xl font-serif font-light text-white">{title}</h3>}
                    {description && <p className="text-white/70 font-light leading-relaxed flex-grow">{description}</p>}

                    {children}
                </div>
            </motion.div >
        </motion.div >
    )
}
