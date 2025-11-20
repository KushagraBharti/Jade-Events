export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      <div className="kolam-pattern absolute inset-0 opacity-20" />
      <div className="container relative mx-auto px-4 text-center md:px-6">
        <span className="font-mono text-sm tracking-widest text-primary">OUR SERVICES</span>
        <h1 className="mt-4 text-balance text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Tailored Decor for
          <span className="block font-semibold">Every Celebration</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty font-mono text-lg text-muted-foreground">
          From intimate gatherings to grand celebrations, we offer comprehensive decor packages designed to reflect your
          unique style and cultural heritage.
        </p>
      </div>
    </section>
  )
}
