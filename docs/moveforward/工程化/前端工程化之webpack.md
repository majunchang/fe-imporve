## 前端工程化之 webpack

### 配置示例

```js
const path = require('path'); //引入node的path模块
const webpack = require('webpack'); //引入的webpack,使用lodash
const HtmlWebpackPlugin = require('html-webpack-plugin'); //将html打包
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //打包的css拆分,将一部分抽离出来
const CopyWebpackPlugin = require('copy-webpack-plugin');
// console.log(path.resolve(__dirname,'dist')); //物理地址拼接
module.exports = {
    entry: './src/index.js', //入口文件  在vue-cli main.js
    output: {
        //webpack如何输出
        path: path.resolve(__dirname, 'dist'), //定位，输出文件的目标路径
        filename: '[name].js',
    },
    module: {
        //模块的相关配置
        rules: [
            //根据文件的后缀提供一个loader,解析规则
            {
                test: /\.js$/, //es6 => es5
                include: [path.resolve(__dirname, 'src')],
                // exclude:[], 不匹配选项（优先级高于test和include）
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                }),
            },
            {
                //图片loader
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader', //根据文件地址加载文件
                    },
                ],
            },
        ],
    },
    resolve: {
        //解析模块的可选项
        // modules: [ ]//模块的查找目录 配置其他的css等文件
        extensions: ['.js', '.json', '.jsx', '.less', '.css'], //用到文件的扩展名
        alias: {
            //模快别名列表
            utils: path.resolve(__dirname, 'src/utils'),
        },
    },
    plugins: [
        //插进的引用, 压缩，分离美化
        new ExtractTextPlugin('[name].css'), //[name] 默认  也可以自定义name  声明使用
        new HtmlWebpackPlugin({
            //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
            file: 'index.html', //打造单页面运用 最后运行的不是这个
            template: 'src/index.html', //vue-cli放在跟目录下
        }),
        new CopyWebpackPlugin([
            //src下其他的文件直接复制到dist目录下
            { from: 'src/assets/favicon.ico', to: 'favicon.ico' },
        ]),
        new webpack.ProvidePlugin({
            //引用框架 jquery  lodash工具库是很多组件会复用的，省去了import
            _: 'lodash', //引用webpack
        }),
    ],
    devServer: {
        //服务于webpack-dev-server  内部封装了一个express
        port: '8080',
        before(app) {
            app.get('/api/test.json', (req, res) => {
                res.json({
                    code: 200,
                    message: 'Hello World',
                });
            });
        },
    },
};
```

#### webpack 的作用域提升

> 3.0 已经支持 提供预编译功能 减少闭包函数 使编译周的代码在浏览器中执行效率提高 主要针对 es6 语法

```js
new webpack.optimize.ModuleConcatenationPlugin();
```

#### webpack 提取第三方依赖

-   splitchunk

    ```js
    module.exports = {
        //...
        optimization: {
            splitChunks: {
                // include all types of chunks
                chunks: 'all',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
    };
    ```

-   dllplugin 和 dllreferencePlugin **使用思考：将项目中公共的第三方库打包到一个 dll 文件中，同时编译储一个 mainfest.json 的映射文件，不会重复的构建第三方库，构建编译的时间减少**

#### 按需加载

[react 按需加载](https://juejin.im/post/5bf61082f265da616a474b5c)

[vue 按需加载](https://juejin.im/post/5b31ea4bf265da598524b2ac)

> 异步加载的原理： 模块独立出一个个 js 文件，当需要的时候，创建一个 script 对象，将其加入到 document.head 中

#### 从 js 文件中剥离 css 文件

> ExtractTextWebpackPlugin

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 创建多个实例
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ]
  },
  plugins: [
    extractCSS,
    extractLESS
  ]
};
```

#### 优化 loader 配置 让尽可能少的文件被 loader 处理

> 配置 include 和 exclude 选项

```
{
    test: /\.js$/,
    use: [
        'babel-loader?cacheDirectory',//开启转换结果缓存
    ],
    include: path.resolve(__dirname, 'src'),//只对src目录中文件采用babel-loader
    exclude: path.resolve(__dirname,' ./node_modules'),//排除node_modules目录下的文件
},
```

#### 优化 resolve.extensions 配置

```
在导入没带文件后缀的路径时，webpack会自动带上后缀去尝试询问文件是否存在，而resolve.extensions用于配置尝试后缀列表；默认为extensions:['js','json'];
及当遇到require('./data')时webpack会先尝试寻找data.js，没有再去找data.json；如果列表越长，或者正确的后缀越往后，尝试的次数就会越多；
所以在配置时为提升构建优化需遵守：

频率出现高的文件后缀优先放在前面；
列表尽可能的小；
书写导入语句时，尽量写上后缀名
因为项目中用的jsx较多，所以配置extensions: [".jsx",".js"],
```

#### HappyPack 并行构建优化

> 将 webpack 中最耗时的 loader 文件转换操作任务，分解到多个进程中并行处理，从而减少构建时间。

```
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 5}); //构建共享进程池，包含5个进程
...
plugins: [
    // happypack并行处理
    new HappyPack({
        // 用唯一ID来代表当前HappyPack是用来处理一类特定文件的，与rules中的use对应
        id: 'babel',
        loaders: ['babel-loader?cacheDirectory'],//默认设置loader处理
        threadPool: happyThreadPool,//使用共享池处理
    }),
    new HappyPack({
        // 用唯一ID来代表当前HappyPack是用来处理一类特定文件的，与rules中的use对应
        id: 'css',
        loaders: [
            'css-loader',
            'postcss-loader',
            'sass-loader'],
            threadPool: happyThreadPool
    })
],
module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        use: ['happypack/loader?id=babel'],
        exclude: path.resolve(__dirname,' ./node_modules'),
    },
    {
        test: /\.(scss|css)$/,
        //使用的mini-css-extract-plugin提取css此处，如果放在上面会出错
        use: [MiniCssExtractPlugin.loader,'happypack/loader?id=css'],
        include:[
            path.resolve(__dirname,'src'),
            path.join(__dirname, './node_modules/antd')
        ]
    },
}
```

-   静态资源名称 使用 hash 将静态资源进行缓存
-   压缩 js 代码 tree-shaking(默认有，需要配置)
-   代码分割进行按需加载

#### webpack 热更新原理

> HMR 即 Hot Module Replacement
> 修改代码后，自动实现页面局部更新，并保存应用状态
> 核心模块：webpack-dev-server
> 步骤：

-   使用 express 启动本地服务，当浏览器访问资源时对此做响应。
-   服务端和客户端使用 websocket 实现长连接
-   webpack 监听源文件的变化，即当开发者保存文件时触发 webpack 的重新编译。
-   每次编译都会生成 hash 值、已改动模块的 json 文件、已改动模块代码的 js 文件
-   编译完成后通过 socket 向客户端推送当前编译的 hash 戳
-   客户端的 websocket 监听到有文件改动推送过来的 hash 戳，会和上一次对比
    -   一致则走缓存
    -   不一致则通过 ajax 和 jsonp 向服务端获取最新资源
-   使用内存文件系统去替换有修改的内容实现局部刷新


> 关于webpack的热更新原理，面试官比较想听到的是工作流程和关键点，非“流水账”式的源码分析。我认为可以这样的介绍：

首先，介绍webpack-dev-server:
webpack-dev-server 主要包含了三个部分：
1.webpack: 负责编译代码
2.webpack-dev-middleware: 主要负责构建内存文件系统，把webpack的 OutputFileSystem 替换成 InMemoryFileSystem。同时作为Express的中间件拦截请求，从内存文件系统中把结果拿出来。
3.express：负责搭建请求路由服务。

其次，介绍工作流程:
1.启动dev-server，webpack开始构建，在编译期间会向 entry 文件注入热更新代码；
2.Client 首次打开后，Server 和 Client 基于Socket建立通讯渠道；
3.修改文件，Server 端监听文件发送变动，webpack开始编译，直到编译完成会触发"Done"事件；
4.Server通过socket 发送消息告知 Client；
5.Client根据Server的消息（hash值和state状态），通过ajax请求获取 Server 的manifest描述文件；
6.Client对比当前 modules tree ，再次发请求到 Server 端获取新的JS模块；
7.Client获取到新的JS模块后，会更新 modules tree并替换掉现有的模块；
8.最后调用 module.hot.accept() 完成热更新；

欢迎拍砖！

#### webpack loader 和 plugin 有什么区别

1. loader：

webpack 本身只能包 js 文件，对于文件，图片，vue 文件需要引入第三方的模块进行打包
针对于文件系统，
运行在打包文件之前

2. plugin:

plugin 扩展了 webpack 的功能，针对于整个项目和工程而言
plugins 在整个编译周期都起作用


#### webpack  loader的执行顺序

每一个loader都支持一个pitch属性  pitch优先于loader的实际方法执行  
webpack从左到右执行每一个loader的pitch方法  再从右到左 执行loader的实际方法