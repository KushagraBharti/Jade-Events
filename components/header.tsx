"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"

const navItems = [
  { href: "/", label: "Home", prefetch: false },
  { href: "/services", label: "Services", prefetch: true },
  { href: "/about", label: "About", prefetch: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full mix-blend-difference text-white"
    >
      <nav className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        <Link href="/" className="group" aria-label="Navigate to home">
          <motion.div className="flex flex-col" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <span className="text-3xl font-serif font-bold tracking-tighter">JADE</span>
          </motion.div>
        </Link>

        <div className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} isActive={pathname === item.href} prefetch={item.prefetch}>
              {item.label}
            </NavLink>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-none px-8 h-12 text-xs tracking-[0.2em] uppercase font-bold">
              <Link href="/#contact">Book Now</Link>
            </Button>
          </motion.div>
        </div>

        <motion.button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-8 w-8" />
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black text-white md:hidden flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navItems.map((item, i) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  index={i}
                  prefetch={item.prefetch}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-10 py-6 text-sm tracking-widest uppercase">
                  <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({
  href,
  isActive,
  children,
  prefetch,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
  prefetch?: boolean
}) {
  return (
    <Link href={href} prefetch={prefetch} className="relative group overflow-hidden">
      <span className={`block text-sm font-medium tracking-widest uppercase transition-transform duration-500 group-hover:-translate-y-full ${isActive ? "text-white" : "text-white/70"}`}>
        {children}
      </span>
      <span className="absolute top-0 left-0 block text-sm font-medium tracking-widest uppercase transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white">
        {children}
      </span>
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  index,
  prefetch,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
  index: number
  prefetch?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        prefetch={prefetch}
        className="text-5xl font-serif font-light tracking-tight hover:italic transition-all"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}
