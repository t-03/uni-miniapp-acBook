const getters = {
  // 系统环境
  system: state => state.app.system,
  // 设备
  device: state => state.app.device,
  // 用户是否登录
  hasLogin: state => state.users.hasLogin,
  // 用户信息
  userinfo: state => state.users.userinfo,
  // 用户ID
  userId: state => state.users.userinfo.id,
  // token
  token: state => state.users.token,
  //是否预约
  isOrder: state => state.users.isOrder
};
export default getters;
