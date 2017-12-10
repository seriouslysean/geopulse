const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: ".env"
  });
}

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: ["babel-polyfill", "./client/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
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
                  includePaths: [path.resolve(__dirname, "node_modules")]
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
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.WEATHER_UNDERGROUND_API_TOKEN": JSON.stringify(process.env.WEATHER_UNDERGROUND_API_TOKEN),
        "process.env.INSTAGRAM_API_TOKEN": JSON.stringify(process.env.INSTAGRAM_API_TOKEN)
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};
