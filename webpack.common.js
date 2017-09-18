const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
module.exports = {
  entry: require('./entry.js'),
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: require('./plugin.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "file:///Users/lukeyang/svnProject/yqc-h5-v4.0/dist",
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[id].chunk.js"
  },
  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  resolve: {
    extensions: ['.js', '.css', '.less'],
    alias: {
      'vue': "vue/dist/vue.min.js"
    }
  },
}
