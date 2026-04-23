/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        alabaster: "#FAFAFA",
        sultan: {
          gold: "#C5A059",
          emerald: "#064E3B",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        'scroll-descend': 'scroll-descend 2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-descend': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 50px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
