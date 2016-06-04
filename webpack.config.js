var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: ['webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'app/core/bootstrap.js')],
        vendor: [
            'angular', 
            'angular-ui-router',
            'oclazyload'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
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
    resolve: {
        alias: {
            'underscore': path.join(node_modules_dir, 'underscore/underscore.js'),
            'jquery': path.join(node_modules_dir, 'jquery/dist/jquery.js')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new webpack.DefinePlugin({
            ON_DEMO: process.env.NODE_ENV === 'demo'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        })
    ]
};

module.exports = config;
