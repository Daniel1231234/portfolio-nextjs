import { GoogleAnalyticsWrapper } from "@/analytics/GoogleAnalytics"
import "./globals.css"
import Providers from "@/components/Providers"
import { siteConfig } from "@/config"
import { Metadata } from "next"
import Footer from "@/components/Footer"
import { poppins } from "./fonts"

export const metadata: Metadata = siteConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-body"
    >
      <head>
        <GoogleAnalyticsWrapper />
      </head>
      <body className={` ${poppins.className} overflow-x-hidden bg-body`}>
        {children}
      </body>
    </html>
  )
}
