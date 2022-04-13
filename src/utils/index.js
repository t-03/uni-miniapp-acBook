import { showToast } from "@/utils/uni-app/uniapp";
import { reLaunch } from "@/utils/uni-app/jump";

/**
 * 解析时间到字符串
 * @param time {(Object|String|Number)}
 * @param cFormat {String}
 * @returns {string|null}
 */
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
}

/**
 * 解析日期时间到时间戳
 * @param date {Date} 日期时间
 * @param digits {Boolean} 是否是10位时间戳
 * @returns {number}
 */
export function dateParseTime (date, digits = true) {
  return digits ? Date.parse(new Date(date)) / 1000 : Date.parse(new Date(date));
}

/**
 * 格式化时间
 * @param time {Number}
 * @param option {String}
 * @returns {string}
 */
export function formatTime (time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() + 1 + "月" + d.getDate() + "日" + d.getHours() + "时" + d.getMinutes() + "分"
    );
  }
}

/**
 * 获取URL对象
 * @param url {String}
 * @returns {Object}
 */
export function getQueryObject (url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * 追加URL参数
 * @param key
 * @param value
 * @param url
 * @returns {string}
 */
export function updateQueryString (key, value, url = window.location.href) {
  if (!value) {
    return url;
  }
  let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  let separator = url.indexOf("?") !== -1 ? "&" : "?";
  if (url.match(re)) {
    return url.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return url + separator + key + "=" + value;
  }
}

/**
 * 字节长度
 * @param str {String}
 * @returns {*}
 */
export function byteLength (str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) {
      s++;
    } else if (code > 0x7ff && code <= 0xffff) {
      s += 2;
    }
    if (code >= 0xdc00 && code <= 0xdfff) {
      i--;
    }
  }
  return s;
}

/**
 * @param actual {Array}
 * @returns {[]}
 */
export function cleanArray (actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * @param json {Object}
 * @returns {string}
 */
export function param (json) {
  if (!json) {
    return "";
  }
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) {
        return "";
      }
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
  ).join("&");
}

/**
 * @param url {String}
 * @returns {{}|any}
 */
export function param2Obj (url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    "{\"" +
    decodeURIComponent(search)
      .replace(/"/g, "\\\"")
      .replace(/&/g, "\",\"")
      .replace(/=/g, "\":\"")
      .replace(/\+/g, " ") +
    "\"}"
  );
}

/**
 * @param val {String}
 * @returns {string}
 */
export function html2Text (val) {
  const div = document.createElement("div");
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * 合并两个对象，给出最后一个优先级
 * @param target {Object}
 * @param source {(Object|Array)}
 * @returns {{}|*}
 */
export function objectMerge (target, source) {
  if (typeof target !== "object") {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === "object") {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

/**
 * @param element {HTMLElement}
 * @param className {String}
 */
export function toggleClass (element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += "" + className;
  } else {
    classString =
      classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * @param type {String}
 * @returns {Date|number}
 */
export function getTime (type) {
  if (type === "start") {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

/**
 * @param func {Function}
 * @param wait {Number}
 * @param immediate {Boolean}
 * @returns {function(...[*]=): *}
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * 这只是深度复制的简单版本，有很多边缘案例的错误，如果要使用完美的深层副本，请使用lodash的_.cloneDeep
 * @param source {Array|Object}
 * @returns {[]|{}}
 */
export function deepClone (source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

/**
 * 数组转字符串
 * @param arr {Array}
 * @returns {string}
 */
export function aConvertStr (arr) {
  let string = "";
  arr.forEach(i => {
    string += `${i},`;
  });
  return string.slice(0, -1);
}

export function aConvertOptions (arr) {
  let string = "";
  arr.forEach(i => {
    string += `${i.name},`;
  });
  return string.slice(0, -1);
}

/**
 * 字符串通过 , 转数组
 * @param str {String}
 * @returns {[]}
 */
export function sConvertArr (str) {
  let arr = [];
  if (str === "") {
    return arr;
  }
  const array = str.split(",");
  array.map(i => {
    arr.push(i);
  });
  return arr;
}

/**
 * @param arr {Array}
 * @returns {unknown[]}
 */
export function uniqueArr (arr) {
  return Array.from(new Set(arr));
}

/**
 * @returns {string}
 */
export function createUniqueString () {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * 检查一个元素是否有一个类
 * @param ele {HTMLElement}
 * @param cls {String}
 * @returns {boolean}
 */
export function hasClass (ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * 将类添加到元素
 * @param ele {HTMLElement}
 * @param cls {String}
 */
export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += " " + cls;
  }
}

/**
 * 从元素中删除类
 * @param ele {HTMLElement}
 * @param cls {String}
 */
export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * 对象转换为数组
 * @param obj {Object}
 * @returns {[]}
 */
export function objToArr (obj) {
  const arr = [];
  arr.push(obj);
  return arr;
}

/**
 * 刷新当前页面
 */
export function locationHref () {
  setTimeout(() => {
    location.reload();
  }, 500);
}

/**
 * 角色对象转数组
 * @param roles {Object} 角色数组对象
 * @returns {[]}
 */
export function roleObjToArr (roles) {
  const arr = [];
  Object.keys(roles).forEach(v => {
    arr.push(v);
  });
  return arr;
}

/**
 * 处理登录回调
 */
export function handleUrlCallback () {
  let url = "";
  uni.getStorage({
    key: "loginReturnUrl",
    success (e) {
      url = e.data;
      uni.removeStorage({
        key: "loginReturnUrl",
        success: function () {
          showToast("登录成功");
          //todo 登录成功回跳首页
          reLaunch("/pages/main/main");
          console.log(url);
          // if (url === "/" || url === "/pages/login/login-pass") {
          //   reLaunch("/pages/main/main");
          // } else {
          //   reLaunch(`${url}`);
          // }
        }
      });
    },
    fail () {
      reLaunch("/pages/main/main");
    }
  });
}

/**
 * 处理时间
 * @param s {string|number} 开始时间
 * @param e {string|number} 结束时间
 * @returns {string} 0 未开始 1 进行中 2 已结束
 */
export function onJudgmentTime (s, e) {
  const now = Math.round(new Date().getTime() / 1000).toString();
  console.log("当前时间", now);
  console.log("开始时间", s);
  console.log("结束时间", e);
  if (now < s) {
    return "0";
  }
  if (now > s && now < e) {
    return "1";
  }
  if (now > e) {
    return "2";
  }
  return "0";
}

/**
 * 处理订单详情门票
 * @param array {Array} 订单详情门票数组
 * @returns {*}
 */
export function handleOrderDetailTicket (array) {
  let arr = [];
  if (array !== undefined && array !== null) {
    for (let arrayElement of array) {
      for (let oElement of arrayElement.baomingxx) {
        arr.push({
          ...arrayElement,
          ...oElement
        });
      }
    }
  }
  return arr;
}
