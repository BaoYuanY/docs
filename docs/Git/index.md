---
date: 2023-08-14 23:10:00
description: Git学习
head:
  - [link, { rel: 'manifest', href: '/manifest/git.json'}]
---

## 安装 Git
> 根据自己的系统去安装Git

[Git官网](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

## 配置 user 信息
```shell
# 全局配置
git config --global user.name '***'
git config --global user.email '***'

# 单项目配置(--local) 在对应目录配置
git config user.name '***'
git config user.email '***'

# 显示 config 的配置  加 --list
git config --list --local
git config --list --global
git config --list --system
```

## 建 Git 仓库
### 1. 把已有的项目代码纳入Git管理
```shell
cd 项目代码所在的文件夹
git init
```
### 2. 新建的项目直接用GIt管理
```shell
cd 某个文件夹
git init 项目文件夹 #会在当前路径下创建和项目名称同名的文件夹
cd 项目文件夹
```

## 简单提交
```shell
# 添加文件
# touch text.txt
git add .
git commit -m "添加文件"

# 查看状态
git status

# 查看日志
git log
```