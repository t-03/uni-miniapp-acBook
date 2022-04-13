/**
 * uni.navigateTo(OBJECT)
 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
 * @param url {String} 页面路由
 * See：{@link https://uniapp.dcloud.io/api/router?id=navigateto|文档}
 */
export function navigateTo (url) {
  uni.navigateTo({
    url
  });
}

/**
 * uni.redirectTo(OBJECT)
 * 关闭当前页面，跳转到应用内的某个页面。
 * @param url {String} 页面路由
 * See：{@link https://uniapp.dcloud.io/api/router?id=redirectto|文档}
 */
export function redirectTo (url) {
  uni.redirectTo({
    url
  });
}

/**
 * uni.reLaunch(OBJECT)
 * 关闭所有页面，打开到应用内的某个页面。
 * @param url {String} 页面路由
 * See：{@link https://uniapp.dcloud.io/api/router?id=relaunch|文档}
 */
export function reLaunch (url) {
  uni.reLaunch({
    url
  });
}

/**
 * uni.switchTab(OBJECT)
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 * @param url {String} 页面路由
 * See：{@link https://uniapp.dcloud.io/api/router?id=switchtab|文档}
 */
export function switchTab (url) {
  uni.switchTab({
    url
  });
}

/**
 * uni.navigateBack(OBJECT)
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 * @param delta {Number} 返回的页面数
 * See：{@link https://uniapp.dcloud.io/api/router?id=navigateback|文档}
 */
export function navigateBack (delta = 1) {
  uni.navigateBack({
    delta
  });
}
