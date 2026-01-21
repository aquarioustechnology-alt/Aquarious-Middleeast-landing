import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
})

export const metadata: Metadata = {
  title: "Aquarious Technology | Custom Software Development & AI Automation Services",
  description:
    "Transform your business with expert software development, AI automation, web & mobile app development. Aquarious Technology delivers scalable digital solutions with 600+ successful projects across 25+ industries.",
  keywords: [
    "software development",
    "AI automation",
    "web development",
    "mobile app development",
    "custom software solutions",
    "digital transformation",
    "cloud infrastructure",
    "staff augmentation",
    "enterprise software",
    "business automation",
    "software consulting",
    "dedicated development team",
    "software outsourcing",
    "agile development",
    "DevOps services",
  ],
  authors: [{ name: "Aquarious Technology" }],
  creator: "Aquarious Technology",
  publisher: "Aquarious Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://usa.theaquarious.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aquarious Technology | Custom Software Development & AI Automation",
    description:
      "Expert software design and development services. We build custom solutions for every project with 600+ successful deliveries across 25+ industries.",
    url: "https://usa.theaquarious.com",
    siteName: "Aquarious Technology",
    images: [
      {
        url: "/images/OG-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aquarious Technology - Custom Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquarious Technology | Custom Software Development & AI Automation",
    description:
      "Transform your business with expert software development, AI automation, and digital solutions. 600+ successful projects delivered.",
    images: ["/images/OG-image.jpg"],
    creator: "@aquarioustech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual Google Search Console verification code
  },
  category: "technology",
  applicationName: "Aquarious Technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
