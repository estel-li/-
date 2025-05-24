/** @type {import('tailwindcss').Config} */
import tailwindConfig from './src/ui/tailwind.config.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [tailwindConfig]
}
