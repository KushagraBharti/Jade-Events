export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      <div className="kolam-pattern absolute inset-0 opacity-20" />
      <div className="container relative mx-auto px-4 text-center md:px-6">
        <span className="font-mono text-sm tracking-widest text-primary">ABOUT US</span>
        <h1 className="mt-4 text-balance text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Where Tradition Meets
          <span className="block font-semibold">Modern Artistry</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty font-mono text-lg text-muted-foreground">
          Founded in 2019, Jade Events Decorations has been creating unforgettable celebrations that honor cultural
          heritage while embracing contemporary design.
        </p>
      </div>
    </section>
  )
}
