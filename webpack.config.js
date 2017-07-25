const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    // the base directory (absolute path) for resolving the entry option
    context: __dirname,
    // the entry point we created earlier
    entry: './assets/index',

    output: {
        // where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles/'),
        filename: '[name]-[hash].js'
    },

    plugins: [
        // tells webpack where to store data about your bundle
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
            }
        ]
    },
};