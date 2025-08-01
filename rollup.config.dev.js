import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "rollup-plugin-json";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import copy from 'rollup-plugin-copy';  // 新增复制插件

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
      copy({
        targets: [
          { src: 'src/example/index.html', dest: 'dist' }  // 复制HTML到dist目录
        ],
         hook: 'buildEnd',  // 添加构建钩子
          copyOnce: false  // 启用持续复制
      }),
      livereload('dist'),
      serve({
        open: true,
        port: 8080,
        contentBase: 'dist',  // 修正基础目录
        headers: {
          'Access-Control-Allow-Origin': '*'  // 添加CORS头
        }
      }),
    ],
  },
];
