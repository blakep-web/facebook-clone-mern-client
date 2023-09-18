import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
      widgets: "/src/widgets",
      components: "/src/components"
    }
  },
  plugins: [react()],
})
