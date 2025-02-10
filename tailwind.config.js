/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'], // تعریف فونت وزیری
      }
    },
    screens: {
      // Use max‑width breakpoints for mobile/tablet overrides:
      'md': {'max': '1023px'}, // Applies to screens 1023px and below (tablet and mobile)
      'sm': {'max': '767px'},  // Applies to screens 767px and below (mobile only)
    },
  },
  plugins: [],
}