var webpack = require('webpack');
var path = require("path");

module.exports = {
  output: {
    filename: 'bin/server.js' // Template based on keys in entry above
  },
  target:'node',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  entry: [
    './src/S_Main.ts' // Your appʼs entry point
  ],
  devtool: '#eval',
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.tsx?$/, loader: 'babel-loader!ts-loader!preprocess?+SERVER', include: path.join(__dirname, 'src')}
    ]
  }
}