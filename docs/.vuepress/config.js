module.exports = {
    title: '前端进阶社区',
    description: '种一棵树最好的时间是十年前，其次是现在。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    base: '/fe-imporve/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '最后更新时间', // 文档更新时间：每个文件git最后提交的时间
        nav: require('./nav'),
        sidebar: require('./sidebar'),

    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/nprogress'
    ]
}


