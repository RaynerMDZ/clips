/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  // safelist creates a list of dynamic classes to be injected dynamically.
  safelist: ['bg-blue-400', 'bg-green-400', 'bg-red-400'],
  theme: {
    extend: {},
  },
  plugins: [],
}
