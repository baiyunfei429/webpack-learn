var path = require("path")  
var htmlWebpackPlugin = require('html-webpack-plugin');  
module.exports = {  
    entry :　{  
       main :  './multiPage/main.js',//入口js文件1  
       index : './multiPage/index.js',//入口js文件2  
       a : './multiPage/a.js',  
       b : './multiPage/b.js',  
       c : './multiPage/c.js'  
  
    },  
    output : {  
        path: path.resolve(__dirname, 'multiPageDist'),//输出的文件路径  
        filename: 'prod/[name]-[chunkhash].js'//输出的multiPageDist文件名  
       // publicPath : 'www.baidu.com'//若有地址，则打包会变为上线地址  
    },  
    plugins : [  
        new htmlWebpackPlugin({  
            filename : 'a.html',//输出的html路径  
            template : './multiPage/index.html', //html模板路径  
            //inject : 'head',  //js文件在head中，若为body则在body中  
            inject : true,  
            title : 'this is a.html',  
            author : 'baiyunfei',  
            //excludeChunks: ['main'],//打包时不打包main.js文件  
            chunks : ['main', 'a'], //打包时只打包main和a的js文件，见entry，注意使用chunks时模板index.html文件里面不允许有script标签，即使注释掉也会报错  
            date : new Date(), 
            minify : { 
                // removeComments : true, //打包后删除注释 
                // collapseWhitespace : true //打包后删除空格 
            }  
  
        }),  
        new htmlWebpackPlugin({  
            filename : 'b.html',//输出的html路径  
            template : './multiPage/index.html', //html模板路径  
            //inject : 'head',  //js文件在head中，若为body则在body中  
            inject : true,  
            title : 'this is b.html',  
            author : 'baiyunfei',  
            date : new Date(),/*, 
             minify : { 
             removeComments : true, //打包后删除注释  
             collapseWhitespace : true //打包后删除空格 
             }*/  
            chunks : ['b'],  
        }),  
        new htmlWebpackPlugin({  
            filename : 'c.html',//输出的html路径  
            template : './multiPage/index.html', //html模板路径  
            //inject : 'head',  //js文件在head中，若为body则在body中  
            inject : true,  
            title : 'this is c.html',  
            author : 'baiyunfei',  
            date : new Date(),/*, 
             minify : { 
             removeComments : true, //打包后删除注释  
             collapseWhitespace : true //打包后删除空格 
             }*/  
            chunks : ['c']  
        })  
    ]  
}  