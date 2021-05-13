const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");


const commonConfig = {
  entry: {
    //  index: {import:"./src/index.js",dependOn:"shared"},
    //  main: {import:"./src/main.js",dependOn:"shared"},
    //  shared:['lodash']
     
    main: "./src/main.js",
     
  },
  output: {
    filename: "[name].bundle.js",
    path: resolveApp("./build"),

    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": resolveApp("./src"),
      pages: resolveApp("./src/pages"),
    },
  },

  optimization:{
      // 对代码进行压缩相关的操作
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    // chunkIds: "natural",
    splitChunks:{
      
       // async异步导入
      // initial同步导入
      // all 异步/同步导入
      chunks: "all",
      // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      minSize: 200,
      // 将大于maxSize的包, 拆分成不小于minSize的包
      maxSize: 200,
      // minChunks表示引入的包, 至少被导入了几次
      minChunks: 1,
      cacheGroups:{
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[id]_vendors.js",
          // name: "vendor-chunks.js",
          priority: -10
        },
        default: {
          minChunks: 2,
          filename: "common_[id].js",
          priority: -50
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ]
};
 

module.exports = function(env) {


 

  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production": "development";

  const config = isProduction ? prodConfig : devConfig;
  const mergeConfig = merge(commonConfig, config);

  return mergeConfig;
};
