import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["5173-sanjay194-cms-project3-byhzcy2ith.app.codeanywhere.com"],
  },
  plugins: [react(),tailwindcss()]
})
