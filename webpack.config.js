const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
    watchOptions: {
        ignored: [path.posix.resolve(__dirname, './server'), path.posix.resolve(__dirname, './node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: './client/public/js', to: '' }],
        }),
    ],
};
