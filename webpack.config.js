const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true
  },
  devtool: 'source-map'
};