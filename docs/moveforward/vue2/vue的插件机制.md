#### vue 的插件机制

[vue 从入门到进阶：自定义指令 directive，插件的封装以及混合 mixins（七）](https://segmentfault.com/a/1190000012827871)

vue 会自动组织多次注册相同插件，届时自会注册一次该插件

``` js
Vue.use(MyPlugin)
Vue.use(MyPlugin, { someOption: true }) // 也可以传入一个选项对象
```

插件中应当有一个公开方法 install，这个方法的第一个参数是 vue 构造器，第二个参数是可选的选项对象

> 新建一个 vue 文件

```js
<template>
    <div>封装一个最简单的插件</div>
</template>
<script>
export default{
    name:'count-down'
}
</script>
```

> 同级目录下新建一个 index.js

```js
import countDown from './countdown';

countDown.install = function (Vue) {
    Vue.component(countDown.name, countDown);
};

export default countDown;
```

> 在 main.js 中注册和 use

```js
import countDown from './components/countdown/index.js'
Vue.use(countDown)

// 在组件中就可以这样使用了
<count-down></count-down>
```

