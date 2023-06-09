import "./globals.css";
import Providers from "@/cmps/Providers";

export const metadata = {
  title: "Daniel Shalem portfolio",
  description:
    "Discover the work of Daniel Shalem, a skilled full-stack web developer, through his impressive portfolio website. Explore his projects, skills, and experience in web development and witness how he can bring your ideas to life with his expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
