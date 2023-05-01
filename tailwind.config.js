/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/cmps/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: '20px',
        sm: '24px',
        md: '24px',
        lg: '40px',
        xl: '80px',
      },
      maxWidth: {
        DEFAULT: '1500px',
        '2xl': '1760px',
      }
    },
    extend: {
      colors: {
        body:'#1f1f38',
        card:'#4c4c9f',
        primary:'#4db5ff',
        			// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(white ,#1f1f38 4px,#1f1f38 100px);",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
