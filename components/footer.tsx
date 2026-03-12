import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { whatsappPhoneNumber } from "@/lib/site-assets"

export function Footer() {
  const formattedPhoneNumber = `(${whatsappPhoneNumber.slice(1, 4)}) ${whatsappPhoneNumber.slice(4, 7)}-${whatsappPhoneNumber.slice(7)}`
  const emailAddress = "hello@jadeevents.com"

  return (
    <footer className="bg-foreground pt-24 pb-12 text-background selection:bg-jade-gold selection:text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 mb-24">
          {/* Brand & Tagline */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-serif font-light tracking-tight">Jade Events</span>
              <span className="text-sm font-mono tracking-[0.3em] text-background/60 uppercase mt-2">Decorations</span>
            </div>
            <p className="max-w-md text-lg font-light text-background/80 leading-relaxed">
              Crafting immersive South Asian celebrations with elegance, tradition, and a touch of modern luxury across Frisco and DFW.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:-mt-2">
            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" prefetch className="group inline-flex items-center gap-2 text-lg font-light text-background/78 transition-colors duration-300 hover:text-jade-gold focus-visible:text-jade-gold">
                    Home
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 text-jade-gold/80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link href="/services" prefetch className="group inline-flex items-center gap-2 text-lg font-light text-background/78 transition-colors duration-300 hover:text-jade-gold focus-visible:text-jade-gold">
                    Services
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 text-jade-gold/80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" prefetch className="group inline-flex items-center gap-2 text-lg font-light text-background/78 transition-colors duration-300 hover:text-jade-gold focus-visible:text-jade-gold">
                    About Us
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 text-jade-gold/80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:translate-x-0" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Connect</h3>
              <div className="space-y-1.5">
                <div
                  className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-background/80"
                  data-cursor="native"
                >
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
                  <div className="space-y-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/35">Location</p>
                    <p className="font-light leading-relaxed select-text">Frisco, TX (DFW Area)</p>
                  </div>
                </div>

                <a
                  href={`tel:${whatsappPhoneNumber}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-background/74 transition-all duration-300 hover:border-jade-gold/35 hover:bg-jade-gold/8 hover:text-jade-gold focus-visible:border-jade-gold/35 focus-visible:bg-jade-gold/8 focus-visible:text-jade-gold"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-[18px] w-[18px] shrink-0 text-primary transition-colors duration-300 group-hover:text-jade-gold group-focus-visible:text-jade-gold" />
                    <div className="space-y-0 text-left">
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/35 transition-colors duration-300 group-hover:text-jade-gold/70 group-focus-visible:text-jade-gold/70">
                        Call
                      </p>
                      <p className="font-light">{formattedPhoneNumber}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-jade-gold/75 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100" />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-background/74 transition-all duration-300 hover:border-jade-gold/35 hover:bg-jade-gold/8 hover:text-jade-gold focus-visible:border-jade-gold/35 focus-visible:bg-jade-gold/8 focus-visible:text-jade-gold"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-[18px] w-[18px] shrink-0 text-primary transition-colors duration-300 group-hover:text-jade-gold group-focus-visible:text-jade-gold" />
                    <div className="space-y-0 text-left">
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/35 transition-colors duration-300 group-hover:text-jade-gold/70 group-focus-visible:text-jade-gold/70">
                        Email
                      </p>
                      <p className="font-light">{emailAddress}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-jade-gold/75 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100" />
                </a>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <a
                    href="https://www.instagram.com/weddingsbyjade/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-background/70 transition-all duration-300 hover:border-jade-gold/35 hover:bg-jade-gold/8 hover:text-jade-gold focus-visible:border-jade-gold/35 focus-visible:bg-jade-gold/8 focus-visible:text-jade-gold"
                    aria-label="Instagram"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="h-[18px] w-[18px] shrink-0" />
                      <div className="space-y-0 text-left">
                        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/35 transition-colors duration-300 group-hover:text-jade-gold/70 group-focus-visible:text-jade-gold/70">
                          Social
                        </p>
                        <p className="font-light">Instagram</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-jade-gold/75 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100" />
                  </a>

                  <a
                    href="https://www.facebook.com/Jadeeventdecorations/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2.5 text-background/70 transition-all duration-300 hover:border-jade-gold/35 hover:bg-jade-gold/8 hover:text-jade-gold focus-visible:border-jade-gold/35 focus-visible:bg-jade-gold/8 focus-visible:text-jade-gold"
                    aria-label="Facebook"
                  >
                    <div className="flex items-center gap-2.5">
                      <Facebook className="h-[18px] w-[18px] shrink-0" />
                      <div className="space-y-0 text-left">
                        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/35 transition-colors duration-300 group-hover:text-jade-gold/70 group-focus-visible:text-jade-gold/70">
                          Social
                        </p>
                        <p className="font-light">Facebook</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-jade-gold/75 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="font-mono text-xs text-background/40">
            &copy; {new Date().getFullYear()} Jade Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
