import { PageShell } from "@/components/effects/page-shell"
import { HeroSection } from "@/components/home/hero-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <PageShell>
      <main className="flex-1 soft-snap">
        <HeroSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </PageShell>
  )
}
