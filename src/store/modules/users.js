const state = {
  token: uni.getStorageSync("token"),
  userinfo: uni.getStorageSync("userInfo"),
  targetWXAppid: "wxa8625e7d992a74fe", //接口固定参数
  activityId: "439280", //接口固定参数
  sWXType: 1, //接口固定参数
  hasLogin: uni.getStorageSync("hasLogin")
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    uni.setStorageSync("token", token);
  },
  SET_USER_INFO: (state, data) => {
    state.userinfo = data;
    uni.setStorageSync("userInfo", data);
  },
  SET_LOGIN: (state, login) => {
    state.hasLogin = login;
    uni.setStorageSync("userInfo", login);
  },
  REMOVE_TOKEN: state => {
    state.token = "";
    uni.removeStorageSync("token");
  },
  SET_LOGINOUT: state => {
    state.userinfo = null;
    state.token = "";
    uni.removeStorageSync("token");
  }
};

const actions = {
  /**
   * 退出登录
   * @param commit
   * @returns {Promise<unknown>}
   */
  localLogout({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_USER_INFO", {});
      uni.removeStorageSync("token");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
