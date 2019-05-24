const express = require('express');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

//Tell express to use the webpack-dev-middleware and use the webpack.config
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

//Serve
app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n')
});

