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
    default: "Jade Events Decorations | Premium South Asian Event Decor in Frisco, DFW",
    template: "%s | Jade Events Decorations",
  },
  description:
    "Premium South Asian event decor studio crafting immersive birthdays, weddings, and traditional celebrations across Frisco and the greater DFW area.",
  keywords: [
    "South Asian event decor",
    "DFW wedding decor",
    "Frisco event styling",
    "Jade Events Decorations",
    "luxury event design",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Jade Events Decorations | Premium South Asian Event Decor in Frisco, DFW",
    description:
      "Premium South Asian event decor studio crafting immersive birthdays, weddings, and traditional celebrations across Frisco and the greater DFW area.",
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
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
