/*
create by yamiediewei in 2020-03-12

使用方法：
1，部署文件
1.1，将组件下载好，并放到项目合适的目录中
1.2，在应用入口app.js引入组件，例如：require('./utils/ptt_for_miniapp.js')
1.3，在这里搜索'const setSite',设置正确的setSite属性;
1.4，将https://dmplog.qq.com 添加为request合法域名
1.5，在每一个page对应的xxx.js里的onShow事件里，设置setSite的pageType和pageName的值，如:
     onShow:function(){
      wx.setSite({
        pageType:"index",
        pageName:"首页"
      })
     }


2，埋点有2种场景，请选择符合自己业务逻辑的场景：
2.1，如果没有openid兑换的小程序，则不需要再做什么
2.2，如果有openid兑换的小程序，请在返回openid的success里，加入wx.saveOpenid(openid),如果是qq小程序，则改成qq.saveOpenid(openid),以下相同。

事件触发上报，（类web版的PTT组件PTTSendClick方法）按钮的上报则是：
wx.PTTSendClick('btn类型','btn英文名','中文名')   <===>  PTTSendClick('link','top-nav1','顶部导航1')

调试基础库版本最好在:2.9.5以上
*/
import Vue from "vue";

//全局的小程序业务属性配置
const setSite = {
  dm: "dg.qq.com", //*小程序所属的业务域名， 域名为
  siteType: "a20220112dgqyjminiapp", //*跟运营专题一样自定义，填写一个与该业务内不重复的专题目录名称
  project: "other", //选填，官网体系内容模块名称，取值范围在：projectList里
  osact: "0", //选填，官网类型专题,0,pc,m,ingame
  debug: true, //是否开启debug模式，开启后可以在控制台看到上报成功提示
};

//全局自动采集配置
const AUTO_CONFIG = {
  shareAppMessage: true, //分享自动上报，默认：是  原生事件：onShareAppMessage
  pullDownRefresh: false, //上拉刷新自动上报，默认：否  原生事件：onPullDownRefresh
  reachBottom: false, //触底自动上报，默认：否  原生事件：onReachbottom
};

//组件内部配置
const PTT_CONFIG = {
  dmpPort: "https://dmplog.qq.com/gingame/report/click?",
  _ver: "1.0.4",
  isInit: false, //是否初始化了，防止二次初始化
  launchOptions: null, //暂存onLaunch里的参数，如:options
  prevOptions: null, //暂存上一个页面的onLoad参数
  nowOptions: null, //暂存当前页面onLoad的参数
  prevUrl: "", //暂存上一个页面的route
  nowUrl: "", //暂存当前页面的route
  //userInfo: null,				  //暂存授权后用户信息，需埋点时手动替换，如:PTT.Data.userInfo = getUserInfo,传递对象为Object
  isPVReport: false, //当前页面的pv是否上报过了
  show: !1, //判断是否执行过onShow里的逻辑了
  firstLaunch: "0", //是否第一次launch小程序,作用于scene采集只应用在第一次打开小程序的页面内，0表示之前从未被打开，1表示当前打开是第一次，2表示当前打开是第2||2+次
};

//字符串格式化，去掉所有空格，把_ .符号换成-符号
String.prototype.trimAll = function () {
  return this.replace(/_|\./g, "-").replace(/\s/g, "");
};

//把PTT需要的本地存储数据作为一个JSON放在一个__ptt_storage上,获取的时候，取该key里的属性
const getLocalData = (key) => {
  try {
    let data = API.getStorageSync("__ptt_storage");
    if (data) {
      return key in data ? data[key] : !1;
    } else {
      return !1;
    }
  } catch (e) {
    return !1;
  }
};

//设置PTT本地存储，都存在__ptt_storage里
const setLocalData = (key, value) => {
  try {
    let data = API.getStorageSync("__ptt_storage") || {};
    data[key] = value;
    API.setStorageSync("__ptt_storage", data);
  } catch (e) {
    console.log("setStorageSync失败", e);
  }
};

//清除某个key的PTT本地存储
const delLocalData = (key) => {
  try {
    let data = API.getStorageSync("__ptt_storage") || {};
    delete data[key];
    API.setStorageSync("__ptt_storage", data);
  } catch (e) {
    console.log("setStorageSync失败", e);
  }
};

//获取URL传参,最终返回：?key1=value1&key2=value2...字符串或者''
const getQuery = (a) => {
  if (!PTT_CONFIG.nowOptions || !a) return "";
  var b = [];
  for (let c in a) b.push(c + "=" + a[c]);
  return 0 < b.length ? "?" + b.join("&") : "";
};

//获取当前页面路径
const getPagePath = () => {
  try {
    var a = getCurrentPages(),
      b = "/wrongUrl";
    0 < a.length && (b = a.pop().route);
    return b;
  } catch (c) {
    console.log("get current page path error:" + c);
  }
};

//获取小程序的appid
const getAppid = () => {
  let a = "none";
  let b = getLocalData("appid");
  if (b) {
    a = b;
  } else {
    try {
      a = API.getAccountInfoSync().miniProgram.appId;
      setLocalData("appid", a);
    } catch (e) {}
  }
  return a;
};

//返回设备环境是手Q小程序还是微信小程序
const getPlat =
  "undefined" != typeof qq
    ? "dcv_qqapp"
    : "undefined" != typeof wx
    ? "dcv_wxapp"
    : "dcv_none";

//继承微信全局API:wx，或者手Q全局API:qq
const API = "undefined" != typeof qq ? qq : "undefined" != typeof wx ? wx : {};

//dmp获取业务域名特征:gameid
const _game = (() => {
  let _game = /([^.]+)\.[^.]+\.com/i.exec(setSite.dm);
  if (_game) {
    _game = _game[1];
  } else {
    _game = "cptest";
    console.warn("非QQ域下的数据上报有可能无效，请验证");
  }
  return _game;
})();

//设置sid
const setSid = () =>
  setLocalData(
    "ssid",
    `s${
      (Math.round(49704631 * Math.abs(Math.random() - 1)) *
        new Date().getMilliseconds()) %
      1e8
    }`
  );

//获取sid
const getSid = () => getLocalData("ssid") || "nossid";

//获取系统信息
const systemInfo = (() => {
  let info = {};
  try {
    info = API.getSystemInfoSync();
  } catch (e) {
    console.error(e);
  }
  return info;
})();

//获取硬件信息pf
const getHardWare = () => {
  let SI = systemInfo,
    arr = [],
    d = "none";
  arr.push(
    "mo=" + (SI.hasOwnProperty("model") ? /[\w|\s]*/.exec(SI["model"])[0] : d)
  );
  arr.push("pr=" + (SI.hasOwnProperty("pixelRatio") ? SI["pixelRatio"] : d));
  arr.push(
    "vsize=" +
      (SI.hasOwnProperty("windowWidth")
        ? SI["windowWidth"] + "x" + SI["windowHeight"]
        : d)
  );
  arr.push("sys=" + (SI.hasOwnProperty("system") ? SI["system"] : d));
  arr.push("lang=" + (SI.hasOwnProperty("language") ? SI["language"] : d));
  arr.push("ver=" + (SI.hasOwnProperty("version") ? SI["version"] : d));
  arr.push(
    "ssize=" +
      (SI.hasOwnProperty("screenWidth")
        ? SI["screenWidth"] + "x" + SI["screenHeight"]
        : d)
  );
  arr.push("sdk=" + (SI.hasOwnProperty("SDKVersion") ? SI["SDKVersion"] : d));
  arr.push("brand=" + (SI.hasOwnProperty("brand") ? SI["brand"] : d));
  arr.push("plat=" + (SI.hasOwnProperty("platform") ? SI["platform"] : d));
  arr.push("zone=" + new Date().getTimezoneOffset() / 60);
  return arr;
};

//PV上报携带的hottag
const getPVHottag = () => {
  let arr = [];
  let SI = systemInfo,
    d = "none";
  let br =
    "undefined" != typeof qq ? "qqapp" : "undefined" != typeof wx ? "wxapp" : d; //浏览器信息和系统信息
  br += (SI.hasOwnProperty("version") && SI["version"]) || d;
  let viewsize = SI.hasOwnProperty("windowWidth")
    ? SI["windowWidth"] + "x" + SI["windowHeight"]
    : d;
  let devicesize = SI.hasOwnProperty("screenWidth")
    ? SI["screenWidth"] + "x" + SI["screenHeight"]
    : d;
  arr.push(weekloop());
  arr.push(getRouteLine());
  arr.push(";;;"); //对应moss后台数据结构所增加的4个无用分号，之前在web端的意义：域名用户，官网用户，官网体系用户，专题用户
  arr.push("browserInfo_" + br + "_浏览器信息");
  arr.push("viewsize_" + viewsize + "_可视尺寸");
  arr.push("devicesize_" + devicesize + "_设备尺寸");
  arr.push("systemInfo_" + br + "_系统信息");
  return arr;
};

//周留存逻辑
const weekloop = () => {
  var str = "";
  var day = new Date(),
    y = day.getFullYear(),
    m = day.getMonth(),
    d = day.getDate(),
    _a = new Date(y, 0, 1).getDay(); //当年的1月1日是星期几
  //var _d=(_a==0?7:_a)*24*60*60*1000;																      //如果选择周一是一周的第一天
  var _d = (_a + 1) * 24 * 60 * 60 * 1000; //如果选择周日是一周的第一天
  var nowWeek = Math.ceil(
    Math.ceil(
      (new Date(y, m, d) - new Date(y, 0, 1) + _d) / 1000 / 60 / 60 / 24
    ) / 7
  ); //得到当前日期是本年第几周
  var weekloop = getLocalData("weekloop");
  if (weekloop && weekloop.split("-")[3] == nowWeek) {
    //如果当前的周已经上报过了，则返回
    return "";
  }
  var stayArr = weekloop ? weekloop.split("-") : ["0", "0", "0", "0"]; //每周回访的周数链，比如今年第30周，31周，33周曾访问过，那就是[30,31,0,33]
  var L = 0; //如果隔周回访，需要在中间添加几个0
  if (nowWeek > stayArr[3]) {
    //没有经历跨年的常规周,计算需要添加几个0
    L = nowWeek - stayArr[3] - 1;
  } else {
    //跨年的周,计算需要添加几个0
    var totalWeek = 53; //获取去年有几周
    if (
      new Date(y - 1, 1, 29).getDate() == 29 &&
      new Date(y - 1, 0, 1).getDay() == 6
    ) {
      //去年是否闰年且1月1日是否是周六；如果周一是一周的第一天，则是.getDay()==6修改为==0
      totalWeek = 54;
    }
    var L = totalWeek - stayArr[3] + nowWeek - 1; //是否需要添加0，需要添加几个;假设当年存在的是53周，那么可能存在0_0_53_1,或者52_0_0_2或者51_0_0_1或者0_0_0_2
  }
  for (var i = 0; i < L; i++) {
    stayArr.push("0"); //往数组里塞l个0
  }
  stayArr.push(nowWeek + "");
  stayArr.splice(0, stayArr.length - 4); //取数组里最后4个
  str = stayArr.join("-");
  setLocalData("weekloop", str);
  return "weekloop_" + str + "_周留存";
};

//routeLine逻辑
const getRouteLine = () => {
  let pageType = "nopageType";
  let str = getLocalData("routeline");
  if (!str || str.split("_").length <= 7) {
    //历史路径只记录8个
    try {
      pageType = PTT.setSite.pageType || getPagePath().split("/").pop(); //如果没有设置SetSite.pageTpe，则获取route最后一个单词
    } catch (e) {}
    str = str ? str + "_" + pageType : pageType;
    setLocalData("routeline", str);
    str = "route_" + str + "_路径";
  } else {
    str = "";
  }
  return str;
};

//构建PTT对象
const PTT = {
  setSite: {},

  //是否新增
  reserved1: "",

  //设置userid,既uid
  pvid: () => {
    let __pvid = getLocalData("pvid");
    if (!__pvid) {
      PTT.reserved1 = "new";
      __pvid =
        (Math.round(49704631 * Math.abs(Math.random() - 1)) *
          new Date().getMilliseconds()) %
        1e8;
      setLocalData("pvid", __pvid.toString());
    }
    return __pvid;
  },

  //osact获取
  osact: (setSite) => {
    var tempStr = 0,
      osArr = ["0", "m", "pc", "ingame"];
    if (setSite.hasOwnProperty("osact")) {
      //如果设置了osact
      tempStr = (setSite.osact + "").trimAll();
      if (osArr.indexOf(tempStr) == -1) {
        //如果osact不符合取值范围
        console.warn(
          "您设置的osact值超出范围，请在" +
            osArr.join(",") +
            "中选择一个,否则将以0代替"
        );
        tempStr = 0;
      }
    }
    return tempStr;
  },

  //返回官网体系内容模块名称
  project: (setSite) => {
    const projectList = [
      "base",
      "ingame",
      "doujin",
      "match",
      "story",
      "history",
      "fans",
      "coming",
      "bbs",
      "mct",
      "skin",
      "other",
      "hero",
      "commerce",
      "version",
      "brand",
      "ip",
      "community",
      "netbar",
      "important",
      "app",
    ];
    if (!setSite.hasOwnProperty("project")) {
      if (
        setSite.hasOwnProperty("siteType") &&
        setSite.siteType.toLowerCase() == "os"
      ) {
        return "base";
      } else {
        return "other";
      }
    } else if (projectList.indexOf(setSite.project.trimAll()) != -1) {
      return setSite.project.trimAll();
    } else {
      console.error(
        "PTT组件提示：您设置的project参数值有误，目前只允许设置值为:" +
          projectList.join(",") +
          "请检查"
      );
      return "other";
    }
  },

  //停留时长
  stayTime: (pageConfig) => {
    if (pageConfig && pageConfig.isStayReport) return false;
    let stayTime = new Date().getTime() - pageConfig.startTime;
    pageConfig.isStayReport = true;
    pageConfig.startTime = null;
    PTT.__PTTSendClick("newstaytime", stayTime, "停留时长", "timeline");
  },

  //每次launch执行
  init: () => {
    if (PTT_CONFIG.isInit) return false;
    PTT_CONFIG.isInit = true;
    //每次执行onLaunch就等于执行了此方法，就表示一个新的Session的开始，设置新的sid
    setSid();
    //每次onlaunch清空routeline历史,和网络类型
    delLocalData("routeline");
    delLocalData("network");

    //把事件上报函数挂靠在API上
    API.PTTSendClick = function () {
      PTT.PTTSendClick.apply(this, arguments);
    };
    API.saveOpenid = function () {
      PTT.saveOpenid.apply(this, arguments);
    };

    //把setSite函数定义在API上
    API.setSite = function (json) {
      if (!json) {
        console.error("setSite没有传入任何参数");
        return false;
      }
      for (let key in json) {
        if (key.toLocaleLowerCase() === "pagetype")
          json["pageType"] = json[key];
        if (key.toLocaleLowerCase() === "pagename")
          json["pageName"] = json[key];
      }
      PTT.setSite.pageType = json["pageType"];
      PTT.setSite.pageName = json["pageName"];
    };

    //onLoad事件注入,设置进入页面的时间戳
    // const _page = Page;
    // Page = function (pageConfig) {
    //   const _pageOL = pageConfig.onLoad;
    //   pageConfig.onLoad = function (e) {
    //     PTT_CONFIG.prevOptions = PTT_CONFIG.nowOptions;       //把上一个页面的onload参数赋值给prevOptions
    //     PTT_CONFIG.nowOptions = e;                            //把当前页面的onload参数赋值给nowOptions
    //     PTT_CONFIG.prevUrl = PTT_CONFIG.nowUrl;               //把上一个页面的route赋值给prevUrl
    //     PTT_CONFIG.nowUrl = getPagePath();                    //把当前的route赋值给nowUrl
    //     PTT_CONFIG.show = false;                              //设置为false,在onShow的时候就不执行相同逻辑了
    //     _pageOL && _pageOL.call(this, e);
    //   }

    //   //onShow事件注入,上报PV
    //   const _pageOS = pageConfig.onShow;
    //   pageConfig.onShow = function () {
    //     //在每一个页面onShow的时候，增加：停留时长要用到的属性
    //     pageConfig.startTime = new Date().getTime();          //进入页面时间
    //     PTT_CONFIG.isPVReport = false;                        //是否已经上报过了停留时长，onHide后，很可能onUnload还会上报一次
    //     pageConfig.isStayReport = false;                      //停留时长又可以上报了
    //     PTT.setSite.pageType = getPagePath().split("/").pop();//onLoad的时候把setSite的pageType值重置
    //     PTT.setSite.pageName = "无";                          //onLoad的时候把setSite的pageName值重置
    //     _pageOS && _pageOS.apply(this, arguments);
    //     if (true === PTT_CONFIG.show) {                       //在一些情况下，页面onShow执行而onload未必执行，但是也要上报pv。比如后台切前台时，
    //       let a = PTT_CONFIG.prevOptions;                     //或者tabbar重复切换时,已经加载过的tab，会从onHide变成onShow，但是并不执行onLoad，
    //       PTT_CONFIG.prevOptions = PTT_CONFIG.nowOptions;     //此时的prevOption就应该是noewOptions
    //       PTT_CONFIG.nowOptions = a;                          //
    //       PTT_CONFIG.prevUrl = PTT_CONFIG.nowUrl;               //把上一个页面的route赋值给prevUrl
    //       PTT_CONFIG.nowUrl = getPagePath();                    //把当前的route赋值给nowUrl
    //     }
    //     PTT_CONFIG.show = true;
    //     PTT.reportPV(pageConfig);
    //   }

    //   //onUnload事件注入,停留时长的上报
    //   const _pageOU = pageConfig.onUnload;
    //   pageConfig.onUnload = function () {
    //     _pageOU && _pageOU.apply(this, arguments);
    //     PTT.stayTime(pageConfig);
    //   }

    //   //onHide事件注入,停留时长的上报
    //   const _pageOH = pageConfig.onHide;
    //   pageConfig.onHide = function () {
    //     _pageOH && _pageOH.apply(this, arguments);
    //     PTT.stayTime(pageConfig);
    //   }

    //   //onReachBottom事件注入,到达底部的上报
    //   if (AUTO_CONFIG.reachBottom) {
    //     const _pageOR = pageConfig.onReachBottom;
    //     pageConfig.onReachBottom = function () {
    //       _pageOR && _pageOR.apply(this, arguments);
    //       PTT.__PTTSendClick('pttevent', 'reachbottom', '触达底部');
    //     }
    //   }

    //   //onPullDownRefresh事件注入,到达底部的上报
    //   if (AUTO_CONFIG.pullDownRefresh) {
    //     const _pageOP = pageConfig.onPullDownRefresh;
    //     pageConfig.onPullDownRefresh = function () {
    //       _pageOP && _pageOP.apply(this, arguments);
    //       PTT.__PTTSendClick('pttevent', 'pulldown', '下拉刷新');
    //     }
    //   }

    //   //onShareAppMessage事件注入,到达底部的上报
    //   if (AUTO_CONFIG.shareAppMessage) {
    //     const _pageOM = pageConfig.onShareAppMessage;
    //     if(_pageOM){
    //       pageConfig.onShareAppMessage = function (e) {
    //         PTT.__PTTSendClick('shareapp', e.from, '分享');
    //         return _pageOM.call(this, e);
    //       }
    //     }
    //   }

    //   _page(pageConfig);
    // }
    // 根据uniapp的形式修改为vue的mixin形式监听页面生命周期
    Vue.mixin({
      data() {
        return {
          pageConfig: {},
        };
      },
      onLoad(e) {
        PTT_CONFIG.prevOptions = PTT_CONFIG.nowOptions; //把上一个页面的onload参数赋值给prevOptions
        PTT_CONFIG.nowOptions = e; //把当前页面的onload参数赋值给nowOptions
        PTT_CONFIG.prevUrl = PTT_CONFIG.nowUrl; //把上一个页面的route赋值给prevUrl
        PTT_CONFIG.nowUrl = getPagePath(); //把当前的route赋值给nowUrl
        PTT_CONFIG.show = false;
      },
      onShow() {
        API.setSite(this.pageConfig);
        // console.log(this.pageConfig);
        this.pageConfig.startTime = new Date().getTime(); //进入页面时间
        PTT_CONFIG.isPVReport = false; //是否已经上报过了停留时长，onHide后，很可能onUnload还会上报一次
        this.pageConfig.isStayReport = false; //停留时长又可以上报了
        PTT.setSite.pageType = getPagePath().split("/").pop(); //onLoad的时候把setSite的pageType值重置
        PTT.setSite.pageName = "无"; //onLoad的时候把setSite的pageName值重置
        // API.setSite();
        // _pageOS && _pageOS.apply(this, arguments);
        if (true === PTT_CONFIG.show) {
          //在一些情况下，页面onShow执行而onload未必执行，但是也要上报pv。比如后台切前台时，
          let a = PTT_CONFIG.prevOptions; //或者tabbar重复切换时,已经加载过的tab，会从onHide变成onShow，但是并不执行onLoad，
          PTT_CONFIG.prevOptions = PTT_CONFIG.nowOptions; //此时的prevOption就应该是noewOptions
          PTT_CONFIG.nowOptions = a; //
          PTT_CONFIG.prevUrl = PTT_CONFIG.nowUrl; //把上一个页面的route赋值给prevUrl
          PTT_CONFIG.nowUrl = getPagePath(); //把当前的route赋值给nowUrl
        }
        PTT_CONFIG.show = true;
        PTT.reportPV(this.pageConfig);
      },
      onUpload() {
        PTT.stayTime(this.pageConfig);
      },
      onHide() {
        PTT.stayTime(this.pageConfig);
      },
      onReachBotttom() {
        if (AUTO_CONFIG.reachBottom) {
          PTT.__PTTSendClick("pttevent", "reachbottom", "触达底部");
        }
      },
      onPullRefresh() {
        if (AUTO_CONFIG.pullDownRefresh) {
          PTT.__PTTSendClick("pttevent", "pulldown", "下拉刷新");
        }
      },
      onShareAppmessage(e) {
        PTT.__PTTSendClick("shareapp", e.from, "分享");
      },
    });
  },

  //获取主要参数，供pv上报和事件上报
  getBaseData: () => {
    let _setSite = PTT.setSite;
    _setSite = { ...setSite, ..._setSite }; //把组件里的setSite和页面里的setSite合并
    let dataArr = [`${PTT_CONFIG.dmpPort}_ver=${PTT_CONFIG._ver}`]; //接口和版本号
    let sitetype = _setSite.siteType,
      pageType = _setSite.pageType,
      pageName = _setSite.pageName,
      project = PTT.project(_setSite),
      osact = PTT.osact(_setSite),
      openid = getLocalData("openid") || "",
      game = _game;

    //获取场景值,兼容2种获取方式:getEnterOptionsSync 版本2.9.4,实测2.9.5 和 getLaunchOptionsSync 版本2.1.2,实测是2.2.0
    PTT_CONFIG.launchOptions =
      ("getEnterOptionsSync" in API && API.getEnterOptionsSync()) ||
      ("getLaunchOptionsSync" in API && API.getLaunchOptionsSync()) ||
      {};
    let refer =
        "scene" in PTT_CONFIG.launchOptions
          ? PTT_CONFIG.launchOptions.scene
          : "0",
      arg = getQuery(PTT_CONFIG.nowOptions),
      url = getPagePath(),
      rarg = getQuery(PTT_CONFIG.prevOptions),
      rurl = PTT_CONFIG.prevUrl,
      adtag = /[\\?&]adtag=([^&#]*)/.exec(arg.toLowerCase());
    //当页面是已经打开过了，那refer就不再获取scene了
    if (PTT_CONFIG.firstLaunch === "2") refer = "inherit";
    adtag = adtag ? adtag[1].replace(/\+/g, "") : "";
    dataArr.push(
      `dm=${_setSite.dm}`,
      `game=${game}`,
      `pttsitetype=${sitetype}`,
      `pttpagetype=${pageType}`,
      `pttpagename=${encodeURIComponent(pageName)}`,
      `openid=${openid}`,
      `pttproject=${project}`,
      `pttosact=${osact}`,
      `pttplat=${getPlat}`,
      `pttrefer=${refer}`,
      `url=${encodeURIComponent(url)}`,
      `rurl=${encodeURIComponent(rurl)}`,
      `rarg=${encodeURIComponent(rarg.replace(/\?/, ""))}`,
      `pvid=${PTT.pvid()}`,
      `sid=${getSid()}`,
      `rand=${Math.round(1e5 * Math.random())}`,
      `reserved2=${getAppid()}`,
      `adtag=${adtag}`,
      `reserved1=${PTT.reserved1}`
    );
    return dataArr;
  },

  //归纳所有维度，接受最后一个网络状况维度，发起请求
  sendReq: (net) => {
    //为了让pttrefer也就是scene只在入口页做上报场景值，0表示之前从未被打开，1表示当前打开是第一次，2表示当前打开是第2||2+次
    PTT_CONFIG.firstLaunch = PTT_CONFIG.firstLaunch === "0" ? "1" : "2";
    //获取主要维度
    let dataArr = PTT.getBaseData();
    //获取系统信息里需要的维度
    let pf = getHardWare();
    pf.push("net=" + net);
    //hottag获取
    let hottag = getPVHottag();
    hottag.push("netType_" + net + "_网络类型");
    dataArr.push(
      `rtype=pv`,
      `action=pv`,
      `pf=${encodeURIComponent(pf.join(";"))}`,
      `ext=`,
      `hottag=${encodeURIComponent(hottag.join(";"))}`
    );
    API.request({
      url: dataArr.join("&"),
      success: () => setSite.debug && console.log("pv已成功上报"),
    });
  },

  //在获取网络状态的时候，再发起涵盖所有维度的上报
  reportPV: () => {
    let net = getLocalData("network");
    if (!net) {
      //首次进入
      //获取网络
      API.getNetworkType({
        success: function (b) {
          setLocalData("network", b.networkType);
          PTT.sendReq(b.networkType);
        },
        fail: function (res) {
          PTT.sendReq("unknown"); //API获取失败，几率非常低
        },
      });
    } else {
      PTT.sendReq(net); //非首次进入
    }
  },

  //按钮上报
  PTTSendClick: (btnType, btnName, cnName) => {
    if (btnType === undefined || btnType === null) {
      throw new TypeError(
        `事件上报需要配置参数如:PTTSendClick("btn","name","中文名")`
      );
    }
    (btnType = btnType ? btnType.trimAll() : ""),
      (btnName = btnName ? btnName.trimAll() : ""),
      (cnName = cnName ? cnName.trimAll() : "");
    var reservedWords = ["weekloop", "pttevent", "shareapp", "newstaytime"];
    if (reservedWords.indexOf(btnType.toLowerCase()) != -1) {
      //如果冲突了
      console.warn(
        '由于您的按钮类型与MOSSO系统保留类型雷同，组件将您的按钮类型："' +
          btnType +
          '"，重新命名为："' +
          btnType +
          'clash"'
      );
      btnType += "clash";
    }
    PTT.__PTTSendClick(btnType, btnName, cnName);
  },

  //组件自用的上报方式
  __PTTSendClick: (btnType, btnName, cnName, action) => {
    let _staytime = action === "timeline" ? btnName : "";
    btnType =
      btnType == "" || typeof btnType == "undefined"
        ? ""
        : btnType.toString().replace(/_|\./g, "*-*"); //判断传入参数1是否为""或者没有传
    btnName =
      btnName == "" || typeof btnName == "undefined"
        ? ""
        : "_" + btnName.toString().replace(/_|\./g, "*-*");
    cnName =
      typeof cnName == "undefined"
        ? ""
        : "_" + cnName.toString().replace(/_|\./g, "*-*");
    action = action ? action : "btn";
    let dataArr = PTT.getBaseData();
    let btnStr = btnType + btnName + cnName;
    dataArr.push(
      `rtype=btn`,
      `action=${action}`,
      `hottag=${encodeURIComponent(btnStr)}`,
      `staytime=${_staytime}`
    );
    API.request({
      url: dataArr.join("&"),
      success: () =>
        setSite.debug && console.log("按钮/事件已成功上报", btnStr),
    });
  },

  //pv上报
  saveOpenid: (openid) => {
    if (openid) {
      setLocalData("openid", openid);
    }
  },
};
PTT.init();
//对外接口
const saveOpenid = PTT.saveOpenid;
const PTTSendClick = PTT.PTTSendClick;

module.exports = {
  PTT,
  saveOpenid,
  PTTSendClick,
};
