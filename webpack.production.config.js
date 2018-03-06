// var babelpolyfill = require("babel-polyfill"); 比较大，使用“transform-runtime”代替，小而且可以自动匹配
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HelloWorldPlugin = require('./my-plugins/hello-world');

module.exports = {
  devtool: 'null',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    port: 8081,
    hot: true,
    inline: true//实时刷新
  },

  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
          loader: "babel-loader"
      },
      exclude: /node_modules/
    }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, {
                loader: "postcss-loader"
            }],
        })
    }]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css"),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HelloWorldPlugin( {options: true} )
  ],
}