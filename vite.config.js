import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: '../dist'  // This ensures the dist folder is created in the project root
  },
  assetsInclude: ['**/*.PNG']
});