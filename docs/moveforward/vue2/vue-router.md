#### vue-router 的原理

[vue-router 原理剖析](https://juejin.im/post/5b08c9ccf265da0dd527d98d#heading-1)

[window.onpopstate---mdn 解释](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate)

> 目前浏览器中这一功能的实现主要有两种

-   使用 url 中的 hash，#后面的 hash 值的变化 并不会向服务器发出请求，也不会刷新页面

    ```js
    http://www.xxx.com/#/login
    ```

    监听浏览器事件的 popstate

    当活动历史记录条目更改的时候，触发 popstate 事件，也就是做出浏览器动作的时候，才会触发该事件，如用户点击浏览器的回退按钮

    ```js
    window.history.pushState(null, null, '#historyVideo');
    window.addEventListener('popstate', this.videoBack, false);
    ```

-   使用 h5 的 history,通过 back、forward、go 等方法，我们可以读取到浏览器 历史纪录栈的信息进行各种跳转工作，html5 中引入了 pushState 和 replaceState，添加和修改历史记录条目，通常与 window.onpopstate 配合使用

> `每当处于激活状态的历史记录条目发生变化时,popstate`事件就会在`对应window`对象上触发

```js
function matchAndUpdate() {
    // todo 匹配路径 做 dom 更新操作
}

window.addEventListener('popstate', matchAndUpdate);
```

##### 两种模式的比较

-   pushState 设置的新 url 可以是与当前 url 同源的任意 url，而 hash 直可修改#后面的部分
-   pushState 设置的新 url 与当前 url 一模一样，也会把记录添加到栈中，而 hash 设置的新值与原来不一样才会触发记录添加到栈中
-   pushState 可以添加任意类型的数据到记录中，而 hash 只可添加短字符串



**注意点**

history模式下 需要后台配置支持，需要在服务端增加一个覆盖所有情况的候选资源，如果url匹配不到任何静态资源，应该返回同一个index.html 这个页面就是你的app所依赖的页面

hash模式下 可以通过window.location.hash来设置hash  根据window.addEventListenrt(‘hashchange') 来监听hash值的变化

```js
window.location.hash='abc';
let hash = window.location.hash //'#abc'

window.addEventListener('hashchange',function(){
	//监听hash变化，点击浏览器的前进后退会触发
})
```

#### 浏览器回退刷新

**方案一**

document.referrer,副作用是会额外生成历史记录，导致再次回退的时候 又回到当前页面

> **`Document.referrer`** 返回的是一个 [URI](http://www.w3.org/Addressing/#background), 当前页面就是从这个 URI 所代表的页面 跳转或打开的.

```js
window.location.href = document.referrer;
```

**方案二： 监听页面的 pageshow 事件**

> 当一条会话历史记录被执行的时候 触发页面的显示事件

```js
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        window.location.reload();
    }
});
```

**方案三： 使用 history 对象修改当前的历史记录**

```js
var json = { time: newDate().getTime() };
window.history.replaceState(json, '', window.location.href + '&t=' + newDate().getTime());
window.location.href = url;
```

**方案四：vue -router 的 keep-alive 设置为 false**

由于 keep-alive 会把所有加载过的页面缓存起来，导致再次进入这个页面的时候 不会重新加载

可以 router.beforeEach 的钩子函数中进行设置