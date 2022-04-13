const md5 = require("md5");

const state = {};

const mutations = {};

const actions = {
  /**
   * 上传支付截图
   * @param commit
   * @param data
   * @returns {Promise<unknown>}
   */
  uploadPayImg ({ commit }, data) {
    return new Promise((resolve, reject) => {
      // 开始上传文件 新建一个formData
      const formData = new FormData();
      // 通过append向form对象添加数据
      formData.append("ordersid", data.oid);
      formData.append("ordersimg", data.tempFiles);
      formData.append("remittancebank", data.remittancebank);
      formData.append("remittanceacc", data.remittanceacc);
      formData.append("remittancename", data.remittancename);

      const time = Date.parse(new Date()) / 1000;
      const md5_str = md5(time + "zhongkefu@!123");
      formData.append("timestamp", time);
      formData.append("signature", md5_str);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
