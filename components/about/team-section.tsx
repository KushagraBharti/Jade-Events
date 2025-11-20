import Image from "next/image"
import { Card } from "@/components/ui/card"

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

export function TeamSection() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-primary">MEET THE TEAM</span>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            The Creative Minds Behind
            <span className="block font-semibold">Jade Events</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card className="overflow-hidden border-border bg-card">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Co-founder"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-foreground">Nathan Vempala</h3>
              <p className="mt-1 font-mono text-sm text-primary">Co-Founder & Creative Director</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
                With a background in interior design and a passion for South Asian traditions, Nathan brings artistic
                vision and cultural depth to every project.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-card">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Co-founder"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-foreground">Nathan Vempala</h3>
              <p className="mt-1 font-mono text-sm text-primary">Co-Founder & Operations Lead</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
                Nathan's expertise in event logistics and client relations ensures seamless execution and exceptional
                service for every celebration.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
