const webpack = require('webpack');
const vendors = ['jquery', 'vue'];
const path = require("path");
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[chunkhash]'
  },
  entry: {
    vendor: vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', 'manifest.json'),
      name: '[name]_[chunkhash]',
      // context: __dirname,
    }),
  ],
}
