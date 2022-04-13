
/* !
* milo-mini-sdk
* Milo.min.js v2.1.2
* updated date 2021/12/13
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["milo"] = factory();
	else
		root["milo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(60);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(61);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = {
  appid: '',
  gameId: '',
  targetWXAppid: '',
  // 请求openid api
  loginApi: 'https://mini.game.qq.com/ams/ame/wxApi', // 当前只有一台机器，后续需要增加机器
  qqloginApi: 'https://ams.game.qq.com/ams/userLoginSvr', // qq登录接口
  // 请求AME时用到的域名
  AMEApi: '',
  sSDID: '',
  showArea: 'default', // 指定显示平台区分
  sServiceType: '',
  sServiceDepartment: '',
  isNeedPromise: false, // 是否需要返回promise
  isQQMini: !!(wx && wx.getSystemInfoSync().AppPlatform == 'qq'),
  isWXMini: 'object' === (typeof wx === 'undefined' ? 'undefined' : (0, _typeof3.default)(wx)) && 'function' === typeof wx.getSystemInfoSync,
  mini: wx && wx.getSystemInfoSync().AppPlatform == 'qq' ? qq : wx,
  reportUrl: '', // 上报日志信息地址
  isShowRequestLoading: true, // 是否显示请求loading
  // 增加ame测试和预发布环境域名
  ameEnvApi: {
    test: 'ame-test.odp.qq.com',
    pre: 'ame-pre.odp.qq.com'
  },
  GET_AREA_URL: {
    default: 'https://gameact.qq.com/comm-htdocs/js/game_area/std/${gameId}_server_select.js',
    qq: 'https://gameact.qq.com/comm-htdocs/js/game_area/std/${gameId}_SQ_server_select.js',
    wx: 'https://gameact.qq.com/comm-htdocs/js/game_area/std/${gameId}_WX_server_select.js'
  },

  GET_ROLE_URL: {
    default: 'https://comm.aci.game.qq.com/main',
    cf: 'https://cf.aci.game.qq.com/main',
    lol: 'https://lol.aci.game.qq.com/main',
    yxzj: 'https://yxzj.aci.game.qq.com/main'
  }
};

module.exports = { Config: Config };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(9);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(30);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by susahuang on 2018/2/6.
 */
var _require = __webpack_require__(7),
    Config = _require.Config;

var _require2 = __webpack_require__(40),
    jsonTostring = _require2.jsonTostring,
    stringTojson = _require2.stringTojson;

var request = function request() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
  return function (url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var isNeedJSON = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return new _promise2.default(function (resolve, reject) {
      var cookie = '';

      var openid = Config.mini.getStorageSync('openid');
      var access_token = Config.mini.getStorageSync('ieg_ams_session_token');
      // add by susa 2021/12/7
      if (Config.mini.getStorageSync('acctype') === 'qc') {
        if (url.indexOf('aci') > -1) {
          cookie = 'openid=' + openid + '; acctype=qq; appid=' + Config.mini.getStorageSync('ieg_ams_appid') + '; access_token=' + access_token + ';';
        } else {
          cookie = 'openid=' + openid + '; acctype=qc; appid=' + Config.mini.getStorageSync('ieg_ams_appid') + '; access_token=' + access_token + ';';
        }
      } else {
        if (openid && access_token) {
          if (Config.isQQMini) {
            cookie = 'openid=' + openid + '; acctype=qqmini; appid=' + Config.appid + '; ieg_ams_session_token=' + access_token + '; ieg_ams_token=' + Config.mini.getStorageSync('ieg_ams_token') + '; ieg_ams_token_time=' + Config.mini.getStorageSync('ieg_ams_token_time');
          } else {
            cookie = 'openid=' + openid + '; acctype=mini; appid=' + Config.appid + '; ieg_ams_session_token=' + access_token + '; ieg_ams_token=' + Config.mini.getStorageSync('ieg_ams_token') + '; ieg_ams_token_time=' + Config.mini.getStorageSync('ieg_ams_token_time');
          }
        }
      }

      if (Config.isShowRequestLoading) {
        Config.mini.showLoading({
          title: '加载中',
          mask: true
        });
      }
      Config.mini.request({
        url: url,
        data: data,
        method: method,
        header: {
          'Content-Type': method == 'GET' ? 'application/json;' : 'application/x-www-form-urlencoded;',
          Cookie: cookie
        },
        success: function success(rsp) {
          // 关闭弹框

          if (Config.isShowRequestLoading) {
            setTimeout(function () {
              Config.mini.hideLoading();
            }, 500);
          }

          try {
            if (rsp.statusCode == 200) {
              // 兼容处理json和jsonp
              var result = void 0;
              if (!isNeedJSON) {
                resolve(rsp);
                return;
              }
              if ((0, _typeof3.default)(rsp.data) === 'object') {
                result = rsp.data;
              } else {
                var str = stringTojson(rsp.data);

                try {
                  result = JSON.parse(str);
                } catch (e) {
                  // 如果解析不成功，处理下无双引号的问题
                  result = JSON.parse(jsonTostring(str));
                }
              }

              if (result.result == 0 || result.ret == 0 || result.ret_code == 0) {
                if (result.data) {
                  resolve(result.data);
                } else {
                  resolve(result);
                }
              } else {
                if (!result.result && !result.ret) {
                  resolve(result);
                  return false;
                }
                reject(result);
              }
            } else {
              reject(rsp);
            }
          } catch (e) {
            reject(e);
          }
        },
        failure: function failure(err) {
          reject(err);
          // 关闭弹框
          if (Config.isShowRequestLoading) {
            setTimeout(function () {
              Config.mini.hideLoading();
            }, 500);
          }
        }
      });
    });
  };
};
var get = request('GET');
var post = request('POST');
var put = request('PUT');
var del = request('DELETE');

module.exports = { request: request, get: get, post: post, put: put, del: del };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var failCallback = function failCallback(e) {
    return {
        iRet: e.iRet ? e.iRet : e.code ? e.code : e.ret,
        sMsg: e.sMsg ? e.sMsg : e.errMsg ? e.errMsg : e.msg,
        details: e.flowRet
    };
};

function resetCallback(_data) {
    //删除多余ret
    if (_data.jData) {
        delete _data.jData.iRet;
        delete _data.jData.sMsg;
    }
    return {
        iRet: _data.iRet,
        sMsg: _data.jData && _data.jData.sMsg || _data.sMsg || "很抱歉，系统繁忙，请稍后重试！",
        sAmsSerial: _data.sAmsSerial,
        data: _data.jData || {}
    };
}

module.exports = { failCallback: failCallback, resetCallback: resetCallback };

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(20);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _iterator = __webpack_require__(60);

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof3 = __webpack_require__(4);

var _typeof4 = _interopRequireDefault(_typeof3);

var _symbol = __webpack_require__(61);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 标准化json字符串(无引号，或者单引号都转换为双引号)
 * @param str
 */
var jsonTostring = function jsonTostring(str) {
    return str.replace(/([\$\w]+)\s*:/g, function (_, $1) {
        return '"' + $1 + '":';
    }).replace(/'/g, '"');
};

/**
 * 把js字符串转换为json，去掉var 分号，注释
 * @param str
 * @returns {XML|string}
 */
var stringTojson = function stringTojson(str) {
    return str.replace(/[\s\n\r]*var[\s]+[a-zA-Z0-9_]+[\s]*=[\s]*/i, '').replace(/[\r\n]/g, "").replace(/[\;]$/, '').replace(/\/\*.*\*\/*/, '');
};

var unSerialize = function unSerialize(jsonStr, de) {
    de = de || 0;
    jsonStr = jsonStr.toString();
    if (!jsonStr) return {};
    var retObj = {},
        obj1Ret = jsonStr.split('&');
    if (obj1Ret.length == 0) return retObj;
    for (var i = 0; i < obj1Ret.length; i++) {
        if (!obj1Ret[i]) continue;
        var ret2 = obj1Ret[i].split('=');
        if (ret2.length >= 2) {
            var ret0 = obj1Ret[i].substr(0, obj1Ret[i].indexOf('=')),
                ret1 = obj1Ret[i].substr(obj1Ret[i].indexOf('=') + 1);
            if (!ret1) ret1 = '';

            if (ret1.indexOf("#") > -1) {
                ret1 = ret1.split("#")[0];
            }
            if (ret0) retObj[ret0] = de == 0 ? decodeURIComponent(ret1) : ret1;
        }
    }
    return retObj;
};

/**
 * 序列化JSON对象
 * 对object转化为url参数字符串，各属性间以&分隔，如a=1&b=2&c=3
 * 对象属性为string 则进行encodeURIComponent编码
 * 对象属性为bool 则以0代表false 1代表true
 * 对象属性为对象，则会继续进行递归序列化
 * 对象属性为function 则返回function.toString
 * @param {object} jsonObj json对象
 * @return {string}
 */

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
} : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
};

var serialize = function serialize(jsonObj) {
    var newJsonObj = null;
    if (typeof jsonObj == 'undefined' || typeof jsonObj == 'function') newJsonObj = '';
    if (typeof jsonObj == 'number') newJsonObj = jsonObj.toString();
    if (typeof jsonObj == 'boolean') newJsonObj = jsonObj ? '1' : '0';
    if ((typeof jsonObj === 'undefined' ? 'undefined' : _typeof(jsonObj)) == 'object') {
        if (!jsonObj) newJsonObj = '';
        if (jsonObj instanceof RegExp) newJsonObj = jsonObj.toString();
    }
    if (typeof jsonObj == 'string') newJsonObj = jsonObj;
    if (typeof newJsonObj == 'string') return encodeURIComponent(newJsonObj);

    var ret = [];
    if (jsonObj instanceof Array) {
        for (var i = 0; i < jsonObj.length; i++) {
            if (typeof jsonObj[i] == 'undefined') continue;
            ret.push(_typeof(jsonObj[i]) == 'object' ? '' : serialize(jsonObj[i]));
        }
        return ret.join('|');
    } else {
        for (var i in jsonObj) {
            if (typeof jsonObj[i] == 'undefined') continue;
            newJsonObj = null;
            if (_typeof(jsonObj[i]) == 'object') {
                if (jsonObj[i] instanceof Array) {
                    newJsonObj = jsonObj[i];
                    ret.push(i + '=' + serialize(newJsonObj));
                } else {
                    ret.push(i + '=');
                }
            } else {
                newJsonObj = jsonObj[i];
                ret.push(i + '=' + serialize(newJsonObj));
            }
        }
        return ret.join('&');
    }
};

module.exports = { serialize: serialize, unSerialize: unSerialize, stringTojson: stringTojson, jsonTostring: jsonTostring };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _comm = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(7),
    Config = _require.Config;

var _require2 = __webpack_require__(27),
    get = _require2.get,
    post = _require2.post;

var _require3 = __webpack_require__(40),
    serialize = _require3.serialize;

var _require4 = __webpack_require__(28),
    resetCallback = _require4.resetCallback;

var _require5 = __webpack_require__(42),
    login = _require5.login;

/**
 * 获取AMS配置文件
 * @param params
 * @returns {Promise<any>}
 */
var getActDesc = function getActDesc(activityId) {
  return new _promise2.default(function (resolve, reject) {
    activityId = activityId.toString();

    var iActIdLength = activityId.length;
    var folder = activityId.slice(iActIdLength - 3, iActIdLength);

    var _url = 'https://apps.game.qq.com/comm-htdocs/js/ams/actDesc/' + folder + '/' + activityId + '/act.desc.js';
    get(_url, {}, false).then(function (res) {
      var data = res.data;
      // 将配置文件转换成json

      data = data.replace(/\r\n/g, '');
      data = data.replace(/var\s+hm\s\=.*$/, '');
      var desc = data.match(new RegExp('ams_actdesc_' + activityId + '=(.*)((vars+ams_actdesc.*)|$)'))[1];
      desc = JSON.parse(desc);

      resolve(desc);
    }).catch(function (e) {
      reject(e);
    });
  });
};

/**
 * 获取IDE配置文件
 * @param params
 * @returns {Promise<any>}
 */
function getIDEActDesc(activityId) {
  return new _promise2.default(function (resolve, reject) {
    var _url = 'https://comm.ams.game.qq.com/ide/page/' + activityId;
    get(_url, {}, false).then(function (res) {
      var data = res.data;

      resolve({
        tokenList: data.tokens,
        flowList: data.flows,
        paasId: data.iPaaSId
      });
    }).catch(function (e) {
      reject(e);
    });
  });
}

/**
 * desc: 防刷token
 */
function ameCSRFToken() {
  var sAMEStr = 'a1b2c3';
  var hash = 5381;
  for (var i = 0, len = sAMEStr.length; i < len; ++i) {
    hash += (hash << 5) + sAMEStr.charAt(i).charCodeAt();
  }
  return hash & 2147483647;
}

/**
 * 请求AME
 */
function sendToAME(activityId, flowId, roleInfo, otherData) {
  var url = 'https://' + Config.AMEApi + '?' + serialize({
    ameVersion: '0.3',
    sServiceType: Config.sServiceType,
    iActivityId: activityId,
    sServiceDepartment: Config.sServiceDepartment,
    sSDID: Config.sSDID
  });

  var data = {
    iActivityId: activityId,
    iFlowId: flowId,
    g_tk: ameCSRFToken(),
    sServiceType: Config.sServiceType,
    e_code: 0,
    g_code: 0,
    eas_url: Config.sServiceType + '_' + Config.appid + '_mini',
    eas_refer: Config.sServiceType + '_' + Config.appid + '_mini',
    sServiceDepartment: Config.sServiceDepartment
  };
  // 流程中传servicetype，重新赋值
  if (otherData && otherData.sData && otherData.sData.serviceType) {
    data.sServiceType = otherData.sData.serviceType;
  }

  if (Config.isWXMini) {
    data.ams_targetappid = Config.targetWXAppid;
  }

  if (roleInfo && roleInfo.submitData && (0, _typeof3.default)(roleInfo.submitData) === 'object') {
    // 查询获奖记录参数
    if (typeof roleInfo.submitData.pageNow !== "undefined") data.pageNow = roleInfo.submitData.pageNow;
    if (typeof roleInfo.submitData.pageSize !== "undefined") data.pageSize = roleInfo.submitData.pageSize;

    // 提交角色信息
    if (roleInfo.submitData.checkparam && roleInfo.submitData.md5str) {
      if (typeof roleInfo.submitData.sArea !== "undefined") data.sArea = roleInfo.submitData.sArea;
      if (typeof roleInfo.submitData.sPartition !== "undefined") data.sPartition = roleInfo.submitData.sPartition;
      if (typeof roleInfo.submitData.sPlatId !== "undefined") data.sPlatId = roleInfo.submitData.sPlatId;
      if (typeof roleInfo.submitData.roleId !== "undefined") data.sRoleId = roleInfo.submitData.roleId;
      if (typeof roleInfo.submitData.md5str !== "undefined") data.md5str = roleInfo.submitData.md5str;
      if (typeof roleInfo.submitData.areaname !== "undefined") data.sAreaName = encodeURIComponent(roleInfo.submitData.areaname);
      if (typeof roleInfo.submitData.roleName !== "undefined") data.sRoleName = encodeURIComponent(roleInfo.submitData.roleName);
      if (typeof roleInfo.submitData.checkparam !== "undefined") data.ams_checkparam = encodeURIComponent(roleInfo.submitData.checkparam);
    } else {
      (0, _assign2.default)(data, roleInfo.submitData);
    }
  }

  // 传递额外参数到data中
  if (otherData && (typeof otherData === 'undefined' ? 'undefined' : (0, _typeof3.default)(otherData)) === 'object') {
    (0, _assign2.default)(data, otherData);
  }

  return new _promise2.default(function (resolve, reject) {
    var reTryIndex = 0;

    // 封装post方法，用于登陆态失效重新登录并重新请求ame，设置最多尝试3次，3次不成功即返回失败
    var innerPost = function innerPost() {
      post(url, data).then(function (res) {
        var data = res.data;

        if (!data) {
          data = res.modRet;
        }
        resolve(data);

        // 上报ATM——AME成功情况
        (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 55, tointer: 2, actid: activityId, flowid: flowId, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet || res.ret, serialnum: res.sLogSerialNum, cgi: url, errormsg: res.sMsg || res.msg });
      }).catch(function (res) {
        // 上报ATM——AME失败情况
        (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 55, tointer: 2, actid: activityId, flowid: flowId, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet || res.ret, serialnum: res.flowRet.sLogSerialNum, cgi: url, errormsg: res.sMsg || res.msg });

        // 登录态过期
        if (res.ret == '101') {
          // 重试次数大于2
          if (reTryIndex > 2) {
            reject(res);
            return false;
          }
          login().then(function () {
            // 重试ame
            innerPost();
          });
          reTryIndex++;
        } else {
          reject(res);
        }
      });
    };

    innerPost();
  });
};

/**
 * IDE提交接口
 * @param flow IDE管理端流程配置对象
 * @param options 用户传入参数
 * @returns {Promise<unknown>}
 */
function postIDEData(flow, options) {
  var data = {
    iChartId: options.chartId,
    iSubChartId: options.chartId,
    sIdeToken: options.flowToken
  };

  // 避免用户影响主逻辑一些信息
  if (options && options.sData) {
    delete options.sData.activityId;
    delete options.sData.flowToken;
    delete options.sData.sData;
    delete options.sData.openid;
    delete options.sData.ieg_ams_session_token;
    delete options.sData.ieg_ams_token;
    delete options.sData.ieg_ams_token_time;
    (0, _assign2.default)(data, options.sData);
  }

  return new _promise2.default(function (resolve, reject) {
    var url = 'https://comm.ams.game.qq.com/ide/';
    post(url, data).then(function (_data) {
      var result = resetCallback(_data);
      if (result.iRet == 0) {
        resolve(result);
      } else {
        reject(result);
      }
      // 上报ATM
      (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 55, tointer: 2, actid: data.iChartId, flowid: data.iSubChartId, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet, serialnum: res.sAmsSerial, cgi: url, errormsg: res.sMsg });
    }).catch(function (res) {
      var result = resetCallback(res);
      // 上报ATM
      (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 55, tointer: 2, actid: data.iChartId, flowid: data.iSubChartId, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet, serialnum: res.sAmsSerial, cgi: url, errormsg: res.sMsg });

      reject(result);
    });
  });
}

/**
 * 
 * @param {number} operate 
 * @param {string} gameId 
 */

function operatePIPL(operate, gameID) {
  var gameId = gameID || Config.gameId;

  var requestUrl = Config.GET_ROLE_URL[gameId] ? Config.GET_ROLE_URL[gameId] : Config.GET_ROLE_URL['default'];

  var operateCode = {
    "0": "cancel",
    "1": "query",
    "2": "auth"
  };

  return get(requestUrl, {
    sCloudApiName: "ams.gameattr.roleauth",
    url: Config.appid,
    operation: operateCode[operate],
    openid: Config.mini.getStorageSync('openid'),
    type: 1, // type: 1 JSON返回 默认JSONP
    returnCodec: 'utf8',
    game: gameId
  });
}

module.exports = { getActDesc: getActDesc, sendToAME: sendToAME, getIDEActDesc: getIDEActDesc, postIDEData: postIDEData, operatePIPL: operatePIPL };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _comm = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(27),
    get = _require.get,
    post = _require.post;

var _require2 = __webpack_require__(7),
    Config = _require2.Config;

var _require3 = __webpack_require__(105),
    promisify = _require3.promisify;

var _require4 = __webpack_require__(28),
    failCallback = _require4.failCallback;

var _require5 = __webpack_require__(63),
    easInit = _require5.init;

var innerLogin = promisify(Config.mini.login);
var login = function login() {
    return new _promise2.default(function (resolve, reject) {
        innerLogin().then(function (res) {
            return Config.isQQMini ? getQQUserOpenid(res.code) : getWXUserOpenid(res.code);
        }).then(function (res) {
            easInit({ "appid": Config.appid, "openid": res.openid });
            resolve(res);
        }).catch(function (e) {
            reject(failCallback(e));
        });
    });
};

/**
 * 获取qq登录态
 * @param code
 * @returns {Promise<unknown>}
 */
function getQQUserOpenid(code) {
    return new _promise2.default(function (resolve, reject) {
        // 获取openid 和 accesstoken
        get(Config.qqloginApi, {
            a: 'qqCodeToSession',
            appid: Config.appid,
            js_code: code
        }).then(function (res) {
            if (res.iRet === 0) {
                qq.setStorage({ key: 'openid', data: res.openid });
                qq.setStorage({ key: 'ieg_ams_session_token', data: res.ieg_ams_session_token });
                qq.setStorage({ key: 'ieg_ams_token', data: res.ieg_ams_token });
                qq.setStorage({ key: 'ieg_ams_token_time', data: res.ieg_ams_token_time });
                resolve({
                    openid: res.openid,
                    ieg_ams_session_token: res.ieg_ams_session_token,
                    ieg_ams_token: res.ieg_ams_token,
                    ieg_ams_token_time: res.ieg_ams_token_time
                });
            } else {
                reject(res);
            }
            // 上报登录成功ATM
            (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 32, tointer: 2, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet, serialnum: res.sLogSerialNum, cgi: Config.qqloginApi, errormsg: res.sMsg });
        }).catch(function (res) {
            // 上报登录失败ATM
            (0, _comm.reportToATM)({ toappid: 1, tomoduletype: 32, tointer: 2, toreturncode: res.iRet === 0 ? 0 : 1, businesstype: Config.gameId, result: res.iRet, serialnum: res.sLogSerialNum, cgi: Config.qqloginApi, errormsg: res.sMsg });

            reject(res);
        });
    });
}

/**
 * 获取微信登录态
 * @param code
 * @returns {Promise<unknown>}
 */
function getWXUserOpenid(code) {
    return new _promise2.default(function (resolve, reject) {
        // 获取openid 和 accesstoken
        get(Config.loginApi, {
            action: 'codeToSession',
            appid: Config.appid,
            wxcode: code
        }).then(function (res) {
            if (res.iRet === 0) {
                wx.setStorage({ key: 'openid', data: res.openid });
                wx.setStorage({ key: 'ieg_ams_session_token', data: res.ieg_ams_session_token });
                wx.setStorage({ key: 'ieg_ams_token', data: res.ieg_ams_token });
                wx.setStorage({ key: 'ieg_ams_token_time', data: res.ieg_ams_token_time });
                resolve({
                    openid: res.openid,
                    ieg_ams_session_token: res.ieg_ams_session_token,
                    ieg_ams_token: res.ieg_ams_token,
                    ieg_ams_token_time: res.ieg_ams_token_time
                });
            } else {
                reject(res);
            }
            // 上报登录成功ATM
            /*       reportToATM({
                             toappid: 1,
                             tomoduletype: 32,
                             tointer: 2,
                             toreturncode: res.iRet === 0 ? 0 : 1,
                             businesstype: store.data.gameId,
                             result: res.iRet,
                             serialnum: res.sLogSerialNum,
                             cgi: config.loginApi,
                             errormsg: res.sMsg
                         });*/
        }).catch(function (res) {
            // 上报登录失败ATM
            /*             reportToATM({
                                   toappid: 1,
                                   tomoduletype: 32,
                                   tointer: 2,
                                   toreturncode: res.iRet === 0 ? 0 : 1,
                                   businesstype: store.data.gameId,
                                   result: res.iRet,
                                   serialnum: res.sLogSerialNum,
                                   cgi: config.loginApi,
                                   errormsg: res.sMsg
                               });*/
            reject(res);
        });
    });
}

module.exports = { login: login };

/***/ }),
/* 43 */
/***/ (function(module, exports) {



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(69)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(74);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(71);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(72)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
var global = __webpack_require__(0);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(20);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(84);
var html = __webpack_require__(52);
var cel = __webpack_require__(31);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(36);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.reportToATM = reportToATM;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(27),
    get = _require.get,
    post = _require.post;

var _require2 = __webpack_require__(7),
    Config = _require2.Config;

/**
 * desc: 上报ATM
 * @param data
 */


function reportToATM(data) {
    var url = 'https://ams.game.qq.com/log?sCloudApiName=atm';
    var reportData = {
        fromappid: 38,
        frommoduletype: 2,
        toreturncode: 1,
        result: 1,
        tomoduletype: 55, // 55表示调用ame
        struserid: Config.mini.getStorageSync('openid'),
        serialtime: parseInt(new Date().getTime() / 1000)
    };

    if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
        (0, _assign2.default)(reportData, data);
    }

    get(url, reportData);
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(49);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 版本号
var version = "10007";
// 上报地址
var reportUrl = "https://logs.game.qq.com/easnew/go/eas.php";
// 全局数据
var global = {
  appid: "",
  openid: ""
};

// 初始化
function init(options) {
  if ((typeof options === "undefined" ? "undefined" : (0, _typeof3.default)(options)) != "object") {
    return;
  }
  if (typeof options["appid"] == "string") {
    global["appid"] = options["appid"];
  }
  if (typeof options["openid"] == "string") {
    global["openid"] = options["openid"];
  }
}

// 本地测试兼容
if ((typeof wx === "undefined" ? "undefined" : (0, _typeof3.default)(wx)) != "object") {
  wx = {
    request: function request(options) {
      console.log("[wx.request]", options);
    },
    getStorageSync: function getStorageSync(key) {
      console.log("[wx.getStorageSync]", key);
    },
    setStorageSync: function setStorageSync(key, value) {
      console.log("[wx.setStorageSync]", key, value);
    }
  };
}

if (typeof getCurrentPages != "function") {
  getCurrentPages = function getCurrentPages() {
    return [{ route: "pages/index/index" }];
  };
}

// 上报日志
function report(data, success, fail) {
  if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) != "object") {
    throw "eas report data should be object type";
  }
  data.Version = version;
  data.appid = global["appid"];
  data.openid = global["openid"];
  wx.request({
    url: reportUrl,
    data: data,
    header: { cookie: "eas_sid=" + getEasSid(), "eas-from": "miniprogram" },
    success: success,
    fail: fail
  });
}

// 获取 EAS 规范化 URL
function getEasUrl(url) {
  url = typeof url == "undefined" ? "" : url;
  if (url === "") {
    var pages = getCurrentPages();
    if (pages.length > 0) {
      url = pages[pages.length - 1].route;
    }
  }
  if (/^https?:\/\//i.test(url)) {
    return formatUrl(url);
  }
  var appid = global["appid"];
  if (appid.length == 0) {
    appid = "-";
  }
  return formatUrl("http://wechatmini.qq.com/" + appid + "/" + url);
}

// 格式化 URL
function formatUrl(url) {
  if (typeof url != "string") {
    return "";
  }
  url = url.toLowerCase();
  if (url.indexOf("?") != -1) {
    var _url = url.substr(0, url.indexOf("?"));
  } else {
    var _url = url;
  }

  _url = _url.replace("index.shtml", "").replace("index.html", "").replace("index.htm", "").replace("index.php", "");

  if (_url.indexOf("#") != -1) {
    _url = _url.substr(0, _url.indexOf("#"));
  }

  var arrUrl = _url.split("/");
  var LastStr = arrUrl[arrUrl.length - 1];
  if (LastStr != "" && LastStr != undefined && LastStr.indexOf(".shtml") == -1 && LastStr.indexOf(".html") == -1 && LastStr.indexOf(".htm") == -1 && LastStr.indexOf(".php") == -1) {
    _url = _url + "/";
  }
  _url = _url.replace(/\/+/gi, "/").replace(/^https?:\/+/i, "http://").replace(/^\//, "http://");
  return _url;
}

// 获取 EAS 用户唯一 ID
function getEasSid() {
  var sid = wx.getStorageSync("EAS_SID");
  if (typeof sid == "string" && sid.length == 26) {
    return sid;
  }
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var maxPos = chars.length;
  var pwd = "";
  var timer = new Date().getTime().toString();
  if (typeof timer != "string") {
    timer = Math.floor(Math.random() * (9999999999999 - 1000000000000) + 1000000000000).toString();
  }

  if (timer == undefined || timer == null) {
    var timerArr = Math.random().toString().split(".");
    timer = timerArr[1];
  }
  if (timer) {
    timer = timer.split("");
  }
  for (var i = 0; i < 13; i++) {
    var rank = Math.floor(Math.random() * maxPos);
    pwd += chars.charAt(rank) + timer[i];
  }
  wx.setStorageSync("EAS_SID", pwd);
  return pwd;
}

// 上报活动 ID 和 URL 绑定关系
function reportActidUrl(data, success, fail) {
  if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) != "object") {
    throw "eas report data should be object type";
  }
  if (Math.random() * 100 > 10) {
    return;
  }
  if (!data["actid"]) {
    return;
  }
  report({
    click_type: 6,
    Url: getEasUrl(data["url"]),
    e_code: typeof data["e_code"] == "undefined" ? "" : data["e_code"],
    amsActivityId: typeof data["actid"] == "undefined" ? "" : data["actid"],
    flowId: 0
  }, success, fail);
}

// 上报 PV
function reportPV(data, success, fail) {
  if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) != "object") {
    throw "eas report data should be object type";
  }
  report({
    click_type: 3,
    Url: getEasUrl(data["url"]),
    e_code: typeof data["e_code"] == "undefined" ? "" : data["e_code"],
    actid: typeof data["actid"] == "undefined" ? "" : data["actid"],
    acttype: typeof data["acttype"] == "undefined" ? "" : data["acttype"]
  }, success, fail);
  reportActidUrl(data);
}

// 上报 ADTAG
function reportADTAG(data, success, fail) {
  if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) != "object") {
    throw "eas report data should be object type";
  }
  report({
    click_type: 4,
    Url: getEasUrl(data["url"]),
    e_code: typeof data["e_code"] == "undefined" ? "" : data["e_code"],
    adtag: typeof data["adtag"] == "undefined" ? "" : data["adtag"],
    actid: typeof data["actid"] == "undefined" ? "" : data["actid"],
    acttype: typeof data["acttype"] == "undefined" ? "" : data["acttype"]
  }, success, fail);
}

module.exports = {
  version: version,
  init: init,
  getEasUrl: getEasUrl,
  getEasSid: getEasSid,
  report: report,
  reportPV: reportPV,
  reportADTAG: reportADTAG
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(7),
    Config = _require.Config;

/**
 * 获取轮播资源信息
 * @param moduleId
 * @returns {Promise<unknown>}
 */


var getBroadcast = function getBroadcast(moduleId) {
    return new _promise2.default(function (resolve, reject) {
        var _url = 'https://gameact.qq.com/ams/lottery/v2.0/' + moduleId % 100 + '/' + moduleId + '_broadcast.js';

        Config.mini.request({
            url: _url,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                var data = res.data;
                data = data.replace(/\r\n/g, "");
                data = JSON.parse(data.match(/^Broadcast_\d+\s=\s(.*)$/)[1]);

                resolve(data);
            },
            fail: function fail(e) {
                reject(e);
            }
        });
    });
};

module.exports = { getBroadcast: getBroadcast };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Milo = __webpack_require__(66);

module.exports = Milo;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var milo = global.milo || {};

var _require = __webpack_require__(42),
    login = _require.login;

var _require2 = __webpack_require__(106),
    init = _require2.init;

var _require3 = __webpack_require__(107),
    emit = _require3.emit;

var _require4 = __webpack_require__(114),
    getAreaInfo = _require4.getAreaInfo,
    getRoleInfo = _require4.getRoleInfo;

var _require5 = __webpack_require__(41),
    operatePIPL = _require5.operatePIPL;

var eas = __webpack_require__(63);

milo.init = init;
milo.checkLogin = login;
milo.login = login;
milo.emit = emit;
milo.appPlatform = wx && wx.getSystemInfoSync().AppPlatform == 'qq' ? 'qq' : 'wx';

milo.getAreaInfo = getAreaInfo;
milo.getRoleInfo = getRoleInfo;

milo.operatePIPL = operatePIPL;

milo.easVersion = eas.version;
milo.easInit = eas.init;
milo.easGetEasUrl = eas.getEasUrl;
milo.easGetEasSid = eas.getEasSid;
milo.easReport = eas.report;
milo.easReportPV = eas.reportPV;
milo.easReportADTAG = eas.reportADTAG;

module.exports = milo;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(53);
__webpack_require__(78);
__webpack_require__(90);
__webpack_require__(91);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(73);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(76);
var step = __webpack_require__(77);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var global = __webpack_require__(0);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(54);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(11);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(79);
var forOf = __webpack_require__(80);
var speciesConstructor = __webpack_require__(55);
var task = __webpack_require__(56).set;
var microtask = __webpack_require__(85)();
var newPromiseCapabilityModule = __webpack_require__(36);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(86);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(87)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(88)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(89)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(81);
var isArrayIter = __webpack_require__(82);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(51);
var getIterFn = __webpack_require__(83);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(54);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(56).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(55);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(36);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(94) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(6);
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(24);
var IObject = __webpack_require__(50);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(53);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
__webpack_require__(43);
__webpack_require__(103);
__webpack_require__(104);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(47);
var META = __webpack_require__(98).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(22);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(39);
var enumKeys = __webpack_require__(99);
var isArray = __webpack_require__(100);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(11);
var toObject = __webpack_require__(24);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(32);
var createDesc = __webpack_require__(21);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(101);
var $GOPD = __webpack_require__(102);
var $GOPS = __webpack_require__(37);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(62).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(21);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('asyncIterator');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39)('observable');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 将小程序callback转成 promise
 * @param func
 * @returns {function(): Promise<unknown>}
 */

var promisify = function promisify(func) {
    return function () {
        return new _promise2.default(function (resolve, reject) {
            func({
                success: function success(res) {
                    resolve(res);
                },
                fail: function fail(e) {
                    reject(e);
                }
            });
        });
    };
};

module.exports = { promisify: promisify };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(7),
    Config = _require.Config;

var init = function init(options) {
    return new _promise2.default(function (resolve, reject) {
        if (options && (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object') {
            // 指定显示区服信息
            Config.showArea = options.showArea ? options.showArea : 'default';

            if (options.miniappid) {
                Config.appid = options.miniappid;
                Config.gameId = options.gameId;

                if (options.env === 'test' || options.env === 'pre') {
                    Config.amsEnv = options.env;
                }
                // 是否显示请求loading
                Config.isShowRequestLoading = options.isShowRequestLoading;

                if (options.env === 'test' || options.env === 'pre') {
                    Config.amsEnv = options.env;
                }
                // 只有在微信下需要传target appid ame需要
                if (wx && wx.getSystemInfoSync().AppPlatform !== 'qq') {
                    Config.targetWXAppid = options.targetWXAppid;
                }

                resolve();
            } else {
                reject({
                    iRet: -9999,
                    sMsg: 'Failed to init function: miniappid is required'
                });
            }
        }
    });
};

module.exports = { init: init };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(108),
    getAMSInfo = _require.getAMSInfo;

var _require2 = __webpack_require__(113),
    getIDEInfo = _require2.getIDEInfo;

var emit = function emit(options) {
  // 如果带flowToken，走IDE流程
  if (options.flowToken) {
    return getIDEInfo(options);
  }
  return getAMSInfo(options);
};

module.exports = { emit: emit };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(109);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(7),
    Config = _require.Config;

var _require2 = __webpack_require__(41),
    getActDesc = _require2.getActDesc,
    sendToAME = _require2.sendToAME;

var _require3 = __webpack_require__(28),
    failCallback = _require3.failCallback;

var _require4 = __webpack_require__(64),
    getBroadcast = _require4.getBroadcast;

var getAMSInfo = function getAMSInfo(options) {

    return new _promise2.default(function (resolve, reject) {

        if (options.activityId && options.flowId) {
            var inner = function inner(amsCfg) {

                getActDesc(amsCfg.activityId).then(function (ams_actdesc) {
                    // 增加ame 测试、预发布域名环境
                    Config.AMEApi = Config.ameEnvApi[Config.amsEnv] ? Config.ameEnvApi[Config.amsEnv] : ams_actdesc.sAmeMobileUrl;
                    Config.sSDID = ams_actdesc.sSDID; //?
                    Config.sAccountType = ams_actdesc.sAccountType;

                    var flows = ams_actdesc.flows;
                    var flows_length = (0, _keys2.default)(flows).length;

                    if (flows_length < 1) return;

                    var flow = flows['f_' + amsCfg.flowId]; // flow活动号
                    Config.sServiceDepartment = ams_actdesc.sServiceDepartment; // ?
                    Config.sServiceType = flow.iNeedAreaRoleService == "" ? ams_actdesc.sServiceType : flow.iNeedAreaRoleService;

                    if (flow.functions[0]) {
                        var modName = flow.functions[0].method;

                        if (modName == "lottery2.broadcast") {
                            getBroadcast(flow.functions[0].sExtModuleId).then(function (res) {
                                resolve(res);
                            }).catch(function (e) {
                                if (e && e.ret && e.msg) {
                                    reject(failCallback(e));
                                } else {
                                    reject(e);
                                }
                            });
                        } else {
                            //判断有没有传sData参数，如果传了全部传递给ame接口
                            var otherData = {};
                            if ((0, _typeof3.default)(options.sData) == "object") {
                                otherData.submitData = {};
                                (0, _assign2.default)(otherData.submitData, options.sData);
                            }
                            sendToAME(amsCfg.activityId, amsCfg.flowId, otherData).then(function (res) {
                                resolve(res);
                            }).catch(function (e) {
                                if (e && e.ret && e.msg) {
                                    reject(failCallback(e));
                                } else {
                                    reject(e);
                                }
                            });
                        }
                    } else {
                        reject({ 'iRet': '-9999', 'sMsg': '未找到当前流程对应模块信息' });
                    }
                });
            };

            // 避免关键字段信息
            if ((0, _typeof3.default)(options.sData) == "object") {
                delete options.sData.sData;
                delete options.sData.openid;
                delete options.sData.activityId;
                delete options.sData.flowId;
                delete options.sData.ieg_ams_session_token;
                delete options.sData.ieg_ams_token;
                delete options.sData.ieg_ams_token_time;
            }

            return inner.call(this, options);
        } else {
            reject({
                'iRet': '-9999',
                'sMsg': '缺少活动ID或流程ID'
            });
        }
    });
};
module.exports = { getAMSInfo: getAMSInfo };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24);
var $keys = __webpack_require__(17);

__webpack_require__(112)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(2);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(41),
    getIDEActDesc = _require.getIDEActDesc,
    postIDEData = _require.postIDEData;

var _require2 = __webpack_require__(28),
    failCallback = _require2.failCallback;

var _require3 = __webpack_require__(64),
    getBroadcast = _require3.getBroadcast;

/**
 * 提交IDE请求
 * @param options
 * @returns {Promise<unknown>}
 */


var getIDEInfo = function getIDEInfo(options) {
    return new _promise2.default(function (resolve, reject) {

        getIDEActDesc(options.activityId).then(function (data) {
            options.chartId = data.tokenList[options.flowToken];
            var flow = data.flowList[options.chartId];

            // 轮播
            if (flow && flow.sTplType && flow.sTplType.indexOf('broad') > -1) {

                getBroadcast(flow.iModuleId).then(function (res) {
                    resolve(res);
                }).catch(function (e) {
                    if (e && e.ret && e.msg) {
                        reject(failCallback(e));
                    } else {
                        reject(e);
                    }
                });
            } else {
                return postIDEData(flow, options).then(function (res) {
                    resolve(res);
                }).catch(function (e) {
                    reject(e);
                });
            }
        });
    });
};

module.exports = { getIDEInfo: getIDEInfo };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(40),
    unSerialize = _require.unSerialize;

var _require2 = __webpack_require__(27),
    get = _require2.get;

var _require3 = __webpack_require__(7),
    Config = _require3.Config;

var getRoleResult = function getRoleResult(query_role_result) {
    var resultObj = {
        isOk: false,
        msg: '未获取到角色信息',
        data: [],
        retCode: query_role_result.retCode,
        checkparam: query_role_result.checkparam,
        md5str: query_role_result.md5str
    };
    var map = unSerialize(query_role_result.data, 1);
    if (map['_webplat_msg_code']) {
        if (map['_webplat_msg_code'] * 1 == 1) {
            resultObj.msg = '在该服务器上未获取到角色信息！';
            return resultObj;
        }
        if (map['_webplat_msg_code'] * 1 != 0) {
            resultObj.msg = '查询人数过多，请您稍后再来';
            return resultObj;
        }
    }
    var _arrRole = map['msg'] || map['_webplat_msg'];
    if (!_arrRole) {
        return resultObj;
    }

    _arrRole = _arrRole.split('|');
    if (_arrRole.length == 1) {
        return resultObj;
    } else {
        var _arrRoleList = [];
        for (var i = 1; i < _arrRole.length; i++) {
            if (_arrRole[i]) {
                var _oneArray = _arrRole[i].split(" ");
                var _tempobj = {
                    'roleId': decodeURIComponent(_oneArray[0])
                };
                if (_oneArray.length >= 1) {
                    try {
                        _tempobj.roleName = decodeURIComponent(_oneArray[1]);
                    } catch (e) {
                        _tempobj.roleName = _oneArray[1];
                    }
                }
                if (_oneArray.length >= 2) {
                    _tempobj.roleSex = decodeURIComponent(_oneArray[2]);
                    _tempobj.roleJob = decodeURIComponent(_oneArray[2]);
                }
                if (_oneArray.length >= 3) {
                    _tempobj.roleLevel = decodeURIComponent(_oneArray[3]);
                }

                _arrRoleList.push(_tempobj);
            }
        }
        resultObj.msg = "OK";
        resultObj.data = _arrRoleList;
        resultObj.isOk = true;
        return resultObj;
    }
};

/**
 * desc: 获取角色信息
 */
var getRoleInfo = function getRoleInfo(areaInfo) {
    var requestUrl = Config.GET_ROLE_URL[areaInfo.gameId || Config.gameId] ? Config.GET_ROLE_URL[areaInfo.gameId || Config.gameId] : Config.GET_ROLE_URL['default'];
    var requestData = {
        game: areaInfo.gameId || Config.gameId,
        format: 'json',
        sCloudApiName: 'ams.gameattr.role',
        openid: Config.mini.getStorageSync('openid')
    };
    if (areaInfo.sServiceDepartment) {
        requestData.sServiceDepartment = areaInfo.sServiceDepartment;
    }

    // 如需gopenid，开发调用该接口需传指定的值
    if (Config.sAccountType === "5" || Config.sAccountType === "6") {
        requestData.needGopenid = 1;
    } else if (Config.sAccountType === "7") {
        requestData.isPreengate = 1;
        requestData.needGopenid = 1;
    }

    if ((typeof areaInfo === 'undefined' ? 'undefined' : (0, _typeof3.default)(areaInfo)) == 'object') {
        (0, _assign2.default)(requestData, areaInfo);
    }

    // add by susa 增加微信小程序透传qq登陆图爱
    requestData.sAMSAcctype = Config.mini.getStorageSync('acctype') == 'qc' ? 'qq' : Config.isQQMini ? 'qqmini' : 'mini';

    //查询角色
    if (Config.mini.getStorageSync('acctype') === 'qc') {
        requestData.uin = Config.mini.getStorageSync('openid');
        requestData.sAMSSourceAppId = Config.mini.getStorageSync('ieg_ams_appid');
        requestData.sAMSTargetAppId = Config.mini.getStorageSync('ieg_ams_appid');
        requestData.sAMSAppOpenId = Config.mini.getStorageSync('openid');
        requestData.sAMSAccessToken = Config.mini.getStorageSync('ieg_ams_session_token');
    } else {
        requestData.sAMSTargetAppId = areaInfo.targetWXAppid || Config.targetWXAppid;
    }

    return new _promise2.default(function (resolve, reject) {

        get(requestUrl, requestData).then(function (data) {
            //retCode === -9092  retCode === -1001 登录态失效

            var result = getRoleResult(data);
            if (result.isOk) {
                var arr = result.data;
                for (var i = 0; i < arr.length; i++) {
                    arr[i]['checkparam'] = result.checkparam;
                    arr[i]['md5str'] = result.md5str;
                }
                resolve(arr);
            } else {
                resolve([]);
            }
        }).catch(function (res) {
            //没有查询到角色
            resolve([]);
        });
    });
};

/**
 * 
 * @param {string} gameID 
 * @returns 
 */
function getAreaApi(gameID) {
    var gameId = gameID || Config.gameId;

    //用于区分平台大区信息
    var url = Config.GET_AREA_URL[Config.showArea].replace(/\$\{gameId\}/g, gameId);

    return get(url);
}

function formatAreaData(data) {
    var areaFields = [];

    //渠道
    if (data.STD_CHANNEL_DATA && data.STD_CHANNEL_DATA.length) {
        areaFields.push({
            fieldName: "渠道", //字段名
            fieldKey: "area",
            requestKey: "area" //请求的时候带上的字段名，空就不带
        });
    }
    //系统
    if (data.STD_SYSTEM_DATA && data.STD_SYSTEM_DATA.length) {
        areaFields.push({
            fieldName: "系统", //字段名
            fieldKey: "platid",
            requestKey: "platid" //请求的时候带上的字段名，空就不带
        });
    }
    //大区
    if (data.STD_DATA && data.STD_DATA.length) {
        //如果只有大区，没有渠道/系统，则requestKey='area'
        if (!areaFields.length) {
            areaFields.push({
                fieldName: "大区",
                fieldKey: "partition",
                requestKey: "area"
            });
        } else {
            areaFields.push({
                fieldName: "大区",
                fieldKey: "partition",
                requestKey: "partition"
            });
        }

        //二级大区就是服务器
        if (data.STD_DATA[0].opt_data_array && data.STD_DATA[0].opt_data_array.length) {
            //一级大区requestKey置空
            areaFields[areaFields.length - 1].requestKey = "";
            areaFields.push({
                fieldName: "服务器",
                fieldKey: "server",
                requestKey: "area"
            });
        }
    }

    var formatedAreaData = {};
    formatDataFunc(0, formatedAreaData, areaFields, data, { channel: "", system: "", partition: "" });
    return formatedAreaData;
}

//组织格式化数据
var formatDataFunc = function formatDataFunc(index, data, areaFields, oriAreaData, _ref) {
    var channel = _ref.channel,
        system = _ref.system,
        partition = _ref.partition;

    if (index >= areaFields.length) {
        return;
    }
    var config = areaFields[index];
    data.fieldKey = config.fieldKey;
    data.fieldName = config.fieldName;
    data.requestKey = config.requestKey;
    //渠道
    if (config.fieldKey == "area") {
        data.data = [{
            v: "empty",
            t: "请选择渠道"
        }];
        for (var i = 0; i < oriAreaData.STD_CHANNEL_DATA.length; i++) {
            data.data[i + 1] = {
                t: oriAreaData.STD_CHANNEL_DATA[i].t,
                v: oriAreaData.STD_CHANNEL_DATA[i].v,
                subData: {}
            };
            formatDataFunc(index + 1, data.data[i + 1].subData, areaFields, oriAreaData, {
                channel: oriAreaData.STD_CHANNEL_DATA[i].v,
                system: system,
                partition: partition
            });
        }
    } else if (config.fieldKey == "platid") {
        //平台
        data.data = [{
            v: "empty",
            t: "请选择平台"
        }];
        for (var _i = 0; _i < oriAreaData.STD_SYSTEM_DATA.length; _i++) {
            data.data[_i + 1] = {
                t: oriAreaData.STD_SYSTEM_DATA[_i].t,
                v: oriAreaData.STD_SYSTEM_DATA[_i].v,
                subData: {}
            };
            formatDataFunc(index + 1, data.data[_i + 1].subData, areaFields, oriAreaData, {
                channel: channel,
                system: oriAreaData.STD_SYSTEM_DATA[_i].v,
                partition: partition
            });
        }
    } else if (config.fieldKey == "partition") {
        //大区
        data.data = [];
        var selectedData = filterData({ channel: channel, system: system, partition: partition, oriAreaData: oriAreaData });
        if (selectedData && selectedData.length) {
            data.data = selectedData;
            for (var _i2 = 1; _i2 < data.data.length; _i2++) {
                data.data[_i2].subData = {};
                formatDataFunc(index + 1, data.data[_i2].subData, areaFields, oriAreaData, {
                    channel: channel,
                    system: system,
                    partition: data.data[_i2].v
                });
            }
        }
    } else if (config.fieldKey == "server") {
        //服务器
        data.data = [];
        var _selectedData = filterData({ channel: channel, system: system, partition: partition, oriAreaData: oriAreaData });
        if (_selectedData && _selectedData.length) {
            data.data = _selectedData;
        }
    } else {
        return;
    }
};

//根据channel,system,partition综合选择大区/服务器
function filterData(_ref2) {
    var channel = _ref2.channel,
        system = _ref2.system,
        partition = _ref2.partition,
        oriAreaData = _ref2.oriAreaData;

    var rtData = [];
    if (partition) {
        //有大区，找到指定大区
        var selected = [];
        for (var i = 0; i < oriAreaData.STD_DATA.length; i++) {
            if (partition == oriAreaData.STD_DATA[i].v) {
                selected = oriAreaData.STD_DATA[i].opt_data_array;
                break;
            }
        }
        //找到大区了，找服务器
        if (selected.length) {
            for (var _i3 = 0; _i3 < selected.length; _i3++) {
                if (channel && selected[_i3].c && channel != selected[_i3].c) {
                    continue;
                }
                if (system && selected[_i3].s && system != selected[_i3].s) {
                    continue;
                }
                rtData.push({
                    v: selected[_i3].v,
                    t: selected[_i3].t
                });
            }
        }
        if (rtData.length) {
            rtData.unshift({
                v: "empty",
                t: "请选择服务器"
            });
        }
    } else {
        //找大区
        var _selected = oriAreaData.STD_DATA;
        for (var _i4 = 0; _i4 < _selected.length; _i4++) {
            if (channel && _selected[_i4].c && channel != _selected[_i4].c) {
                continue;
            }
            if (system && _selected[_i4].s && system != _selected[_i4].s) {
                continue;
            }
            rtData.push({
                v: _selected[_i4].v,
                t: _selected[_i4].t
            });
        }
        if (rtData.length) {
            rtData.unshift({
                v: "empty",
                t: "请选择大区"
            });
        }
    }
    return rtData;
};

/**
 * 获取区服信息
 * @param {string} gameId
 * @returns {Promise<unknown>}
 */
var getAreaInfo = function getAreaInfo(gameId) {
    return new _promise2.default(function (resolve, reject) {
        getAreaApi(gameId).then(function (data) {
            var resultData = formatAreaData(data);
            resolve(resultData);
        });
    });
};

module.exports = { getAreaInfo: getAreaInfo, getRoleInfo: getRoleInfo };

/***/ })
/******/ ]);
});