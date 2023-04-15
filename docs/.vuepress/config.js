import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'BaoYuan',
    description: '宝源的学习笔记记录',
    head: [
        ['link', { rel: 'icon', href: '/tx.png' }],
        ['meta', { name: 'author', href: '宝源笔记' }],
        ['meta', { name: 'BaoYuan', href: '宝源笔记' }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    theme: defaultTheme({
        colorModeSwitch: true,
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
                text: '操作系统',
                children: ['Linux', 'MacOS', 'Windows'],
            },
            {
                text: '数据库',
                children: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'Redis'],
            },
            {
                text: '编程语言',
                children: ['Python', 'Go', 'Java', 'PHP'],
            }
        ]
    }),
    plugins: [
        pwaPlugin(),
        pwaPopupPlugin({
            locales: {
                '/': {
                    message: '发现新内容可用',
                    buttonText: '刷新',
                }
            },
        }),
    ],
})