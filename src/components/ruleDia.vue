<template>
  <div
    class="dialog"
    :class="isShow?'show':''"
  >
    <div class="dia-box">
      <p class="dia-rule-tit">
        活动规则
      </p>
      <ul class="dia-rule-list">
        <li>1、活动日期：2022年1月20日-2022年2月28日；</li>
        <li>2、预约成功后即可开启探秘之旅并获得3点行动点；</li>
        <li>3、可通过邀请好友助力的方式获取行动点，邀请1位未预约好友可获得3行动点，邀请1位已预约好友可获得1行动点，同一好友只能助力一次；</li>
        <li>4、每个人最多可帮3个好友助力；</li>
        <li>5、所有中奖信息请到活动页面【我的奖品】中查看。</li>
      </ul>
      <button
        class="dia-close"
        @click="closeDia()"
      />
    </div>
  </div>
</template>

<script>
export default {
  //属性
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
    closeDia(){
      this.$emit("close");
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
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-bg1.png) no-repeat center/100% 100%;
    box-sizing: border-box;
    padding:25upx 40upx;
    .dia-rule-tit{
      font-size: 32upx;
      font-weight: bold;
      position: relative;
      color: #71382d;
      &::before{
        content: '';
        width: 36upx;
        height: 10upx;
        background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/icon-zs.png) no-repeat center/100%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 20upx;
      }
      &::after{
          content: '';
          width: 36upx;
          height: 10upx;
          background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/icon-zs.png) no-repeat center/100%;
          display: inline-block;
          vertical-align: middle;
          margin-left: 20upx;
          transform: scaleX(-1);
      }
    }
    .dia-rule-list{
      font-size: 22upx;
      text-align: left;
      color: #9b5837;
      li{
        margin-top: 10upx;
      }
    }
  }
}
</style>
