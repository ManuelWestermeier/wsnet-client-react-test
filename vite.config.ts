import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/wsnet-client-react-test/docs/",
  build: { outDir: "docs" }
})
