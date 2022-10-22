/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marqueeMB: 'marquee 20s linear infinite'

      },
      keyframes: {
        marquee: {
          '54%': {
            transform: 'translateX(-50%)'
          },
          '250%': {
            transform: 'translateX(50%)'
          }
        },
        marqueeMB: {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(50%)'
          },
          '200%': {
            transform: 'translateX(-50%)'
          }
        }

      }
    },
    plugins: []
  }
}
