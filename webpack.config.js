var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
require('path');

module.exports = {
    context: __dirname,
    entry: './app/main.ts',
    output: {
        path: __dirname + "/wwwroot",
        filename: 'bundle.js'
    },
    devtool: debug ? 'inline-sourcemap' : null,
    devServer: {
        "contentBase": "wwwroot/",
        "inline": true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: debug ? [] : [
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
}