var wallabyWebpack = require('wallaby-webpack');
var pp = require('preprocess');

var webpack = require('webpack');

var wallabyPostprocessor = wallabyWebpack({
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop')
    ]
});


module.exports = function (wallaby) {
    wallaby.defaults.files.load = false;
    wallaby.defaults.tests.load = false;

    return {
        files: [
            {pattern: '/../../src/**/*.ts*'}
        ],

        tests: [
            {pattern: '/test/browser/*Spec.ts'}
        ],

        preprocessors: {
            '**/*.js': function(file) {
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

        postprocessor: wallabyPostprocessor,

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