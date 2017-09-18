// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//   entry: {
//     index: "./src/js/index.js"
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: "file:///Users/lukeyang/webpack-cli/dist/",
//     filename: "js/[name].js",
//     chunkFilename: "js/[id].chunk.js"
//   },
//   devtool: 'inline-source-map',
//   // devServer: {
//   //   contentBase: './dist'
//   // },
//   module: {
//     rules: [{
//       test: /\.css$/,
//       use: ['style-loader', 'css-loader']
//     }]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
//       favicon: '', //favicon路径
//       filename: './view/index.html', //生成的html存放路径，相对于 path
//       template: './src/view/index.html', //html模板路径
//       inject: true, //允许插件修改哪些内容，包括head与body
//       hash: true, //为静态资源生成hash值
//       chunks: ['index'],
//       minify: { //压缩HTML文件
//         removeComments: true, //移除HTML中的注释
//         collapseWhitespace: false //删除空白符与换行符
//       }
//     }),
//   ]
// }
