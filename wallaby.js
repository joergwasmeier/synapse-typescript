var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({
    entry: [
        './test/browser/mainSpec.ts' // Your appʼs entry point
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel?presets[]=es2015'] },
            { test: /\.tsx?$/, loader: 'babel?presets[]=es2015!ts-loader!preprocess?+CLIENT'}
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop')
    ]
});


module.exports = function (wallaby) {
    wallaby.defaults.files.load = false;
    wallaby.defaults.tests.load = false;

    return {
        files: [
            {pattern: 'src/**/*.ts*'}
        ],

        tests: [
            {pattern: 'test/browser/*Spec.ts'}
        ],

        preprocessors: {
            '**/*.js': function(file) {
                console.log(file.name);
                return require("babel-core").transform(file.content, {
                    sourceMap: true,
                    presets: ["es2015", "react"],
                    compact: false
                });
            },
            '**/*.ts': function(file) {
                return pp.preprocess(file.content, {CLIENT:true}, {type: 'ts'});
            }
        },

        debug:true,
        postprocessor: wallabyPostprocessor,

        // compilers: {
        //     '**/*.ts*': wallaby.compilers.typeScript()
        //  },

        env: {
            runner: require('phantomjs2-ext').path,
            params: { runner: '--web-security=false' }
        },

        testFramework: 'jasmine',

        setup: function () {
            window.__moduleBundler.loadTests();
        }
    }
};