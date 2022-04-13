const state = {
  system: "other",
  device: "mobile"
};

const mutations = {
  // 系统环境
  JUDGMENT_SYSTEM: (state, data) => {
    state.system = data;
  },
  // 设备
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  }
};

const actions = {
  // 切换装置
  toggleDevice ({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
  // 系统环境
  judgmentSystem ({ commit }) {
    const userAgent = window && window.navigator.userAgent.toLowerCase();
    return new Promise(resolve => {
      let system;
      if (userAgent.search(/MicroMessenger/i) > -1) {
        console.log("---------------当前设备：weixin browser----------");
        system = "wechat";
      } else {
        console.log("---------------当前设备：other browser----------");
        system = "other";
      }
      commit("JUDGMENT_SYSTEM", system);
      resolve(system);
    });
  },
  // 判断设备
  judgeDevice ({ commit }, { isMobile }) {
    if (isMobile) {
      //手机端访问地址
      window.location.href = "/mobile/#/";
    } else {
      //PC端访问地址
      window.location.href = "/#/";
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
