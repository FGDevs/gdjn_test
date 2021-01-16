const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  /* config on how webpack emits results */
  output: {
    // template bundle filenaming
    filename: "bundle.[fullhash].js",
  },
  ///////////////////////////////////////////////
  /* config on how webpack resolves modules */
  resolve: {
    // Add '.ts' and '.tsx' as resolvable ext.-s
    extensions: ["*", ".js", ".jsx"],
    // Set resolvable modules' dir
    modules: [__dirname, "src", "node_modules"],
  },
  ///////////////////////////////////////////////
  /* config on how webpack treats modules */
  module: {
    /* config on how to create module based on ext. */
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
        use: [
            'file-loader?name=assets/[name].[ext]'
        ]
      },
    ],
  },
  ///////////////////////////////////////////////
  /* config on what plugins used in webpack */
  plugins: [
    // HtmlWebpackPlugin ; to generate HTML along with the bundles
    new HtmlWebpackPlugin({
      // mirror html format while adding bundles
      template: "./src/index.html",
    }),
  ],
};

/* 
  DEFAULT PROPERTIES
  // entry: './src/index.js',
  // output: {
      path: path.resolve(__dirname, 'dist')
    }
*/
