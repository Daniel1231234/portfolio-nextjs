import GoogleAnalytics from "@/analytics/GoogleAnalytics"
import "./globals.css"
import Providers from "@/cmps/Providers"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Daniel Shalem portfolio",
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
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
