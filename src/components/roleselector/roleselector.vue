<template>
  <Dialog
    v-if="popStyle == 'inner' ? true : show"
    :pop="popStyle"
    title="绑定区服"
    @modalHide="_hideDialog()"
    @confirmModal="confirmed()"
    @cancelModal="canceled()"
    :showFooterButton="true"
    @tap.stop="hideSelectBox()"
  >
    <view slot="body" class="role-content">
      <view
        class="select-item"
        v-for="(area, $index) in areaInfo"
        :key="$index"
      >
        <view class="label">{{ area.fieldName }}</view>
        <view class="select-info">
          <view class="select-txt" @tap.stop="selectFun(area.fieldKey)">
            {{ area.defaultItem.t }}
          </view>
          <view class="select-box" v-show="selectType === area.fieldKey">
            <scroll-view
              class="select-scroll"
              scroll-y="true"
              style="max-height: 225rpx;"
            >
              <view
                v-for="(data, num) in area['data']"
                :key="num"
                class="select-list"
                @tap.stop="handleAreaChange(data, area, $index, num)"
              >
                {{ data.t }}
              </view>
            </scroll-view>
          </view>
        </view>
      </view>
      <view class="select-item select-role">
        <view class="label">角色</view>
        <view class="select-info">
          <view class="select-txt" @tap.stop="selectFun('roles')">
            {{ roleName ? roleName : "请选择角色" }}
          </view>
          <view class="select-box" v-show="selectType === 'roles'">
            <scroll-view
              class="select-roll"
              scroll-y="true"
              style="max-height: 200rpx;"
            >
              <view
                class="select-list"
                v-for="(roleSelected, index) in roleInfo"
                :key="index"
                @tap.stop="handleRoleChange(roleSelected)"
              >
                {{ roleSelected.roleName }}
              </view>
            </scroll-view>
          </view>
        </view>
      </view>
      <view class="select-item norole">
        <view class="label"></view>
        <view class="select-info select-norole" v-if="noRole">
          <view class="select-txt select-txt-norole">未查询到角色！</view>
        </view>
      </view>
    </view>
  </Dialog>
</template>

<script>
import Dialog from "../dialog/dialog";
import milo from "../../utils/milo";
export default {
  name: "role",
  comments: {
    Dialog
  },
  props: {
    popStyle: {
      type: String,
      default: "dialog"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectType: "",
      noRole: false, // 是否查询到角色
      roleName: "", // 查询到的角色名字
      areaName: null,
      areaInfo: {}, // 大区控件信息
      selectedAreaInfo: {}, // 已选择大区信息
      roleInfo: [], // 角色信息
      selectRoleInfo: {} //选中的角色信息
    };
  },
  mounted() {
    this.getAreaInfo();
  },
  methods: {
    /**
     * 展示与隐藏下拉菜单
     */
    selectFun(selectType) {
      if (this.selectType !== "") {
        this.selectType = "";
        return;
      }
      this.selectType = selectType;
    },
    /**
     * 获取大区控件默认信息
     */
    getAreaInfo() {
      milo.getAreaInfo().then(res => {
        let areaList = res;
        this.areaInfo = [
          {
            fieldKey: areaList["fieldKey"],
            requestKey: areaList["requestKey"],
            fieldName: areaList["fieldName"],
            defaultItem: areaList["data"][0],
            data: areaList["data"]
          }
        ];
        // 检查当前业务有几层控件，并赋默认值
        while (
          areaList["data"][1] &&
          areaList["data"][1].subData &&
          Object.keys(areaList["data"][1].subData).length > 0
        ) {
          const temp = areaList["data"][1].subData;
          this.areaInfo.push({
            fieldKey: temp["fieldKey"],
            requestKey: temp["requestKey"],
            fieldName: temp["fieldName"],
            defaultItem: temp["data"][0],
            data: [temp["data"][0]]
          });
          areaList = areaList["data"][1].subData;
        }
      });
    },
    /**
     * 数据变化
     */
    handleAreaChange(data, area, $index, num) {
      area.defaultItem = data;

      while (this.areaInfo[$index + 1]) {
        this.areaInfo[$index + 1].defaultItem = this.areaInfo[
          $index + 1
        ].data[0];
        if (this.areaInfo[$index]["data"][num].subData) {
          this.areaInfo[$index + 1].data = this.areaInfo[$index]["data"][
            num
          ].subData.data;
        } else {
          this.areaInfo[$index + 1].data = [
            this.areaInfo[$index + 1].defaultItem
          ];
        }
        $index += 1;
      }

      // todo 切换大区 子项数据未变化
      if (area["requestKey"]) {
        if (area["requestKey"] == "area") {
          this.areaName = data.t;
        }
        this.selectedAreaInfo[area["requestKey"]] = data.v;
      }

      this.roleInfo = [];
      this.roleName = "";
      this.selectType = "";

      if (
        data.v !== "empty" &&
        area["requestKey"] ===
          this.areaInfo[this.areaInfo.length - 1].requestKey
      ) {
        // 查询角色
        this.queryRoleInfo();
      }
    },
    /**
     * 角色变化
     */
    handleRoleChange(roleSelected) {
      this.roleName = roleSelected.roleName;
      this.selectRoleInfo = roleSelected;
      this.selectType = "";
    },
    /**
     * 角色查询
     */
    queryRoleInfo() {
      let self = this;

      milo
        .getRoleInfo(self.selectedAreaInfo)
        .then(res => {
          if (res.length > 0) {
            let data = res;
            data.forEach((item, index) => {
              Object.assign(item, self.selectedAreaInfo);
              console.log(1111, item);
              item.areaname = self.areaName;
            });
            self.roleInfo = data;
            console.log(44444444444, self.roleInfo);
            self.noRole = false;
          } else {
            self.roleName = null;
            self.noRole = true;
          }
        })
        .catch(e => {
          console.log("查询角色流程失败", e);
          uni.showModal({
            title: "温馨提示",
            content: e.flowRet.sMsg,
            showCancel: false,
            confirmText: "知道了"
          });
        });
    },
    /**
     * 隐藏下拉框
     */
    hideSelectBox() {
      if (this.selectType !== "") {
        this.selectType = "";
      }
      return;
    },
    /**
     * 隐藏弹窗
     */
    _hideDialog() {
      this.$emit("bindClose", null);
    },
    /**
     * 确认
     */
    confirmed() {
      if (this.roleName) {
        this.$emit("Confirmed", this.selectRoleInfo);
      } else {
        uni.showModal({
          title: "温馨提示",
          content: "请选择角色",
          showCancel: false,
          confirmText: "知道了"
        });
      }
    },
    /**
     * 取消
     */
    canceled() {
      this.$emit("Canceled");
    }
  },
  components: {
    Dialog: Dialog
  }
};
</script>

<style>
.role-content .select-item {
  width: 480rpx;
  height: 52rpx;
  margin: 0 auto 30rpx;
  position: relative;
  display: flex;
}
.role-content .select-role {
  margin-bottom: 0;
}
.role-content .select-item .label {
  height: 100%;
  flex-grow: 1;
  text-align: right;
  font-weight: bold;
  font-size: 28rpx;
  margin-right: 20rpx;
}
.role-content .select-item .select-info {
  width: 360rpx;
  height: 52rpx;
  background: #fff;
  border-radius: 8rpx;
  padding: 0 0rpx;
  display: block;
  position: relative;
  color: #000;
  line-height: 52rpx;
  box-sizing: border-box;
}
/* 右侧黄色 */
.role-content .select-item .select-info:before {
  content: " ";
  width: 42rpx;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background: #d5bb85;
  z-index: 0;
  border-top-right-radius: 8rpx;
  border-bottom-right-radius: 8rpx;
}
/* 箭头 */
.role-content .select-item .select-info:after {
  content: " ";
  position: absolute;
  top: 22rpx;
  right: 12rpx;
  border: 10rpx solid transparent;
  border-top-color: #fff;
  pointer-events: none;
  z-index: 0;
}
.role-content .select-item:first-child .select-info {
  background: rgba(255, 255, 255, 0.5);
}
.role-content .norole {
  margin-bottom: 0;
}
.role-content .norole .select-info {
  background: none;
  padding: 0;
  color: #000000;
}
.role-content .norole .select-info:before {
  display: none;
}
.role-content .norole .select-info:after {
  display: none;
}
.role-content .select-item .select-info .select-txt {
  font-size: 26rpx;
  /* border: 1rpx solid #000000; */
  border-radius: 8rpx;
  width: 350rpx;
  padding-left: 10rpx;
  position: relative;
  z-index: 10000;
}
.role-content .select-item .select-info .select-box {
  width: 360rpx;
  min-height: 120rpx;
  position: absolute;
  top: 55rpx;
  left: 0rpx;
  background: #fff;
  border-bottom-left-radius: 8rpx;
  border-bottom-right-radius: 8rpx;
  z-index: 10001;
  border: 1px solid #000000;
  border-top: none;
  box-sizing: border-box;
  padding: 0rpx 10rpx 10rpx 10rpx;
}
.role-content .select-item .select-info .select-box .select-list:first-child {
  border-top: none;
}
.role-content .select-item .select-info .select-box .select-list {
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  border-top: 1rpx solid #e8e8e8;
  font-size: 26rpx;
  padding-left: 10rpx;
}
.role-content .select-item .select-info .select-box .select-list:last-child {
  border-bottom: none;
}
.select-info.select-norole {
  margin-top: 10rpx;
}
.role-content .select-item .select-info .select-txt-norole {
  border: none;
  color: #000000;
}
</style>
