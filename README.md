# webpack-learn
我自己学习webpack的一些记录

## 生成ssh-key

1：执行命令 ssh-keygen -t rsa 然后一直回车(如果已经生成，直接执行第二步)

2：cat ~/.ssh/id_rsa.pub 复制公钥

3：进入github.com，Deploy keys -> Add new 添加公钥

## clone代码

```git
 
 git clone --recursive https://github.com/baiyunfei429/webpack-learn.git

```

## 安装node

首先你需要安装node,版本 5.0以上。安装办法Google一下吧。
node 在Windows下面 可能需要配置一下变量环境。

接下来 打开`terminal` 或者`git bash` npm 就可以用了


### Build Setup

``` bash
这里建议用cnpm install，不过cnpm可能出现问题，某些包缺失;
如果出问题，需要rm -r node_module，先删除所有包，再npm install

# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev


# build for dev to dist
npm run bai:build

```