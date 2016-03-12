var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    debug: true,
    //devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/},
            {
                test: /\.tsx?$/,
                loader: 'babel?presets[]=es2015!ts-loader!preprocess?+CLIENT',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
    ]
};