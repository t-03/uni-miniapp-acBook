<template>
  <view class="content">
    <view v-if="hasLogin" class="hello">
      <view class="title"> 您好 {{ userName }}，您已成功登录。 </view>
      <view class="ul">
        <view>这是 uni-app 带登录模板的示例App首页。</view>
        <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
      </view>
    </view>
    <view v-if="!hasLogin" class="hello">
      <view class="title">
        您好 游客。
      </view>
      <view class="ul" @click="showInfo">
        <view>这是 uni-app 带登录模板的示例App首页。</view>
        <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { univerifyLogin } from "@/common/univerify.js";

export default {
  computed: mapState(["forcedLogin", "hasLogin", "userName"]),
  onLoad() {
    console.log("加载");
    const loginType = uni.getStorageSync("login_type");
    if (loginType === "local") {
      this.login(uni.getStorageSync("username"));
      return;
    }
    let uniIdToken = uni.getStorageSync("uni_id_token");
  },
  onShow() {
    console.log("显示");
    uni.onUserCaptureScreen(function() {
      console.log("用户截屏了");
    });
  },
  mounted() {
    let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    console.log("----", menuButtonInfo);
  },
  methods: {
    ...mapMutations(["login"]),
    showInfo() {
      console.log("--1--");
      uni.showToast({
        title: "标题",
        duration: 2000
      });
    },
    guideToLogin() {
      uni.showModal({
        title: "未登录",
        content: "您未登录，需要登录后才能继续",
        /**
         * 如果需要强制登录，不显示取消按钮
         */
        showCancel: !this.forcedLogin,
        success: res => {
          if (res.confirm) {
            univerifyLogin().catch(err => {
              if (err === false) return;
              /**
               * 如果需要强制登录，使用reLaunch方式
               */
              if (this.forcedLogin) {
                uni.reLaunch({
                  url: "../login/login"
                });
              } else {
                uni.navigateTo({
                  url: "../login/login"
                });
              }
            });
          }
        }
      });
    }
  }
};
</script>

<style>
.hello {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.title {
  color: #8f8f94;
  margin-top: 25px;
}

.ul {
  font-size: 15px;
  color: #8f8f94;
  margin-top: 25px;
}

.ul > view {
  line-height: 25px;
}
</style>
