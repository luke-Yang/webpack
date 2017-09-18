const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pluginsConfig = [
  new CleanWebpackPlugin(['dist']), //清理dist文件夹，只留有用到的文件
  /* 全局shimming */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    Vue: 'vue'
  }),
  // /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons', // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.[chunkhash].js',
    minChunks: 2
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor'
  // }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'runtime'
  // }),
  //====抽取 jquery vue==  第三方到一个vendor.dll.js
  new webpack.DllReferencePlugin({
    // context: __dirname,
    manifest: require('./dll/manifest.json')
  }),
  new ExtractTextPlugin("css/[name].css"), //单独使用style标签加载css并设置其路径
];

//遍历生成页面
require('./pageArr.js').forEach(function(value) {
  const htmlPlugin = new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    favicon: '', //favicon路径
    filename: './view/' + value + '.html', //生成的html存放路径，相对于 path
    template: './src/view/' + value + '.html', //html模板路径
    inject: true, //允许插件修改哪些内容，包括head与body
    hash: true, //为静态资源生成hash值
    chunks: [value, 'commons'],
    minify: { //压缩HTML文件
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  });
  pluginsConfig.push(htmlPlugin);
});

module.exports = pluginsConfig;
