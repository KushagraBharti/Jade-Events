export function StorySection() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/two-people-working-on-event-decoration-setup.jpg"
              alt="Jade Events team at work"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="font-mono text-sm tracking-widest text-primary">OUR STORY</span>
              <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
                A Passion for
                <span className="block font-semibold">Meaningful Celebrations</span>
              </h2>
            </div>

            <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
              <p>
                Jade Events Decorations was born from a simple observation: many South Asian families in the DFW area
                were searching for decor services that truly understood their cultural traditions while offering the
                sophistication of modern design.
              </p>
              <p>
                Founded in 2019 by two friends with a shared passion for event design and cultural authenticity, we set
                out to fill this gap. What started as a small operation working out of a garage has grown into a trusted
                name for premium event decor across the Frisco and DFW area.
              </p>
              <p>
                Today, we're proud to have created memorable experiences for hundreds of families, from intimate
                birthday celebrations to grand wedding festivities. Each event is an opportunity to blend the rich
                traditions of South Asian culture with contemporary aesthetics that reflect our clients' unique
                personalities.
              </p>
              <p>
                We remain a boutique, two-person studio by choice—it allows us to maintain the personal touch and
                attention to detail that our clients have come to expect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
