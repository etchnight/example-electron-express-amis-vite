// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import { normalizePath } from "vite";

export default defineConfig({
  root: "./",
  publicDir: normalizePath(resolve(__dirname, "./public")),
  build: {
    outDir: "../dist/web",
    emptyOutDir: true,
  },
  //sourcemap: false,
});
