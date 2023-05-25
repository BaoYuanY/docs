import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {pwaPlugin} from '@vuepress/plugin-pwa'
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'
import {searchPlugin} from '@vuepress/plugin-search'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'BaoYuan',
    description: '宝源的学习笔记记录',
    head: [
        ['link', {rel: 'icon', href: '/tx.png'}],
        ['meta', {name: 'author', href: '宝源笔记'}],
        ['meta', {name: 'BaoYuan', href: '宝源笔记'}],
        ['link', {rel: 'manifest', href: '/manifest.webmanifest'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ],
    theme: defaultTheme({
        colorModeSwitch: true,
        repoLabel: 'Telegram',
        repo: 'https://t.me/BaoYuanY',
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
                text: 'Docker',
                link: '/Docker',
            },
            {
                text: '操作系统',
                children: [{
                    text: '编程必备知识',
                    link: '/Computer',
                }, 'Linux', 'MacOS', 'Windows'],
            },
            {
                text: '数据库',
                children: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'Redis'],
            },
            {
                text: '编程语言',
                children: ['Python', 'Go', 'Java', 'PHP'],
            },
            {
                text: '友链',
                children: [
                    {
                        text: 'IT自述',
                        link: 'https://www.itzishu.com/',
                    }
                ],
            },
            // {
            //     text: 'GitHub',
            //     link: 'https://github.com/BaoYuanY',
            // }
        ]
    }),
    plugins: [
        pwaPlugin({
            skipWaiting: true,
        }),
        googleAnalyticsPlugin({
            id: 'G-9LC7BR4R2B',
        }),
        searchPlugin({
            locales: {
                placeholder: "搜索",
                maxSuggestions: 10,
                isSearchable: (page) => page.path !== '/',
            }
        }),
    ],
})