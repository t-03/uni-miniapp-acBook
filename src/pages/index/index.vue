<template>
  <div class="page">
    首页
    <button class="btn-to-treasure" @click="toGame" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { rewardList } from "@/utils/gameData"; //全局大规模数据，可以统一存放
import { getData } from "@/api/api";
export default {
  name: "Index",
  data() {
    return {
      rewardList: rewardList
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["userinfo"])
  },
  watch: {},
  onLoad() {
    var that = this;
    if (!that.token) {
      that.$doWXLogin();
    }
  },
  onShow() {
    var that = this;
    if (that.token) {
      that.init(); //页面数据初始化
    }
  },
  methods: {
    init() {
      var that = this;
      getData("829629").then(res => {
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
  background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/bg1.jpg)
    no-repeat center top/100% 100%;
  box-sizing: border-box;
  padding-top: 20upx;
  overflow: hidden;
  font-size: 24upx;
  color: #fff;
  .btn-to-treasure {
    width: 439upx;
    height: 114upx;
    display: block;
    margin: 0 auto;
    position: relative;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/btn-to-treasure.png)
      no-repeat center/100%;
    margin: -40upx auto 0;
  }
}
</style>
