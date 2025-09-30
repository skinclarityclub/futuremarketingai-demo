/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#050814',
        'bg-surface': '#0A0E27',
        'accent-primary': '#00D4FF',
        'accent-secondary': '#A855F7',
        'success': '#00FF88',
        'warning': '#FFA500',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
