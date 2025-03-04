import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import assets from 'vite-plugin-assets'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),assets()],
})

