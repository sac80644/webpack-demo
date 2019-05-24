const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const environment = "development";

module.exports = {
    mode: environment,
    //webpack-dev-server hmr
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: [
        // Add the client which connects to our middleware
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        // And then the actual application
        './src/index.js'
    ],
    // devtool: 'inline-source-map',
    devtool: '#source-map',
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            title: 'HMR with Stylesheets'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    }
};
