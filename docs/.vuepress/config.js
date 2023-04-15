import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'BaoYuan',
    description: '宝源的学习笔记记录',
    head: [
        ['link', { rel: 'icon', href: '/tx.png' }],
        ['meta', { name: 'author', href: '笔记' }],
        ['meta', { name: 'BaoYuan', href: '笔记' }],
    ],
    theme: defaultTheme({
        colorModeSwitch: true,
        repo: 'https://github.com/YBY-BaoYuan/docs',
        repoLabel: 'GitHub',
        sidebarDepth: 2,
        lastUpdated: true,
        lastUpdatedText: '更新时间',
        editLink: false,
        logo: '/tx.png',
        home: '/',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'Linux',
                children: ['CentOS', 'Ubuntu'],
            },
            {
                text: 'Go',
                link: '/Go/',
            },
            {
                text: 'Python',
                link: '/Python/',
            },
            {
                text: 'PHP',
                link: '/PHP/',
            }
        ]
    })
})