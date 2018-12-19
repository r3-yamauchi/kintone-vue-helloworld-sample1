const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    entry: "./src/entry.js"
  },
  output: {
    filename: "main.bundle.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],

  devtool: process.env.NODE_ENV === "development" ? "#inline-source-map" : false

};
