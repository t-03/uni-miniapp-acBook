<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view class="login-box" v-if="!userName">
      <text @tap="toLogInWX">
        【<text class="login-button">授权微信个人信息</text>】
      </text>
    </view>
    <view class="login-box" v-else>
      <text>您好,</text>
      <text>当前账号：</text>
      <text>{{ userName }}</text>
    </view>
    <!-- #endif -->
    <!-- #ifdef MP-QQ -->
    <view class="login-box" v-if="!userName">
      <button
        open-type="getUserInfo"
        class="login-button"
        @getuserinfo="toLogInQQ"
      >
        授权QQ个人信息
      </button>
    </view>
    <view class="login-box" v-else>
      <text>您好,</text>
      <text>当前账号：</text>
      <text>{{ userName }}</text>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
import milo from "../../milo";

export default {
  name: "login",
  data() {
    return {
      userName: null
    };
  },
  methods: {
    // #ifdef MP-WEIXIN
    toLogInWX() {
      let self = this;
      uni.getUserProfile({
        desc: "展示用户信息",
        success: res => {
          let data = JSON.parse(res.rawData);
          let userName = data.nickName;
          milo
            .checkLogin()
            .then(res => {
              self.userName = userName;
              this.$emit("success", null);
            })
            .catch(e => {
              console.log("error:", e);
              this.$emit("fail", e);
            });
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    // #endif
    // #ifdef MP-QQ
    toLogInQQ(e) {
      let self = this;
      if (e.detail.userInfo) {
        let userName = e.detail.userInfo.nickName;
        milo
          .checkLogin()
          .then(res => {
            self.userName = userName;
            console.log(11111111, self.userName);
            this.$emit("success", null);
          })
          .catch(e => {
            console.log("error:", e);
            this.$emit("fail", e);
          });
      } else {
        uni.showModal({
          title: "警告",
          content: "拒绝授权，您将无法使用小程序",
          showCancel: false
        });
      }
    }
    // #endif
  }
};
</script>

<style>
.login-box {
  display: flex;
}
.login-button {
  color: #e00b0b;
  text-decoration: underline #e00b0b;
}
</style>
