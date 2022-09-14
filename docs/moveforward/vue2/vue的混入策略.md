#### vue 中混合 mixins

```js
// 定义一个混合对象
var myMixin = {
    created: function () {
        this.hello();
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!');
        },
    },
};

// 定义一个使用混合对象的组件
var Component = Vue.extend({
    mixins: [myMixin],
});

var component = new Component(); // => "hello from mixin!"
```

**选项合并策略**

> vue.extend 使用同样的策略进行合并

-   同名的钩子函数将混合为一个数组，都将被调用，混合对象的钩子将在组件自身钩子之前被调用
-   值为对象的选项，比如 methods、components、directiives，将会被混合为一个对象，有冲突的 key 值时，取组件的键值对
-   vue 还提供一个自定义选项合并策略
