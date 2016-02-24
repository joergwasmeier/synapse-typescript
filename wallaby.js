var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var wallabyPostprocessor = wallabyWebpack({
    entryPatterns: [
        "test/mainSpec.js*"
    ],

    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader',exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
});


module.exports = function (wallaby) {
    wallaby.defaults.files.load = false;
    wallaby.defaults.tests.load = false;

    return {
        files: [
            {pattern: 'src/**/*.ts*'},
            {pattern: 'src/**/*.less'}
        ],

        tests: [
            {pattern: 'test/*Spec.ts'}
        ],

        preprocessors: {
            '**/*.js': function(file) {
                return require("babel-core").transform(file.content, {
                    sourceMap: true,
                    presets: ["es2015", "react"],
                    compact: false
                });
            },
            'src/**/*.ts': function(file) {
                return pp.preprocess(file.content, {CLIENT:true}, {type: 'ts'});
            },
        },

        postprocessor: wallabyPostprocessor,

        compilers: {
            '**/*.ts*': wallaby.compilers.typeScript()
        },

        env: {
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },

        setup: function () {
            window.__moduleBundler.loadTests();
        }
    }
};