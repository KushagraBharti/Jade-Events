import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Jade Events | Premium Event Decor & Styling",
    template: "%s | Jade Events",
  },
  description:
    "Jade Events delivers exceptional event functions and wedding design services to private clients. We create immersive experiences tailored to your unique vision.",
  keywords: [
    "Jade Events",
    "Event Decor",
    "Wedding Design",
    "Frisco Event Styling",
    "Luxury Event Design",
    "South Asian Weddings",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Jade Events | Premium Event Decor & Styling",
    description:
      "Jade Events delivers exceptional event functions and wedding design services to private clients. We create immersive experiences tailored to your unique vision.",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
