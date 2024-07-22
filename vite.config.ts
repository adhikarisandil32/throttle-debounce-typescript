import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://dummyjson.com/",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, ""), //remove /api/ from the request because dummyjson api doesn't have that
      },
    },
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
})
