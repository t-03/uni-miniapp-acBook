<template>
  <view class="content">
    <div class="center">
      <div class="avatar"></div>
      <div class="tips">请问,我们可以了解一下你的基本信息吗？</div>
    </div>
    <div class="button">
      <div class="confirm btCenter" @click="login">
        <span>确定</span>
      </div>
      <div class="cancel btCenter" @click="goBack">
        <span>取消</span>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  onLoad() {},
  onReady() {},
  methods: {
    login() {
      let _this = this;
      uni.getUserProfile({
        desc: "获取您的头像和昵称",
        success: res => {
          _this.$store.commit("users/SET_USER_INFO", res.userInfo);
          _this.$store.commit("users/SET_LOGIN", true);
          _this.goBack();
        },
        fail: () => {
          uni.showToast({
            title: "您拒绝了授权，之后再来吧~",
            icon: "none",
            duration: 3500
          });
        }
      });
      // uni.login({
      //   provider: "weixin",
      //   success: function(loginRes) {
      //     console.log(loginRes.code);
      //   }
      // });
    },
    goBack() {
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  .center {
    margin: 0 auto;
    position: absolute;
    top: 383rpx;
    width: 306rpx;
    height: 305rpx;
    // background-color: #ffffff;
    box-shadow: 0px 0px 12px 1px rgba(59, 130, 144, 0.19);
    .avatar {
      width: 100%;
      height: 100%;
      background: url(../../static/img/avatar.jpg) no-repeat center/cover;
      border-radius: 10rpx;
      overflow: hidden;
    }
    .tips {
      margin-top: 40rpx;
      font-size: 22rpx;
      color: #333333;
      text-align: center;
    }
  }
  .button {
    position: absolute;
    bottom: 228rpx;
    .confirm {
      width: 303rpx;
      height: 58rpx;
      background-image: linear-gradient(-90deg, #68e6fe 0%, #24cbff 100%),
        linear-gradient(#000000, #000000);
      background-blend-mode: normal, normal;
      box-shadow: 0px 0px 12rpx 1rpx rgba(59, 130, 144, 0.19);
      border-radius: 10rpx;
      color: #ffffff;
      margin-bottom: 40rpx;
      font-size: 22rpx;
    }
    .cancel {
      width: 303rpx;
      height: 58rpx;
      background-color: #e6e6e6;
      box-shadow: 0px 0px 12rpx 1rpx rgba(59, 130, 144, 0.19);
      border-radius: 10rpx;
      color: #333333;
      opacity: 0.5;
      font-size: 22rpx;
    }
  }
}
.btCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
