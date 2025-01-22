import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This creates an '@' alias pointing to your src directory
      "@": path.resolve(__dirname, "./src"),
      // You can add more aliases for specific directories
      "@forms": path.resolve(__dirname, "./src/components/Forms"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
