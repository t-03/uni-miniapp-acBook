"use strict";
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "小账簿";

module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$/,
        threshold: 10240, // 仅处理大于此大小的文件。以字节为单位。
        minRatio: 0.8,
      }),
    ],
  },
  chainWebpack(config) {
    // 它可以提高第一屏的速度，建议打开预加载
    // config.plugins.delete('preload');

    // 当有很多页面时，会导致太多无意义的请求
    config.plugins.delete("prefetch");

    // 发行或运行时启用了压缩时会生效
    config.optimization.minimizer("terser").tap((args) => {
      const compress = args[0].terserOptions.compress;
      // "__f__" App 平台 vue 移除日志代码
      // 非 App 平台移除 console 代码
      // (包含所有 console 队形方法，如 assert,clear,count,error,group,groupCollapsed,groupEnd,info,log,table,time,timeEnd,trace,warn)
      compress.drop_console = true;
      compress.pure_funcs = [
        "__f__", // App 平台 vue 移除日志代码
        "console.error",
        "console.log",
      ];
      return args;
    });
  },
};
