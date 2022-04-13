import store from "../store";
import * as milo from "@/utils/milo";
import Vue from "vue";

export function getData(flowId){
  var flow = {
    activityId: store.state.users.activityId,
    flowId: flowId,
    sData:{
        ams_targetappid:store.state.users.targetWXAppid,
        Wxopenid:uni.getStorageSync("openid"),
        sWXType: store.state.users.sWXType,
        sPlatId:uni.getStorageSync("sPlatId"),
        device:uni.getStorageSync("device")
    }
  };
  return new Promise((resolve) => {
    milo.emit(flow).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        Vue.prototype.$msg(err.sMsg);
      }
    );
  });
}

export function getInviteData(flowId,inviteId,inviteType,inviteToken){
  var flow = {
    activityId: store.state.users.activityId,
    flowId: flowId,
    sData:{
        ams_targetappid:store.state.users.targetWXAppid,
        Wxopenid:uni.getStorageSync("openid"),
        sWXType: store.state.users.sWXType,
        sPlatId:uni.getStorageSync("sPlatId"),
        device:uni.getStorageSync("device"),
        inviteId:inviteId,
        inviteType:inviteType,
        inviteToken:inviteToken
    }
  };
  return new Promise((resolve) => {
    milo.emit(flow).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        Vue.prototype.$msg(err.sMsg);
      }
    );
  });
}
