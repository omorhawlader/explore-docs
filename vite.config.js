import path from "path"
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), {
    name: "vite-plugin-markdown",
    transform(code, id) {
      if (/\.(md)$/.test(id) || /\.(html)$/.test(id)) {
        return `export default ${JSON.stringify(code)}`
      }
    }
  }],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
