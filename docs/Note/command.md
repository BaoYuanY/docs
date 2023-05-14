## htop
### 安装
```shell
yum install htop
```
### 示例
```shell
[root@VM-4-10-centos ~]#  htop
```

<img src="/image/Linux/htop.png">

## nvm / node
### 安装
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash


# 安装完成后需要执行以下命令使修改的内容生效
source ~/.bashrc
```

<p>输入一下命令验证是否生效</p>

```shell
nvm --version
```

<p>使用 nvm 安装 node</p>

```shell
# 安装14.18版本的node
nvm install 14.18
# 安装12.8版本的node
nvm install 12.8
# 使用某一个node版本
nvm use 14.18
# 查看node版本
node -v
```