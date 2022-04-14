# 项目初始化

## 前序准备

你需要在本地安装[yarn](https://github.com/yarnpkg/yarn) 、[node](http://nodejs.org/) 和 [git](https://git-scm.com/) 。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/) 、[vue](https://cn.vuejs.org/index.html) 、[vuex](https://vuex.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 提前了解和学习这些知识会对使用本项目有很大的帮助。

## 安装依赖

```shell
yarn install
```

## 小程序启动项目

npm run dev:mp-weixin

## 小程序打包项目

npm run build:mp-weixin

## 接口配置 milo 参数

main.js 中 milo 初始化配置相关参数
miniappid: "wx2fa647e59a914ef0", //小程序 appid
gameId: "wslg", //固定值
targetWXAppid: "wxa8625e7d992a74fe", //找开发拿

## 接口固定参数（存放于 store/modules/users 的 state 中）

targetWXAppid:"wxa8625e7d992a74fe", //同上同一个，找开发拿
activityId:"439280",//接口固定参数，找开发拿
sWXType:1,//接口固定参数，找开发拿

## 填写项目名称

page.json 中 navigationBarTitleText
manifest.json 中 name
vue.config.js 中 name

全局搜索 appid 更换小程序 appid

## 数据上报

参考 utils/ptt_for_miniapp.js 文档描述配置参数
