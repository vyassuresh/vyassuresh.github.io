var path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: 'app-bundled.js'
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