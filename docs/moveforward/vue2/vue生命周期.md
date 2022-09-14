#### vue 的生命周期

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vue生命周期学习</title>
  <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</body>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Vue的生命周期'
    },
    beforeCreate: function() {
      console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined
      console.log("%c%s", "color:red","message: " + this.message)
    },
    created: function() {
      console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    mounted: function() {
      console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message)
    }
  })
</script>
</html>
```

| 生命周期      | $el            | data      | message   | 说明                                         |
| ------------- | -------------- | --------- | --------- | -------------------------------------------- |
| beforeCreate  | undefined      | undefined | undefined |                                              |
| create        | undefined      | object    | message   | 将 data 和 mathdos 挂载到 vue 实例上         |
| beforeMounted | htmlDivElement |           |           | 模板编译完成 但是没有挂载 无法获取 dom       |
| mounted       |                |           |           | 组件挂载完成 能直接获取到 dom                |
| beforeUpdate  |                |           |           |                                              |
| updated       |                |           |           | 组件内响应式变量变更时调用                   |
| beforeDestory |                |           |           |                                              |
| destoryed     |                |           |           | 组件销毁时调用，组件变更的状态存储和内存调用 |

> 注意点：

-   create 阶段 ajax 请求过多的时候 页面会出现长时间白屏状态(loading 图)
-   mounted 不会承诺所有子组件也都一起被挂载，如果你希望等到整个视图渲染完毕 可以使用 nexttick

#### vue 中父子组件的生命周期执行顺序

![](https://image-static.segmentfault.com/379/352/3793524098-5b665dbbde824_articlex)

##### 创建过程

-   父组件 beforeCreated
-   父组件 created
-   父组件 beforeMounted
-   子组件 beforeCreated
-   子组件 created
-   子组件 beforeMounted
-   子组件 mounted
-   父组件 mounted

更新过程

-   父 beforeUpdate
-   子 beforeUpdate
-   子 updated
-   父 updated

##### 销毁过程

-   父 beforeDestroy
-   子 beforeDestroy
-   子 destroyed
-   父 destroyed
