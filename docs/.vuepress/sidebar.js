module.exports = {
    '/algorithm/': [
        '/algorithm/',
        {
            title: '常见',
            children: [
                '/algorithm/斐波那契数列'
            ]
        },
        {
            title: '贪心算法',
            children: [
                '/algorithm/greed'
            ]
        },
        {
            title: '二分查找算法',
            children: [
                '/algorithm/binarySearch'
            ]
        }
    ],
    // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
    '/moveforward/': [
        {
            title: 'http协议',
            children: [
                ['/moveforward/http协议/正向代理和反向代理.md', '正向代理和反向代理'],
                ['/moveforward/http协议/http 协议.md', 'http 协议'],
                ['/moveforward/http协议/http安全问题.md', 'http安全问题'],
                ['/moveforward/http协议/http缓存.md', 'http缓存'],
                ['/moveforward/http协议/http升级演变.md', 'http升级演变'],
                ['/moveforward/http协议/https的加密过程.md', 'https的加密过程'],
            ]
        },
        {
            title: 'node',
            children: [
                ['/moveforward/node/洋葱模型.md', '洋葱模型'],
            ]
        },
        {
            title: 'Typescript',
            children: [
                ['/moveforward/Typescript/Interfaces vs Types in TypeScript.md', 'Types和interfaces的区别'],
            ]
        },
        {
            title: 'JS',
            children: [
                '/moveforward/js/防抖和节流',
                '/moveforward/js/axios调用方法',
                '/moveforward/js/函数式编程',
                '/moveforward/js/原型',
            ]
        },
        {
            title: '小程序',
            children: [
                ['/moveforward/小程序/小程序性能优化', '小程序性能优化'],
                ['/moveforward/小程序/小程序双线程模型', '小程序双线程模型'],
            ]
        },
        {
            title: 'vue',
            children: [
                ['/moveforward/vue2/虚拟dom.md', '虚拟dom'],
                ['/moveforward/vue2/vue-router.md', 'vue-router'],
                ['/moveforward/vue2/vue.md', 'vue'],
                ['/moveforward/vue2/vue的插件机制.md', 'vue的插件机制'],
                ['/moveforward/vue2/vue的混入策略.md', 'vue的混入策略'],
                ['/moveforward/vue2/vue的key.md', 'vue的key'],
                ['/moveforward/vue2/vue高频.md', 'vue高频'],
                ['/moveforward/vue2/vue生命周期.md', 'vue生命周期'],
                ['/moveforward/vue2/vue自定义指令.md', 'vue自定义指令'],
                ['/moveforward/vue2/vue组件通信.md', 'vue组件通信'],
                ['/moveforward/vue3/聊一聊vue3的知识点.md', '聊一聊vue3的知识点'],
            ]
        },
        {
            title: 'react',
            children: [
                ['/moveforward/react/react的fiber架构.md', 'react的fiber架构'],
            ]
        },
        {
            title: '项目思考',
            children: [
                ['/moveforward/思考和方法论/思考和表达的方法论.md', '思考和表达的方法论'],
                ['/moveforward/思考和方法论/项目思考论.md', '项目思考论.'],
                ['/moveforward/思考和方法论/小米项目.md', '小米项目.'],
            ]
        },
        {
            title: '工程化',
            children: [
                ['/moveforward/工程化/灵魂拷问.md', '灵魂拷问'],
                ['/moveforward/工程化/前端工程化之错误监控和异常上报.md', '前端工程化之错误监控和异常上报'],
                ['/moveforward/工程化/前端工程化之webpack.md', '前端工程化之webpack'],
                ['/moveforward/工程化/前端架构.md', '前端架构'],
                ['/moveforward/工程化/前端性能优化.md', '前端性能优化'],
                ['/moveforward/工程化/commonjs和es6模块的区别.md', 'commonjs和es6模块的区别'],
            ]
        }
    ],
}