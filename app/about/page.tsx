import { PageShell } from "@/components/effects/page-shell"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <PageShell>
      <main className="flex-1 soft-snap">
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
    </PageShell>
  )
}
