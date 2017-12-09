var config = require("../webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxyMiddleware = require('http-proxy-middleware');
var opn = require('opn');


// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8099/");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true
    }
});


var uri = 'http://localhost:' + 8099

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})
console.log(config.output.publicPath, "?????????????")
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
})

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
 
    opn(uri)
 
  _resolve()
})

// var server = app.listen(port)
server.listen(8099);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}