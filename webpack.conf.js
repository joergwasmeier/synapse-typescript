var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry:'./src/A_Main.ts',
  output: {
    filename: 'bundle.js' // Template based on keys in entry above
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}


/*
entry: {
    main:'./src/app.tsx',
    feed:'./src/A_Main.ts',
    parent:'./src/A_Main.ts',
},
output: {
  path: 'dist',
  filename: '[name].js' // Template based on keys in entry above
},
*/
