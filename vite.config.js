import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/** @type {import('tailwindcss').Config} */


// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [react(),  tailwindcss(),],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  }
  
})
