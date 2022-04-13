<template>
  <view class="modal-container">
    <view class="masklayer" v-if="pop == 'dialog'"></view>
    <view class="modal dia2 dia-bindUser" style="'width:598rpx;height:646rpx'">
      <view class="modal-layer">
        <!-- 头部区域 -->
        <view class="modal-header ">
          <view
            class="modal-close dia-close"
            @tap="_modalHide()"
            v-if="pop == 'dialog'"
          ></view>
          <view class="modal-header-title dia-title4">
            <!-- <text>{{ title }}</text> -->
          </view>
          <slot name="title"></slot>
        </view>
        <!--内容区域-->
        <view class="modal-body">
          <slot name="body"></slot>
        </view>
        <!-- 按钮区域 -->
        <view class="modal-footer">
          <slot name="footer"></slot>
          <text
            @tap="_confirmModal"
            class="btn btn-confirm"
            v-if="showFooterButton && pop == 'dialog'"
          >
            <!-- {{ confirmText }} -->
          </text>
          <text
            @tap="_cancelModal"
            class="btn btn-cancel"
            v-if="showFooterButton && pop == 'dialog'"
          >
            <!-- {{ cancelText }} -->
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {};
  },

  props: {
    pop: {
      type: String,
      default: "dialog"
    },
    title: {
      type: String,
      default: "标题"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showFooterButton: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 680
    },
    height: {
      type: Number,
      default: 600
    }
  },

  methods: {
    _confirmModal() {
      this.$emit("confirmModal", null);
    },

    _cancelModal() {
      this.$emit("cancelModal", null);
    },

    _modalHide() {
      this.$emit("modalHide", null);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  font-size: 28rpx;
  border: 1px solid #000000;
  border-radius: 50rpx;
  color: #000000;
  background-color: #ffffff;
}
.modal-header-title {
  font-size: 40rpx;
  font-family: "微软雅黑";
  font-weight: bold;
  width: 100%;
  height: 50rpx;
  display: block;
  position: relative;
  margin-top: 40rpx;
  text-align: center;
}
.modal-header .modal-close {
  // background: #e9c46a;
  // /* make a round button */
  // border-radius: 28rpx;
  // /* center text */
  // line-height: 50rpx;
  // text-align: center;

  // font-size: 42rpx;
  // font-weight: bold;

  // height: 56rpx;
  // width: 56rpx;
  // top: -10rpx;
  // right: -10rpx;
  // position: absolute;

  width: 32rpx;
  height: 32rpx;
  position: absolute;
  top: -50rpx;
  right: -30rpx;
  // background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/dia-close.png)
  //   no-repeat center/cover;
}
.modal-header .modal-close::before {
  content: "\2716";
  color: #ffffff;
}
.masklayer {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #999;
  z-index: 998;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.modal-body {
  margin-top: 20rpx;
  padding: 20rpx 0 30rpx;
}
.modal-footer {
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 110rpx;
}
.btn {
  border: 1px solid #000000;
  background-color: #e9c46a;
  font-weight: bold;
  width: 180rpx;
  height: 30rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rpx;
  color: #000000;
  padding: 19rpx 5rpx;
  margin-bottom: 30rpx;
}
/* 弹窗 */
.dia-title4 {
  width: 144rpx;
  height: 36rpx;
  margin: 70rpx auto 20rpx;
  background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/dia-title4.png)
    no-repeat center/cover;
}
.dia3-tip {
  font-size: 18rpx;
  color: #fbdfa2;
  margin: 0 auto;
  width: 520rpx;
}

.dia2 {
  border: none;
  width: 598rpx;
  height: 646rpx;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/bg-dia2.png)
    no-repeat center/cover;
  .dia-title4 {
    width: 144rpx;
    height: 36rpx;
    margin: 70rpx auto 20rpx;
    background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/dia-title4.png)
      no-repeat center/cover;
  }
  .dia3-tip {
    font-size: 18rpx;
    color: #fbdfa2;
    margin: 0 auto;
    width: 520rpx;
  }
  .agree {
    display: inline-block;
    width: 21rpx;
    height: 21rpx;
    background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/agree.png)
      no-repeat center/cover;
  }
  .unAgree {
    display: inline-block;
    width: 21rpx;
    height: 21rpx;
    background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/unAgree.png)
      no-repeat center/cover;
  }
  .dia-choose {
    display: flex;
    flex-direction: column;
    .dia-select {
      margin: 0 auto;
      position: relative;
      .icon {
        pointer-events: none;
        top: 30rpx;
        right: 14rpx;
        display: block;
        position: absolute;
        z-index: 10;
        width: 19rpx;
        height: 13rpx;
        background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/icon-select.png)
          no-repeat center/cover;
      }
      select {
        width: 473rpx;
        height: 42rpx;
        background-color: #fff;
        margin: 14rpx auto;
        border: none;
        font-size: 32rpx;
        position: relative;
        color: black;
      }
    }
  }
  .btn-confirmAndCancel {
    display: flex;
    margin-top: 10rpx;
    justify-content: space-around;
    a {
      color: white;
    }
    .btn-confirm {
      width: 224rpx;
      height: 51rpx;
      display: block;
      background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-confirm.png)
        no-repeat center/cover;
    }
    .btn-cancel {
      width: 224rpx;
      height: 51rpx;
      display: block;
      background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-cancel.png)
        no-repeat center/cover;
    }
  }
  .dia-center {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 15%;
    .dia-title2 {
      width: 216rpx;
      height: 37rpx;
      background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/dia-title2.png)
        no-repeat center/cover;
    }
    .btn-go {
      width: 224rpx;
      height: 51rpx;
      display: block;
      margin: 0 auto;
      background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-go.png)
        no-repeat center/cover;
    }
    .dia-content {
      .icon_record {
        background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/dia-icon-record.png)
          no-repeat center/cover;
        display: block;
        width: 136rpx;
        height: 129rpx;
        position: relative;
        margin: 30rpx auto 16rpx;
        img {
          position: absolute;
          width: 90%;
          height: 96%;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .reward {
      width: 172rpx;
      height: 41rpx;
      font-size: 26rpx;
      color: #8a1e1e;
      text-align: center;
      background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/bg-reward.png)
        no-repeat center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        max-width: 150rpx;
      }
    }
  }
}
.btn-confirm {
  width: 224rpx;
  height: 51rpx;
  display: block;
  background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-confirm.png)
    no-repeat center/cover;
  border: none;
  margin: 0;
  padding: 0;
}
.btn-cancel {
  width: 224rpx;
  height: 51rpx;
  display: block;
  background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-cancel.png)
    no-repeat center/cover;
  border: none;
  margin: 0;
  padding: 0;
}
.btn-unbind {
  display: block;
  width: 224rpx;
  height: 51rpx;
  margin: 0 auto;
  background: url(//game.gtimg.cn/images/wslg/cp/a20220221fxfd/btn-unbind.png)
    no-repeat center/cover;
}
</style>
