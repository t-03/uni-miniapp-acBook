<template>
  <view class="page">
    <view class="inner">
      <view class="image">
        <image
          src="https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/share.png"
        />
      </view>
      <view class="text">
        <view class="title">
          为了提供更优质的服务，{{ project_name }}需要获取以下信息
        </view>
        <view class="con">
          ·你的公开信息（昵称、头像等）
        </view>
      </view>
      <button
        v-if="!close"
        class="btn"
        open-type="getUserInfo"
        @click="bindGetUserInfo"
      >
        立即登录
      </button>
      <button class="btn no-login" @click="onRefuse">
        暂不登录
      </button>
    </view>
  </view>
</template>

<script>
import { PROJECT_NAME } from "@/config";

export default {
  name: "LoginWeiXin",
  data() {
    return {
      close: false,
      project_name: PROJECT_NAME,
      options: {},
      canIGetUserProfile: false,
      userInfoObj: {}
    };
  },

  onLoad: function(options) {
    this.options = options;
    if (uni.getUserProfile) {
      this.canIGetUserProfile = true;
    } else {
      this.showUploadModal();
    }
  },
  onShow() {
    wx.setSite({
      pageType: "login",
      pageName: "登录页"
    });
  },
  methods: {
    // 提示更新微信版本
    showUploadModal() {
      this.$mdl(
        "提示",
        "您当前的微信版本过低，请先返回微信更新微信版本",
        this.onRefuse(),
        false
      );
    },
    bindGetUserInfo() {
      wx.PTTSendClick("btn", "login", "登录");
      var that = this;
      uni.getUserProfile({
        desc: "授权登录",
        success: res => {
          that.$store.commit("users/SET_USER_INFO", res.userInfo);
          that.login();
        },
        fail: res => {
          console.log("授权失败", res);
        }
      });
    },
    /* 授权登录 */
    login() {
      var that = this;
      console.log("授权", that.token);
      if (!that.token) {
        console.log("取反授权", !that.token);
        that.$milo.checkLogin().then(res => {
          that.$milo.easReportPV({ e_code: "", actid: 439280, acttype: "ams" });
          if (res.openid) {
            wx.saveOpenid(res.openid);
            that.$store.commit("users/SET_TOKEN", res.ieg_ams_token);
            that.onNavigateBack(1);
          } else {
            this.$mdl("提示", "登录授权失败，请重试", this.onRefuse(), false);
          }
        });
      }
    },
    onNavigateBack(delta) {
      this.$nBack(Number(delta || 1));
    },
    //授权回调跳转
    jump() {
      const that = this;
      that.onNavigateBack(1);
    },
    /**拒绝授权登录 */
    onRefuse() {
      wx.PTTSendClick("btn", "refuseLogin", "拒绝授权");
      this.onNavigateBack(this.options.delta);
    }
  }
};
</script>

<style scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/bg1.jpg)
    no-repeat center top/100% 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.inner {
  padding-top: 240rpx;
  text-align: center;
}

.image image {
  width: 150rpx;
  height: 150rpx;
}

.text {
  margin: 20rpx auto 0;
  width: 680rpx;
  text-align: center;
}

.title {
  margin-bottom: 20rpx;
  font-size: 30rpx;
  line-height: 1.5;
  /* color: #333333; */
  color: #9f4a25;
}

.con {
  font-size: 28rpx;
  /* color: #666666; */
  color: #9f4a25;
  text-indent: 40rpx;
}

.btn {
  margin-top: 36rpx;
  border: none;
  border-radius: 42rpx;
  width: 364rpx;
  height: 84rpx;
  font-size: 28rpx;
  line-height: 84rpx;
  text-align: center;
  color: #fff;
  /* background: #04c161; */
  background: #d16932;
  border: none;
  margin: 40upx auto;
}

.no-login {
  background-color: #999;
}
</style>
