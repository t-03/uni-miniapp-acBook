import Vue from "vue";
import App from "./App";
import store from "./store";

Vue.prototype.$store = store;

import {
  navigateTo,
  redirectTo,
  reLaunch,
  switchTab,
  navigateBack,
} from "@/utils/uni-app/jump";
import {
  hideLoading,
  makePhoneCall,
  setNavigationBarTitle,
  showLoading,
  showModal,
  showToast,
} from "@/utils/uni-app/uniapp";

import * as filters from "@/filters"; // global filters
import * as PTT from "@/utils/ptt_for_miniapp";
Vue.prototype.$PTT = PTT;

import * as milo from "@/utils/milo";
Vue.prototype.$milo = milo;
milo.init({
  miniappid: "wx2fa647e59a914ef0", //小程序appid
  gameId: "wslg", //固定值
  targetWXAppid: "wxa8625e7d992a74fe", //找开发拿
});

// 注册全局实用程序过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// 使用vConsole，不使用则注释以下两行
// import vConsole from "@/utils/vconsole";
// Vue.use(vConsole);

// 保留当前页面，跳转到应用内的某个页面
Vue.prototype.$nTo = (url) => navigateTo(url);
// 关闭当前页面，跳转到应用内的某个页面。
Vue.prototype.$rTo = (url) => redirectTo(url);
// 关闭所有页面，打开到应用内的某个页面。
Vue.prototype.$rcTo = (url) => reLaunch(url);
// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
Vue.prototype.$sTab = (url) => switchTab(url);
// 关闭当前页面，返回上一页面或多级页面。
Vue.prototype.$nBack = (delta) => navigateBack(delta);

// 加载中动画
Vue.prototype.$oloading = (title) => showLoading(title);
// 关闭加载中动画
Vue.prototype.$cloading = () => hideLoading();
// 设置页面标题
Vue.prototype.$setNav = (title) => setNavigationBarTitle(title);
// 统一提示
Vue.prototype.$msg = (title, duration, mask, icon) =>
  showToast(title, duration, mask, icon);
// 统一显示模态弹窗提示
Vue.prototype.$mdl = (title, content, success, showCancel) =>
  showModal(title, content, success, showCancel);
// 拨打电话
Vue.prototype.$mPhone = (phone) => makePhoneCall(phone);

/**
 * 执行用户授权登录
 */
Vue.prototype.$doWXLogin = (delta = 1) => {
  // 跳转授权页面
  navigateTo(`/pages/login/login?delta=${delta}`);
};

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
