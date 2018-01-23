const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },
  module: {
    rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM'
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};

module.exports = config;