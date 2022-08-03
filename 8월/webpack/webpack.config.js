const path = require("path");
// css 최적화 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 번들링된 모듈들 참조하는 html 파일 자동 빌드해주는 플러그인
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "development",
      filename: "index.html",
    }),
  ],
  performance: { hints: false },
  devServer: {
    static: "./dist",
  },
  mode: "production",
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 안쓰는 빌드파일 삭제
    assetModuleFilename: "asset/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        // .css로 끝나는 모든 파일은 css-loader에 전달된다. 그 후 style-loader에 의해 자바스크립트로 전환된다.
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    runtimeChunk: "single",
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
