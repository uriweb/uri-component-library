//var ExtractText = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

var plugins = [];

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  mode: debug ? 'development' : 'production',
  entry: './js/blocks/src/blocks.js',
  output: {
    path: __dirname + '/js/blocks/build/',
    filename: 'blocks.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
//       {
//         test: /editor\.scss$/,
//         exclude: /node_modules/,
//         use: extractEditorSCSS.extract(scssConfig)
//       },
//       {
//         test: /style\.scss$/,
//         exclude: /node_modules/,
//         use: extractBlockSCSS.extract(scssConfig)
//       }
    ]
  },
  plugins: plugins
};