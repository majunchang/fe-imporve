#### require和import的区别  



总结： 

**CommonJs** 

> 用法： 使用module.exports  exports

- 输出的是一个值的copy，
- 运行时候的加载(执行到当前文件)
- 模块会有缓存 第一次加载某个模块的时候 node会缓存该模块 后续加载 直接从缓存中取出该模块的module.exports属性



**es6 import**

- 输出的是一个文件的引用（对外接口是一种静态定义，代码静态编译阶段）
- import 是单例模式  
- import引入的变量都是只读性的




参考文档：[require和import的区别](https://segmentfault.com/a/1190000021911869)