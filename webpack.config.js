// var babelpolyfill = require("babel-polyfill"); 比较大，使用“transform-runtime”代替，小而且可以自动匹配
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();
var HelloWorldPlugin = require('./my-plugins/hello-world');


var webpackDevConfig = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  devServer: {
    // contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    port: 8081,
    hot: true,
    inline: true//实时刷新
  },

  module: {
    rules: [
      {
          test: /(\.jsx|\.js)$/,
          use: {
              loader: "babel-loader",
              // 下面的配置，放到.babelrc文件中，webpack会自动调用
              // options: {
              //     presets: [
              //         "env", "react"
              //     ]
              // }
          },
          exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                  modules: true, // 指定启用css modules
                  // localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                }
            },
            {
              loader: "postcss-loader"
            }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new CleanWebpackPlugin('build/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    // new DashboardPlugin(dashboard.setData)
  ],
}
let chunks_bai = {'firstName': 'yun fei', 'familyName': 'bai'}
webpackDevConfig.plugins.push(
  new HelloWorldPlugin({
    options: true,
    chunks_bai: chunks_bai,
    name: 'baiyunfei'
  })
)

module.exports = webpackDevConfig;