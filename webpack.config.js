var path = require('path');
var fs = require('fs');
var glob = require("glob");

var nodeModules = fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    });

module.exports = {
    entry: glob.sync("./test/node/*Spec.ts"),

    target:'node',
    debug: false,
    cache:true,

    output: {
        path: __dirname+"/tmp/",
        filename: "node_test_bundle.js"
    },

    node: {
        __dirname: true,
        __filename: true
    },

    externals: [
        function(context, request, callback) {
            var pathStart = request.split('/')[0];
            if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
                return callback(null, "commonjs " + request);
            };
            callback();
        }
    ],

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/},
            { test: /\.tsx?$/, loader: 'babel?presets[]=es2015!ts-loader!preprocess?+SERVER',exclude: /node_modules/}
        ]
    }
};