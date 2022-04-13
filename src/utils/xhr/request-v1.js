import axios from "axios";
import axiosAdapterUniapp from "axios-adapter-uniapp";
const md5 = require("md5");
import { getToken } from "@/utils/auth";
import { showToast } from "@/utils/uni-app/uniapp";
import store from "@/store";

axios.defaults.adapter = axiosAdapterUniapp; //uni-app 适配器
/**
 * 创建 axios 实例
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 环境变量base接口地址 url = base url + request url
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 60000, // 请求超时
  validateStatus (status) {
    return status >= 200 && status < 500;
  },
  headers: {
    "content-type": "application/json; charset=UTF-8;",
    // "content-type":"application/x-www-form-urlencoded;charset=UTF-8",
    Authorization: undefined
  }
});
/**
 * 全局 请求拦截器, 支持添加多个拦截器
 * 例如: 配置token、添加一些默认的参数
 * `return config` 继续发送请求
 */
service.interceptors.request.use(
  config => {
    // 设置Token
    getToken() && (config.headers["Authorization"] = "Bearer " + getToken());

    const time = Date.parse(new Date()) / 1000;
    const md5_str = md5(time);

    if (config.method === "get") {
      if (config.params === undefined) {
        config.params = {};
      }
      config.params["timestamp"] = time;
      config.params["signature"] = md5_str;
    } else {
      if (config.data === undefined) {
        config.data = {};
      }
      config.data["timestamp"] = time;
      config.data["signature"] = md5_str;
    }

    console.log(`-----------------------${config.url}请求开始------------------------`);
    console.log("环境变量base接口地址"+process.env.VUE_APP_BASE_API);
    console.log("接口地址：", config.url);
    console.log("接口请求方式：", config.method);
    console.log("接口请求参数：", config.method === "get" ? config.params : config.data);

    return config;
  },
  error => {
    // 做一些请求错误
    console.error(error);
    return Promise.reject(error);
  }
);

/**
 * 全局 响应拦截器, 支持添加多个拦截器
 * 例如: 根据状态码选择性拦截、过滤转换数据
 * @param {Object} res 请求返回的数据
 * @return {Promise<reject>}
 */
service.interceptors.response.use(
  // async (response) => {
  //   console.log("response", response);
  //   const {
  //     data
  //   } = response;

  //   // const { code,  msg } = data;
  //   // eslint-disable-next-line no-unused-vars
  //   // const { code, message: msg } = data;
  //   console.log(
  //     `响应拦截:data: ${JSON.stringify(data)}`
  //   );
  // },
  async res => {
    const {
      status: statusCode,
      data,
      data: { status, msg }
    } = res;
    console.log("接口响应数据", res);
    console.log("-----------------------请求结束------------------------");

    if (statusCode !== 200) {
      return await handleCode(data, statusCode, msg);
    } else {
      return await handleStatus(data, status, msg);
    }
  },
  err => {
    console.log("err:" + err);
    return Promise.reject(err);
  }
);

/**
 * 处理错误状态码
 * @param data {Object|String} 请求返回的数据
 * @param code {Number} HTTP状态码
 * @param msg {String} 错误信息
 * @returns {Promise<never>|*}
 */
function handleCode (data, code, msg) {
  const STATUS = {
    257 () {
      return data;
    },
    256 () {
      showToast(msg);
      return Promise.reject(new Error(msg || "请求错误"));
    },
    400 () {
      showToast(msg);
      return Promise.reject(new Error(msg || "请求错误"));
    },
    401 () {
      showToast(msg);
      //未授权退出登录
      store.dispatch("users/localLogout").then(() => {
        this.$rcTo("/pages/main/main");
      });

      return Promise.reject(new Error(msg || "请求未授权"));
    },
    403 () {
      showToast(msg);
      return Promise.reject(new Error(msg || "请求未授权"));
    },
    500 () {
      showToast(msg);
      return Promise.reject(new Error("服务器错误"));
    }
  };
  // 有状态码但不在这个封装的配置里，就直接返回错误
  return STATUS[code] ? STATUS[code]() : Promise.reject(data);
}

/**
 * 处理错误状态码
 * @param data {Object|String}
 * @param status {Number}
 * @param msg {String}
 * @returns {*|Promise<never>}
 */
function handleStatus (data, status, msg) {
  const STATUS = {
    0 () {
      showToast(msg);
      return Promise.reject(data);
    },
    1 () {
      return data;
    }
  };
  // 有状态码但不在这个封装的配置里，就直接返回错误
  return STATUS[status] ? STATUS[status]() : Promise.reject(data);
}

export { service as axios };
