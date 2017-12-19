const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "handlebars" : 'handlebars/dist/handlebars.js'
    }
  },

  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/only-dev-server",
    "./src/index.tsx"
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    hot:         true, // enable HMR on the server
    contentBase: resolve(__dirname, "public"), // match the output path
    publicPath:  "/" // match the output `publicPath`
  },

  module: {
    rules: [
      { test: /\.js$/, loader: "source-map-loader"},
      { test: /\.tsx?$/, loader: "awesome-typescript-loader"}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  node:{
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};