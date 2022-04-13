<template>
  <div
    class="dialog"
    :class="isShow?'show':''"
  >
    <!-- 填写地址 -->
    <div
      v-if="!isSure && !isSubmit"
      class="dia-box"
    >
      <p class="dia-word">
        为了保证奖励顺利发放，请填真实有效的收件信息
      </p>
      <ul class="fill-info-list">
        <li class="item">
          <p class="tit">
            收件人：
          </p>
          <input
            v-model="u_name"
            type="text"
            placeholder="请输入收件人姓名"
            placeholder-class="place-style"
            class="inp1"
          >
        </li>
        <li class="item">
          <p class="tit">
            联系电话：
          </p>
          <input
            v-model="u_phone"
            type="number"
            placeholder="请输入联系电话"
            placeholder-class="place-style"
            class="inp1"
          >
        </li>
        <li class="item">
          <p class="tit">
            收货地址：
          </p>
          <textarea
            v-model="address"
            class="address"
            placeholder="请输入收件地址"
            placeholder-class="place-style"
          />
        </li>
      </ul>

      <p class="dia-word">
        奖励将在X个工作日内发出，请注意查收~
      </p>
      <button
        class="dia-btn-submit"
        @click="confirm()"
      />
      <button
        class="dia-close"
        @click="closeDia()"
      />
    </div>

    <!-- 确认地址 -->
    <div
      v-if="isSure && !isSubmit"
      class="dia-box sure-box"
    >
      <p class="dia-word">
        一经提交不可修改哦~
      </p>
      <ul class="info-list clearfix">
        <li class="item">
          <span class="label">&nbsp;&nbsp;收件人：</span>
          <p class="text">
            {{ u_name }}
          </p>
        </li>
        <li class="item">
          <span class="label">联系电话：</span>
          <p class="text">
            {{ u_phone }}
          </p>
        </li>
        <li class="item">
          <span class="label">收货地址：</span>
          <p class="text">
            {{ address }}
          </p>
        </li>
      </ul>

      <div class="dia-btn-box">
        <button
          class="dia-btn-modify"
          @click="isSure=false"
        />
        <button
          class="dia-btn-confirmSubmit"
          @click="submit()"
        />
        <button
          class="dia-close"
          @click="closeDia()"
        />
      </div>
    </div>

    <!-- 地址提交成功 -->
    <div
      v-if="isSubmit"
      class="dia-box success-box"
    >
      <p class="dia-word">
        您的奖品将在X个工作日内发出<br>请耐心等待哦~
      </p>
      <button
        class="dia-btn-confirm" 
        @click="closeDia()"
      />
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
      u_name:"",
      u_phone:"",
      address:"",
      isSure:false,//确认信息
      isSubmit:false, //地址信息提交成功
    };
  },
  methods: {
    closeDia(){
      this.$emit("close");
    },
    confirm(){
      let reg_tel=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if(this.u_name==""||this.u_name==undefined){
        this.$msg("您还没有填写姓名哦~");
        return;
      }
      if(this.u_phone==""||this.u_phone==undefined){
        this.$msg("您还没有填写手机号码哦~");
         return;
      }
      if(!reg_tel.test(this.u_phone)){
        this.$msg("请填写正确的手机号码~");
        return;
      }
      if(this.address==""||this.address==undefined){
        this.$msg("您还没有填写地址哦~");
         return;
      }
      this.isSure=true;
    },
    submit(){
      wx.PTTSendClick("btn","submitAddress","提交地址");
      this.isSubmit=true;
      this.$emit("submit");
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
    height: 654upx;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-bg4.png) no-repeat center/100%;
    box-sizing: border-box;
    padding: 120upx 20upx 0;
    &.sure-box{
      height: 463upx;
      background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-bg3.png) no-repeat center/100%;
    }
    &.success-box{
      height: 458upx;
      background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-bg2.png) no-repeat center/100%;
      padding: 180upx 20upx 0;
      .dia-word{
        font-size: 30upx;
      }
      .dia-btn-confirm{
        width: 172upx;
        height: 51upx;
        background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-confirm.png) no-repeat center/100%;
        display: block;
        margin: 80upx auto 0;
      }
    }
    .dia-word{
      font-size: 20upx;
      color: #71382d;
    }
    .fill-info-list{
      color:#9b5837;
      font-size: 26upx;
      text-align: left;
      margin-bottom: 15upx;
      .item{
        margin-top: 15upx;
        .inp1{
          width: 568upx;
          height: 45upx;
          background: #fdfcf8;
          border:1px solid #f4ddbf;
          padding-left: 5upx;
          box-sizing: border-box;
          font-size: 22upx;
        }
        .address{
          width: 568upx;
          height: 133upx;
          background: #fdfcf8;
          border:1px solid #f4ddbf;
          padding: 5upx;
          box-sizing: border-box;
          font-size: 22upx;
        }
        ::v-deep .place-style{
          font-size: 20upx;
          color: #cfa8a1;
        }
      }
    }
    .dia-btn-submit{
      width: 172upx;
      height: 51upx;
      background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-submit.png) no-repeat center/100%;
      display: block;
      margin: 10upx auto 0;
    }
    .dia-close{
      top: 31upx;
    }
    .info-list{
      width: 473upx;
      margin: 0 auto;
      text-align: left;
      color:#9b5837;
      font-size: 25upx;
      .item{
        position: relative;
        padding: 10upx 0;
        min-height: 30upx;
        &::after{
          content: '';
          width: 473upx;
          height: 5upx;
          background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/icon-line2.png) no-repeat center/100%;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .label{
          float: left;
          font-weight: normal;
        }
        .text{
          margin-left: 115upx;
        }
      }
    }
    .dia-btn-box{
      padding: 0 60upx;
      display: flex;
      justify-content: space-around;
      margin: 20upx auto 0;
      .dia-btn-modify{
        width: 172upx;
        height: 51upx;
        background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-modify.png) no-repeat center/100%;
      }
      .dia-btn-confirmSubmit{
        width: 172upx;
        height: 51upx;
        background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/dia-btn-confirmSubmit.png) no-repeat center/100%;
      }
    }
  }
}
</style>
