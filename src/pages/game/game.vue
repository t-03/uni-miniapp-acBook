<template>
  <div class="step step2">
    <div class="safe-box">
      <div class="drums">
        <!-- 活动结束 -->
        <div v-if="acEnd" class="acEnd"></div>
        <!-- 正在击鼓中 -->
        <div v-else-if="playing" class="playing">
          <div class="clickTimes">
            <p>{{ clickTimes }}</p>
            <img
              v-if="!willEnd"
              src="http://192.168.17.94/git/2022/03/playDrums/ossweb-img/drums-start.gif"
              alt="倒计时"
            />
            <img
              v-else
              src="http://192.168.17.94/git/2022/03/playDrums/ossweb-img/drums-end.gif"
              alt="时间即将结束"
            />
          </div>
          <div class="drumhead" @click.stop="drumming()"></div>
        </div>
        <!-- 准备击鼓 -->
        <div v-else class="play-tips" @click="checkAc"></div>
        <div class="plat-num">
          <p>
            当前击鼓次数： <span> {{ restTimes }} </span>
          </p>
        </div>
      </div>
      <div class="props">
        <header>
          <div
            onclick="PTTSendClick('btn','getMoreTimes','获取击鼓次数');"
            class="operate-show gallery getMore"
            @click="showDiffGet"
          ></div>
          <div class="title">
            当前鼓槌数： <span> {{ drumsCount }} </span>
          </div>
          <div
            onclick="PTTSendClick('btn','readRecordList','奖品一览');"
            class="operate-show gallery"
            @click="TGDialogS('dia-reward')"
          ></div>
        </header>
        <div class="card">
          <div class="cardItem card-money">
            <div class="card-content">
              <img src="" alt="" />
              <p><span>奖励名字</span> * <span>1</span></p>
            </div>
            <div class="card-btn">
              <a
                v-if="!acEnd"
                onclick="PTTSendClick('btn','reflashMoney','刷新现金卡片');"
                href="javascript:;"
                :class="cardChoose.c1 ? 'btn-acIng-flash' : 'btn-acIng-choose'"
                @click="reflash(cardChoose.c1, 'c1')"
              ></a>
              <a
                v-else
                onclick="PTTSendClick('btn','getMoneyCard','领取现金卡片奖励');"
                href="javascript:;"
                :class="['btn-acEnd btn-moneyCard', gotMoney ? 'btn-got' : '']"
                @click="gotMoney = true"
              ></a>
            </div>
          </div>
          <div class="cardItem card-real">
            <div class="card-content">
              <img src="" alt="" />
              <p><span>奖励名字</span> * <span>1</span></p>
            </div>
            <div class="card-btn">
              <a
                v-if="!acEnd"
                onclick="PTTSendClick('btn','reflashReal','刷新实物卡片');"
                href="javascript:;"
                :class="cardChoose.c2 ? 'btn-acIng-flash' : 'btn-acIng-choose'"
                @click="reflash(cardChoose.c2, 'c2')"
              ></a>
              <a
                v-else
                href="javascript:;"
                onclick="PTTSendClick('btn','getRealCard','领取实物卡片奖励');"
                class="btn-acEnd btn-realCard"
                @click="TGDialogS('dia-fillAdd')"
              ></a>
            </div>
          </div>
          <div class="cardItem card-props">
            <div class="card-content">
              <img src="" alt="" />
              <p><span>奖励名字</span> * <span>1</span></p>
            </div>
            <div class="card-btn">
              <a
                v-if="!acEnd"
                onclick="PTTSendClick('btn','reflashProps','刷新道具卡片');"
                href="javascript:;"
                :class="cardChoose.c3 ? 'btn-acIng-flash' : 'btn-acIng-choose'"
                @click="reflash(cardChoose.c3, 'c3')"
              ></a>
              <a
                v-else
                href="javascript:;"
                onclick="PTTSendClick('btn','getPropsCard','领取道具卡片奖励');"
                :class="['btn-acEnd btn-propsCard', gotProps ? 'btn-got' : '']"
                @click="gotProps = true"
              ></a>
            </div>
          </div>
        </div>
        <!-- 我的幸运等级 -->
        <div class="lucky-lv">
          <div class="props-tips"></div>
          <div class="progress">
            <div class="left-num">
              <p>{{ reflashNum }}</p>
            </div>
            <div class="right-progress">
              <ul>
                <li :class="reflashNum > 0 ? 'enought' : 'notEnought'">
                  <p>0</p>
                  <p class="lv">1级</p>
                </li>
                <li :class="reflashNum > 9 ? 'enought' : 'notEnought'">
                  <p>10</p>
                  <p class="lv">2级</p>
                </li>
                <li :class="reflashNum > 19 ? 'enought' : 'notEnought'">
                  <p>20</p>
                  <p class="lv">3级</p>
                </li>
                <li :class="reflashNum > 29 ? 'enought' : 'notEnought'">
                  <p>30</p>
                  <p class="lv">4级</p>
                </li>
                <li :class="reflashNum > 39 ? 'enought' : 'notEnought'">
                  <p>40</p>
                  <p class="lv">5级</p>
                </li>
                <div class="progress-yellow" :style="process" ref="line"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 以下是弹窗部分 -->
  </div>
</template>
<script>
export default {
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
          src: "http://192.168.17.94/git/2022/03/playDrums/ossweb-img/1.png"
        },
        {
          index: 2,
          src: "http://192.168.17.94/git/2022/03/playDrums/ossweb-img/2.png"
        },
        {
          index: 3,
          src: "http://192.168.17.94/git/2022/03/playDrums/ossweb-img/3.png"
        }
      ],
      // 奖品一览
      rewardList: [
        {
          src:
            "http://192.168.17.94/git/2022/03/playDrums/ossweb-img/dia-reward-cir.png",
          name: "奖励名字",
          num: 1,
          //奖品稀有程度，1超级稀有 2 稀有 3普通
          status: 1
        }
      ],
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
  created: function() {
    //判断浏览器
    this.browserEnv = this.getEnv();
  },
  mounted: function() {},
  methods: {
    isBind: function() {
      this.TGDialogS("dia-chooseArea");
    },
    check: function(ev) {
      this.agree = ev.target.checked;
    },
    checkAgree: function() {
      if (!this.agree) {
        alert("请查看并同意授权。");
      } else {
        showDialog.hide();
      }
    },
    jump: function(to) {
      this.curPage = to;
    },
    reflash: function(isChoose, name) {
      if (!isChoose) {
        this.cardChoose[name] = true;
        this.TGDialogS("dia-replace");
      } else {
        if (this.drumsCount < 100) {
          this.TGDialogS("dia-drums-num");
        } else {
          this.TGDialogS("dia-replace");
          this.drumsCount = this.drumsCount - 100;
          this.reflashNum++;
        }
      }
    },
    checkAc() {
      if (!this.acEnd) {
        if (this.restTimes == 0) {
          //机会不足
          this.TGDialogS("dia-drums-times");
        } else {
          this.playDrums();
          this.restTimes--;
        }
      }
    },
    drumming() {
      // var _this = this;
      this.clickTimes++;
    },
    //开始击鼓
    playDrums() {
      //数据上报 请勿注释
      PTTSendClick("btn", "playDrums", "开始击鼓游戏");
      var _this = this;
      var times = _this.ct;
      _this.clickTimes = 0;
      this.playing = true;
      this.TGDialogS("dia-countdown");
      //展示倒计时弹窗
      var clock = setInterval(function() {
        _this.curTime--;
        if (_this.curTime < 0) {
          clearInterval(clock);
          _this.curTime = 2;
          showDialog.hide();
          console.log("打鼓开始");
        }
        // console.log(_this.curTime)
      }, 1000);
      //替换倒计时 钟表提示
      var clock2 = setInterval(function() {
        if (times < _this.ct - 3) {
          _this.willEnd = true;
          clearTimeout(clock2);
          console.log("清除闹钟", times);
        }
        times--;
        console.log("times", times, "_this.ct", _this.ct);
      }, 1000);
      //倒计时结束结算
      var clock1 = setTimeout(function() {
        _this.playing = false;
        _this.willEnd = false;
        console.log("打鼓结束");
        _this.TGDialogS("dia-timeEnd");
        clearTimeout(clock1);
        console.log("暴击次数", _this.clickTimes);
        _this.drumsCount += _this.clickTimes;
        console.log("总计：", _this.drumsCount);
      }, _this.ct * 1000 + 3000);
    },
    showDiffGet: function() {
      if (this.browserEnv.isQQ) {
        console.log("是QQ");
        this.TGDialogS("dia-get-qq");
      } else if (this.browserEnv.isWeixin) {
        console.log("是wx");
        this.TGDialogS("dia-get-wx");
      } else {
        console.log("其他环境");
        this.TGDialogS("dia-get-qq");
      }
    },
    //获取浏览器环境
    getEnv: function() {
      var inBrowser = typeof window !== "undefined";
      var UA = inBrowser && window.navigator.userAgent.toLowerCase();
      return {
        inBrowser: inBrowser,
        UA: UA,
        isWeixin: UA && UA.match(/MicroMessenger\/[0-9]/i),
        isQQ: UA && UA.match(/QQ\/[0-9]/i)
      };
    },
    TGDialogS: function(id) {
      showDialog.show({
        id: id, //需要弹出的id，如果是弹出页面上的div，则该选项为必选
        bgcolor: "#000", //弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
        opacity: 70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
      });
    }
  },
  watch: {
    reflashNum: {
      handler: function(newItem, oldItem) {
        //进度条控制
        this.process.transform = `translateX(-${412 - newItem * 10.3}rpx)`;
        //幸运等级提升
        switch (newItem) {
          case 1:
            this.curlv = 1;
            this.TGDialogS("dia-lv-up");
            console.log("等级提升", newItem);
            break;
          case 10:
            this.curlv = 2;
            this.TGDialogS("dia-lv-up");
            console.log("等级提升", newItem);
            break;
          case 20:
            this.curlv = 3;
            this.TGDialogS("dia-lv-up");
            console.log("等级提升", newItem);
            break;
          case 30:
            this.curlv = 4;
            this.TGDialogS("dia-lv-up");
            console.log("等级提升", newItem);
            break;
          case 40:
            this.curlv = 5;
            this.TGDialogS("dia-lv-up");
            console.log("等级提升", newItem);
            break;
          default:
            break;
        }
      }
    }
  }
};
</script>

<style scoped>
.step2 {
  width: 100%;
  height: 100vh;
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg2.jpg)
    no-repeat center/cover;
}
.safe-box {
  height: 100vh;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
}
.drums {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg-playDrums.png)
    no-repeat center/contain;
  width: 750rpx;
  height: 903rpx;
  user-select: none;
}
.acEnd {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/drums-acEnd.png)
    no-repeat center/contain;
  width: 40.3rpx;
  height: 8.1rpx;
  margin: 0 auto;
  position: relative;
  top: 27rpx;
}

/*正在击鼓中*/
.playing {
  padding-top: 1rpx;
  height: 51rpx;
  width: 43rpx;
  margin: 0 auto;
  position: relative;
  user-select: none;
}
.drumhead {
  width: 100%;
  height: 41rpx;
  position: absolute;
  bottom: 0;
}
.clickTimes {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/drums-clickTimes.png)
    no-repeat center/contain;
  width: 40.3rpx;
  height: 81rpx;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
}
.playing:active .clickTimes p {
  animation: none;
}

.clickTimes p {
  width: 1rpx;
  font-size: 5.5rpx;
  font-weight: bolder;
  position: absolute;
  right: 0.8rpx;
  text-align: left;
  background-image: linear-gradient(to bottom, #ffedb0, #ffffff);
  -webkit-background-clip: text;
  color: transparent;
  animation: numLeave 0.05s ease;
}
@keyframes numLeave {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-3rpx) scale(0.8);
    opacity: 0.3;
  }
}
.clickTimes img {
  width: 20rpx;
  height: 20rpx;
  position: absolute;
  right: -10rpx;
}

.play-tips {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-playDrums.png)
    no-repeat center/contain;
  width: 367rpx;
  height: 322rpx;
  position: relative;
  margin: 0 auto;
  top: 150rpx;
}

.plat-num {
  position: absolute;
  left: 295rpx;
  top: 528rpx;
  font-size: 22rpx;
  color: #80241d;
}

/*道具部分*/
.props {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg-curDrumsNum.png)
    no-repeat center/contain;
  width: 750rpx;
  height: 611rpx;
  margin-top: -200rpx;
  padding: 50rpx;
  box-sizing: border-box;
}
.props header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.operate-show {
  height: 24rpx;
}

.props header .title {
  font-size: 36rpx;
  font-weight: bolder;
  color: #fff7e2;
}

.getMore {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/tips-getMore.png)
    no-repeat center/contain;
  width: 1.15rpx;
}
.gallery {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/tips-gallery.png)
    no-repeat center/contain;
  width: 0.76rpx;
}

.card {
  display: flex;
  justify-content: space-between;
  margin-top: 15rpx;
}
.cardItem {
  width: 198rpx;
  height: 234rpx;
  display: flex;
  justify-content: center;
  position: relative;
}
.card-content img {
  width: 100rpx;
  height: 100rpx;
  margin: 0 auto;
  display: block;
  margin-top: 90rpx;
  border-radius: 50%;
  overflow: hidden;
}
.card-content p {
  color: #fefee4;
  font-size: 0.19rpx;
}
.card-money {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/card_money.png)
    no-repeat center/contain;
}
.card-real {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/card_real.png)
    no-repeat center/contain;
}
.card-props {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/card_props.png)
    no-repeat center/contain;
}

.card-btn {
  position: absolute;
  bottom: -50rpx;
}
.card-btn a {
  width: 159rpx;
  height: 48rpx;
  display: block;
}

.card-btn a.btn-acIng-flash {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-reflash.png)
    no-repeat center/contain;
}
.card-btn a.btn-acIng-choose {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-rechoose.png)
    no-repeat center/contain;
}
.card-btn a.btn-acEnd {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-get.png)
    no-repeat center/contain;
}
.card-btn a.btn-realCard {
  width: 122rpx;
  height: 29rpx;
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-fillAdd.png)
    no-repeat center/contain;
}

.card-btn a.btn-got {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/btn-got.png)
    no-repeat center/contain;
}
/** 我的幸运等级 */
.lucky-lv {
  margin-top: 70rpx;
}
.props-tips {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/tips4.png)
    no-repeat center/contain;
  width: 378rpx;
  height: 18rpx;
  margin: 0 auto;
}

.progress {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/bg-luckyLv.png)
    no-repeat center/contain;
  width: 662rpx;
  height: 122rpx;
  margin-left: -6rpx;
  margin-top: 23rpx;
  display: flex;
}
.left-num {
  width: 33%;
  position: relative;
}
.left-num p {
  font-size: 44rpx;
  font-weight: bolder;
  position: absolute;
  bottom: 8rpx;
  right: 75rpx;
  color: #fbedbc;
}

.right-progress {
  width: 422rpx;
  padding: 35rpx 0 30rpx 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.right-progress ul {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/progress.png)
    no-repeat center/contain;
  width: 422rpx;
  height: 18rpx;
  display: flex;
  justify-content: space-between;
  margin-top: -10rpx;
  position: absolute;
}
.right-progress ul li {
  background-color: #7f2b15;
  color: #ead7b5;
  width: 30rpx;
  height: 30rpx;
  font-size: 16rpx;
  border-radius: 50%;
  border: 1px solid #7f2b15;
  margin-top: -5rpx;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
}

.tips5 {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/tips5.png)
    no-repeat center/contain;
  width: 412rpx;
  height: 16rpx;
  margin-top: 22rpx;
  position: absolute;
}
.lv {
  font-size: 14rpx;
  white-space: nowrap;
  color: #f7e8b7;
  position: absolute;
  bottom: -20rpx;
}
.right-progress ul li.enought {
  background-color: #f7e8b7;
  color: #7f2b15;
}

.right-progress div.progress-yellow {
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/progress-light.png)
    no-repeat center/contain;
  width: 412rpx;
  height: 18rpx;
  position: absolute;
  z-index: 1;
  transform: translateX(-412rpx);
  transition: all ease 1s;
}
/*水印相关*/
.plat-watermask {
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 99;
}
.plat-watermask .qq {
  width: 59rpx;
  height: 59rpx;
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/water-qq.png)
    no-repeat center/contain;
}
.plat-watermask .weixin {
  width: 190rpx;
  height: 44rpx;
  background: url(http://192.168.17.94/git/2022/03/playDrums/ossweb-img/water-wx.png)
    no-repeat center/contain;
}

/*字符限制*/
.wordLimit {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
