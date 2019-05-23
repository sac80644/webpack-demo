const path = require('path');
const cleanwebpackplugin = require('clean-webpack-plugin');

const plugins = [
    new cleanwebpackplugin([path.resolve(__dirname, 'dist')])
];

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]

    },
    plugins: plugins
};
