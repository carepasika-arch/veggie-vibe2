import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [netlify()],
  tanstackStart: {
    server: {
      entry: "server",
    },
    deployment: {
      preset: "netlify",
    },
  },
  vite: {
    build: {
      outDir: ".output",
      emptyOutDir: true,
    },
  },
});