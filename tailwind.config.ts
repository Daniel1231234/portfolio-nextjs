import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "24px",
        md: "24px",
        lg: "40px",
        xl: "80px",
      },
      screens: {
        DEFAULT: "1500px",
        "2xl": "1760px",
      },
    },
    extend: {
      colors: {
        body: "#0F172A",
        card: "#100d25",
        mainDark: "#050816",
        mainLight: "#aaa6c3",
        tertiary: "#151030",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        hero: "url('/herobg.png')",
        sophie: "url('/images/sophie.png')",
        trade: "url('/images/trades.png')",
        bmg: "url('/images/bmyguest.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
} satisfies Config

export default config
