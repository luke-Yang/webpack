 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   resolve: {
     alias: {
       'vue': "vue/dist/vue.js"
     }
   },
 });
