<template>
  <view class="page">
    <view class="icon-compass" />
    <view class="btn-rule" @click="showRule" />
    <view class="btn-my-reward" @click="myReward()" />

    <view class="login-box">
      <view v-if="!token" class="log-txt">
        您好，请
        <text class="btn" @click="login">
          【登录】
        </text>
      </view>
      <view v-else class="log-txt">
        您好，{{ userinfo ? userinfo.nickName : "用户昵称" }}
      </view>
    </view>

    <button class="btn-invite" open-type="share" @click="inviteClick" />

    <RuleDia :is-show="isShowRule" @close="isShowRule = false" />
    <!-- 我的奖品列表 -->
    <RewardList
      :is-show="isShowRewardList"
      :reward="myRewardList"
      @close="isShowRewardList = false"
      @doReceive="receive"
    />
  </view>
</template>

<script>
import { mapGetters } from "vuex";
import { getData } from "@/api/api";
import RuleDia from "@/components/ruleDia";
import RewardList from "@/components/rewardListDia";
export default {
  name: "Game",
  components: {
    RuleDia,
    RewardList
  },
  data() {
    return {
      isShowRule: false, //规则弹窗显示
      isShowRewardList: false, //我的奖品列表弹窗显示
      myRewardList: [],
      // 分享邀请携带信息
      inviteId: "",
      inviteType: "",
      inviteToken: ""
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["userinfo"])
  },
  onLoad() {
    var that = this;
    // 页面PV上报 actid需要找开发要
    that.$milo.checkLogin().then(res => {
      that.$milo.easReportPV({ e_code: "", actid: 439280, acttype: "ams" });
    });

    that.init();
    if (!that.token) {
      that.$doWXLogin();
    }
  },
  onShow() {
    //pv上报设置
    wx.setSite({
      pageType: "game",
      pageName: "游戏页"
    });
  },
  methods: {
    init() {
      //页面初始化
      var that = this;
      getData("830284").then(res => {
        if (res.iRet == 0) {
          that.inviteId = res.sOutValue5; //inviteId
          that.inviteType = res.sOutValue6; //inviteType
          that.inviteToken = res.sOutValue7; //token
        }
      });
    },

    login() {
      var that = this;
      that.$doWXLogin();
    },
    showRule() {
      this.isShowRule = true;
      wx.PTTSendClick("btn", "rule", "活动规则");
    },
    myReward() {
      var that = this;
      that.isShowRewardList = true;
      wx.PTTSendClick("btn", "myReward", "我的奖品");
      //查询个人抽奖记录
      getData("832048").then(res => {
        if (res.iRet == "0") {
          //预约成功
          that.myRewardList = res.myGiftList;
        }
      });
    },
    inviteClick() {
      wx.PTTSendClick("btn", "inviteFriends", "邀请好友助力");
    }
  },
  onShareAppMessage() {
    return {
      title: "帝国探秘进行中，惊喜大礼等你寻",
      path: `/pages/guest/guest?inviteId=${this.inviteId}&inviteType=${this.inviteType}&inviteToken=${this.inviteToken}`,
      imageUrl:
        "https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/wx-share.jpg",
      desc: "快来看看帝国里会有怎样的奇遇，超多惊喜大礼等你来探索~"
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/bg2.jpg)
    no-repeat top;
  background-size: 100% 100%;
  padding-top: 35upx;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 24upx;
  color: #fff;
  .btn-rule {
    width: 150upx;
    height: 66upx;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/btn-rule.png)
      no-repeat center/100%;
    display: block;
  }
  .btn-my-reward {
    width: 150upx;
    height: 66upx;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/btn-my-reward.png)
      no-repeat center/100%;
    display: block;
  }
  .btn-invite {
    display: block;
    width: 439upx;
    height: 114upx;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/btn-invite.png)
      no-repeat center/100%;
  }
}
</style>
