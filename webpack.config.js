const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 진입점 설정
  entry: "./js/main.js",

  // 결과물을 반환하는 설정
  output: {
    // 절대 경로로 설정
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  // 모듈 처리 방식 설정
  module: {
    // 모듈의 조건(test)과 결과(use)에 해당하는 규칙 설정
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등의 다양한 플러그인 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // 개발용 서버 설정
  devServer: {
    host: "localhost",
  },
};
