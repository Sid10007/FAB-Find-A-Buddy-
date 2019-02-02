const webpack = require('webpack');

const config = {
  entry: __dirname + '/static/dist/js',
  output: {
    path: __dirname + '/server/static',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
module.exports = config;
