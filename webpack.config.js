const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports = {
  /* config on how webpack emits results */
  output    : { 
    // template bundle filenaming
    filename: "bundle.[fullhash].js"
  }, 
  ///////////////////////////////////////////////
  /* config on how webpack resolves modules */
  resolve   : {
    // Add '.ts' and '.tsx' as resolvable ext.-s
    extensions: ["*", ".js", ".jsx"],
    // Set resolvable modules' dir
    modules   : [__dirname,"src","node_modules"]
  },
  ///////////////////////////////////////////////
  /* config on how webpack treats modules */
  module    : {
    /* config on how to create module based on ext. */
    rules     : [ 
      {
        test    : /\.jsx?$/,
        use     : ['babel-loader'] ,
        exclude : /node_modules/
      },
      {
        test    : /\.css$/,
        use     : ['style-loader', 'css-loader']
      },
      {
        test    : /\.png|svg|jpe?g|gif$/,
        use     : [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          },
          {
            loader: 'file-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  ///////////////////////////////////////////////
  /* config on what plugins used in webpack */
  plugins   : [ 
    // HtmlWebpackPlugin ; to generate HTML along with the bundles
    new HtmlWebpackPlugin({
      title: "Gadjian Test",
      template: './src/index.html'
    })
  ]
};

/* 
  DEFAULT PROPERTIES
  // entry: './src/index.js',
  // output: {
      path: path.resolve(__dirname, 'dist')
    }
*/