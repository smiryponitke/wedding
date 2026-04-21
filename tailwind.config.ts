import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#f2e8e4',
        'wedding-cream': '#f5f4f2',
        'wedding-dark': '#1a1a1a',
        'wedding-text': '#333333',
        'wedding-muted': '#666666',
        'wedding-border': '#e0e0e0',
        'dress-beige': '#C8B8A2',
        'dress-gray': '#D0D5D8',
        'dress-sage': '#8FAF8C',
        'dress-green': '#2D5A27',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
