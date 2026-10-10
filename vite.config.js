import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name so GitHub Pages finds the assets
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/',
})
