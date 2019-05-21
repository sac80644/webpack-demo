const path = require('path');
const cleanwebpackplugin = require('clean-webpack-plugin');

const plugins = [
    new cleanwebpackplugin([path.resolve(__dirname, 'dist')])
];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: plugins
};
