(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js-调用栈机制与es6尾调用优化介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-调用栈机制与es6尾调用优化介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" js 调用栈机制与ES6尾调用优化介绍")]),t._v(" "),a("p",[t._v("调用栈的英文名叫做Call Stack，大家或多或少是有听过的，但是对于js调用栈的工作方式以及如何在工作中利用这一特性，大部分人可能没有进行过更深入的研究，这块内容可以说对我们前端来说就是所谓的基础知识，咋一看好像用处并没有很大，但掌握好这个知识点，就可以让我们在以后可以走的更远，走的更快！")]),t._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("ol",[a("li",[t._v("数据结构：栈")]),t._v(" "),a("li",[t._v("调用栈是什么？用来做什么？")]),t._v(" "),a("li",[t._v("调用栈的运行机制")]),t._v(" "),a("li",[t._v("调用栈优化内存")]),t._v(" "),a("li",[t._v("调用栈debug大法")])]),t._v(" "),a("h3",{attrs:{id:"数据结构：栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构：栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构：栈")]),t._v(" "),a("p",[t._v("栈是一种遵从"),a("strong",[t._v("后进先出("),a("code",[t._v("LIFO")]),t._v(")原则的有序集合")]),t._v("，新元素都靠近栈顶，旧元素都接近栈底。")]),t._v(" "),a("p",[t._v("生活中的栗子，帮助一下理解：")]),t._v(" "),a("p",[t._v("餐厅里面堆放的盘子(栈)，一开始放的都在下面(先进)，后面放的都在上面(后进)，洗盘子的时候先从上面开始洗(先出)。")]),t._v(" "),a("h3",{attrs:{id:"调用栈是什么？用来做什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈是什么？用来做什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用栈是什么？用来做什么？")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("调用栈是一种栈结构的数据，它是由调用侦组成的")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("调用栈记录了函数的执行顺序和函数内部变量等信息")]),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"调用栈的运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈的运行机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用栈的运行机制")]),t._v(" "),a("p",[a("strong",[t._v("机制")]),t._v("：")]),t._v(" "),a("p",[t._v("程序运行到一个函数，它就会将其添加到调用栈中，当从这个函数返回的时候，就会将这个函数从调用栈中删掉。")]),t._v(" "),a("p",[t._v("看一下例子帮助理解：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用栈中的执行步骤用数字表示")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 添加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 添加 => 3 运行完成，内部没有再调用其他函数，删掉")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 添加 => 5 删掉")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行完成 删掉printSquare")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("调用栈中的执行步骤如下(删除multiply的步骤被省略了)：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16acb4a439190d49?raw=true",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("调用侦")]),t._v("：")]),t._v(" "),a("p",[t._v("每个进入到调用栈中的函数，都会分配到一个单独的栈空间，称为“调用侦”。")]),t._v(" "),a("p",[t._v("在调用栈中每个“调用侦”都对应一个函数，最上方的调用帧称为“当前帧”，调用栈是由所有的调用侦形成的。")]),t._v(" "),a("p",[t._v("找到一张图片，调用侦：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16ace8030a36c8dd?raw=true",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"调用栈优化内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈优化内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用栈优化内存")]),t._v(" "),a("p",[a("strong",[t._v("调用栈的内存消耗")]),t._v("：")]),t._v(" "),a("p",[t._v("如上图，函数的变量等信息会被调用侦保存起来，所以"),a("strong",[t._v("调用侦中的变量不会被垃圾收集器回收")]),t._v("。")]),t._v(" "),a("p",[t._v("当函数嵌套的层级比较深了，调用栈中的调用侦比较多的时候，这些信息对内存消耗是非常大的。")]),t._v(" "),a("p",[t._v("针对这种情况除了我们要尽量避免函数层级嵌套的比较深之外，ES6提供了“尾调用优化”来解决调用侦过多，引起的内存消耗过大的问题。")]),t._v(" "),a("p",[a("strong",[t._v("何谓尾调用")]),t._v("：")]),t._v(" "),a("p",[t._v("尾调用指的是："),a("strong",[t._v("函数的最后一步是调用另一个函数")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一步调用另一个函数并且使用return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有return 不算尾调用 因为不知道后面还有没有操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return undefined; // 隐式的return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("尾调用优化优化了什么？")])]),t._v(" "),a("p",[t._v("尾调用用来"),a("strong",[t._v("删除外层无用的调用侦")]),t._v("，只保留内层函数的调用侦，来节省浏览器的内存。")]),t._v(" "),a("p",[t._v("下面这个例子调用栈中的调用侦一直只有一项，如果不使用尾调用的话会出现三个调用侦：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 添加a到调用栈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在调用栈中删除a 添加b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除b 添加c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("防止爆栈")]),t._v("：")]),t._v(" "),a("p",[t._v("浏览器对"),a("a",{attrs:{href:"https://codeday.me/bug/20170824/62171.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("调用栈都有大小限制"),a("OutboundLink")],1),t._v("，在ES6之前递归比较深的话，很容易出现“爆栈”问题(stack overflow)。")]),t._v(" "),a("p",[t._v("现在可以使用“尾调用优化”来写一个“尾递归”，只保存一个调用侦，来防止爆栈问题。")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧。")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果要使用外层函数的变量，可以通过参数的形式传到内层函数中")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" aa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" aa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了外层函数的参数aa")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无法进行尾调用优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("尾调用优化只在严格模式下开启，非严格模式是无效的。")]),t._v(" "),a("li",[t._v("如果环境不支持“尾调用优化”，代码还可以正常运行，是无害的！")])]),t._v(" "),a("p",[a("strong",[t._v("更多")]),t._v("：")]),t._v(" "),a("p",[t._v("关于尾递归以及更多尾调用优化的内容，推荐查阅"),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6入门-阮一峰"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"调用栈debug大法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈debug大法","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用栈debug大法")]),t._v(" "),a("p",[a("strong",[t._v("查看调用栈有什么用")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("查看函数的调用顺序是否跟预期一致，比如不同判断调用不同函数。")])]),t._v(" "),a("li",[a("p",[t._v("快速定位问题/修改三方库的代码。")]),t._v(" "),a("p",[t._v("当接手一个历史项目，或者引用第三方库出现问题的时候，可以先查看对应API的调用栈，找到其中涉及的关键函数，针对性的修复它。")]),t._v(" "),a("p",[t._v("通过查看调用栈的形式，帮助我快速定位问题，修改三方库的源码。")])])]),t._v(" "),a("p",[a("strong",[t._v("如何查看调用栈")])]),t._v(" "),a("ol",[a("li",[t._v("只查看调用栈："),a("code",[t._v("console.trace")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" aa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("如图所示,点击右侧还能查看代码位置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16ad3f508ab127a9?raw=true",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("bugger")]),t._v("打断点形式，这也是我最喜欢的调试方式：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/OBKoro1/articleImg_src/blob/master/juejin/16ad3ff354f2dac3?raw=true",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("本文主要讲了这几个方面的内容：")]),t._v(" "),a("ol",[a("li",[t._v("理解调用栈的运行机制，对代码背后的一些执行机制也可以更加了解，帮助我们在百尺竿头更进一步。")]),t._v(" "),a("li",[t._v("我们应该在日常的code中，有意识的使用ES6的“尾调用优化”，来减少调用栈的长度，节省客户端内存。")]),t._v(" "),a("li",[t._v("利用调用栈，对第三方库或者不熟悉的项目，可以更快速的定位问题，提高我们debug速度。")])]),t._v(" "),a("p",[t._v("最后：之前写过一篇关于"),a("a",{attrs:{href:"https://juejin.im/post/5b40581e5188251ac446c716",target:"_blank",rel:"noopener noreferrer"}},[t._v("垃圾回收机制与内存泄露"),a("OutboundLink")],1),t._v("的文章，感兴趣的同学可以扩展一下。")]),t._v(" "),a("p",[t._v("以上2019/5/19")]),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b40581e5188251ac446c716",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS垃圾回收机制与常见内存泄露的解决方法"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6入门-阮一峰"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5a05b4576fb9a04519690d42",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 如何工作：对引擎、运行时、调用堆栈的概述"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010360316",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅析javascript调用栈"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);