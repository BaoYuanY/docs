# Linux安装node
## 使用 epel 来安装 node
```shell
sudo yum install epel-release
sudo yum install nodejs
node --version
```
## 安装 npm 和 express
```shell
sudo yum install npm --enablerepo=epel
sudo npm install -g express
sudo npm install -g express-generator
```