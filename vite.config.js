import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Ensure React plugin is included
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          ui: ["tailwindcss", "lucide-react"], // Adjust based on your dependencies
        },
      },
    },
    chunkSizeWarningLimit: 500, // Adjust if necessary
  },
});
