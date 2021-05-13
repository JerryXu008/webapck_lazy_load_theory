const resolveApp = require('./paths');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = false;

console.log("加载devConfig配置文件");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    hotOnly: true,
    compress: true,
   
    watchContentBase: true,
    
    historyApiFallback: true
  },
  plugins: [
    // 开发环境
    new ReactRefreshWebpackPlugin(),
  ]
}