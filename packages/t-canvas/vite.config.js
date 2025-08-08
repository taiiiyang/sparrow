import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "@TRender/t-canvas",
      fileName: (format) => {
        if (format === "es") return "esm/index.js";
        if (format === "cjs") return "lib/index.js";
        return `dist/index.min.js`;
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
