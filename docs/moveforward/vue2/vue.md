## vue

#### Vue 的 Template 渲染到 html 中 Vue 是怎么处理的

-   parse（解析）将拿到的 Template 的模板解析，生成 AST 语法树
-   optimize（优化）将 template 中静态的标签打上标记，优化下一次数据更改的 diff 算法进行虚拟 DOM 比对时跳过这些静态标签
-   generate（生成）generate 会将 AST 转化成 render funtion 字符串，最终得到 render 的字符串以及 staticRenderFns 字符串。

#### vue 和 react 的对比

-   语法不一致，vue 是把 html,css,js 组合到一起，用各自的处理方式；react 是 all in js,设计了 jsx 的语法
-   更新机制不一样，vue 自动触发数据渲染，react 需要手动设置 setState 触发 build
-   vue 学习曲线平缓 react 学习曲线稍微复杂
-   数据流： vue 是数据可变的，双向绑定写法 ，通过 mixin 进行代码拆分。react 整体的思路就是函数式，推崇纯组件和不可变的数据流。通过高阶组件拆分

vue 的好处 简单，尊崇小而美的原则，更快的渲染速度和更小的体积
react 的不可变数据在大型应用中意义非凡，更好的可测试性，生态系统相比于 vue 要好一些

#### vue 的项目设计

-   需求整体概要 （背景，体量）
-   技术选型 （vue 和 react 的选型）
-   结构搭建
    -   基础层和业务层的划分
    -   业务层
        -   业务功能模块划分
        -   组件的设计
        -   静态资源
    -   基础层
        -   封装 api
        -   协调封装 bridge
        -   埋点
        -   监控报错
        -   项目部署上线
        -   开发规范（提交规范，命名规范）
-   打包部署
    -   webpack
    -   babel
    -   vue-loader

#### vue 服务端渲染
-   vue 的服务端渲染框架 nuxt.js

##### 客户端渲染，预渲染和服务端渲染

参考链接： https://blog.csdn.net/weixin_44524835/article/details/110221911

**客户端渲染**

> 等待 js 代码下载,加载,解析完成以后再请求数据渲染
> 浏览器的渲染包括 dom 的构建 css 的构建 js 的解析 当解析到 js 的时候 才会触发 vue 的渲染

-   开发体验较好
-   前后端分离

**预渲染**

> 在构建的时候，简单的生成针对特定路由的 html 文件

-   使用 webpack 的 perrender-spa-plugin
-   原理： 在 webpack 构建的最后，本地启动会启动一个 phantomjs 访问了配置预渲染的路由，再将 phantom 渲染的内容输出到 html 文件中，并且建立对应的目录

**服务端渲染**
> 先向后端请求数据,然后生成完整的 html 返回给浏览器

-   更好的 seo，搜索引擎爬虫工具可以直接查看完全渲染的页面
-   更快的内容到达时间，无需等待所有的 js 都完成下载并执行
-   服务端的负载会比较大
-   不利于前后端分离

#### vue3.0 的新增特点

-   proxy 替代 object.defineProperty
-   使用 ts 进行重写
-   使用组合式 api，面对复杂逻辑，2.x 需要关注多个组件，组合式 api 更注重数据，更好的解耦业务和逻辑
-   使用 block tree 从组件级别降低到了动态内容级别 依据动态指令 划分为不同的嵌套区块 dom 比较的时候 关注动态内容的比对
-   模块化架构 更好的支持 tree-shaking
-   suspencse 原生对于需要动态加载的组件友好
-   开箱即用的 Fragment

##### v-if为什么具有较好的初始化性能

答案：

- v-if 是懒计算，当条件为false的时候  会被编译为一个注释节点，加快渲染速度。当条件为true的时候 ，命中派发更新的逻辑，新旧dom树进行patch  完成v-if指令元素的显示和隐藏

参考文档：[Vue 3 中 v-if 和 v-show 指令实现的原理（源码分析）](https://segmentfault.com/a/1190000039005215)