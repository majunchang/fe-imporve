### defineProperty 和 Proxy 的区别

- Object.defineProperty 是 Es5 的方法，Proxy 是 Es6 的方法
- defineProperty 不能监听到数组下标变化和对象新增属性，Proxy 可以
- defineProperty 是劫持对象属性，Proxy 是代理整个对象
- defineProperty 局限性大，只能针对单属性监听，所以在一开始就要全部递归监听。Proxy 对象嵌套属性运行时递归，用到才代理，也不需要维护特别多的依赖关系，性能提升很大，且首次渲染更快
- defineProperty 会污染原对象，修改时是修改原对象，Proxy 是对原对象进行代理并会返回一个新的代理对象，修改的是代理对象
- defineProperty 不兼容 IE8，Proxy 不兼容 IE11
