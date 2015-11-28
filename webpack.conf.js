var webpack = require('webpack');
var path = require("path");

module.exports = {
  output: {
    filename: 'bundle.js' // Template based on keys in entry above
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080/src/', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/A_Main.ts' // Your appʼs entry point
  ],
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.tsx?$/, loaders: ['react-hot', 'babel-loader', 'ts-loader'], include: path.join(__dirname, 'src')}
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
