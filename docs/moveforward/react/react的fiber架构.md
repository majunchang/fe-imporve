### react

## **react 的生命周期变化**

![image.png](https://upload-images.jianshu.io/upload_images/5703029-5ac90a2e3a7b182e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### react16废弃的三个生命周期函数

- componentWillMount
- componentWillReceiveProps  父组件引发渲染可能回根据 props 更新 state
- componentWillUpdate

取而代之的是两个新的生命周期函数

- static getDerivedStateFromProps (nextProps,prevSatte) 一个静态方法，返回一个新的对象来更新当前的 state 对象，如果不需要更新则返回 null  

  ```js
  class ExampleComponent extends React.Component {
    state = {
      isScrollingDown: false,
      lastRow: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.currentRow !== prevState.lastRow) {
          return {
              isScrollingDown:
              nextProps.currentRow > prevState.lastRow,
              lastRow: nextProps.currentRow
          }
      }
      return null
    }
  }
  
  ```

- getSnapshotBeforeUpdate **在更新阶段调用，当组件的 props 改变了，或者组件内部调用了 setstate 的时候**   用来替代 componentWillUpdate，render 之后调用

  ```js
  getDerivedStateFromProps
  shouldComponentUpdate
  render
  getSnapshotBeforeUpdate
  componentDidUpdate
  ```

#### 为什么要移除这三个生命周期 以及 更改之后的好处

> 用静态函数getDerivedStateFromProps来取代之前的生命周期函数，强制开发者在 render 之前，只做无副作用的操作，操作的局限根据 props 和 state 来决定新的 state，进一步的施加约束，防止开发者乱来。

**React团队通过框架级别的 APi 来约束或者帮助开发者写出维护性更加的 js 代码**

####compontwillMount

1. compontwillMount 中  发起 ajax请求，会导致多次调用 render。
2. 16.3之前的版本中，react 是同步渲染的，在compontwillMount 中调用，有可能不会触发界面渲染。比如 ajax 请求时间过长，造成白屏时间。
3. 16.3之后 react 为异步渲染，异步渲染模式下，由于任务可以被中断，使用 compontwillmount 可能会被多次调用，并且存在内存泄露问题。

#### componentWillReceiveProps

1. componentWillReceiveProps  破坏 state 的单一数据源，增加子组件的重绘次数。
2. 通过 getDerivedStateFromProps通过比较 props 和 prevstate，保证了 props 和 state 的简单关系以及不需要处理第一次渲染时 prevProps 为空的情况，更加有利于 render 和 commit 截断的操作和优化。

#### componentWillUpdate

1. componentWillUpdate，react 开启异步渲染之后，render 可以被打断，render 和 commit 截断并不是无缝衔接的。也就是说 render 阶段读取到的 dom 元素并不总是和 commit 阶段 相同，使用componentWillUpdate获取的 dom 元素状态是不安全的，因为此时值很有可能已经失效了。

2. getSnapshotBeforeUpdate   会在最终确定的 render 之前执行，保证了元素的准确性。



## react 的异步渲染

[[全面了解 React 新功能: Suspense 和 Hooks]](https://segmentfault.com/a/1190000017483690)

- fiber 之后 react 的渲染过程不再是一旦开始就不能终止的模式了，划分为了两个阶段，第一阶段和第二截断，也就是 renderphase 阶段 和 commit 阶段
- rendephaser 阶段包括 废除的三个生命周期和 shouldComponentUpdate ， renderphase 阶段具有优先级的概念，这个过程主要是找出更新的 dom，里面的任务可能会被打断而且重头在来，
- 现有 react 中每个生命周期函数在一个加载和更新过程中只会被调用一次，在 react fiber 中，第一阶段的生命周期函数在一次加载和更新过程中可能会被调用多次

## react 的生命周期变化

![image.png](https://upload-images.jianshu.io/upload_images/5703029-2ac5f364f471c908.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![image.png](https://upload-images.jianshu.io/upload_images/5703029-03e7de04bebd6d01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####react 的 hooks

> react hooks 是 react16.7推出的版本  主要解决的问题是状态共享

```js
import { useState } from 'react';

function Example() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- userState

- useEffect  类似与 componentDidmount 和 componentDidupdate

  ```js
   useEffect(() => {
      // 更新文档的标题
      document.title = `You clicked ${count} times`;
    });
  
  ```

- userContext

- userReducer

- userRef

## react 的 fiber 核心思想

##### react的15架构 

- Reconciler(协调器)--负责找出变化的组件
  - 调用函数组件、或class组件的`render`方法，将返回的JSX转化为虚拟DOM
  - 将虚拟DOM和上次更新时的虚拟DOM对比
  - 通过对比找出本次更新中变化的虚拟DOM
  - 通知**Renderer**将变化的虚拟DOM渲染到页面上
- Renderer(渲染器)-- 负责将变化的组件渲染到页面上

**特点**

- 每次更新的时候 都是从根组件或者 setstate 的组件开始，更新整个子树。**mountComponent**和**updateComponent**都会递归更新子组件
- 整个渲染过程是连续不中断完成的，不能暂停任务，不能切分任务，不能划分任务的优先级，
- 浏览器计算 dom 的时候锁住整个线程，所有行为同步发生，不仅仅是渲染效率较低，有可能导致重要的任务卡顿，动画掉帧等。

##### **v16的架构**

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入**Reconciler**
- Reconciler（协调器）—— 负责找出变化的组件  调用组件的render方法，又称为render阶段
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上，把render阶段提交的信息渲染到页面上（commit阶段）

特点：

- 将同步流程改为异步和任务分割，

- 可以切分和中断任务，

- 可以设置任务的优先级，

- 支持父子组件任务的前进和后退，

- render 可以返回多元素，

- 支持异常边界处理。
  - 异步实现不同优先级的任务协调执行
  - requestIdleCallback  在线程空闲时期调度执行优先级较低的函数  查看当前帧有没有空闲，如果没有推迟到下一帧
  - requestAnimationFrame 再下一个动画帧调度执行优先级比较高的函数
- 将树的遍历变为了链表的遍历，通过节点指向父组件 兄弟组件和子组件  解决了内部参数冗余，便于任务的回退和前进。链表对于异步友好
- renderphase 阶段  找出更新的 dom，里面的任务可能会被打断而且重头在来，commit 阶段将最终的更新渲染到页面中

### render阶段

#####  双缓存机制

 我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。这种**在内存中构建并直接替换**的技术叫做[双缓存](https://baike.baidu.com/item/双缓冲)。

`React`使用“双缓存”来完成`Fiber树`的构建与替换——对应着`DOM树`的创建与更新

[双缓存机制--react技术揭秘](https://react.iamkasong.com/process/doubleBuffer.html#%E4%BB%80%E4%B9%88%E6%98%AF-%E5%8F%8C%E7%BC%93%E5%AD%98)

##### “递”阶段

首先从`rootFiber`开始向下深度优先遍历。为遍历到的每个`Fiber节点`调用[beginWork方法](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3040)。

该方法会根据传入的`Fiber节点`创建`子Fiber节点`，并将这两个`Fiber节点`连接起来。

当遍历到叶子节点（即没有子组件的组件）时就会进入“归”阶段。

##### “归”阶段

在“归”阶段会调用[completeWork](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652)处理`Fiber节点`。

当某个`Fiber节点`执行完`completeWork`，如果其存在`兄弟Fiber节点`（即`fiber.sibling !== null`），会进入其`兄弟Fiber`的“递”阶段。

如果不存在`兄弟Fiber`，会进入`父级Fiber`的“归”阶段。

“递”和“归”阶段会交错执行直到“归”到`rootFiber`。至此，`render阶段`的工作就结束了。

```react
function App() {
  return (
    <div>
      i am
      <span>KaSong</span>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
```



<img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ggjchu13rzj310a0u0wfp.jpg" style="zoom:33%;" />

### commit阶段

- before mutation阶段（执行`DOM`操作前）

  > 是因为`Stack Reconciler`重构为`Fiber Reconciler`后，`render阶段`的任务可能中断/重新开始，对应的组件在`render阶段`的生命周期钩子（即`componentWillXXX`）可能触发多次 ----对应最开始生命周期的变化

- mutation阶段（执行`DOM`操作）

- layout阶段（执行`DOM`操作后）

#### 双缓存Fiber树
在React中最多会同时存在两棵Fiber树。当前屏幕上显示内容对应的Fiber树称为current Fiber树，正在内存中构建的Fiber树称为workInProgress Fiber树。

current Fiber树中的Fiber节点被称为current fiber，workInProgress Fiber树中的Fiber节点被称为workInProgress fiber，他们通过alternate属性连接。
```
currentFiber.alternate === workInProgressFiber;
workInProgressFiber.alternate === currentFiber;
```
React应用的根节点通过使current指针在不同Fiber树的rootFiber间切换来完成current Fiber树指向的切换。

即当workInProgress Fiber树构建完成交给Renderer渲染在页面上后，应用根节点的current指针指向workInProgress Fiber树，此时workInProgress Fiber树就变为current Fiber树。

每次状态更新都会产生新的workInProgress Fiber树，通过current与workInProgress的替换，完成DOM更新。
#### react 核心diff算法机制

> **寻找过程中在旧 `children` 中所遇到的最大索引值**。如果在后续寻找的过程中发现存在索引值比**最大索引值**小的节点，意味着该节点需要被移动。

```js

// 之前
abcd

// 之后
acdb

===第一轮遍历开始===
a（之后）vs a（之前）  
key不变，可复用
此时 a 对应的oldFiber（之前的a）在之前的数组（abcd）中索引为0
所以 lastPlacedIndex = 0;

继续第一轮遍历...

c（之后）vs b（之前）  
key改变，不能复用，跳出第一轮遍历
此时 lastPlacedIndex === 0;
===第一轮遍历结束===

===第二轮遍历开始===
newChildren === cdb，没用完，不需要执行删除旧节点
oldFiber === bcd，没用完，不需要执行插入新节点

将剩余oldFiber（bcd）保存为map

// 当前oldFiber：bcd
// 当前newChildren：cdb

继续遍历剩余newChildren

key === c 在 oldFiber中存在
const oldIndex = c（之前）.index;
此时 oldIndex === 2;  // 之前节点为 abcd，所以c.index === 2
比较 oldIndex 与 lastPlacedIndex;

如果 oldIndex >= lastPlacedIndex 代表该可复用节点不需要移动
并将 lastPlacedIndex = oldIndex;
如果 oldIndex < lastplacedIndex 该可复用节点之前插入的位置索引小于这次更新需要插入的位置索引，代表该节点需要向右移动

在例子中，oldIndex 2 > lastPlacedIndex 0，
则 lastPlacedIndex = 2;
c节点位置不变

继续遍历剩余newChildren

// 当前oldFiber：bd
// 当前newChildren：db

key === d 在 oldFiber中存在
const oldIndex = d（之前）.index;
oldIndex 3 > lastPlacedIndex 2 // 之前节点为 abcd，所以d.index === 3
则 lastPlacedIndex = 3;
d节点位置不变

继续遍历剩余newChildren

// 当前oldFiber：b
// 当前newChildren：b

key === b 在 oldFiber中存在
const oldIndex = b（之前）.index;
oldIndex 1 < lastPlacedIndex 3 // 之前节点为 abcd，所以b.index === 1
则 b节点需要向右移动
===第二轮遍历结束===

最终acd 3个节点都没有移动，b节点被标记为移动
```



## Vue Vs React

#####  - vue渐进式框架的含义

- 渐进式的含义：主张最少  提供给你很多的选择  但是依据不同的场景  你只需要其中的一部分就可以
- 框架做分层射界，每层都可选
- 它本身承担了较难的部分 留给她的使用者较为简单的做加法的部分

##### - react

1. react 不是一个 mvvm 的框架 侧重于 view 层，是单向的从数据到视图的渲染，而非数据绑定。

2. 使用 jsx 语法创建组件，函数式的 ui 编程
3. react 使用 js 包含 html  而 vue 用 HTML 来包含 js
4. react 属于软侵入，也有一定程度的主张。

##### 两者对比

- 数据是不是可变的 
  - react'中推崇使用 immutable 来实现数据不可变。而 vue 是响应式的  基于数据可变的  属性变化的时候 对应更新虚拟 dom
  - 两者对于 数据变化的感知不同
- 各自的处理方式不同  vue 是模板引擎  react 是 jsx
- vue 是双向数据绑定  而 react 是单向数据流
- vue 中的组件引用分为全局注册和组件注册   react 中 通过 import 相应组件 然后在模板中引用
- 生态系统 vue 由官方维护  react 由社区维护
- 脚手架 vue-cli 的功能 更加强大

