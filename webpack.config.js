const webpack = require('webpack');

const config = {
  entry: {
    home: __dirname + '/static/dist/js/index1.js',
    entry: __dirname + '/static/dist/js/index.js',
    entry2: __dirname + '/static/dist/js/index0.js',
    main: __dirname + '/static/dist/js/index2.js'
  },
  output: {
    path: __dirname + '/server/static',
    filename: '[name]/build/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
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
