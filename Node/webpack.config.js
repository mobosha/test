//创建webpack.config.js
var webpack = require('webpack');
var path = require('path')
HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // publicPath: 'http://localhost:8080/build',
    // entry:'./API/http/imooc-crawler.js', //入口文件
    // entry:'./API/http/imooc-crawler.js', //入口文件
    entry: {
      app: ['./imooc-crawler.js']
    },
    output:{
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        publicPath: 'http://localhost:8099/',//添加静态资源, 否则会出现路径错误,这个是本地相对路径
        path:path.resolve(__dirname, './build'), //输出位置
        filename:'build.js' //输入文件
    },
    devServer: {
        // hot: true,
        inline: true,
        open: true,
        port: '8099'
    },
    module:{
        loaders:[
             {
                 test:/\.css$/,//支持正则
                 loader:'style-loader!css-loader' 
             }
        ]
    },
    //其他解决方案配置
    resolve: {
      extensions: ['.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
    },
     //插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true

        }),
        new webpack.HotModuleReplacementPlugin(),  //热加载插件，实施同步刷新，修改html css js 自动刷新浏览器、webpack自带
        new webpack.BannerPlugin('This file is created by ly')
    ]
}