import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/vercel/path0/client/src/main.jsx']
      // Add any other external modules if needed
    },
  },
})
