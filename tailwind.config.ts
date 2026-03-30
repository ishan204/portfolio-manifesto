import type { Config } from 'tailwindcss'

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        
  comic: ['var(--font-comic)', 'cursive'],
  bangers: ['var(--font-bangers)', 'cursive'],
  fira: ['var(--font-fira)', 'sans-serif'],

      },
      colors: {
        'comic-yellow': '#FFF000',
        'comic-blue': '#0066FF',
        'comic-red': '#FF0000',
        'comic-black': '#1a1a1a',
        'comic-cream': '#FFF8E7',
      },
      boxShadow: {
        'comic': '3px 3px 0 rgba(0, 0, 0, 1)',
        'comic-lg': '6px 6px 0 rgba(0, 0, 0, 1)',
      },
      textShadow: {
        'comic': '3px 3px 0 #0066FF',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
