<template>
  <view class="container">
    <img class="bill-bg" src="../../static/img/user-bg.png" alt="背景Bill" />
    <div class="module1 module">
      <div class="info">
        <div class="avatar">
          <img src="../../static/img/avatar.jpg" alt="头像" />
        </div>
        <div class="user-info">
          <div class="user-name">PAC-MAN</div>
          <hr class="line" />
          <div class="user-mount">
            <div class="mount-icon"></div>
            <div class="mount-num">
              <span>2458</span>
              ￥
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="module2 module">
      <div class="title">
        <div class="title-left">
          <div class="title-icon"></div>
          <div class="title-text">数据分析</div>
        </div>
        <div class="title-year">2022</div>
      </div>
      <hr class="line" />
    </div>
    <div class="module3 module">
      <div class="title">
        <div class="title-left">
          <div class="title-icon"></div>
          <div class="title-text">最常合作</div>
        </div>
        <div class="title-year">FRIENDS</div>
      </div>
      <hr class="line" />
      <div class="friend">
        <div
          v-for="(item, index) in friendList"
          :key="index"
          class="friend-item"
        >
          <div class="friend-avatar">
            <img :src="item.avatar" alt="头像" />
          </div>
          <div class="friend-info">
            <div class="friend-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="module4 module"></div>
    <div class="module4 module"></div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      friendList: [
        {
          name: "我的名字七个字",
          avatar: "../../static/img/user1.jpg"
        },
        {
          name: "我的名字七个字",
          avatar: "../../static/img/user2.jpg"
        },
        {
          name: "我的名字七个字",
          avatar: "../../static/img/user3.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  onShow() {},
  methods: {
    toInvite() {
      uni.navigateTo({
        url: "/pages/invite/invite"
      });
    },
    goto() {
      uni.navigateTo({
        url: "../pwd/update-password"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: texticons;
  font-weight: normal;
  font-style: normal;
  src: url("https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf")
    format("truetype");
}

.container {
  width: 100%;
  height: 100vh;
  background-color: #a8ecfb;
  position: absolute;
  overflow: scroll;
}
.bill-bg {
  position: fixed;
  top: 12rpx;
  width: 100%;
  height: 94rpx;
  z-index: 1;
}

.module {
  margin: 0 auto;
  margin-top: 20rpx;
  border-radius: 20rpx;
  position: relative;
  z-index: 9;
}

.module1 {
  width: 710rpx;
  height: 212rpx;
  margin-top: 31rpx;
  position: relative;
  .info {
    width: 100%;
    height: 173rpx;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    background-color: white;
    border-radius: 20rpx;
    display: flex;
    .avatar {
      width: 193rpx;
      height: 193rpx;
      background-color: #ffffff;
      box-shadow: 0px 0px 12px 1px rgba(59, 130, 144, 0.19);
      border-radius: 10px;
      margin-left: 19rpx;
      margin-bottom: 19rpx;
      position: absolute;
      bottom: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-info {
      margin: 30rpx 21rpx 19rpx 249rpx;
      .user-name {
        color: #333333;
        font-weight: bolder;
        margin-bottom: 20rpx;
      }
      .line {
        border-top: solid 1px #333333;
        width: 440rpx;
        height: 1rpx;
        opacity: 0.1;
      }
      .user-mount {
        width: 440rpx;
        height: 60rpx;
        padding-top: 10rpx;
        display: flex;
        justify-content: space-between;
        position: relative;
        display: table-cell;
        vertical-align: bottom;
        .mount-icon {
          width: 161rpx;
          height: 35rpx;
          background: url(../../static/img/ac-mount-tips.png) no-repeat
            center/100% 100%;
          position: absolute;
          bottom: 0;
        }
        .mount-num {
          position: absolute;
          right: 0;
          bottom: -5rpx;
          font-size: 21rpx;
          color: #68e6fe;
          text-align: bottom;
          line-height: 1;
          span {
            font-size: 68rpx;
            font-weight: bolder;
            line-height: 1;
          }
        }
      }
    }
  }
}

.module2 {
  width: 710rpx;
  height: 421rpx;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 1rpx rgba(59, 130, 144, 0.19);
  padding: 26rpx 19rpx 27rpx 20rpx;
  box-sizing: border-box;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-left {
      display: flex;
      align-items: center;
      .title-icon {
        background: url(../../static/img/icon-static.png) no-repeat center/100%
          100%;
        width: 25rpx;
        height: 25rpx;
      }
      .title-text {
        margin-left: 10rpx;
        color: #333333;
        font-size: 26rpx;
        font-weight: bolder;
      }
    }
    .title-year {
      font-size: 22rpx;
      color: #68e6fe;
    }
  }
  .line {
    width: 673rpx;
    height: 1rpx;
    margin-top: 14rpx;
    border-top: solid 1rpx #333333;
    opacity: 0.1;
  }
}
.module3 {
  width: 710rpx;
  height: 293rpx;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 1rpx rgba(59, 130, 144, 0.19);
  padding: 26rpx 19rpx 27rpx 20rpx;
  box-sizing: border-box;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-left {
      display: flex;
      align-items: center;
      .title-icon {
        background: url(../../static/img/icon-static.png) no-repeat center/100%
          100%;
        width: 25rpx;
        height: 25rpx;
      }
      .title-text {
        margin-left: 10rpx;
        color: #333333;
        font-size: 26rpx;
        font-weight: bolder;
        // letter-spacing: 20rpx;
      }
    }
    .title-year {
      font-size: 22rpx;
      color: #68e6fe;
    }
  }
  .line {
    width: 673rpx;
    height: 1rpx;
    margin-top: 14rpx;
    border-top: solid 1rpx #333333;
    opacity: 0.1;
  }
  .friend {
    margin-top: 23rpx;
    display: flex;
    width: 593rpx;
    height: 163rpx;
    margin: 0 auto;
    margin-top: 23rpx;
    & div:last-child {
      margin-right: 0;
    }
    .friend-item {
      display: flex;
      flex-direction: column;
      margin-right: 39rpx;
      .friend-avatar {
        width: 120rpx;
        height: 119rpx;
        // background-color: #30d0ff;
        box-shadow: 0px 0px 12prx 1rpx rgba(59, 130, 144, 0.19);
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .friend-info {
        color: #333333;
        font-size: 16rpx;
        margin-top: 25rpx;
        .friend-name {
          text-align: center;
        }
      }
    }
  }
}
.module4 {
  width: 710rpx;
  height: 294rpx;
  box-shadow: 0px 0px 12px 1rpx rgba(59, 130, 144, 0.19);
  padding: 26rpx 19rpx 27rpx 20rpx;
  box-sizing: border-box;
  background-color: #ffffff;
  background: url(http://192.168.31.193/202204/uni-miniapp-acBook/src/static/img/model4-bg.jpg)
    no-repeat center/cover;
  margin-bottom: 40rpx;
}
</style>
