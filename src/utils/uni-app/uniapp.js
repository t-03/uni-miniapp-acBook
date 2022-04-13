/**
 * uni.showToast(OBJECT)
 * 显示消息提示框。
 * @param title {String} 提示内容
 * @param duration {Number} 动画时长
 * @param mask {Boolean} 是否显示蒙层
 * @param icon {String} 图标
 * See：{@link https://uniapp.dcloud.io/api/ui/prompt?id=showtoast |文档}
 */
export function showToast (title, duration = 1500, mask = false, icon = "none") {
  if (Boolean(title) === false) {
    return;
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon
  });
}

/**
 * uni.hideToast()
 * 隐藏消息提示框。();
 * See：{@link https://uniapp.dcloud.io/api/ui/prompt?id=hidetoast |文档}
 */
export function hideToast () {
  uni.hideToast();
}

/**
 * uni.showLoading(OBJECT)
 * 显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。
 * @param title {String} 提示的内容
 * @param mask {Boolean} 是否显示透明蒙层，防止触摸穿透
 * See：{@link https://uniapp.dcloud.io/api/ui/prompt?id=showloading |文档}
 */
export function showLoading (title = "加载中...", mask = true) {
  if (Boolean(title) === false) {
    return;
  }
  uni.showLoading({
    title,
    mask
  });
}

/**
 * uni.hideLoading()
 * 隐藏 loading 提示框。
 * See：{@link https://uniapp.dcloud.io/api/ui/prompt?id=hideloading |文档}
 */
export function hideLoading () {
  uni.hideLoading();
}

/**
 * uni.setNavigationBarTitle(OBJECT)
 * 动态设置当前页面的标题。
 * @param title {String} 页面的标题
 * See：{@link https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle |文档}
 */
export function setNavigationBarTitle (title) {
  if (Boolean(title) === false) {
    return;
  }
  uni.setNavigationBarTitle({
    title
  });
}

/**
 * uni.showModal(OBJECT)
 * 显示模态弹窗，类似于标准 html 的消息框：alert、confirm。
 * @param title {String} 提示的标题
 * @param content {String} 提示的内容
 * @param success {Function} 接口调用成功的回调函数
 * @param showCancel {Boolean} 是否显示取消按钮，默认为 true
 * See：{@link https://uniapp.dcloud.net.cn/api/ui/prompt?id=showmodal | 文档}
 */
export function showModal (title, content, success, showCancel = true) {
  if (Boolean(title) === false && Boolean(content) === false) {
    return;
  }
  uni.showModal({
    title,
    content,
    showCancel,
    success
  });
}

/**
 * uni.makePhoneCall(OBJECT)
 * 拨打电话。
 * @param phoneNumber {String} 需要拨打的电话号码
 * See：{@link https://uniapp.dcloud.net.cn/api/system/phone?id=makephonecall | 文档}
 */
export function makePhoneCall (phoneNumber) {
  if (!phoneNumber) {
    return;
  }
  uni.makePhoneCall({
    phoneNumber
  });
}
