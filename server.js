// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
//
// const app = express();
// const config = require('./webpack.dev.js');
// const common = require('./webpack.common.js');
// const compiler = webpack(config);
// const path = require('path');
// // app.use('/index', router);
// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// // app.use(webpackDevMiddleware(compiler, {
// //   publicPath: common.output.publicPath
// // }));
// // webpack-dev-server中间件
// var devMiddleware = webpackDevMiddleware(compiler, {
//   publicPath: common.output.publicPath,
//   stats: {
//     colors: true,
//     chunks: false
//   }
// });
// app.use(devMiddleware)
//
// // 路由
// app.get('/:viewname?', function(req, res, next) {
//
//   console.log(req, "req=============")
//   var viewname = req.params.viewname ?
//     req.params.viewname + '.html' :
//     'index.html';
//
//   var filepath = path.join(compiler.outputPath, viewname);
//
//   // 使用webpack提供的outputFileSystem
//   compiler.outputFileSystem.readFile(filepath, function(err, result) {
//     if (err) {
//       // something error
//       return next(err);
//     }
//     res.set('content-type', 'text/html');
//     res.send(result);
//     res.end();
//   });
// });
//
// module.exports = app.listen(3000, function(err) {
//   if (err) {
//     // do something
//     return;
//   }
//
//   console.log('Listening at http://localhost:3000\n')
// })
//
// // Serve the files on port 3000.
//
// // app.listen(3000, function() {
// //   console.log('Example app listening on port 3000!\n');
// // });
