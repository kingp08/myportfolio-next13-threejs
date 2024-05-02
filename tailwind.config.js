/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#78B6FB",
        secondary: "#487DEC",
        tertiary: "#57DA3E",
        "black-100": "#050816",
        "white-100": "#F9F8FD",
      },
      boxShadow: {
        card0: "0px 16px 32px -16px #050816",
        card1: "0px 16px 32px -16px #F9F8FD",
        black : '0 0 4px 0 rgba(5, 8, 22, 0.15)',
        white : '0 0 4px 0 rgba(249, 248, 253, 0.15)',
        inset0: "1px 1px 3px 0px rgba(0, 0, 0, 0.25) inset, -1px -1px 3px 0px rgba(255, 255, 255, 0.25) inset;",
        inset1: "1px 1px 3px 0px rgba(186, 186, 186, 0.50) inset, -1px -1px 3px 0px rgba(255, 255, 255, 0.40) inset;"
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        // 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-pattern": "url('/assets/herobg.png')",
        "button-gradien": "linear-gradient(135deg, #2FB8FF 21.88%, #0084FE 100%)",
      },
    },
  },
  plugins: [],
}
