import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
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
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="group flex items-center gap-2 text-lg font-light hover:text-primary transition-colors">
                    Home
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group flex items-center gap-2 text-lg font-light hover:text-primary transition-colors">
                    Services
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="group flex items-center gap-2 text-lg font-light hover:text-primary transition-colors">
                    About Us
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">Connect</h3>
              <ul className="space-y-4 text-background/80 font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary mt-1" />
                  <span>Frisco, TX (DFW Area)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span>hello@jadeevents.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="font-mono text-xs text-background/40">
            &copy; {new Date().getFullYear()} Jade Events Decorations. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
