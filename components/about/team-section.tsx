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
              <div className="relative aspect-[3/4] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(180deg,_rgba(22,22,22,0.9),_rgba(8,8,8,1))]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%,transparent_100%),linear-gradient(0deg,transparent_0,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%,transparent_100%)] opacity-40" />
                <div className="absolute inset-6 border border-dashed border-white/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/35">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Photo</span>
                  </div>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
                    Headshot Placeholder
                  </p>
                  <p className="mt-2 max-w-[18rem] font-mono text-xs leading-relaxed text-white/30">
                    Swap this panel with Aparna&apos;s portrait once the final image is ready.
                  </p>
                </div>
                <div className="absolute left-4 top-4 border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">Creative Direction</span>
                </div>
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
              <div className="relative aspect-[3/4] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(180deg,_rgba(22,22,22,0.9),_rgba(8,8,8,1))]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%,transparent_100%),linear-gradient(0deg,transparent_0,transparent_48%,rgba(255,255,255,0.08)_49%,rgba(255,255,255,0.08)_51%,transparent_52%,transparent_100%)] opacity-40" />
                <div className="absolute inset-6 border border-dashed border-white/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/35">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Photo</span>
                  </div>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
                    Headshot Placeholder
                  </p>
                  <p className="mt-2 max-w-[18rem] font-mono text-xs leading-relaxed text-white/30">
                    Swap this panel with Nathan&apos;s portrait once the final image is ready.
                  </p>
                </div>
                <div className="absolute left-4 top-4 border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">Production Lens</span>
                </div>
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
