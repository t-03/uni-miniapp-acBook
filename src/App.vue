<script>
import { mapGetters } from "vuex";
export default {
  onLaunch: function() {
    // 判断安卓/ios平台
    var platInfo = uni.getSystemInfoSync();
    if (platInfo.system.indexOf("Android") != -1) {
      uni.setStorageSync("sPlatId", 1);
      uni.setStorageSync("device", 2);
    } else {
      uni.setStorageSync("sPlatId", 0);
      uni.setStorageSync("device", 1);
    }
    // if(!this.token){
    //   this.$doWXLogin();
    // }
  },
  computed: {
    ...mapGetters(["token"])
  },
  onShow: function() {},
  onHide: function() {},
  onError: function() {
    console.log("当 uni-app 报错时触发");
  },
  onUniNViewMessage: function() {
    console.log("对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯");
  },
  onUnhandledRejection: function() {
    console.log("对未处理的 Promise 拒绝事件监听函数（2.8.1+）");
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
