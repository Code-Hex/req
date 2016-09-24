var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:  [path.join(__dirname, '../index.jsx')],
  output: {
    path: path.join(__dirname, '../../assets/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}