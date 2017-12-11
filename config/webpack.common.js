const config = {
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === "development" ? "inline-source-map" : "source-map"
};

module.exports = config;
