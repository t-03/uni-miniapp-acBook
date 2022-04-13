<template>
  <view>
    <view v-if="isBindShow" class="role-cover">
      {{ bindareaInfo.details.FareaName }}:
      {{ bindareaInfo.details.FroleName }}
      [
      <view @tap="showRoleSelector" class="role-cover-tips">
        更改绑定
      </view>
      ]
    </view>
    <view class="role-cover" v-else>
      <view @tap="showRoleSelector" class="role-cover-tips allWidth">
        绑定大区
      </view>
    </view>
    <roleSelector
      :show="dialogShow"
      @bindClose="closeDialog"
      @Confirmed="commitBind"
      @Canceled="cancelBind"
    ></roleSelector>
  </view>
</template>

<script>
import milo from "../../utils/milo";
import roleSelector from "../roleselector/roleselector.vue";
export default {
  name: "bindarea",
  components: {
    roleSelector
  },

  props: {
    activityId: {
      type: String,
      default: ""
    },
    queryFlowid: {
      type: String,
      default: ""
    },
    commitFlowid: {
      type: String,
      default: ""
    }
    // isBindShow: {
    //   type: Boolean,
    //   default: false
    // }
  },

  data() {
    return {
      bindShow: false,
      dialogShow: false,
      bindareaInfo: {
        details: {}
      }
    };
  },
  mounted() {
    this.queryBindAreaInfo();
  },

  methods: {
    /**
     * 查询绑定大区
     */
    queryBindAreaInfo: function() {
      let amsCfg = {
        activityId: this.activityId,
        flowId: this.queryFlowid
      };
      console.log("amsCfg", amsCfg);

      milo
        .emit(amsCfg)
        .then(res => {
          if (res && res.jData && res.jData.data) {
            this.decodeResultInfo(res);
          } else {
            console.log("关闭选择区服弹窗");
            this.isBindShow = false;
          }
        })
        .catch(e => {
          console.log("查询绑定大区错误", e);
        });
    },

    decodeResultInfo: function(res) {
      this.isBindShow = true;
      this.bindareaInfo.details = res.jData.data;
      (this.bindareaInfo.details.FareaName = decodeURIComponent(
        res.jData.data.FareaName
      )),
        (this.bindareaInfo.details.FroleName = decodeURIComponent(
          res.jData.data.FroleName
        ));
    },

    showRoleSelector: function() {
      this.dialogShow = true;
    },

    commitBind: function(roleInfo) {
      console.log(22222222222, roleInfo);
      this.dialogShow = false;
      this.commitBindInfo(roleInfo);
    },
    cancelBind: function() {
      this.dialogShow = false;
    },

    closeDialog: function() {
      this.dialogShow = false;
    },
    /**
     * 绑定大区信息
     */
    commitBindInfo: function(roleInfo) {
      let self = this;
      roleInfo.sArea = roleInfo.area ? roleInfo.area : "";
      roleInfo.sPlatId = roleInfo.platid ? roleInfo.platid : "";
      roleInfo.sPartition = roleInfo.partition ? roleInfo.partition : "";
      delete roleInfo.area;
      delete roleInfo.partition;
      delete roleInfo.platid;
      delete roleInfo.roleLevel;
      console.log("角色信息", roleInfo);

      let amsCfg = {
        activityId: this.activityId,
        flowId: this.commitFlowid,
        sData: roleInfo
      };

      milo
        .emit(amsCfg)
        .then(res => {
          if (res && res.jData && res.jData.data) {
            this.decodeResultInfo(res);
          } else {
            this.isBindShow = false;
          }

          uni.showToast({
            title: "绑定角色成功",
            icon: "success",
            duration: 2000
          });
          self.$emit("success", res);
        })
        .catch(e => {
          console.log("绑定失败", e);
          uni.showToast({
            title: e.msg,
            icon: "none",
            duration: 2000
          });
          self.$emit("fail", e);
        });
    }
  }
};
</script>

<style>
.role-cover {
  display: flex;
  justify-content: center;
}
.role-cover-tips {
  display: inline-block;
  text-decoration: underline;
}
.allWidth {
  display: block;
  margin: 0 auto;
}
</style>
