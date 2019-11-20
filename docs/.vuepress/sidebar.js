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
            title: 'JS',
            children: [
                '/moveforward/js/防抖和节流',
                '/moveforward/js/2',
                '/moveforward/js/3',
                '/moveforward/js/4',
                '/moveforward/js/5',
                '/moveforward/js/函数式编程',
            ]
        },
        {
            title: 'vue',
            children: [
                ['/moveforward/vue/lifecycle.md', '生命周期'],
                '/moveforward/vue/Vue.js 技术揭秘之数据驱动.md',
            ]
        }
    ],
}