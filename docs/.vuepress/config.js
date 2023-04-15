import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'


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
    }),
    plugins: [
        pwaPlugin({
            skipWaiting: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "立即刷新"
            }
        }),
    ],
})