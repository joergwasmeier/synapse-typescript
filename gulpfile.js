var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

var path = require('path');
var fs = require('fs');
var nodemon = require('nodemon');

//var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;


var nodeModules = fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    });

// frontend
var frontendConfig = {
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js' // Template based on keys in entry above
    },
    cache: true,
    debug: false,
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    entry: [
        './src/A_Main.ts' // Your appʼs entry point
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel?presets[]=es2015'] },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader',exclude: /node_modules/},
            { test: /\.tsx?$/, loader: 'babel?presets[]=es2015!ts-loader!preprocess?+CLIENT',exclude: /node_modules/}
        ]
    }
};

var backendConfig = {
    entry: [
        //'webpack/hot/signal.js',
        './src/S_Main.ts' // Your appʼs entry point
    ],
    target:'node',
    debug: false,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js'
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
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    recordsPath: path.join(__dirname, 'build/_records'),
    quiet: false,
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/},
            { test: /\.tsx?$/, loader: 'babel?presets[]=es2015!ts-loader!preprocess?+SERVER',exclude: /node_modules/}
        ]
    }
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
    var myConfig = frontendConfig;

    myConfig.plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ];

    webpack(myConfig).run(onBuild(done));
});


gulp.task('frontend-watch', function() {
    new WebpackDevServer(webpack(frontendConfig), {
        publicPath: '/',

        // Configure hot replacement
        hot: true,

        // The rest is terminal configurations
        quiet: false,
        noInfo: false,
        stats: {
            colors: true
        }

    }).listen(8080, "localhost", function(err) {
        console.log(err);
    });
});

gulp.task('backend-build', function(done) {
    webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend-watch', function(done) {
    var firedDone = false;
    webpack(backendConfig).watch(100, function(err, stats) {
        console.log(err);
        if(!firedDone) {
            firedDone = true;
            done();
        }
        //console.log(nodemon);
        nodemon.restart();
    });
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['backend-watch','frontend-watch']);

gulp.task('run', ['backend-watch','frontend-watch'], function() {
    nodemon({
        execMap: {
            js: 'node'
        },
        script: path.join(__dirname, "build/backend.js"),
        ignore: ['*'],
        watch: ['foo/'],
        ext: 'noop'
    }).on('restart', function() {
        console.log('Restarted!');
    });
});

var jasmine = require('gulp-jasmine');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');

gulp.task('testComp', function(done) {
    webpack(require('./webpack.config.js'), function(e, r){
        done();
    });
});


gulp.task('testJasmine', function() {
    return gulp.src('./tmp/node_test_bundle.js')
        .pipe(jasmine());
});

gulp.task('testNode', function() {
    watch('**/*.ts', function(files) {
        runSequence( 'testComp', 'testJasmine' );
    });

    runSequence( 'testComp', 'testJasmine' );
});

var Server = require('karma').Server;

gulp.task('testKarma', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
    }, done).start();
});


gulp.task('complete', ['backend-watch','frontend-watch', 'testNode', 'testKarma']);
gulp.task('tdd', ['testNode', 'testKarma']);