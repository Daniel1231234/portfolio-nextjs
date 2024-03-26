import GoogleAnalytics, {
  GoogleAnalyticsWrapper,
} from "@/analytics/GoogleAnalytics"
import "./globals.css"
import Providers from "@/components/Providers"
import { Analytics } from "@vercel/analytics/react"
import { StarsCanvas } from "@/components/canvas"

export const metadata = {
  title: "Daniel Shalem",
  description:
    "Discover the work of Daniel Shalem, a skilled full-stack web developer, through his impressive portfolio website. Explore his projects, skills, and experience in web development and witness how he can bring your ideas to life with his expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <GoogleAnalyticsWrapper />
        <Providers>{children}</Providers>
        <Analytics debug={false} />
        <StarsCanvas />
      </body>
    </html>
  )
}
