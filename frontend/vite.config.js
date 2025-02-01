import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ensures assets are loaded relative to the current path
  plugins: [react()],
})
