#### vue 的组件通信

1.  props 父组件传递 props 给子组件

2.  v-on+v-emit 子组件触发父组件的事件

3.  **$children** 与 **$parent**的方式 **$children**是数组 当有多个子组件的时候 不能保证顺序

4.  .sync 实际上是 v-on v-emit 的一个语法糖

    ```vue
    <text-document v-bind:title="doc.title" v-on:update:title="doc.title = $event"></text-document>

    <text-document v-bind:title.sync="doc.title"></text-document>
    ```

    ```js
    <template>
      <div>
         <div @click="handleAdd">ADD</div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          counter: this.count
        };
      },
      props: ["count"],
      methods: {
        handleAdd() {
          this.$emit("update:count", ++this.counter);
        }
      }
    };
    </script>
    ```

5.  **$attr** 包含了父作用域中不作为 props 被识别的特性 ，**$listeners**包含了父作用域中(不含 `.native` 修饰器的) `v-on` 事件监听器。

**特殊说明**：**在多层嵌套组件的业务中，使用$listeners可以使用更少的代码来完成事件通信。中间层需要加一层：v-on=$listeners，使用 attr 可以完成深层嵌套组件的属性传递，中间层需要加 v-bind="$attrs"**

```js
组件 b
<template>
  <div>
    <button @click="handleClick">B组件按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("getFromB");
    }
  }
};
</script>
 组件 a
<template>
  <div>
    <child-b v-on="$listeners" />
  </div>
</template>

<script>
import childB from "../components/ChildB";
export default {
  components: {
    childB
  },
  mounted() {
    console.log(this.$listeners);
  }
};
</script>
 父组件
<template>
  <div>
   <child-a v-on:getFromB="fromB"/>
  </div>
</template>

<script>
import childA from "../components/ChildA";
export default {
  components: { childA },
  methods: {
    fromB() {
      console.log("B组件触发");
    }
  }
};
</script>
```

6. provide 和 inject 需要一起使用，允许一个祖先向所有子孙后代注入一个依赖，与 react 的 context 很相似
    - provide 提供可注入的属性
    - inject 在嵌套子组件中 表明可接受的属性
7. eventbus
8. vuex
9. $refs
