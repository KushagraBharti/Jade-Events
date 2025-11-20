"use client"

import dynamic from "next/dynamic"
import { LazySection } from "@/components/lazy-section"

const TestimonialsSection = dynamic(() => import("./testimonials-section").then((m) => m.TestimonialsSection), {
  ssr: false,
  loading: () => null,
})

export function TestimonialsLazy() {
  return (
    <LazySection minHeight="100vh" className="bg-black">
      <TestimonialsSection />
    </LazySection>
  )
}
