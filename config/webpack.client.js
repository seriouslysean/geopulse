const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: ".env"
  });
}

const config = {
  entry: ["babel-polyfill", path.resolve(__dirname, "..", "client", "src", "index.js")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "client", "public")
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                includePaths: [path.resolve(__dirname, "..", "node_modules")]
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env.GOOGLE_MAPS_API_KEY": JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
      "process.env.INSTAGRAM_API_TOKEN": JSON.stringify(process.env.INSTAGRAM_API_TOKEN),
      "process.env.WEATHER_UNDERGROUND_API_TOKEN": JSON.stringify(process.env.WEATHER_UNDERGROUND_API_TOKEN)
    })
  ]
};

module.exports = merge(common, config);
