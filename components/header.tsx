"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"
      }`}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-[99999]">
        {/* Logo */}
        <div className="relative z-[99999]">
          <Link 
            href="/" 
            className="group flex flex-col pointer-events-auto cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-white group-hover:text-jade-gold transition-colors duration-300">
              JADE <span className="italic font-light">EVENTS</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 relative z-[99999]">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover="hover" initial="initial" className="relative">
              <Link
                href={link.href}
                className="relative text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white transition-colors block py-2 cursor-pointer"
              >
                {link.name}
              </Link>
              <motion.span
                className="absolute bottom-1 left-0 h-[1px] bg-jade-gold pointer-events-none"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
          <motion.div whileHover="hover" whileTap={{ scale: 0.95 }} className="relative overflow-hidden group/inquire">
            <Link
              href="/#contact"
              className="px-6 py-2 bg-white text-black text-xs font-mono tracking-widest uppercase block cursor-pointer relative"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover/inquire:text-white">Inquire</span>
              <motion.span
                className="absolute inset-0 bg-jade-gold"
                initial={{ x: "-101%" }}
                variants={{
                  hover: { x: 0 }
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 relative z-[99999] pointer-events-auto cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99998] bg-black flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-4xl font-serif font-light tracking-widest text-white hover:text-jade-gold transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 px-12 py-4 border border-jade-gold text-jade-gold font-mono tracking-widest uppercase hover:bg-jade-gold hover:text-black transition-all duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}