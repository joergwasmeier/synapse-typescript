var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

var path = require('path');
var fs = require('fs');
var nodemon = require('nodemon');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

// frontend
var frontendConfig = {
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js' // Template based on keys in entry above
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/A_Main.ts' // Your appʼs entry point
    ],
    devtool: '#eval',
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.ts$/, loader: 'react-hot!babel-loader!ts-loader!preprocess?+CLIENT'},
            { test: /\.tsx$/, loader: 'react-hot!babel-loader!ts-loader!preprocess?+CLIENT', include: path.join(__dirname, 'src')}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

var backendConfig = {
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
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.tsx?$/, loader: 'babel-loader!ts-loader!preprocess?+SERVER', include: path.join(__dirname, 'src')}
        ]
    },
    externals: nodeModules
};

function onBuild(done) {
    return function(err, stats) {
        if(err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }

        if(done) {
            done();
        }
    }
}

gulp.task('frontend-build', function(done) {
    webpack(frontendConfig).run(onBuild(done));
});


gulp.task('frontend-watch', function() {
    new WebpackDevServer(webpack(frontendConfig), {
        hot: true,
        inline: true
    }).listen(8080, "localhost", function(err) {
        console.log(err);
    });
});

gulp.task('backend-build', function(done) {
    webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend-watch', function() {
    webpack(backendConfig).watch(100, function(err, stats) {
        onBuild()(err, stats);
        nodemon.restart();
    });
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['backend-watch','frontend-watch']);

gulp.task('run', ['backend-watch', 'frontend-watch'], function() {
    nodemon({
        execMap: {
            js: 'node'
        },
        script: path.join(__dirname, "bin/server.js"),
        ignore: ['*'],
        watch: ['foo/'],
        ext: 'noop'
    }).on('restart', function() {
        console.log('Restarted!');
    });
});