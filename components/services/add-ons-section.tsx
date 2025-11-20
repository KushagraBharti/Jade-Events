import { Card } from "@/components/ui/card"
import { Sparkles, Flower2, Lightbulb, Camera, Music, Utensils } from "lucide-react"

const addOns = [
  {
    icon: Flower2,
    name: "Premium Florals",
    description: "Exotic flowers and custom arrangements",
    price: "From $300",
  },
  {
    icon: Lightbulb,
    name: "Enhanced Lighting",
    description: "Uplighting, string lights, and specialty effects",
    price: "From $400",
  },
  {
    icon: Sparkles,
    name: "Luxury Draping",
    description: "Ceiling drapes and fabric installations",
    price: "From $500",
  },
  {
    icon: Camera,
    name: "Photo Booth Setup",
    description: "Themed backdrop with props",
    price: "From $350",
  },
  {
    icon: Music,
    name: "Stage Design",
    description: "Custom stage decor for performances",
    price: "From $600",
  },
  {
    icon: Utensils,
    name: "Table Styling",
    description: "Premium linens, chargers, and place settings",
    price: "From $250",
  },
]

export function AddOnsSection() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Enhance Your Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty font-mono text-muted-foreground">
            Add these premium services to any package for a truly unforgettable event
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addOn, index) => {
            const Icon = addOn.icon
            return (
              <Card key={index} className="border-border bg-card p-6 transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{addOn.name}</h3>
                <p className="mb-3 font-mono text-sm text-muted-foreground">{addOn.description}</p>
                <p className="font-mono text-sm font-semibold text-primary">{addOn.price}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
