/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        accent: 'var(--color-accent)',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/traveling-with-off-road-car.jpg')",
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
    variants: {
      extend: {
        transform: ['hover'],
      },
    },
  },
  plugins: [],
}

