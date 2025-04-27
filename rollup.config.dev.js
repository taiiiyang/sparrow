import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "rollup-plugin-json";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

export default [
  {
    input: "./src/example/index.js",
    output: [
      {
        name: "W",
        file: "./dist/example.html",
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      json(), // so Rollup can read file `.json`
      livereload(),
      serve({
        open: true,
        port: 8080,
        contentBase: "",
      }),
    ],
  },
];
