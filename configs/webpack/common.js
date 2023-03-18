// shared config (dev and prod)
const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", "public"],
  },
  context: path.resolve(__dirname, "../../src/"),
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  performance: {
    hints: false,
  },
};
