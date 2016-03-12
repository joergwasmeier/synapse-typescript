module.exports = {
    output: {
        path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },

    entry: [
        './src/A_Main.ts'
    ],
    module: {
        loaders: [
            {   test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /node_modules/
            },
            {   test: /\.tsx?$/,
                loader: 'babel?presets[]=es2015!ts-loader!preprocess?+CLIENT',
                exclude: /node_modules/
            }
        ]
    }
};