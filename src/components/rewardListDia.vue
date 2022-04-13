<template>
  <div
    class="dialog"
    :class="isShow?'show':''"
  >
    <div class="dia-box">
      <div class="scroll">
        <ul
          v-if="reward.length"
          class="dia-reward-list"
        >
          <li
            v-for="(item,index) in reward"
            :key="index"
            :class="item.sCdkey?'float-item':''"
          >
            <div class="img-box">
              <img
                class="picture"
                mode="aspectFit"
                :src="drawReward[item.iPackageId]"
                alt=""
              >
            </div>
            <div class="mid-box">
              <p class="name">
                {{ item.sPackageName }}
              </p>
              <p
                v-if="item.sCdkey"
                class="conversion-code"
              >
                兑换码：<span class="code">{{ item.sCdkey }}</span>
              </p>
            </div>
            <button
              v-if="item.sCdkey"
              class="dia-btn dia-btn-copy"
              @click="copy(item.sCdkey)"
            />
            <p
              v-if="item.iPackageId=='2986602'"
              class="tip"
            >
              已发放至账户
            </p>
            <p
              v-else
              class="tip"
            />
          </li>
        </ul>
        <p
          v-else
          class="warm-tip"
        >
          您还没获得奖品哦，快去寻宝吧~
        </p>
      </div>
      <p class="dia-word">
        游戏内奖励将在游戏开服后发放至您的游戏账号<br>请注意查收~
      </p>
      <button
        class="dia-close"
        @click="closeDia()"
      />
    </div>
  </div>
</template>

<script>
import { drawReward } from "@/utils/gameData";
export default {
  //属性
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    circleNum: { //完成圈数
      type: Number,
      default: 1,
    },
    reward: { //奖励
      type: Array,
      default() {
        return [];
      },
    }
  },
  data() {
    return {
      drawReward:drawReward
    };
  },
  methods: {
    closeDia(){
      this.$emit("close");
    },
    copy(text){
      wx.PTTSendClick("btn","copyCDK","复制兑换码");
      this.closeDia();
      uni.setClipboardData({
        data: text,
      });
    },
    cashOut(index){
      wx.PTTSendClick("btn","receiveCash","提现");
      this.closeDia();
      this.$emit("doReceive","myRewardList",index);
    }
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  .dia-box{
    width: 610upx;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    height: 678upx;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-bg5.png) no-repeat center/100%;
    box-sizing: border-box;
    padding: 120upx 10upx 0 10upx;
    .dia-close{
      top: 31upx;
    }
    .dia-word{
      font-size: 20upx;
      color: #71382d;
      text-align: center;
      margin-top: 16upx;
    }
    .warm-tip{
      color:#9b5837;
      font-size: 28upx;
      text-align: center;
      margin-top: 150upx;
      font-weight: bold;
    }
    .scroll{
      width: 585upx;
      height: 461upx;
      background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-myReward-box.png) no-repeat center/100%;
      position: relative;
      overflow-y: auto;
      &::-webkit-scrollbar{
        width: 8upx;
        height: 1px;
      }

      &::-webkit-scrollbar-track{
        border-radius: 2px;
        background: #f1e2d3;
      } 

      &::-webkit-scrollbar-thumb{
        border-radius: 2px;
        background: #d4b194;;
      }
    }
    .dia-reward-list{
      width: 573upx;
      position: relative;
      li{
        width: 554upx;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 22upx 10upx;
        &.float-item{
          display: block;
          height: 111upx;
          box-sizing: border-box;
          padding: 22upx 0;
          .img-box{
            float: left;
          }
          .mid-box{
            float: left;
            margin-left: 10upx;
          }
          .dia-btn{
            float: right;
          }
        }
        &::after{
          content: '';
          width: 554upx;
          height: 5upx;
          background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/icon-line3.png) no-repeat center/100%;
          position: absolute;
          left: 10upx;
          bottom: -5upx;
        }
        .img-box{
          width: 67upx;
          height: 67upx;
          background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-reward-bg.png)no-repeat center/100%;
          position: relative;
          overflow: hidden;
          .picture{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 80%;
          }
        }
        .mid-box{
          width:calc(100% - 250upx) !important;
          text-align: left;
          .name{
            color:#9b5837;
            font-size: 28upx;
          }
          .conversion-code{
            color:#897267;
            font-size: 20upx;
            white-space: nowrap;
          }
        }
        .dia-btn{
          width: 172upx;
          height: 52upx;
          &.dia-btn-copy{
            background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-copy.png) center/100% 100%;
          }
          &.dia-btn-fillInfo{
            background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-fillInfo.png) center/100% 100%;
          }
          &.dia-btn-infoSubmit{
            background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-infoSubmit.png) center/100% 100%;
          }
          &.dia-btn-cash{
            background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-withdrawal.png) center/100% 100%;
          }
          &.dia-btn-cash-disabled{
            background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-has-withdrawal.png) center/100% 100%;
          }
        }
        .tip{
          width: 172upx;
          color:#9b5837;
          font-size: 24upx;
          text-align: right;
        }
      }
    }
  }
}
</style>
