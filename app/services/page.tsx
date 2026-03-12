import { PageShell } from "@/components/effects/page-shell"
import { ServicesHero } from "@/components/services/services-hero"
import { PackagesSection } from "@/components/services/packages-section"
import { AddOnsSection } from "@/components/services/add-ons-section"

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="flex-1 soft-snap">
        <ServicesHero />
        <PackagesSection />
        <AddOnsSection />
      </main>
    </PageShell>
  )
}
