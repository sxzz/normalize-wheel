import { defineConfig } from "tsup";

export default defineConfig({
  sourcemap: true,
  clean: true,
  entryPoints: ["./src/index.js"],
  target: "es5",
  format: ["cjs", "esm", "iife"],
  minify: true,
});
