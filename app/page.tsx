import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { ContactSection } from "@/components/home/contact-section"
import { PortfolioLazy } from "@/components/home/portfolio-lazy"
import { TestimonialsLazy } from "@/components/home/testimonials-lazy"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <PortfolioLazy />
        <TestimonialsLazy />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
