(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invite-reg/invite-reg"],{83:
/*!****************************************************************!*\
  !*** ./src/main.js?{"page":"pages%2Finvite-reg%2Finvite-reg"} ***!
  \****************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n){t(/*! uni-pages */4);o(t(/*! vue */2));var e=o(t(/*! ./pages/invite-reg/invite-reg.vue */84));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},84:
/*!*********************************************!*\
  !*** ./src/pages/invite-reg/invite-reg.vue ***!
  \*********************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! ./invite-reg.vue?vue&type=template&id=a4ea2574& */85),i=t(/*! ./invite-reg.vue?vue&type=script&lang=js& */87);for(var c in i)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(c);t(/*! ./invite-reg.vue?vue&type=style&index=0&lang=css& */89);var s,r=t(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */11),a=Object(r["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);a.options.__file="pages/invite-reg/invite-reg.vue",e["default"]=a.exports},85:
/*!****************************************************************************!*\
  !*** ./src/pages/invite-reg/invite-reg.vue?vue&type=template&id=a4ea2574& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";t.r(e);var o=t(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--14-0!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./invite-reg.vue?vue&type=template&id=a4ea2574& */86);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},86:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--14-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/invite-reg/invite-reg.vue?vue&type=template&id=a4ea2574& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return s})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));var i=function(){var n=this,e=n.$createElement;n._self._c},c=!1,s=[];i._withStripped=!0},87:
/*!**********************************************************************!*\
  !*** ./src/pages/invite-reg/invite-reg.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./invite-reg.vue?vue&type=script&lang=js& */88),i=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},88:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/invite-reg/invite-reg.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{mobile:"",code:"",password:"",confirmPassword:"",codeDuration:0,inviteCode:""}},onLoad:function(n){this.inviteCode=n.invite_code},methods:{sendSmsCode:function(){var e=this;this.codeDuration&&n.showModal({content:"请在".concat(this.codeDuration,"秒后重试"),showCancel:!1}),/^1\d{10}$/.test(this.mobile)?(n.showLoading({title:"请稍等...",mask:!0}),t.callFunction({name:"user-center",data:{action:"sendSmsCode",params:{mobile:this.mobile,type:"register"}},success:function(t){0==t.result.code?(n.showModal({content:"验证码发送成功，请注意查收",showCancel:!1}),e.codeDuration=60,e.codeInterVal=setInterval((function(){e.codeDuration--,0===e.codeDuration&&e.codeInterVal&&(clearInterval(e.codeInterVal),e.codeInterVal=null)}),1e3)):n.showModal({content:"验证码发送失败："+t.result.msg,showCancel:!1})},fail:function(e){n.showModal({content:"验证码发送失败",showCancel:!1})},complete:function(){n.hideLoading()}})):n.showModal({content:"手机号码填写错误",showCancel:!1})},register:function(){var e=this;/^1\d{10}$/.test(this.mobile)?this.password.length<6?n.showToast({icon:"none",title:"密码最短为 6 个字符"}):this.password===this.confirmPassword?""!==this.code?(n.showLoading({title:"请稍后..."}),t.callFunction({name:"user-center",data:{action:"inviteLogin",params:{mobile:this.mobile,code:this.code,inviteCode:this.inviteCode,password:this.password}},success:function(t){0===t.result.code?n.showModal({content:"注册成功，是否立即下载APP登录",success:function(n){n.confirm&&e.download()}}):n.showModal({content:"注册失败："+t.result.msg,showCancel:!1})},fail:function(e){n.showModal({content:JSON.stringify(e),showCancel:!1})},complete:function(){n.hideLoading()}})):n.showToast({icon:"none",title:"请输入正确的验证码"}):n.showToast({icon:"none",title:"两次密码输入不一致"}):n.showModal({content:"手机号码填写错误",showCancel:!1})},download:function(){location.href="https://login.tpl.dcloud.net.cn/package/android-latest.apk"}}};e.default=o}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"],t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */20)["default"])},89:
/*!******************************************************************************!*\
  !*** ./src/pages/invite-reg/invite-reg.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./invite-reg.vue?vue&type=style&index=0&lang=css& */90),i=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},90:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/invite-reg/invite-reg.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){}},[[83,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/invite-reg/invite-reg.js.map