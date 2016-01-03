var webpack = require('webpack');
var path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "bin"),
    filename: 'bundle.js' // Template based on keys in entry above
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
    './src/A_Main.ts' // Your appʼs entry point
  ],
  devtool: '#eval',
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot!babel?presets[]=es2015!ts-loader!preprocess?+CLIENT'
      }
    ]
  }
}