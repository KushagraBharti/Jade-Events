import { TiltCard } from "@/components/ui/tilt-card"

export function TeamSection() {
  return (
    <section className="w-full bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-white/50">MEET THE TEAM</span>
          <h2 className="mt-4 text-balance text-4xl font-light tracking-tight text-white md:text-5xl">
            The Creative Minds Behind
            <span className="block font-semibold">Jade Events</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <TiltCard
            innerClassName="p-0"
            index={0}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            enableTilt={false}
          >
            <div className="flex flex-col h-full">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/placeholder.svg?height=600&width=450"
                  alt="Aparna Jetty"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white">Aparna Jetty</h3>
                <p className="mt-1 font-mono text-sm text-white/60">Founder & Creative Director</p>
                <p className="mt-4 font-mono text-sm leading-relaxed text-white/70">
                  A Civil Engineer turned visionary designer, Aparna founded Jade Events with an intuitive understanding that the future lies in exceptional design. Her technical background blends seamlessly with her artistic flair, allowing her to craft structurally sound yet visually breathtaking event experiences.
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard
            innerClassName="p-0"
            index={1}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            enableTilt={false}
          >
            <div className="flex flex-col h-full">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=450"
                  alt="Nathan Vempala"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white">Nathan Vempala</h3>
                <p className="mt-1 font-mono text-sm text-white/60">Co-Founder & Operations Lead</p>
                <p className="mt-4 font-mono text-sm leading-relaxed text-white/70">
                  Nathan's expertise in event logistics and client relations ensures seamless execution and exceptional
                  service for every celebration.
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
