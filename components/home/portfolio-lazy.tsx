"use client"

import dynamic from "next/dynamic"
import { LazySection } from "@/components/lazy-section"

const PortfolioSection = dynamic(() => import("./portfolio-section").then((m) => m.PortfolioSection), {
  ssr: false,
  loading: () => null,
})

export function PortfolioLazy() {
  return (
    <LazySection minHeight="300vh" className="bg-black">
      <PortfolioSection />
    </LazySection>
  )
}
