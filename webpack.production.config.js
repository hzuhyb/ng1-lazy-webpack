var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/core/bootstrap.js'),
        vendor: ['angular', 'angular-ui-router', 'oclazyload']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [node_modules_dir]
        }, {
            test: /\.css$/,
            loader: 'style!css',
            exclude: [node_modules_dir]
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: [node_modules_dir]
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000',
            exclude: [node_modules_dir]
        }, {
            test: /\.html$/,
            loader: 'raw',
            exclude: [node_modules_dir]
        }]
    },

    plugins: [
        new ngAnnotatePlugin({
           add: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            ON_DEMO: process.env.NODE_ENV === 'demo'
        })
    ]
};

module.exports = config;
