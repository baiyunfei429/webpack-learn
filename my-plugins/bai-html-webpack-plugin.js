function BaiHtmlWebpackPlugin(options) {
  // Configure your plugin with options...
}
 
BaiHtmlWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', (compilation) => {
    console.log('The compiler is starting a new compilation...');
 
    compilation.plugin(
      'html-webpack-plugin-before-html-processing',
      (data, cb) => {
        data.html += 'The Magic Footer'
 
        cb(null, data)
      }
    )
  })
}
 
module.exports = BaiHtmlWebpackPlugin