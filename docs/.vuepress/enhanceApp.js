import { decode } from "querystring";

function integrateGitalk(router) {
    const linkGitalk = document.createElement('link');
    const path = window.location.pathname
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            loadGitalk(to);
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to);
            }
        }
    });

    function loadGitalk(to) {
        let commentsContainer = document.getElementById('gitalk-container');
        if (!commentsContainer) {
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'gitalk-container';
            commentsContainer.classList.add('content');
        }
        const $page = document.querySelector('.page');
        if ($page) {
            $page.appendChild(commentsContainer);
            if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                renderGitalk(to.fullPath);
            }
        }
    }
    function renderGitalk(fullPath) {
        const gitalk = new Gitalk({
            clientID: '00f08d919be92666f54c',
            clientSecret: '8ac1ca34f9380af2a1e595b8944f4e41aedd12b3', // come from github development
            repo: 'majunchang.github.io',
            owner: 'majunchang',
            admin: ['majunchang'],
            id: window.location.pathname,
            distractionFreeMode: false,
            language: 'zh-CN',
        });
        gitalk.render('gitalk-container');
    }
}


export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    try {
        // 生成静态页时在node中执行，没有document对象
        document && integrateGitalk(router)
    } catch (e) {
        console.error(e.message)
    }
}