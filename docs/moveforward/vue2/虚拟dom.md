### 虚拟 dom

> 虚拟 dom 本质上就像是 js 和 Dom 之间做了一个缓存

1.  用 js 对象来表示一个 dom 树的结构，用这个树构建真正的 dom 树，并将它映射到页面中
2.  当状态变更的时候 构建一个新的树 新树和旧树进行比较 记录两颗树的差异
3.  把差异应用到 dom 树上 完成了视图的更新

```js
var element = {
    tagName: 'ul', // 节点标签名
    props: {
        // DOM的属性，用一个对象存储键值对
        id: 'list',
    },
    children: [
        // 该节点的子节点
        { tagName: 'li', props: { class: 'item' }, children: ['Item 1'] },
        { tagName: 'li', props: { class: 'item' }, children: ['Item 2'] },
        { tagName: 'li', props: { class: 'item' }, children: ['Item 3'] },
    ],
};
```
