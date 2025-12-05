import { TiltCard } from "@/components/ui/tilt-card"
import { Heart, Palette, Users, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Cultural Authenticity",
    description:
      "We honor traditional South Asian aesthetics and rituals, ensuring every element is culturally meaningful and respectful.",
  },
  {
    icon: Palette,
    title: "Craftsmanship",
    description:
      "Every detail is thoughtfully designed and meticulously executed. We believe in quality over quantity, always.",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description:
      "As a small studio, we work directly with every client. Your vision becomes our mission, and your celebration becomes personal to us.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "While rooted in tradition, we embrace contemporary design principles to create spaces that feel fresh, elegant, and timeless.",
  },
]

export function ValuesSection() {
  return (
    <section className="w-full bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-white/50">OUR VALUES</span>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-white md:text-5xl">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            return (
              <TiltCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                enableTilt={false}
                whileHover={{ borderColor: "rgba(255,255,255,0.8)", backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
