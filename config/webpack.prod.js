const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isProduction = true;

module.exports = {
  // mode: "production",
  mode: "development",
  devtool: "source-map",
  plugins: [
    // 生成环境
    new CleanWebpackPlugin({}),
  ]
}