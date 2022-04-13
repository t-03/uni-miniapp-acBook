<template>
  <div class="page">
    客态页
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getInviteData } from "@/api/api";
export default {
  name: "Guest",
  data() {
    return {
     
    };
  },

  computed: {
    ...mapGetters(["token"])
  },

  onLoad(options) {
    this.inviteId=options.inviteId;
    this.inviteType=options.inviteType;
    this.inviteToken=options.inviteToken;
    if(!this.token){
      this.$doWXLogin();
    }
  },
  onShow(){
    //pv上报设置
    wx.setSite({ 
      pageType:"guest",
      pageName:"客态页"
    });
     // 页面PV上报 actid需要找开发要
    this.$milo.checkLogin().then((res) => {
      this.$milo.easReportPV({  e_code: "", actid: 439280, acttype: "ams" }); 
    });
    if(this.token){
      this.init();
    }
  },
  methods: {
    init(){
      var that=this;
      getInviteData("830285",that.inviteId,that.inviteType,that.inviteToken).then((res)=>{
        if(res.iRet === "0" ){
          console.log("初始化");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .page{
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: url(https://game.gtimg.cn/images/wslg/cp/a20211221dgqyj/bg2.jpg) no-repeat center top/100% 100%;
    box-sizing: border-box;
    padding: 20upx 0;
    overflow: hidden;
    font-size: 24upx;
    color: #fff;
  }
</style>
