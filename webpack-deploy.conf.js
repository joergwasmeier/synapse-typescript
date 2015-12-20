var webpack = require('webpack');
var path = require("path");

module.exports = {
  output: {
    filename: 'bin/bundle.js' // Template based on keys in entry above
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  entry: [
    './src/A_Main.ts'
  ],
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.tsx?$/, loader: "babel-loader!ts-loader!preprocess?+CLIENT", include: path.join(__dirname, 'src')}
    ]
  }
}