var path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {
        App: "./app/assets/scripts/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            },
            exclude: /node_modules/
        }]
    },
    mode: 'development'
}