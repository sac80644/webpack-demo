const express = require('express');
const app = express();

const webpack = require('webpack')
const config = require('./webpack.config');
const compiler = webpack(config);

//Tell express to use the webpack-dev-middleware and use the webpack.config
const webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

//https://github.com/webpack-contrib/webpack-hot-middleware
//https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
//Tell express to use the webpack-hot-middleware
app.use(require("webpack-hot-middleware")(compiler));

//Serve
app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n')
});

