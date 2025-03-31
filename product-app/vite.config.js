import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "./src/ProductList.jsx",
      name: "ProductList",
      fileName: "product-list",
      formats: ["es"], // outputs product-list.js
    },
  },
});
