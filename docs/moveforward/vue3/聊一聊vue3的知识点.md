### defineProperty 和 Proxy 的区别

- Object.defineProperty 是 Es5 的方法，Proxy 是 Es6 的方法
- defineProperty 不能监听到数组下标变化和对象新增属性，Proxy 可以
- defineProperty 是劫持对象属性，Proxy 是代理整个对象
- defineProperty 局限性大，只能针对单属性监听，所以在一开始就要全部递归监听。Proxy 对象嵌套属性运行时递归，用到才代理，也不需要维护特别多的依赖关系，性能提升很大，且首次渲染更快
- defineProperty 会污染原对象，修改时是修改原对象，Proxy 是对原对象进行代理并会返回一个新的代理对象，修改的是代理对象
- defineProperty 不兼容 IE8，Proxy 不兼容 IE11



## vue3对比vue2的优缺点

1. diff算法的优化，新增了静态标记，只会对比带有patch标记的节点，同时双端算法 更改为最长递增子序列。
2. hoistStatic 静态提升， vue2的元素无论是否参与更新，都会重新创建然后再渲染。vue3针对不参与更新的元素，会做静态提升，在下次渲染的时候 直接复用即可。
3. cacheHandles 事件侦听器缓存，当cacheHandlers开启的时候，会自动关联一个内联函数，生成一个静态节点，事件再次出发的时候 会直接从缓存中调用。
4. ssr渲染，
5. 更好的ts支持，
6. composition  Api  组合式API。
7. 按需编译，体积比vue2.x更小。