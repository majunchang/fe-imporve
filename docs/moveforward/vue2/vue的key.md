### vue 的 key 值和列表渲染

> 根本原因：同一层级的同一节点 他们通过唯一的 id 进行区分，使用虚拟 dom 的时间复杂度降低

-   在 vue、react 的列表渲染中 最好使用数组中唯一不会变化的属性 做 key 值。key 发生变化的时候 数据将会重新渲染

-   vue 在更新列表的时候 使用就地复用策略，简单的复用此处每个元素

**vue 列表渲染的注意事项**
1. 当你用索引设置一个项的时候

2. 当你修改数组的长度的时候

    ```
    Vue.set(vm.items, indexOfItem, newValue)
    vm.items.splice(newLength)
    ```
**Vue 不能检测对象属性的添加或删除**
