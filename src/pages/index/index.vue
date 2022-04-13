<template>
  <div class="page">
    <div v-if="curPage == 1" class="step step1">
      <div class="login-tips">
        <div class="game-logo"></div>
        <p>
          你好
          <BindArea></BindArea>
          <span @click="TGDialogS('dia-bindUser')">
            <!-- 绑定角色 -->
          </span>
        </p>
      </div>
      <div class="slogan">
        <div v-if="browserEnv.isWeixin" class="water-weixin"></div>
      </div>
      <div class="btnAndRule">
        <!--  TGDialogS('dia-reward'); -->
        <div class="btn-start" @click="jump('/pages/game/game')">
          <img
            src="http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-start.png"
            alt="活动开始"
          />
        </div>
        <div class="rule">
          <p>
            这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则这是规则
          </p>
        </div>
      </div>
    </div>
    <!-- <button class="btn-to-treasure" @click="toGame" /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { rewardList } from "@/utils/gameData"; //全局大规模数据，可以统一存放
import BindArea from "../../components/bindarea/bindarea.vue";
import { getData } from "@/api/api";
export default {
  name: "Index",
  components: {
    BindArea
  },
  data() {
    return {
      curPage: 1,
      //领取现金
      gotMoney: false,
      //领取道具
      gotProps: false,
      //剩余击鼓次数
      restTimes: 1,
      //正在击鼓中
      playing: false,
      //活动结束
      acEnd: false,
      //当前刷新次数
      reflashNum: 0,
      //鼓面暴击次数
      clickTimes: 0,
      //总计鼓槌数
      drumsCount: 1000,
      countTime: [
        {
          index: 1,
          src: "//192.168.17.94/git/2022/03/playDrums/ossweb-img/1.png"
        },
        {
          index: 2,
          src: "//192.168.17.94/git/2022/03/playDrums/ossweb-img/2.png"
        },
        {
          index: 3,
          src: "//192.168.17.94/git/2022/03/playDrums/ossweb-img/3.png"
        }
      ],
      rewardList: rewardList,
      //击鼓时长 s
      ct: 6,
      //卡片选择状态 是否是刷新按钮
      cardChoose: {
        c1: false,
        c2: true,
        c3: true
      },
      //任务
      task: {
        qq: {
          t1: {
            finished: false,
            got: false
          },
          t2: {
            finished: false,
            got: false
          },
          t3: {
            finished: false,
            got: false
          },
          t4: {
            finished: false,
            got: false
          }
        },
        wx: {
          t1: {
            finished: false,
            got: false
          },
          t2: {
            finished: false,
            got: false
          },
          t3: {
            finished: false,
            got: false
          }
        }
      },

      //其他配置项
      agree: null,
      browserEnv: null,
      willEnd: false,
      process: {},
      curTime: 2,
      curlv: 0
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["userinfo"])
  },
  watch: {},
  onLoad() {
    var that = this;
    console.log("that", that);
    // if(!that.token){
    //   that.$doWXLogin();
    // }
  },
  onShow() {
    var that = this;
    wx.setSite({
      pageType: "index",
      pageName: "首页"
    });
    if (that.token) {
      that.init(); //页面数据初始化
    }
    // 页面PV上报 actid需要找开发要
    that.$milo.checkLogin().then(res => {
      that.$milo.easReportPV({ e_code: "", actid: 439280, acttype: "ams" });
    });
  },
  methods: {
    jump(val) {
      if (val) {
        uni.navigateTo({
          url: val
        });
      }
    },
    init() {
      var that = this;
      getData("829629").then(res => {
        console.log("res", res);
        if (res.iRet == 0) {
          if (res.sOutValue1 == 1) {
            //获取用户预约状态
            that.isCompleteOrder = 1;
          }
        }
      });
    },
    toGame() {
      var that = this;
      if (!that.token) {
        that.$doWXLogin();
      } else {
        this.$nTo("../game/game");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  // background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/bg1.jpg)
  //   no-repeat center top/100% 100%;
  box-sizing: border-box;
  padding-top: 20upx;
  // overflow: hidden;
  font-size: 24upx;
  color: #fff;
  .btn-to-treasure {
    width: 439upx;
    height: 114upx;
    display: block;
    margin: 0 auto;
    position: relative;
    // background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/btn-to-treasure.png)
    //   no-repeat center/100%;
    margin: -40upx auto 0;
  }
}

.step {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24rpx;
}

.step1 {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg1.jpg)
    no-repeat center/cover;
  height: 1708rpx;
  color: white;
  overflow: scroll;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.login-tips {
  display: flex;
  align-items: center;
}
.login-tips p {
  display: flex;
}
.login-tips p span {
  display: block;
  max-width: 200rpx;
}
.slogan {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/slogn.png)
    no-repeat center/contain;
  width: 657rpx;
  height: 350rpx;
  margin: 0 auto;
  position: relative;
}
.water-weixin {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/slogan-wx.png)
    no-repeat center/contain;
  width: 56rpx;
  height: 109rpx;
  position: absolute;
  right: 3rpx;
  top: 3rpx;
}

.game-logo {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/logo.png)
    no-repeat center/contain;
  width: 170rpx;
  height: 88rpx;
  margin-left: 20rpx;
}

.btnAndRule {
  position: absolute;
  bottom: 20rpx;
  width: 100%;
}
.btn-start,
.btn-start img {
  width: 490rpx;
  height: 190rpx;
  margin: 0 auto;
  display: block;
}
.rule {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg-rule.png)
    no-repeat center/contain;
  width: 736rpx;
  height: 387rpx;
  margin: 0 auto;
  padding: 100rpx 20rpx;
  color: #ffebb4;
  box-sizing: border-box;
}
</style>
