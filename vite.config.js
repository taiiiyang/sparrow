import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src/example"),
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "sparrow",
      fileName: (format) => {
        if (format === "es") return "esm/sparrow.js";
        if (format === "cjs") return "lib/sparrow.js";
        return `dist/sparrow.min.js`;
      },
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
