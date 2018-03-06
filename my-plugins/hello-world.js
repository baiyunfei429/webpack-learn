"use strict";

function MyPlugin(options) {
  this.options = options || {};
  this.chunks = this.options.chunks_bai;
  console.log('+++++++-----------');
  console.log(this.chunks);
  console.log('+++++++-----------');
}
var ConcatSource;
try {
    ConcatSource = require("webpack-core/lib/ConcatSource");
} catch(e) {
    ConcatSource = require("webpack-sources").ConcatSource;
}

MyPlugin.prototype.apply = function(compiler) {
  // compiler.plugin('compilation', function(compilation) {
  // compiler.plugin('done', function(compilation, callback) {

    // // 探索每个块（构建后的输出）:
    // compilation.chunks.forEach(function(chunk) {
    //   // 探索块中的每个模块（构建时的输入）：
    //   chunk.modules.forEach(function(module) {
    //     // 探索模块中包含的的每个源文件路径：
    //     module.fileDependencies.forEach(function(filepath) {
    //       // 现在我们已经知道了很多的源文件结构了……
    //     });
    //   });

    //   // 探索块生成的每个资源文件名
    //   chunk.files.forEach(function(filename) {
    //     // 得到块生成的每个文件资源的源码
    //     console.log(filename);
    //     var source = compilation.assets[filename].source();
    //   });
    // });
      
  // });
  compiler.plugin('emit', function(compilation, callback) {
  //   // 创建一个头部字符串：
    var filelist = '--------------In this build:\n\n';
    // 检查所有编译好的资源文件：
    let distChunk = 'bundle.js',
                beforeContent = 'window.pad="bai";',
                afterContent = 'window.rpad="yunfei";',
                removeBefore = '',
                removeAfter = '';
    let source = compilation.assets[distChunk].source();
    source = (removeBefore) ? source.replace(new RegExp('^' + removeBefore), "") : source;
            source = (removeAfter) ? source.replace(new RegExp(removeAfter + '$'), "") : source;
    compilation.assets[distChunk].source = () => {
        return source;
    };
    
    compilation.assets[distChunk] = new ConcatSource(beforeContent, compilation.assets[distChunk], afterContent);

    // 把它作为一个新的文件资源插入到 webpack 构建中：
    // compilation.assets['filelist.md'] = {
    //   source: function() {
    //     return filelist;
    //   },
    //   size: function() {
    //     return filelist.length;
    //   }
    // };

// });

// let chunkKey = Object.keys(this.chunks);
// chunkKey.map((chunk, key) => {
//   let distChunk = this.findAsset(compilation, chunk),
//       beforeContent = this.chunks[chunk].beforeContent || '',
//       afterContent = this.chunks[chunk].afterContent || '',
//       removeBefore = this.chunks[chunk].removeBefore || '',
//       removeAfter = this.chunks[chunk].removeAfter || '';
//     let source = compilation.assets[distChunk].source();
//     source = (removeBefore) ? source.replace(new RegExp('^' + removeBefore), "") : source;
//     source = (removeAfter) ? source.replace(new RegExp(removeAfter + '$'), "") : source;
//     compilation.assets[distChunk].source = () => {
//       return source;
//     };

//     compilation.assets[distChunk] = new ConcatSource(beforeContent, compilation.assets[distChunk], afterContent);
// });

    callback();
})
};
MyPlugin.prototype.findAsset = function(compilation, chunk) {
  let chunks = compilation.chunks;
  for (let i = 0, len = chunks.length; i < len; i++) {
      if (chunks[i].name === chunk) {
          return chunks[i].files[0];
      }
  }

  return null;
};

module.exports = MyPlugin;