const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
};