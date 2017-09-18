 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');
 module.exports = merge(common, {
   //  devtool: "source-map",
   plugins: [
     new UglifyJSPlugin({ //精简代码，未被使用的代码删除
       sourceMap: true
     }),
     new webpack.DefinePlugin({ //优化代码，去除log
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.HashedModuleIdsPlugin()
   ],
   resolve: {
     alias: {
       'vue': "vue/dist/vue.min.js"
     }
   },
 });
