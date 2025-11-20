import { Card } from "@/components/ui/card"
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
    <section className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-primary">OUR VALUES</span>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="border-border bg-card p-8 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
