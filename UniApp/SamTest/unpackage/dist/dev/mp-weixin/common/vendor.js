(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/SamTest/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!***************************************************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/SamTest/node_modules/solarlunar/lib/solarlunar.min.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (b, f) { true ? module.exports = f() : undefined;}(this, function () {return function (b) {function f(c) {if (e[c]) return e[c].exports;var t = e[c] = { i: c, l: !1, exports: {} };return b[c].call(t.exports, t, t.exports, f), t.l = !0, t.exports;}var e = {};return f.m = b, f.c = e, f.d = function (b, e, c) {f.o(b, e) || Object.defineProperty(b, e, { configurable: !1, enumerable: !0, get: c });}, f.n = function (b) {var e = b && b.__esModule ? function () {return b.default;} : function () {return b;};return f.d(e, "a", e), e;}, f.o = function (b, f) {return Object.prototype.hasOwnProperty.call(b, f);}, f.p = "", f(f.s = 0);}([function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 });var c = e(1),t = function (b) {return b && b.__esModule ? b : { default: b };}(c);f.default = t.default, b.exports = f.default;}, function (b, f, e) {"use strict";function c(b) {return b && b.__esModule ? b : { default: b };}Object.defineProperty(f, "__esModule", { value: !0 });var t = e(2),a = c(t),r = e(3),n = c(r),d = e(4),u = c(d),s = e(5),o = c(s),l = e(6),i = c(l),p = e(7),y = c(p),h = e(8),v = c(h),g = e(9),D = c(g),M = e(10),_ = c(M),m = e(11),x = c(m),T = e(12),j = c(T),I = { lunarInfo: a.default, solarMonth: n.default, gan: u.default, zhi: o.default, animals: i.default, lunarTerm: y.default, lTermInfo: v.default, nStr1: D.default, nStr2: _.default, nStr3: x.default, nStr4: j.default, lYearDays: function lYearDays(b) {var f,e = 348;for (f = 32768; f > 8; f >>= 1) {e += I.lunarInfo[b - 1900] & f ? 1 : 0;}return e + I.leapDays(b);}, leapMonth: function leapMonth(b) {return 15 & I.lunarInfo[b - 1900];}, leapDays: function leapDays(b) {return I.leapMonth(b) ? 65536 & I.lunarInfo[b - 1900] ? 30 : 29 : 0;}, monthDays: function monthDays(b, f) {return f > 12 || f < 1 ? -1 : I.lunarInfo[b - 1900] & 65536 >> f ? 30 : 29;}, solarDays: function solarDays(b, f) {if (f > 12 || f < 1) return -1;var e = f - 1;return 1 == e ? b % 4 == 0 && b % 100 != 0 || b % 400 == 0 ? 29 : 28 : I.solarMonth[e];}, toGanZhi: function toGanZhi(b) {return I.gan[b % 10] + I.zhi[b % 12];}, getTerm: function getTerm(b, f) {if (b < 1900 || b > 2100) return -1;if (f < 1 || f > 24) return -1;var e = I.lTermInfo[b - 1900],c = [parseInt("0x" + e.substr(0, 5)).toString(), parseInt("0x" + e.substr(5, 5)).toString(), parseInt("0x" + e.substr(10, 5)).toString(), parseInt("0x" + e.substr(15, 5)).toString(), parseInt("0x" + e.substr(20, 5)).toString(), parseInt("0x" + e.substr(25, 5)).toString()],t = [c[0].substr(0, 1), c[0].substr(1, 2), c[0].substr(3, 1), c[0].substr(4, 2), c[1].substr(0, 1), c[1].substr(1, 2), c[1].substr(3, 1), c[1].substr(4, 2), c[2].substr(0, 1), c[2].substr(1, 2), c[2].substr(3, 1), c[2].substr(4, 2), c[3].substr(0, 1), c[3].substr(1, 2), c[3].substr(3, 1), c[3].substr(4, 2), c[4].substr(0, 1), c[4].substr(1, 2), c[4].substr(3, 1), c[4].substr(4, 2), c[5].substr(0, 1), c[5].substr(1, 2), c[5].substr(3, 1), c[5].substr(4, 2)];return parseInt(t[f - 1]);}, toChinaYear: function toChinaYear(b) {var f = parseInt(b / 1e3),e = parseInt(b % 1e3 / 100),c = parseInt(b % 100 / 10),t = b % 10;return I.nStr4[f] + I.nStr4[e] + I.nStr4[c] + I.nStr4[t] + "年";}, toChinaMonth: function toChinaMonth(b) {if (b > 12 || b < 1) return -1;var f = I.nStr3[b - 1];return f += "月";}, toChinaDay: function toChinaDay(b) {var f;switch (b) {case 10:f = "初十";break;case 20:f = "二十";break;case 30:f = "三十";break;default:f = I.nStr2[Math.floor(b / 10)], f += I.nStr1[b % 10];}return f;}, getAnimal: function getAnimal(b) {return I.animals[(b - 4) % 12];}, solar2lunar: function solar2lunar(b, f, e) {if (b < 1900 || b > 2100) return -1;if (1900 == b && 1 == f && e < 31) return -1;if (b) var c = new Date(b, parseInt(f) - 1, e);else var c = new Date();var t,a = 0,r = 0,b = c.getFullYear(),f = c.getMonth() + 1,e = c.getDate(),n = (Date.UTC(c.getFullYear(), c.getMonth(), c.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;for (t = 1900; t < 2101 && n > 0; t++) {r = I.lYearDays(t), n -= r;}n < 0 && (n += r, t--);var d = new Date(),u = !1;d.getFullYear() == b && d.getMonth() + 1 == f && d.getDate() == e && (u = !0);var s = c.getDay(),o = I.nStr1[s];0 == s && (s = 7);var l = t,a = I.leapMonth(t),i = !1;for (t = 1; t < 13 && n > 0; t++) {a > 0 && t == a + 1 && 0 == i ? (--t, i = !0, r = I.leapDays(l)) : r = I.monthDays(l, t), 1 == i && t == a + 1 && (i = !1), n -= r;}0 == n && a > 0 && t == a + 1 && (i ? i = !1 : (i = !0, --t)), n < 0 && (n += r, --t);var p = t,y = n + 1,h = f - 1,v = I.getTerm(b, 3),g = I.toGanZhi(b - 4),D = new Date(b, 1, v).getTime();new Date(b, h, e).getTime() < D && (g = I.toGanZhi(b - 5));var M = I.getTerm(b, 2 * f - 1),_ = I.getTerm(b, 2 * f),m = I.toGanZhi(12 * (b - 1900) + f + 11);e >= M && (m = I.toGanZhi(12 * (b - 1900) + f + 12));var x = !1,T = "";M == e && (x = !0, T = I.lunarTerm[2 * f - 2]), _ == e && (x = !0, T = I.lunarTerm[2 * f - 1]);var j = Date.UTC(b, h, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,S = I.toGanZhi(j + e - 1);return { lYear: l, lMonth: p, lDay: y, animal: I.getAnimal(l), yearCn: I.toChinaYear(l), monthCn: (i && a === p ? "闰" : "") + I.toChinaMonth(p), dayCn: I.toChinaDay(y), cYear: b, cMonth: f, cDay: e, gzYear: g, gzMonth: m, gzDay: S, isToday: u, isLeap: i, nWeek: s, ncWeek: "星期" + o, isTerm: x, term: T };}, lunar2solar: function lunar2solar(b, f, e, c) {var t = I.leapMonth(b);I.leapDays(b);if (c && t != f) return -1;if (2100 == b && 12 == f && e > 1 || 1900 == b && 1 == f && e < 31) return -1;var a = I.monthDays(b, f);if (b < 1900 || b > 2100 || e > a) return -1;for (var r = 0, n = 1900; n < b; n++) {r += I.lYearDays(n);}for (var d = 0, u = !1, n = 1; n < f; n++) {d = I.leapMonth(b), u || d <= n && d > 0 && (r += I.leapDays(b), u = !0), r += I.monthDays(b, n);}c && (r += a);var s = Date.UTC(1900, 1, 30, 0, 0, 0),o = new Date(864e5 * (r + e - 31) + s),l = o.getUTCFullYear(),i = o.getUTCMonth() + 1,p = o.getUTCDate();return I.solar2lunar(l, i, p);} };f.default = I, b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 42192, 53584, 62034, 54560], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["初", "十", "廿", "卅"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"], b.exports = f.default;}, function (b, f, e) {"use strict";Object.defineProperty(f, "__esModule", { value: !0 }), f.default = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"], b.exports = f.default;}]);});

/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/SamTest/node_modules/leancloud-storage/dist/av.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function webpackUniversalModuleDefinition(root,factory){
if(true)
module.exports=factory();else
{}
})(typeof self!=='undefined'?self:this,function(){
return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};
/******/
/******/ // The require function
/******/function __webpack_require__(moduleId){
/******/
/******/ // Check if module is in cache
/******/if(installedModules[moduleId]){
/******/return installedModules[moduleId].exports;
/******/}
/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={
/******/i:moduleId,
/******/l:false,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
/******/
/******/ // Flag the module as loaded
/******/module.l=true;
/******/
/******/ // Return the exports of the module
/******/return module.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;
/******/
/******/ // expose the module cache
/******/__webpack_require__.c=installedModules;
/******/
/******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){
/******/if(!__webpack_require__.o(exports,name)){
/******/Object.defineProperty(exports,name,{
/******/configurable:false,
/******/enumerable:true,
/******/get:getter
/******/});
/******/}
/******/};
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){
/******/var getter=module&&module.__esModule?
/******/function getDefault(){return module['default'];}:
/******/function getModuleExports(){return module;};
/******/__webpack_require__.d(getter,'a',getter);
/******/return getter;
/******/};
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};
/******/
/******/ // __webpack_public_path__
/******/__webpack_require__.p="";
/******/
/******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=81);
/******/}(
/************************************************************************/
/******/[
/* 0 */
/***/function(module,exports,__webpack_require__){

/* WEBPACK VAR INJECTION */(function(global,module){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function(){

// Baseline setup
// --------------

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root=typeof self=='object'&&self.self===self&&self||
typeof global=='object'&&global.global===global&&global||
this||
{};

// Save the previous value of the `_` variable.
var previousUnderscore=root._;

// Save bytes in the minified (but not gzipped) version:
var ArrayProto=Array.prototype,ObjProto=Object.prototype;
var SymbolProto=typeof Symbol!=='undefined'?Symbol.prototype:null;

// Create quick reference variables for speed access to core prototypes.
var push=ArrayProto.push,
slice=ArrayProto.slice,
toString=ObjProto.toString,
hasOwnProperty=ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray=Array.isArray,
nativeKeys=Object.keys,
nativeCreate=Object.create;

// Naked function reference for surrogate-prototype-swapping.
var Ctor=function Ctor(){};

// Create a safe reference to the Underscore object for use below.
var _=function _(obj){
if(obj instanceof _)return obj;
if(!(this instanceof _))return new _(obj);
this._wrapped=obj;
};

// Export the Underscore object for **Node.js**, with
// backwards-compatibility for their old module API. If we're in
// the browser, add `_` as a global object.
// (`nodeType` is checked to ensure that `module`
// and `exports` are not HTML elements.)
if(typeof exports!='undefined'&&!exports.nodeType){
if(typeof module!='undefined'&&!module.nodeType&&module.exports){
exports=module.exports=_;
}
exports._=_;
}else{
root._=_;
}

// Current version.
_.VERSION='1.9.1';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb=function optimizeCb(func,context,argCount){
if(context===void 0)return func;
switch(argCount==null?3:argCount){
case 1:return function(value){
return func.call(context,value);
};
// The 2-argument case is omitted because we’re not using it.
case 3:return function(value,index,collection){
return func.call(context,value,index,collection);
};
case 4:return function(accumulator,value,index,collection){
return func.call(context,accumulator,value,index,collection);
};}

return function(){
return func.apply(context,arguments);
};
};

var builtinIteratee;

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
var cb=function cb(value,context,argCount){
if(_.iteratee!==builtinIteratee)return _.iteratee(value,context);
if(value==null)return _.identity;
if(_.isFunction(value))return optimizeCb(value,context,argCount);
if(_.isObject(value)&&!_.isArray(value))return _.matcher(value);
return _.property(value);
};

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee=builtinIteratee=function builtinIteratee(value,context){
return cb(value,context,Infinity);
};

// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
var restArguments=function restArguments(func,startIndex){
startIndex=startIndex==null?func.length-1:+startIndex;
return function(){
var length=Math.max(arguments.length-startIndex,0),
rest=Array(length),
index=0;
for(;index<length;index++){
rest[index]=arguments[index+startIndex];
}
switch(startIndex){
case 0:return func.call(this,rest);
case 1:return func.call(this,arguments[0],rest);
case 2:return func.call(this,arguments[0],arguments[1],rest);}

var args=Array(startIndex+1);
for(index=0;index<startIndex;index++){
args[index]=arguments[index];
}
args[startIndex]=rest;
return func.apply(this,args);
};
};

// An internal function for creating a new object that inherits from another.
var baseCreate=function baseCreate(prototype){
if(!_.isObject(prototype))return{};
if(nativeCreate)return nativeCreate(prototype);
Ctor.prototype=prototype;
var result=new Ctor();
Ctor.prototype=null;
return result;
};

var shallowProperty=function shallowProperty(key){
return function(obj){
return obj==null?void 0:obj[key];
};
};

var has=function has(obj,path){
return obj!=null&&hasOwnProperty.call(obj,path);
};

var deepGet=function deepGet(obj,path){
var length=path.length;
for(var i=0;i<length;i++){
if(obj==null)return void 0;
obj=obj[path[i]];
}
return length?obj:void 0;
};

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX=Math.pow(2,53)-1;
var getLength=shallowProperty('length');
var isArrayLike=function isArrayLike(collection){
var length=getLength(collection);
return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;
};

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each=_.forEach=function(obj,iteratee,context){
iteratee=optimizeCb(iteratee,context);
var i,length;
if(isArrayLike(obj)){
for(i=0,length=obj.length;i<length;i++){
iteratee(obj[i],i,obj);
}
}else{
var keys=_.keys(obj);
for(i=0,length=keys.length;i<length;i++){
iteratee(obj[keys[i]],keys[i],obj);
}
}
return obj;
};

// Return the results of applying the iteratee to each element.
_.map=_.collect=function(obj,iteratee,context){
iteratee=cb(iteratee,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length,
results=Array(length);
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
results[index]=iteratee(obj[currentKey],currentKey,obj);
}
return results;
};

// Create a reducing function iterating left or right.
var createReduce=function createReduce(dir){
// Wrap code that reassigns argument variables in a separate function than
// the one that accesses `arguments.length` to avoid a perf hit. (#1991)
var reducer=function reducer(obj,iteratee,memo,initial){
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length,
index=dir>0?0:length-1;
if(!initial){
memo=obj[keys?keys[index]:index];
index+=dir;
}
for(;index>=0&&index<length;index+=dir){
var currentKey=keys?keys[index]:index;
memo=iteratee(memo,obj[currentKey],currentKey,obj);
}
return memo;
};

return function(obj,iteratee,memo,context){
var initial=arguments.length>=3;
return reducer(obj,optimizeCb(iteratee,context,4),memo,initial);
};
};

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce=_.foldl=_.inject=createReduce(1);

// The right-associative version of reduce, also known as `foldr`.
_.reduceRight=_.foldr=createReduce(-1);

// Return the first value which passes a truth test. Aliased as `detect`.
_.find=_.detect=function(obj,predicate,context){
var keyFinder=isArrayLike(obj)?_.findIndex:_.findKey;
var key=keyFinder(obj,predicate,context);
if(key!==void 0&&key!==-1)return obj[key];
};

// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter=_.select=function(obj,predicate,context){
var results=[];
predicate=cb(predicate,context);
_.each(obj,function(value,index,list){
if(predicate(value,index,list))results.push(value);
});
return results;
};

// Return all the elements for which a truth test fails.
_.reject=function(obj,predicate,context){
return _.filter(obj,_.negate(cb(predicate)),context);
};

// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every=_.all=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length;
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
if(!predicate(obj[currentKey],currentKey,obj))return false;
}
return true;
};

// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some=_.any=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=!isArrayLike(obj)&&_.keys(obj),
length=(keys||obj).length;
for(var index=0;index<length;index++){
var currentKey=keys?keys[index]:index;
if(predicate(obj[currentKey],currentKey,obj))return true;
}
return false;
};

// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){
if(!isArrayLike(obj))obj=_.values(obj);
if(typeof fromIndex!='number'||guard)fromIndex=0;
return _.indexOf(obj,item,fromIndex)>=0;
};

// Invoke a method (with arguments) on every item in a collection.
_.invoke=restArguments(function(obj,path,args){
var contextPath,func;
if(_.isFunction(path)){
func=path;
}else if(_.isArray(path)){
contextPath=path.slice(0,-1);
path=path[path.length-1];
}
return _.map(obj,function(context){
var method=func;
if(!method){
if(contextPath&&contextPath.length){
context=deepGet(context,contextPath);
}
if(context==null)return void 0;
method=context[path];
}
return method==null?method:method.apply(context,args);
});
});

// Convenience version of a common use case of `map`: fetching a property.
_.pluck=function(obj,key){
return _.map(obj,_.property(key));
};

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where=function(obj,attrs){
return _.filter(obj,_.matcher(attrs));
};

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere=function(obj,attrs){
return _.find(obj,_.matcher(attrs));
};

// Return the maximum element (or element-based computation).
_.max=function(obj,iteratee,context){
var result=-Infinity,lastComputed=-Infinity,
value,computed;
if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){
obj=isArrayLike(obj)?obj:_.values(obj);
for(var i=0,length=obj.length;i<length;i++){
value=obj[i];
if(value!=null&&value>result){
result=value;
}
}
}else{
iteratee=cb(iteratee,context);
_.each(obj,function(v,index,list){
computed=iteratee(v,index,list);
if(computed>lastComputed||computed===-Infinity&&result===-Infinity){
result=v;
lastComputed=computed;
}
});
}
return result;
};

// Return the minimum element (or element-based computation).
_.min=function(obj,iteratee,context){
var result=Infinity,lastComputed=Infinity,
value,computed;
if(iteratee==null||typeof iteratee=='number'&&typeof obj[0]!='object'&&obj!=null){
obj=isArrayLike(obj)?obj:_.values(obj);
for(var i=0,length=obj.length;i<length;i++){
value=obj[i];
if(value!=null&&value<result){
result=value;
}
}
}else{
iteratee=cb(iteratee,context);
_.each(obj,function(v,index,list){
computed=iteratee(v,index,list);
if(computed<lastComputed||computed===Infinity&&result===Infinity){
result=v;
lastComputed=computed;
}
});
}
return result;
};

// Shuffle a collection.
_.shuffle=function(obj){
return _.sample(obj,Infinity);
};

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample=function(obj,n,guard){
if(n==null||guard){
if(!isArrayLike(obj))obj=_.values(obj);
return obj[_.random(obj.length-1)];
}
var sample=isArrayLike(obj)?_.clone(obj):_.values(obj);
var length=getLength(sample);
n=Math.max(Math.min(n,length),0);
var last=length-1;
for(var index=0;index<n;index++){
var rand=_.random(index,last);
var temp=sample[index];
sample[index]=sample[rand];
sample[rand]=temp;
}
return sample.slice(0,n);
};

// Sort the object's values by a criterion produced by an iteratee.
_.sortBy=function(obj,iteratee,context){
var index=0;
iteratee=cb(iteratee,context);
return _.pluck(_.map(obj,function(value,key,list){
return{
value:value,
index:index++,
criteria:iteratee(value,key,list)};

}).sort(function(left,right){
var a=left.criteria;
var b=right.criteria;
if(a!==b){
if(a>b||a===void 0)return 1;
if(a<b||b===void 0)return-1;
}
return left.index-right.index;
}),'value');
};

// An internal function used for aggregate "group by" operations.
var group=function group(behavior,partition){
return function(obj,iteratee,context){
var result=partition?[[],[]]:{};
iteratee=cb(iteratee,context);
_.each(obj,function(value,index){
var key=iteratee(value,index,obj);
behavior(result,value,key);
});
return result;
};
};

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy=group(function(result,value,key){
if(has(result,key))result[key].push(value);else result[key]=[value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy=group(function(result,value,key){
result[key]=value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy=group(function(result,value,key){
if(has(result,key))result[key]++;else result[key]=1;
});

var reStrSymbol=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
// Safely create a real, live array from anything iterable.
_.toArray=function(obj){
if(!obj)return[];
if(_.isArray(obj))return slice.call(obj);
if(_.isString(obj)){
// Keep surrogate pair characters together
return obj.match(reStrSymbol);
}
if(isArrayLike(obj))return _.map(obj,_.identity);
return _.values(obj);
};

// Return the number of elements in an object.
_.size=function(obj){
if(obj==null)return 0;
return isArrayLike(obj)?obj.length:_.keys(obj).length;
};

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition=group(function(result,value,pass){
result[pass?0:1].push(value);
},true);

// Array Functions
// ---------------

// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first=_.head=_.take=function(array,n,guard){
if(array==null||array.length<1)return n==null?void 0:[];
if(n==null||guard)return array[0];
return _.initial(array,array.length-n);
};

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial=function(array,n,guard){
return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));
};

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last=function(array,n,guard){
if(array==null||array.length<1)return n==null?void 0:[];
if(n==null||guard)return array[array.length-1];
return _.rest(array,Math.max(0,array.length-n));
};

// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest=_.tail=_.drop=function(array,n,guard){
return slice.call(array,n==null||guard?1:n);
};

// Trim out all falsy values from an array.
_.compact=function(array){
return _.filter(array,Boolean);
};

// Internal implementation of a recursive `flatten` function.
var flatten=function flatten(input,shallow,strict,output){
output=output||[];
var idx=output.length;
for(var i=0,length=getLength(input);i<length;i++){
var value=input[i];
if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){
// Flatten current level of array or arguments object.
if(shallow){
var j=0,len=value.length;
while(j<len){output[idx++]=value[j++];}
}else{
flatten(value,shallow,strict,output);
idx=output.length;
}
}else if(!strict){
output[idx++]=value;
}
}
return output;
};

// Flatten out an array, either recursively (by default), or just one level.
_.flatten=function(array,shallow){
return flatten(array,shallow,false);
};

// Return a version of the array that does not contain the specified value(s).
_.without=restArguments(function(array,otherArrays){
return _.difference(array,otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
// Aliased as `unique`.
_.uniq=_.unique=function(array,isSorted,iteratee,context){
if(!_.isBoolean(isSorted)){
context=iteratee;
iteratee=isSorted;
isSorted=false;
}
if(iteratee!=null)iteratee=cb(iteratee,context);
var result=[];
var seen=[];
for(var i=0,length=getLength(array);i<length;i++){
var value=array[i],
computed=iteratee?iteratee(value,i,array):value;
if(isSorted&&!iteratee){
if(!i||seen!==computed)result.push(value);
seen=computed;
}else if(iteratee){
if(!_.contains(seen,computed)){
seen.push(computed);
result.push(value);
}
}else if(!_.contains(result,value)){
result.push(value);
}
}
return result;
};

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union=restArguments(function(arrays){
return _.uniq(flatten(arrays,true,true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection=function(array){
var result=[];
var argsLength=arguments.length;
for(var i=0,length=getLength(array);i<length;i++){
var item=array[i];
if(_.contains(result,item))continue;
var j;
for(j=1;j<argsLength;j++){
if(!_.contains(arguments[j],item))break;
}
if(j===argsLength)result.push(item);
}
return result;
};

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference=restArguments(function(array,rest){
rest=flatten(rest,true,true);
return _.filter(array,function(value){
return!_.contains(rest,value);
});
});

// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
_.unzip=function(array){
var length=array&&_.max(array,getLength).length||0;
var result=Array(length);

for(var index=0;index<length;index++){
result[index]=_.pluck(array,index);
}
return result;
};

// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip=restArguments(_.unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of _.pairs.
_.object=function(list,values){
var result={};
for(var i=0,length=getLength(list);i<length;i++){
if(values){
result[list[i]]=values[i];
}else{
result[list[i][0]]=list[i][1];
}
}
return result;
};

// Generator function to create the findIndex and findLastIndex functions.
var createPredicateIndexFinder=function createPredicateIndexFinder(dir){
return function(array,predicate,context){
predicate=cb(predicate,context);
var length=getLength(array);
var index=dir>0?0:length-1;
for(;index>=0&&index<length;index+=dir){
if(predicate(array[index],index,array))return index;
}
return-1;
};
};

// Returns the first index on an array-like that passes a predicate test.
_.findIndex=createPredicateIndexFinder(1);
_.findLastIndex=createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex=function(array,obj,iteratee,context){
iteratee=cb(iteratee,context,1);
var value=iteratee(obj);
var low=0,high=getLength(array);
while(low<high){
var mid=Math.floor((low+high)/2);
if(iteratee(array[mid])<value)low=mid+1;else high=mid;
}
return low;
};

// Generator function to create the indexOf and lastIndexOf functions.
var createIndexFinder=function createIndexFinder(dir,predicateFind,sortedIndex){
return function(array,item,idx){
var i=0,length=getLength(array);
if(typeof idx=='number'){
if(dir>0){
i=idx>=0?idx:Math.max(idx+length,i);
}else{
length=idx>=0?Math.min(idx+1,length):idx+length+1;
}
}else if(sortedIndex&&idx&&length){
idx=sortedIndex(array,item);
return array[idx]===item?idx:-1;
}
if(item!==item){
idx=predicateFind(slice.call(array,i,length),_.isNaN);
return idx>=0?idx+i:-1;
}
for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){
if(array[idx]===item)return idx;
}
return-1;
};
};

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);
_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range=function(start,stop,step){
if(stop==null){
stop=start||0;
start=0;
}
if(!step){
step=stop<start?-1:1;
}

var length=Math.max(Math.ceil((stop-start)/step),0);
var range=Array(length);

for(var idx=0;idx<length;idx++,start+=step){
range[idx]=start;
}

return range;
};

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
_.chunk=function(array,count){
if(count==null||count<1)return[];
var result=[];
var i=0,length=array.length;
while(i<length){
result.push(slice.call(array,i,i+=count));
}
return result;
};

// Function (ahem) Functions
// ------------------

// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
var executeBound=function executeBound(sourceFunc,boundFunc,context,callingContext,args){
if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);
var self=baseCreate(sourceFunc.prototype);
var result=sourceFunc.apply(self,args);
if(_.isObject(result))return result;
return self;
};

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind=restArguments(function(func,context,args){
if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');
var bound=restArguments(function(callArgs){
return executeBound(func,bound,context,this,args.concat(callArgs));
});
return bound;
});

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
_.partial=restArguments(function(func,boundArgs){
var placeholder=_.partial.placeholder;
var bound=function bound(){
var position=0,length=boundArgs.length;
var args=Array(length);
for(var i=0;i<length;i++){
args[i]=boundArgs[i]===placeholder?arguments[position++]:boundArgs[i];
}
while(position<arguments.length){args.push(arguments[position++]);}
return executeBound(func,bound,this,this,args);
};
return bound;
});

_.partial.placeholder=_;

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll=restArguments(function(obj,keys){
keys=flatten(keys,false,false);
var index=keys.length;
if(index<1)throw new Error('bindAll must be passed function names');
while(index--){
var key=keys[index];
obj[key]=_.bind(obj[key],obj);
}
});

// Memoize an expensive function by storing its results.
_.memoize=function(func,hasher){
var memoize=function memoize(key){
var cache=memoize.cache;
var address=''+(hasher?hasher.apply(this,arguments):key);
if(!has(cache,address))cache[address]=func.apply(this,arguments);
return cache[address];
};
memoize.cache={};
return memoize;
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay=restArguments(function(func,wait,args){
return setTimeout(function(){
return func.apply(null,args);
},wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer=_.partial(_.delay,_,1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle=function(func,wait,options){
var timeout,context,args,result;
var previous=0;
if(!options)options={};

var later=function later(){
previous=options.leading===false?0:_.now();
timeout=null;
result=func.apply(context,args);
if(!timeout)context=args=null;
};

var throttled=function throttled(){
var now=_.now();
if(!previous&&options.leading===false)previous=now;
var remaining=wait-(now-previous);
context=this;
args=arguments;
if(remaining<=0||remaining>wait){
if(timeout){
clearTimeout(timeout);
timeout=null;
}
previous=now;
result=func.apply(context,args);
if(!timeout)context=args=null;
}else if(!timeout&&options.trailing!==false){
timeout=setTimeout(later,remaining);
}
return result;
};

throttled.cancel=function(){
clearTimeout(timeout);
previous=0;
timeout=context=args=null;
};

return throttled;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce=function(func,wait,immediate){
var timeout,result;

var later=function later(context,args){
timeout=null;
if(args)result=func.apply(context,args);
};

var debounced=restArguments(function(args){
if(timeout)clearTimeout(timeout);
if(immediate){
var callNow=!timeout;
timeout=setTimeout(later,wait);
if(callNow)result=func.apply(this,args);
}else{
timeout=_.delay(later,wait,this,args);
}

return result;
});

debounced.cancel=function(){
clearTimeout(timeout);
timeout=null;
};

return debounced;
};

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap=function(func,wrapper){
return _.partial(wrapper,func);
};

// Returns a negated version of the passed-in predicate.
_.negate=function(predicate){
return function(){
return!predicate.apply(this,arguments);
};
};

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose=function(){
var args=arguments;
var start=args.length-1;
return function(){
var i=start;
var result=args[start].apply(this,arguments);
while(i--){result=args[i].call(this,result);}
return result;
};
};

// Returns a function that will only be executed on and after the Nth call.
_.after=function(times,func){
return function(){
if(--times<1){
return func.apply(this,arguments);
}
};
};

// Returns a function that will only be executed up to (but not including) the Nth call.
_.before=function(times,func){
var memo;
return function(){
if(--times>0){
memo=func.apply(this,arguments);
}
if(times<=1)func=null;
return memo;
};
};

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once=_.partial(_.before,2);

_.restArguments=restArguments;

// Object Functions
// ----------------

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');
var nonEnumerableProps=['valueOf','isPrototypeOf','toString',
'propertyIsEnumerable','hasOwnProperty','toLocaleString'];

var collectNonEnumProps=function collectNonEnumProps(obj,keys){
var nonEnumIdx=nonEnumerableProps.length;
var constructor=obj.constructor;
var proto=_.isFunction(constructor)&&constructor.prototype||ObjProto;

// Constructor is a special case.
var prop='constructor';
if(has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);

while(nonEnumIdx--){
prop=nonEnumerableProps[nonEnumIdx];
if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){
keys.push(prop);
}
}
};

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
_.keys=function(obj){
if(!_.isObject(obj))return[];
if(nativeKeys)return nativeKeys(obj);
var keys=[];
for(var key in obj){if(has(obj,key))keys.push(key);}
// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);
return keys;
};

// Retrieve all the property names of an object.
_.allKeys=function(obj){
if(!_.isObject(obj))return[];
var keys=[];
for(var key in obj){keys.push(key);}
// Ahem, IE < 9.
if(hasEnumBug)collectNonEnumProps(obj,keys);
return keys;
};

// Retrieve the values of an object's properties.
_.values=function(obj){
var keys=_.keys(obj);
var length=keys.length;
var values=Array(length);
for(var i=0;i<length;i++){
values[i]=obj[keys[i]];
}
return values;
};

// Returns the results of applying the iteratee to each element of the object.
// In contrast to _.map it returns an object.
_.mapObject=function(obj,iteratee,context){
iteratee=cb(iteratee,context);
var keys=_.keys(obj),
length=keys.length,
results={};
for(var index=0;index<length;index++){
var currentKey=keys[index];
results[currentKey]=iteratee(obj[currentKey],currentKey,obj);
}
return results;
};

// Convert an object into a list of `[key, value]` pairs.
// The opposite of _.object.
_.pairs=function(obj){
var keys=_.keys(obj);
var length=keys.length;
var pairs=Array(length);
for(var i=0;i<length;i++){
pairs[i]=[keys[i],obj[keys[i]]];
}
return pairs;
};

// Invert the keys and values of an object. The values must be serializable.
_.invert=function(obj){
var result={};
var keys=_.keys(obj);
for(var i=0,length=keys.length;i<length;i++){
result[obj[keys[i]]]=keys[i];
}
return result;
};

// Return a sorted list of the function names available on the object.
// Aliased as `methods`.
_.functions=_.methods=function(obj){
var names=[];
for(var key in obj){
if(_.isFunction(obj[key]))names.push(key);
}
return names.sort();
};

// An internal function for creating assigner functions.
var createAssigner=function createAssigner(keysFunc,defaults){
return function(obj){
var length=arguments.length;
if(defaults)obj=Object(obj);
if(length<2||obj==null)return obj;
for(var index=1;index<length;index++){
var source=arguments[index],
keys=keysFunc(source),
l=keys.length;
for(var i=0;i<l;i++){
var key=keys[i];
if(!defaults||obj[key]===void 0)obj[key]=source[key];
}
}
return obj;
};
};

// Extend a given object with all the properties in passed-in object(s).
_.extend=createAssigner(_.allKeys);

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn=_.assign=createAssigner(_.keys);

// Returns the first key on an object that passes a predicate test.
_.findKey=function(obj,predicate,context){
predicate=cb(predicate,context);
var keys=_.keys(obj),key;
for(var i=0,length=keys.length;i<length;i++){
key=keys[i];
if(predicate(obj[key],key,obj))return key;
}
};

// Internal pick helper function to determine if `obj` has key `key`.
var keyInObj=function keyInObj(value,key,obj){
return key in obj;
};

// Return a copy of the object only containing the whitelisted properties.
_.pick=restArguments(function(obj,keys){
var result={},iteratee=keys[0];
if(obj==null)return result;
if(_.isFunction(iteratee)){
if(keys.length>1)iteratee=optimizeCb(iteratee,keys[1]);
keys=_.allKeys(obj);
}else{
iteratee=keyInObj;
keys=flatten(keys,false,false);
obj=Object(obj);
}
for(var i=0,length=keys.length;i<length;i++){
var key=keys[i];
var value=obj[key];
if(iteratee(value,key,obj))result[key]=value;
}
return result;
});

// Return a copy of the object without the blacklisted properties.
_.omit=restArguments(function(obj,keys){
var iteratee=keys[0],context;
if(_.isFunction(iteratee)){
iteratee=_.negate(iteratee);
if(keys.length>1)context=keys[1];
}else{
keys=_.map(flatten(keys,false,false),String);
iteratee=function iteratee(value,key){
return!_.contains(keys,key);
};
}
return _.pick(obj,iteratee,context);
});

// Fill in a given object with default properties.
_.defaults=createAssigner(_.allKeys,true);

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create=function(prototype,props){
var result=baseCreate(prototype);
if(props)_.extendOwn(result,props);
return result;
};

// Create a (shallow-cloned) duplicate of an object.
_.clone=function(obj){
if(!_.isObject(obj))return obj;
return _.isArray(obj)?obj.slice():_.extend({},obj);
};

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap=function(obj,interceptor){
interceptor(obj);
return obj;
};

// Returns whether an object has a given set of `key:value` pairs.
_.isMatch=function(object,attrs){
var keys=_.keys(attrs),length=keys.length;
if(object==null)return!length;
var obj=Object(object);
for(var i=0;i<length;i++){
var key=keys[i];
if(attrs[key]!==obj[key]||!(key in obj))return false;
}
return true;
};


// Internal recursive comparison function for `isEqual`.
var eq,deepEq;
eq=function eq(a,b,aStack,bStack){
// Identical objects are equal. `0 === -0`, but they aren't identical.
// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
if(a===b)return a!==0||1/a===1/b;
// `null` or `undefined` only equal to itself (strict comparison).
if(a==null||b==null)return false;
// `NaN`s are equivalent, but non-reflexive.
if(a!==a)return b!==b;
// Exhaust primitive checks
var type=typeof a;
if(type!=='function'&&type!=='object'&&typeof b!='object')return false;
return deepEq(a,b,aStack,bStack);
};

// Internal recursive comparison function for `isEqual`.
deepEq=function deepEq(a,b,aStack,bStack){
// Unwrap any wrapped objects.
if(a instanceof _)a=a._wrapped;
if(b instanceof _)b=b._wrapped;
// Compare `[[Class]]` names.
var className=toString.call(a);
if(className!==toString.call(b))return false;
switch(className){
// Strings, numbers, regular expressions, dates, and booleans are compared by value.
case'[object RegExp]':
// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
case'[object String]':
// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
// equivalent to `new String("5")`.
return''+a===''+b;
case'[object Number]':
// `NaN`s are equivalent, but non-reflexive.
// Object(NaN) is equivalent to NaN.
if(+a!==+a)return+b!==+b;
// An `egal` comparison is performed for other numeric values.
return+a===0?1/+a===1/b:+a===+b;
case'[object Date]':
case'[object Boolean]':
// Coerce dates and booleans to numeric primitive values. Dates are compared by their
// millisecond representations. Note that invalid dates with millisecond representations
// of `NaN` are not equivalent.
return+a===+b;
case'[object Symbol]':
return SymbolProto.valueOf.call(a)===SymbolProto.valueOf.call(b);}


var areArrays=className==='[object Array]';
if(!areArrays){
if(typeof a!='object'||typeof b!='object')return false;

// Objects with different constructors are not equivalent, but `Object`s or `Array`s
// from different frames are.
var aCtor=a.constructor,bCtor=b.constructor;
if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&
_.isFunction(bCtor)&&bCtor instanceof bCtor)&&
'constructor'in a&&'constructor'in b){
return false;
}
}
// Assume equality for cyclic structures. The algorithm for detecting cyclic
// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

// Initializing stack of traversed objects.
// It's done here since we only need them for objects and arrays comparison.
aStack=aStack||[];
bStack=bStack||[];
var length=aStack.length;
while(length--){
// Linear search. Performance is inversely proportional to the number of
// unique nested structures.
if(aStack[length]===a)return bStack[length]===b;
}

// Add the first object to the stack of traversed objects.
aStack.push(a);
bStack.push(b);

// Recursively compare objects and arrays.
if(areArrays){
// Compare array lengths to determine if a deep comparison is necessary.
length=a.length;
if(length!==b.length)return false;
// Deep compare the contents, ignoring non-numeric properties.
while(length--){
if(!eq(a[length],b[length],aStack,bStack))return false;
}
}else{
// Deep compare objects.
var keys=_.keys(a),key;
length=keys.length;
// Ensure that both objects contain the same number of properties before comparing deep equality.
if(_.keys(b).length!==length)return false;
while(length--){
// Deep compare each member
key=keys[length];
if(!(has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;
}
}
// Remove the first object from the stack of traversed objects.
aStack.pop();
bStack.pop();
return true;
};

// Perform a deep comparison to check if two objects are equal.
_.isEqual=function(a,b){
return eq(a,b);
};

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty=function(obj){
if(obj==null)return true;
if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;
return _.keys(obj).length===0;
};

// Is a given value a DOM element?
_.isElement=function(obj){
return!!(obj&&obj.nodeType===1);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray=nativeIsArray||function(obj){
return toString.call(obj)==='[object Array]';
};

// Is a given variable an object?
_.isObject=function(obj){
var type=typeof obj;
return type==='function'||type==='object'&&!!obj;
};

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
_.each(['Arguments','Function','String','Number','Date','RegExp','Error','Symbol','Map','WeakMap','Set','WeakSet'],function(name){
_['is'+name]=function(obj){
return toString.call(obj)==='[object '+name+']';
};
});

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if(!_.isArguments(arguments)){
_.isArguments=function(obj){
return has(obj,'callee');
};
}

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist=root.document&&root.document.childNodes;
if( true&&typeof Int8Array!='object'&&typeof nodelist!='function'){
_.isFunction=function(obj){
return typeof obj=='function'||false;
};
}

// Is a given object a finite number?
_.isFinite=function(obj){
return!_.isSymbol(obj)&&isFinite(obj)&&!isNaN(parseFloat(obj));
};

// Is the given value `NaN`?
_.isNaN=function(obj){
return _.isNumber(obj)&&isNaN(obj);
};

// Is a given value a boolean?
_.isBoolean=function(obj){
return obj===true||obj===false||toString.call(obj)==='[object Boolean]';
};

// Is a given value equal to null?
_.isNull=function(obj){
return obj===null;
};

// Is a given variable undefined?
_.isUndefined=function(obj){
return obj===void 0;
};

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has=function(obj,path){
if(!_.isArray(path)){
return has(obj,path);
}
var length=path.length;
for(var i=0;i<length;i++){
var key=path[i];
if(obj==null||!hasOwnProperty.call(obj,key)){
return false;
}
obj=obj[key];
}
return!!length;
};

// Utility Functions
// -----------------

// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
// previous owner. Returns a reference to the Underscore object.
_.noConflict=function(){
root._=previousUnderscore;
return this;
};

// Keep the identity function around for default iteratees.
_.identity=function(value){
return value;
};

// Predicate-generating functions. Often useful outside of Underscore.
_.constant=function(value){
return function(){
return value;
};
};

_.noop=function(){};

// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indexes.
_.property=function(path){
if(!_.isArray(path)){
return shallowProperty(path);
}
return function(obj){
return deepGet(obj,path);
};
};

// Generates a function for a given object that returns a given property.
_.propertyOf=function(obj){
if(obj==null){
return function(){};
}
return function(path){
return!_.isArray(path)?obj[path]:deepGet(obj,path);
};
};

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher=_.matches=function(attrs){
attrs=_.extendOwn({},attrs);
return function(obj){
return _.isMatch(obj,attrs);
};
};

// Run a function **n** times.
_.times=function(n,iteratee,context){
var accum=Array(Math.max(0,n));
iteratee=optimizeCb(iteratee,context,1);
for(var i=0;i<n;i++){accum[i]=iteratee(i);}
return accum;
};

// Return a random integer between min and max (inclusive).
_.random=function(min,max){
if(max==null){
max=min;
min=0;
}
return min+Math.floor(Math.random()*(max-min+1));
};

// A (possibly faster) way to get the current timestamp as an integer.
_.now=Date.now||function(){
return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap={
'&':'&amp;',
'<':'&lt;',
'>':'&gt;',
'"':'&quot;',
"'":'&#x27;',
'`':'&#x60;'};

var unescapeMap=_.invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper=function createEscaper(map){
var escaper=function escaper(match){
return map[match];
};
// Regexes for identifying a key that needs to be escaped.
var source='(?:'+_.keys(map).join('|')+')';
var testRegexp=RegExp(source);
var replaceRegexp=RegExp(source,'g');
return function(string){
string=string==null?'':''+string;
return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;
};
};
_.escape=createEscaper(escapeMap);
_.unescape=createEscaper(unescapeMap);

// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
_.result=function(obj,path,fallback){
if(!_.isArray(path))path=[path];
var length=path.length;
if(!length){
return _.isFunction(fallback)?fallback.call(obj):fallback;
}
for(var i=0;i<length;i++){
var prop=obj==null?void 0:obj[path[i]];
if(prop===void 0){
prop=fallback;
i=length;// Ensure we don't continue iterating.
}
obj=_.isFunction(prop)?prop.call(obj):prop;
}
return obj;
};

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter=0;
_.uniqueId=function(prefix){
var id=++idCounter+'';
return prefix?prefix+id:id;
};

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings={
evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,
escape:/<%-([\s\S]+?)%>/g};


// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch=/(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes={
"'":"'",
'\\':'\\',
'\r':'r',
'\n':'n',
"\u2028":'u2028',
"\u2029":'u2029'};


var escapeRegExp=/\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar=function escapeChar(match){
return'\\'+escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template=function(text,settings,oldSettings){
if(!settings&&oldSettings)settings=oldSettings;
settings=_.defaults({},settings,_.templateSettings);

// Combine delimiters into one regular expression via alternation.
var matcher=RegExp([
(settings.escape||noMatch).source,
(settings.interpolate||noMatch).source,
(settings.evaluate||noMatch).source].
join('|')+'|$','g');

// Compile the template source, escaping string literals appropriately.
var index=0;
var source="__p+='";
text.replace(matcher,function(match,escape,interpolate,evaluate,offset){
source+=text.slice(index,offset).replace(escapeRegExp,escapeChar);
index=offset+match.length;

if(escape){
source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";
}else if(interpolate){
source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";
}else if(evaluate){
source+="';\n"+evaluate+"\n__p+='";
}

// Adobe VMs need the match returned to produce the correct offset.
return match;
});
source+="';\n";

// If a variable is not specified, place data values in local scope.
if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';

source="var __t,__p='',__j=Array.prototype.join,"+
"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';

var render;
try{
render=new Function(settings.variable||'obj','_',source);
}catch(e){
e.source=source;
throw e;
}

var template=function template(data){
return render.call(this,data,_);
};

// Provide the compiled source as a convenience for precompilation.
var argument=settings.variable||'obj';
template.source='function('+argument+'){\n'+source+'}';

return template;
};

// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain=function(obj){
var instance=_(obj);
instance._chain=true;
return instance;
};

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.

// Helper function to continue chaining intermediate results.
var chainResult=function chainResult(instance,obj){
return instance._chain?_(obj).chain():obj;
};

// Add your own custom functions to the Underscore object.
_.mixin=function(obj){
_.each(_.functions(obj),function(name){
var func=_[name]=obj[name];
_.prototype[name]=function(){
var args=[this._wrapped];
push.apply(args,arguments);
return chainResult(this,func.apply(_,args));
};
});
return _;
};

// Add all of the Underscore functions to the wrapper object.
_.mixin(_);

// Add all mutator Array functions to the wrapper.
_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){
var method=ArrayProto[name];
_.prototype[name]=function(){
var obj=this._wrapped;
method.apply(obj,arguments);
if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];
return chainResult(this,obj);
};
});

// Add all accessor Array functions to the wrapper.
_.each(['concat','join','slice'],function(name){
var method=ArrayProto[name];
_.prototype[name]=function(){
return chainResult(this,method.apply(this._wrapped,arguments));
};
});

// Extracts the result from a wrapped and chained object.
_.prototype.value=function(){
return this._wrapped;
};

// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;

_.prototype.toString=function(){
return String(this._wrapped);
};

// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if(true){
!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){
return _;
}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),
__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));
}
})();

/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(67),__webpack_require__(104)(module));

/***/},
/* 1 */
/***/function(module,exports){

var core=module.exports={version:'2.6.9'};
if(typeof __e=='number')__e=core;// eslint-disable-line no-undef


/***/},
/* 2 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(84),__esModule:true};

/***/},
/* 3 */
/***/function(module,exports){

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?
window:typeof self!='undefined'&&self.Math==Math?self
// eslint-disable-next-line no-new-func
:Function('return this')();
if(typeof __g=='number')__g=global;// eslint-disable-line no-undef


/***/},
/* 4 */
/***/function(module,exports,__webpack_require__){

var store=__webpack_require__(42)('wks');
var uid=__webpack_require__(31);
var Symbol=__webpack_require__(3).Symbol;
var USE_SYMBOL=typeof Symbol=='function';

var $exports=module.exports=function(name){
return store[name]||(store[name]=
USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)('Symbol.'+name));
};

$exports.store=store;


/***/},
/* 5 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var md5=__webpack_require__(138);

var _require=__webpack_require__(0),
extend=_require.extend;

var AV=__webpack_require__(18);

var _require2=__webpack_require__(6),
getSessionToken=_require2.getSessionToken;

var ajax=__webpack_require__(48);

// 计算 X-LC-Sign 的签名方法
var sign=function sign(key,isMasterKey){
var now=new Date().getTime();
var signature=md5(now+key);
if(isMasterKey){
return signature+','+now+',master';
}
return signature+','+now;
};

var setAppKey=function setAppKey(headers,signKey){
if(signKey){
headers['X-LC-Sign']=sign(AV.applicationKey);
}else{
headers['X-LC-Key']=AV.applicationKey;
}
};

var setHeaders=function setHeaders(){
var authOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var signKey=arguments[1];

var headers={
'X-LC-Id':AV.applicationId,
'Content-Type':'application/json;charset=UTF-8'};

var useMasterKey=false;
if(typeof authOptions.useMasterKey==='boolean'){
useMasterKey=authOptions.useMasterKey;
}else if(typeof AV._config.useMasterKey==='boolean'){
useMasterKey=AV._config.useMasterKey;
}
if(useMasterKey){
if(AV.masterKey){
if(signKey){
headers['X-LC-Sign']=sign(AV.masterKey,true);
}else{
headers['X-LC-Key']=AV.masterKey+',master';
}
}else{
console.warn('masterKey is not set, fall back to use appKey');
setAppKey(headers,signKey);
}
}else{
setAppKey(headers,signKey);
}
if(AV.hookKey){
headers['X-LC-Hook-Key']=AV.hookKey;
}
if(AV._config.production!==null){
headers['X-LC-Prod']=String(AV._config.production);
}
headers[false?undefined:'X-LC-UA']=AV._sharedConfig.userAgent;

return _promise2.default.resolve().then(function(){
// Pass the session token
var sessionToken=getSessionToken(authOptions);
if(sessionToken){
headers['X-LC-Session']=sessionToken;
}else if(!AV._config.disableCurrentUser){
return AV.User.currentAsync().then(function(currentUser){
if(currentUser&&currentUser._sessionToken){
headers['X-LC-Session']=currentUser._sessionToken;
}
return headers;
});
}
return headers;
});
};

var createApiUrl=function createApiUrl(_ref){
var _ref$service=_ref.service,
service=_ref$service===undefined?'api':_ref$service,
_ref$version=_ref.version,
version=_ref$version===undefined?'1.1':_ref$version,
path=_ref.path;

var apiURL=AV._config.serverURLs[service];

if(!apiURL)throw new Error('undefined server URL for '+service);

if(apiURL.charAt(apiURL.length-1)!=='/'){
apiURL+='/';
}
apiURL+=version;
if(path){
apiURL+=path;
}

return apiURL;
};

/**
 * Low level REST API client. Call REST endpoints with authorization headers.
 * @function AV.request
 * @since 3.0.0
 * @param {Object} options
 * @param {String} options.method HTTP method
 * @param {String} options.path endpoint path, e.g. `/classes/Test/55759577e4b029ae6015ac20`
 * @param {Object} [options.query] query string dict
 * @param {Object} [options.data] HTTP body
 * @param {AuthOptions} [options.authOptions]
 * @param {String} [options.service = 'api']
 * @param {String} [options.version = '1.1']
 */
var request=function request(_ref2){
var service=_ref2.service,
version=_ref2.version,
method=_ref2.method,
path=_ref2.path,
query=_ref2.query,
data=_ref2.data,
authOptions=_ref2.authOptions,
_ref2$signKey=_ref2.signKey,
signKey=_ref2$signKey===undefined?true:_ref2$signKey;

if(!(AV.applicationId&&(AV.applicationKey||AV.masterKey))){
throw new Error('Not initialized');
}
if(AV._appRouter){
AV._appRouter.refresh();
}
var timeout=AV._config.requestTimeout;

var url=createApiUrl({service:service,path:path,version:version});
return setHeaders(authOptions,signKey).then(function(headers){
return ajax({method:method,url:url,query:query,data:data,headers:headers,timeout:timeout}).catch(function(error){
var errorJSON={
code:error.code||-1,
error:error.message||error.responseText};

if(error.response&&error.response.code){
errorJSON=error.response;
}else if(error.responseText){
try{
errorJSON=JSON.parse(error.responseText);
}catch(e){
// If we fail to parse the error text, that's okay.
}
}
errorJSON.rawMessage=errorJSON.rawMessage||errorJSON.error;
if(!AV._sharedConfig.keepErrorRawMessage){
errorJSON.error+=' ['+(error.statusCode||'N/A')+' '+method+' '+url+']';
}
// Transform the error into an instance of AVError by trying to parse
// the error string as JSON.
var err=new Error(errorJSON.error);
delete errorJSON.error;
throw _.extend(err,errorJSON);
});
});
};

// lagecy request
var _request=function _request(route,className,objectId,method,data,authOptions,query){
var path='';
if(route)path+='/'+route;
if(className)path+='/'+className;
if(objectId)path+='/'+objectId;
// for migeration
if(data&&data._fetchWhenSave)throw new Error('_fetchWhenSave should be in the query');
if(data&&data._where)throw new Error('_where should be in the query');
if(method&&method.toLowerCase()==='get'){
query=extend({},query,data);
data=null;
}
return request({
method:method,
path:path,
query:query,
data:data,
authOptions:authOptions});

};

AV.request=request;

module.exports={
_request:_request,
request:request};


/***/},
/* 6 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

var _getPrototypeOf=__webpack_require__(112);

var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

// Helper function to check null or undefined.
var isNullOrUndefined=function isNullOrUndefined(x){
return _.isNull(x)||_.isUndefined(x);
};

var ensureArray=function ensureArray(target){
if(_.isArray(target)){
return target;
}
if(target===undefined||target===null){
return[];
}
return[target];
};

var transformFetchOptions=function transformFetchOptions(){
var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
keys=_ref.keys,
include=_ref.include,
includeACL=_ref.includeACL;

var fetchOptions={};
if(keys){
fetchOptions.keys=ensureArray(keys).join(',');
}
if(include){
fetchOptions.include=ensureArray(include).join(',');
}
if(includeACL){
fetchOptions.returnACL=includeACL;
}
return fetchOptions;
};

var getSessionToken=function getSessionToken(authOptions){
if(authOptions.sessionToken){
return authOptions.sessionToken;
}
if(authOptions.user&&typeof authOptions.user.getSessionToken==='function'){
return authOptions.user.getSessionToken();
}
};

var tap=function tap(interceptor){
return function(value){
return interceptor(value),value;
};
};

// Shared empty constructor function to aid in prototype-chain creation.
var EmptyConstructor=function EmptyConstructor(){};

// Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
var inherits=function inherits(parent,protoProps,staticProps){
var child;

// The constructor function for the new subclass is either defined by you
// (the "constructor" property in your `extend` definition), or defaulted
// by us to simply call the parent's constructor.
if(protoProps&&protoProps.hasOwnProperty('constructor')){
child=protoProps.constructor;
}else{
/** @ignore */
child=function child(){
parent.apply(this,arguments);
};
}

// Inherit class (static) properties from parent.
_.extend(child,parent);

// Set the prototype chain to inherit from `parent`, without calling
// `parent`'s constructor function.
EmptyConstructor.prototype=parent.prototype;
child.prototype=new EmptyConstructor();

// Add prototype properties (instance properties) to the subclass,
// if supplied.
if(protoProps){
_.extend(child.prototype,protoProps);
}

// Add static properties to the constructor function, if supplied.
if(staticProps){
_.extend(child,staticProps);
}

// Correctly set child's `prototype.constructor`.
child.prototype.constructor=child;

// Set a convenience property in case the parent's prototype is
// needed later.
child.__super__=parent.prototype;

return child;
};

var parseDate=function parseDate(iso8601){
return new Date(iso8601);
};

var setValue=function setValue(target,key,value){
// '.' is not allowed in Class keys, escaping is not in concern now.
var segs=key.split('.');
var lastSeg=segs.pop();
var currentTarget=target;
segs.forEach(function(seg){
if(currentTarget[seg]===undefined)currentTarget[seg]={};
currentTarget=currentTarget[seg];
});
currentTarget[lastSeg]=value;
return target;
};

var findValue=function findValue(target,key){
var segs=key.split('.');
var firstSeg=segs[0];
var lastSeg=segs.pop();
var currentTarget=target;
for(var i=0;i<segs.length;i++){
currentTarget=currentTarget[segs[i]];
if(currentTarget===undefined){
return[undefined,undefined,lastSeg];
}
}
var value=currentTarget[lastSeg];
return[value,currentTarget,lastSeg,firstSeg];
};

var isPlainObject=function isPlainObject(obj){
return _.isObject(obj)&&(0,_getPrototypeOf2.default)(obj)===Object.prototype;
};

var continueWhile=function continueWhile(predicate,asyncFunction){
if(predicate()){
return asyncFunction().then(function(){
return continueWhile(predicate,asyncFunction);
});
}
return _promise2.default.resolve();
};

module.exports={
isNullOrUndefined:isNullOrUndefined,
ensureArray:ensureArray,
transformFetchOptions:transformFetchOptions,
getSessionToken:getSessionToken,
tap:tap,
inherits:inherits,
parseDate:parseDate,
setValue:setValue,
findValue:findValue,
isPlainObject:isPlainObject,
continueWhile:continueWhile};


/***/},
/* 7 */
/***/function(module,exports,__webpack_require__){

var anObject=__webpack_require__(8);
var IE8_DOM_DEFINE=__webpack_require__(54);
var toPrimitive=__webpack_require__(39);
var dP=Object.defineProperty;

exports.f=__webpack_require__(11)?Object.defineProperty:function defineProperty(O,P,Attributes){
anObject(O);
P=toPrimitive(P,true);
anObject(Attributes);
if(IE8_DOM_DEFINE)try{
return dP(O,P,Attributes);
}catch(e){/* empty */}
if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');
if('value'in Attributes)O[P]=Attributes.value;
return O;
};


/***/},
/* 8 */
/***/function(module,exports,__webpack_require__){

var isObject=__webpack_require__(13);
module.exports=function(it){
if(!isObject(it))throw TypeError(it+' is not an object!');
return it;
};


/***/},
/* 9 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(105),__esModule:true};

/***/},
/* 10 */
/***/function(module,exports,__webpack_require__){

var global=__webpack_require__(3);
var core=__webpack_require__(1);
var ctx=__webpack_require__(23);
var hide=__webpack_require__(12);
var has=__webpack_require__(14);
var PROTOTYPE='prototype';

var $export=function $export(type,name,source){
var IS_FORCED=type&$export.F;
var IS_GLOBAL=type&$export.G;
var IS_STATIC=type&$export.S;
var IS_PROTO=type&$export.P;
var IS_BIND=type&$export.B;
var IS_WRAP=type&$export.W;
var exports=IS_GLOBAL?core:core[name]||(core[name]={});
var expProto=exports[PROTOTYPE];
var target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];
var key,own,out;
if(IS_GLOBAL)source=name;
for(key in source){
// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;
if(own&&has(exports,key))continue;
// export native or passed
out=own?target[key]:source[key];
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&typeof target[key]!='function'?source[key]
// bind timers to global for call from export context
:IS_BIND&&own?ctx(out,global)
// wrap global constructors for prevent change them in library
:IS_WRAP&&target[key]==out?function(C){
var F=function F(a,b,c){
if(this instanceof C){
switch(arguments.length){
case 0:return new C();
case 1:return new C(a);
case 2:return new C(a,b);}
return new C(a,b,c);
}return C.apply(this,arguments);
};
F[PROTOTYPE]=C[PROTOTYPE];
return F;
// make static versions for prototype methods
}(out):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
if(IS_PROTO){
(exports.virtual||(exports.virtual={}))[key]=out;
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
if(type&$export.R&&expProto&&!expProto[key])hide(expProto,key,out);
}
}
};
// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library`
module.exports=$export;


/***/},
/* 11 */
/***/function(module,exports,__webpack_require__){

// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(24)(function(){
return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;
});


/***/},
/* 12 */
/***/function(module,exports,__webpack_require__){

var dP=__webpack_require__(7);
var createDesc=__webpack_require__(25);
module.exports=__webpack_require__(11)?function(object,key,value){
return dP.f(object,key,createDesc(1,value));
}:function(object,key,value){
object[key]=value;
return object;
};


/***/},
/* 13 */
/***/function(module,exports){

module.exports=function(it){
return typeof it==='object'?it!==null:typeof it==='function';
};


/***/},
/* 14 */
/***/function(module,exports){

var hasOwnProperty={}.hasOwnProperty;
module.exports=function(it,key){
return hasOwnProperty.call(it,key);
};


/***/},
/* 15 */
/***/function(module,exports,__webpack_require__){

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(88);
var defined=__webpack_require__(37);
module.exports=function(it){
return IObject(defined(it));
};


/***/},
/* 16 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

/**
 * @class AV.Error
 */

function AVError(code,message){
var error=new Error(message);
error.code=code;
return error;
}

_.extend(AVError,
/** @lends AV.Error */{
/**
   * Error code indicating some error other than those enumerated here.
   * @constant
   */
OTHER_CAUSE:-1,

/**
   * Error code indicating that something has gone wrong with the server.
   * If you get this error code, it is AV's fault. Contact us at
   * https://avoscloud.com/help
   * @constant
   */
INTERNAL_SERVER_ERROR:1,

/**
   * Error code indicating the connection to the AV servers failed.
   * @constant
   */
CONNECTION_FAILED:100,

/**
   * Error code indicating the specified object doesn't exist.
   * @constant
   */
OBJECT_NOT_FOUND:101,

/**
   * Error code indicating you tried to query with a datatype that doesn't
   * support it, like exact matching an array or object.
   * @constant
   */
INVALID_QUERY:102,

/**
   * Error code indicating a missing or invalid classname. Classnames are
   * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
   * only valid characters.
   * @constant
   */
INVALID_CLASS_NAME:103,

/**
   * Error code indicating an unspecified object id.
   * @constant
   */
MISSING_OBJECT_ID:104,

/**
   * Error code indicating an invalid key name. Keys are case-sensitive. They
   * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
   * @constant
   */
INVALID_KEY_NAME:105,

/**
   * Error code indicating a malformed pointer. You should not see this unless
   * you have been mucking about changing internal AV code.
   * @constant
   */
INVALID_POINTER:106,

/**
   * Error code indicating that badly formed JSON was received upstream. This
   * either indicates you have done something unusual with modifying how
   * things encode to JSON, or the network is failing badly.
   * @constant
   */
INVALID_JSON:107,

/**
   * Error code indicating that the feature you tried to access is only
   * available internally for testing purposes.
   * @constant
   */
COMMAND_UNAVAILABLE:108,

/**
   * You must call AV.initialize before using the AV library.
   * @constant
   */
NOT_INITIALIZED:109,

/**
   * Error code indicating that a field was set to an inconsistent type.
   * @constant
   */
INCORRECT_TYPE:111,

/**
   * Error code indicating an invalid channel name. A channel name is either
   * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
   * characters.
   * @constant
   */
INVALID_CHANNEL_NAME:112,

/**
   * Error code indicating that push is misconfigured.
   * @constant
   */
PUSH_MISCONFIGURED:115,

/**
   * Error code indicating that the object is too large.
   * @constant
   */
OBJECT_TOO_LARGE:116,

/**
   * Error code indicating that the operation isn't allowed for clients.
   * @constant
   */
OPERATION_FORBIDDEN:119,

/**
   * Error code indicating the result was not found in the cache.
   * @constant
   */
CACHE_MISS:120,

/**
   * Error code indicating that an invalid key was used in a nested
   * JSONObject.
   * @constant
   */
INVALID_NESTED_KEY:121,

/**
   * Error code indicating that an invalid filename was used for AVFile.
   * A valid file name contains only a-zA-Z0-9_. characters and is between 1
   * and 128 characters.
   * @constant
   */
INVALID_FILE_NAME:122,

/**
   * Error code indicating an invalid ACL was provided.
   * @constant
   */
INVALID_ACL:123,

/**
   * Error code indicating that the request timed out on the server. Typically
   * this indicates that the request is too expensive to run.
   * @constant
   */
TIMEOUT:124,

/**
   * Error code indicating that the email address was invalid.
   * @constant
   */
INVALID_EMAIL_ADDRESS:125,

/**
   * Error code indicating a missing content type.
   * @constant
   */
MISSING_CONTENT_TYPE:126,

/**
   * Error code indicating a missing content length.
   * @constant
   */
MISSING_CONTENT_LENGTH:127,

/**
   * Error code indicating an invalid content length.
   * @constant
   */
INVALID_CONTENT_LENGTH:128,

/**
   * Error code indicating a file that was too large.
   * @constant
   */
FILE_TOO_LARGE:129,

/**
   * Error code indicating an error saving a file.
   * @constant
   */
FILE_SAVE_ERROR:130,

/**
   * Error code indicating an error deleting a file.
   * @constant
   */
FILE_DELETE_ERROR:153,

/**
   * Error code indicating that a unique field was given a value that is
   * already taken.
   * @constant
   */
DUPLICATE_VALUE:137,

/**
   * Error code indicating that a role's name is invalid.
   * @constant
   */
INVALID_ROLE_NAME:139,

/**
   * Error code indicating that an application quota was exceeded.  Upgrade to
   * resolve.
   * @constant
   */
EXCEEDED_QUOTA:140,

/**
   * Error code indicating that a Cloud Code script failed.
   * @constant
   */
SCRIPT_FAILED:141,

/**
   * Error code indicating that a Cloud Code validation failed.
   * @constant
   */
VALIDATION_ERROR:142,

/**
   * Error code indicating that invalid image data was provided.
   * @constant
   */
INVALID_IMAGE_DATA:150,

/**
   * Error code indicating an unsaved file.
   * @constant
   */
UNSAVED_FILE_ERROR:151,

/**
   * Error code indicating an invalid push time.
   */
INVALID_PUSH_TIME_ERROR:152,

/**
   * Error code indicating that the username is missing or empty.
   * @constant
   */
USERNAME_MISSING:200,

/**
   * Error code indicating that the password is missing or empty.
   * @constant
   */
PASSWORD_MISSING:201,

/**
   * Error code indicating that the username has already been taken.
   * @constant
   */
USERNAME_TAKEN:202,

/**
   * Error code indicating that the email has already been taken.
   * @constant
   */
EMAIL_TAKEN:203,

/**
   * Error code indicating that the email is missing, but must be specified.
   * @constant
   */
EMAIL_MISSING:204,

/**
   * Error code indicating that a user with the specified email was not found.
   * @constant
   */
EMAIL_NOT_FOUND:205,

/**
   * Error code indicating that a user object without a valid session could
   * not be altered.
   * @constant
   */
SESSION_MISSING:206,

/**
   * Error code indicating that a user can only be created through signup.
   * @constant
   */
MUST_CREATE_USER_THROUGH_SIGNUP:207,

/**
   * Error code indicating that an an account being linked is already linked
   * to another user.
   * @constant
   */
ACCOUNT_ALREADY_LINKED:208,

/**
   * Error code indicating that a user cannot be linked to an account because
   * that account's id could not be found.
   * @constant
   */
LINKED_ID_MISSING:250,

/**
   * Error code indicating that a user with a linked (e.g. Facebook) account
   * has an invalid session.
   * @constant
   */
INVALID_LINKED_SESSION:251,

/**
   * Error code indicating that a service being linked (e.g. Facebook or
   * Twitter) is unsupported.
   * @constant
   */
UNSUPPORTED_SERVICE:252,
/**
   * Error code indicating a real error code is unavailable because
   * we had to use an XDomainRequest object to allow CORS requests in
   * Internet Explorer, which strips the body from HTTP responses that have
   * a non-2XX status code.
   * @constant
   */
X_DOMAIN_REQUEST:602});


module.exports=AVError;

/***/},
/* 17 */
/***/function(module,exports){

module.exports={};


/***/},
/* 18 */
/***/function(module,exports,__webpack_require__){

"use strict";
/* WEBPACK VAR INJECTION */(function(global){

var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

var _keys=__webpack_require__(68);

var _keys2=_interopRequireDefault(_keys);

var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var uuid=__webpack_require__(69);
var debug=__webpack_require__(19);

var _require=__webpack_require__(6),
inherits=_require.inherits,
parseDate=_require.parseDate;

var version=__webpack_require__(70);

var _require2=__webpack_require__(20),
setAdapters=_require2.setAdapters,
adapterManager=_require2.adapterManager;

var AV=global.AV||{};

// All internal configuration items
AV._config={
serverURLs:{},
useMasterKey:false,
production:null,
realtime:null,
requestTimeout:null};


var initialUserAgent='LeanCloud-JS-SDK/'+version;

// configs shared by all AV instances
AV._sharedConfig={
userAgent:initialUserAgent,
liveQueryRealtime:null};


adapterManager.on('platformInfo',function(platformInfo){
var ua=initialUserAgent;
if(platformInfo){
if(platformInfo.userAgent){
ua=platformInfo.userAgent;
}else{
var comments=platformInfo.name;
if(platformInfo.version){
comments+='/'+platformInfo.version;
}
if(platformInfo.extra){
comments+='; '+platformInfo.extra;
}
ua+=' ('+comments+')';
}
}
AV._sharedConfig.userAgent=ua;
});

/**
 * Contains all AV API classes and functions.
 * @namespace AV
 */

/**
 * Returns prefix for localStorage keys used by this instance of AV.
 * @param {String} path The relative suffix to append to it.
 *     null or undefined is treated as the empty string.
 * @return {String} The full key name.
 * @private
 */
AV._getAVPath=function(path){
if(!AV.applicationId){
throw new Error('You need to call AV.initialize before using AV.');
}
if(!path){
path='';
}
if(!_.isString(path)){
throw new Error("Tried to get a localStorage path that wasn't a String.");
}
if(path[0]==='/'){
path=path.substring(1);
}
return'AV/'+AV.applicationId+'/'+path;
};

/**
 * Returns the unique string for this app on this machine.
 * Gets reset when localStorage is cleared.
 * @private
 */
AV._installationId=null;
AV._getInstallationId=function(){
// See if it's cached in RAM.
if(AV._installationId){
return _promise2.default.resolve(AV._installationId);
}

// Try to get it from localStorage.
var path=AV._getAVPath('installationId');
return AV.localStorage.getItemAsync(path).then(function(_installationId){
AV._installationId=_installationId;
if(!AV._installationId){
// It wasn't in localStorage, so create a new one.
AV._installationId=_installationId=uuid();
return AV.localStorage.setItemAsync(path,_installationId).then(function(){
return _installationId;
});
}
return _installationId;
});
};

AV._subscriptionId=null;
AV._refreshSubscriptionId=function(){
var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:AV._getAVPath('subscriptionId');

var subscriptionId=AV._subscriptionId=uuid();
return AV.localStorage.setItemAsync(path,subscriptionId).then(function(){
return subscriptionId;
});
};
AV._getSubscriptionId=function(){
// See if it's cached in RAM.
if(AV._subscriptionId){
return _promise2.default.resolve(AV._subscriptionId);
}

// Try to get it from localStorage.
var path=AV._getAVPath('subscriptionId');
return AV.localStorage.getItemAsync(path).then(function(_subscriptionId){
AV._subscriptionId=_subscriptionId;
if(!AV._subscriptionId){
// It wasn't in localStorage, so create a new one.
_subscriptionId=AV._refreshSubscriptionId(path);
}
return _subscriptionId;
});
};

AV._parseDate=parseDate;

// A self-propagating extend function.
AV._extend=function(protoProps,classProps){
var child=inherits(this,protoProps,classProps);
child.extend=this.extend;
return child;
};

/**
 * Converts a value in a AV Object into the appropriate representation.
 * This is the JS equivalent of Java's AV.maybeReferenceAndEncode(Object)
 * if seenObjects is falsey. Otherwise any AV.Objects not in
 * seenObjects will be fully embedded rather than encoded
 * as a pointer.  This array will be used to prevent going into an infinite
 * loop because we have circular references.  If <seenObjects>
 * is set, then none of the AV Objects that are serialized can be dirty.
 * @private
 */
AV._encode=function(value,seenObjects,disallowObjects){
var full=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;

if(value instanceof AV.Object){
if(disallowObjects){
throw new Error('AV.Objects not allowed here');
}
if(!seenObjects||_.include(seenObjects,value)||!value._hasData){
return value._toPointer();
}
return value._toFullJSON(seenObjects.concat(value),full);
}
if(value instanceof AV.ACL){
return value.toJSON();
}
if(_.isDate(value)){
return full?{__type:'Date',iso:value.toJSON()}:value.toJSON();
}
if(value instanceof AV.GeoPoint){
return value.toJSON();
}
if(_.isArray(value)){
return _.map(value,function(x){
return AV._encode(x,seenObjects,disallowObjects,full);
});
}
if(_.isRegExp(value)){
return value.source;
}
if(value instanceof AV.Relation){
return value.toJSON();
}
if(value instanceof AV.Op){
return value.toJSON();
}
if(value instanceof AV.File){
if(!value.url()&&!value.id){
throw new Error('Tried to save an object containing an unsaved file.');
}
return value._toFullJSON(seenObjects,full);
}
if(_.isObject(value)){
return _.mapObject(value,function(v,k){
return AV._encode(v,seenObjects,disallowObjects,full);
});
}
return value;
};

/**
 * The inverse function of AV._encode.
 * @private
 */
AV._decode=function(value,key){
if(!_.isObject(value)||_.isDate(value)){
return value;
}
if(_.isArray(value)){
return _.map(value,function(v){
return AV._decode(v);
});
}
if(value instanceof AV.Object){
return value;
}
if(value instanceof AV.File){
return value;
}
if(value instanceof AV.Op){
return value;
}
if(value instanceof AV.GeoPoint){
return value;
}
if(value instanceof AV.ACL){
return value;
}
if(key==='ACL'){
return new AV.ACL(value);
}
if(value.__op){
return AV.Op._decode(value);
}
var className;
if(value.__type==='Pointer'){
className=value.className;
var pointer=AV.Object._create(className);
if((0,_keys2.default)(value).length>3){
var v=_.clone(value);
delete v.__type;
delete v.className;
pointer._finishFetch(v,true);
}else{
pointer._finishFetch({objectId:value.objectId},false);
}
return pointer;
}
if(value.__type==='Object'){
// It's an Object included in a query result.
className=value.className;
var _v=_.clone(value);
delete _v.__type;
delete _v.className;
var object=AV.Object._create(className);
object._finishFetch(_v,true);
return object;
}
if(value.__type==='Date'){
return AV._parseDate(value.iso);
}
if(value.__type==='GeoPoint'){
return new AV.GeoPoint({
latitude:value.latitude,
longitude:value.longitude});

}
if(value.__type==='Relation'){
if(!key)throw new Error('key missing decoding a Relation');
var relation=new AV.Relation(null,key);
relation.targetClassName=value.className;
return relation;
}
if(value.__type==='File'){
var file=new AV.File(value.name);
var _v2=_.clone(value);
delete _v2.__type;
file._finishFetch(_v2);
return file;
}
return _.mapObject(value,AV._decode);
};

/**
 * The inverse function of {@link AV.Object#toFullJSON}.
 * @since 3.0.0
 * @method
 * @param {Object}
 * return {AV.Object|AV.File|any}
 */
AV.parseJSON=AV._decode;

/**
 * Similar to JSON.parse, except that AV internal types will be used if possible.
 * Inverse to {@link AV.stringify}
 * @since 3.14.0
 * @param {string} text the string to parse.
 * @return {AV.Object|AV.File|any}
 */
AV.parse=function(text){
return AV.parseJSON(JSON.parse(text));
};
/**
 * Serialize a target containing AV.Object, similar to JSON.stringify.
 * Inverse to {@link AV.parse}
 * @since 3.14.0
 * @return {string}
 */
AV.stringify=function(target){
return(0,_stringify2.default)(AV._encode(target,[],false,true));
};

AV._encodeObjectOrArray=function(value){
var encodeAVObject=function encodeAVObject(object){
if(object&&object._toFullJSON){
object=object._toFullJSON([]);
}

return _.mapObject(object,function(value){
return AV._encode(value,[]);
});
};

if(_.isArray(value)){
return value.map(function(object){
return encodeAVObject(object);
});
}else{
return encodeAVObject(value);
}
};

AV._arrayEach=_.each;

/**
 * Does a deep traversal of every item in object, calling func on every one.
 * @param {Object} object The object or array to traverse deeply.
 * @param {Function} func The function to call for every item. It will
 *     be passed the item as an argument. If it returns a truthy value, that
 *     value will replace the item in its parent container.
 * @returns {} the result of calling func on the top-level object itself.
 * @private
 */
AV._traverse=function(object,func,seen){
if(object instanceof AV.Object){
seen=seen||[];
if(_.indexOf(seen,object)>=0){
// We've already visited this object in this call.
return;
}
seen.push(object);
AV._traverse(object.attributes,func,seen);
return func(object);
}
if(object instanceof AV.Relation||object instanceof AV.File){
// Nothing needs to be done, but we don't want to recurse into the
// object's parent infinitely, so we catch this case.
return func(object);
}
if(_.isArray(object)){
_.each(object,function(child,index){
var newChild=AV._traverse(child,func,seen);
if(newChild){
object[index]=newChild;
}
});
return func(object);
}
if(_.isObject(object)){
AV._each(object,function(child,key){
var newChild=AV._traverse(child,func,seen);
if(newChild){
object[key]=newChild;
}
});
return func(object);
}
return func(object);
};

/**
 * This is like _.each, except:
 * * it doesn't work for so-called array-like objects,
 * * it does work for dictionaries with a "length" attribute.
 * @private
 */
AV._objectEach=AV._each=function(obj,callback){
if(_.isObject(obj)){
_.each(_.keys(obj),function(key){
callback(obj[key],key);
});
}else{
_.each(obj,callback);
}
};

/**
 * @namespace
 * @since 3.14.0
 */
AV.debug={
/**
   * Enable debug
   */
enable:function enable(){
var namespaces=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'leancloud*';
return debug.enable(namespaces);
},
/**
   * Disable debug
   */
disable:debug.disable};


/**
 * Specify Adapters
 * @since 4.4.0
 * @function
 * @param {Adapters} newAdapters See {@link https://url.leanapp.cn/adapter-type-definitions @leancloud/adapter-types} for detailed definitions.
 */
AV.setAdapters=setAdapters;

module.exports=AV;
/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(67));

/***/},
/* 19 */
/***/function(module,exports,__webpack_require__){

"use strict";


function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log=log;
exports.formatArgs=formatArgs;
exports.save=save;
exports.load=load;
exports.useColors=useColors;
exports.storage=localstorage();
/**
 * Colors.
 */

exports.colors=['#0000CC','#0000FF','#0033CC','#0033FF','#0066CC','#0066FF','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#3300CC','#3300FF','#3333CC','#3333FF','#3366CC','#3366FF','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#6600CC','#6600FF','#6633CC','#6633FF','#66CC00','#66CC33','#9900CC','#9900FF','#9933CC','#9933FF','#99CC00','#99CC33','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC9900','#CC9933','#CCCC00','#CCCC33','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF9900','#FF9933','#FFCC00','#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors(){
// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
if(typeof window!=='undefined'&&window.process&&(window.process.type==='renderer'||window.process.__nwjs)){
return true;
}// Internet Explorer and Edge do not support colors.


if(typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)){
return false;
}// Is webkit? http://stackoverflow.com/a/16459606/376773
// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


return typeof document!=='undefined'&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// Is firebug? http://stackoverflow.com/a/398120/376773
typeof window!=='undefined'&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// Double check webkit in userAgent just in case we are in a worker
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args){
args[0]=(this.useColors?'%c':'')+this.namespace+(this.useColors?' %c':' ')+args[0]+(this.useColors?'%c ':' ')+'+'+module.exports.humanize(this.diff);

if(!this.useColors){
return;
}

var c='color: '+this.color;
args.splice(1,0,c,'color: inherit');// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into

var index=0;
var lastC=0;
args[0].replace(/%[a-zA-Z%]/g,function(match){
if(match==='%%'){
return;
}

index++;

if(match==='%c'){
// We only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;
}
});
args.splice(lastC,0,c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(){
var _console;

// This hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return(typeof console==="undefined"?"undefined":_typeof(console))==='object'&&console.log&&(_console=console).log.apply(_console,arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces){
try{
if(namespaces){
exports.storage.setItem('debug',namespaces);
}else{
exports.storage.removeItem('debug');
}
}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load(){
var r;

try{
r=exports.storage.getItem('debug');
}catch(error){}// Swallow
// XXX (@Qix-) should we be logging these?
// If debug isn't set in LS, and we're in Electron, try to load $DEBUG


if(!r&&typeof process!=='undefined'&&'env'in process){
r=Object({"VUE_APP_NAME":"一笔日历","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).DEBUG;
}

return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage(){
try{
// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage;
}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}
}

module.exports=__webpack_require__(110)(exports);
var formatters=module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j=function(v){
try{
return JSON.stringify(v);
}catch(error){
return'[UnexpectedJSONParseError]: '+error.message;
}
};



/***/},
/* 20 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var EventEmitter=__webpack_require__(71);

var _require=__webpack_require__(6),
inherits=_require.inherits;

var AdapterManager=inherits(EventEmitter,{
constructor:function constructor(){
EventEmitter.apply(this);
this._adapters={};
},
getAdapter:function getAdapter(name){
var adapter=this._adapters[name];
if(adapter===undefined){
throw new Error(name+' adapter is not configured');
}
return adapter;
},
setAdapters:function setAdapters(newAdapters){
var _this=this;

_.extend(this._adapters,newAdapters);
_.keys(newAdapters).forEach(function(name){
return _this.emit(name,newAdapters[name]);
});
}});


var adapterManager=new AdapterManager();

module.exports={
getAdapter:adapterManager.getAdapter.bind(adapterManager),
setAdapters:adapterManager.setAdapters.bind(adapterManager),
adapterManager:adapterManager};


/***/},
/* 21 */
/***/function(module,exports,__webpack_require__){

"use strict";

var $at=__webpack_require__(85)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(53)(String,'String',function(iterated){
this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){
var O=this._t;
var index=this._i;
var point;
if(index>=O.length)return{value:undefined,done:true};
point=$at(O,index);
this._i+=point.length;
return{value:point,done:false};
});


/***/},
/* 22 */
/***/function(module,exports){

module.exports=true;


/***/},
/* 23 */
/***/function(module,exports,__webpack_require__){

// optional / simple context binding
var aFunction=__webpack_require__(29);
module.exports=function(fn,that,length){
aFunction(fn);
if(that===undefined)return fn;
switch(length){
case 1:return function(a){
return fn.call(that,a);
};
case 2:return function(a,b){
return fn.call(that,a,b);
};
case 3:return function(a,b,c){
return fn.call(that,a,b,c);
};}

return function()/* ...args */{
return fn.apply(that,arguments);
};
};


/***/},
/* 24 */
/***/function(module,exports){

module.exports=function(exec){
try{
return!!exec();
}catch(e){
return true;
}
};


/***/},
/* 25 */
/***/function(module,exports){

module.exports=function(bitmap,value){
return{
enumerable:!(bitmap&1),
configurable:!(bitmap&2),
writable:!(bitmap&4),
value:value};

};


/***/},
/* 26 */
/***/function(module,exports){

var toString={}.toString;

module.exports=function(it){
return toString.call(it).slice(8,-1);
};


/***/},
/* 27 */
/***/function(module,exports,__webpack_require__){

// 7.1.13 ToObject(argument)
var defined=__webpack_require__(37);
module.exports=function(it){
return Object(defined(it));
};


/***/},
/* 28 */
/***/function(module,exports,__webpack_require__){

"use strict";


exports.__esModule=true;

var _iterator=__webpack_require__(34);

var _iterator2=_interopRequireDefault(_iterator);

var _symbol=__webpack_require__(35);

var _symbol2=_interopRequireDefault(_symbol);

var _typeof=typeof _symbol2.default==="function"&&typeof _iterator2.default==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj;};

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

exports.default=typeof _symbol2.default==="function"&&_typeof(_iterator2.default)==="symbol"?function(obj){
return typeof obj==="undefined"?"undefined":_typeof(obj);
}:function(obj){
return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof(obj);
};

/***/},
/* 29 */
/***/function(module,exports){

module.exports=function(it){
if(typeof it!='function')throw TypeError(it+' is not a function!');
return it;
};


/***/},
/* 30 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(57);
var enumBugKeys=__webpack_require__(43);

module.exports=Object.keys||function keys(O){
return $keys(O,enumBugKeys);
};


/***/},
/* 31 */
/***/function(module,exports){

var id=0;
var px=Math.random();
module.exports=function(key){
return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));
};


/***/},
/* 32 */
/***/function(module,exports,__webpack_require__){

var def=__webpack_require__(7).f;
var has=__webpack_require__(14);
var TAG=__webpack_require__(4)('toStringTag');

module.exports=function(it,tag,stat){
if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});
};


/***/},
/* 33 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(91);
var global=__webpack_require__(3);
var hide=__webpack_require__(12);
var Iterators=__webpack_require__(17);
var TO_STRING_TAG=__webpack_require__(4)('toStringTag');

var DOMIterables=('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,'+
'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,'+
'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,'+
'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,'+
'TextTrackList,TouchList').split(',');

for(var i=0;i<DOMIterables.length;i++){
var NAME=DOMIterables[i];
var Collection=global[NAME];
var proto=Collection&&Collection.prototype;
if(proto&&!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);
Iterators[NAME]=Iterators.Array;
}


/***/},
/* 34 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(119),__esModule:true};

/***/},
/* 35 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(120),__esModule:true};

/***/},
/* 36 */
/***/function(module,exports){

// 7.1.4 ToInteger
var ceil=Math.ceil;
var floor=Math.floor;
module.exports=function(it){
return isNaN(it=+it)?0:(it>0?floor:ceil)(it);
};


/***/},
/* 37 */
/***/function(module,exports){

// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){
if(it==undefined)throw TypeError("Can't call method on  "+it);
return it;
};


/***/},
/* 38 */
/***/function(module,exports,__webpack_require__){

var isObject=__webpack_require__(13);
var document=__webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is=isObject(document)&&isObject(document.createElement);
module.exports=function(it){
return is?document.createElement(it):{};
};


/***/},
/* 39 */
/***/function(module,exports,__webpack_require__){

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){
if(!isObject(it))return it;
var fn,val;
if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;
if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;
if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;
throw TypeError("Can't convert object to primitive value");
};


/***/},
/* 40 */
/***/function(module,exports,__webpack_require__){

// 7.1.15 ToLength
var toInteger=__webpack_require__(36);
var min=Math.min;
module.exports=function(it){
return it>0?min(toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};


/***/},
/* 41 */
/***/function(module,exports,__webpack_require__){

var shared=__webpack_require__(42)('keys');
var uid=__webpack_require__(31);
module.exports=function(key){
return shared[key]||(shared[key]=uid(key));
};


/***/},
/* 42 */
/***/function(module,exports,__webpack_require__){

var core=__webpack_require__(1);
var global=__webpack_require__(3);
var SHARED='__core-js_shared__';
var store=global[SHARED]||(global[SHARED]={});

(module.exports=function(key,value){
return store[key]||(store[key]=value!==undefined?value:{});
})('versions',[]).push({
version:core.version,
mode:__webpack_require__(22)?'pure':'global',
copyright:'© 2019 Denis Pushkarev (zloirock.ru)'});



/***/},
/* 43 */
/***/function(module,exports){

// IE 8- don't enum bug keys
module.exports=
'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.
split(',');


/***/},
/* 44 */
/***/function(module,exports,__webpack_require__){

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(26);
var TAG=__webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG=cof(function(){return arguments;}())=='Arguments';

// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){
try{
return it[key];
}catch(e){/* empty */}
};

module.exports=function(it){
var O,T,B;
return it===undefined?'Undefined':it===null?'Null'
// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T
// builtinTag case
:ARG?cof(O)
// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;
};


/***/},
/* 45 */
/***/function(module,exports,__webpack_require__){

var classof=__webpack_require__(44);
var ITERATOR=__webpack_require__(4)('iterator');
var Iterators=__webpack_require__(17);
module.exports=__webpack_require__(1).getIteratorMethod=function(it){
if(it!=undefined)return it[ITERATOR]||
it['@@iterator']||
Iterators[classof(it)];
};


/***/},
/* 46 */
/***/function(module,exports,__webpack_require__){

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction=__webpack_require__(29);

function PromiseCapability(C){
var resolve,reject;
this.promise=new C(function($$resolve,$$reject){
if(resolve!==undefined||reject!==undefined)throw TypeError('Bad Promise constructor');
resolve=$$resolve;
reject=$$reject;
});
this.resolve=aFunction(resolve);
this.reject=aFunction(reject);
}

module.exports.f=function(C){
return new PromiseCapability(C);
};


/***/},
/* 47 */
/***/function(module,exports,__webpack_require__){

// most Object methods by ES6 should accept primitives
var $export=__webpack_require__(10);
var core=__webpack_require__(1);
var fails=__webpack_require__(24);
module.exports=function(KEY,exec){
var fn=(core.Object||{})[KEY]||Object[KEY];
var exp={};
exp[KEY]=exec(fn);
$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);
};


/***/},
/* 48 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

var _typeof2=__webpack_require__(28);

var _typeof3=_interopRequireDefault(_typeof2);

var _keys=__webpack_require__(68);

var _keys2=_interopRequireDefault(_keys);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

var _require=__webpack_require__(128),
timeout=_require.timeout;

var debug=__webpack_require__(19);
var debugRequest=debug('leancloud:request');
var debugRequestError=debug('leancloud:request:error');

var _require2=__webpack_require__(20),
getAdapter=_require2.getAdapter;

var requestsCount=0;

var ajax=function ajax(_ref){
var method=_ref.method,
url=_ref.url,
query=_ref.query,
data=_ref.data,
_ref$headers=_ref.headers,
headers=_ref$headers===undefined?{}:_ref$headers,
time=_ref.timeout,
onprogress=_ref.onprogress;

if(query){
var queryString=(0,_keys2.default)(query).map(function(key){
var value=query[key];
if(value===undefined)return undefined;
var v=(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))==='object'?(0,_stringify2.default)(value):value;
return encodeURIComponent(key)+'='+encodeURIComponent(v);
}).filter(function(qs){
return qs;
}).join('&');
url=url+'?'+queryString;
}

var count=requestsCount++;
debugRequest('request(%d) %s %s %o %o %o',count,method,url,query,data,headers);

var request=getAdapter('request');
var promise=request(url,{method:method,headers:headers,data:data,onprogress:onprogress}).then(function(response){
debugRequest('response(%d) %d %O %o',count,response.status,response.data||response.text,response.header);
if(response.ok===false){
var error=new Error();
error.response=response;
throw error;
}
return response.data;
}).catch(function(error){
if(error.response){
if(!debug.enabled('leancloud:request')){
debugRequestError('request(%d) %s %s %o %o %o',count,method,url,query,data,headers);
}
debugRequestError('response(%d) %d %O %o',count,error.response.status,error.response.data||error.response.text,error.response.header);
error.statusCode=error.response.status;
error.responseText=error.response.text;
error.response=error.response.data;
}
throw error;
});
return time?timeout(promise,time):promise;
};

module.exports=ajax;

/***/},
/* 49 */
/***/function(module,exports,__webpack_require__){

exports.f=__webpack_require__(4);


/***/},
/* 50 */
/***/function(module,exports,__webpack_require__){

var global=__webpack_require__(3);
var core=__webpack_require__(1);
var LIBRARY=__webpack_require__(22);
var wksExt=__webpack_require__(49);
var defineProperty=__webpack_require__(7).f;
module.exports=function(name){
var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});
if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});
};


/***/},
/* 51 */
/***/function(module,exports){

exports.f={}.propertyIsEnumerable;


/***/},
/* 52 */
/***/function(module,exports){



/***/},
/* 53 */
/***/function(module,exports,__webpack_require__){

"use strict";

var LIBRARY=__webpack_require__(22);
var $export=__webpack_require__(10);
var redefine=__webpack_require__(55);
var hide=__webpack_require__(12);
var Iterators=__webpack_require__(17);
var $iterCreate=__webpack_require__(86);
var setToStringTag=__webpack_require__(32);
var getPrototypeOf=__webpack_require__(59);
var ITERATOR=__webpack_require__(4)('iterator');
var BUGGY=!([].keys&&'next'in[].keys());// Safari has buggy iterators w/o `next`
var FF_ITERATOR='@@iterator';
var KEYS='keys';
var VALUES='values';

var returnThis=function returnThis(){return this;};

module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){
$iterCreate(Constructor,NAME,next);
var getMethod=function getMethod(kind){
if(!BUGGY&&kind in proto)return proto[kind];
switch(kind){
case KEYS:return function keys(){return new Constructor(this,kind);};
case VALUES:return function values(){return new Constructor(this,kind);};}
return function entries(){return new Constructor(this,kind);};
};
var TAG=NAME+' Iterator';
var DEF_VALUES=DEFAULT==VALUES;
var VALUES_BUG=false;
var proto=Base.prototype;
var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];
var $default=$native||getMethod(DEFAULT);
var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;
var $anyNative=NAME=='Array'?proto.entries||$native:$native;
var methods,key,IteratorPrototype;
// Fix native
if($anyNative){
IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));
if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){
// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);
// fix for some old engines
if(!LIBRARY&&typeof IteratorPrototype[ITERATOR]!='function')hide(IteratorPrototype,ITERATOR,returnThis);
}
}
// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){
VALUES_BUG=true;
$default=function values(){return $native.call(this);};
}
// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){
hide(proto,ITERATOR,$default);
}
// Plug for library
Iterators[NAME]=$default;
Iterators[TAG]=returnThis;
if(DEFAULT){
methods={
values:DEF_VALUES?$default:getMethod(VALUES),
keys:IS_SET?$default:getMethod(KEYS),
entries:$entries};

if(FORCED)for(key in methods){
if(!(key in proto))redefine(proto,key,methods[key]);
}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);
}
return methods;
};


/***/},
/* 54 */
/***/function(module,exports,__webpack_require__){

module.exports=!__webpack_require__(11)&&!__webpack_require__(24)(function(){
return Object.defineProperty(__webpack_require__(38)('div'),'a',{get:function get(){return 7;}}).a!=7;
});


/***/},
/* 55 */
/***/function(module,exports,__webpack_require__){

module.exports=__webpack_require__(12);


/***/},
/* 56 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(8);
var dPs=__webpack_require__(87);
var enumBugKeys=__webpack_require__(43);
var IE_PROTO=__webpack_require__(41)('IE_PROTO');
var Empty=function Empty(){/* empty */};
var PROTOTYPE='prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){
// Thrash, waste and sodomy: IE GC bug
var iframe=__webpack_require__(38)('iframe');
var i=enumBugKeys.length;
var lt='<';
var gt='>';
var iframeDocument;
iframe.style.display='none';
__webpack_require__(58).appendChild(iframe);
iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;
iframeDocument.open();
iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);
iframeDocument.close();
_createDict=iframeDocument.F;
while(i--){delete _createDict[PROTOTYPE][enumBugKeys[i]];}
return _createDict();
};

module.exports=Object.create||function create(O,Properties){
var result;
if(O!==null){
Empty[PROTOTYPE]=anObject(O);
result=new Empty();
Empty[PROTOTYPE]=null;
// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;
}else result=_createDict();
return Properties===undefined?result:dPs(result,Properties);
};


/***/},
/* 57 */
/***/function(module,exports,__webpack_require__){

var has=__webpack_require__(14);
var toIObject=__webpack_require__(15);
var arrayIndexOf=__webpack_require__(89)(false);
var IE_PROTO=__webpack_require__(41)('IE_PROTO');

module.exports=function(object,names){
var O=toIObject(object);
var i=0;
var result=[];
var key;
for(key in O){if(key!=IE_PROTO)has(O,key)&&result.push(key);}
// Don't enum bug & hidden keys
while(names.length>i){if(has(O,key=names[i++])){
~arrayIndexOf(result,key)||result.push(key);
}}
return result;
};


/***/},
/* 58 */
/***/function(module,exports,__webpack_require__){

var document=__webpack_require__(3).document;
module.exports=document&&document.documentElement;


/***/},
/* 59 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(14);
var toObject=__webpack_require__(27);
var IE_PROTO=__webpack_require__(41)('IE_PROTO');
var ObjectProto=Object.prototype;

module.exports=Object.getPrototypeOf||function(O){
O=toObject(O);
if(has(O,IE_PROTO))return O[IE_PROTO];
if(typeof O.constructor=='function'&&O instanceof O.constructor){
return O.constructor.prototype;
}return O instanceof Object?ObjectProto:null;
};


/***/},
/* 60 */
/***/function(module,exports,__webpack_require__){

// call something on iterator step with safe closing on error
var anObject=__webpack_require__(8);
module.exports=function(iterator,fn,value,entries){
try{
return entries?fn(anObject(value)[0],value[1]):fn(value);
// 7.4.6 IteratorClose(iterator, completion)
}catch(e){
var ret=iterator['return'];
if(ret!==undefined)anObject(ret.call(iterator));
throw e;
}
};


/***/},
/* 61 */
/***/function(module,exports,__webpack_require__){

// check on default Array iterator
var Iterators=__webpack_require__(17);
var ITERATOR=__webpack_require__(4)('iterator');
var ArrayProto=Array.prototype;

module.exports=function(it){
return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);
};


/***/},
/* 62 */
/***/function(module,exports,__webpack_require__){

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject=__webpack_require__(8);
var aFunction=__webpack_require__(29);
var SPECIES=__webpack_require__(4)('species');
module.exports=function(O,D){
var C=anObject(O).constructor;
var S;
return C===undefined||(S=anObject(C)[SPECIES])==undefined?D:aFunction(S);
};


/***/},
/* 63 */
/***/function(module,exports,__webpack_require__){

var ctx=__webpack_require__(23);
var invoke=__webpack_require__(97);
var html=__webpack_require__(58);
var cel=__webpack_require__(38);
var global=__webpack_require__(3);
var process=global.process;
var setTask=global.setImmediate;
var clearTask=global.clearImmediate;
var MessageChannel=global.MessageChannel;
var Dispatch=global.Dispatch;
var counter=0;
var queue={};
var ONREADYSTATECHANGE='onreadystatechange';
var defer,channel,port;
var run=function run(){
var id=+this;
// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(id)){
var fn=queue[id];
delete queue[id];
fn();
}
};
var listener=function listener(event){
run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask||!clearTask){
setTask=function setImmediate(fn){
var args=[];
var i=1;
while(arguments.length>i){args.push(arguments[i++]);}
queue[++counter]=function(){
// eslint-disable-next-line no-new-func
invoke(typeof fn=='function'?fn:Function(fn),args);
};
defer(counter);
return counter;
};
clearTask=function clearImmediate(id){
delete queue[id];
};
// Node.js 0.8-
if(__webpack_require__(26)(process)=='process'){
defer=function defer(id){
process.nextTick(ctx(run,id,1));
};
// Sphere (JS game engine) Dispatch API
}else if(Dispatch&&Dispatch.now){
defer=function defer(id){
Dispatch.now(ctx(run,id,1));
};
// Browsers with MessageChannel, includes WebWorkers
}else if(MessageChannel){
channel=new MessageChannel();
port=channel.port2;
channel.port1.onmessage=listener;
defer=ctx(port.postMessage,port,1);
// Browsers with postMessage, skip WebWorkers
// IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
}else if(global.addEventListener&&typeof postMessage=='function'&&!global.importScripts){
defer=function defer(id){
global.postMessage(id+'','*');
};
global.addEventListener('message',listener,false);
// IE8-
}else if(ONREADYSTATECHANGE in cel('script')){
defer=function defer(id){
html.appendChild(cel('script'))[ONREADYSTATECHANGE]=function(){
html.removeChild(this);
run.call(id);
};
};
// Rest old browsers
}else{
defer=function defer(id){
setTimeout(ctx(run,id,1),0);
};
}
}
module.exports={
set:setTask,
clear:clearTask};



/***/},
/* 64 */
/***/function(module,exports){

module.exports=function(exec){
try{
return{e:false,v:exec()};
}catch(e){
return{e:true,v:e};
}
};


/***/},
/* 65 */
/***/function(module,exports,__webpack_require__){

var anObject=__webpack_require__(8);
var isObject=__webpack_require__(13);
var newPromiseCapability=__webpack_require__(46);

module.exports=function(C,x){
anObject(C);
if(isObject(x)&&x.constructor===C)return x;
var promiseCapability=newPromiseCapability.f(C);
var resolve=promiseCapability.resolve;
resolve(x);
return promiseCapability.promise;
};


/***/},
/* 66 */
/***/function(module,exports,__webpack_require__){

var ITERATOR=__webpack_require__(4)('iterator');
var SAFE_CLOSING=false;

try{
var riter=[7][ITERATOR]();
riter['return']=function(){SAFE_CLOSING=true;};
// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2;});
}catch(e){/* empty */}

module.exports=function(exec,skipClosing){
if(!skipClosing&&!SAFE_CLOSING)return false;
var safe=false;
try{
var arr=[7];
var iter=arr[ITERATOR]();
iter.next=function(){return{done:safe=true};};
arr[ITERATOR]=function(){return iter;};
exec(arr);
}catch(e){/* empty */}
return safe;
};


/***/},
/* 67 */
/***/function(module,exports){

var g;

// This works in non-strict mode
g=function(){
return this;
}();

try{
// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");
}catch(e){
// This works if the window reference is available
if(typeof window==="object")
g=window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports=g;


/***/},
/* 68 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(106),__esModule:true};

/***/},
/* 69 */
/***/function(module,exports,__webpack_require__){

var rng=__webpack_require__(108);
var bytesToUuid=__webpack_require__(109);

function v4(options,buf,offset){
var i=buf&&offset||0;

if(typeof options=='string'){
buf=options==='binary'?new Array(16):null;
options=null;
}
options=options||{};

var rnds=options.random||(options.rng||rng)();

// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
rnds[6]=rnds[6]&0x0f|0x40;
rnds[8]=rnds[8]&0x3f|0x80;

// Copy bytes to buffer, if provided
if(buf){
for(var ii=0;ii<16;++ii){
buf[i+ii]=rnds[ii];
}
}

return buf||bytesToUuid(rnds);
}

module.exports=v4;


/***/},
/* 70 */
/***/function(module,exports,__webpack_require__){

"use strict";


module.exports='4.8.0';

/***/},
/* 71 */
/***/function(module,exports,__webpack_require__){

"use strict";


var has=Object.prototype.hasOwnProperty,
prefix='~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events(){}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if(Object.create){
Events.prototype=Object.create(null);

//
// This hack is needed because the `__proto__` property is still inherited in
// some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
//
if(!new Events().__proto__)prefix=false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn,context,once){
this.fn=fn;
this.context=context;
this.once=once||false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter(){
this._events=new Events();
this._eventsCount=0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames=function eventNames(){
var names=[],
events,
name;

if(this._eventsCount===0)return names;

for(name in events=this._events){
if(has.call(events,name))names.push(prefix?name.slice(1):name);
}

if(Object.getOwnPropertySymbols){
return names.concat(Object.getOwnPropertySymbols(events));
}

return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners=function listeners(event,exists){
var evt=prefix?prefix+event:event,
available=this._events[evt];

if(exists)return!!available;
if(!available)return[];
if(available.fn)return[available.fn];

for(var i=0,l=available.length,ee=new Array(l);i<l;i++){
ee[i]=available[i].fn;
}

return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit=function emit(event,a1,a2,a3,a4,a5){
var evt=prefix?prefix+event:event;

if(!this._events[evt])return false;

var listeners=this._events[evt],
len=arguments.length,
args,
i;

if(listeners.fn){
if(listeners.once)this.removeListener(event,listeners.fn,undefined,true);

switch(len){
case 1:return listeners.fn.call(listeners.context),true;
case 2:return listeners.fn.call(listeners.context,a1),true;
case 3:return listeners.fn.call(listeners.context,a1,a2),true;
case 4:return listeners.fn.call(listeners.context,a1,a2,a3),true;
case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),true;
case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),true;}


for(i=1,args=new Array(len-1);i<len;i++){
args[i-1]=arguments[i];
}

listeners.fn.apply(listeners.context,args);
}else{
var length=listeners.length,
j;

for(i=0;i<length;i++){
if(listeners[i].once)this.removeListener(event,listeners[i].fn,undefined,true);

switch(len){
case 1:listeners[i].fn.call(listeners[i].context);break;
case 2:listeners[i].fn.call(listeners[i].context,a1);break;
case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;
case 4:listeners[i].fn.call(listeners[i].context,a1,a2,a3);break;
default:
if(!args)for(j=1,args=new Array(len-1);j<len;j++){
args[j-1]=arguments[j];
}

listeners[i].fn.apply(listeners[i].context,args);}

}
}

return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on=function on(event,fn,context){
var listener=new EE(fn,context||this),
evt=prefix?prefix+event:event;

if(!this._events[evt])this._events[evt]=listener,this._eventsCount++;else
if(!this._events[evt].fn)this._events[evt].push(listener);else
this._events[evt]=[this._events[evt],listener];

return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once=function once(event,fn,context){
var listener=new EE(fn,context||this,true),
evt=prefix?prefix+event:event;

if(!this._events[evt])this._events[evt]=listener,this._eventsCount++;else
if(!this._events[evt].fn)this._events[evt].push(listener);else
this._events[evt]=[this._events[evt],listener];

return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener=function removeListener(event,fn,context,once){
var evt=prefix?prefix+event:event;

if(!this._events[evt])return this;
if(!fn){
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
return this;
}

var listeners=this._events[evt];

if(listeners.fn){
if(
listeners.fn===fn&&(
!once||listeners.once)&&(
!context||listeners.context===context))
{
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}
}else{
for(var i=0,events=[],length=listeners.length;i<length;i++){
if(
listeners[i].fn!==fn||
once&&!listeners[i].once||
context&&listeners[i].context!==context)
{
events.push(listeners[i]);
}
}

//
// Reset the array, or remove it completely if we have no more listeners.
//
if(events.length)this._events[evt]=events.length===1?events[0]:events;else
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}

return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners=function removeAllListeners(event){
var evt;

if(event){
evt=prefix?prefix+event:event;
if(this._events[evt]){
if(--this._eventsCount===0)this._events=new Events();else
delete this._events[evt];
}
}else{
this._events=new Events();
this._eventsCount=0;
}

return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off=EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener=EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners=function setMaxListeners(){
return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed=prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter=EventEmitter;

//
// Expose the module.
//
if(true){
module.exports=EventEmitter;
}


/***/},
/* 72 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _require=__webpack_require__(20),
getAdapter=_require.getAdapter;

var syncApiNames=['getItem','setItem','removeItem','clear'];

var localStorage={
get async(){
return getAdapter('storage').async;
}};


// wrap sync apis with async ones.
syncApiNames.forEach(function(apiName){
localStorage[apiName+'Async']=function(){
var storage=getAdapter('storage');
return _promise2.default.resolve(storage[apiName].apply(storage,arguments));
};

localStorage[apiName]=function(){
var storage=getAdapter('storage');
if(!storage.async){
return storage[apiName].apply(storage,arguments);
}
var error=new Error('Synchronous API ['+apiName+'] is not available in this runtime.');
error.code='SYNC_API_NOT_AVAILABLE';
throw error;
};
});

module.exports=localStorage;

/***/},
/* 73 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var storage=__webpack_require__(72);
var AV=__webpack_require__(18);

var removeAsync=exports.removeAsync=storage.removeItemAsync.bind(storage);

var getCacheData=function getCacheData(cacheData,key){
try{
cacheData=JSON.parse(cacheData);
}catch(e){
return null;
}
if(cacheData){
var expired=cacheData.expiredAt&&cacheData.expiredAt<Date.now();
if(!expired){
return cacheData.value;
}
return removeAsync(key).then(function(){
return null;
});
}
return null;
};

exports.getAsync=function(key){
key='AV/'+AV.applicationId+'/'+key;
return storage.getItemAsync(key).then(function(cache){
return getCacheData(cache,key);
});
};

exports.setAsync=function(key,value,ttl){
var cache={value:value};
if(typeof ttl==='number'){
cache.expiredAt=Date.now()+ttl;
}
return storage.setItemAsync('AV/'+AV.applicationId+'/'+key,(0,_stringify2.default)(cache));
};

/***/},
/* 74 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(116),__esModule:true};

/***/},
/* 75 */
/***/function(module,exports){

exports.f=Object.getOwnPropertySymbols;


/***/},
/* 76 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys=__webpack_require__(57);
var hiddenKeys=__webpack_require__(43).concat('length','prototype');

exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){
return $keys(O,hiddenKeys);
};


/***/},
/* 77 */
/***/function(module,exports,__webpack_require__){

var pIE=__webpack_require__(51);
var createDesc=__webpack_require__(25);
var toIObject=__webpack_require__(15);
var toPrimitive=__webpack_require__(39);
var has=__webpack_require__(14);
var IE8_DOM_DEFINE=__webpack_require__(54);
var gOPD=Object.getOwnPropertyDescriptor;

exports.f=__webpack_require__(11)?gOPD:function getOwnPropertyDescriptor(O,P){
O=toIObject(O);
P=toPrimitive(P,true);
if(IE8_DOM_DEFINE)try{
return gOPD(O,P);
}catch(e){/* empty */}
if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);
};


/***/},
/* 78 */
/***/function(module,exports){

var charenc={
// UTF-8 encoding
utf8:{
// Convert a string to a byte array
stringToBytes:function stringToBytes(str){
return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
},

// Convert a byte array to a string
bytesToString:function bytesToString(bytes){
return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
}},


// Binary encoding
bin:{
// Convert a string to a byte array
stringToBytes:function stringToBytes(str){
for(var bytes=[],i=0;i<str.length;i++){
bytes.push(str.charCodeAt(i)&0xFF);}
return bytes;
},

// Convert a byte array to a string
bytesToString:function bytesToString(bytes){
for(var str=[],i=0;i<bytes.length;i++){
str.push(String.fromCharCode(bytes[i]));}
return str.join('');
}}};



module.exports=charenc;


/***/},
/* 79 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(147),__esModule:true};

/***/},
/* 80 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _iterator=__webpack_require__(34);

var _iterator2=_interopRequireDefault(_iterator);

var _typeof3=__webpack_require__(28);

var _typeof4=_interopRequireDefault(_typeof3);

var _symbol=__webpack_require__(35);

var _symbol2=_interopRequireDefault(_symbol);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function _typeof(obj){
if(typeof _symbol2.default==="function"&&(0,_typeof4.default)(_iterator2.default)==="symbol"){
_typeof=function _typeof(obj){
return typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}else{
_typeof=function _typeof(obj){
return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}return _typeof(obj);
}

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
function isObject(obj){
return obj!==null&&_typeof(obj)==='object';
}

module.exports=isObject;

/***/},
/* 81 */
/***/function(module,exports,__webpack_require__){

"use strict";


var AV=__webpack_require__(82);
var useAdatpers=__webpack_require__(166);

module.exports=useAdatpers(AV);

/***/},
/* 82 */
/***/function(module,exports,__webpack_require__){

"use strict";


module.exports=__webpack_require__(83);

/***/},
/* 83 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
var _=__webpack_require__(0);

var AV=__webpack_require__(18);

AV._=_;
AV.version=__webpack_require__(70);
AV.Promise=_promise2.default;
AV.localStorage=__webpack_require__(72);
AV.Cache=__webpack_require__(73);
AV.Error=__webpack_require__(16);

__webpack_require__(115);
__webpack_require__(129)(AV);
__webpack_require__(130)(AV);
__webpack_require__(131)(AV);
__webpack_require__(132)(AV);
__webpack_require__(133)(AV);
__webpack_require__(134)(AV);
__webpack_require__(142)(AV);
__webpack_require__(152)(AV);
__webpack_require__(153)(AV);
__webpack_require__(155)(AV);
__webpack_require__(156)(AV);
__webpack_require__(157)(AV);
__webpack_require__(158)(AV);
__webpack_require__(159)(AV);
__webpack_require__(160)(AV);
__webpack_require__(161)(AV);
__webpack_require__(162)(AV);
__webpack_require__(163)(AV);

AV.Conversation=__webpack_require__(164);
__webpack_require__(165);
module.exports=AV;

/**
 * Options to controll the authentication for an operation
 * @typedef {Object} AuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 */

/**
 * Options to controll the authentication for an SMS operation
 * @typedef {Object} SMSAuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 * @property {String} [validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
 */

/***/},
/* 84 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(52);
__webpack_require__(21);
__webpack_require__(33);
__webpack_require__(94);
__webpack_require__(102);
__webpack_require__(103);
module.exports=__webpack_require__(1).Promise;


/***/},
/* 85 */
/***/function(module,exports,__webpack_require__){

var toInteger=__webpack_require__(36);
var defined=__webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){
return function(that,pos){
var s=String(defined(that));
var i=toInteger(pos);
var l=s.length;
var a,b;
if(i<0||i>=l)return TO_STRING?'':undefined;
a=s.charCodeAt(i);
return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?
TO_STRING?s.charAt(i):a:
TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;
};
};


/***/},
/* 86 */
/***/function(module,exports,__webpack_require__){

"use strict";

var create=__webpack_require__(56);
var descriptor=__webpack_require__(25);
var setToStringTag=__webpack_require__(32);
var IteratorPrototype={};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype,__webpack_require__(4)('iterator'),function(){return this;});

module.exports=function(Constructor,NAME,next){
Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});
setToStringTag(Constructor,NAME+' Iterator');
};


/***/},
/* 87 */
/***/function(module,exports,__webpack_require__){

var dP=__webpack_require__(7);
var anObject=__webpack_require__(8);
var getKeys=__webpack_require__(30);

module.exports=__webpack_require__(11)?Object.defineProperties:function defineProperties(O,Properties){
anObject(O);
var keys=getKeys(Properties);
var length=keys.length;
var i=0;
var P;
while(length>i){dP.f(O,P=keys[i++],Properties[P]);}
return O;
};


/***/},
/* 88 */
/***/function(module,exports,__webpack_require__){

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(26);
// eslint-disable-next-line no-prototype-builtins
module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){
return cof(it)=='String'?it.split(''):Object(it);
};


/***/},
/* 89 */
/***/function(module,exports,__webpack_require__){

// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(15);
var toLength=__webpack_require__(40);
var toAbsoluteIndex=__webpack_require__(90);
module.exports=function(IS_INCLUDES){
return function($this,el,fromIndex){
var O=toIObject($this);
var length=toLength(O.length);
var index=toAbsoluteIndex(fromIndex,length);
var value;
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){
value=O[index++];
// eslint-disable-next-line no-self-compare
if(value!=value)return true;
// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){
if(O[index]===el)return IS_INCLUDES||index||0;
}}return!IS_INCLUDES&&-1;
};
};


/***/},
/* 90 */
/***/function(module,exports,__webpack_require__){

var toInteger=__webpack_require__(36);
var max=Math.max;
var min=Math.min;
module.exports=function(index,length){
index=toInteger(index);
return index<0?max(index+length,0):min(index,length);
};


/***/},
/* 91 */
/***/function(module,exports,__webpack_require__){

"use strict";

var addToUnscopables=__webpack_require__(92);
var step=__webpack_require__(93);
var Iterators=__webpack_require__(17);
var toIObject=__webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(53)(Array,'Array',function(iterated,kind){
this._t=toIObject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){
var O=this._t;
var kind=this._k;
var index=this._i++;
if(!O||index>=O.length){
this._t=undefined;
return step(1);
}
if(kind=='keys')return step(0,index);
if(kind=='values')return step(0,O[index]);
return step(0,[index,O[index]]);
},'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/},
/* 92 */
/***/function(module,exports){

module.exports=function(){/* empty */};


/***/},
/* 93 */
/***/function(module,exports){

module.exports=function(done,value){
return{value:value,done:!!done};
};


/***/},
/* 94 */
/***/function(module,exports,__webpack_require__){

"use strict";

var LIBRARY=__webpack_require__(22);
var global=__webpack_require__(3);
var ctx=__webpack_require__(23);
var classof=__webpack_require__(44);
var $export=__webpack_require__(10);
var isObject=__webpack_require__(13);
var aFunction=__webpack_require__(29);
var anInstance=__webpack_require__(95);
var forOf=__webpack_require__(96);
var speciesConstructor=__webpack_require__(62);
var task=__webpack_require__(63).set;
var microtask=__webpack_require__(98)();
var newPromiseCapabilityModule=__webpack_require__(46);
var perform=__webpack_require__(64);
var userAgent=__webpack_require__(99);
var promiseResolve=__webpack_require__(65);
var PROMISE='Promise';
var TypeError=global.TypeError;
var process=global.process;
var versions=process&&process.versions;
var v8=versions&&versions.v8||'';
var $Promise=global[PROMISE];
var isNode=classof(process)=='process';
var empty=function empty(){/* empty */};
var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper;
var newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f;

var USE_NATIVE=!!function(){
try{
// correct subclassing with @@species support
var promise=$Promise.resolve(1);
var FakePromise=(promise.constructor={})[__webpack_require__(4)('species')]=function(exec){
exec(empty,empty);
};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||typeof PromiseRejectionEvent=='function')&&
promise.then(empty)instanceof FakePromise
// v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// we can't detect it synchronously, so just check versions
&&v8.indexOf('6.6')!==0&&
userAgent.indexOf('Chrome/66')===-1;
}catch(e){/* empty */}
}();

// helpers
var isThenable=function isThenable(it){
var then;
return isObject(it)&&typeof(then=it.then)=='function'?then:false;
};
var notify=function notify(promise,isReject){
if(promise._n)return;
promise._n=true;
var chain=promise._c;
microtask(function(){
var value=promise._v;
var ok=promise._s==1;
var i=0;
var run=function run(reaction){
var handler=ok?reaction.ok:reaction.fail;
var resolve=reaction.resolve;
var reject=reaction.reject;
var domain=reaction.domain;
var result,then,exited;
try{
if(handler){
if(!ok){
if(promise._h==2)onHandleUnhandled(promise);
promise._h=1;
}
if(handler===true)result=value;else
{
if(domain)domain.enter();
result=handler(value);// may throw
if(domain){
domain.exit();
exited=true;
}
}
if(result===reaction.promise){
reject(TypeError('Promise-chain cycle'));
}else if(then=isThenable(result)){
then.call(result,resolve,reject);
}else resolve(result);
}else reject(value);
}catch(e){
if(domain&&!exited)domain.exit();
reject(e);
}
};
while(chain.length>i){run(chain[i++]);}// variable length - can't use forEach
promise._c=[];
promise._n=false;
if(isReject&&!promise._h)onUnhandled(promise);
});
};
var onUnhandled=function onUnhandled(promise){
task.call(global,function(){
var value=promise._v;
var unhandled=isUnhandled(promise);
var result,handler,console;
if(unhandled){
result=perform(function(){
if(isNode){
process.emit('unhandledRejection',value,promise);
}else if(handler=global.onunhandledrejection){
handler({promise:promise,reason:value});
}else if((console=global.console)&&console.error){
console.error('Unhandled promise rejection',value);
}
});
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1;
}promise._a=undefined;
if(unhandled&&result.e)throw result.v;
});
};
var isUnhandled=function isUnhandled(promise){
return promise._h!==1&&(promise._a||promise._c).length===0;
};
var onHandleUnhandled=function onHandleUnhandled(promise){
task.call(global,function(){
var handler;
if(isNode){
process.emit('rejectionHandled',promise);
}else if(handler=global.onrejectionhandled){
handler({promise:promise,reason:promise._v});
}
});
};
var $reject=function $reject(value){
var promise=this;
if(promise._d)return;
promise._d=true;
promise=promise._w||promise;// unwrap
promise._v=value;
promise._s=2;
if(!promise._a)promise._a=promise._c.slice();
notify(promise,true);
};
var $resolve=function $resolve(value){
var promise=this;
var then;
if(promise._d)return;
promise._d=true;
promise=promise._w||promise;// unwrap
try{
if(promise===value)throw TypeError("Promise can't be resolved itself");
if(then=isThenable(value)){
microtask(function(){
var wrapper={_w:promise,_d:false};// wrap
try{
then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1));
}catch(e){
$reject.call(wrapper,e);
}
});
}else{
promise._v=value;
promise._s=1;
notify(promise,false);
}
}catch(e){
$reject.call({_w:promise,_d:false},e);// wrap
}
};

// constructor polyfill
if(!USE_NATIVE){
// 25.4.3.1 Promise(executor)
$Promise=function Promise(executor){
anInstance(this,$Promise,PROMISE,'_h');
aFunction(executor);
Internal.call(this);
try{
executor(ctx($resolve,this,1),ctx($reject,this,1));
}catch(err){
$reject.call(this,err);
}
};
// eslint-disable-next-line no-unused-vars
Internal=function Promise(executor){
this._c=[];// <- awaiting reactions
this._a=undefined;// <- checked in isUnhandled reactions
this._s=0;// <- state
this._d=false;// <- done
this._v=undefined;// <- value
this._h=0;// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=false;// <- notify
};
Internal.prototype=__webpack_require__(100)($Promise.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function then(onFulfilled,onRejected){
var reaction=newPromiseCapability(speciesConstructor(this,$Promise));
reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;
reaction.fail=typeof onRejected=='function'&&onRejected;
reaction.domain=isNode?process.domain:undefined;
this._c.push(reaction);
if(this._a)this._a.push(reaction);
if(this._s)notify(this,false);
return reaction.promise;
},
// 25.4.5.1 Promise.prototype.catch(onRejected)
'catch':function _catch(onRejected){
return this.then(undefined,onRejected);
}});

OwnPromiseCapability=function OwnPromiseCapability(){
var promise=new Internal();
this.promise=promise;
this.resolve=ctx($resolve,promise,1);
this.reject=ctx($reject,promise,1);
};
newPromiseCapabilityModule.f=newPromiseCapability=function newPromiseCapability(C){
return C===$Promise||C===Wrapper?
new OwnPromiseCapability(C):
newGenericPromiseCapability(C);
};
}

$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise});
__webpack_require__(32)($Promise,PROMISE);
__webpack_require__(101)(PROMISE);
Wrapper=__webpack_require__(1)[PROMISE];

// statics
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{
// 25.4.4.5 Promise.reject(r)
reject:function reject(r){
var capability=newPromiseCapability(this);
var $$reject=capability.reject;
$$reject(r);
return capability.promise;
}});

$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{
// 25.4.4.6 Promise.resolve(x)
resolve:function resolve(x){
return promiseResolve(LIBRARY&&this===Wrapper?$Promise:this,x);
}});

$export($export.S+$export.F*!(USE_NATIVE&&__webpack_require__(66)(function(iter){
$Promise.all(iter)['catch'](empty);
})),PROMISE,{
// 25.4.4.1 Promise.all(iterable)
all:function all(iterable){
var C=this;
var capability=newPromiseCapability(C);
var resolve=capability.resolve;
var reject=capability.reject;
var result=perform(function(){
var values=[];
var index=0;
var remaining=1;
forOf(iterable,false,function(promise){
var $index=index++;
var alreadyCalled=false;
values.push(undefined);
remaining++;
C.resolve(promise).then(function(value){
if(alreadyCalled)return;
alreadyCalled=true;
values[$index]=value;
--remaining||resolve(values);
},reject);
});
--remaining||resolve(values);
});
if(result.e)reject(result.v);
return capability.promise;
},
// 25.4.4.4 Promise.race(iterable)
race:function race(iterable){
var C=this;
var capability=newPromiseCapability(C);
var reject=capability.reject;
var result=perform(function(){
forOf(iterable,false,function(promise){
C.resolve(promise).then(capability.resolve,reject);
});
});
if(result.e)reject(result.v);
return capability.promise;
}});



/***/},
/* 95 */
/***/function(module,exports){

module.exports=function(it,Constructor,name,forbiddenField){
if(!(it instanceof Constructor)||forbiddenField!==undefined&&forbiddenField in it){
throw TypeError(name+': incorrect invocation!');
}return it;
};


/***/},
/* 96 */
/***/function(module,exports,__webpack_require__){

var ctx=__webpack_require__(23);
var call=__webpack_require__(60);
var isArrayIter=__webpack_require__(61);
var anObject=__webpack_require__(8);
var toLength=__webpack_require__(40);
var getIterFn=__webpack_require__(45);
var BREAK={};
var RETURN={};
var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){
var iterFn=ITERATOR?function(){return iterable;}:getIterFn(iterable);
var f=ctx(fn,that,entries?2:1);
var index=0;
var length,step,iterator,result;
if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');
// fast case for arrays with default iterator
if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){
result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);
if(result===BREAK||result===RETURN)return result;
}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){
result=call(iterator,f,step.value,entries);
if(result===BREAK||result===RETURN)return result;
}
};
exports.BREAK=BREAK;
exports.RETURN=RETURN;


/***/},
/* 97 */
/***/function(module,exports){

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports=function(fn,args,that){
var un=that===undefined;
switch(args.length){
case 0:return un?fn():
fn.call(that);
case 1:return un?fn(args[0]):
fn.call(that,args[0]);
case 2:return un?fn(args[0],args[1]):
fn.call(that,args[0],args[1]);
case 3:return un?fn(args[0],args[1],args[2]):
fn.call(that,args[0],args[1],args[2]);
case 4:return un?fn(args[0],args[1],args[2],args[3]):
fn.call(that,args[0],args[1],args[2],args[3]);}
return fn.apply(that,args);
};


/***/},
/* 98 */
/***/function(module,exports,__webpack_require__){

var global=__webpack_require__(3);
var macrotask=__webpack_require__(63).set;
var Observer=global.MutationObserver||global.WebKitMutationObserver;
var process=global.process;
var Promise=global.Promise;
var isNode=__webpack_require__(26)(process)=='process';

module.exports=function(){
var head,last,notify;

var flush=function flush(){
var parent,fn;
if(isNode&&(parent=process.domain))parent.exit();
while(head){
fn=head.fn;
head=head.next;
try{
fn();
}catch(e){
if(head)notify();else
last=undefined;
throw e;
}
}last=undefined;
if(parent)parent.enter();
};

// Node.js
if(isNode){
notify=function notify(){
process.nextTick(flush);
};
// browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
}else if(Observer&&!(global.navigator&&global.navigator.standalone)){
var toggle=true;
var node=document.createTextNode('');
new Observer(flush).observe(node,{characterData:true});// eslint-disable-line no-new
notify=function notify(){
node.data=toggle=!toggle;
};
// environments with maybe non-completely correct, but existent Promise
}else if(Promise&&Promise.resolve){
// Promise.resolve without an argument throws an error in LG WebOS 2
var promise=Promise.resolve(undefined);
notify=function notify(){
promise.then(flush);
};
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else{
notify=function notify(){
// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global,flush);
};
}

return function(fn){
var task={fn:fn,next:undefined};
if(last)last.next=task;
if(!head){
head=task;
notify();
}last=task;
};
};


/***/},
/* 99 */
/***/function(module,exports,__webpack_require__){

var global=__webpack_require__(3);
var navigator=global.navigator;

module.exports=navigator&&navigator.userAgent||'';


/***/},
/* 100 */
/***/function(module,exports,__webpack_require__){

var hide=__webpack_require__(12);
module.exports=function(target,src,safe){
for(var key in src){
if(safe&&target[key])target[key]=src[key];else
hide(target,key,src[key]);
}return target;
};


/***/},
/* 101 */
/***/function(module,exports,__webpack_require__){

"use strict";

var global=__webpack_require__(3);
var core=__webpack_require__(1);
var dP=__webpack_require__(7);
var DESCRIPTORS=__webpack_require__(11);
var SPECIES=__webpack_require__(4)('species');

module.exports=function(KEY){
var C=typeof core[KEY]=='function'?core[KEY]:global[KEY];
if(DESCRIPTORS&&C&&!C[SPECIES])dP.f(C,SPECIES,{
configurable:true,
get:function get(){return this;}});

};


/***/},
/* 102 */
/***/function(module,exports,__webpack_require__){

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export=__webpack_require__(10);
var core=__webpack_require__(1);
var global=__webpack_require__(3);
var speciesConstructor=__webpack_require__(62);
var promiseResolve=__webpack_require__(65);

$export($export.P+$export.R,'Promise',{'finally':function _finally(onFinally){
var C=speciesConstructor(this,core.Promise||global.Promise);
var isFunction=typeof onFinally=='function';
return this.then(
isFunction?function(x){
return promiseResolve(C,onFinally()).then(function(){return x;});
}:onFinally,
isFunction?function(e){
return promiseResolve(C,onFinally()).then(function(){throw e;});
}:onFinally);

}});


/***/},
/* 103 */
/***/function(module,exports,__webpack_require__){

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export=__webpack_require__(10);
var newPromiseCapability=__webpack_require__(46);
var perform=__webpack_require__(64);

$export($export.S,'Promise',{'try':function _try(callbackfn){
var promiseCapability=newPromiseCapability.f(this);
var result=perform(callbackfn);
(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v);
return promiseCapability.promise;
}});


/***/},
/* 104 */
/***/function(module,exports){

module.exports=function(module){
if(!module.webpackPolyfill){
module.deprecate=function(){};
module.paths=[];
// module.parent = undefined by default
if(!module.children)module.children=[];
Object.defineProperty(module,"loaded",{
enumerable:true,
get:function get(){
return module.l;
}});

Object.defineProperty(module,"id",{
enumerable:true,
get:function get(){
return module.i;
}});

module.webpackPolyfill=1;
}
return module;
};


/***/},
/* 105 */
/***/function(module,exports,__webpack_require__){

var core=__webpack_require__(1);
var $JSON=core.JSON||(core.JSON={stringify:JSON.stringify});
module.exports=function stringify(it){// eslint-disable-line no-unused-vars
return $JSON.stringify.apply($JSON,arguments);
};


/***/},
/* 106 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(107);
module.exports=__webpack_require__(1).Object.keys;


/***/},
/* 107 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.14 Object.keys(O)
var toObject=__webpack_require__(27);
var $keys=__webpack_require__(30);

__webpack_require__(47)('keys',function(){
return function keys(it){
return $keys(toObject(it));
};
});


/***/},
/* 108 */
/***/function(module,exports){

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues=typeof crypto!='undefined'&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||
typeof msCrypto!='undefined'&&typeof window.msCrypto.getRandomValues=='function'&&msCrypto.getRandomValues.bind(msCrypto);

if(getRandomValues){
// WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
var rnds8=new Uint8Array(16);// eslint-disable-line no-undef

module.exports=function whatwgRNG(){
getRandomValues(rnds8);
return rnds8;
};
}else{
// Math.random()-based (RNG)
//
// If all else fails, use Math.random().  It's fast, but is of unspecified
// quality.
var rnds=new Array(16);

module.exports=function mathRNG(){
for(var i=0,r;i<16;i++){
if((i&0x03)===0)r=Math.random()*0x100000000;
rnds[i]=r>>>((i&0x03)<<3)&0xff;
}

return rnds;
};
}


/***/},
/* 109 */
/***/function(module,exports){

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex=[];
for(var i=0;i<256;++i){
byteToHex[i]=(i+0x100).toString(16).substr(1);
}

function bytesToUuid(buf,offset){
var i=offset||0;
var bth=byteToHex;
// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],'-',
bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]],
bth[buf[i++]],bth[buf[i++]]].join('');
}

module.exports=bytesToUuid;


/***/},
/* 110 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env){
createDebug.debug=createDebug;
createDebug.default=createDebug;
createDebug.coerce=coerce;
createDebug.disable=disable;
createDebug.enable=enable;
createDebug.enabled=enabled;
createDebug.humanize=__webpack_require__(111);
Object.keys(env).forEach(function(key){
createDebug[key]=env[key];
});
/**
  * Active `debug` instances.
  */

createDebug.instances=[];
/**
  * The currently active debug mode names, and names to skip.
  */

createDebug.names=[];
createDebug.skips=[];
/**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

createDebug.formatters={};
/**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

function selectColor(namespace){
var hash=0;

for(var i=0;i<namespace.length;i++){
hash=(hash<<5)-hash+namespace.charCodeAt(i);
hash|=0;// Convert to 32bit integer
}

return createDebug.colors[Math.abs(hash)%createDebug.colors.length];
}

createDebug.selectColor=selectColor;
/**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

function createDebug(namespace){
var prevTime;

function debug(){
// Disabled?
if(!debug.enabled){
return;
}

for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

var self=debug;// Set `diff` timestamp

var curr=Number(new Date());
var ms=curr-(prevTime||curr);
self.diff=ms;
self.prev=prevTime;
self.curr=curr;
prevTime=curr;
args[0]=createDebug.coerce(args[0]);

if(typeof args[0]!=='string'){
// Anything else let's inspect with %O
args.unshift('%O');
}// Apply any `formatters` transformations


var index=0;
args[0]=args[0].replace(/%([a-zA-Z%])/g,function(match,format){
// If we encounter an escaped % then don't increase the array index
if(match==='%%'){
return match;
}

index++;
var formatter=createDebug.formatters[format];

if(typeof formatter==='function'){
var val=args[index];
match=formatter.call(self,val);// Now we need to remove `args[index]` since it's inlined in the `format`

args.splice(index,1);
index--;
}

return match;
});// Apply env-specific formatting (colors, etc.)

createDebug.formatArgs.call(self,args);
var logFn=self.log||createDebug.log;
logFn.apply(self,args);
}

debug.namespace=namespace;
debug.enabled=createDebug.enabled(namespace);
debug.useColors=createDebug.useColors();
debug.color=selectColor(namespace);
debug.destroy=destroy;
debug.extend=extend;// Debug.formatArgs = formatArgs;
// debug.rawLog = rawLog;
// env-specific initialization logic for debug instances

if(typeof createDebug.init==='function'){
createDebug.init(debug);
}

createDebug.instances.push(debug);
return debug;
}

function destroy(){
var index=createDebug.instances.indexOf(this);

if(index!==-1){
createDebug.instances.splice(index,1);
return true;
}

return false;
}

function extend(namespace,delimiter){
return createDebug(this.namespace+(typeof delimiter==='undefined'?':':delimiter)+namespace);
}
/**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


function enable(namespaces){
createDebug.save(namespaces);
createDebug.names=[];
createDebug.skips=[];
var i;
var split=(typeof namespaces==='string'?namespaces:'').split(/[\s,]+/);
var len=split.length;

for(i=0;i<len;i++){
if(!split[i]){
// ignore empty strings
continue;
}

namespaces=split[i].replace(/\*/g,'.*?');

if(namespaces[0]==='-'){
createDebug.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));
}else{
createDebug.names.push(new RegExp('^'+namespaces+'$'));
}
}

for(i=0;i<createDebug.instances.length;i++){
var instance=createDebug.instances[i];
instance.enabled=createDebug.enabled(instance.namespace);
}
}
/**
  * Disable debug output.
  *
  * @api public
  */


function disable(){
createDebug.enable('');
}
/**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


function enabled(name){
if(name[name.length-1]==='*'){
return true;
}

var i;
var len;

for(i=0,len=createDebug.skips.length;i<len;i++){
if(createDebug.skips[i].test(name)){
return false;
}
}

for(i=0,len=createDebug.names.length;i<len;i++){
if(createDebug.names[i].test(name)){
return true;
}
}

return false;
}
/**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


function coerce(val){
if(val instanceof Error){
return val.stack||val.message;
}

return val;
}

createDebug.enable(createDebug.load());
return createDebug;
}

module.exports=setup;



/***/},
/* 111 */
/***/function(module,exports){

/**
 * Helpers.
 */

var s=1000;
var m=s*60;
var h=m*60;
var d=h*24;
var w=d*7;
var y=d*365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports=function(val,options){
options=options||{};
var type=typeof val;
if(type==='string'&&val.length>0){
return parse(val);
}else if(type==='number'&&isFinite(val)){
return options.long?fmtLong(val):fmtShort(val);
}
throw new Error(
'val is not a non-empty string or a valid number. val='+
JSON.stringify(val));

};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str){
str=String(str);
if(str.length>100){
return;
}
var match=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
str);

if(!match){
return;
}
var n=parseFloat(match[1]);
var type=(match[2]||'ms').toLowerCase();
switch(type){
case'years':
case'year':
case'yrs':
case'yr':
case'y':
return n*y;
case'weeks':
case'week':
case'w':
return n*w;
case'days':
case'day':
case'd':
return n*d;
case'hours':
case'hour':
case'hrs':
case'hr':
case'h':
return n*h;
case'minutes':
case'minute':
case'mins':
case'min':
case'm':
return n*m;
case'seconds':
case'second':
case'secs':
case'sec':
case's':
return n*s;
case'milliseconds':
case'millisecond':
case'msecs':
case'msec':
case'ms':
return n;
default:
return undefined;}

}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms){
var msAbs=Math.abs(ms);
if(msAbs>=d){
return Math.round(ms/d)+'d';
}
if(msAbs>=h){
return Math.round(ms/h)+'h';
}
if(msAbs>=m){
return Math.round(ms/m)+'m';
}
if(msAbs>=s){
return Math.round(ms/s)+'s';
}
return ms+'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms){
var msAbs=Math.abs(ms);
if(msAbs>=d){
return plural(ms,msAbs,d,'day');
}
if(msAbs>=h){
return plural(ms,msAbs,h,'hour');
}
if(msAbs>=m){
return plural(ms,msAbs,m,'minute');
}
if(msAbs>=s){
return plural(ms,msAbs,s,'second');
}
return ms+' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms,msAbs,n,name){
var isPlural=msAbs>=n*1.5;
return Math.round(ms/n)+' '+name+(isPlural?'s':'');
}


/***/},
/* 112 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(113),__esModule:true};

/***/},
/* 113 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(114);
module.exports=__webpack_require__(1).Object.getPrototypeOf;


/***/},
/* 114 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject=__webpack_require__(27);
var $getPrototypeOf=__webpack_require__(59);

__webpack_require__(47)('getPrototypeOf',function(){
return function getPrototypeOf(it){
return $getPrototypeOf(toObject(it));
};
});


/***/},
/* 115 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _defineProperty=__webpack_require__(74);

var _defineProperty2=_interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var AV=__webpack_require__(18);
var AppRouter=__webpack_require__(118);

var _require=__webpack_require__(6),
isNullOrUndefined=_require.isNullOrUndefined;

var _require2=__webpack_require__(0),
extend=_require2.extend,
isObject=_require2.isObject,
isEmpty=_require2.isEmpty;

var isCNApp=function isCNApp(appId){
return appId.slice(-9)!=='-MdYXbMMI';
};

var fillServerURLs=function fillServerURLs(url){
return{
push:url,
stats:url,
engine:url,
api:url,
rtm:url};

};

function getDefaultServerURLs(appId){
if(isCNApp(appId)){
return{};
}
var id=appId.slice(0,8).toLowerCase();
var domain='lncldglobal.com';
return{
push:'https://'+id+'.push.'+domain,
stats:'https://'+id+'.stats.'+domain,
engine:'https://'+id+'.engine.'+domain,
api:'https://'+id+'.api.'+domain,
rtm:'https://'+id+'.rtm.'+domain};

}

var _disableAppRouter=false;
var _initialized=false;

/**
 * URLs for services
 * @typedef {Object} ServerURLs
 * @property {String} [api] serverURL for API service
 * @property {String} [engine] serverURL for engine service
 * @property {String} [stats] serverURL for stats service
 * @property {String} [push] serverURL for push service
 * @property {String} [rtm] serverURL for LiveQuery service
 */

/**
 * Call this method first to set up your authentication tokens for AV.
 * You can get your app keys from the LeanCloud dashboard on http://leancloud.cn .
 * @function AV.init
 * @param {Object} options
 * @param {String} options.appId application id
 * @param {String} options.appKey application key
 * @param {String} [options.masterKey] application master key
 * @param {Boolean} [options.production]
 * @param {String|ServerURLs} [options.serverURL] URLs for services. if a string was given, it will be applied for all services.
 * @param {Boolean} [options.disableCurrentUser]
 */
AV.init=function init(options){
if(!isObject(options)){
return AV.init({
appId:options,
appKey:arguments.length<=1?undefined:arguments[1],
masterKey:arguments.length<=2?undefined:arguments[2]});

}
var appId=options.appId,
appKey=options.appKey,
masterKey=options.masterKey,
hookKey=options.hookKey,
serverURL=options.serverURL,
_options$serverURLs=options.serverURLs,
serverURLs=_options$serverURLs===undefined?serverURL:_options$serverURLs,
disableCurrentUser=options.disableCurrentUser,
production=options.production,
realtime=options.realtime;

if(_initialized)console.warn('Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.');
if(!appId)throw new TypeError('appId must be a string');
if(!appKey)throw new TypeError('appKey must be a string');
if( true&&masterKey)console.warn('MasterKey is not supposed to be used at client side.');
if(isCNApp(appId)){
if(!serverURLs&&isEmpty(AV._config.serverURLs)){
throw new TypeError('serverURL option is required for apps from CN region');
}
}
if(appId!==AV._config.applicationId){
// overwrite all keys when reinitializing as a new app
AV._config.masterKey=masterKey;
AV._config.hookKey=hookKey;
}else{
if(masterKey)AV._config.masterKey=masterKey;
if(hookKey)AV._config.hookKey=hookKey;
}
AV._config.applicationId=appId;
AV._config.applicationKey=appKey;
AV.setProduction(production);
if(typeof disableCurrentUser!=='undefined')AV._config.disableCurrentUser=disableCurrentUser;
var disableAppRouter=_disableAppRouter||typeof serverURLs!=='undefined';
if(!disableAppRouter){
AV._appRouter=new AppRouter(AV);
}
AV._setServerURLs(extend({},getDefaultServerURLs(appId),AV._config.serverURLs,typeof serverURLs==='string'?fillServerURLs(serverURLs):serverURLs),disableAppRouter);
if(realtime){
AV._config.realtime=realtime;
}else if(AV._sharedConfig.liveQueryRealtime){
var _AV$_config$serverURL=AV._config.serverURLs,
api=_AV$_config$serverURL.api,
rtm=_AV$_config$serverURL.rtm;

AV._config.realtime=new AV._sharedConfig.liveQueryRealtime({
appId:appId,
appKey:appKey,
server:{
api:api,
RTMRouter:rtm}});


}
_initialized=true;
};

// If we're running in node.js, allow using the master key.
if(false){}

/**
 * Call this method to set production environment variable.
 * @function AV.setProduction
 * @param {Boolean} production True is production environment,and
 *  it's true by default.
 */
AV.setProduction=function(production){
if(!isNullOrUndefined(production)){
AV._config.production=production?1:0;
}else{
// change to default value
AV._config.production=null;
}
};

AV._setServerURLs=function(urls){
var disableAppRouter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

if(typeof urls!=='string'){
extend(AV._config.serverURLs,urls);
}else{
AV._config.serverURLs=fillServerURLs(urls);
}
if(disableAppRouter){
if(AV._appRouter){
AV._appRouter.disable();
}else{
_disableAppRouter=true;
}
}
};
/**
 * Set server URLs for services.
 * @function AV.setServerURL
 * @since 4.3.0
 * @param {String|ServerURLs} urls URLs for services. if a string was given, it will be applied for all services.
 * You can also set them when initializing SDK with `options.serverURL`
 */
AV.setServerURL=function(urls){
return AV._setServerURLs(urls);
};
AV.setServerURLs=AV.setServerURL;

AV.keepErrorRawMessage=function(value){
AV._sharedConfig.keepErrorRawMessage=value;
};

/**
 * Set a deadline for requests to complete.
 * Note that file upload requests are not affected.
 * @function AV.setRequestTimeout
 * @since 3.6.0
 * @param {number} ms
 */
AV.setRequestTimeout=function(ms){
AV._config.requestTimeout=ms;
};

// backword compatible
AV.initialize=AV.init;

var defineConfig=function defineConfig(property){
return(0,_defineProperty2.default)(AV,property,{
get:function get(){
return AV._config[property];
},
set:function set(value){
AV._config[property]=value;
}});

};

['applicationId','applicationKey','masterKey','hookKey'].forEach(defineConfig);

/***/},
/* 116 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(117);
var $Object=__webpack_require__(1).Object;
module.exports=function defineProperty(it,key,desc){
return $Object.defineProperty(it,key,desc);
};


/***/},
/* 117 */
/***/function(module,exports,__webpack_require__){

var $export=__webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(11),'Object',{defineProperty:__webpack_require__(7).f});


/***/},
/* 118 */
/***/function(module,exports,__webpack_require__){

"use strict";


var ajax=__webpack_require__(48);
var Cache=__webpack_require__(73);

function AppRouter(AV){
var _this=this;

this.AV=AV;
this.lockedUntil=0;
Cache.getAsync('serverURLs').then(function(data){
if(_this.disabled)return;
if(!data)return _this.lock(0);
var serverURLs=data.serverURLs,
lockedUntil=data.lockedUntil;

_this.AV._setServerURLs(serverURLs,false);
_this.lockedUntil=lockedUntil;
}).catch(function(){
return _this.lock(0);
});
}

AppRouter.prototype.disable=function disable(){
this.disabled=true;
};
AppRouter.prototype.lock=function lock(ttl){
this.lockedUntil=Date.now()+ttl;
};
AppRouter.prototype.refresh=function refresh(){
var _this2=this;

if(this.disabled)return;
if(Date.now()<this.lockedUntil)return;
this.lock(10);
var url='https://app-router.com/2/route';
return ajax({
method:'get',
url:url,
query:{
appId:this.AV.applicationId}}).

then(function(servers){
if(_this2.disabled)return;
var ttl=servers.ttl;
if(!ttl)throw new Error('missing ttl');
ttl=ttl*1000;
var protocal='https://';
var serverURLs={
push:protocal+servers.push_server,
stats:protocal+servers.stats_server,
engine:protocal+servers.engine_server,
api:protocal+servers.api_server};

_this2.AV._setServerURLs(serverURLs,false);
_this2.lock(ttl);
return Cache.setAsync('serverURLs',{
serverURLs:serverURLs,
lockedUntil:_this2.lockedUntil},
ttl);
}).catch(function(error){
// bypass all errors
console.warn('refresh server URLs failed: '+error.message);
_this2.lock(600);
});
};

module.exports=AppRouter;

/***/},
/* 119 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(21);
__webpack_require__(33);
module.exports=__webpack_require__(49).f('iterator');


/***/},
/* 120 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(121);
__webpack_require__(52);
__webpack_require__(126);
__webpack_require__(127);
module.exports=__webpack_require__(1).Symbol;


/***/},
/* 121 */
/***/function(module,exports,__webpack_require__){

"use strict";

// ECMAScript 6 symbols shim
var global=__webpack_require__(3);
var has=__webpack_require__(14);
var DESCRIPTORS=__webpack_require__(11);
var $export=__webpack_require__(10);
var redefine=__webpack_require__(55);
var META=__webpack_require__(122).KEY;
var $fails=__webpack_require__(24);
var shared=__webpack_require__(42);
var setToStringTag=__webpack_require__(32);
var uid=__webpack_require__(31);
var wks=__webpack_require__(4);
var wksExt=__webpack_require__(49);
var wksDefine=__webpack_require__(50);
var enumKeys=__webpack_require__(123);
var isArray=__webpack_require__(124);
var anObject=__webpack_require__(8);
var isObject=__webpack_require__(13);
var toObject=__webpack_require__(27);
var toIObject=__webpack_require__(15);
var toPrimitive=__webpack_require__(39);
var createDesc=__webpack_require__(25);
var _create=__webpack_require__(56);
var gOPNExt=__webpack_require__(125);
var $GOPD=__webpack_require__(77);
var $GOPS=__webpack_require__(75);
var $DP=__webpack_require__(7);
var $keys=__webpack_require__(30);
var gOPD=$GOPD.f;
var dP=$DP.f;
var gOPN=gOPNExt.f;
var $Symbol=global.Symbol;
var $JSON=global.JSON;
var _stringify=$JSON&&$JSON.stringify;
var PROTOTYPE='prototype';
var HIDDEN=wks('_hidden');
var TO_PRIMITIVE=wks('toPrimitive');
var isEnum={}.propertyIsEnumerable;
var SymbolRegistry=shared('symbol-registry');
var AllSymbols=shared('symbols');
var OPSymbols=shared('op-symbols');
var ObjectProto=Object[PROTOTYPE];
var USE_NATIVE=typeof $Symbol=='function'&&!!$GOPS.f;
var QObject=global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc=DESCRIPTORS&&$fails(function(){
return _create(dP({},'a',{
get:function get(){return dP(this,'a',{value:7}).a;}})).
a!=7;
})?function(it,key,D){
var protoDesc=gOPD(ObjectProto,key);
if(protoDesc)delete ObjectProto[key];
dP(it,key,D);
if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);
}:dP;

var wrap=function wrap(tag){
var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);
sym._k=tag;
return sym;
};

var isSymbol=USE_NATIVE&&typeof $Symbol.iterator=='symbol'?function(it){
return typeof it=='symbol';
}:function(it){
return it instanceof $Symbol;
};

var $defineProperty=function defineProperty(it,key,D){
if(it===ObjectProto)$defineProperty(OPSymbols,key,D);
anObject(it);
key=toPrimitive(key,true);
anObject(D);
if(has(AllSymbols,key)){
if(!D.enumerable){
if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));
it[HIDDEN][key]=true;
}else{
if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;
D=_create(D,{enumerable:createDesc(0,false)});
}return setSymbolDesc(it,key,D);
}return dP(it,key,D);
};
var $defineProperties=function defineProperties(it,P){
anObject(it);
var keys=enumKeys(P=toIObject(P));
var i=0;
var l=keys.length;
var key;
while(l>i){$defineProperty(it,key=keys[i++],P[key]);}
return it;
};
var $create=function create(it,P){
return P===undefined?_create(it):$defineProperties(_create(it),P);
};
var $propertyIsEnumerable=function propertyIsEnumerable(key){
var E=isEnum.call(this,key=toPrimitive(key,true));
if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;
return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;
};
var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){
it=toIObject(it);
key=toPrimitive(key,true);
if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;
var D=gOPD(it,key);
if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;
return D;
};
var $getOwnPropertyNames=function getOwnPropertyNames(it){
var names=gOPN(toIObject(it));
var result=[];
var i=0;
var key;
while(names.length>i){
if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);
}return result;
};
var $getOwnPropertySymbols=function getOwnPropertySymbols(it){
var IS_OP=it===ObjectProto;
var names=gOPN(IS_OP?OPSymbols:toIObject(it));
var result=[];
var i=0;
var key;
while(names.length>i){
if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);
}return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
$Symbol=function Symbol(){
if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
var tag=uid(arguments.length>0?arguments[0]:undefined);
var $set=function $set(value){
if(this===ObjectProto)$set.call(OPSymbols,value);
if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;
setSymbolDesc(this,tag,createDesc(1,value));
};
if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});
return wrap(tag);
};
redefine($Symbol[PROTOTYPE],'toString',function toString(){
return this._k;
});

$GOPD.f=$getOwnPropertyDescriptor;
$DP.f=$defineProperty;
__webpack_require__(76).f=gOPNExt.f=$getOwnPropertyNames;
__webpack_require__(51).f=$propertyIsEnumerable;
$GOPS.f=$getOwnPropertySymbols;

if(DESCRIPTORS&&!__webpack_require__(22)){
redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);
}

wksExt.f=function(name){
return wrap(wks(name));
};
}

$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});

for(var es6Symbols=
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.
split(','),j=0;es6Symbols.length>j;){wks(es6Symbols[j++]);}

for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;){wksDefine(wellKnownSymbols[k++]);}

$export($export.S+$export.F*!USE_NATIVE,'Symbol',{
// 19.4.2.1 Symbol.for(key)
'for':function _for(key){
return has(SymbolRegistry,key+='')?
SymbolRegistry[key]:
SymbolRegistry[key]=$Symbol(key);
},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function keyFor(sym){
if(!isSymbol(sym))throw TypeError(sym+' is not a symbol!');
for(var key in SymbolRegistry){if(SymbolRegistry[key]===sym)return key;}
},
useSetter:function useSetter(){setter=true;},
useSimple:function useSimple(){setter=false;}});


$export($export.S+$export.F*!USE_NATIVE,'Object',{
// 19.1.2.2 Object.create(O [, Properties])
create:$create,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:$defineProperty,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:$defineProperties,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$getOwnPropertyDescriptor,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:$getOwnPropertyNames,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$getOwnPropertySymbols});


// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES=$fails(function(){$GOPS.f(1);});

$export($export.S+$export.F*FAILS_ON_PRIMITIVES,'Object',{
getOwnPropertySymbols:function getOwnPropertySymbols(it){
return $GOPS.f(toObject(it));
}});


// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){
var S=$Symbol();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';
})),'JSON',{
stringify:function stringify(it){
var args=[it];
var i=1;
var replacer,$replacer;
while(arguments.length>i){args.push(arguments[i++]);}
$replacer=replacer=args[1];
if(!isObject(replacer)&&it===undefined||isSymbol(it))return;// IE8 returns string on undefined
if(!isArray(replacer))replacer=function replacer(key,value){
if(typeof $replacer=='function')value=$replacer.call(this,key,value);
if(!isSymbol(value))return value;
};
args[1]=replacer;
return _stringify.apply($JSON,args);
}});


// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE]||__webpack_require__(12)($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol,'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math,'Math',true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON,'JSON',true);


/***/},
/* 122 */
/***/function(module,exports,__webpack_require__){

var META=__webpack_require__(31)('meta');
var isObject=__webpack_require__(13);
var has=__webpack_require__(14);
var setDesc=__webpack_require__(7).f;
var id=0;
var isExtensible=Object.isExtensible||function(){
return true;
};
var FREEZE=!__webpack_require__(24)(function(){
return isExtensible(Object.preventExtensions({}));
});
var setMeta=function setMeta(it){
setDesc(it,META,{value:{
i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});
};
var fastKey=function fastKey(it,create){
// return primitive with prefix
if(!isObject(it))return typeof it=='symbol'?it:(typeof it=='string'?'S':'P')+it;
if(!has(it,META)){
// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';
// not necessary to add metadata
if(!create)return'E';
// add missing metadata
setMeta(it);
// return object ID
}return it[META].i;
};
var getWeak=function getWeak(it,create){
if(!has(it,META)){
// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;
// not necessary to add metadata
if(!create)return false;
// add missing metadata
setMeta(it);
// return hash weak collections IDs
}return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){
if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);
return it;
};
var meta=module.exports={
KEY:META,
NEED:false,
fastKey:fastKey,
getWeak:getWeak,
onFreeze:onFreeze};



/***/},
/* 123 */
/***/function(module,exports,__webpack_require__){

// all enumerable object keys, includes symbols
var getKeys=__webpack_require__(30);
var gOPS=__webpack_require__(75);
var pIE=__webpack_require__(51);
module.exports=function(it){
var result=getKeys(it);
var getSymbols=gOPS.f;
if(getSymbols){
var symbols=getSymbols(it);
var isEnum=pIE.f;
var i=0;
var key;
while(symbols.length>i){if(isEnum.call(it,key=symbols[i++]))result.push(key);}
}return result;
};


/***/},
/* 124 */
/***/function(module,exports,__webpack_require__){

// 7.2.2 IsArray(argument)
var cof=__webpack_require__(26);
module.exports=Array.isArray||function isArray(arg){
return cof(arg)=='Array';
};


/***/},
/* 125 */
/***/function(module,exports,__webpack_require__){

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject=__webpack_require__(15);
var gOPN=__webpack_require__(76).f;
var toString={}.toString;

var windowNames=typeof window=='object'&&window&&Object.getOwnPropertyNames?
Object.getOwnPropertyNames(window):[];

var getWindowNames=function getWindowNames(it){
try{
return gOPN(it);
}catch(e){
return windowNames.slice();
}
};

module.exports.f=function getOwnPropertyNames(it){
return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));
};


/***/},
/* 126 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(50)('asyncIterator');


/***/},
/* 127 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(50)('observable');


/***/},
/* 128 */
/***/function(module,exports,__webpack_require__){

"use strict";
// Copyright (c) 2015-2017 David M. Lee, II


/**
 * Local reference to TimeoutError
 * @private
 */
var TimeoutError;

/**
 * Rejects a promise with a {@link TimeoutError} if it does not settle within
 * the specified timeout.
 *
 * @param {Promise} promise The promise.
 * @param {number} timeoutMillis Number of milliseconds to wait on settling.
 * @returns {Promise} Either resolves/rejects with `promise`, or rejects with
 *                   `TimeoutError`, whichever settles first.
 */
var timeout=module.exports.timeout=function(promise,timeoutMillis){
var error=new TimeoutError(),
timeout;

return Promise.race([
promise,
new Promise(function(resolve,reject){
timeout=setTimeout(function(){
reject(error);
},timeoutMillis);
})]).
then(function(v){
clearTimeout(timeout);
return v;
},function(err){
clearTimeout(timeout);
throw err;
});
};

/**
 * Exception indicating that the timeout expired.
 */
TimeoutError=module.exports.TimeoutError=function(){
Error.call(this);
this.stack=Error().stack;
this.message='Timeout';
};

TimeoutError.prototype=Object.create(Error.prototype);
TimeoutError.prototype.name="TimeoutError";


/***/},
/* 129 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
var eventSplitter=/\s+/;
var slice=Array.prototype.slice;

/**
   * @class
   *
   * <p>AV.Events is a fork of Backbone's Events module, provided for your
   * convenience.</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * @private
   * @example
   * var object = {};
   * _.extend(object, AV.Events);
   * object.on('expand', function(){ alert('expanded'); });
   * object.trigger('expand');</pre></p>
   *
   */
AV.Events={
/**
     * Bind one or more space separated events, `events`, to a `callback`
     * function. Passing `"all"` will bind the callback to all events fired.
     */
on:function on(events,callback,context){
var calls,event,node,tail,list;
if(!callback){
return this;
}
events=events.split(eventSplitter);
calls=this._callbacks||(this._callbacks={});

// Create an immutable callback list, allowing traversal during
// modification.  The tail is an empty object that will always be used
// as the next node.
event=events.shift();
while(event){
list=calls[event];
node=list?list.tail:{};
node.next=tail={};
node.context=context;
node.callback=callback;
calls[event]={tail:tail,next:list?list.next:node};
event=events.shift();
}

return this;
},

/**
     * Remove one or many callbacks. If `context` is null, removes all callbacks
     * with that function. If `callback` is null, removes all callbacks for the
     * event. If `events` is null, removes all bound callbacks for all events.
     */
off:function off(events,callback,context){
var event,calls,node,tail,cb,ctx;

// No events, or removing *all* events.
if(!(calls=this._callbacks)){
return;
}
if(!(events||callback||context)){
delete this._callbacks;
return this;
}

// Loop through the listed events and contexts, splicing them out of the
// linked list of callbacks if appropriate.
events=events?events.split(eventSplitter):_.keys(calls);
event=events.shift();
while(event){
node=calls[event];
delete calls[event];
if(!node||!(callback||context)){
continue;
}
// Create a new list, omitting the indicated callbacks.
tail=node.tail;
node=node.next;
while(node!==tail){
cb=node.callback;
ctx=node.context;
if(callback&&cb!==callback||context&&ctx!==context){
this.on(event,cb,ctx);
}
node=node.next;
}
event=events.shift();
}

return this;
},

/**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
trigger:function trigger(events){
var event,node,calls,tail,args,all,rest;
if(!(calls=this._callbacks)){
return this;
}
all=calls.all;
events=events.split(eventSplitter);
rest=slice.call(arguments,1);

// For each event, walk through the linked list of callbacks twice,
// first to trigger the event, then to trigger any `"all"` callbacks.
event=events.shift();
while(event){
node=calls[event];
if(node){
tail=node.tail;
while((node=node.next)!==tail){
node.callback.apply(node.context||this,rest);
}
}
node=all;
if(node){
tail=node.tail;
args=[event].concat(rest);
while((node=node.next)!==tail){
node.callback.apply(node.context||this,args);
}
}
event=events.shift();
}

return this;
}};


/**
   * @function
   */
AV.Events.bind=AV.Events.on;

/**
   * @function
   */
AV.Events.unbind=AV.Events.off;
};

/***/},
/* 130 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

/*global navigator: false */
module.exports=function(AV){
/**
   * Creates a new GeoPoint with any of the following forms:<br>
   * @example
   * new GeoPoint(otherGeoPoint)
   * new GeoPoint(30, 30)
   * new GeoPoint([30, 30])
   * new GeoPoint({latitude: 30, longitude: 30})
   * new GeoPoint()  // defaults to (0, 0)
   * @class
   *
   * <p>Represents a latitude / longitude point that may be associated
   * with a key in a AVObject or used as a reference point for geo queries.
   * This allows proximity-based queries on the key.</p>
   *
   * <p>Only one key in a class may contain a GeoPoint.</p>
   *
   * <p>Example:<pre>
   *   var point = new AV.GeoPoint(30.0, -20.0);
   *   var object = new AV.Object("PlaceObject");
   *   object.set("location", point);
   *   object.save();</pre></p>
   */
AV.GeoPoint=function(arg1,arg2){
if(_.isArray(arg1)){
AV.GeoPoint._validate(arg1[0],arg1[1]);
this.latitude=arg1[0];
this.longitude=arg1[1];
}else if(_.isObject(arg1)){
AV.GeoPoint._validate(arg1.latitude,arg1.longitude);
this.latitude=arg1.latitude;
this.longitude=arg1.longitude;
}else if(_.isNumber(arg1)&&_.isNumber(arg2)){
AV.GeoPoint._validate(arg1,arg2);
this.latitude=arg1;
this.longitude=arg2;
}else{
this.latitude=0;
this.longitude=0;
}

// Add properties so that anyone using Webkit or Mozilla will get an error
// if they try to set values that are out of bounds.
var self=this;
if(this.__defineGetter__&&this.__defineSetter__){
// Use _latitude and _longitude to actually store the values, and add
// getters and setters for latitude and longitude.
this._latitude=this.latitude;
this._longitude=this.longitude;
this.__defineGetter__('latitude',function(){
return self._latitude;
});
this.__defineGetter__('longitude',function(){
return self._longitude;
});
this.__defineSetter__('latitude',function(val){
AV.GeoPoint._validate(val,self.longitude);
self._latitude=val;
});
this.__defineSetter__('longitude',function(val){
AV.GeoPoint._validate(self.latitude,val);
self._longitude=val;
});
}
};

/**
   * @lends AV.GeoPoint.prototype
   * @property {float} latitude North-south portion of the coordinate, in range
   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
   * @property {float} longitude East-west portion of the coordinate, in range
   *   [-180, 180].  Throws if set out of range in a modern browser.
   */

/**
   * Throws an exception if the given lat-long is out of bounds.
   * @private
   */
AV.GeoPoint._validate=function(latitude,longitude){
if(latitude<-90.0){
throw new Error('AV.GeoPoint latitude '+latitude+' < -90.0.');
}
if(latitude>90.0){
throw new Error('AV.GeoPoint latitude '+latitude+' > 90.0.');
}
if(longitude<-180.0){
throw new Error('AV.GeoPoint longitude '+longitude+' < -180.0.');
}
if(longitude>180.0){
throw new Error('AV.GeoPoint longitude '+longitude+' > 180.0.');
}
};

/**
   * Creates a GeoPoint with the user's current location, if available.
   * @return {Promise.<AV.GeoPoint>}
   */
AV.GeoPoint.current=function(){
return new _promise2.default(function(resolve,reject){
navigator.geolocation.getCurrentPosition(function(location){
resolve(new AV.GeoPoint({
latitude:location.coords.latitude,
longitude:location.coords.longitude}));

},reject);
});
};

_.extend(AV.GeoPoint.prototype,
/** @lends AV.GeoPoint.prototype */{
/**
     * Returns a JSON representation of the GeoPoint, suitable for AV.
     * @return {Object}
     */
toJSON:function toJSON(){
AV.GeoPoint._validate(this.latitude,this.longitude);
return{
__type:'GeoPoint',
latitude:this.latitude,
longitude:this.longitude};

},

/**
     * Returns the distance from this GeoPoint to another in radians.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
radiansTo:function radiansTo(point){
var d2r=Math.PI/180.0;
var lat1rad=this.latitude*d2r;
var long1rad=this.longitude*d2r;
var lat2rad=point.latitude*d2r;
var long2rad=point.longitude*d2r;
var deltaLat=lat1rad-lat2rad;
var deltaLong=long1rad-long2rad;
var sinDeltaLatDiv2=Math.sin(deltaLat/2);
var sinDeltaLongDiv2=Math.sin(deltaLong/2);
// Square of half the straight line chord distance between both points.
var a=sinDeltaLatDiv2*sinDeltaLatDiv2+Math.cos(lat1rad)*Math.cos(lat2rad)*sinDeltaLongDiv2*sinDeltaLongDiv2;
a=Math.min(1.0,a);
return 2*Math.asin(Math.sqrt(a));
},

/**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
kilometersTo:function kilometersTo(point){
return this.radiansTo(point)*6371.0;
},

/**
     * Returns the distance from this GeoPoint to another in miles.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
milesTo:function milesTo(point){
return this.radiansTo(point)*3958.8;
}});

};

/***/},
/* 131 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
var PUBLIC_KEY='*';

/**
   * Creates a new ACL.
   * If no argument is given, the ACL has no permissions for anyone.
   * If the argument is a AV.User, the ACL will have read and write
   *   permission for only that user.
   * If the argument is any other JSON object, that object will be interpretted
   *   as a serialized ACL created with toJSON().
   * @see AV.Object#setACL
   * @class
   *
   * <p>An ACL, or Access Control List can be added to any
   * <code>AV.Object</code> to restrict access to only a subset of users
   * of your application.</p>
   */
AV.ACL=function(arg1){
var self=this;
self.permissionsById={};
if(_.isObject(arg1)){
if(arg1 instanceof AV.User){
self.setReadAccess(arg1,true);
self.setWriteAccess(arg1,true);
}else{
if(_.isFunction(arg1)){
throw new Error('AV.ACL() called with a function.  Did you forget ()?');
}
AV._objectEach(arg1,function(accessList,userId){
if(!_.isString(userId)){
throw new Error('Tried to create an ACL with an invalid userId.');
}
self.permissionsById[userId]={};
AV._objectEach(accessList,function(allowed,permission){
if(permission!=='read'&&permission!=='write'){
throw new Error('Tried to create an ACL with an invalid permission type.');
}
if(!_.isBoolean(allowed)){
throw new Error('Tried to create an ACL with an invalid permission value.');
}
self.permissionsById[userId][permission]=allowed;
});
});
}
}
};

/**
   * Returns a JSON-encoded version of the ACL.
   * @return {Object}
   */
AV.ACL.prototype.toJSON=function(){
return _.clone(this.permissionsById);
};

AV.ACL.prototype._setAccess=function(accessType,userId,allowed){
if(userId instanceof AV.User){
userId=userId.id;
}else if(userId instanceof AV.Role){
userId='role:'+userId.getName();
}
if(!_.isString(userId)){
throw new Error('userId must be a string.');
}
if(!_.isBoolean(allowed)){
throw new Error('allowed must be either true or false.');
}
var permissions=this.permissionsById[userId];
if(!permissions){
if(!allowed){
// The user already doesn't have this permission, so no action needed.
return;
}else{
permissions={};
this.permissionsById[userId]=permissions;
}
}

if(allowed){
this.permissionsById[userId][accessType]=true;
}else{
delete permissions[accessType];
if(_.isEmpty(permissions)){
delete this.permissionsById[userId];
}
}
};

AV.ACL.prototype._getAccess=function(accessType,userId){
if(userId instanceof AV.User){
userId=userId.id;
}else if(userId instanceof AV.Role){
userId='role:'+userId.getName();
}
var permissions=this.permissionsById[userId];
if(!permissions){
return false;
}
return permissions[accessType]?true:false;
};

/**
   * Set whether the given user is allowed to read this object.
   * @param userId An instance of AV.User or its objectId.
   * @param {Boolean} allowed Whether that user should have read access.
   */
AV.ACL.prototype.setReadAccess=function(userId,allowed){
this._setAccess('read',userId,allowed);
};

/**
   * Get whether the given user id is *explicitly* allowed to read this object.
   * Even if this returns false, the user may still be able to access it if
   * getPublicReadAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */
AV.ACL.prototype.getReadAccess=function(userId){
return this._getAccess('read',userId);
};

/**
   * Set whether the given user id is allowed to write this object.
   * @param userId An instance of AV.User or its objectId, or a AV.Role..
   * @param {Boolean} allowed Whether that user should have write access.
   */
AV.ACL.prototype.setWriteAccess=function(userId,allowed){
this._setAccess('write',userId,allowed);
};

/**
   * Get whether the given user id is *explicitly* allowed to write this object.
   * Even if this returns false, the user may still be able to write it if
   * getPublicWriteAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */
AV.ACL.prototype.getWriteAccess=function(userId){
return this._getAccess('write',userId);
};

/**
   * Set whether the public is allowed to read this object.
   * @param {Boolean} allowed
   */
AV.ACL.prototype.setPublicReadAccess=function(allowed){
this.setReadAccess(PUBLIC_KEY,allowed);
};

/**
   * Get whether the public is allowed to read this object.
   * @return {Boolean}
   */
AV.ACL.prototype.getPublicReadAccess=function(){
return this.getReadAccess(PUBLIC_KEY);
};

/**
   * Set whether the public is allowed to write this object.
   * @param {Boolean} allowed
   */
AV.ACL.prototype.setPublicWriteAccess=function(allowed){
this.setWriteAccess(PUBLIC_KEY,allowed);
};

/**
   * Get whether the public is allowed to write this object.
   * @return {Boolean}
   */
AV.ACL.prototype.getPublicWriteAccess=function(){
return this.getWriteAccess(PUBLIC_KEY);
};

/**
   * Get whether users belonging to the given role are allowed
   * to read this object. Even if this returns false, the role may
   * still be able to write it if a parent role has read access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has read access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.getRoleReadAccess=function(role){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
return this.getReadAccess('role:'+role);
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Get whether users belonging to the given role are allowed
   * to write this object. Even if this returns false, the role may
   * still be able to write it if a parent role has write access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has write access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.getRoleWriteAccess=function(role){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
return this.getWriteAccess('role:'+role);
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Set whether users belonging to the given role are allowed
   * to read this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can read this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.setRoleReadAccess=function(role,allowed){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
this.setReadAccess('role:'+role,allowed);
return;
}
throw new Error('role must be a AV.Role or a String');
};

/**
   * Set whether users belonging to the given role are allowed
   * to write this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can write this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */
AV.ACL.prototype.setRoleWriteAccess=function(role,allowed){
if(role instanceof AV.Role){
// Normalize to the String name
role=role.getName();
}
if(_.isString(role)){
this.setWriteAccess('role:'+role,allowed);
return;
}
throw new Error('role must be a AV.Role or a String');
};
};

/***/},
/* 132 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
/**
   * @private
   * @class
   * A AV.Op is an atomic operation that can be applied to a field in a
   * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
   * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
   * is a AV.Op.Unset. These operations are stored in a AV.Object and
   * sent to the server as part of <code>object.save()</code> operations.
   * Instances of AV.Op should be immutable.
   *
   * You should not create subclasses of AV.Op or instantiate AV.Op
   * directly.
   */
AV.Op=function(){
this._initialize.apply(this,arguments);
};

_.extend(AV.Op.prototype,
/** @lends AV.Op.prototype */{
_initialize:function _initialize(){}});


_.extend(AV.Op,{
/**
     * To create a new Op, call AV.Op._extend();
     * @private
     */
_extend:AV._extend,

// A map of __op string to decoder function.
_opDecoderMap:{},

/**
     * Registers a function to convert a json object with an __op field into an
     * instance of a subclass of AV.Op.
     * @private
     */
_registerDecoder:function _registerDecoder(opName,decoder){
AV.Op._opDecoderMap[opName]=decoder;
},

/**
     * Converts a json object into an instance of a subclass of AV.Op.
     * @private
     */
_decode:function _decode(json){
var decoder=AV.Op._opDecoderMap[json.__op];
if(decoder){
return decoder(json);
}else{
return undefined;
}
}});


/*
   * Add a handler for Batch ops.
   */
AV.Op._registerDecoder('Batch',function(json){
var op=null;
AV._arrayEach(json.ops,function(nextOp){
nextOp=AV.Op._decode(nextOp);
op=nextOp._mergeWithPrevious(op);
});
return op;
});

/**
   * @private
   * @class
   * A Set operation indicates that either the field was changed using
   * AV.Object.set, or it is a mutable container that was detected as being
   * changed.
   */
AV.Op.Set=AV.Op._extend(
/** @lends AV.Op.Set.prototype */{
_initialize:function _initialize(value){
this._value=value;
},

/**
     * Returns the new value of this field after the set.
     */
value:function value(){
return this._value;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return AV._encode(this.value());
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
return this;
},

_estimate:function _estimate(oldValue){
return this.value();
}});


/**
   * A sentinel value that is returned by AV.Op.Unset._estimate to
   * indicate the field should be deleted. Basically, if you find _UNSET as a
   * value in your object, you should remove that key.
   */
AV.Op._UNSET={};

/**
   * @private
   * @class
   * An Unset operation indicates that this field has been deleted from the
   * object.
   */
AV.Op.Unset=AV.Op._extend(
/** @lends AV.Op.Unset.prototype */{
/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Delete'};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
return this;
},

_estimate:function _estimate(oldValue){
return AV.Op._UNSET;
}});


AV.Op._registerDecoder('Delete',function(json){
return new AV.Op.Unset();
});

/**
   * @private
   * @class
   * An Increment is an atomic operation where the numeric value for the field
   * will be increased by a given amount.
   */
AV.Op.Increment=AV.Op._extend(
/** @lends AV.Op.Increment.prototype */{
_initialize:function _initialize(amount){
this._amount=amount;
},

/**
     * Returns the amount to increment by.
     * @return {Number} the amount to increment by.
     */
amount:function amount(){
return this._amount;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Increment',amount:this._amount};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.amount());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()+this.amount());
}else if(previous instanceof AV.Op.Increment){
return new AV.Op.Increment(this.amount()+previous.amount());
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return this.amount();
}
return oldValue+this.amount();
}});


AV.Op._registerDecoder('Increment',function(json){
return new AV.Op.Increment(json.amount);
});

/**
   * @private
   * @class
   * BitAnd is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitAnd=AV.Op._extend(
/** @lends AV.Op.BitAnd.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitAnd',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(0);
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()&this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue&this.value();
}});


AV.Op._registerDecoder('BitAnd',function(json){
return new AV.Op.BitAnd(json.value);
});

/**
   * @private
   * @class
   * BitOr is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitOr=AV.Op._extend(
/** @lends AV.Op.BitOr.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitOr',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.value());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()|this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue|this.value();
}});


AV.Op._registerDecoder('BitOr',function(json){
return new AV.Op.BitOr(json.value);
});

/**
   * @private
   * @class
   * BitXor is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */
AV.Op.BitXor=AV.Op._extend(
/** @lends AV.Op.BitXor.prototype */{
_initialize:function _initialize(value){
this._value=value;
},
value:function value(){
return this._value;
},


/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'BitXor',value:this.value()};
},
_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.value());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(previous.value()^this.value());
}else{
throw new Error('Op is invalid after previous op.');
}
},
_estimate:function _estimate(oldValue){
return oldValue^this.value();
}});


AV.Op._registerDecoder('BitXor',function(json){
return new AV.Op.BitXor(json.value);
});

/**
   * @private
   * @class
   * Add is an atomic operation where the given objects will be appended to the
   * array that is stored in this field.
   */
AV.Op.Add=AV.Op._extend(
/** @lends AV.Op.Add.prototype */{
_initialize:function _initialize(objects){
this._objects=objects;
},

/**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Add',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.objects());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.Add){
return new AV.Op.Add(previous.objects().concat(this.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return _.clone(this.objects());
}else{
return oldValue.concat(this.objects());
}
}});


AV.Op._registerDecoder('Add',function(json){
return new AV.Op.Add(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * AddUnique is an atomic operation where the given items will be appended to
   * the array that is stored in this field only if they were not already
   * present in the array.
   */
AV.Op.AddUnique=AV.Op._extend(
/** @lends AV.Op.AddUnique.prototype */{
_initialize:function _initialize(objects){
this._objects=_.uniq(objects);
},

/**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'AddUnique',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return new AV.Op.Set(this.objects());
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.AddUnique){
return new AV.Op.AddUnique(this._estimate(previous.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return _.clone(this.objects());
}else{
// We can't just take the _.uniq(_.union(...)) of oldValue and
// this.objects, because the uniqueness may not apply to oldValue
// (especially if the oldValue was set via .set())
var newValue=_.clone(oldValue);
AV._arrayEach(this.objects(),function(obj){
if(obj instanceof AV.Object&&obj.id){
var matchingObj=_.find(newValue,function(anObj){
return anObj instanceof AV.Object&&anObj.id===obj.id;
});
if(!matchingObj){
newValue.push(obj);
}else{
var index=_.indexOf(newValue,matchingObj);
newValue[index]=obj;
}
}else if(!_.contains(newValue,obj)){
newValue.push(obj);
}
});
return newValue;
}
}});


AV.Op._registerDecoder('AddUnique',function(json){
return new AV.Op.AddUnique(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * Remove is an atomic operation where the given objects will be removed from
   * the array that is stored in this field.
   */
AV.Op.Remove=AV.Op._extend(
/** @lends AV.Op.Remove.prototype */{
_initialize:function _initialize(objects){
this._objects=_.uniq(objects);
},

/**
     * Returns the objects to be removed from the array.
     * @return {Array} The objects to be removed from the array.
     */
objects:function objects(){
return this._objects;
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__op:'Remove',objects:AV._encode(this.objects())};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
return previous;
}else if(previous instanceof AV.Op.Set){
return new AV.Op.Set(this._estimate(previous.value()));
}else if(previous instanceof AV.Op.Remove){
return new AV.Op.Remove(_.union(previous.objects(),this.objects()));
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue){
if(!oldValue){
return[];
}else{
var newValue=_.difference(oldValue,this.objects());
// If there are saved AV Objects being removed, also remove them.
AV._arrayEach(this.objects(),function(obj){
if(obj instanceof AV.Object&&obj.id){
newValue=_.reject(newValue,function(other){
return other instanceof AV.Object&&other.id===obj.id;
});
}
});
return newValue;
}
}});


AV.Op._registerDecoder('Remove',function(json){
return new AV.Op.Remove(AV._decode(json.objects));
});

/**
   * @private
   * @class
   * A Relation operation indicates that the field is an instance of
   * AV.Relation, and objects are being added to, or removed from, that
   * relation.
   */
AV.Op.Relation=AV.Op._extend(
/** @lends AV.Op.Relation.prototype */{
_initialize:function _initialize(adds,removes){
this._targetClassName=null;

var self=this;

var pointerToId=function pointerToId(object){
if(object instanceof AV.Object){
if(!object.id){
throw new Error("You can't add an unsaved AV.Object to a relation.");
}
if(!self._targetClassName){
self._targetClassName=object.className;
}
if(self._targetClassName!==object.className){
throw new Error('Tried to create a AV.Relation with 2 different types: '+self._targetClassName+' and '+object.className+'.');
}
return object.id;
}
return object;
};

this.relationsToAdd=_.uniq(_.map(adds,pointerToId));
this.relationsToRemove=_.uniq(_.map(removes,pointerToId));
},

/**
     * Returns an array of unfetched AV.Object that are being added to the
     * relation.
     * @return {Array}
     */
added:function added(){
var self=this;
return _.map(this.relationsToAdd,function(objectId){
var object=AV.Object._create(self._targetClassName);
object.id=objectId;
return object;
});
},

/**
     * Returns an array of unfetched AV.Object that are being removed from
     * the relation.
     * @return {Array}
     */
removed:function removed(){
var self=this;
return _.map(this.relationsToRemove,function(objectId){
var object=AV.Object._create(self._targetClassName);
object.id=objectId;
return object;
});
},

/**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
toJSON:function toJSON(){
var adds=null;
var removes=null;
var self=this;
var idToPointer=function idToPointer(id){
return{
__type:'Pointer',
className:self._targetClassName,
objectId:id};

};
var pointers=null;
if(this.relationsToAdd.length>0){
pointers=_.map(this.relationsToAdd,idToPointer);
adds={__op:'AddRelation',objects:pointers};
}

if(this.relationsToRemove.length>0){
pointers=_.map(this.relationsToRemove,idToPointer);
removes={__op:'RemoveRelation',objects:pointers};
}

if(adds&&removes){
return{__op:'Batch',ops:[adds,removes]};
}

return adds||removes||{};
},

_mergeWithPrevious:function _mergeWithPrevious(previous){
if(!previous){
return this;
}else if(previous instanceof AV.Op.Unset){
throw new Error("You can't modify a relation after deleting it.");
}else if(previous instanceof AV.Op.Relation){
if(previous._targetClassName&&previous._targetClassName!==this._targetClassName){
throw new Error('Related object must be of class '+previous._targetClassName+', but '+this._targetClassName+' was passed in.');
}
var newAdd=_.union(_.difference(previous.relationsToAdd,this.relationsToRemove),this.relationsToAdd);
var newRemove=_.union(_.difference(previous.relationsToRemove,this.relationsToAdd),this.relationsToRemove);

var newRelation=new AV.Op.Relation(newAdd,newRemove);
newRelation._targetClassName=this._targetClassName;
return newRelation;
}else{
throw new Error('Op is invalid after previous op.');
}
},

_estimate:function _estimate(oldValue,object,key){
if(!oldValue){
var relation=new AV.Relation(object,key);
relation.targetClassName=this._targetClassName;
}else if(oldValue instanceof AV.Relation){
if(this._targetClassName){
if(oldValue.targetClassName){
if(oldValue.targetClassName!==this._targetClassName){
throw new Error('Related object must be a '+oldValue.targetClassName+', but a '+this._targetClassName+' was passed in.');
}
}else{
oldValue.targetClassName=this._targetClassName;
}
}
return oldValue;
}else{
throw new Error('Op is invalid after previous op.');
}
}});


AV.Op._registerDecoder('AddRelation',function(json){
return new AV.Op.Relation(AV._decode(json.objects),[]);
});
AV.Op._registerDecoder('RemoveRelation',function(json){
return new AV.Op.Relation([],AV._decode(json.objects));
});
};

/***/},
/* 133 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

module.exports=function(AV){
/**
   * Creates a new Relation for the given parent object and key. This
   * constructor should rarely be used directly, but rather created by
   * {@link AV.Object#relation}.
   * @param {AV.Object} parent The parent of this relation.
   * @param {String} key The key for this relation on the parent.
   * @see AV.Object#relation
   * @class
   *
   * <p>
   * A class that is used to access all of the children of a many-to-many
   * relationship.  Each instance of AV.Relation is associated with a
   * particular parent object and key.
   * </p>
   */
AV.Relation=function(parent,key){
if(!_.isString(key)){
throw new TypeError('key must be a string');
}
this.parent=parent;
this.key=key;
this.targetClassName=null;
};

/**
   * Creates a query that can be used to query the parent objects in this relation.
   * @param {String} parentClass The parent class or name.
   * @param {String} relationKey The relation field key in parent.
   * @param {AV.Object} child The child object.
   * @return {AV.Query}
   */
AV.Relation.reverseQuery=function(parentClass,relationKey,child){
var query=new AV.Query(parentClass);
query.equalTo(relationKey,child._toPointer());
return query;
};

_.extend(AV.Relation.prototype,
/** @lends AV.Relation.prototype */{
/**
     * Makes sure that this relation has the right parent and key.
     * @private
     */
_ensureParentAndKey:function _ensureParentAndKey(parent,key){
this.parent=this.parent||parent;
this.key=this.key||key;
if(this.parent!==parent){
throw new Error('Internal Error. Relation retrieved from two different Objects.');
}
if(this.key!==key){
throw new Error('Internal Error. Relation retrieved from two different keys.');
}
},

/**
     * Adds a AV.Object or an array of AV.Objects to the relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to add.
     */
add:function add(objects){
if(!_.isArray(objects)){
objects=[objects];
}

var change=new AV.Op.Relation(objects,[]);
this.parent.set(this.key,change);
this.targetClassName=change._targetClassName;
},

/**
     * Removes a AV.Object or an array of AV.Objects from this relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to remove.
     */
remove:function remove(objects){
if(!_.isArray(objects)){
objects=[objects];
}

var change=new AV.Op.Relation([],objects);
this.parent.set(this.key,change);
this.targetClassName=change._targetClassName;
},

/**
     * Returns a JSON version of the object suitable for saving to disk.
     * @return {Object}
     */
toJSON:function toJSON(){
return{__type:'Relation',className:this.targetClassName};
},

/**
     * Returns a AV.Query that is limited to objects in this
     * relation.
     * @return {AV.Query}
     */
query:function query(){
var targetClass;
var query;
if(!this.targetClassName){
targetClass=AV.Object._getSubclass(this.parent.className);
query=new AV.Query(targetClass);
query._defaultParams.redirectClassNameForKey=this.key;
}else{
targetClass=AV.Object._getSubclass(this.targetClassName);
query=new AV.Query(targetClass);
}
query._addCondition('$relatedTo','object',this.parent._toPointer());
query._addCondition('$relatedTo','key',this.key);

return query;
}});

};

/***/},
/* 134 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var cos=__webpack_require__(135);
var qiniu=__webpack_require__(136);
var s3=__webpack_require__(137);
var AVError=__webpack_require__(16);
var AVRequest=__webpack_require__(5)._request;

var _require=__webpack_require__(6),
tap=_require.tap,
transformFetchOptions=_require.transformFetchOptions;

var debug=__webpack_require__(19)('leancloud:file');
var parseBase64=__webpack_require__(141);

module.exports=function(AV){
var hexOctet=function hexOctet(){
return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
};

// port from browserify path module
// since react-native packager won't shim node modules.
var extname=function extname(path){
if(!_.isString(path))return'';
return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
};

var b64Digit=function b64Digit(number){
if(number<26){
return String.fromCharCode(65+number);
}
if(number<52){
return String.fromCharCode(97+(number-26));
}
if(number<62){
return String.fromCharCode(48+(number-52));
}
if(number===62){
return'+';
}
if(number===63){
return'/';
}
throw new Error('Tried to encode large digit '+number+' in base64.');
};

var encodeBase64=function encodeBase64(array){
var chunks=[];
chunks.length=Math.ceil(array.length/3);
_.times(chunks.length,function(i){
var b1=array[i*3];
var b2=array[i*3+1]||0;
var b3=array[i*3+2]||0;

var has2=i*3+1<array.length;
var has3=i*3+2<array.length;

chunks[i]=[b64Digit(b1>>2&0x3f),b64Digit(b1<<4&0x30|b2>>4&0x0f),has2?b64Digit(b2<<2&0x3c|b3>>6&0x03):'=',has3?b64Digit(b3&0x3f):'='].join('');
});
return chunks.join('');
};

/**
   * An AV.File is a local representation of a file that is saved to the AV
   * cloud.
   * @param name {String} The file's name. This will change to a unique value
   *     once the file has finished saving.
   * @param data {Array} The data for the file, as either:
   *     1. an Array of byte value Numbers, or
   *     2. an Object like { base64: "..." } with a base64-encoded String.
   *     3. a Blob(File) selected with a file upload control in a browser.
   *     4. an Object like { blob: {uri: "..."} } that mimics Blob
   *        in some non-browser environments such as React Native.
   *     5. a Buffer in Node.js runtime.
   *     6. a Stream in Node.js runtime.
   *
   *        For example:<pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var file = new AV.File(name, file);
   *   file.save().then(function() {
   *     // The file has been saved to AV.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to AV.
   *   });
   * }</pre>
   *
   * @class
   * @param [mimeType] {String} Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   */
AV.File=function(name,data,mimeType){
this.attributes={
name:name,
url:'',
metaData:{},
// 用来存储转换后要上传的 base64 String
base64:''};


if(_.isString(data)){
throw new TypeError('Creating an AV.File from a String is not yet supported.');
}
if(_.isArray(data)){
this.attributes.metaData.size=data.length;
data={base64:encodeBase64(data)};
}

this._extName='';
this._data=data;
this._uploadHeaders={};

if(data&&data.blob&&typeof data.blob.uri==='string'){
this._extName=extname(data.blob.uri);
}

if(typeof Blob!=='undefined'&&data instanceof Blob){
if(data.size){
this.attributes.metaData.size=data.size;
}
if(data.name){
this._extName=extname(data.name);
}
}

var owner=void 0;
if(data&&data.owner){
owner=data.owner;
}else if(!AV._config.disableCurrentUser){
try{
owner=AV.User.current();
}catch(error){
if('SYNC_API_NOT_AVAILABLE'!==error.code){
throw error;
}
}
}

this.attributes.metaData.owner=owner?owner.id:'unknown';

this.set('mime_type',mimeType);
};

/**
   * Creates a fresh AV.File object with exists url for saving to AVOS Cloud.
   * @param {String} name the file name
   * @param {String} url the file url.
   * @param {Object} [metaData] the file metadata object.
   * @param {String} [type] Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   * @return {AV.File} the file object
   */
AV.File.withURL=function(name,url,metaData,type){
if(!name||!url){
throw new Error('Please provide file name and url');
}
var file=new AV.File(name,null,type);
//copy metaData properties to file.
if(metaData){
for(var prop in metaData){
if(!file.attributes.metaData[prop])file.attributes.metaData[prop]=metaData[prop];
}
}
file.attributes.url=url;
//Mark the file is from external source.
file.attributes.metaData.__source='external';
file.attributes.metaData.size=0;
return file;
};

/**
   * Creates a file object with exists objectId.
   * @param {String} objectId The objectId string
   * @return {AV.File} the file object
   */
AV.File.createWithoutData=function(objectId){
var file=new AV.File();
file.id=objectId;
return file;
};

_.extend(AV.File.prototype,
/** @lends AV.File.prototype */{
className:'_File',

_toFullJSON:function _toFullJSON(seenObjects){
var _this=this;

var full=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

var json=_.clone(this.attributes);
AV._objectEach(json,function(val,key){
json[key]=AV._encode(val,seenObjects,undefined,full);
});
AV._objectEach(this._operations,function(val,key){
json[key]=val;
});

if(_.has(this,'id')){
json.objectId=this.id;
}
_(['createdAt','updatedAt']).each(function(key){
if(_.has(_this,key)){
var val=_this[key];
json[key]=_.isDate(val)?val.toJSON():val;
}
});
if(full){
json.__type='File';
}
return json;
},


/**
     * Returns a JSON version of the file with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
toFullJSON:function toFullJSON(){
var seenObjects=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

return this._toFullJSON(seenObjects);
},


/**
     * Returns a JSON version of the object.
     * @return {Object}
     */
toJSON:function toJSON(key,holder){
var seenObjects=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[this];

return this._toFullJSON(seenObjects,false);
},


/**
     * Gets a Pointer referencing this file.
     * @private
     */
_toPointer:function _toPointer(){
return{
__type:'Pointer',
className:this.className,
objectId:this.id};

},


/**
     * Returns the ACL for this file.
     * @returns {AV.ACL} An instance of AV.ACL.
     */
getACL:function getACL(){
return this._acl;
},


/**
     * Sets the ACL to be used for this file.
     * @param {AV.ACL} acl An instance of AV.ACL.
     */
setACL:function setACL(acl){
if(!(acl instanceof AV.ACL)){
return new AVError(AVError.OTHER_CAUSE,'ACL must be a AV.ACL.');
}
this._acl=acl;
return this;
},


/**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     */
name:function name(){
return this.get('name');
},


/**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a AV.Object.
     * @return {String}
     */
url:function url(){
return this.get('url');
},


/**
     * Gets the attributs of the file object.
     * @param {String} The attribute name which want to get.
     * @returns {Any}
     */
get:function get(attrName){
switch(attrName){
case'objectId':
return this.id;
case'url':
case'name':
case'mime_type':
case'metaData':
case'createdAt':
case'updatedAt':
return this.attributes[attrName];
default:
return this.attributes.metaData[attrName];}

},


/**
     * Set the metaData of the file object.
     * @param {Object} Object is an key value Object for setting metaData.
     * @param {String} attr is an optional metadata key.
     * @param {Object} value is an optional metadata value.
     * @returns {String|Number|Array|Object}
     */
set:function set(){
var _this2=this;

var set=function set(attrName,value){
switch(attrName){
case'name':
case'url':
case'mime_type':
case'base64':
case'metaData':
_this2.attributes[attrName]=value;
break;
default:
// File 并非一个 AVObject，不能完全自定义其他属性，所以只能都放在 metaData 上面
_this2.attributes.metaData[attrName]=value;
break;}

};

for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

switch(args.length){
case 1:
// 传入一个 Object
for(var k in args[0]){
set(k,args[0][k]);
}
break;
case 2:
set(args[0],args[1]);
break;}

return this;
},


/**
     * Set a header for the upload request.
     * For more infomation, go to https://url.leanapp.cn/avfile-upload-headers
     *
     * @param {String} key header key
     * @param {String} value header value
     * @return {AV.File} this
     */
setUploadHeader:function setUploadHeader(key,value){
this._uploadHeaders[key]=value;
return this;
},


/**
     * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
     * metadata value if a key is given.Set metadata value if key and value are both given.</p>
     * <p><pre>
     *  var metadata = file.metaData(); //Get metadata JSON object.
     *  var size = file.metaData('size');  // Get the size metadata value.
     *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
     *</pre></p>
     * @return {Object} The file's metadata JSON object.
     * @param {String} attr an optional metadata key.
     * @param {Object} value an optional metadata value.
     **/
metaData:function metaData(attr,value){
if(attr&&value){
this.attributes.metaData[attr]=value;
return this;
}else if(attr&&!value){
return this.attributes.metaData[attr];
}else{
return this.attributes.metaData;
}
},


/**
     * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
     * @return {String} 缩略图URL
     * @param {Number} width 宽度，单位：像素
     * @param {Number} heigth 高度，单位：像素
     * @param {Number} quality 质量，1-100的数字，默认100
     * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
     * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
     */

thumbnailURL:function thumbnailURL(width,height){
var quality=arguments.length>2&&arguments[2]!==undefined?arguments[2]:100;
var scaleToFit=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;
var fmt=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'png';

var url=this.attributes.url;
if(!url){
throw new Error('Invalid url.');
}
if(!width||!height||width<=0||height<=0){
throw new Error('Invalid width or height value.');
}
if(quality<=0||quality>100){
throw new Error('Invalid quality value.');
}
var mode=scaleToFit?2:1;
return url+'?imageView/'+mode+'/w/'+width+'/h/'+height+'/q/'+quality+'/format/'+fmt;
},


/**
     * Returns the file's size.
     * @return {Number} The file's size in bytes.
     **/
size:function size(){
return this.metaData().size;
},


/**
     * Returns the file's owner.
     * @return {String} The file's owner id.
     */
ownerId:function ownerId(){
return this.metaData().owner;
},


/**
     * Destroy the file.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
if(!this.id){
return _promise2.default.reject(new Error('The file id does not eixst.'));
}
var request=AVRequest('files',null,this.id,'DELETE',null,options);
return request;
},


/**
     * Request Qiniu upload token
     * @param {string} type
     * @return {Promise} Resolved with the response
     * @private
     */
_fileToken:function _fileToken(type,authOptions){
var name=this.attributes.name;

var extName=extname(name);
if(!extName&&this._extName){
name+=this._extName;
extName=this._extName;
}
// Create 16-bits uuid as qiniu key.
var key=hexOctet()+hexOctet()+hexOctet()+hexOctet()+hexOctet()+extName;
var data={
key:key,
name:name,
keep_file_name:authOptions.keepFileName,
ACL:this._acl,
mime_type:type,
metaData:this.attributes.metaData};

this._qiniu_key=key;
return AVRequest('fileTokens',null,null,'POST',data,authOptions);
},


/**
     * @callback UploadProgressCallback
     * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
     */
/**
     * Saves the file to the AV cloud.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {UploadProgressCallback} [options.onprogress] 文件上传进度，在 Node.js 中无效，回调参数说明详见 {@link UploadProgressCallback}。
     * @param {boolean} [options.keepFileName = false] 保留下载文件的文件名。
     * @return {Promise} Promise that is resolved when the save finishes.
     */
save:function save(){
var _this3=this;

var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

if(this.id){
throw new Error('File is already saved.');
}
if(!this._previousSave){
if(this._data){
var mimeType=this.get('mime_type');
this._previousSave=this._fileToken(mimeType,options).then(function(uploadInfo){
if(uploadInfo.mime_type){
mimeType=uploadInfo.mime_type;
_this3.set('mime_type',mimeType);
}
_this3._token=uploadInfo.token;
return _promise2.default.resolve().then(function(){
var data=_this3._data;
if(data&&data.base64){
return parseBase64(data.base64,mimeType);
}
if(data&&data.blob){
if(!data.blob.type&&mimeType){
data.blob.type=mimeType;
}
if(!data.blob.name){
data.blob.name=_this3.get('name');
}
return data.blob;
}
if(typeof Blob!=='undefined'&&data instanceof Blob){
return data;
}
throw new TypeError('malformed file data');
}).then(function(data){
var _options=_.extend({},options);
// filter out download progress events
if(options.onprogress){
_options.onprogress=function(event){
if(event.direction==='download')return;
return options.onprogress(event);
};
}
switch(uploadInfo.provider){
case's3':
return s3(uploadInfo,data,_this3,_options);
case'qcloud':
return cos(uploadInfo,data,_this3,_options);
case'qiniu':
default:
return qiniu(uploadInfo,data,_this3,_options);}

}).then(tap(function(){
return _this3._callback(true);
}),function(error){
_this3._callback(false);
throw error;
});
});
}else if(this.attributes.url&&this.attributes.metaData.__source==='external'){
// external link file.
var data={
name:this.attributes.name,
ACL:this._acl,
metaData:this.attributes.metaData,
mime_type:this.mimeType,
url:this.attributes.url};

this._previousSave=AVRequest('files',null,null,'post',data,options).then(function(response){
_this3.id=response.objectId;
return _this3;
});
}
}
return this._previousSave;
},
_callback:function _callback(success){
AVRequest('fileCallback',null,null,'post',{
token:this._token,
result:success}).
catch(debug);
delete this._token;
delete this._data;
},


/**
     * fetch the file from server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
fetch:function fetch(fetchOptions,options){
var request=AVRequest('files',null,this.id,'GET',transformFetchOptions(fetchOptions),options);
return request.then(this._finishFetch.bind(this));
},
_finishFetch:function _finishFetch(response){
var value=AV.Object.prototype.parse(response);
value.attributes={
name:value.name,
url:value.url,
mime_type:value.mime_type,
bucket:value.bucket};

value.attributes.metaData=value.metaData||{};
value.id=value.objectId;
// clean
delete value.objectId;
delete value.metaData;
delete value.url;
delete value.name;
delete value.mime_type;
delete value.bucket;
_.extend(this,value);
return this;
}});

};

/***/},
/* 135 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _require=__webpack_require__(20),
getAdapter=_require.getAdapter;

var debug=__webpack_require__(19)('cos');

module.exports=function(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;
var url=uploadInfo.upload_url+'?sign='+encodeURIComponent(uploadInfo.token);
var fileFormData={
field:'fileContent',
data:data,
name:file.attributes.name};

var options={
headers:file._uploadHeaders,
data:{
op:'upload'},

onprogress:saveOptions.onprogress};

debug('url: %s, file: %o, options: %o',url,fileFormData,options);
var upload=getAdapter('upload');
return upload(url,fileFormData,options).then(function(response){
debug(response.status,response.data);
if(response.ok===false){
var error=new Error(response.status);
error.response=response;
throw error;
}
return file;
},function(error){
var response=error.response;

if(response){
debug(response.status,response.data);
error.statusCode=response.status;
error.response=response.data;
}
throw error;
});
};

/***/},
/* 136 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _require=__webpack_require__(20),
getAdapter=_require.getAdapter;

var debug=__webpack_require__(19)('leancloud:qiniu');

module.exports=function(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;
// Get the uptoken to upload files to qiniu.
var uptoken=uploadInfo.token;
var url=uploadInfo.upload_url||'https://upload.qiniup.com';
var fileFormData={
field:'file',
data:data,
name:file.attributes.name};

var options={
headers:file._uploadHeaders,
data:{
name:file.attributes.name,
key:uploadInfo.key||file._qiniu_key,
token:uptoken},

onprogress:saveOptions.onprogress};

debug('url: %s, file: %o, options: %o',url,fileFormData,options);
var upload=getAdapter('upload');
return upload(url,fileFormData,options).then(function(response){
debug(response.status,response.data);
if(response.ok===false){
var message=response.status;
if(response.data){
if(response.data.error){
message=response.data.error;
}else{
message=(0,_stringify2.default)(response.data);
}
}
var error=new Error(message);
error.response=response;
throw error;
}
return file;
},function(error){
var response=error.response;

if(response){
debug(response.status,response.data);
error.statusCode=response.status;
error.response=response.data;
}
throw error;
});
};

/***/},
/* 137 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var ajax=__webpack_require__(48);

module.exports=function upload(uploadInfo,data,file){
var saveOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

file.attributes.url=uploadInfo.url;
file._bucket=uploadInfo.bucket;
file.id=uploadInfo.objectId;

return ajax({
url:uploadInfo.upload_url,
method:'PUT',
data:data,
headers:_.extend({
'Content-Type':file.get('mime_type'),
'Cache-Control':'public, max-age=31536000'},
file._uploadHeaders),
onprogress:saveOptions.onprogress}).
then(function(){
return file;
});
};

/***/},
/* 138 */
/***/function(module,exports,__webpack_require__){

(function(){
var crypt=__webpack_require__(139),
utf8=__webpack_require__(78).utf8,
isBuffer=__webpack_require__(140),
bin=__webpack_require__(78).bin,

// The core
md5=function md5(message,options){
// Convert to byte array
if(message.constructor==String){
if(options&&options.encoding==='binary')
message=bin.stringToBytes(message);else

message=utf8.stringToBytes(message);}else
if(isBuffer(message))
message=Array.prototype.slice.call(message,0);else
if(!Array.isArray(message))
message=message.toString();
// else, assume byte array already

var m=crypt.bytesToWords(message),
l=message.length*8,
a=1732584193,
b=-271733879,
c=-1732584194,
d=271733878;

// Swap endian
for(var i=0;i<m.length;i++){
m[i]=(m[i]<<8|m[i]>>>24)&0x00FF00FF|
(m[i]<<24|m[i]>>>8)&0xFF00FF00;
}

// Padding
m[l>>>5]|=0x80<<l%32;
m[(l+64>>>9<<4)+14]=l;

// Method shortcuts
var FF=md5._ff,
GG=md5._gg,
HH=md5._hh,
II=md5._ii;

for(var i=0;i<m.length;i+=16){

var aa=a,
bb=b,
cc=c,
dd=d;

a=FF(a,b,c,d,m[i+0],7,-680876936);
d=FF(d,a,b,c,m[i+1],12,-389564586);
c=FF(c,d,a,b,m[i+2],17,606105819);
b=FF(b,c,d,a,m[i+3],22,-1044525330);
a=FF(a,b,c,d,m[i+4],7,-176418897);
d=FF(d,a,b,c,m[i+5],12,1200080426);
c=FF(c,d,a,b,m[i+6],17,-1473231341);
b=FF(b,c,d,a,m[i+7],22,-45705983);
a=FF(a,b,c,d,m[i+8],7,1770035416);
d=FF(d,a,b,c,m[i+9],12,-1958414417);
c=FF(c,d,a,b,m[i+10],17,-42063);
b=FF(b,c,d,a,m[i+11],22,-1990404162);
a=FF(a,b,c,d,m[i+12],7,1804603682);
d=FF(d,a,b,c,m[i+13],12,-40341101);
c=FF(c,d,a,b,m[i+14],17,-1502002290);
b=FF(b,c,d,a,m[i+15],22,1236535329);

a=GG(a,b,c,d,m[i+1],5,-165796510);
d=GG(d,a,b,c,m[i+6],9,-1069501632);
c=GG(c,d,a,b,m[i+11],14,643717713);
b=GG(b,c,d,a,m[i+0],20,-373897302);
a=GG(a,b,c,d,m[i+5],5,-701558691);
d=GG(d,a,b,c,m[i+10],9,38016083);
c=GG(c,d,a,b,m[i+15],14,-660478335);
b=GG(b,c,d,a,m[i+4],20,-405537848);
a=GG(a,b,c,d,m[i+9],5,568446438);
d=GG(d,a,b,c,m[i+14],9,-1019803690);
c=GG(c,d,a,b,m[i+3],14,-187363961);
b=GG(b,c,d,a,m[i+8],20,1163531501);
a=GG(a,b,c,d,m[i+13],5,-1444681467);
d=GG(d,a,b,c,m[i+2],9,-51403784);
c=GG(c,d,a,b,m[i+7],14,1735328473);
b=GG(b,c,d,a,m[i+12],20,-1926607734);

a=HH(a,b,c,d,m[i+5],4,-378558);
d=HH(d,a,b,c,m[i+8],11,-2022574463);
c=HH(c,d,a,b,m[i+11],16,1839030562);
b=HH(b,c,d,a,m[i+14],23,-35309556);
a=HH(a,b,c,d,m[i+1],4,-1530992060);
d=HH(d,a,b,c,m[i+4],11,1272893353);
c=HH(c,d,a,b,m[i+7],16,-155497632);
b=HH(b,c,d,a,m[i+10],23,-1094730640);
a=HH(a,b,c,d,m[i+13],4,681279174);
d=HH(d,a,b,c,m[i+0],11,-358537222);
c=HH(c,d,a,b,m[i+3],16,-722521979);
b=HH(b,c,d,a,m[i+6],23,76029189);
a=HH(a,b,c,d,m[i+9],4,-640364487);
d=HH(d,a,b,c,m[i+12],11,-421815835);
c=HH(c,d,a,b,m[i+15],16,530742520);
b=HH(b,c,d,a,m[i+2],23,-995338651);

a=II(a,b,c,d,m[i+0],6,-198630844);
d=II(d,a,b,c,m[i+7],10,1126891415);
c=II(c,d,a,b,m[i+14],15,-1416354905);
b=II(b,c,d,a,m[i+5],21,-57434055);
a=II(a,b,c,d,m[i+12],6,1700485571);
d=II(d,a,b,c,m[i+3],10,-1894986606);
c=II(c,d,a,b,m[i+10],15,-1051523);
b=II(b,c,d,a,m[i+1],21,-2054922799);
a=II(a,b,c,d,m[i+8],6,1873313359);
d=II(d,a,b,c,m[i+15],10,-30611744);
c=II(c,d,a,b,m[i+6],15,-1560198380);
b=II(b,c,d,a,m[i+13],21,1309151649);
a=II(a,b,c,d,m[i+4],6,-145523070);
d=II(d,a,b,c,m[i+11],10,-1120210379);
c=II(c,d,a,b,m[i+2],15,718787259);
b=II(b,c,d,a,m[i+9],21,-343485551);

a=a+aa>>>0;
b=b+bb>>>0;
c=c+cc>>>0;
d=d+dd>>>0;
}

return crypt.endian([a,b,c,d]);
};

// Auxiliary functions
md5._ff=function(a,b,c,d,x,s,t){
var n=a+(b&c|~b&d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._gg=function(a,b,c,d,x,s,t){
var n=a+(b&d|c&~d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._hh=function(a,b,c,d,x,s,t){
var n=a+(b^c^d)+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};
md5._ii=function(a,b,c,d,x,s,t){
var n=a+(c^(b|~d))+(x>>>0)+t;
return(n<<s|n>>>32-s)+b;
};

// Package private blocksize
md5._blocksize=16;
md5._digestsize=16;

module.exports=function(message,options){
if(message===undefined||message===null)
throw new Error('Illegal argument '+message);

var digestbytes=crypt.wordsToBytes(md5(message,options));
return options&&options.asBytes?digestbytes:
options&&options.asString?bin.bytesToString(digestbytes):
crypt.bytesToHex(digestbytes);
};

})();


/***/},
/* 139 */
/***/function(module,exports){

(function(){
var base64map=
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

crypt={
// Bit-wise rotation left
rotl:function rotl(n,b){
return n<<b|n>>>32-b;
},

// Bit-wise rotation right
rotr:function rotr(n,b){
return n<<32-b|n>>>b;
},

// Swap big-endian to little-endian and vice versa
endian:function endian(n){
// If number given, swap endian
if(n.constructor==Number){
return crypt.rotl(n,8)&0x00FF00FF|crypt.rotl(n,24)&0xFF00FF00;
}

// Else, assume array and swap all items
for(var i=0;i<n.length;i++){
n[i]=crypt.endian(n[i]);}
return n;
},

// Generate an array of any length of random bytes
randomBytes:function randomBytes(n){
for(var bytes=[];n>0;n--){
bytes.push(Math.floor(Math.random()*256));}
return bytes;
},

// Convert a byte array to big-endian 32-bit words
bytesToWords:function bytesToWords(bytes){
for(var words=[],i=0,b=0;i<bytes.length;i++,b+=8){
words[b>>>5]|=bytes[i]<<24-b%32;}
return words;
},

// Convert big-endian 32-bit words to a byte array
wordsToBytes:function wordsToBytes(words){
for(var bytes=[],b=0;b<words.length*32;b+=8){
bytes.push(words[b>>>5]>>>24-b%32&0xFF);}
return bytes;
},

// Convert a byte array to a hex string
bytesToHex:function bytesToHex(bytes){
for(var hex=[],i=0;i<bytes.length;i++){
hex.push((bytes[i]>>>4).toString(16));
hex.push((bytes[i]&0xF).toString(16));
}
return hex.join('');
},

// Convert a hex string to a byte array
hexToBytes:function hexToBytes(hex){
for(var bytes=[],c=0;c<hex.length;c+=2){
bytes.push(parseInt(hex.substr(c,2),16));}
return bytes;
},

// Convert a byte array to a base-64 string
bytesToBase64:function bytesToBase64(bytes){
for(var base64=[],i=0;i<bytes.length;i+=3){
var triplet=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2];
for(var j=0;j<4;j++){
if(i*8+j*6<=bytes.length*8)
base64.push(base64map.charAt(triplet>>>6*(3-j)&0x3F));else

base64.push('=');}
}
return base64.join('');
},

// Convert a base-64 string to a byte array
base64ToBytes:function base64ToBytes(base64){
// Remove non-base-64 characters
base64=base64.replace(/[^A-Z0-9+\/]/ig,'');

for(var bytes=[],i=0,imod4=0;i<base64.length;
imod4=++i%4){
if(imod4==0)continue;
bytes.push((base64map.indexOf(base64.charAt(i-1))&
Math.pow(2,-2*imod4+8)-1)<<imod4*2|
base64map.indexOf(base64.charAt(i))>>>6-imod4*2);
}
return bytes;
}};


module.exports=crypt;
})();


/***/},
/* 140 */
/***/function(module,exports){

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports=function(obj){
return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer);
};

function isBuffer(obj){
return!!obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj){
return typeof obj.readFloatLE==='function'&&typeof obj.slice==='function'&&isBuffer(obj.slice(0,0));
}


/***/},
/* 141 */
/***/function(module,exports,__webpack_require__){

"use strict";


var dataURItoBlob=function dataURItoBlob(dataURI,type){
var byteString;

// 传入的 base64，不是 dataURL
if(dataURI.indexOf('base64')<0){
byteString=atob(dataURI);
}else if(dataURI.split(',')[0].indexOf('base64')>=0){
type=type||dataURI.split(',')[0].split(':')[1].split(';')[0];
byteString=atob(dataURI.split(',')[1]);
}else{
byteString=unescape(dataURI.split(',')[1]);
}
var ia=new Uint8Array(byteString.length);
for(var i=0;i<byteString.length;i++){
ia[i]=byteString.charCodeAt(i);
}
return new Blob([ia],{type:type});
};

module.exports=dataURItoBlob;

/***/},
/* 142 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _getOwnPropertyDescriptor=__webpack_require__(143);

var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);

var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

var _slicedToArray2=__webpack_require__(146);

var _slicedToArray3=_interopRequireDefault(_slicedToArray2);

var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var AVError=__webpack_require__(16);

var _require=__webpack_require__(5),
_request=_require._request;

var _require2=__webpack_require__(6),
isNullOrUndefined=_require2.isNullOrUndefined,
ensureArray=_require2.ensureArray,
transformFetchOptions=_require2.transformFetchOptions,
setValue=_require2.setValue,
findValue=_require2.findValue,
isPlainObject=_require2.isPlainObject,
continueWhile=_require2.continueWhile;

var recursiveToPointer=function recursiveToPointer(value){
if(_.isArray(value))return value.map(recursiveToPointer);
if(isPlainObject(value))return _.mapObject(value,recursiveToPointer);
if(_.isObject(value)&&value._toPointer)return value._toPointer();
return value;
};

var RESERVED_KEYS=['objectId','createdAt','updatedAt'];
var checkReservedKey=function checkReservedKey(key){
if(RESERVED_KEYS.indexOf(key)!==-1){
throw new Error('key['+key+'] is reserved');
}
};

var handleBatchResults=function handleBatchResults(results){
var firstError=_.find(results,function(result){
return result instanceof Error;
});
if(!firstError){
return results;
}
var error=new AVError(firstError.code,firstError.message);
error.results=results;
throw error;
};

// Helper function to get a value from a Backbone object as a property
// or as a function.
function getValue(object,prop){
if(!(object&&object[prop])){
return null;
}
return _.isFunction(object[prop])?object[prop]():object[prop];
}

// AV.Object is analogous to the Java AVObject.
// It also implements the same interface as a Backbone model.

module.exports=function(AV){
/**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>AV.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *     var object = new AV.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *     var MyClass = AV.Object.extend("ClassName");
   *     var object = new MyClass();
   * </pre></p>
   *
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @see AV.Object.extend
   *
   * @class
   *
   * <p>The fundamental unit of AV data, which implements the Backbone Model
   * interface.</p>
   */
AV.Object=function(attributes,options){
// Allow new AV.Object("ClassName") as a shortcut to _create.
if(_.isString(attributes)){
return AV.Object._create.apply(this,arguments);
}

attributes=attributes||{};
if(options&&options.parse){
attributes=this.parse(attributes);
attributes=this._mergeMagicFields(attributes);
}
var defaults=getValue(this,'defaults');
if(defaults){
attributes=_.extend({},defaults,attributes);
}
if(options&&options.collection){
this.collection=options.collection;
}

this._serverData={};// The last known data for this object from cloud.
this._opSetQueue=[{}];// List of sets of changes to the data.
this._flags={};
this.attributes={};// The best estimate of this's current data.

this._hashedJSON={};// Hash of values of containers at last save.
this._escapedAttributes={};
this.cid=_.uniqueId('c');
this.changed={};
this._silent={};
this._pending={};
this.set(attributes,{silent:true});
this.changed={};
this._silent={};
this._pending={};
this._hasData=true;
this._previousAttributes=_.clone(this.attributes);
this.initialize.apply(this,arguments);
};

/**
   * @lends AV.Object.prototype
   * @property {String} id The objectId of the AV Object.
   */

/**
   * Saves the given list of AV.Object.
   * If any error is encountered, stops and calls the error handler.
   *
   * @example
   * AV.Object.saveAll([object1, object2, ...]).then(function(list) {
   *   // All the objects were saved.
   * }, function(error) {
   *   // An error occurred while saving one of the objects.
   * });
   *
   * @param {Array} list A list of <code>AV.Object</code>.
   */
AV.Object.saveAll=function(list,options){
return AV.Object._deepSaveAsync(list,null,options);
};

/**
   * Fetch the given list of AV.Object.
   *
   * @param {AV.Object[]} objects A list of <code>AV.Object</code>
   * @param {AuthOptions} options
   * @return {Promise.<AV.Object[]>} The given list of <code>AV.Object</code>, updated
   */

AV.Object.fetchAll=function(objects,options){
return _promise2.default.resolve().then(function(){
return _request('batch',null,null,'POST',{
requests:_.map(objects,function(object){
if(!object.className)throw new Error('object must have className to fetch');
if(!object.id)throw new Error('object must have id to fetch');
if(object.dirty())throw new Error('object is modified but not saved');
return{
method:'GET',
path:'/1.1/classes/'+object.className+'/'+object.id};

})},
options);
}).then(function(response){
var results=_.map(objects,function(object,i){
if(response[i].success){
var fetchedAttrs=object.parse(response[i].success);
object._cleanupUnsetKeys(fetchedAttrs);
object._finishFetch(fetchedAttrs);
return object;
}
if(response[i].success===null){
return new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.');
}
return new AVError(response[i].error.code,response[i].error.error);
});
return handleBatchResults(results);
});
};

// Attach all inheritable methods to the AV.Object prototype.
_.extend(AV.Object.prototype,AV.Events,
/** @lends AV.Object.prototype */{
_fetchWhenSave:false,

/**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
initialize:function initialize(){},

/**
     * Set whether to enable fetchWhenSave option when updating object.
     * When set true, SDK would fetch the latest object after saving.
     * Default is false.
     *
     * @deprecated use AV.Object#save with options.fetchWhenSave instead
     * @param {boolean} enable  true to enable fetchWhenSave option.
     */
fetchWhenSave:function fetchWhenSave(enable){
console.warn('AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.');
if(!_.isBoolean(enable)){
throw new Error('Expect boolean value for fetchWhenSave');
}
this._fetchWhenSave=enable;
},

/**
     * Returns the object's objectId.
     * @return {String} the objectId.
     */
getObjectId:function getObjectId(){
return this.id;
},

/**
     * Returns the object's createdAt attribute.
     * @return {Date}
     */
getCreatedAt:function getCreatedAt(){
return this.createdAt;
},

/**
     * Returns the object's updatedAt attribute.
     * @return {Date}
     */
getUpdatedAt:function getUpdatedAt(){
return this.updatedAt;
},

/**
     * Returns a JSON version of the object.
     * @return {Object}
     */
toJSON:function toJSON(key,holder){
var seenObjects=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];

return this._toFullJSON(seenObjects,false);
},

/**
     * Returns a JSON version of the object with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
toFullJSON:function toFullJSON(){
var seenObjects=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];

return this._toFullJSON(seenObjects);
},


_toFullJSON:function _toFullJSON(seenObjects){
var _this=this;

var full=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;

var json=_.clone(this.attributes);
if(_.isArray(seenObjects)){
var newSeenObjects=seenObjects.concat(this);
}
AV._objectEach(json,function(val,key){
json[key]=AV._encode(val,newSeenObjects,undefined,full);
});
AV._objectEach(this._operations,function(val,key){
json[key]=val;
});

if(_.has(this,'id')){
json.objectId=this.id;
}
_(['createdAt','updatedAt']).each(function(key){
if(_.has(_this,key)){
var val=_this[key];
json[key]=_.isDate(val)?val.toJSON():val;
}
});
if(full){
json.__type='Object';
if(_.isArray(seenObjects)&&seenObjects.length)json.__type='Pointer';
json.className=this.className;
}
return json;
},

/**
     * Updates _hashedJSON to reflect the current state of this object.
     * Adds any changed hash values to the set of pending changes.
     * @private
     */
_refreshCache:function _refreshCache(){
var self=this;
if(self._refreshingCache){
return;
}
self._refreshingCache=true;
AV._objectEach(this.attributes,function(value,key){
if(value instanceof AV.Object){
value._refreshCache();
}else if(_.isObject(value)){
if(self._resetCacheForKey(key)){
self.set(key,new AV.Op.Set(value),{silent:true});
}
}
});
delete self._refreshingCache;
},

/**
     * Returns true if this object has been modified since its last
     * save/refresh.  If an attribute is specified, it returns true only if that
     * particular attribute has been modified since the last save/refresh.
     * @param {String} attr An attribute name (optional).
     * @return {Boolean}
     */
dirty:function dirty(attr){
this._refreshCache();

var currentChanges=_.last(this._opSetQueue);

if(attr){
return currentChanges[attr]?true:false;
}
if(!this.id){
return true;
}
if(_.keys(currentChanges).length>0){
return true;
}
return false;
},

/**
     * Returns the keys of the modified attribute since its last save/refresh.
     * @return {String[]}
     */
dirtyKeys:function dirtyKeys(){
this._refreshCache();
var currentChanges=_.last(this._opSetQueue);
return _.keys(currentChanges);
},

/**
     * Gets a Pointer referencing this Object.
     * @private
     */
_toPointer:function _toPointer(){
// if (!this.id) {
//   throw new Error("Can't serialize an unsaved AV.Object");
// }
return{
__type:'Pointer',
className:this.className,
objectId:this.id};

},

/**
     * Gets the value of an attribute.
     * @param {String} attr The string name of an attribute.
     */
get:function get(attr){
switch(attr){
case'objectId':
return this.id;
case'createdAt':
case'updatedAt':
return this[attr];
default:
return this.attributes[attr];}

},

/**
     * Gets a relation on the given class for the attribute.
     * @param {String} attr The attribute to get the relation for.
     * @return {AV.Relation}
     */
relation:function relation(attr){
var value=this.get(attr);
if(value){
if(!(value instanceof AV.Relation)){
throw new Error('Called relation() on non-relation field '+attr);
}
value._ensureParentAndKey(this,attr);
return value;
}else{
return new AV.Relation(this,attr);
}
},

/**
     * Gets the HTML-escaped value of an attribute.
     */
escape:function escape(attr){
var html=this._escapedAttributes[attr];
if(html){
return html;
}
var val=this.attributes[attr];
var escaped;
if(isNullOrUndefined(val)){
escaped='';
}else{
escaped=_.escape(val.toString());
}
this._escapedAttributes[attr]=escaped;
return escaped;
},

/**
     * Returns <code>true</code> if the attribute contains a value that is not
     * null or undefined.
     * @param {String} attr The string name of the attribute.
     * @return {Boolean}
     */
has:function has(attr){
return!isNullOrUndefined(this.attributes[attr]);
},

/**
     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
     * and puts them on "this" directly.  Removes them from attrs.
     * @param attrs - A dictionary with the data for this AV.Object.
     * @private
     */
_mergeMagicFields:function _mergeMagicFields(attrs){
// Check for changes of magic fields.
var model=this;
var specialFields=['objectId','createdAt','updatedAt'];
AV._arrayEach(specialFields,function(attr){
if(attrs[attr]){
if(attr==='objectId'){
model.id=attrs[attr];
}else if((attr==='createdAt'||attr==='updatedAt')&&!_.isDate(attrs[attr])){
model[attr]=AV._parseDate(attrs[attr]);
}else{
model[attr]=attrs[attr];
}
delete attrs[attr];
}
});
return attrs;
},

/**
     * Returns the json to be sent to the server.
     * @private
     */
_startSave:function _startSave(){
this._opSetQueue.push({});
},

/**
     * Called when a save fails because of an error. Any changes that were part
     * of the save need to be merged with changes made after the save. This
     * might throw an exception is you do conflicting operations. For example,
     * if you do:
     *   object.set("foo", "bar");
     *   object.set("invalid field name", "baz");
     *   object.save();
     *   object.increment("foo");
     * then this will throw when the save fails and the client tries to merge
     * "bar" with the +1.
     * @private
     */
_cancelSave:function _cancelSave(){
var failedChanges=_.first(this._opSetQueue);
this._opSetQueue=_.rest(this._opSetQueue);
var nextChanges=_.first(this._opSetQueue);
AV._objectEach(failedChanges,function(op,key){
var op1=failedChanges[key];
var op2=nextChanges[key];
if(op1&&op2){
nextChanges[key]=op2._mergeWithPrevious(op1);
}else if(op1){
nextChanges[key]=op1;
}
});
this._saving=this._saving-1;
},

/**
     * Called when a save completes successfully. This merges the changes that
     * were saved into the known server data, and overrides it with any data
     * sent directly from the server.
     * @private
     */
_finishSave:function _finishSave(serverData){
// Grab a copy of any object referenced by this object. These instances
// may have already been fetched, and we don't want to lose their data.
// Note that doing it like this means we will unify separate copies of the
// same object, but that's a risk we have to take.
var fetchedObjects={};
AV._traverse(this.attributes,function(object){
if(object instanceof AV.Object&&object.id&&object._hasData){
fetchedObjects[object.id]=object;
}
});

var savedChanges=_.first(this._opSetQueue);
this._opSetQueue=_.rest(this._opSetQueue);
this._applyOpSet(savedChanges,this._serverData);
this._mergeMagicFields(serverData);
var self=this;
AV._objectEach(serverData,function(value,key){
self._serverData[key]=AV._decode(value,key);

// Look for any objects that might have become unfetched and fix them
// by replacing their values with the previously observed values.
var fetched=AV._traverse(self._serverData[key],function(object){
if(object instanceof AV.Object&&fetchedObjects[object.id]){
return fetchedObjects[object.id];
}
});
if(fetched){
self._serverData[key]=fetched;
}
});
this._rebuildAllEstimatedData();
var opSetQueue=this._opSetQueue.map(_.clone);
this._refreshCache();
this._opSetQueue=opSetQueue;
this._saving=this._saving-1;
},

/**
     * Called when a fetch or login is complete to set the known server data to
     * the given object.
     * @private
     */
_finishFetch:function _finishFetch(serverData,hasData){
// Clear out any changes the user might have made previously.
this._opSetQueue=[{}];

// Bring in all the new server data.
this._mergeMagicFields(serverData);
var self=this;
AV._objectEach(serverData,function(value,key){
self._serverData[key]=AV._decode(value,key);
});

// Refresh the attributes.
this._rebuildAllEstimatedData();

// Clear out the cache of mutable containers.
this._refreshCache();
this._opSetQueue=[{}];

this._hasData=hasData;
},

/**
     * Applies the set of AV.Op in opSet to the object target.
     * @private
     */
_applyOpSet:function _applyOpSet(opSet,target){
var self=this;
AV._objectEach(opSet,function(change,key){
var _findValue=findValue(target,key),
_findValue2=(0,_slicedToArray3.default)(_findValue,3),
value=_findValue2[0],
actualTarget=_findValue2[1],
actualKey=_findValue2[2];

setValue(target,key,change._estimate(value,self,key));
if(actualTarget&&actualTarget[actualKey]===AV.Op._UNSET){
delete actualTarget[actualKey];
}
});
},

/**
     * Replaces the cached value for key with the current value.
     * Returns true if the new value is different than the old value.
     * @private
     */
_resetCacheForKey:function _resetCacheForKey(key){
var value=this.attributes[key];
if(_.isObject(value)&&!(value instanceof AV.Object)&&!(value instanceof AV.File)){
var json=(0,_stringify2.default)(recursiveToPointer(value));
if(this._hashedJSON[key]!==json){
var wasSet=!!this._hashedJSON[key];
this._hashedJSON[key]=json;
return wasSet;
}
}
return false;
},

/**
     * Populates attributes[key] by starting with the last known data from the
     * server, and applying all of the local changes that have been made to that
     * key since then.
     * @private
     */
_rebuildEstimatedDataForKey:function _rebuildEstimatedDataForKey(key){
var self=this;
delete this.attributes[key];
if(this._serverData[key]){
this.attributes[key]=this._serverData[key];
}
AV._arrayEach(this._opSetQueue,function(opSet){
var op=opSet[key];
if(op){
var _findValue3=findValue(self.attributes,key),
_findValue4=(0,_slicedToArray3.default)(_findValue3,4),
value=_findValue4[0],
actualTarget=_findValue4[1],
actualKey=_findValue4[2],
firstKey=_findValue4[3];

setValue(self.attributes,key,op._estimate(value,self,key));
if(actualTarget&&actualTarget[actualKey]===AV.Op._UNSET){
delete actualTarget[actualKey];
}
self._resetCacheForKey(firstKey);
}
});
},

/**
     * Populates attributes by starting with the last known data from the
     * server, and applying all of the local changes that have been made since
     * then.
     * @private
     */
_rebuildAllEstimatedData:function _rebuildAllEstimatedData(){
var self=this;

var previousAttributes=_.clone(this.attributes);

this.attributes=_.clone(this._serverData);
AV._arrayEach(this._opSetQueue,function(opSet){
self._applyOpSet(opSet,self.attributes);
AV._objectEach(opSet,function(op,key){
self._resetCacheForKey(key);
});
});

// Trigger change events for anything that changed because of the fetch.
AV._objectEach(previousAttributes,function(oldValue,key){
if(self.attributes[key]!==oldValue){
self.trigger('change:'+key,self,self.attributes[key],{});
}
});
AV._objectEach(this.attributes,function(newValue,key){
if(!_.has(previousAttributes,key)){
self.trigger('change:'+key,self,newValue,{});
}
});
},

/**
     * Sets a hash of model attributes on the object, firing
     * <code>"change"</code> unless you choose to silence it.
     *
     * <p>You can call it with an object containing keys and values, or with one
     * key and value.  For example:</p>
     *
     * @example
     * gameTurn.set({
     *   player: player1,
     *   diceRoll: 2
     * });
     *
     * game.set("currentPlayer", player2);
     *
     * game.set("finished", true);
     *
     * @param {String} key The key to set.
     * @param {Any} value The value to give it.
     * @param {Object} [options]
     * @param {Boolean} [options.silent]
     * @return {AV.Object} self if succeeded, throws if the value is not valid.
     * @see AV.Object#validate
     */
set:function set(key,value,options){
var attrs;
if(_.isObject(key)||isNullOrUndefined(key)){
attrs=_.mapObject(key,function(v,k){
checkReservedKey(k);
return AV._decode(v,k);
});
options=value;
}else{
attrs={};
checkReservedKey(key);
attrs[key]=AV._decode(value,key);
}

// Extract attributes and options.
options=options||{};
if(!attrs){
return this;
}
if(attrs instanceof AV.Object){
attrs=attrs.attributes;
}

// If the unset option is used, every attribute should be a Unset.
if(options.unset){
AV._objectEach(attrs,function(unused_value,key){
attrs[key]=new AV.Op.Unset();
});
}

// Apply all the attributes to get the estimated values.
var dataToValidate=_.clone(attrs);
var self=this;
AV._objectEach(dataToValidate,function(value,key){
if(value instanceof AV.Op){
dataToValidate[key]=value._estimate(self.attributes[key],self,key);
if(dataToValidate[key]===AV.Op._UNSET){
delete dataToValidate[key];
}
}
});

// Run validation.
this._validate(attrs,options);

options.changes={};
var escaped=this._escapedAttributes;

// Update attributes.
AV._arrayEach(_.keys(attrs),function(attr){
var val=attrs[attr];

// If this is a relation object we need to set the parent correctly,
// since the location where it was parsed does not have access to
// this object.
if(val instanceof AV.Relation){
val.parent=self;
}

if(!(val instanceof AV.Op)){
val=new AV.Op.Set(val);
}

// See if this change will actually have any effect.
var isRealChange=true;
if(val instanceof AV.Op.Set&&_.isEqual(self.attributes[attr],val.value)){
isRealChange=false;
}

if(isRealChange){
delete escaped[attr];
if(options.silent){
self._silent[attr]=true;
}else{
options.changes[attr]=true;
}
}

var currentChanges=_.last(self._opSetQueue);
currentChanges[attr]=val._mergeWithPrevious(currentChanges[attr]);
self._rebuildEstimatedDataForKey(attr);

if(isRealChange){
self.changed[attr]=self.attributes[attr];
if(!options.silent){
self._pending[attr]=true;
}
}else{
delete self.changed[attr];
delete self._pending[attr];
}
});

if(!options.silent){
this.change(options);
}
return this;
},

/**
     * Remove an attribute from the model, firing <code>"change"</code> unless
     * you choose to silence it. This is a noop if the attribute doesn't
     * exist.
     * @param key {String} The key.
     */
unset:function unset(attr,options){
options=options||{};
options.unset=true;
return this.set(attr,null,options);
},

/**
     * Atomically increments the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param key {String} The key.
     * @param amount {Number} The amount to increment by.
     */
increment:function increment(attr,amount){
if(_.isUndefined(amount)||_.isNull(amount)){
amount=1;
}
return this.set(attr,new AV.Op.Increment(amount));
},

/**
     * Atomically add an object to the end of the array associated with a given
     * key.
     * @param key {String} The key.
     * @param item {} The item to add.
     */
add:function add(attr,item){
return this.set(attr,new AV.Op.Add(ensureArray(item)));
},

/**
     * Atomically add an object to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param key {String} The key.
     * @param item {} The object to add.
     */
addUnique:function addUnique(attr,item){
return this.set(attr,new AV.Op.AddUnique(ensureArray(item)));
},

/**
     * Atomically remove all instances of an object from the array associated
     * with a given key.
     *
     * @param key {String} The key.
     * @param item {} The object to remove.
     */
remove:function remove(attr,item){
return this.set(attr,new AV.Op.Remove(ensureArray(item)));
},

/**
     * Atomically apply a "bit and" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitAnd:function bitAnd(attr,value){
return this.set(attr,new AV.Op.BitAnd(value));
},


/**
     * Atomically apply a "bit or" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitOr:function bitOr(attr,value){
return this.set(attr,new AV.Op.BitOr(value));
},


/**
     * Atomically apply a "bit xor" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
bitXor:function bitXor(attr,value){
return this.set(attr,new AV.Op.BitXor(value));
},


/**
     * Returns an instance of a subclass of AV.Op describing what kind of
     * modification has been performed on this field since the last time it was
     * saved. For example, after calling object.increment("x"), calling
     * object.op("x") would return an instance of AV.Op.Increment.
     *
     * @param key {String} The key.
     * @returns {AV.Op} The operation, or undefined if none.
     */
op:function op(attr){
return _.last(this._opSetQueue)[attr];
},

/**
     * Clear all attributes on the model, firing <code>"change"</code> unless
     * you choose to silence it.
     */
clear:function clear(options){
options=options||{};
options.unset=true;
var keysToClear=_.extend(this.attributes,this._operations);
return this.set(keysToClear,options);
},

/**
     * Clears any (or specific) changes to the model made since the last save.
     * @param {string|string[]} [keys] specify keys to revert.
     */
revert:function revert(keys){
var lastOp=_.last(this._opSetQueue);
var _keys=ensureArray(keys||_.keys(lastOp));
_keys.forEach(function(key){
delete lastOp[key];
});
this._rebuildAllEstimatedData();
return this;
},


/**
     * Returns a JSON-encoded set of operations to be sent with the next save
     * request.
     * @private
     */
_getSaveJSON:function _getSaveJSON(){
var json=_.clone(_.first(this._opSetQueue));
AV._objectEach(json,function(op,key){
json[key]=op.toJSON();
});
return json;
},

/**
     * Returns true if this object can be serialized for saving.
     * @private
     */
_canBeSerialized:function _canBeSerialized(){
return AV.Object._canBeSerializedAsValue(this.attributes);
},

/**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * triggering a <code>"change"</code> event.
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
fetch:function fetch(){
var fetchOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var options=arguments[1];

var self=this;
var request=_request('classes',this.className,this.id,'GET',transformFetchOptions(fetchOptions),options);
return request.then(function(response){
var fetchedAttrs=self.parse(response);
self._cleanupUnsetKeys(fetchedAttrs,fetchOptions.keys?ensureArray(fetchOptions.keys).join(',').split(','):undefined);
self._finishFetch(fetchedAttrs,true);
return self;
});
},

_cleanupUnsetKeys:function _cleanupUnsetKeys(fetchedAttrs){
var _this2=this;

var fetchedKeys=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_.keys(this._serverData);

_.forEach(fetchedKeys,function(key){
if(fetchedAttrs[key]===undefined)delete _this2._serverData[key];
});
},


/**
     * Set a hash of model attributes, and save the model to the server.
     * updatedAt will be updated when the request returns.
     * You can either call it as:<pre>
     *   object.save();</pre>
     * or<pre>
     *   object.save(null, options);</pre>
     * or<pre>
     *   object.save(attrs, options);</pre>
     * or<pre>
     *   object.save(key, value, options);</pre>
     *
     * @example
     * gameTurn.save({
     *   player: "Jake Cutter",
     *   diceRoll: 2
     * }).then(function(gameTurnAgain) {
     *   // The save was successful.
     * }, function(error) {
     *   // The save failed.  Error is an instance of AVError.
     * });
     *
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
     * @param {AV.Query} options.query Save object only when it matches the query
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     * @see AVError
     */
save:function save(arg1,arg2,arg3){
var attrs,current,options;
if(_.isObject(arg1)||isNullOrUndefined(arg1)){
attrs=arg1;
options=arg2;
}else{
attrs={};
attrs[arg1]=arg2;
options=arg3;
}

options=_.clone(options)||{};
if(options.wait){
current=_.clone(this.attributes);
}

var setOptions=_.clone(options)||{};
if(setOptions.wait){
setOptions.silent=true;
}
if(attrs){
this.set(attrs,setOptions);
}

var model=this;

var unsavedChildren=[];
var unsavedFiles=[];
AV.Object._findUnsavedChildren(model,unsavedChildren,unsavedFiles);
if(unsavedChildren.length+unsavedFiles.length>1){
return AV.Object._deepSaveAsync(this,model,options);
}

this._startSave();
this._saving=(this._saving||0)+1;

this._allPreviousSaves=this._allPreviousSaves||_promise2.default.resolve();
this._allPreviousSaves=this._allPreviousSaves.catch(function(e){}).then(function(){
var method=model.id?'PUT':'POST';

var json=model._getSaveJSON();
var query={};

if(model._fetchWhenSave||options.fetchWhenSave){
query['new']='true';
}
// user login option
if(options._failOnNotExist){
query.failOnNotExist='true';
}

if(options.query){
var queryParams;
if(typeof options.query._getParams==='function'){
queryParams=options.query._getParams();
if(queryParams){
query.where=queryParams.where;
}
}
if(!query.where){
var error=new Error('options.query is not an AV.Query');
throw error;
}
}

_.extend(json,model._flags);

var route='classes';
var className=model.className;
if(model.className==='_User'&&!model.id){
// Special-case user sign-up.
route='users';
className=null;
}
//hook makeRequest in options.
var makeRequest=options._makeRequest||_request;
var requestPromise=makeRequest(route,className,model.id,method,json,options,query);

requestPromise=requestPromise.then(function(resp){
var serverAttrs=model.parse(resp);
if(options.wait){
serverAttrs=_.extend(attrs||{},serverAttrs);
}
model._finishSave(serverAttrs);
if(options.wait){
model.set(current,setOptions);
}
return model;
},function(error){
model._cancelSave();
throw error;
});

return requestPromise;
});
return this._allPreviousSaves;
},

/**
     * Destroy this model on the server if it was already persisted.
     * Optimistically removes the model from its collection, if it has one.
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} [options.wait] wait for the server to respond
     * before removal.
     *
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
options=options||{};
var model=this;

var triggerDestroy=function triggerDestroy(){
model.trigger('destroy',model,model.collection,options);
};

if(!this.id){
return triggerDestroy();
}

if(!options.wait){
triggerDestroy();
}

var request=_request('classes',this.className,this.id,'DELETE',this._flags,options);
return request.then(function(){
if(options.wait){
triggerDestroy();
}
return model;
});
},

/**
     * Converts a response into the hash of attributes to be set on the model.
     * @ignore
     */
parse:function parse(resp){
var output=_.clone(resp);
_(['createdAt','updatedAt']).each(function(key){
if(output[key]){
output[key]=AV._parseDate(output[key]);
}
});
if(output.createdAt&&!output.updatedAt){
output.updatedAt=output.createdAt;
}
return output;
},

/**
     * Creates a new model with identical attributes to this one.
     * @return {AV.Object}
     */
clone:function clone(){
return new this.constructor(this.attributes);
},

/**
     * Returns true if this object has never been saved to AV.
     * @return {Boolean}
     */
isNew:function isNew(){
return!this.id;
},

/**
     * Call this method to manually fire a `"change"` event for this model and
     * a `"change:attribute"` event for each changed attribute.
     * Calling this will cause all objects observing the model to update.
     */
change:function change(options){
options=options||{};
var changing=this._changing;
this._changing=true;

// Silent changes become pending changes.
var self=this;
AV._objectEach(this._silent,function(attr){
self._pending[attr]=true;
});

// Silent changes are triggered.
var changes=_.extend({},options.changes,this._silent);
this._silent={};
AV._objectEach(changes,function(unused_value,attr){
self.trigger('change:'+attr,self,self.get(attr),options);
});
if(changing){
return this;
}

// This is to get around lint not letting us make a function in a loop.
var deleteChanged=function deleteChanged(value,attr){
if(!self._pending[attr]&&!self._silent[attr]){
delete self.changed[attr];
}
};

// Continue firing `"change"` events while there are pending changes.
while(!_.isEmpty(this._pending)){
this._pending={};
this.trigger('change',this,options);
// Pending and silent changes still remain.
AV._objectEach(this.changed,deleteChanged);
self._previousAttributes=_.clone(this.attributes);
}

this._changing=false;
return this;
},

/**
     * Gets the previous value of an attribute, recorded at the time the last
     * <code>"change"</code> event was fired.
     * @param {String} attr Name of the attribute to get.
     */
previous:function previous(attr){
if(!arguments.length||!this._previousAttributes){
return null;
}
return this._previousAttributes[attr];
},

/**
     * Gets all of the attributes of the model at the time of the previous
     * <code>"change"</code> event.
     * @return {Object}
     */
previousAttributes:function previousAttributes(){
return _.clone(this._previousAttributes);
},

/**
     * Checks if the model is currently in a valid state. It's only possible to
     * get into an *invalid* state if you're using silent changes.
     * @return {Boolean}
     */
isValid:function isValid(){
try{
this.validate(this.attributes);
}catch(error){
return false;
}
return true;
},

/**
     * You should not call this function directly unless you subclass
     * <code>AV.Object</code>, in which case you can override this method
     * to provide additional validation on <code>set</code> and
     * <code>save</code>.  Your implementation should throw an Error if
     * the attrs is invalid
     *
     * @param {Object} attrs The current data to validate.
     * @see AV.Object#set
     */
validate:function validate(attrs){
if(_.has(attrs,'ACL')&&!(attrs.ACL instanceof AV.ACL)){
throw new AVError(AVError.OTHER_CAUSE,'ACL must be a AV.ACL.');
}
},

/**
     * Run validation against a set of incoming attributes, returning `true`
     * if all is well. If a specific `error` callback has been passed,
     * call that instead of firing the general `"error"` event.
     * @private
     */
_validate:function _validate(attrs,options){
if(options.silent||!this.validate){
return;
}
attrs=_.extend({},this.attributes,attrs);
this.validate(attrs);
},

/**
     * Returns the ACL for this object.
     * @returns {AV.ACL} An instance of AV.ACL.
     * @see AV.Object#get
     */
getACL:function getACL(){
return this.get('ACL');
},

/**
     * Sets the ACL to be used for this object.
     * @param {AV.ACL} acl An instance of AV.ACL.
     * @param {Object} options Optional Backbone-like options object to be
     *     passed in to set.
     * @return {AV.Object} self
     * @see AV.Object#set
     */
setACL:function setACL(acl,options){
return this.set('ACL',acl,options);
},

disableBeforeHook:function disableBeforeHook(){
this.ignoreHook('beforeSave');
this.ignoreHook('beforeUpdate');
this.ignoreHook('beforeDelete');
},

disableAfterHook:function disableAfterHook(){
this.ignoreHook('afterSave');
this.ignoreHook('afterUpdate');
this.ignoreHook('afterDelete');
},

ignoreHook:function ignoreHook(hookName){
if(!_.contains(['beforeSave','afterSave','beforeUpdate','afterUpdate','beforeDelete','afterDelete'],hookName)){
throw new Error('Unsupported hookName: '+hookName);
}

if(!AV.hookKey){
throw new Error('ignoreHook required hookKey');
}

if(!this._flags.__ignore_hooks){
this._flags.__ignore_hooks=[];
}

this._flags.__ignore_hooks.push(hookName);
}});


/**
   * Creates an instance of a subclass of AV.Object for the give classname
   * and id.
   * @param  {String|Function} class the className or a subclass of AV.Object.
   * @param {String} id The object id of this model.
   * @return {AV.Object} A new subclass instance of AV.Object.
   */
AV.Object.createWithoutData=function(klass,id,hasData){
var _klass=void 0;
if(_.isString(klass)){
_klass=AV.Object._getSubclass(klass);
}else if(klass.prototype&&klass.prototype instanceof AV.Object){
_klass=klass;
}else{
throw new Error('class must be a string or a subclass of AV.Object.');
}
var object=new _klass();
object.id=id;
object._hasData=hasData;
return object;
};
/**
   * Delete objects in batch.
   * @param {AV.Object[]} objects The <code>AV.Object</code> array to be deleted.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the save
   *     completes.
   */
AV.Object.destroyAll=function(objects){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!objects||objects.length===0){
return _promise2.default.resolve();
}
var objectsByClassNameAndFlags=_.groupBy(objects,function(object){
return(0,_stringify2.default)({
className:object.className,
flags:object._flags});

});
var body={
requests:_.map(objectsByClassNameAndFlags,function(objects){
var ids=_.map(objects,'id').join(',');
return{
method:'DELETE',
path:'/1.1/classes/'+objects[0].className+'/'+ids,
body:objects[0]._flags};

})};

return _request('batch',null,null,'POST',body,options).then(function(response){
var firstError=_.find(response,function(result){
return!result.success;
});
if(firstError)throw new AVError(firstError.error.code,firstError.error.error);
return undefined;
});
};

/**
   * Returns the appropriate subclass for making new instances of the given
   * className string.
   * @private
   */
AV.Object._getSubclass=function(className){
if(!_.isString(className)){
throw new Error('AV.Object._getSubclass requires a string argument.');
}
var ObjectClass=AV.Object._classMap[className];
if(!ObjectClass){
ObjectClass=AV.Object.extend(className);
AV.Object._classMap[className]=ObjectClass;
}
return ObjectClass;
};

/**
   * Creates an instance of a subclass of AV.Object for the given classname.
   * @private
   */
AV.Object._create=function(className,attributes,options){
var ObjectClass=AV.Object._getSubclass(className);
return new ObjectClass(attributes,options);
};

// Set up a map of className to class so that we can create new instances of
// AV Objects from JSON automatically.
AV.Object._classMap={};

AV.Object._extend=AV._extend;

/**
   * Creates a new model with defined attributes,
   * It's the same with
   * <pre>
   *   new AV.Object(attributes, options);
   *  </pre>
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @return {AV.Object}
   * @since v0.4.4
   * @see AV.Object
   * @see AV.Object.extend
   */
AV.Object['new']=function(attributes,options){
return new AV.Object(attributes,options);
};

/**
   * Creates a new subclass of AV.Object for the given AV class name.
   *
   * <p>Every extension of a AV class will inherit from the most recent
   * previous extension of that class. When a AV.Object is automatically
   * created by parsing JSON, it will use the most recent extension of that
   * class.</p>
   *
   * @example
   * var MyClass = AV.Object.extend("MyClass", {
   *     // Instance properties
   * }, {
   *     // Class properties
   * });
   *
   * @param {String} className The name of the AV class backing this model.
   * @param {Object} protoProps Instance properties to add to instances of the
   *     class returned from this method.
   * @param {Object} classProps Class properties to add the class returned from
   *     this method.
   * @return {Class} A new subclass of AV.Object.
   */
AV.Object.extend=function(className,protoProps,classProps){
// Handle the case with only two args.
if(!_.isString(className)){
if(className&&_.has(className,'className')){
return AV.Object.extend(className.className,className,protoProps);
}else{
throw new Error("AV.Object.extend's first argument should be the className.");
}
}

// If someone tries to subclass "User", coerce it to the right type.
if(className==='User'){
className='_User';
}

var NewClassObject=null;
if(_.has(AV.Object._classMap,className)){
var OldClassObject=AV.Object._classMap[className];
// This new subclass has been told to extend both from "this" and from
// OldClassObject. This is multiple inheritance, which isn't supported.
// For now, let's just pick one.
if(protoProps||classProps){
NewClassObject=OldClassObject._extend(protoProps,classProps);
}else{
return OldClassObject;
}
}else{
protoProps=protoProps||{};
protoProps._className=className;
NewClassObject=this._extend(protoProps,classProps);
}
// Extending a subclass should reuse the classname automatically.
NewClassObject.extend=function(arg0){
if(_.isString(arg0)||arg0&&_.has(arg0,'className')){
return AV.Object.extend.apply(NewClassObject,arguments);
}
var newArguments=[className].concat(_.toArray(arguments));
return AV.Object.extend.apply(NewClassObject,newArguments);
};
// Add the query property descriptor.
Object.defineProperty(NewClassObject,'query',(0,_getOwnPropertyDescriptor2.default)(AV.Object,'query'));
NewClassObject['new']=function(attributes,options){
return new NewClassObject(attributes,options);
};
AV.Object._classMap[className]=NewClassObject;
return NewClassObject;
};

// ES6 class syntax support
Object.defineProperty(AV.Object.prototype,'className',{
get:function get(){
var className=this._className||this.constructor._LCClassName||this.constructor.name;
// If someone tries to subclass "User", coerce it to the right type.
if(className==='User'){
return'_User';
}
return className;
}});


/**
   * Register a class.
   * If a subclass of <code>AV.Object</code> is defined with your own implement
   * rather then <code>AV.Object.extend</code>, the subclass must be registered.
   * @param {Function} klass A subclass of <code>AV.Object</code>
   * @param {String} [name] Specify the name of the class. Useful when the class might be uglified.
   * @example
   * class Person extend AV.Object {}
   * AV.Object.register(Person);
   */
AV.Object.register=function(klass,name){
if(!(klass.prototype instanceof AV.Object)){
throw new Error('registered class is not a subclass of AV.Object');
}
var className=name||klass.name;
if(!className.length){
throw new Error('registered class must be named');
}
if(name){
klass._LCClassName=name;
}
AV.Object._classMap[className]=klass;
};

/**
   * Get a new Query of the current class
   * @name query
   * @memberof AV.Object
   * @type AV.Query
   * @readonly
   * @since v3.1.0
   * @example
   * const Post = AV.Object.extend('Post');
   * Post.query.equalTo('author', 'leancloud').find().then();
   */
Object.defineProperty(AV.Object,'query',{
get:function get(){
return new AV.Query(this.prototype.className);
}});


AV.Object._findUnsavedChildren=function(objects,children,files){
AV._traverse(objects,function(object){
if(object instanceof AV.Object){
if(object.dirty()){
children.push(object);
}
return;
}

if(object instanceof AV.File){
if(!object.id){
files.push(object);
}
return;
}
});
};

AV.Object._canBeSerializedAsValue=function(object){
var canBeSerializedAsValue=true;

if(object instanceof AV.Object||object instanceof AV.File){
canBeSerializedAsValue=!!object.id;
}else if(_.isArray(object)){
AV._arrayEach(object,function(child){
if(!AV.Object._canBeSerializedAsValue(child)){
canBeSerializedAsValue=false;
}
});
}else if(_.isObject(object)){
AV._objectEach(object,function(child){
if(!AV.Object._canBeSerializedAsValue(child)){
canBeSerializedAsValue=false;
}
});
}

return canBeSerializedAsValue;
};

AV.Object._deepSaveAsync=function(object,model,options){
var unsavedChildren=[];
var unsavedFiles=[];
AV.Object._findUnsavedChildren(object,unsavedChildren,unsavedFiles);

var promise=_promise2.default.resolve();
_.each(unsavedFiles,function(file){
promise=promise.then(function(){
return file.save();
});
});

var objects=_.uniq(unsavedChildren);
var remaining=_.uniq(objects);

return promise.then(function(){
return continueWhile(function(){
return remaining.length>0;
},function(){
// Gather up all the objects that can be saved in this batch.
var batch=[];
var newRemaining=[];
AV._arrayEach(remaining,function(object){
// Limit batches to 20 objects.
if(batch.length>20){
newRemaining.push(object);
return;
}

if(object._canBeSerialized()){
batch.push(object);
}else{
newRemaining.push(object);
}
});
remaining=newRemaining;

// If we can't save any objects, there must be a circular reference.
if(batch.length===0){
return _promise2.default.reject(new AVError(AVError.OTHER_CAUSE,'Tried to save a batch with a cycle.'));
}

// Reserve a spot in every object's save queue.
var readyToStart=_promise2.default.resolve(_.map(batch,function(object){
return object._allPreviousSaves||_promise2.default.resolve();
}));

// Save a single batch, whether previous saves succeeded or failed.
var bathSavePromise=readyToStart.then(function(){
return _request('batch',null,null,'POST',{
requests:_.map(batch,function(object){
var method=object.id?'PUT':'POST';

var json=object._getSaveJSON();

_.extend(json,object._flags);

var route='classes';
var className=object.className;
var path='/'+route+'/'+className;
if(object.className==='_User'&&!object.id){
// Special-case user sign-up.
path='/users';
}

var path='/1.1'+path;
if(object.id){
path=path+'/'+object.id;
}

object._startSave();

return{
method:method,
path:path,
body:json};

})},
options).then(function(response){
var results=_.map(batch,function(object,i){
if(response[i].success){
object._finishSave(object.parse(response[i].success));
return object;
}
object._cancelSave();
return new AVError(response[i].error.code,response[i].error.error);
});
return handleBatchResults(results);
});
});
AV._arrayEach(batch,function(object){
object._allPreviousSaves=bathSavePromise;
});
return bathSavePromise;
});
}).then(function(){
return object;
});
};
};

/***/},
/* 143 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(144),__esModule:true};

/***/},
/* 144 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(145);
var $Object=__webpack_require__(1).Object;
module.exports=function getOwnPropertyDescriptor(it,key){
return $Object.getOwnPropertyDescriptor(it,key);
};


/***/},
/* 145 */
/***/function(module,exports,__webpack_require__){

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject=__webpack_require__(15);
var $getOwnPropertyDescriptor=__webpack_require__(77).f;

__webpack_require__(47)('getOwnPropertyDescriptor',function(){
return function getOwnPropertyDescriptor(it,key){
return $getOwnPropertyDescriptor(toIObject(it),key);
};
});


/***/},
/* 146 */
/***/function(module,exports,__webpack_require__){

"use strict";


exports.__esModule=true;

var _isIterable2=__webpack_require__(79);

var _isIterable3=_interopRequireDefault(_isIterable2);

var _getIterator2=__webpack_require__(149);

var _getIterator3=_interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

exports.default=function(){
function sliceIterator(arr,i){
var _arr=[];
var _n=true;
var _d=false;
var _e=undefined;

try{
for(var _i=(0,_getIterator3.default)(arr),_s;!(_n=(_s=_i.next()).done);_n=true){
_arr.push(_s.value);

if(i&&_arr.length===i)break;
}
}catch(err){
_d=true;
_e=err;
}finally{
try{
if(!_n&&_i["return"])_i["return"]();
}finally{
if(_d)throw _e;
}
}

return _arr;
}

return function(arr,i){
if(Array.isArray(arr)){
return arr;
}else if((0,_isIterable3.default)(Object(arr))){
return sliceIterator(arr,i);
}else{
throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
};
}();

/***/},
/* 147 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(33);
__webpack_require__(21);
module.exports=__webpack_require__(148);


/***/},
/* 148 */
/***/function(module,exports,__webpack_require__){

var classof=__webpack_require__(44);
var ITERATOR=__webpack_require__(4)('iterator');
var Iterators=__webpack_require__(17);
module.exports=__webpack_require__(1).isIterable=function(it){
var O=Object(it);
return O[ITERATOR]!==undefined||
'@@iterator'in O
// eslint-disable-next-line no-prototype-builtins
||Iterators.hasOwnProperty(classof(O));
};


/***/},
/* 149 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(150),__esModule:true};

/***/},
/* 150 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(33);
__webpack_require__(21);
module.exports=__webpack_require__(151);


/***/},
/* 151 */
/***/function(module,exports,__webpack_require__){

var anObject=__webpack_require__(8);
var get=__webpack_require__(45);
module.exports=__webpack_require__(1).getIterator=function(it){
var iterFn=get(it);
if(typeof iterFn!='function')throw TypeError(it+' is not iterable!');
return anObject(iterFn.call(it));
};


/***/},
/* 152 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);
var AVError=__webpack_require__(16);

module.exports=function(AV){
AV.Role=AV.Object.extend('_Role',
/** @lends AV.Role.prototype */{
// Instance Methods

/**
     * Represents a Role on the AV server. Roles represent groupings of
     * Users for the purposes of granting permissions (e.g. specifying an ACL
     * for an Object). Roles are specified by their sets of child users and
     * child roles, all of which are granted any permissions that the parent
     * role has.
     *
     * <p>Roles must have a name (which cannot be changed after creation of the
     * role), and must specify an ACL.</p>
     * An AV.Role is a local representation of a role persisted to the AV
     * cloud.
     * @class AV.Role
     * @param {String} name The name of the Role to create.
     * @param {AV.ACL} acl The ACL for this role.
     */
constructor:function constructor(name,acl){
if(_.isString(name)){
AV.Object.prototype.constructor.call(this,null,null);
this.setName(name);
}else{
AV.Object.prototype.constructor.call(this,name,acl);
}
if(acl){
if(!(acl instanceof AV.ACL)){
throw new TypeError('acl must be an instance of AV.ACL');
}else{
this.setACL(acl);
}
}
},

/**
     * Gets the name of the role.  You can alternatively call role.get("name")
     *
     * @return {String} the name of the role.
     */
getName:function getName(){
return this.get('name');
},

/**
     * Sets the name for a role. This value must be set before the role has
     * been saved to the server, and cannot be set once the role has been
     * saved.
     *
     * <p>
     *   A role's name can only contain alphanumeric characters, _, -, and
     *   spaces.
     * </p>
     *
     * <p>This is equivalent to calling role.set("name", name)</p>
     *
     * @param {String} name The name of the role.
     */
setName:function setName(name,options){
return this.set('name',name,options);
},

/**
     * Gets the AV.Relation for the AV.Users that are direct
     * children of this role. These users are granted any privileges that this
     * role has been granted (e.g. read or write access through ACLs). You can
     * add or remove users from the role through this relation.
     *
     * <p>This is equivalent to calling role.relation("users")</p>
     *
     * @return {AV.Relation} the relation for the users belonging to this
     *     role.
     */
getUsers:function getUsers(){
return this.relation('users');
},

/**
     * Gets the AV.Relation for the AV.Roles that are direct
     * children of this role. These roles' users are granted any privileges that
     * this role has been granted (e.g. read or write access through ACLs). You
     * can add or remove child roles from this role through this relation.
     *
     * <p>This is equivalent to calling role.relation("roles")</p>
     *
     * @return {AV.Relation} the relation for the roles belonging to this
     *     role.
     */
getRoles:function getRoles(){
return this.relation('roles');
},

/**
     * @ignore
     */
validate:function validate(attrs,options){
if('name'in attrs&&attrs.name!==this.getName()){
var newName=attrs.name;
if(this.id&&this.id!==attrs.objectId){
// Check to see if the objectId being set matches this.id.
// This happens during a fetch -- the id is set before calling fetch.
// Let the name be set in this case.
return new AVError(AVError.OTHER_CAUSE,"A role's name can only be set before it has been saved.");
}
if(!_.isString(newName)){
return new AVError(AVError.OTHER_CAUSE,"A role's name must be a String.");
}
if(!/^[0-9a-zA-Z\-_ ]+$/.test(newName)){
return new AVError(AVError.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _,"+' -, and spaces.');
}
}
if(AV.Object.prototype.validate){
return AV.Object.prototype.validate.call(this,attrs,options);
}
return false;
}});

};

/***/},
/* 153 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

var _defineProperty2=__webpack_require__(154);

var _defineProperty3=_interopRequireDefault(_defineProperty2);

var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var uuid=__webpack_require__(69);
var AVError=__webpack_require__(16);

var _require=__webpack_require__(5),
AVRequest=_require._request,
request=_require.request;

var _require2=__webpack_require__(20),
getAdapter=_require2.getAdapter;

var PLATFORM_ANONYMOUS='anonymous';
var PLATFORM_QQAPP='lc_qqapp';

var mergeUnionDataIntoAuthData=function mergeUnionDataIntoAuthData(){
var defaultUnionIdPlatform=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'weixin';
return function(authData,unionId){
var _ref=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},
_ref$unionIdPlatform=_ref.unionIdPlatform,
unionIdPlatform=_ref$unionIdPlatform===undefined?defaultUnionIdPlatform:_ref$unionIdPlatform,
_ref$asMainAccount=_ref.asMainAccount,
asMainAccount=_ref$asMainAccount===undefined?false:_ref$asMainAccount;

if(typeof unionId!=='string')throw new AVError(AVError.OTHER_CAUSE,'unionId is not a string');
if(typeof unionIdPlatform!=='string')throw new AVError(AVError.OTHER_CAUSE,'unionIdPlatform is not a string');

return _.extend({},authData,{
platform:unionIdPlatform,
unionid:unionId,
main_account:Boolean(asMainAccount)});

};
};

module.exports=function(AV){
/**
   * @class
   *
   * <p>An AV.User object is a local representation of a user persisted to the
   * LeanCloud server. This class is a subclass of an AV.Object, and retains the
   * same functionality of an AV.Object, but also extends it with various
   * user specific methods, like authentication, signing up, and validation of
   * uniqueness.</p>
   */
AV.User=AV.Object.extend('_User',
/** @lends AV.User.prototype */{
// Instance Variables
_isCurrentUser:false,

// Instance Methods

/**
     * Internal method to handle special fields in a _User response.
     * @private
     */
_mergeMagicFields:function _mergeMagicFields(attrs){
if(attrs.sessionToken){
this._sessionToken=attrs.sessionToken;
delete attrs.sessionToken;
}
return AV.User.__super__._mergeMagicFields.call(this,attrs);
},

/**
     * Removes null values from authData (which exist temporarily for
     * unlinking)
     * @private
     */
_cleanupAuthData:function _cleanupAuthData(){
if(!this.isCurrent()){
return;
}
var authData=this.get('authData');
if(!authData){
return;
}
AV._objectEach(this.get('authData'),function(value,key){
if(!authData[key]){
delete authData[key];
}
});
},

/**
     * Synchronizes authData for all providers.
     * @private
     */
_synchronizeAllAuthData:function _synchronizeAllAuthData(){
var authData=this.get('authData');
if(!authData){
return;
}

var self=this;
AV._objectEach(this.get('authData'),function(value,key){
self._synchronizeAuthData(key);
});
},

/**
     * Synchronizes auth data for a provider (e.g. puts the access token in the
     * right place to be used by the Facebook SDK).
     * @private
     */
_synchronizeAuthData:function _synchronizeAuthData(provider){
if(!this.isCurrent()){
return;
}
var authType;
if(_.isString(provider)){
authType=provider;
provider=AV.User._authProviders[authType];
}else{
authType=provider.getAuthType();
}
var authData=this.get('authData');
if(!authData||!provider){
return;
}
var success=provider.restoreAuthentication(authData[authType]);
if(!success){
this.dissociateAuthData(provider);
}
},

_handleSaveResult:function _handleSaveResult(makeCurrent){
// Clean up and synchronize the authData object, removing any unset values
if(makeCurrent&&!AV._config.disableCurrentUser){
this._isCurrentUser=true;
}
this._cleanupAuthData();
this._synchronizeAllAuthData();
// Don't keep the password around.
delete this._serverData.password;
this._rebuildEstimatedDataForKey('password');
this._refreshCache();
if((makeCurrent||this.isCurrent())&&!AV._config.disableCurrentUser){
// Some old version of leanengine-node-sdk will overwrite
// AV.User._saveCurrentUser which returns no Promise.
// So we need a Promise wrapper.
return _promise2.default.resolve(AV.User._saveCurrentUser(this));
}else{
return _promise2.default.resolve();
}
},

/**
     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
     * call linkWith on the user (even if it doesn't exist yet on the server).
     * @private
     */
_linkWith:function _linkWith(provider,data){
var _this=this;

var _ref2=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},
_ref2$failOnNotExist=_ref2.failOnNotExist,
failOnNotExist=_ref2$failOnNotExist===undefined?false:_ref2$failOnNotExist;

var authType;
if(_.isString(provider)){
authType=provider;
provider=AV.User._authProviders[provider];
}else{
authType=provider.getAuthType();
}
if(data){
return this.save({authData:(0,_defineProperty3.default)({},authType,data)},{
fetchWhenSave:!!this.get('authData'),
_failOnNotExist:failOnNotExist}).
then(function(model){
return model._handleSaveResult(true).then(function(){
return model;
});
});
}else{
return provider.authenticate().then(function(result){
return _this._linkWith(provider,result);
});
}
},

/**
     * Associate the user with a third party authData.
     * @since 3.3.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
associateWithAuthData:function associateWithAuthData(authData,platform){
return this._linkWith(platform,authData);
},


/**
     * Associate the user with a third party authData and unionId.
     * @since 3.5.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
associateWithAuthDataAndUnionId:function associateWithAuthDataAndUnionId(authData,platform,unionId,unionOptions){
return this._linkWith(platform,mergeUnionDataIntoAuthData()(authData,unionId,unionOptions));
},


/**
     * Associate the user with the identity of the current mini-app.
     * @since 4.6.0
     * @param {Object} [authInfo]
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     * @return {Promise<AV.User>}
     */
associateWithMiniApp:function associateWithMiniApp(authInfo,option){
var _this2=this;

if(authInfo===undefined){
var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo().then(function(authInfo){
return _this2._linkWith(authInfo.provider,authInfo.authData,option);
});
}
return this._linkWith(authInfo.provider,authInfo.authData,option);
},


/**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的微信帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithQQApp:function associateWithQQApp(){
var _this3=this;

var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref3$preferUnionId=_ref3.preferUnionId,
preferUnionId=_ref3$preferUnionId===undefined?false:_ref3$preferUnionId,
_ref3$unionIdPlatform=_ref3.unionIdPlatform,
unionIdPlatform=_ref3$unionIdPlatform===undefined?'qq':_ref3$unionIdPlatform,
_ref3$asMainAccount=_ref3.asMainAccount,
asMainAccount=_ref3$asMainAccount===undefined?true:_ref3$asMainAccount;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
authInfo.provider=PLATFORM_QQAPP;
return _this3.associateWithMiniApp(authInfo);
});
},


/**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithWeapp:function associateWithWeapp(){
var _this4=this;

var _ref4=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref4$preferUnionId=_ref4.preferUnionId,
preferUnionId=_ref4$preferUnionId===undefined?false:_ref4$preferUnionId,
_ref4$unionIdPlatform=_ref4.unionIdPlatform,
unionIdPlatform=_ref4$unionIdPlatform===undefined?'weixin':_ref4$unionIdPlatform,
_ref4$asMainAccount=_ref4.asMainAccount,
asMainAccount=_ref4$asMainAccount===undefined?true:_ref4$asMainAccount;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
return _this4.associateWithMiniApp(authInfo);
});
},


/**
     * @deprecated renamed to {@link AV.User#associateWithWeapp}
     * @return {Promise<AV.User>}
     */
linkWithWeapp:function linkWithWeapp(options){
console.warn('DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替');
return this.associateWithWeapp(options);
},


/**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的 QQ 帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithQQAppWithUnionId:function associateWithQQAppWithUnionId(unionId){
var _this5=this;

var _ref5=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref5$unionIdPlatform=_ref5.unionIdPlatform,
unionIdPlatform=_ref5$unionIdPlatform===undefined?'qq':_ref5$unionIdPlatform,
_ref5$asMainAccount=_ref5.asMainAccount,
asMainAccount=_ref5$asMainAccount===undefined?false:_ref5$asMainAccount;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
authInfo.provider=PLATFORM_QQAPP;
return _this5.associateWithMiniApp(authInfo);
});
},


/**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
associateWithWeappWithUnionId:function associateWithWeappWithUnionId(unionId){
var _this6=this;

var _ref6=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref6$unionIdPlatform=_ref6.unionIdPlatform,
unionIdPlatform=_ref6$unionIdPlatform===undefined?'weixin':_ref6$unionIdPlatform,
_ref6$asMainAccount=_ref6.asMainAccount,
asMainAccount=_ref6$asMainAccount===undefined?false:_ref6$asMainAccount;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
return _this6.associateWithMiniApp(authInfo);
});
},


/**
     * Unlinks a user from a service.
     * @param {string} platform
     * @return {Promise<AV.User>}
     * @since 3.3.0
     */
dissociateAuthData:function dissociateAuthData(provider){
this.unset('authData.'+provider);
return this.save().then(function(model){
return model._handleSaveResult(true).then(function(){
return model;
});
});
},


/**
     * @private
     * @deprecated
     */
_unlinkFrom:function _unlinkFrom(provider){
console.warn('DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替');
return this.dissociateAuthData(provider);
},


/**
     * Checks whether a user is linked to a service.
     * @private
     */
_isLinked:function _isLinked(provider){
var authType;
if(_.isString(provider)){
authType=provider;
}else{
authType=provider.getAuthType();
}
var authData=this.get('authData')||{};
return!!authData[authType];
},

/**
     * Checks whether a user is anonymous.
     * @since 3.9.0
     * @return {boolean}
     */
isAnonymous:function isAnonymous(){
return this._isLinked(PLATFORM_ANONYMOUS);
},


logOut:function logOut(){
this._logOutWithAll();
this._isCurrentUser=false;
},

/**
     * Deauthenticates all providers.
     * @private
     */
_logOutWithAll:function _logOutWithAll(){
var authData=this.get('authData');
if(!authData){
return;
}
var self=this;
AV._objectEach(this.get('authData'),function(value,key){
self._logOutWith(key);
});
},

/**
     * Deauthenticates a single provider (e.g. removing access tokens from the
     * Facebook SDK).
     * @private
     */
_logOutWith:function _logOutWith(provider){
if(!this.isCurrent()){
return;
}
if(_.isString(provider)){
provider=AV.User._authProviders[provider];
}
if(provider&&provider.deauthenticate){
provider.deauthenticate();
}
},

/**
     * Signs up a new user. You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUp
     */
signUp:function signUp(attrs,options){
var error;

var username=attrs&&attrs.username||this.get('username');
if(!username||username===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up user with an empty name.');
throw error;
}

var password=attrs&&attrs.password||this.get('password');
if(!password||password===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up user with an empty password.');
throw error;
}

return this.save(attrs,options).then(function(model){
if(model.isAnonymous()){
model.unset('authData.'+PLATFORM_ANONYMOUS);
model._opSetQueue=[{}];
}
return model._handleSaveResult(true).then(function(){
return model;
});
});
},

/**
     * Signs up a new user with mobile phone and sms code.
     * You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
signUpOrlogInWithMobilePhone:function signUpOrlogInWithMobilePhone(attrs){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var error;

var mobilePhoneNumber=attrs&&attrs.mobilePhoneNumber||this.get('mobilePhoneNumber');
if(!mobilePhoneNumber||mobilePhoneNumber===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up or login user by mobilePhoneNumber '+'with an empty mobilePhoneNumber.');
throw error;
}

var smsCode=attrs&&attrs.smsCode||this.get('smsCode');
if(!smsCode||smsCode===''){
error=new AVError(AVError.OTHER_CAUSE,'Cannot sign up or login user by mobilePhoneNumber  '+'with an empty smsCode.');
throw error;
}

options._makeRequest=function(route,className,id,method,json){
return AVRequest('usersByMobilePhone',null,null,'POST',json);
};
return this.save(attrs,options).then(function(model){
delete model.attributes.smsCode;
delete model._serverData.smsCode;
return model._handleSaveResult(true).then(function(){
return model;
});
});
},

/**
     * The same with {@link AV.User.loginWithAuthData}, except that you can set attributes before login.
     * @since 3.7.0
     */
loginWithAuthData:function loginWithAuthData(authData,platform,options){
return this._linkWith(platform,authData,options);
},


/**
     * The same with {@link AV.User.loginWithAuthDataAndUnionId}, except that you can set attributes before login.
     * @since 3.7.0
     */
loginWithAuthDataAndUnionId:function loginWithAuthDataAndUnionId(authData,platform,unionId,unionLoginOptions){
return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData,unionId,unionLoginOptions),platform,unionLoginOptions);
},


/**
     * The same with {@link AV.User.loginWithWeapp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.7.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
loginWithWeapp:function loginWithWeapp(){
var _this7=this;

var _ref7=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref7$preferUnionId=_ref7.preferUnionId,
preferUnionId=_ref7$preferUnionId===undefined?false:_ref7$preferUnionId,
_ref7$unionIdPlatform=_ref7.unionIdPlatform,
unionIdPlatform=_ref7$unionIdPlatform===undefined?'weixin':_ref7$unionIdPlatform,
_ref7$asMainAccount=_ref7.asMainAccount,
asMainAccount=_ref7$asMainAccount===undefined?true:_ref7$asMainAccount,
_ref7$failOnNotExist=_ref7.failOnNotExist,
failOnNotExist=_ref7$failOnNotExist===undefined?false:_ref7$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
return _this7.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * The same with {@link AV.User.loginWithWeappWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.13.0
     */
loginWithWeappWithUnionId:function loginWithWeappWithUnionId(unionId){
var _this8=this;

var _ref8=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref8$unionIdPlatform=_ref8.unionIdPlatform,
unionIdPlatform=_ref8$unionIdPlatform===undefined?'weixin':_ref8$unionIdPlatform,
_ref8$asMainAccount=_ref8.asMainAccount,
asMainAccount=_ref8$asMainAccount===undefined?false:_ref8$asMainAccount,
_ref8$failOnNotExist=_ref8.failOnNotExist,
failOnNotExist=_ref8$failOnNotExist===undefined?false:_ref8$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
return _this8.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * The same with {@link AV.User.loginWithQQApp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     */
loginWithQQApp:function loginWithQQApp(){
var _this9=this;

var _ref9=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref9$preferUnionId=_ref9.preferUnionId,
preferUnionId=_ref9$preferUnionId===undefined?false:_ref9$preferUnionId,
_ref9$unionIdPlatform=_ref9.unionIdPlatform,
unionIdPlatform=_ref9$unionIdPlatform===undefined?'qq':_ref9$unionIdPlatform,
_ref9$asMainAccount=_ref9.asMainAccount,
asMainAccount=_ref9$asMainAccount===undefined?true:_ref9$asMainAccount,
_ref9$failOnNotExist=_ref9.failOnNotExist,
failOnNotExist=_ref9$failOnNotExist===undefined?false:_ref9$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
authInfo.provider=PLATFORM_QQAPP;
return _this9.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * The same with {@link AV.User.loginWithQQAppWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     */
loginWithQQAppWithUnionId:function loginWithQQAppWithUnionId(unionId){
var _this10=this;

var _ref10=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref10$unionIdPlatfor=_ref10.unionIdPlatform,
unionIdPlatform=_ref10$unionIdPlatfor===undefined?'qq':_ref10$unionIdPlatfor,
_ref10$asMainAccount=_ref10.asMainAccount,
asMainAccount=_ref10$asMainAccount===undefined?false:_ref10$asMainAccount,
_ref10$failOnNotExist=_ref10.failOnNotExist,
failOnNotExist=_ref10$failOnNotExist===undefined?false:_ref10$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
authInfo.provider=PLATFORM_QQAPP;
return _this10.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * The same with {@link AV.User.loginWithMiniApp}, except that you can set attributes before login.
     * @since 4.6.0
     */
loginWithMiniApp:function loginWithMiniApp(authInfo,option){
var _this11=this;

if(authInfo===undefined){
var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo().then(function(authInfo){
return _this11.loginWithAuthData(authInfo.authData,authInfo.provider,option);
});
}
return this.loginWithAuthData(authInfo.authData,authInfo.provider,option);
},


/**
     * Logs in a AV.User. On success, this saves the session to localStorage,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * @see AV.User.logIn
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     */
logIn:function logIn(){
var model=this;
var request=AVRequest('login',null,null,'POST',this.toJSON());
return request.then(function(resp){
var serverAttrs=model.parse(resp);
model._finishFetch(serverAttrs);
return model._handleSaveResult(true).then(function(){
if(!serverAttrs.smsCode)delete model.attributes['smsCode'];
return model;
});
});
},
/**
     * @see AV.Object#save
     */
save:function save(arg1,arg2,arg3){
var attrs,options;
if(_.isObject(arg1)||_.isNull(arg1)||_.isUndefined(arg1)){
attrs=arg1;
options=arg2;
}else{
attrs={};
attrs[arg1]=arg2;
options=arg3;
}
options=options||{};

return AV.Object.prototype.save.call(this,attrs,options).then(function(model){
return model._handleSaveResult(false).then(function(){
return model;
});
});
},

/**
     * Follow a user
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as
     *  conditions of followerQuery/followeeQuery.
     * @param {AuthOptions} [authOptions]
     */
follow:function follow(options,authOptions){
if(!this.id){
throw new Error('Please signin.');
}
var user=void 0;
var attributes=void 0;
if(options.user){
user=options.user;
attributes=options.attributes;
}else{
user=options;
}
var userObjectId=_.isString(user)?user:user.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
var route='users/'+this.id+'/friendship/'+userObjectId;
var request=AVRequest(route,null,null,'POST',AV._encode(attributes),authOptions);
return request;
},

/**
     * Unfollow a user.
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to unfollow.
     * @param {AuthOptions} [authOptions]
     */
unfollow:function unfollow(options,authOptions){
if(!this.id){
throw new Error('Please signin.');
}
var user=void 0;
if(options.user){
user=options.user;
}else{
user=options;
}
var userObjectId=_.isString(user)?user:user.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
var route='users/'+this.id+'/friendship/'+userObjectId;
var request=AVRequest(route,null,null,'DELETE',null,authOptions);
return request;
},

/**
     * Get the user's followers and followees.
     * @since 4.8.0
     * @param {Object} [options]
     * @param {Number} [options.skip]
     * @param {Number} [options.limit]
     * @param {AuthOptions} [authOptions]
     */
getFollowersAndFollowees:function getFollowersAndFollowees(options,authOptions){
if(!this.id){
throw new Error('Please signin.');
}
return request({
method:'GET',
path:'/users/'+this.id+'/followersAndFollowees',
query:{
skip:options&&options.skip,
limit:options&&options.limit,
include:'follower,followee',
keys:'follower,followee'},

authOptions:authOptions}).
then(function(_ref11){
var followers=_ref11.followers,
followees=_ref11.followees;
return{
followers:followers.map(function(_ref12){
var follower=_ref12.follower;
return AV._decode(follower);
}),
followees:followees.map(function(_ref13){
var followee=_ref13.followee;
return AV._decode(followee);
})};

});
},

/**
     *Create a follower query to query the user's followers.
     * @since 0.3.0
     * @see AV.User#followerQuery
     */
followerQuery:function followerQuery(){
return AV.User.followerQuery(this.id);
},

/**
     *Create a followee query to query the user's followees.
     * @since 0.3.0
     * @see AV.User#followeeQuery
     */
followeeQuery:function followeeQuery(){
return AV.User.followeeQuery(this.id);
},

/**
     * @see AV.Object#fetch
     */
fetch:function fetch(fetchOptions,options){
return AV.Object.prototype.fetch.call(this,fetchOptions,options).then(function(model){
return model._handleSaveResult(false).then(function(){
return model;
});
});
},

/**
     * Update user's new password safely based on old password.
     * @param {String} oldPassword the old password.
     * @param {String} newPassword the new password.
     * @param {AuthOptions} options
     */
updatePassword:function updatePassword(oldPassword,newPassword,options){
var _this12=this;

var route='users/'+this.id+'/updatePassword';
var params={
old_password:oldPassword,
new_password:newPassword};

var request=AVRequest(route,null,null,'PUT',params,options);
return request.then(function(resp){
_this12._finishFetch(_this12.parse(resp));
return _this12._handleSaveResult(true).then(function(){
return resp;
});
});
},

/**
     * Returns true if <code>current</code> would return this user.
     * @see AV.User#current
     */
isCurrent:function isCurrent(){
return this._isCurrentUser;
},

/**
     * Returns get("username").
     * @return {String}
     * @see AV.Object#get
     */
getUsername:function getUsername(){
return this.get('username');
},

/**
     * Returns get("mobilePhoneNumber").
     * @return {String}
     * @see AV.Object#get
     */
getMobilePhoneNumber:function getMobilePhoneNumber(){
return this.get('mobilePhoneNumber');
},

/**
     * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
     * @param {String} mobilePhoneNumber
     * @return {Boolean}
     * @see AV.Object#set
     */
setMobilePhoneNumber:function setMobilePhoneNumber(phone,options){
return this.set('mobilePhoneNumber',phone,options);
},

/**
     * Calls set("username", username, options) and returns the result.
     * @param {String} username
     * @return {Boolean}
     * @see AV.Object#set
     */
setUsername:function setUsername(username,options){
return this.set('username',username,options);
},

/**
     * Calls set("password", password, options) and returns the result.
     * @param {String} password
     * @return {Boolean}
     * @see AV.Object#set
     */
setPassword:function setPassword(password,options){
return this.set('password',password,options);
},

/**
     * Returns get("email").
     * @return {String}
     * @see AV.Object#get
     */
getEmail:function getEmail(){
return this.get('email');
},

/**
     * Calls set("email", email, options) and returns the result.
     * @param {String} email
     * @param {AuthOptions} options
     * @return {Boolean}
     * @see AV.Object#set
     */
setEmail:function setEmail(email,options){
return this.set('email',email,options);
},

/**
     * Checks whether this user is the current user and has been authenticated.
     * @deprecated 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，
     * 如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id
     * @return (Boolean) whether this user is the current user and is logged in.
     */
authenticated:function authenticated(){
console.warn('DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。');
return!!this._sessionToken&&!AV._config.disableCurrentUser&&AV.User.current()&&AV.User.current().id===this.id;
},

/**
     * Detects if current sessionToken is valid.
     *
     * @since 2.0.0
     * @return Promise.<Boolean>
     */
isAuthenticated:function isAuthenticated(){
var _this13=this;

return _promise2.default.resolve().then(function(){
return!!_this13._sessionToken&&AV.User._fetchUserBySessionToken(_this13._sessionToken).then(function(){
return true;
},function(error){
if(error.code===211){
return false;
}
throw error;
});
});
},


/**
     * Get sessionToken of current user.
     * @return {String} sessionToken
     */
getSessionToken:function getSessionToken(){
return this._sessionToken;
},


/**
     * Refresh sessionToken of current user.
     * @since 2.1.0
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.User>} user with refreshed sessionToken
     */
refreshSessionToken:function refreshSessionToken(options){
var _this14=this;

return AVRequest('users/'+this.id+'/refreshSessionToken',null,null,'PUT',null,options).then(function(response){
_this14._finishFetch(response);
return _this14._handleSaveResult(true).then(function(){
return _this14;
});
});
},


/**
     * Get this user's Roles.
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.Role[]>} A promise that is fulfilled with the roles when
     *     the query is complete.
     */
getRoles:function getRoles(options){
return AV.Relation.reverseQuery('_Role','users',this).find(options);
}},

/** @lends AV.User */{
// Class Variables

// The currently logged-in user.
_currentUser:null,

// Whether currentUser is known to match the serialized version on disk.
// This is useful for saving a localstorage check if you try to load
// _currentUser frequently while there is none stored.
_currentUserMatchesDisk:false,

// The localStorage key suffix that the current user is stored under.
_CURRENT_USER_KEY:'currentUser',

// The mapping of auth provider names to actual providers
_authProviders:{},

// Class Methods

/**
     * Signs up a new user with a username (or email) and password.
     * This will create a new AV.User on the server, and also persist the
     * session in localStorage so that you can access the user using
     * {@link #current}.
     *
     * @param {String} username The username (or email) to sign up with.
     * @param {String} password The password to sign up with.
     * @param {Object} [attrs] Extra fields to set on the new user.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that is fulfilled with the user when
     *     the signup completes.
     * @see AV.User#signUp
     */
signUp:function signUp(username,password,attrs,options){
attrs=attrs||{};
attrs.username=username;
attrs.password=password;
var user=AV.Object._create('_User');
return user.signUp(attrs,options);
},

/**
     * Logs in a user with a username (or email) and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} username The username (or email) to log in with.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logIn:function logIn(username,password){
var user=AV.Object._create('_User');
user._finishFetch({username:username,password:password});
return user.logIn();
},

/**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * @param {String} sessionToken The sessionToken to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
become:function become(sessionToken){
return this._fetchUserBySessionToken(sessionToken).then(function(user){
return user._handleSaveResult(true).then(function(){
return user;
});
});
},

_fetchUserBySessionToken:function _fetchUserBySessionToken(sessionToken){
if(sessionToken===undefined){
return _promise2.default.reject(new Error('The sessionToken cannot be undefined'));
}

var user=AV.Object._create('_User');
return request({
method:'GET',
path:'/users/me',
authOptions:{
sessionToken:sessionToken}}).

then(function(resp){
var serverAttrs=user.parse(resp);
user._finishFetch(serverAttrs);
return user;
});
},

/**
     * Logs in a user with a mobile phone number and sms code sent by
     * AV.User.requestLoginSmsCode.On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logInWithMobilePhoneSmsCode:function logInWithMobilePhoneSmsCode(mobilePhone,smsCode){
var user=AV.Object._create('_User');
user._finishFetch({mobilePhoneNumber:mobilePhone,smsCode:smsCode});
return user.logIn();
},

/**
     * Signs up or logs in a user with a mobilePhoneNumber and smsCode.
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
     * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
     * @param {Object} attributes  The user's other attributes such as username etc.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
signUpOrlogInWithMobilePhone:function signUpOrlogInWithMobilePhone(mobilePhoneNumber,smsCode,attrs,options){
attrs=attrs||{};
attrs.mobilePhoneNumber=mobilePhoneNumber;
attrs.smsCode=smsCode;
var user=AV.Object._create('_User');
return user.signUpOrlogInWithMobilePhone(attrs,options);
},

/**
     * Logs in a user with a mobile phone number and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
logInWithMobilePhone:function logInWithMobilePhone(mobilePhone,password){
var user=AV.Object._create('_User');
user._finishFetch({
mobilePhoneNumber:mobilePhone,
password:password});

return user.logIn();
},

/**
     * Logs in a user with email and password.
     *
     * @since 3.13.0
     * @param {String} email The user's email.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
loginWithEmail:function loginWithEmail(email,password){
var user=AV.Object._create('_User');
user._finishFetch({
email:email,
password:password});

return user.logIn();
},


/**
     * Signs up or logs in a user with a third party auth data(AccessToken).
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @example AV.User.loginWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     * @see {@link https://leancloud.cn/docs/js_guide.html#绑定第三方平台账户}
     */
loginWithAuthData:function loginWithAuthData(authData,platform,options){
return AV.User._logInWith(platform,authData,options);
},


/**
     * @deprecated renamed to {@link AV.User.loginWithAuthData}
     */
signUpOrlogInWithAuthData:function signUpOrlogInWithAuthData(){
console.warn('DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替');
return this.loginWithAuthData.apply(this,arguments);
},


/**
     * Signs up or logs in a user with a third party authData and unionId.
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example AV.User.loginWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
loginWithAuthDataAndUnionId:function loginWithAuthDataAndUnionId(authData,platform,unionId,unionLoginOptions){
return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData,unionId,unionLoginOptions),platform,unionLoginOptions);
},


/**
     * @deprecated renamed to {@link AV.User.loginWithAuthDataAndUnionId}
     * @since 3.5.0
     */
signUpOrlogInWithAuthDataAndUnionId:function signUpOrlogInWithAuthDataAndUnionId(){
console.warn('DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替');
return this.loginWithAuthDataAndUnionId.apply(this,arguments);
},


/**
     * Merge unionId into authInfo.
     * @since 4.6.0
     * @param {Object} authInfo
     * @param {String} unionId
     * @param {Object} [unionIdOption]
     * @param {Boolean} [unionIdOption.asMainAccount] If true, the unionId will be associated with the user.
     */
mergeUnionId:function mergeUnionId(authInfo,unionId){
var _ref14=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},
_ref14$asMainAccount=_ref14.asMainAccount,
asMainAccount=_ref14$asMainAccount===undefined?false:_ref14$asMainAccount;

authInfo=JSON.parse((0,_stringify2.default)(authInfo));
var _authInfo=authInfo,
authData=_authInfo.authData,
platform=_authInfo.platform;

authData.platform=platform;
authData.main_account=asMainAccount;
authData.unionid=unionId;
return authInfo;
},


/**
     * 使用当前使用微信小程序的微信用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 2.0.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
loginWithWeapp:function loginWithWeapp(){
var _this15=this;

var _ref15=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref15$preferUnionId=_ref15.preferUnionId,
preferUnionId=_ref15$preferUnionId===undefined?false:_ref15$preferUnionId,
_ref15$unionIdPlatfor=_ref15.unionIdPlatform,
unionIdPlatform=_ref15$unionIdPlatfor===undefined?'weixin':_ref15$unionIdPlatfor,
_ref15$asMainAccount=_ref15.asMainAccount,
asMainAccount=_ref15$asMainAccount===undefined?true:_ref15$asMainAccount,
_ref15$failOnNotExist=_ref15.failOnNotExist,
failOnNotExist=_ref15$failOnNotExist===undefined?false:_ref15$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
return _this15.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * 使用当前使用微信小程序的微信用户身份注册或登录，
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 3.13.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.       * @return {Promise.<AV.User>}
     */
loginWithWeappWithUnionId:function loginWithWeappWithUnionId(unionId){
var _this16=this;

var _ref16=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref16$unionIdPlatfor=_ref16.unionIdPlatform,
unionIdPlatform=_ref16$unionIdPlatfor===undefined?'weixin':_ref16$unionIdPlatfor,
_ref16$asMainAccount=_ref16.asMainAccount,
asMainAccount=_ref16$asMainAccount===undefined?false:_ref16$asMainAccount,
_ref16$failOnNotExist=_ref16.failOnNotExist,
failOnNotExist=_ref16$failOnNotExist===undefined?false:_ref16$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
return _this16.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
loginWithQQApp:function loginWithQQApp(){
var _this17=this;

var _ref17=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
_ref17$preferUnionId=_ref17.preferUnionId,
preferUnionId=_ref17$preferUnionId===undefined?false:_ref17$preferUnionId,
_ref17$unionIdPlatfor=_ref17.unionIdPlatform,
unionIdPlatform=_ref17$unionIdPlatfor===undefined?'qq':_ref17$unionIdPlatfor,
_ref17$asMainAccount=_ref17.asMainAccount,
asMainAccount=_ref17$asMainAccount===undefined?true:_ref17$asMainAccount,
_ref17$failOnNotExist=_ref17.failOnNotExist,
failOnNotExist=_ref17$failOnNotExist===undefined?false:_ref17$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({
preferUnionId:preferUnionId,
asMainAccount:asMainAccount,
platform:unionIdPlatform}).
then(function(authInfo){
authInfo.provider=PLATFORM_QQAPP;
return _this17.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise.<AV.User>}
     */
loginWithQQAppWithUnionId:function loginWithQQAppWithUnionId(unionId){
var _this18=this;

var _ref18=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref18$unionIdPlatfor=_ref18.unionIdPlatform,
unionIdPlatform=_ref18$unionIdPlatfor===undefined?'qq':_ref18$unionIdPlatfor,
_ref18$asMainAccount=_ref18.asMainAccount,
asMainAccount=_ref18$asMainAccount===undefined?false:_ref18$asMainAccount,
_ref18$failOnNotExist=_ref18.failOnNotExist,
failOnNotExist=_ref18$failOnNotExist===undefined?false:_ref18$failOnNotExist;

var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo({platform:unionIdPlatform}).then(function(authInfo){
authInfo=AV.User.mergeUnionId(authInfo,unionId,{asMainAccount:asMainAccount});
authInfo.provider=PLATFORM_QQAPP;
return _this18.loginWithMiniApp(authInfo,{failOnNotExist:failOnNotExist});
});
},


/**
     * Register or login using the identity of the current mini-app.
     * @param {Object} authInfo
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     */
loginWithMiniApp:function loginWithMiniApp(authInfo,option){
var _this19=this;

if(authInfo===undefined){
var getAuthInfo=getAdapter('getAuthInfo');
return getAuthInfo().then(function(authInfo){
return _this19.loginWithAuthData(authInfo.authData,authInfo.provider,option);
});
}
return this.loginWithAuthData(authInfo.authData,authInfo.provider,option);
},


/**
     * Only use for DI in tests to produce deterministic IDs.
     */
_genId:function _genId(){
return uuid();
},


/**
     * Creates an anonymous user.
     *
     * @since 3.9.0
     * @return {Promise.<AV.User>}
     */
loginAnonymously:function loginAnonymously(){
return this.loginWithAuthData({
id:AV.User._genId()},
'anonymous');
},
associateWithAuthData:function associateWithAuthData(userObj,platform,authData){
console.warn('DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替');
return userObj._linkWith(platform,authData);
},

/**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     * @return {Promise}
     */
logOut:function logOut(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return _promise2.default.resolve(null);
}

if(AV.User._currentUser!==null){
AV.User._currentUser._logOutWithAll();
AV.User._currentUser._isCurrentUser=false;
}
AV.User._currentUserMatchesDisk=true;
AV.User._currentUser=null;
return AV.localStorage.removeItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function(){
return AV._refreshSubscriptionId();
});
},

/**
     *Create a follower query for special user to query the user's followers.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
followerQuery:function followerQuery(userObjectId){
if(!userObjectId||!_.isString(userObjectId)){
throw new Error('Invalid user object id.');
}
var query=new AV.FriendShipQuery('_Follower');
query._friendshipTag='follower';
query.equalTo('user',AV.Object.createWithoutData('_User',userObjectId));
return query;
},

/**
     *Create a followee query for special user to query the user's followees.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
followeeQuery:function followeeQuery(userObjectId){
if(!userObjectId||!_.isString(userObjectId)){
throw new Error('Invalid user object id.');
}
var query=new AV.FriendShipQuery('_Followee');
query._friendshipTag='followee';
query.equalTo('user',AV.Object.createWithoutData('_User',userObjectId));
return query;
},

/**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     forgot their password.
     * @return {Promise}
     */
requestPasswordReset:function requestPasswordReset(email){
var json={email:email};
var request=AVRequest('requestPasswordReset',null,null,'POST',json);
return request;
},

/**
     * Requests a verify email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * verify their email address on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     doesn't verify their email address.
     * @return {Promise}
     */
requestEmailVerify:function requestEmailVerify(email){
var json={email:email};
var request=AVRequest('requestEmailVerify',null,null,'POST',json);
return request;
},

/**
     * Requests a verify sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * verify their mobile phone number by calling AV.User.verifyMobilePhone
     *
     * @param {String} mobilePhoneNumber The mobile phone number associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
requestMobilePhoneVerify:function requestMobilePhoneVerify(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestMobilePhoneVerify',null,null,'POST',data,options);
return request;
},

/**
     * Requests a reset password sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * reset their account's password by calling AV.User.resetPasswordBySmsCode
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
requestPasswordResetBySmsCode:function requestPasswordResetBySmsCode(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestPasswordResetBySmsCode',null,null,'POST',data,options);
return request;
},

/**
     * Requests a change mobile phone number sms code to be sent to the mobilePhoneNumber.
     * This sms code allows current user to reset it's mobilePhoneNumber by
     * calling {@link AV.User.changePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {Number} [ttl] ttl of sms code (default is 6 minutes)
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
requestChangePhoneNumber:function requestChangePhoneNumber(mobilePhoneNumber,ttl,options){
var data={mobilePhoneNumber:mobilePhoneNumber};
if(ttl){
data.ttl=options.ttl;
}
if(options&&options.validateToken){
data.validate_token=options.validateToken;
}
return AVRequest('requestChangePhoneNumber',null,null,'POST',data,options);
},


/**
     * Makes a call to reset user's account mobilePhoneNumber by sms code.
     * The sms code is sent by {@link AV.User.requestChangePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {String} code The sms code.
     * @return {Promise}
     */
changePhoneNumber:function changePhoneNumber(mobilePhoneNumber,code){
var data={mobilePhoneNumber:mobilePhoneNumber,code:code};
return AVRequest('changePhoneNumber',null,null,'POST',data);
},


/**
     * Makes a call to reset user's account password by sms code and new password.
     * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {String} password The new password.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
resetPasswordBySmsCode:function resetPasswordBySmsCode(code,password){
var json={password:password};
var request=AVRequest('resetPasswordBySmsCode',null,code,'PUT',json);
return request;
},

/**
     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
     * If verify successfully,the user mobilePhoneVerified attribute will be true.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
verifyMobilePhone:function verifyMobilePhone(code){
var request=AVRequest('verifyMobilePhone',null,code,'POST',null);
return request;
},

/**
     * Requests a logIn sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * login by AV.User.logInWithMobilePhoneSmsCode function.
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
requestLoginSmsCode:function requestLoginSmsCode(mobilePhoneNumber){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var data={
mobilePhoneNumber:mobilePhoneNumber};

if(options.validateToken){
data.validate_token=options.validateToken;
}
var request=AVRequest('requestLoginSmsCode',null,null,'POST',data,options);
return request;
},

/**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {Promise.<AV.User>} resolved with the currently logged in AV.User.
     */
currentAsync:function currentAsync(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return _promise2.default.resolve(null);
}

if(AV.User._currentUser){
return _promise2.default.resolve(AV.User._currentUser);
}

if(AV.User._currentUserMatchesDisk){
return _promise2.default.resolve(AV.User._currentUser);
}

return AV.localStorage.getItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function(userData){
if(!userData){
return null;
}

// Load the user from local storage.
AV.User._currentUserMatchesDisk=true;

AV.User._currentUser=AV.Object._create('_User');
AV.User._currentUser._isCurrentUser=true;

var json=JSON.parse(userData);
AV.User._currentUser.id=json._id;
delete json._id;
AV.User._currentUser._sessionToken=json._sessionToken;
delete json._sessionToken;
AV.User._currentUser._finishFetch(json);
//AV.User._currentUser.set(json);

AV.User._currentUser._synchronizeAllAuthData();
AV.User._currentUser._refreshCache();
AV.User._currentUser._opSetQueue=[{}];
return AV.User._currentUser;
});
},

/**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {AV.User} The currently logged in AV.User.
     */
current:function current(){
if(AV._config.disableCurrentUser){
console.warn('AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
return null;
}

if(AV.localStorage.async){
var error=new Error('Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.');
error.code='SYNC_API_NOT_AVAILABLE';
throw error;
}

if(AV.User._currentUser){
return AV.User._currentUser;
}

if(AV.User._currentUserMatchesDisk){
return AV.User._currentUser;
}

// Load the user from local storage.
AV.User._currentUserMatchesDisk=true;

var userData=AV.localStorage.getItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));
if(!userData){
return null;
}
AV.User._currentUser=AV.Object._create('_User');
AV.User._currentUser._isCurrentUser=true;

var json=JSON.parse(userData);
AV.User._currentUser.id=json._id;
delete json._id;
AV.User._currentUser._sessionToken=json._sessionToken;
delete json._sessionToken;
AV.User._currentUser._finishFetch(json);
//AV.User._currentUser.set(json);

AV.User._currentUser._synchronizeAllAuthData();
AV.User._currentUser._refreshCache();
AV.User._currentUser._opSetQueue=[{}];
return AV.User._currentUser;
},

/**
     * Persists a user as currentUser to localStorage, and into the singleton.
     * @private
     */
_saveCurrentUser:function _saveCurrentUser(user){
var promise;
if(AV.User._currentUser!==user){
promise=AV.User.logOut();
}else{
promise=_promise2.default.resolve();
}
return promise.then(function(){
user._isCurrentUser=true;
AV.User._currentUser=user;

var json=user._toFullJSON();
json._id=user.id;
json._sessionToken=user._sessionToken;
return AV.localStorage.setItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY),(0,_stringify2.default)(json)).then(function(){
AV.User._currentUserMatchesDisk=true;
return AV._refreshSubscriptionId();
});
});
},

_registerAuthenticationProvider:function _registerAuthenticationProvider(provider){
AV.User._authProviders[provider.getAuthType()]=provider;
// Synchronize the current user with the auth provider.
if(!AV._config.disableCurrentUser&&AV.User.current()){
AV.User.current()._synchronizeAuthData(provider.getAuthType());
}
},

_logInWith:function _logInWith(provider,authData,options){
var user=AV.Object._create('_User');
return user._linkWith(provider,authData,options);
}});

};

/***/},
/* 154 */
/***/function(module,exports,__webpack_require__){

"use strict";


exports.__esModule=true;

var _defineProperty=__webpack_require__(74);

var _defineProperty2=_interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

exports.default=function(obj,key,value){
if(key in obj){
(0,_defineProperty2.default)(obj,key,{
value:value,
enumerable:true,
configurable:true,
writable:true});

}else{
obj[key]=value;
}

return obj;
};

/***/},
/* 155 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var debug=__webpack_require__(19)('leancloud:query');
var AVError=__webpack_require__(16);

var _require=__webpack_require__(5),
_request=_require._request,
request=_require.request;

var _require2=__webpack_require__(6),
ensureArray=_require2.ensureArray,
transformFetchOptions=_require2.transformFetchOptions,
continueWhile=_require2.continueWhile;

var requires=function requires(value,message){
if(value===undefined){
throw new Error(message);
}
};

// AV.Query is a way to create a list of AV.Objects.
module.exports=function(AV){
/**
   * Creates a new AV.Query for the given AV.Object subclass.
   * @param {Class|String} objectClass An instance of a subclass of AV.Object, or a AV className string.
   * @class
   *
   * <p>AV.Query defines a query that is used to fetch AV.Objects. The
   * most common use case is finding all objects that match a query through the
   * <code>find</code> method. For example, this sample code fetches all objects
   * of class <code>MyClass</code>. It calls a different function depending on
   * whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.find().then(function(results) {
   *   // results is an array of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to retrieve a single object whose id is
   * known, through the get method. For example, this sample code fetches an
   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
   * different function depending on whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.get(myId).then(function(object) {
   *   // object is an instance of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to count the number of objects that match
   * the query without retrieving all of those objects. For example, this
   * sample code counts the number of objects of the class <code>MyClass</code>
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.count().then(function(number) {
   *   // There are number instances of MyClass.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   */
AV.Query=function(objectClass){
if(_.isString(objectClass)){
objectClass=AV.Object._getSubclass(objectClass);
}

this.objectClass=objectClass;

this.className=objectClass.prototype.className;

this._where={};
this._include=[];
this._select=[];
this._limit=-1;// negative limit means, do not send a limit
this._skip=0;
this._defaultParams={};
};

/**
   * Constructs a AV.Query that is the OR of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.or(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an or of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to OR.
   * @return {AV.Query} The query that is the OR of the passed in queries.
   */
AV.Query.or=function(){
var queries=_.toArray(arguments);
var className=null;
AV._arrayEach(queries,function(q){
if(_.isNull(className)){
className=q.className;
}

if(className!==q.className){
throw new Error('All queries must be for the same class');
}
});
var query=new AV.Query(className);
query._orQuery(queries);
return query;
};

/**
   * Constructs a AV.Query that is the AND of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.and(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an 'and' of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to AND.
   * @return {AV.Query} The query that is the AND of the passed in queries.
   */
AV.Query.and=function(){
var queries=_.toArray(arguments);
var className=null;
AV._arrayEach(queries,function(q){
if(_.isNull(className)){
className=q.className;
}

if(className!==q.className){
throw new Error('All queries must be for the same class');
}
});
var query=new AV.Query(className);
query._andQuery(queries);
return query;
};

/**
   * Retrieves a list of AVObjects that satisfy the CQL.
   * CQL syntax please see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   *
   * @param {String} cql A CQL string, see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   * @param {Array} pvalues An array contains placeholder values.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is resolved with the results when
   * the query completes.
   */
AV.Query.doCloudQuery=function(cql,pvalues,options){
var params={cql:cql};
if(_.isArray(pvalues)){
params.pvalues=pvalues;
}else{
options=pvalues;
}

var request=_request('cloudQuery',null,null,'GET',params,options);
return request.then(function(response){
//query to process results.
var query=new AV.Query(response.className);
var results=_.map(response.results,function(json){
var obj=query._newObject(response);
if(obj._finishFetch){
obj._finishFetch(query._processResult(json),true);
}
return obj;
});
return{
results:results,
count:response.count,
className:response.className};

});
};

/**
   * Return a query with conditions from json.
   * This can be useful to send a query from server side to client side.
   * @since 4.0.0
   * @param {Object} json from {@link AV.Query#toJSON}
   * @return {AV.Query}
   */
AV.Query.fromJSON=function(_ref){
var className=_ref.className,
where=_ref.where,
include=_ref.include,
select=_ref.select,
includeACL=_ref.includeACL,
limit=_ref.limit,
skip=_ref.skip,
order=_ref.order;

if(typeof className!=='string'){
throw new TypeError('Invalid Query JSON, className must be a String.');
}
var query=new AV.Query(className);
_.extend(query,{
_where:where,
_include:include,
_select:select,
_includeACL:includeACL,
_limit:limit,
_skip:skip,
_order:order});

return query;
};

AV.Query._extend=AV._extend;

_.extend(AV.Query.prototype,
/** @lends AV.Query.prototype */{
//hook to iterate result. Added by dennis<xzhuang@avoscloud.com>.
_processResult:function _processResult(obj){
return obj;
},

/**
     * Constructs an AV.Object whose id is already known by fetching data from
     * the server.
     *
     * @param {String} objectId The id of the object to be fetched.
     * @param {AuthOptions} options
     * @return {Promise.<AV.Object>}
     */
get:function get(objectId,options){
if(!_.isString(objectId)){
throw new Error('objectId must be a string');
}
if(objectId===''){
return _promise2.default.reject(new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.'));
}

var obj=this._newObject();
obj.id=objectId;

var queryJSON=this._getParams();
var fetchOptions={};

if(queryJSON.keys)fetchOptions.keys=queryJSON.keys;
if(queryJSON.include)fetchOptions.include=queryJSON.include;
if(queryJSON.includeACL)fetchOptions.includeACL=queryJSON.includeACL;

return _request('classes',this.className,objectId,'GET',transformFetchOptions(fetchOptions),options).then(function(response){
if(_.isEmpty(response))throw new AVError(AVError.OBJECT_NOT_FOUND,'Object not found.');
obj._finishFetch(obj.parse(response),true);
return obj;
});
},

/**
     * Returns a JSON representation of this query.
     * @return {Object}
     */
toJSON:function toJSON(){
var className=this.className,
where=this._where,
include=this._include,
select=this._select,
includeACL=this._includeACL,
limit=this._limit,
skip=this._skip,
order=this._order;

return{
className:className,
where:where,
include:include,
select:select,
includeACL:includeACL,
limit:limit,
skip:skip,
order:order};

},


_getParams:function _getParams(){
var params=_.extend({},this._defaultParams,{
where:this._where});


if(this._include.length>0){
params.include=this._include.join(',');
}
if(this._select.length>0){
params.keys=this._select.join(',');
}
if(this._includeACL!==undefined){
params.returnACL=this._includeACL;
}
if(this._limit>=0){
params.limit=this._limit;
}
if(this._skip>0){
params.skip=this._skip;
}
if(this._order!==undefined){
params.order=this._order;
}

return params;
},

_newObject:function _newObject(response){
var obj;
if(response&&response.className){
obj=new AV.Object(response.className);
}else{
obj=new this.objectClass();
}
return obj;
},
_createRequest:function _createRequest(){
var params=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._getParams();
var options=arguments[1];
var path=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'/classes/'+this.className;

if(encodeURIComponent((0,_stringify2.default)(params)).length>2000){
var body={
requests:[{
method:'GET',
path:'/1.1'+path,
params:params}]};


return request({
path:'/batch',
method:'POST',
data:body,
authOptions:options}).
then(function(response){
var result=response[0];
if(result.success){
return result.success;
}
var error=new Error(result.error.error||'Unknown batch error');
error.code=result.error.code;
throw error;
});
}
return request({
method:'GET',
path:path,
query:params,
authOptions:options});

},
_parseResponse:function _parseResponse(response){
var _this=this;

return _.map(response.results,function(json){
var obj=_this._newObject(response);
if(obj._finishFetch){
obj._finishFetch(_this._processResult(json),true);
}
return obj;
});
},


/**
     * Retrieves a list of AVObjects that satisfy this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
find:function find(options){
var request=this._createRequest(undefined,options);
return request.then(this._parseResponse.bind(this));
},


/**
     * scan a Query. masterKey required.
     *
     * @since 2.1.0
     * @param {object} [options]
     * @param {string} [options.orderedBy] specify the key to sort
     * @param {number} [options.batchSize] specify the batch size for each request
     * @param {AuthOptions} [authOptions]
     * @return {AsyncIterator.<AV.Object>}
     * @example const scan = new AV.Query(TestClass).scan({
     *   orderedBy: 'objectId',
     *   batchSize: 10,
     * }, {
     *   useMasterKey: true,
     * });
     * const getTen = () => Promise.all(new Array(10).fill(0).map(() => scan.next()));
     * getTen().then(results => {
     *   // results are fisrt 10 instances of TestClass
     *   return getTen();
     * }).then(results => {
     *   // 11 - 20
     * });
     */
scan:function scan(){
var _this2=this;

var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
orderedBy=_ref2.orderedBy,
batchSize=_ref2.batchSize;

var authOptions=arguments[1];

var condition=this._getParams();
debug('scan %O',condition);
if(condition.order){
console.warn('The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.');
delete condition.order;
}
if(condition.skip){
console.warn('The skip option of the query is ignored for Query#scan.');
delete condition.skip;
}
if(condition.limit){
console.warn('The limit option of the query is ignored for Query#scan.');
delete condition.limit;
}
if(orderedBy)condition.scan_key=orderedBy;
if(batchSize)condition.limit=batchSize;
var promise=_promise2.default.resolve([]);
var cursor=void 0;
var done=false;
return{
next:function next(){
promise=promise.then(function(remainResults){
if(done)return[];
if(remainResults.length>1)return remainResults;
// no cursor means we have reached the end
// except for the first time
if(!cursor&&remainResults.length!==0){
done=true;
return remainResults;
}
// when only 1 item left in queue
// start the next request to see if it is the last one
return _request('scan/classes',_this2.className,null,'GET',cursor?_.extend({},condition,{cursor:cursor}):condition,authOptions).then(function(response){
cursor=response.cursor;
return _this2._parseResponse(response);
}).then(function(results){
if(!results.length)done=true;
return remainResults.concat(results);
});
});
return promise.then(function(remainResults){
return remainResults.shift();
}).then(function(result){
return{
value:result,
done:done};

});
}};

},


/**
     * Delete objects retrieved by this query.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     */
destroyAll:function destroyAll(options){
var self=this;
return self.find(options).then(function(objects){
return AV.Object.destroyAll(objects,options);
});
},

/**
     * Counts the number of objects that match this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the count when
     * the query completes.
     */
count:function count(options){
var params=this._getParams();
params.limit=0;
params.count=1;
var request=this._createRequest(params,options);

return request.then(function(response){
return response.count;
});
},

/**
     * Retrieves at most one AV.Object that satisfies this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the object when
     * the query completes.
     */
first:function first(options){
var self=this;

var params=this._getParams();
params.limit=1;
var request=this._createRequest(params,options);

return request.then(function(response){
return _.map(response.results,function(json){
var obj=self._newObject();
if(obj._finishFetch){
obj._finishFetch(self._processResult(json),true);
}
return obj;
})[0];
});
},

/**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
skip:function skip(n){
requires(n,'undefined is not a valid skip value');
this._skip=n;
return this;
},

/**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
limit:function limit(n){
requires(n,'undefined is not a valid limit value');
this._limit=n;
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that the AV.Object must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
equalTo:function equalTo(key,value){
requires(key,'undefined is not a valid key');
requires(value,'undefined is not a valid value');
this._where[key]=AV._encode(value);
return this;
},

/**
     * Helper for condition queries
     * @private
     */
_addCondition:function _addCondition(key,condition,value){
requires(key,'undefined is not a valid condition key');
requires(condition,'undefined is not a valid condition');
requires(value,'undefined is not a valid condition value');

// Check if we already have a condition
if(!this._where[key]){
this._where[key]={};
}
this._where[key][condition]=AV._encode(value);
return this;
},

/**
     * Add a constraint to the query that requires a particular
     * <strong>array</strong> key's length to be equal to the provided value.
     * @param {String} key The array key to check.
     * @param value The length value.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
sizeEqualTo:function sizeEqualTo(key,value){
this._addCondition(key,'$size',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be not equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that must not be equalled.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
notEqualTo:function notEqualTo(key,value){
this._addCondition(key,'$ne',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be less than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
lessThan:function lessThan(key,value){
this._addCondition(key,'$lt',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
greaterThan:function greaterThan(key,value){
this._addCondition(key,'$gt',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be less than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
lessThanOrEqualTo:function lessThanOrEqualTo(key,value){
this._addCondition(key,'$lte',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
greaterThanOrEqualTo:function greaterThanOrEqualTo(key,value){
this._addCondition(key,'$gte',value);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
containedIn:function containedIn(key,values){
this._addCondition(key,'$in',values);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * not be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
notContainedIn:function notContainedIn(key,values){
this._addCondition(key,'$nin',values);
return this;
},

/**
     * Add a constraint to the query that requires a particular key's value to
     * contain each one of the provided list of values.
     * @param {String} key The key to check.  This key's value must be an array.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
containsAll:function containsAll(key,values){
this._addCondition(key,'$all',values);
return this;
},

/**
     * Add a constraint for finding objects that contain the given key.
     * @param {String} key The key that should exist.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
exists:function exists(key){
this._addCondition(key,'$exists',true);
return this;
},

/**
     * Add a constraint for finding objects that do not contain a given key.
     * @param {String} key The key that should not exist
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotExist:function doesNotExist(key){
this._addCondition(key,'$exists',false);
return this;
},

/**
     * Add a regular expression constraint for finding string values that match
     * the provided regular expression.
     * This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {RegExp} regex The regular expression pattern to match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matches:function matches(key,regex,modifiers){
this._addCondition(key,'$regex',regex);
if(!modifiers){
modifiers='';
}
// Javascript regex options support mig as inline options but store them
// as properties of the object. We support mi & should migrate them to
// modifiers
if(regex.ignoreCase){
modifiers+='i';
}
if(regex.multiline){
modifiers+='m';
}

if(modifiers&&modifiers.length){
this._addCondition(key,'$options',modifiers);
}
return this;
},

/**
     * Add a constraint that requires that a key's value matches a AV.Query
     * constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matchesQuery:function matchesQuery(key,query){
var queryJSON=query._getParams();
queryJSON.className=query.className;
this._addCondition(key,'$inQuery',queryJSON);
return this;
},

/**
     * Add a constraint that requires that a key's value not matches a
     * AV.Query constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotMatchQuery:function doesNotMatchQuery(key,query){
var queryJSON=query._getParams();
queryJSON.className=query.className;
this._addCondition(key,'$notInQuery',queryJSON);
return this;
},

/**
     * Add a constraint that requires that a key's value matches a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     matched.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
matchesKeyInQuery:function matchesKeyInQuery(key,queryKey,query){
var queryJSON=query._getParams();
queryJSON.className=query.className;
this._addCondition(key,'$select',{key:queryKey,query:queryJSON});
return this;
},

/**
     * Add a constraint that requires that a key's value not match a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     excluded.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
doesNotMatchKeyInQuery:function doesNotMatchKeyInQuery(key,queryKey,query){
var queryJSON=query._getParams();
queryJSON.className=query.className;
this._addCondition(key,'$dontSelect',{
key:queryKey,
query:queryJSON});

return this;
},

/**
     * Add constraint that at least one of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
_orQuery:function _orQuery(queries){
var queryJSON=_.map(queries,function(q){
return q._getParams().where;
});

this._where.$or=queryJSON;
return this;
},

/**
     * Add constraint that both of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
_andQuery:function _andQuery(queries){
var queryJSON=_.map(queries,function(q){
return q._getParams().where;
});

this._where.$and=queryJSON;
return this;
},

/**
     * Converts a string into a regex that matches it.
     * Surrounding with \Q .. \E does this, we just need to escape \E's in
     * the text separately.
     * @private
     */
_quote:function _quote(s){
return'\\Q'+s.replace('\\E','\\E\\\\E\\Q')+'\\E';
},

/**
     * Add a constraint for finding string values that contain a provided
     * string.  This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} substring The substring that the value must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
contains:function contains(key,value){
this._addCondition(key,'$regex',this._quote(value));
return this;
},

/**
     * Add a constraint for finding string values that start with a provided
     * string.  This query will use the backend index, so it will be fast even
     * for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} prefix The substring that the value must start with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
startsWith:function startsWith(key,value){
this._addCondition(key,'$regex','^'+this._quote(value));
return this;
},

/**
     * Add a constraint for finding string values that end with a provided
     * string.  This will be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} suffix The substring that the value must end with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
endsWith:function endsWith(key,value){
this._addCondition(key,'$regex',this._quote(value)+'$');
return this;
},

/**
     * Sorts the results in ascending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
ascending:function ascending(key){
requires(key,'undefined is not a valid key');
this._order=key;
return this;
},

/**
     * Also sorts the results in ascending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
addAscending:function addAscending(key){
requires(key,'undefined is not a valid key');
if(this._order)this._order+=','+key;else this._order=key;
return this;
},

/**
     * Sorts the results in descending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
descending:function descending(key){
requires(key,'undefined is not a valid key');
this._order='-'+key;
return this;
},

/**
     * Also sorts the results in descending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
addDescending:function addDescending(key){
requires(key,'undefined is not a valid key');
if(this._order)this._order+=',-'+key;else this._order='-'+key;
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
near:function near(key,point){
if(!(point instanceof AV.GeoPoint)){
// Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
point=new AV.GeoPoint(point);
}
this._addCondition(key,'$nearSphere',point);
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param maxDistance Maximum distance (in radians) of results to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinRadians:function withinRadians(key,point,distance){
this.near(key,point);
this._addCondition(key,'$maxDistance',distance);
return this;
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 3958.8 miles.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in miles) of results to
     *     return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinMiles:function withinMiles(key,point,distance){
return this.withinRadians(key,point,distance/3958.8);
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 6371.0 kilometers.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in kilometers) of results
     *     to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinKilometers:function withinKilometers(key,point,distance){
return this.withinRadians(key,point,distance/6371.0);
},

/**
     * Add a constraint to the query that requires a particular key's
     * coordinates be contained within a given rectangular geographic bounding
     * box.
     * @param {String} key The key to be constrained.
     * @param {AV.GeoPoint} southwest
     *     The lower-left inclusive corner of the box.
     * @param {AV.GeoPoint} northeast
     *     The upper-right inclusive corner of the box.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
withinGeoBox:function withinGeoBox(key,southwest,northeast){
if(!(southwest instanceof AV.GeoPoint)){
southwest=new AV.GeoPoint(southwest);
}
if(!(northeast instanceof AV.GeoPoint)){
northeast=new AV.GeoPoint(northeast);
}
this._addCondition(key,'$within',{$box:[southwest,northeast]});
return this;
},

/**
     * Include nested AV.Objects for the provided key.  You can use dot
     * notation to specify which fields in the included object are also fetch.
     * @param {String[]} keys The name of the key to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
include:function include(keys){
var _this3=this;

requires(keys,'undefined is not a valid key');
_.forEach(arguments,function(keys){
_this3._include=_this3._include.concat(ensureArray(keys));
});
return this;
},

/**
     * Include the ACL.
     * @param {Boolean} [value=true] Whether to include the ACL
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
includeACL:function includeACL(){
var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;

this._includeACL=value;
return this;
},

/**
     * Restrict the fields of the returned AV.Objects to include only the
     * provided keys.  If this is called multiple times, then all of the keys
     * specified in each of the calls will be included.
     * @param {String[]} keys The names of the keys to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
select:function select(keys){
var _this4=this;

requires(keys,'undefined is not a valid key');
_.forEach(arguments,function(keys){
_this4._select=_this4._select.concat(ensureArray(keys));
});
return this;
},

/**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     * @param callback {Function} Callback that will be called with each result
     *     of the query.
     * @return {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */
each:function each(callback){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(this._order||this._skip||this._limit>=0){
var error=new Error('Cannot iterate on a query with sort, skip, or limit.');
return _promise2.default.reject(error);
}

var query=new AV.Query(this.objectClass);
// We can override the batch size from the options.
// This is undocumented, but useful for testing.
query._limit=options.batchSize||100;
query._where=_.clone(this._where);
query._include=_.clone(this._include);

query.ascending('objectId');

var finished=false;
return continueWhile(function(){
return!finished;
},function(){
return query.find(options).then(function(results){
var callbacksDone=_promise2.default.resolve();
_.each(results,function(result){
callbacksDone=callbacksDone.then(function(){
return callback(result);
});
});

return callbacksDone.then(function(){
if(results.length>=query._limit){
query.greaterThan('objectId',results[results.length-1].id);
}else{
finished=true;
}
});
});
});
},

/**
     * Subscribe the changes of this query.
     *
     * LiveQuery is not included in the default bundle: {@link https://url.leanapp.cn/enable-live-query}.
     *
     * @since 3.0.0
     * @return {AV.LiveQuery} An eventemitter which can be used to get LiveQuery updates;
     */
subscribe:function subscribe(options){
return AV.LiveQuery.init(this,options);
}});


AV.FriendShipQuery=AV.Query._extend({
_newObject:function _newObject(){
var UserClass=AV.Object._getSubclass('_User');
return new UserClass();
},
_processResult:function _processResult(json){
if(json&&json[this._friendshipTag]){
var user=json[this._friendshipTag];
if(user.__type==='Pointer'&&user.className==='_User'){
delete user.__type;
delete user.className;
}
return user;
}else{
return null;
}
}});

};

/***/},
/* 156 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var EventEmitter=__webpack_require__(71);

var _require=__webpack_require__(6),
inherits=_require.inherits;

var _require2=__webpack_require__(5),
request=_require2.request;

var subscribe=function subscribe(queryJSON,subscriptionId){
return request({
method:'POST',
path:'/LiveQuery/subscribe',
data:{
query:queryJSON,
id:subscriptionId}});


};

module.exports=function(AV){
var requireRealtime=function requireRealtime(){
if(!AV._config.realtime){
throw new Error('LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query');
}
};
/**
   * @class
   * A LiveQuery, created by {@link AV.Query#subscribe} is an EventEmitter notifies changes of the Query.
   * @since 3.0.0
   */
AV.LiveQuery=inherits(EventEmitter,
/** @lends AV.LiveQuery.prototype */{
constructor:function constructor(id,client,queryJSON,subscriptionId){
var _this=this;

EventEmitter.apply(this);
this.id=id;
this._client=client;
this._client.register(this);
this._queryJSON=queryJSON;
this._subscriptionId=subscriptionId;
this._onMessage=this._dispatch.bind(this);
this._onReconnect=function(){
subscribe(_this._queryJSON,_this._subscriptionId).catch(function(error){
return console.error('LiveQuery resubscribe error: '+error.message);
});
};
client.on('message',this._onMessage);
client.on('reconnect',this._onReconnect);
},
_dispatch:function _dispatch(message){
var _this2=this;

message.forEach(function(_ref){
var op=_ref.op,
object=_ref.object,
queryId=_ref.query_id,
updatedKeys=_ref.updatedKeys;

if(queryId!==_this2.id)return;
var target=AV.parseJSON(_.extend({
__type:object.className==='_File'?'File':'Object'},
object));
if(updatedKeys){
/**
           * An existing AV.Object which fulfills the Query you subscribe is updated.
           * @event AV.LiveQuery#update
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
/**
           * An existing AV.Object which doesn't fulfill the Query is updated and now it fulfills the Query.
           * @event AV.LiveQuery#enter
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
/**
           * An existing AV.Object which fulfills the Query is updated and now it doesn't fulfill the Query.
           * @event AV.LiveQuery#leave
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
_this2.emit(op,target,updatedKeys);
}else{
/**
           * A new AV.Object which fulfills the Query you subscribe is created.
           * @event AV.LiveQuery#create
           * @param {AV.Object|AV.File} target updated object
           */
/**
           * An existing AV.Object which fulfills the Query you subscribe is deleted.
           * @event AV.LiveQuery#delete
           * @param {AV.Object|AV.File} target updated object
           */
_this2.emit(op,target);
}
});
},

/**
     * unsubscribe the query
     *
     * @return {Promise}
     */
unsubscribe:function unsubscribe(){
var client=this._client;
client.off('message',this._onMessage);
client.off('reconnect',this._onReconnect);
client.deregister(this);
return request({
method:'POST',
path:'/LiveQuery/unsubscribe',
data:{
id:client.id,
query_id:this.id}});


}},

/** @lends AV.LiveQuery */
{
init:function init(query){
var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
_ref2$subscriptionId=_ref2.subscriptionId,
userDefinedSubscriptionId=_ref2$subscriptionId===undefined?AV._getSubscriptionId():_ref2$subscriptionId;

requireRealtime();
if(!(query instanceof AV.Query))throw new TypeError('LiveQuery must be inited with a Query');
return _promise2.default.resolve(userDefinedSubscriptionId).then(function(subscriptionId){
return AV._config.realtime.createLiveQueryClient(subscriptionId).then(function(liveQueryClient){
var _query$_getParams=query._getParams(),
where=_query$_getParams.where,
keys=_query$_getParams.keys,
returnACL=_query$_getParams.returnACL;

var queryJSON={
where:where,
keys:keys,
returnACL:returnACL,
className:query.className};

var promise=subscribe(queryJSON,subscriptionId).then(function(_ref3){
var queryId=_ref3.query_id;
return new AV.LiveQuery(queryId,liveQueryClient,queryJSON,subscriptionId);
}).finally(function(){
liveQueryClient.deregister(promise);
});
liveQueryClient.register(promise);
return promise;
});
});
},

/**
     * Pause the LiveQuery connection. This is useful to deactivate the SDK when the app is swtiched to background.
     * @static
     * @return void
     */
pause:function pause(){
requireRealtime();
return AV._config.realtime.pause();
},

/**
     * Resume the LiveQuery connection. All subscriptions will be restored after reconnection.
     * @static
     * @return void
     */
resume:function resume(){
requireRealtime();
return AV._config.realtime.resume();
}});

};

/***/},
/* 157 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

var _require=__webpack_require__(6),
tap=_require.tap;

module.exports=function(AV){
/**
   * @class
   * @example
   * AV.Captcha.request().then(captcha => {
   *   captcha.bind({
   *     textInput: 'code', // the id for textInput
   *     image: 'captcha',
   *     verifyButton: 'verify',
   *   }, {
   *     success: (validateCode) => {}, // next step
   *     error: (error) => {}, // present error.message to user
   *   });
   * });
   */
AV.Captcha=function Captcha(options,authOptions){
this._options=options;
this._authOptions=authOptions;
/**
     * The image url of the captcha
     * @type string
     */
this.url=undefined;
/**
     * The captchaToken of the captcha.
     * @type string
     */
this.captchaToken=undefined;
/**
     * The validateToken of the captcha.
     * @type string
     */
this.validateToken=undefined;
};

/**
   * Refresh the captcha
   * @return {Promise.<string>} a new capcha url
   */
AV.Captcha.prototype.refresh=function refresh(){
var _this=this;

return AV.Cloud._requestCaptcha(this._options,this._authOptions).then(function(_ref){
var captchaToken=_ref.captchaToken,
url=_ref.url;

_.extend(_this,{captchaToken:captchaToken,url:url});
return url;
});
};

/**
   * Verify the captcha
   * @param {String} code The code from user input
   * @return {Promise.<string>} validateToken if the code is valid
   */
AV.Captcha.prototype.verify=function verify(code){
var _this2=this;

return AV.Cloud.verifyCaptcha(code,this.captchaToken).then(tap(function(validateToken){
return _this2.validateToken=validateToken;
}));
};

if(true){
/**
     * Bind the captcha to HTMLElements. <b>ONLY AVAILABLE in browsers</b>.
     * @param [elements]
     * @param {String|HTMLInputElement} [elements.textInput] An input element typed text, or the id for the element.
     * @param {String|HTMLImageElement} [elements.image] An image element, or the id for the element.
     * @param {String|HTMLElement} [elements.verifyButton] A button element, or the id for the element.
     * @param [callbacks]
     * @param {Function} [callbacks.success] Success callback will be called if the code is verified. The param `validateCode` can be used for further SMS request.
     * @param {Function} [callbacks.error] Error callback will be called if something goes wrong, detailed in param `error.message`.
     */
AV.Captcha.prototype.bind=function bind(_ref2,_ref3){
var _this3=this;

var textInput=_ref2.textInput,
image=_ref2.image,
verifyButton=_ref2.verifyButton;
var success=_ref3.success,
error=_ref3.error;

if(typeof textInput==='string'){
textInput=document.getElementById(textInput);
if(!textInput)throw new Error('textInput with id '+textInput+' not found');
}
if(typeof image==='string'){
image=document.getElementById(image);
if(!image)throw new Error('image with id '+image+' not found');
}
if(typeof verifyButton==='string'){
verifyButton=document.getElementById(verifyButton);
if(!verifyButton)throw new Error('verifyButton with id '+verifyButton+' not found');
}

this.__refresh=function(){
return _this3.refresh().then(function(url){
image.src=url;
if(textInput){
textInput.value='';
textInput.focus();
}
}).catch(function(err){
return console.warn('refresh captcha fail: '+err.message);
});
};
if(image){
this.__image=image;
image.src=this.url;
image.addEventListener('click',this.__refresh);
}

this.__verify=function(){
var code=textInput.value;
_this3.verify(code).catch(function(err){
_this3.__refresh();
throw err;
}).then(success,error).catch(function(err){
return console.warn('verify captcha fail: '+err.message);
});
};
if(textInput&&verifyButton){
this.__verifyButton=verifyButton;
verifyButton.addEventListener('click',this.__verify);
}
};

/**
     * unbind the captcha from HTMLElements. <b>ONLY AVAILABLE in browsers</b>.
     */
AV.Captcha.prototype.unbind=function unbind(){
if(this.__image)this.__image.removeEventListener('click',this.__refresh);
if(this.__verifyButton)this.__verifyButton.removeEventListener('click',this.__verify);
};
}

/**
   * Request a captcha
   * @param [options]
   * @param {Number} [options.width] width(px) of the captcha, ranged 60-200
   * @param {Number} [options.height] height(px) of the captcha, ranged 30-100
   * @param {Number} [options.size=4] length of the captcha, ranged 3-6. MasterKey required.
   * @param {Number} [options.ttl=60] time to live(s), ranged 10-180. MasterKey required.
   * @return {Promise.<AV.Captcha>}
   */
AV.Captcha.request=function(options,authOptions){
var captcha=new AV.Captcha(options,authOptions);
return captcha.refresh().then(function(){
return captcha;
});
};
};

/***/},
/* 158 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

var _require=__webpack_require__(5),
_request=_require._request,
request=_require.request;

module.exports=function(AV){
/**
   * Contains functions for calling and declaring
   * <p><strong><em>
   *   Some functions are only available from Cloud Code.
   * </em></strong></p>
   *
   * @namespace
   * @borrows AV.Captcha.request as requestCaptcha
   */
AV.Cloud=AV.Cloud||{};

_.extend(AV.Cloud,
/** @lends AV.Cloud */{
/**
     * Makes a call to a cloud function.
     * @param {String} name The function name.
     * @param {Object} [data] The parameters to send to the cloud function.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
run:function run(name,data,options){
return request({
service:'engine',
method:'POST',
path:'/functions/'+name,
data:AV._encode(data,null,true),
authOptions:options}).
then(function(resp){
return AV._decode(resp).result;
});
},


/**
     * Makes a call to a cloud function, you can send {AV.Object} as param or a field of param; the response
     * from server will also be parsed as an {AV.Object}, array of {AV.Object}, or object includes {AV.Object}
     * @param {String} name The function name.
     * @param {Object} [data] The parameters to send to the cloud function.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result of the function.
     */
rpc:function rpc(name,data,options){
if(_.isArray(data)){
return _promise2.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."));
}

return request({
service:'engine',
method:'POST',
path:'/call/'+name,
data:AV._encodeObjectOrArray(data),
authOptions:options}).
then(function(resp){
return AV._decode(resp).result;
});
},


/**
     * Make a call to request server date time.
     * @return {Promise.<Date>} A promise that will be resolved with the result
     * of the function.
     * @since 0.5.9
     */
getServerDate:function getServerDate(){
return _request('date',null,null,'GET').then(function(resp){
return AV._decode(resp);
});
},


/**
     * Makes a call to request an sms code for operation verification.
     * @param {String|Object} data The mobile phone number string or a JSON
     *    object that contains mobilePhoneNumber,template,sign,op,ttl,name etc.
     * @param {String} data.mobilePhoneNumber
     * @param {String} [data.template] sms template name
     * @param {String} [data.sign] sms signature name
     * @param {String} [data.smsType] sending code by `sms` (default) or `voice` call
     * @param {SMSAuthOptions} [options]
     * @return {Promise} A promise that will be resolved if the request succeed
     */
requestSmsCode:function requestSmsCode(data){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(_.isString(data)){
data={mobilePhoneNumber:data};
}
if(!data.mobilePhoneNumber){
throw new Error('Missing mobilePhoneNumber.');
}
if(options.validateToken){
data=_.extend({},data,{
validate_token:options.validateToken});

}
return _request('requestSmsCode',null,null,'POST',data,options);
},


/**
     * Makes a call to verify sms code that sent by AV.Cloud.requestSmsCode
     * @param {String} code The sms code sent by AV.Cloud.requestSmsCode
     * @param {phone} phone The mobile phoner number.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
verifySmsCode:function verifySmsCode(code,phone){
if(!code)throw new Error('Missing sms code.');
var params={};
if(_.isString(phone)){
params['mobilePhoneNumber']=phone;
}

return _request('verifySmsCode',code,null,'POST',params);
},
_requestCaptcha:function _requestCaptcha(options,authOptions){
return _request('requestCaptcha',null,null,'GET',options,authOptions).then(function(_ref){
var url=_ref.captcha_url,
captchaToken=_ref.captcha_token;
return{
captchaToken:captchaToken,
url:url};

});
},


/**
     * Request a captcha.
     */
requestCaptcha:AV.Captcha.request,

/**
     * Verify captcha code. This is the low-level API for captcha.
     * Checkout {@link AV.Captcha} for high abstract APIs.
     * @param {String} code the code from user input
     * @param {String} captchaToken captchaToken returned by {@link AV.Cloud.requestCaptcha}
     * @return {Promise.<String>} validateToken if the code is valid
     */
verifyCaptcha:function verifyCaptcha(code,captchaToken){
return _request('verifyCaptcha',null,null,'POST',{
captcha_code:code,
captcha_token:captchaToken}).
then(function(_ref2){
var validateToken=_ref2.validate_token;
return validateToken;
});
}});

};

/***/},
/* 159 */
/***/function(module,exports,__webpack_require__){

"use strict";


var request=__webpack_require__(5).request;

module.exports=function(AV){
AV.Installation=AV.Object.extend('_Installation');

/**
   * @namespace
   */
AV.Push=AV.Push||{};

/**
   * Sends a push notification.
   * @param {Object} data The data of the push notification.
   * @param {String[]} [data.channels] An Array of channels to push to.
   * @param {Date} [data.push_time] A Date object for when to send the push.
   * @param {Date} [data.expiration_time]  A Date object for when to expire
   *         the push.
   * @param {Number} [data.expiration_interval] The seconds from now to expire the push.
   * @param {Number} [data.flow_control] The clients to notify per second
   * @param {AV.Query} [data.where] An AV.Query over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {String} [data.cql] A CQL statement over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {Object} data.data The data to send as part of the push.
             More details:  https://url.leanapp.cn/pushData
   * @param {AuthOptions} [options]
   * @return {Promise}
   */
AV.Push.send=function(data,options){
if(data.where){
data.where=data.where._getParams().where;
}

if(data.where&&data.cql){
throw new Error("Both where and cql can't be set");
}

if(data.push_time){
data.push_time=data.push_time.toJSON();
}

if(data.expiration_time){
data.expiration_time=data.expiration_time.toJSON();
}

if(data.expiration_time&&data.expiration_interval){
throw new Error("Both expiration_time and expiration_interval can't be set");
}

return request({
service:'push',
method:'POST',
path:'/push',
data:data,
authOptions:options});

};
};

/***/},
/* 160 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

var _typeof2=__webpack_require__(28);

var _typeof3=_interopRequireDefault(_typeof2);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var AVRequest=__webpack_require__(5)._request;

var _require=__webpack_require__(6),
getSessionToken=_require.getSessionToken;

module.exports=function(AV){
var getUser=function getUser(){
var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

var sessionToken=getSessionToken(options);
if(sessionToken){
return AV.User._fetchUserBySessionToken(getSessionToken(options));
}
return AV.User.currentAsync();
};

var getUserPointer=function getUserPointer(options){
return getUser(options).then(function(currUser){
return AV.Object.createWithoutData('_User',currUser.id)._toPointer();
});
};

/**
   * Contains functions to deal with Status in LeanCloud.
   * @class
   */
AV.Status=function(imageUrl,message){
this.data={};
this.inboxType='default';
this.query=null;
if(imageUrl&&(typeof imageUrl==='undefined'?'undefined':(0,_typeof3.default)(imageUrl))==='object'){
this.data=imageUrl;
}else{
if(imageUrl){
this.data.image=imageUrl;
}
if(message){
this.data.message=message;
}
}
return this;
};

_.extend(AV.Status.prototype,
/** @lends AV.Status.prototype */{
/**
     * Gets the value of an attribute in status data.
     * @param {String} attr The string name of an attribute.
     */
get:function get(attr){
return this.data[attr];
},
/**
     * Sets a hash of model attributes on the status data.
     * @param {String} key The key to set.
     * @param {} value The value to give it.
     */
set:function set(key,value){
this.data[key]=value;
return this;
},
/**
     * Destroy this status,then it will not be avaiable in other user's inboxes.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
destroy:function destroy(options){
if(!this.id)return _promise2.default.reject(new Error('The status id is not exists.'));
var request=AVRequest('statuses',null,this.id,'DELETE',options);
return request;
},
/**
     * Cast the AV.Status object to an AV.Object pointer.
     * @return {AV.Object} A AV.Object pointer.
     */
toObject:function toObject(){
if(!this.id)return null;
return AV.Object.createWithoutData('_Status',this.id);
},
_getDataJSON:function _getDataJSON(){
var json=_.clone(this.data);
return AV._encode(json);
},
/**
     * Send a status by a AV.Query object.
     * @since 0.3.0
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the send
     *     completes.
     * @example
     *     // send a status to male users
     *     var status = new AVStatus('image url', 'a message');
     *     status.query = new AV.Query('_User');
     *     status.query.equalTo('gender', 'male');
     *     status.send().then(function(){
     *              //send status successfully.
     *      }, function(err){
     *             //an error threw.
     *             console.dir(err);
     *      });
     */
send:function send(){
var _this=this;

var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
if(!this.query){
return AV.Status.sendStatusToFollowers(this,options);
}

return getUserPointer(options).then(function(currUser){
var query=_this.query._getParams();
query.className=_this.query.className;
var data={};
data.query=query;
_this.data=_this.data||{};
_this.data.source=_this.data.source||currUser;
data.data=_this._getDataJSON();
data.inboxType=_this.inboxType||'default';

return AVRequest('statuses',null,null,'POST',data,options);
}).then(function(response){
_this.id=response.objectId;
_this.createdAt=AV._parseDate(response.createdAt);
return _this;
});
},

_finishFetch:function _finishFetch(serverData){
this.id=serverData.objectId;
this.createdAt=AV._parseDate(serverData.createdAt);
this.updatedAt=AV._parseDate(serverData.updatedAt);
this.messageId=serverData.messageId;
delete serverData.messageId;
delete serverData.objectId;
delete serverData.createdAt;
delete serverData.updatedAt;
this.data=AV._decode(serverData);
}});


/**
   * Send a status to current signined user's followers.
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendStatusToFollowers(status).then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */
AV.Status.sendStatusToFollowers=function(status){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
return getUserPointer(options).then(function(currUser){
var query={};
query.className='_Follower';
query.keys='follower';
query.where={user:currUser};
var data={};
data.query=query;
status.data=status.data||{};
status.data.source=status.data.source||currUser;
data.data=status._getDataJSON();
data.inboxType=status.inboxType||'default';

var request=AVRequest('statuses',null,null,'POST',data,options);
return request.then(function(response){
status.id=response.objectId;
status.createdAt=AV._parseDate(response.createdAt);
return status;
});
});
};

/**
   * <p>Send  a status from current signined user to other user's private status inbox.</p>
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {String} target The target user or user's objectId.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     // send a private status to user '52e84e47e4b0f8de283b079b'
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendPrivateStatus(status, '52e84e47e4b0f8de283b079b').then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */
AV.Status.sendPrivateStatus=function(status,target){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!getSessionToken(options)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
if(!target){
throw new Error('Invalid target user.');
}
var userObjectId=_.isString(target)?target:target.id;
if(!userObjectId){
throw new Error('Invalid target user.');
}
return getUserPointer(options).then(function(currUser){
var query={};
query.className='_User';
query.where={objectId:userObjectId};
var data={};
data.query=query;
status.data=status.data||{};
status.data.source=status.data.source||currUser;
data.data=status._getDataJSON();
data.inboxType='private';
status.inboxType='private';

var request=AVRequest('statuses',null,null,'POST',data,options);
return request.then(function(response){
status.id=response.objectId;
status.createdAt=AV._parseDate(response.createdAt);
return status;
});
});
};

/**
   * Count unread statuses in someone's inbox.
   * @since 0.3.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the count
   *     completes.
   * @example
   *  AV.Status.countUnreadStatuses(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */
AV.Status.countUnreadStatuses=function(owner){
var inboxType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'default';
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!_.isString(inboxType))options=inboxType;
if(!getSessionToken(options)&&owner==null&&!AV.User.current()){
throw new Error('Please signin an user or pass the owner objectId.');
}
return _promise2.default.resolve(owner||getUser(options)).then(function(owner){
var params={};
params.inboxType=AV._encode(inboxType);
params.owner=AV._encode(owner);
return AVRequest('subscribe/statuses/count',null,null,'GET',params,options);
});
};

/**
   * reset unread statuses count in someone's inbox.
   * @since 2.1.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the reset
   *     completes.
   * @example
   *  AV.Status.resetUnreadCount(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */
AV.Status.resetUnreadCount=function(owner){
var inboxType=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'default';
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};

if(!_.isString(inboxType))options=inboxType;
if(!getSessionToken(options)&&owner==null&&!AV.User.current()){
throw new Error('Please signin an user or pass the owner objectId.');
}
return _promise2.default.resolve(owner||getUser(options)).then(function(owner){
var params={};
params.inboxType=AV._encode(inboxType);
params.owner=AV._encode(owner);
return AVRequest('subscribe/statuses/resetUnreadCount',null,null,'POST',params,options);
});
};

/**
   * Create a status query to find someone's published statuses.
   * @since 0.3.0
   * @param {AV.User} source The status source, typically the publisher.
   * @return {AV.Query} The query object for status.
   * @example
   *   //Find current user's published statuses.
   *   var query = AV.Status.statusQuery(AV.User.current());
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */
AV.Status.statusQuery=function(source){
var query=new AV.Query('_Status');
if(source){
query.equalTo('source',source);
}
return query;
};

/**
   * <p>AV.InboxQuery defines a query that is used to fetch somebody's inbox statuses.</p>
   * @class
   */
AV.InboxQuery=AV.Query._extend(
/** @lends AV.InboxQuery.prototype */{
_objectClass:AV.Status,
_sinceId:0,
_maxId:0,
_inboxType:'default',
_owner:null,
_newObject:function _newObject(){
return new AV.Status();
},
_createRequest:function _createRequest(params,options){
return AV.InboxQuery.__super__._createRequest.call(this,params,options,'/subscribe/statuses');
},

/**
     * Sets the messageId of results to skip before returning any results.
     * This is useful for pagination.
     * Default is zero.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
sinceId:function sinceId(id){
this._sinceId=id;
return this;
},
/**
     * Sets the maximal messageId of results。
     * This is useful for pagination.
     * Default is zero that is no limition.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
maxId:function maxId(id){
this._maxId=id;
return this;
},
/**
     * Sets the owner of the querying inbox.
     * @param {AV.User} owner The inbox owner.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
owner:function owner(_owner){
this._owner=_owner;
return this;
},
/**
     * Sets the querying inbox type.default is 'default'.
     * @param {Object} type The inbox type.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
inboxType:function inboxType(type){
this._inboxType=type;
return this;
},
_getParams:function _getParams(){
var params=AV.InboxQuery.__super__._getParams.call(this);
params.owner=AV._encode(this._owner);
params.inboxType=AV._encode(this._inboxType);
params.sinceId=AV._encode(this._sinceId);
params.maxId=AV._encode(this._maxId);
return params;
}});


/**
   * Create a inbox status query to find someone's inbox statuses.
   * @since 0.3.0
   * @param {AV.User} owner The inbox's owner
   * @param {String} inboxType The inbox type,'default' by default.
   * @return {AV.InboxQuery} The inbox query object.
   * @see AV.InboxQuery
   * @example
   *   //Find current user's default inbox statuses.
   *   var query = AV.Status.inboxQuery(AV.User.current());
   *   //find the statuses after the last message id
   *   query.sinceId(lastMessageId);
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */
AV.Status.inboxQuery=function(owner,inboxType){
var query=new AV.InboxQuery(AV.Status);
if(owner){
query._owner=owner;
}
if(inboxType){
query._inboxType=inboxType;
}
return query;
};
};

/***/},
/* 161 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var AVRequest=__webpack_require__(5)._request;

module.exports=function(AV){
/**
   * A builder to generate sort string for app searching.For example:
   * @class
   * @since 0.5.1
   * @example
   *   var builder = new AV.SearchSortBuilder();
   *   builder.ascending('key1').descending('key2','max');
   *   var query = new AV.SearchQuery('Player');
   *   query.sortBy(builder);
   *   query.find().then();
   */
AV.SearchSortBuilder=function(){
this._sortFields=[];
};

_.extend(AV.SearchSortBuilder.prototype,
/** @lends AV.SearchSortBuilder.prototype */{
_addField:function _addField(key,order,mode,missing){
var field={};
field[key]={
order:order||'asc',
mode:mode||'avg',
missing:'_'+(missing||'last')};

this._sortFields.push(field);
return this;
},

/**
     * Sorts the results in ascending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
ascending:function ascending(key,mode,missing){
return this._addField(key,'asc',mode,missing);
},

/**
     * Sorts the results in descending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
descending:function descending(key,mode,missing){
return this._addField(key,'desc',mode,missing);
},

/**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Object} options The other options such as mode,order, unit etc.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
whereNear:function whereNear(key,point,options){
options=options||{};
var field={};
var geo={
lat:point.latitude,
lon:point.longitude};

var m={
order:options.order||'asc',
mode:options.mode||'avg',
unit:options.unit||'km'};

m[key]=geo;
field['_geo_distance']=m;

this._sortFields.push(field);
return this;
},

/**
     * Build a sort string by configuration.
     * @return {String} the sort string.
     */
build:function build(){
return(0,_stringify2.default)(AV._encode(this._sortFields));
}});


/**
   * App searching query.Use just like AV.Query:
   *
   * Visit <a href='https://leancloud.cn/docs/app_search_guide.html'>App Searching Guide</a>
   * for more details.
   * @class
   * @since 0.5.1
   * @example
   *   var query = new AV.SearchQuery('Player');
   *   query.queryString('*');
   *   query.find().then(function(results) {
   *     console.log('Found %d objects', query.hits());
   *     //Process results
   *   });
   */
AV.SearchQuery=AV.Query._extend(
/** @lends AV.SearchQuery.prototype */{
_sid:null,
_hits:0,
_queryString:null,
_highlights:null,
_sortBuilder:null,
_createRequest:function _createRequest(params,options){
return AVRequest('search/select',null,null,'GET',params||this._getParams(),options);
},

/**
     * Sets the sid of app searching query.Default is null.
     * @param {String} sid  Scroll id for searching.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
sid:function sid(_sid){
this._sid=_sid;
return this;
},

/**
     * Sets the query string of app searching.
     * @param {String} q  The query string.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
queryString:function queryString(q){
this._queryString=q;
return this;
},

/**
     * Sets the highlight fields. Such as
     * <pre><code>
     *   query.highlights('title');
     *   //or pass an array.
     *   query.highlights(['title', 'content'])
     * </code></pre>
     * @param {String|String[]} highlights a list of fields.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
highlights:function highlights(_highlights){
var objects;
if(_highlights&&_.isString(_highlights)){
objects=arguments;
}else{
objects=_highlights;
}
this._highlights=objects;
return this;
},

/**
     * Sets the sort builder for this query.
     * @see AV.SearchSortBuilder
     * @param { AV.SearchSortBuilder} builder The sort builder.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     *
     */
sortBy:function sortBy(builder){
this._sortBuilder=builder;
return this;
},

/**
     * Returns the number of objects that match this query.
     * @return {Number}
     */
hits:function hits(){
if(!this._hits){
this._hits=0;
}
return this._hits;
},

_processResult:function _processResult(json){
delete json['className'];
delete json['_app_url'];
delete json['_deeplink'];
return json;
},

/**
     * Returns true when there are more documents can be retrieved by this
     * query instance, you can call find function to get more results.
     * @see AV.SearchQuery#find
     * @return {Boolean}
     */
hasMore:function hasMore(){
return!this._hitEnd;
},

/**
     * Reset current query instance state(such as sid, hits etc) except params
     * for a new searching. After resetting, hasMore() will return true.
     */
reset:function reset(){
this._hitEnd=false;
this._sid=null;
this._hits=0;
},

/**
     * Retrieves a list of AVObjects that satisfy this query.
     * Either options.success or options.error is called when the find
     * completes.
     *
     * @see AV.Query#find
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
find:function find(){
var self=this;

var request=this._createRequest();

return request.then(function(response){
//update sid for next querying.
if(response.sid){
self._oldSid=self._sid;
self._sid=response.sid;
}else{
self._sid=null;
self._hitEnd=true;
}
self._hits=response.hits||0;

return _.map(response.results,function(json){
if(json.className){
response.className=json.className;
}
var obj=self._newObject(response);
obj.appURL=json['_app_url'];
obj._finishFetch(self._processResult(json),true);
return obj;
});
});
},

_getParams:function _getParams(){
var params=AV.SearchQuery.__super__._getParams.call(this);
delete params.where;
if(this.className){
params.clazz=this.className;
}
if(this._sid){
params.sid=this._sid;
}
if(!this._queryString){
throw new Error('Please set query string.');
}else{
params.q=this._queryString;
}
if(this._highlights){
params.highlights=this._highlights.join(',');
}
if(this._sortBuilder&&params.order){
throw new Error('sort and order can not be set at same time.');
}
if(this._sortBuilder){
params.sort=this._sortBuilder.build();
}

return params;
}});

};

/**
 * Sorts the results in ascending order by the given key.
 *
 * @method AV.SearchQuery#ascending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Also sorts the results in ascending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addAscending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */
/**
 * Sorts the results in descending order by the given key.
 *
 * @method AV.SearchQuery#descending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Also sorts the results in descending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addDescending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */
/**
 * Include nested AV.Objects for the provided key.  You can use dot
 * notation to specify which fields in the included object are also fetch.
 * @method AV.SearchQuery#include
 * @param {String[]} keys The name of the key to include.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Sets the number of results to skip before returning any results.
 * This is useful for pagination.
 * Default is to skip zero results.
 * @method AV.SearchQuery#skip
 * @param {Number} n the number of results to skip.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */
/**
 * Sets the limit of the number of results to return. The default limit is
 * 100, with a maximum of 1000 results being returned at a time.
 * @method AV.SearchQuery#limit
 * @param {Number} n the number of results to limit to.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/***/},
/* 162 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);
var AVError=__webpack_require__(16);

var _require=__webpack_require__(5),
request=_require.request;

module.exports=function(AV){
/**
   * 包含了使用了 LeanCloud
   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数。
   * <p><strong><em>
   *   仅在云引擎运行环境下有效。
   * </em></strong></p>
   * @namespace
   */
AV.Insight=AV.Insight||{};

_.extend(AV.Insight,
/** @lends AV.Insight */{
/**
     * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
     * AV.Insight.JobQuery 查询任务状态和结果。
     * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
     *                   { "sql" : "select count(*) as c,gender from _User group by gender",
     *                     "saveAs": {
     *                         "className" : "UserGender",
     *                         "limit": 1
     *                      }
     *                   }
     *                  </pre></code>
     *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
startJob:function startJob(jobConfig,options){
if(!jobConfig||!jobConfig.sql){
throw new Error('Please provide the sql to run the job.');
}
var data={
jobConfig:jobConfig,
appId:AV.applicationId};

return request({
path:'/bigquery/jobs',
method:'POST',
data:AV._encode(data,null,true),
authOptions:options,
signKey:false}).
then(function(resp){
return AV._decode(resp).id;
});
},

/**
     * 监听 Insight 任务事件（未来推出独立部署的离线分析服务后开放）
     *  <p><strong><em>
     *     仅在云引擎运行环境下有效。
     *  </em></strong></p>
     * @param {String} event 监听的事件，目前尚不支持。
     * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
     *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
     *
     */
on:function on(event,cb){}});


/**
   * 创建一个对象，用于查询 Insight 任务状态和结果。
   * @class
   * @param {String} id 任务 id
   * @since 0.5.5
   */
AV.Insight.JobQuery=function(id,className){
if(!id){
throw new Error('Please provide the job id.');
}
this.id=id;
this.className=className;
this._skip=0;
this._limit=100;
};

_.extend(AV.Insight.JobQuery.prototype,
/** @lends AV.Insight.JobQuery.prototype */{
/**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
skip:function skip(n){
this._skip=n;
return this;
},

/**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
limit:function limit(n){
this._limit=n;
return this;
},

/**
     * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
     * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
     * startTime、endTime 等信息。
     *
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     *
     */
find:function find(options){
var params={
skip:this._skip,
limit:this._limit};


return request({
path:'/bigquery/jobs/'+this.id,
method:'GET',
query:params,
authOptions:options,
signKey:false}).
then(function(response){
if(response.error){
return _promise2.default.reject(new AVError(response.code,response.error));
}
return _promise2.default.resolve(response);
});
}});

};

/***/},
/* 163 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _=__webpack_require__(0);

var _require=__webpack_require__(5),
LCRequest=_require.request;

var _require2=__webpack_require__(6),
getSessionToken=_require2.getSessionToken;

module.exports=function(AV){
/**
   * Contains functions to deal with Friendship in LeanCloud.
   * @class
   */
AV.Friendship={
/**
     * Request friendship.
     * @since 4.8.0
     * @param {String | AV.User | Object} options if an AV.User or string is given, it will be used as the friend.
     * @param {AV.User | string} options.friend The friend (or friend's objectId) to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of followeeQuery.
     * @param {*} [authOptions]
     * @return {Promise<void>}
     */
request:function request(options,authOptions){
if(!AV.User.current()){
throw new Error('Please signin an user.');
}
var friend=void 0;
var attributes=void 0;
if(options.friend){
friend=options.friend;
attributes=options.attributes;
}else{
friend=options;
}
var friendObject=_.isString(friend)?AV.Object.createWithoutData('_User',friend):friend;
return LCRequest({
method:'POST',
path:'/users/friendshipRequests',
data:AV._encode({
user:AV.User.current(),
friend:friendObject,
friendship:attributes}),

authOptions:authOptions});

},

/**
     * Accept a friendship request.
     * @since 4.8.0
     * @param {AV.Object | string | Object} options if an AV.Object or string is given, it will be used as the request in _FriendshipRequest.
     * @param {AV.Object} options.request The request (or it's objectId) to be accepted.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of {@link AV#followeeQuery}.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
acceptRequest:function acceptRequest(options){
var authOptions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!getSessionToken(authOptions)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
var request=void 0;
var attributes=void 0;
if(options.request){
request=options.request;
attributes=options.attributes;
}else{
request=options;
}
var requestId=_.isString(request)?request:request.id;
return LCRequest({
method:'PUT',
path:'/users/friendshipRequests/'+requestId+'/accept',
data:{
friendship:AV._encode(attributes)},

authOptions:authOptions});

},

/**
     * Decline a friendship request.
     * @param {AV.Object | string} request The request (or it's objectId) to be declined.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
declineRequest:function declineRequest(request){
var authOptions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

if(!getSessionToken(authOptions)&&!AV.User.current()){
throw new Error('Please signin an user.');
}
var requestId=_.isString(request)?request:request.id;
return LCRequest({
method:'PUT',
path:'/users/friendshipRequests/'+requestId+'/decline',
authOptions:authOptions});

}};

};

/***/},
/* 164 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _stringify=__webpack_require__(9);

var _stringify2=_interopRequireDefault(_stringify);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

var _require=__webpack_require__(5),
_request=_require._request;

var AV=__webpack_require__(18);

var serializeMessage=function serializeMessage(message){
if(typeof message==='string'){
return message;
}
if(typeof message.getPayload==='function'){
return(0,_stringify2.default)(message.getPayload());
}
return(0,_stringify2.default)(message);
};

/**
 * <p>An AV.Conversation is a local representation of a LeanCloud realtime's
 * conversation. This class is a subclass of AV.Object, and retains the
 * same functionality of an AV.Object, but also extends it with various
 * conversation specific methods, like get members, creators of this conversation.
 * </p>
 *
 * @class AV.Conversation
 * @param {String} name The name of the Role to create.
 * @param {Object} [options]
 * @param {Boolean} [options.isSystem] Set this conversation as system conversation.
 * @param {Boolean} [options.isTransient] Set this conversation as transient conversation.
 */
module.exports=AV.Object.extend('_Conversation',
/** @lends AV.Conversation.prototype */{
constructor:function constructor(name){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

AV.Object.prototype.constructor.call(this,null,null);
this.set('name',name);
if(options.isSystem!==undefined){
this.set('sys',options.isSystem?true:false);
}
if(options.isTransient!==undefined){
this.set('tr',options.isTransient?true:false);
}
},

/**
   * Get current conversation's creator.
   *
   * @return {String}
   */
getCreator:function getCreator(){
return this.get('c');
},


/**
   * Get the last message's time.
   *
   * @return {Date}
   */
getLastMessageAt:function getLastMessageAt(){
return this.get('lm');
},


/**
   * Get this conversation's members
   *
   * @return {String[]}
   */
getMembers:function getMembers(){
return this.get('m');
},


/**
   * Add a member to this conversation
   *
   * @param {String} member
   */
addMember:function addMember(member){
return this.add('m',member);
},


/**
   * Get this conversation's members who set this conversation as muted.
   *
   * @return {String[]}
   */
getMutedMembers:function getMutedMembers(){
return this.get('mu');
},


/**
   * Get this conversation's name field.
   *
   * @return String
   */
getName:function getName(){
return this.get('name');
},


/**
   * Returns true if this conversation is transient conversation.
   *
   * @return {Boolean}
   */
isTransient:function isTransient(){
return this.get('tr');
},


/**
   * Returns true if this conversation is system conversation.
   *
   * @return {Boolean}
   */
isSystem:function isSystem(){
return this.get('sys');
},


/**
   * Send realtime message to this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}
   * @param {Object} [options]
   * @param {Boolean} [options.transient] Whether send this message as transient message or not.
   * @param {String[]} [options.toClients] Ids of clients to send to. This option can be used only in system conversation.
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
send:function send(fromClient,message){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var authOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

var data={
from_peer:fromClient,
conv_id:this.id,
transient:false,
message:serializeMessage(message)};

if(options.toClients!==undefined){
data.to_peers=options.toClients;
}
if(options.transient!==undefined){
data.transient=options.transient?true:false;
}
if(options.pushData!==undefined){
data.push_data=options.pushData;
}
return _request('rtm','messages',null,'POST',data,authOptions);
},


/**
   * Send realtime broadcast message to all clients, via this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}.
   * @param {Object} [options]
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}.
   * @param {Object} [options.validTill] The message will valid till this time.
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
broadcast:function broadcast(fromClient,message){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var authOptions=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};

var data={
from_peer:fromClient,
conv_id:this.id,
message:serializeMessage(message)};

if(options.pushData!==undefined){
data.push=options.pushData;
}
if(options.validTill!==undefined){
var ts=options.validTill;
if(_.isDate(ts)){
ts=ts.getTime();
}
options.valid_till=ts;
}
return _request('rtm','broadcast',null,'POST',data,authOptions);
}});


/***/},
/* 165 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _=__webpack_require__(0);

var _require=__webpack_require__(5),
request=_require.request;

var _require2=__webpack_require__(6),
ensureArray=_require2.ensureArray,
parseDate=_require2.parseDate;

var AV=__webpack_require__(18);

/**
 * The version change interval for Leaderboard
 * @enum
 */
AV.LeaderboardVersionChangeInterval={
NEVER:'never',
DAY:'day',
WEEK:'week',
MONTH:'month'};


/**
 * The order of the leaderboard results
 * @enum
 */
AV.LeaderboardOrder={
ASCENDING:'ascending',
DESCENDING:'descending'};


/**
 * The update strategy for Leaderboard
 * @enum
 */
AV.LeaderboardUpdateStrategy={
/** Only keep the best statistic. If the leaderboard is in descending order, the best statistic is the highest one. */
BETTER:'better',
/** Keep the last updated statistic */
LAST:'last',
/** Keep the sum of all updated statistics */
SUM:'sum'};


/**
 * @typedef {Object} Ranking
 * @property {number} rank Starts at 0
 * @property {number} value the statistic value of this ranking
 * @property {AV.User} user The user of this ranking
 * @property {Statistic[]} [includedStatistics] Other statistics of the user, specified by the `includeStatistic` option of `AV.Leaderboard.getResults()`
 */

/**
 * @typedef {Object} LeaderboardArchive
 * @property {string} statisticName
 * @property {number} version version of the leaderboard
 * @property {string} status
 * @property {string} url URL for the downloadable archive
 * @property {Date} activatedAt time when this version became active
 * @property {Date} deactivatedAt time when this version was deactivated by a version incrementing
 */

/**
 * @class
 */
function Statistic(_ref){
var name=_ref.name,
value=_ref.value,
version=_ref.version;

/**
   * @type {string}
   */
this.name=name;
/**
   * @type {number}
   */
this.value=value;
/**
   * @type {number?}
   */
this.version=version;
}

var parseStatisticData=function parseStatisticData(statisticData){
var _AV$_decode=AV._decode(statisticData),
name=_AV$_decode.statisticName,
value=_AV$_decode.statisticValue,
version=_AV$_decode.version;

return new Statistic({name:name,value:value,version:version});
};

/**
 * @class
 */
AV.Leaderboard=function Leaderboard(statisticName){
/**
   * @type {string}
   */
this.statisticName=statisticName;
/**
   * @type {AV.LeaderboardOrder}
   */
this.order=undefined;
/**
   * @type {AV.LeaderboardUpdateStrategy}
   */
this.updateStrategy=undefined;
/**
   * @type {AV.LeaderboardVersionChangeInterval}
   */
this.versionChangeInterval=undefined;
/**
   * @type {number}
   */
this.version=undefined;
/**
   * @type {Date?}
   */
this.nextResetAt=undefined;
/**
   * @type {Date?}
   */
this.createdAt=undefined;
};
var Leaderboard=AV.Leaderboard;

/**
 * Create an instance of Leaderboard for the give statistic name.
 * @param {string} statisticName
 * @return {AV.Leaderboard}
 */
AV.Leaderboard.createWithoutData=function(statisticName){
return new Leaderboard(statisticName);
};
/**
 * (masterKey required) Create a new Leaderboard.
 * @param {Object} options
 * @param {string} options.statisticName
 * @param {AV.LeaderboardOrder} options.order
 * @param {AV.LeaderboardVersionChangeInterval} [options.versionChangeInterval] default to WEEK
 * @param {AV.LeaderboardUpdateStrategy} [options.updateStrategy] default to BETTER
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */
AV.Leaderboard.createLeaderboard=function(_ref2,authOptions){
var statisticName=_ref2.statisticName,
order=_ref2.order,
versionChangeInterval=_ref2.versionChangeInterval,
updateStrategy=_ref2.updateStrategy;
return request({
method:'POST',
path:'/leaderboard/leaderboards',
data:{
statisticName:statisticName,
order:order,
versionChangeInterval:versionChangeInterval,
updateStrategy:updateStrategy},

authOptions:authOptions}).
then(function(data){
var leaderboard=new Leaderboard(statisticName);
return leaderboard._finishFetch(data);
});
};
/**
 * Get the Leaderboard with the specified statistic name.
 * @param {string} statisticName
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */
AV.Leaderboard.getLeaderboard=function(statisticName,authOptions){
return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
};
/**
 * Get Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} [options]
 * @param {string[]} [options.statisticNames] Specify the statisticNames. If not set, all statistics of the user will be fetched.
 * @param {AuthOptions} [authOptions]
 * @return {Promise<Statistic[]>}
 */
AV.Leaderboard.getStatistics=function(user){
var _ref3=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},
statisticNames=_ref3.statisticNames;

var authOptions=arguments[2];
return _promise2.default.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
return request({
method:'GET',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
statistics:statisticNames?ensureArray(statisticNames).join(','):undefined},

authOptions:authOptions}).
then(function(_ref4){
var results=_ref4.results;
return results.map(parseStatisticData);
});
});
};

/**
 * Update Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to update.
 * @param {AuthOptions} [options] AuthOptions plus:
 * @param {boolean} [options.overwrite] Wethere to overwrite these statistics disregarding the updateStrategy of there leaderboards
 * @return {Promise<Statistic[]>}
 */
AV.Leaderboard.updateStatistics=function(user,statistics){
var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return _promise2.default.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
var data=_.map(statistics,function(value,key){
return{
statisticName:key,
statisticValue:value};

});
var overwrite=options.overwrite;

return request({
method:'POST',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
overwrite:overwrite?1:undefined},

data:data,
authOptions:options}).
then(function(_ref5){
var results=_ref5.results;
return results.map(parseStatisticData);
});
});
};

/**
 * Delete Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to delete.
 * @param {AuthOptions} [options]
 * @return {Promise<void>}
 */
AV.Leaderboard.deleteStatistics=function(user,statisticNames,authOptions){
return _promise2.default.resolve().then(function(){
if(!(user&&user.id))throw new Error('user must be an AV.User');
return request({
method:'DELETE',
path:'/leaderboard/users/'+user.id+'/statistics',
query:{
statistics:ensureArray(statisticNames).join(',')},

authOptions:authOptions}).
then(function(){
return undefined;
});
});
};

_.extend(Leaderboard.prototype,
/** @lends AV.Leaderboard.prototype */{
_finishFetch:function _finishFetch(data){
var _this=this;

_.forEach(data,function(value,key){
if(key==='updatedAt'||key==='objectId')return;
if(key==='expiredAt'){
key='nextResetAt';
}
if(key==='createdAt'){
value=parseDate(value);
}
if(value&&value.__type==='Date'){
value=parseDate(value.iso);
}
_this[key]=value;
});
return this;
},

/**
   * Fetch data from the srever.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
fetch:function fetch(authOptions){
var _this2=this;

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName,
authOptions:authOptions}).
then(function(data){
return _this2._finishFetch(data);
});
},

/**
   * Counts the number of users participated in this leaderboard
   * @param {Object} [options]
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<number>}
   */
count:function count(){
var _ref6=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
version=_ref6.version;

var authOptions=arguments[1];

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName+'/ranks',
query:{
count:1,
limit:0,
version:version},

authOptions:authOptions}).
then(function(_ref7){
var count=_ref7.count;
return count;
});
},
_getResults:function _getResults(_ref8,authOptions,userId){
var skip=_ref8.skip,
limit=_ref8.limit,
selectUserKeys=_ref8.selectUserKeys,
includeUserKeys=_ref8.includeUserKeys,
includeStatistics=_ref8.includeStatistics,
version=_ref8.version;

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName+'/ranks'+(userId?'/'+userId:''),
query:{
skip:skip,
limit:limit,
selectUserKeys:_.union(ensureArray(selectUserKeys),ensureArray(includeUserKeys)).join(',')||undefined,
includeUser:includeUserKeys?ensureArray(includeUserKeys).join(','):undefined,
includeStatistics:includeStatistics?ensureArray(includeStatistics).join(','):undefined,
version:version},

authOptions:authOptions}).
then(function(_ref9){
var rankings=_ref9.results;
return rankings.map(function(rankingData){
var _AV$_decode2=AV._decode(rankingData),
user=_AV$_decode2.user,
value=_AV$_decode2.statisticValue,
rank=_AV$_decode2.rank,
_AV$_decode2$statisti=_AV$_decode2.statistics,
statistics=_AV$_decode2$statisti===undefined?[]:_AV$_decode2$statisti;

return{
user:user,
value:value,
rank:rank,
includedStatistics:statistics.map(parseStatisticData)};

});
});
},

/**
   * Retrieve a list of ranked users for this Leaderboard.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
getResults:function getResults(){
var _ref10=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
skip=_ref10.skip,
limit=_ref10.limit,
selectUserKeys=_ref10.selectUserKeys,
includeUserKeys=_ref10.includeUserKeys,
includeStatistics=_ref10.includeStatistics,
version=_ref10.version;

var authOptions=arguments[1];

return this._getResults({
skip:skip,
limit:limit,
selectUserKeys:selectUserKeys,
includeUserKeys:includeUserKeys,
includeStatistics:includeStatistics,
version:version},
authOptions);
},

/**
   * Retrieve a list of ranked users for this Leaderboard, centered on the specified user.
   * @param {AV.User} user The specified AV.User pointer.
   * @param {Object} [options]
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
getResultsAroundUser:function getResultsAroundUser(user){
var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var authOptions=arguments[2];

// getResultsAroundUser(options, authOptions)
if(user&&typeof user.id!=='string'){
return this.getResultsAroundUser(undefined,user,options);
}
var limit=options.limit,
selectUserKeys=options.selectUserKeys,
includeUserKeys=options.includeUserKeys,
includeStatistics=options.includeStatistics,
version=options.version;

return this._getResults({limit:limit,selectUserKeys:selectUserKeys,includeUserKeys:includeUserKeys,includeStatistics:includeStatistics,version:version},authOptions,user?user.id:'self');
},
_update:function _update(data,authOptions){
var _this3=this;

return request({
method:'PUT',
path:'/leaderboard/leaderboards/'+this.statisticName,
data:data,
authOptions:authOptions}).
then(function(result){
return _this3._finishFetch(result);
});
},

/**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardVersionChangeInterval} versionChangeInterval
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
updateVersionChangeInterval:function updateVersionChangeInterval(versionChangeInterval,authOptions){
return this._update({versionChangeInterval:versionChangeInterval},authOptions);
},

/**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardUpdateStrategy} updateStrategy
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
updateUpdateStrategy:function updateUpdateStrategy(updateStrategy,authOptions){
return this._update({updateStrategy:updateStrategy},authOptions);
},

/**
   * (masterKey required) Reset the Leaderboard. The version of the Leaderboard will be incremented by 1.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
reset:function reset(authOptions){
var _this4=this;

return request({
method:'PUT',
path:'/leaderboard/leaderboards/'+this.statisticName+'/incrementVersion',
authOptions:authOptions}).
then(function(data){
return _this4._finishFetch(data);
});
},

/**
   * (masterKey required) Delete the Leaderboard and its all archived versions.
   * @param {AuthOptions} [authOptions]
   * @return {void}
   */
destroy:function destroy(authOptions){
return AV.request({
method:'DELETE',
path:'/leaderboard/leaderboards/'+this.statisticName,
authOptions:authOptions}).
then(function(){
return undefined;
});
},

/**
   * (masterKey required) Get archived versions.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<LeaderboardArchive[]>}
   */
getArchives:function getArchives(){
var _this5=this;

var _ref11=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},
skip=_ref11.skip,
limit=_ref11.limit;

var authOptions=arguments[1];

return request({
method:'GET',
path:'/leaderboard/leaderboards/'+this.statisticName+'/archives',
query:{
skip:skip,
limit:limit},

authOptions:authOptions}).
then(function(_ref12){
var results=_ref12.results;
return results.map(function(_ref13){
var version=_ref13.version,
status=_ref13.status,
url=_ref13.url,
activatedAt=_ref13.activatedAt,
deactivatedAt=_ref13.deactivatedAt;
return{
statisticName:_this5.statisticName,
version:version,
status:status,
url:url,
activatedAt:parseDate(activatedAt.iso),
deactivatedAt:parseDate(deactivatedAt.iso)};

});
});
}});


/***/},
/* 166 */
/***/function(module,exports,__webpack_require__){

"use strict";


var adapters=__webpack_require__(167);

module.exports=function(AV){
AV.setAdapters(adapters);
return AV;
};

/***/},
/* 167 */
/***/function(module,exports,__webpack_require__){

"use strict";


Object.defineProperty(exports,"__esModule",{value:true});
var adapters_superagent_1=__webpack_require__(168);
exports.request=adapters_superagent_1.request;
exports.upload=adapters_superagent_1.upload;
exports.storage=window.localStorage;
exports.WebSocket=window.WebSocket;
exports.platformInfo={
name:"Browser"};



/***/},
/* 168 */
/***/function(module,exports,__webpack_require__){

"use strict";

Object.defineProperty(exports,"__esModule",{value:true});
var superagent=__webpack_require__(169);
exports.request=function(url,options){
if(options===void 0){options={};}
var _a=options.method,method=_a===void 0?"GET":_a,data=options.data,headers=options.headers,onprogress=options.onprogress;
var req=superagent(method,url);
if(headers){
req.set(headers);
}
if(onprogress){
req.on("progress",onprogress);
}
return req.
send(data).
catch(function(error){
if(error.response){
return error.response;
}
throw error;
}).
then(function(_a){
var status=_a.status,ok=_a.ok,header=_a.header,body=_a.body;
return{
status:status,
ok:ok,
headers:header,
data:body};

});
};
exports.upload=function(url,file,options){
if(options===void 0){options={};}
var data=options.data,headers=options.headers,onprogress=options.onprogress;
var req=superagent("POST",url).attach(file.field,file.data,file.name);
if(data){
req.field(data);
}
if(headers){
req.set(headers);
}
if(onprogress){
req.on("progress",onprogress);
}
return req.
catch(function(error){
if(error.response){
return error.response;
}
throw error;
}).
then(function(_a){
var status=_a.status,ok=_a.ok,header=_a.header,body=_a.body;
return{
status:status,
ok:ok,
headers:header,
data:body};

});
};


/***/},
/* 169 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _iterator=__webpack_require__(34);

var _iterator2=_interopRequireDefault(_iterator);

var _typeof3=__webpack_require__(28);

var _typeof4=_interopRequireDefault(_typeof3);

var _symbol=__webpack_require__(35);

var _symbol2=_interopRequireDefault(_symbol);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function _typeof(obj){
if(typeof _symbol2.default==="function"&&(0,_typeof4.default)(_iterator2.default)==="symbol"){
_typeof=function _typeof(obj){
return typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}else{
_typeof=function _typeof(obj){
return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}return _typeof(obj);
}

/**
 * Root reference for iframes.
 */
var root;

if(typeof window!=='undefined'){
// Browser window
root=window;
}else if(typeof self==='undefined'){
// Other environments
console.warn('Using browser-only version of superagent in non-browser environment');
root=void 0;
}else{
// Web Worker
root=self;
}

var Emitter=__webpack_require__(170);

var safeStringify=__webpack_require__(171);

var RequestBase=__webpack_require__(172);

var isObject=__webpack_require__(80);

var ResponseBase=__webpack_require__(173);

var Agent=__webpack_require__(175);
/**
 * Noop.
 */

function noop(){}
/**
 * Expose `request`.
 */

module.exports=function(method,url){
// callback
if(typeof url==='function'){
return new exports.Request('GET',method).end(url);
}// url first


if(arguments.length===1){
return new exports.Request('GET',method);
}

return new exports.Request(method,url);
};

exports=module.exports;
var request=exports;
exports.Request=Request;
/**
 * Determine XHR.
 */

request.getXHR=function(){
if(root.XMLHttpRequest&&(!root.location||root.location.protocol!=='file:'||!root.ActiveXObject)){
return new XMLHttpRequest();
}

try{
return new ActiveXObject('Microsoft.XMLHTTP');
}catch(_unused){}

try{
return new ActiveXObject('Msxml2.XMLHTTP.6.0');
}catch(_unused2){}

try{
return new ActiveXObject('Msxml2.XMLHTTP.3.0');
}catch(_unused3){}

try{
return new ActiveXObject('Msxml2.XMLHTTP');
}catch(_unused4){}

throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim=''.trim?function(s){
return s.trim();
}:function(s){
return s.replace(/(^\s*|\s*$)/g,'');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj){
if(!isObject(obj))return obj;
var pairs=[];

for(var key in obj){
if(Object.prototype.hasOwnProperty.call(obj,key))pushEncodedKeyValuePair(pairs,key,obj[key]);
}

return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs,key,val){
if(val===undefined)return;

if(val===null){
pairs.push(encodeURI(key));
return;
}

if(Array.isArray(val)){
val.forEach(function(v){
pushEncodedKeyValuePair(pairs,key,v);
});
}else if(isObject(val)){
for(var subkey in val){
if(Object.prototype.hasOwnProperty.call(val,subkey))pushEncodedKeyValuePair(pairs,"".concat(key,"[").concat(subkey,"]"),val[subkey]);
}
}else{
pairs.push(encodeURI(key)+'='+encodeURIComponent(val));
}
}
/**
 * Expose serialization method.
 */

request.serializeObject=serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str){
var obj={};
var pairs=str.split('&');
var pair;
var pos;

for(var i=0,len=pairs.length;i<len;++i){
pair=pairs[i];
pos=pair.indexOf('=');

if(pos===-1){
obj[decodeURIComponent(pair)]='';
}else{
obj[decodeURIComponent(pair.slice(0,pos))]=decodeURIComponent(pair.slice(pos+1));
}
}

return obj;
}
/**
 * Expose parser.
 */

request.parseString=parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types={
html:'text/html',
json:'application/json',
xml:'text/xml',
urlencoded:'application/x-www-form-urlencoded',
form:'application/x-www-form-urlencoded',
'form-data':'application/x-www-form-urlencoded'};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize={
'application/x-www-form-urlencoded':serialize,
'application/json':safeStringify};

/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse={
'application/x-www-form-urlencoded':parseString,
'application/json':JSON.parse};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str){
var lines=str.split(/\r?\n/);
var fields={};
var index;
var line;
var field;
var val;

for(var i=0,len=lines.length;i<len;++i){
line=lines[i];
index=line.indexOf(':');

if(index===-1){
// could be empty line, just skip it
continue;
}

field=line.slice(0,index).toLowerCase();
val=trim(line.slice(index+1));
fields[field]=val;
}

return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime){
// should match /json or +json
// but not /json-seq
return /[/+]json($|[^-\w])/.test(mime);

}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req){
this.req=req;
this.xhr=this.req.xhr;// responseText is accessible only if responseType is '' or 'text' and on older browsers

this.text=this.req.method!=='HEAD'&&(this.xhr.responseType===''||this.xhr.responseType==='text')||typeof this.xhr.responseType==='undefined'?this.xhr.responseText:null;
this.statusText=this.req.xhr.statusText;
var status=this.xhr.status;// handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

if(status===1223){
status=204;
}

this._setStatusProperties(status);

this.headers=parseHeader(this.xhr.getAllResponseHeaders());
this.header=this.headers;// getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
// getResponseHeader still works. so we get content-type even if getting
// other headers fails.

this.header['content-type']=this.xhr.getResponseHeader('content-type');

this._setHeaderProperties(this.header);

if(this.text===null&&req._responseType){
this.body=this.xhr.response;
}else{
this.body=this.req.method==='HEAD'?null:this._parseBody(this.text?this.text:this.xhr.response);
}
}// eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody=function(str){
var parse=request.parse[this.type];

if(this.req._parser){
return this.req._parser(this,str);
}

if(!parse&&isJSON(this.type)){
parse=request.parse['application/json'];
}

return parse&&str&&(str.length>0||str instanceof Object)?parse(str):null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError=function(){
var req=this.req;
var method=req.method;
var url=req.url;
var msg="cannot ".concat(method," ").concat(url," (").concat(this.status,")");
var err=new Error(msg);
err.status=this.status;
err.method=method;
err.url=url;
return err;
};
/**
 * Expose `Response`.
 */

request.Response=Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method,url){
var self=this;
this._query=this._query||[];
this.method=method;
this.url=url;
this.header={};// preserves header name case

this._header={};// coerces header names to lowercase

this.on('end',function(){
var err=null;
var res=null;

try{
res=new Response(self);
}catch(err_){
err=new Error('Parser is unable to parse the response');
err.parse=true;
err.original=err_;// issue #675: return the raw response if the response parsing fails

if(self.xhr){
// ie9 doesn't have 'response' property
err.rawResponse=typeof self.xhr.responseType==='undefined'?self.xhr.responseText:self.xhr.response;// issue #876: return the http status code if the response parsing fails

err.status=self.xhr.status?self.xhr.status:null;
err.statusCode=err.status;// backwards-compat only
}else{
err.rawResponse=null;
err.status=null;
}

return self.callback(err);
}

self.emit('response',res);
var new_err;

try{
if(!self._isResponseOK(res)){
new_err=new Error(res.statusText||res.text||'Unsuccessful HTTP response');
}
}catch(err_){
new_err=err_;// ok() callback can throw
}// #1000 don't catch errors from the callback to avoid double calling it


if(new_err){
new_err.original=err;
new_err.response=res;
new_err.status=res.status;
self.callback(new_err,res);
}else{
self.callback(null,res);
}
});
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype);// eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type=function(type){
this.set('Content-Type',request.types[type]||type);
return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept=function(type){
this.set('Accept',request.types[type]||type);
return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth=function(user,pass,options){
if(arguments.length===1)pass='';

if(_typeof(pass)==='object'&&pass!==null){
// pass is optional and can be replaced with options
options=pass;
pass='';
}

if(!options){
options={
type:typeof btoa==='function'?'basic':'auto'};

}

var encoder=function encoder(string){
if(typeof btoa==='function'){
return btoa(string);
}

throw new Error('Cannot use basic auth, btoa is not a function');
};

return this._auth(user,pass,options,encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query=function(val){
if(typeof val!=='string')val=serialize(val);
if(val)this._query.push(val);
return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach=function(field,file,options){
if(file){
if(this._data){
throw new Error("superagent can't mix .send() and .attach()");
}

this._getFormData().append(field,file,options||file.name);
}

return this;
};

Request.prototype._getFormData=function(){
if(!this._formData){
this._formData=new root.FormData();
}

return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback=function(err,res){
if(this._shouldRetry(err,res)){
return this._retry();
}

var fn=this._callback;
this.clearTimeout();

if(err){
if(this._maxRetries)err.retries=this._retries-1;
this.emit('error',err);
}

fn(err,res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError=function(){
var err=new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
err.crossDomain=true;
err.status=this.status;
err.method=this.method;
err.url=this.url;
this.callback(err);
};// This only warns, because the request is still likely to work


Request.prototype.agent=function(){
console.warn('This is not supported in browser version of superagent');
return this;
};

Request.prototype.ca=Request.prototype.agent;
Request.prototype.buffer=Request.prototype.ca;// This throws, because it can't send/receive data as expected

Request.prototype.write=function(){
throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe=Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost=function(obj){
// Native objects stringify to [object File], [object Blob], [object FormData], etc.
return obj&&_typeof(obj)==='object'&&!Array.isArray(obj)&&Object.prototype.toString.call(obj)!=='[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end=function(fn){
if(this._endCalled){
console.warn('Warning: .end() was called twice. This is not supported in superagent');
}

this._endCalled=true;// store callback

this._callback=fn||noop;// querystring

this._finalizeQueryString();

this._end();
};

Request.prototype._setUploadTimeout=function(){
var self=this;// upload timeout it's wokrs only if deadline timeout is off

if(this._uploadTimeout&&!this._uploadTimeoutTimer){
this._uploadTimeoutTimer=setTimeout(function(){
self._timeoutError('Upload timeout of ',self._uploadTimeout,'ETIMEDOUT');
},this._uploadTimeout);
}
};// eslint-disable-next-line complexity


Request.prototype._end=function(){
if(this._aborted)return this.callback(new Error('The request has been aborted even before .end() was called'));
var self=this;
this.xhr=request.getXHR();
var xhr=this.xhr;
var data=this._formData||this._data;

this._setTimeouts();// state change


xhr.onreadystatechange=function(){
var readyState=xhr.readyState;

if(readyState>=2&&self._responseTimeoutTimer){
clearTimeout(self._responseTimeoutTimer);
}

if(readyState!==4){
return;
}// In IE9, reads to any property (e.g. status) off of an aborted XHR will
// result in the error "Could not complete the operation due to error c00c023f"


var status;

try{
status=xhr.status;
}catch(_unused5){
status=0;
}

if(!status){
if(self.timedout||self._aborted)return;
return self.crossDomainError();
}

self.emit('end');
};// progress


var handleProgress=function handleProgress(direction,e){
if(e.total>0){
e.percent=e.loaded/e.total*100;

if(e.percent===100){
clearTimeout(self._uploadTimeoutTimer);
}
}

e.direction=direction;
self.emit('progress',e);
};

if(this.hasListeners('progress')){
try{
xhr.addEventListener('progress',handleProgress.bind(null,'download'));

if(xhr.upload){
xhr.upload.addEventListener('progress',handleProgress.bind(null,'upload'));
}
}catch(_unused6){// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
// Reported here:
// https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
}
}

if(xhr.upload){
this._setUploadTimeout();
}// initiate request


try{
if(this.username&&this.password){
xhr.open(this.method,this.url,true,this.username,this.password);
}else{
xhr.open(this.method,this.url,true);
}
}catch(err){
// see #1149
return this.callback(err);
}// CORS


if(this._withCredentials)xhr.withCredentials=true;// body

if(!this._formData&&this.method!=='GET'&&this.method!=='HEAD'&&typeof data!=='string'&&!this._isHost(data)){
// serialize stuff
var contentType=this._header['content-type'];

var _serialize=this._serializer||request.serialize[contentType?contentType.split(';')[0]:''];

if(!_serialize&&isJSON(contentType)){
_serialize=request.serialize['application/json'];
}

if(_serialize)data=_serialize(data);
}// set header fields


for(var field in this.header){
if(this.header[field]===null)continue;
if(Object.prototype.hasOwnProperty.call(this.header,field))xhr.setRequestHeader(field,this.header[field]);
}

if(this._responseType){
xhr.responseType=this._responseType;
}// send stuff


this.emit('request',this);// IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
// We need null here if data is undefined

xhr.send(typeof data==='undefined'?null:data);
};

request.agent=function(){
return new Agent();
};

['GET','POST','OPTIONS','PATCH','PUT','DELETE'].forEach(function(method){
Agent.prototype[method.toLowerCase()]=function(url,fn){
var req=new request.Request(method,url);

this._setDefaults(req);

if(fn){
req.end(fn);
}

return req;
};
});
Agent.prototype.del=Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get=function(url,data,fn){
var req=request('GET',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.query(data);
if(fn)req.end(fn);
return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head=function(url,data,fn){
var req=request('HEAD',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.query(data);
if(fn)req.end(fn);
return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options=function(url,data,fn){
var req=request('OPTIONS',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.send(data);
if(fn)req.end(fn);
return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url,data,fn){
var req=request('DELETE',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.send(data);
if(fn)req.end(fn);
return req;
}

request.del=del;
request.delete=del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch=function(url,data,fn){
var req=request('PATCH',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.send(data);
if(fn)req.end(fn);
return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post=function(url,data,fn){
var req=request('POST',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.send(data);
if(fn)req.end(fn);
return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put=function(url,data,fn){
var req=request('PUT',url);

if(typeof data==='function'){
fn=data;
data=null;
}

if(data)req.send(data);
if(fn)req.end(fn);
return req;
};

/***/},
/* 170 */
/***/function(module,exports,__webpack_require__){


/**
 * Expose `Emitter`.
 */

if(true){
module.exports=Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj){
if(obj)return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in Emitter.prototype){
obj[key]=Emitter.prototype[key];
}
return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on=
Emitter.prototype.addEventListener=function(event,fn){
this._callbacks=this._callbacks||{};
(this._callbacks['$'+event]=this._callbacks['$'+event]||[]).
push(fn);
return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once=function(event,fn){
function on(){
this.off(event,on);
fn.apply(this,arguments);
}

on.fn=fn;
this.on(event,on);
return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off=
Emitter.prototype.removeListener=
Emitter.prototype.removeAllListeners=
Emitter.prototype.removeEventListener=function(event,fn){
this._callbacks=this._callbacks||{};

// all
if(0==arguments.length){
this._callbacks={};
return this;
}

// specific event
var callbacks=this._callbacks['$'+event];
if(!callbacks)return this;

// remove all handlers
if(1==arguments.length){
delete this._callbacks['$'+event];
return this;
}

// remove specific handler
var cb;
for(var i=0;i<callbacks.length;i++){
cb=callbacks[i];
if(cb===fn||cb.fn===fn){
callbacks.splice(i,1);
break;
}
}

// Remove event specific arrays for event types that no
// one is subscribed for to avoid memory leak.
if(callbacks.length===0){
delete this._callbacks['$'+event];
}

return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit=function(event){
this._callbacks=this._callbacks||{};

var args=new Array(arguments.length-1),
callbacks=this._callbacks['$'+event];

for(var i=1;i<arguments.length;i++){
args[i-1]=arguments[i];
}

if(callbacks){
callbacks=callbacks.slice(0);
for(var i=0,len=callbacks.length;i<len;++i){
callbacks[i].apply(this,args);
}
}

return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners=function(event){
this._callbacks=this._callbacks||{};
return this._callbacks['$'+event]||[];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners=function(event){
return!!this.listeners(event).length;
};


/***/},
/* 171 */
/***/function(module,exports){

module.exports=stringify;
stringify.default=stringify;
stringify.stable=deterministicStringify;
stringify.stableStringify=deterministicStringify;

var arr=[];
var replacerStack=[];

// Regular stringify
function stringify(obj,replacer,spacer){
decirc(obj,'',[],undefined);
var res;
if(replacerStack.length===0){
res=JSON.stringify(obj,replacer,spacer);
}else{
res=JSON.stringify(obj,replaceGetterValues(replacer),spacer);
}
while(arr.length!==0){
var part=arr.pop();
if(part.length===4){
Object.defineProperty(part[0],part[1],part[3]);
}else{
part[0][part[1]]=part[2];
}
}
return res;
}
function decirc(val,k,stack,parent){
var i;
if(typeof val==='object'&&val!==null){
for(i=0;i<stack.length;i++){
if(stack[i]===val){
var propertyDescriptor=Object.getOwnPropertyDescriptor(parent,k);
if(propertyDescriptor.get!==undefined){
if(propertyDescriptor.configurable){
Object.defineProperty(parent,k,{value:'[Circular]'});
arr.push([parent,k,val,propertyDescriptor]);
}else{
replacerStack.push([val,k]);
}
}else{
parent[k]='[Circular]';
arr.push([parent,k,val]);
}
return;
}
}
stack.push(val);
// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(Array.isArray(val)){
for(i=0;i<val.length;i++){
decirc(val[i],i,stack,val);
}
}else{
var keys=Object.keys(val);
for(i=0;i<keys.length;i++){
var key=keys[i];
decirc(val[key],key,stack,val);
}
}
stack.pop();
}
}

// Stable-stringify
function compareFunction(a,b){
if(a<b){
return-1;
}
if(a>b){
return 1;
}
return 0;
}

function deterministicStringify(obj,replacer,spacer){
var tmp=deterministicDecirc(obj,'',[],undefined)||obj;
var res;
if(replacerStack.length===0){
res=JSON.stringify(tmp,replacer,spacer);
}else{
res=JSON.stringify(tmp,replaceGetterValues(replacer),spacer);
}
while(arr.length!==0){
var part=arr.pop();
if(part.length===4){
Object.defineProperty(part[0],part[1],part[3]);
}else{
part[0][part[1]]=part[2];
}
}
return res;
}

function deterministicDecirc(val,k,stack,parent){
var i;
if(typeof val==='object'&&val!==null){
for(i=0;i<stack.length;i++){
if(stack[i]===val){
var propertyDescriptor=Object.getOwnPropertyDescriptor(parent,k);
if(propertyDescriptor.get!==undefined){
if(propertyDescriptor.configurable){
Object.defineProperty(parent,k,{value:'[Circular]'});
arr.push([parent,k,val,propertyDescriptor]);
}else{
replacerStack.push([val,k]);
}
}else{
parent[k]='[Circular]';
arr.push([parent,k,val]);
}
return;
}
}
if(typeof val.toJSON==='function'){
return;
}
stack.push(val);
// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(Array.isArray(val)){
for(i=0;i<val.length;i++){
deterministicDecirc(val[i],i,stack,val);
}
}else{
// Create a temporary object in the required way
var tmp={};
var keys=Object.keys(val).sort(compareFunction);
for(i=0;i<keys.length;i++){
var key=keys[i];
deterministicDecirc(val[key],key,stack,val);
tmp[key]=val[key];
}
if(parent!==undefined){
arr.push([parent,k,val]);
parent[k]=tmp;
}else{
return tmp;
}
}
stack.pop();
}
}

// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues(replacer){
replacer=replacer!==undefined?replacer:function(k,v){return v;};
return function(key,val){
if(replacerStack.length>0){
for(var i=0;i<replacerStack.length;i++){
var part=replacerStack[i];
if(part[1]===key&&part[0]===val){
val='[Circular]';
replacerStack.splice(i,1);
break;
}
}
}
return replacer.call(this,key,val);
};
}


/***/},
/* 172 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _promise=__webpack_require__(2);

var _promise2=_interopRequireDefault(_promise);

var _iterator=__webpack_require__(34);

var _iterator2=_interopRequireDefault(_iterator);

var _typeof3=__webpack_require__(28);

var _typeof4=_interopRequireDefault(_typeof3);

var _symbol=__webpack_require__(35);

var _symbol2=_interopRequireDefault(_symbol);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function _typeof(obj){
if(typeof _symbol2.default==="function"&&(0,_typeof4.default)(_iterator2.default)==="symbol"){
_typeof=function _typeof(obj){
return typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}else{
_typeof=function _typeof(obj){
return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":(0,_typeof4.default)(obj);
};
}return _typeof(obj);
}

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject=__webpack_require__(80);
/**
 * Expose `RequestBase`.
 */

module.exports=RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj){
if(obj)return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in RequestBase.prototype){
if(Object.prototype.hasOwnProperty.call(RequestBase.prototype,key))obj[key]=RequestBase.prototype[key];
}

return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout=function(){
clearTimeout(this._timer);
clearTimeout(this._responseTimeoutTimer);
clearTimeout(this._uploadTimeoutTimer);
delete this._timer;
delete this._responseTimeoutTimer;
delete this._uploadTimeoutTimer;
return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse=function(fn){
this._parser=fn;
return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType=function(val){
this._responseType=val;
return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize=function(fn){
this._serializer=fn;
return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout=function(options){
if(!options||_typeof(options)!=='object'){
this._timeout=options;
this._responseTimeout=0;
this._uploadTimeout=0;
return this;
}

for(var option in options){
if(Object.prototype.hasOwnProperty.call(options,option)){
switch(option){
case'deadline':
this._timeout=options.deadline;
break;

case'response':
this._responseTimeout=options.response;
break;

case'upload':
this._uploadTimeout=options.upload;
break;

default:
console.warn('Unknown timeout option',option);}

}
}

return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry=function(count,fn){
// Default to 1 if no count passed or true
if(arguments.length===0||count===true)count=1;
if(count<=0)count=0;
this._maxRetries=count;
this._retries=0;
this._retryCallback=fn;
return this;
};

var ERROR_CODES=['ECONNRESET','ETIMEDOUT','EADDRINFO','ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry=function(err,res){
if(!this._maxRetries||this._retries++>=this._maxRetries){
return false;
}

if(this._retryCallback){
try{
var override=this._retryCallback(err,res);

if(override===true)return true;
if(override===false)return false;// undefined falls back to defaults
}catch(err_){
console.error(err_);
}
}

if(res&&res.status&&res.status>=500&&res.status!==501)return true;

if(err){
if(err.code&&ERROR_CODES.includes(err.code))return true;// Superagent timeout

if(err.timeout&&err.code==='ECONNABORTED')return true;
if(err.crossDomain)return true;
}

return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry=function(){
this.clearTimeout();// node

if(this.req){
this.req=null;
this.req=this.request();
}

this._aborted=false;
this.timedout=false;
this.timedoutError=null;
return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then=function(resolve,reject){
var _this=this;

if(!this._fullfilledPromise){
var self=this;

if(this._endCalled){
console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
}

this._fullfilledPromise=new _promise2.default(function(resolve,reject){
self.on('abort',function(){
if(_this.timedout&&_this.timedoutError){
reject(_this.timedoutError);
return;
}

var err=new Error('Aborted');
err.code='ABORTED';
err.status=_this.status;
err.method=_this.method;
err.url=_this.url;
reject(err);
});
self.end(function(err,res){
if(err)reject(err);else resolve(res);
});
});
}

return this._fullfilledPromise.then(resolve,reject);
};

RequestBase.prototype.catch=function(cb){
return this.then(undefined,cb);
};
/**
 * Allow for extension
 */

RequestBase.prototype.use=function(fn){
fn(this);
return this;
};

RequestBase.prototype.ok=function(cb){
if(typeof cb!=='function')throw new Error('Callback required');
this._okCallback=cb;
return this;
};

RequestBase.prototype._isResponseOK=function(res){
if(!res){
return false;
}

if(this._okCallback){
return this._okCallback(res);
}

return res.status>=200&&res.status<300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get=function(field){
return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader=RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set=function(field,val){
if(isObject(field)){
for(var key in field){
if(Object.prototype.hasOwnProperty.call(field,key))this.set(key,field[key]);
}

return this;
}

this._header[field.toLowerCase()]=val;
this.header[field]=val;
return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */

RequestBase.prototype.unset=function(field){
delete this._header[field.toLowerCase()];
delete this.header[field];
return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.field=function(name,val){
// name should be either a string or an object.
if(name===null||undefined===name){
throw new Error('.field(name, val) name can not be empty');
}

if(this._data){
throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
}

if(isObject(name)){
for(var key in name){
if(Object.prototype.hasOwnProperty.call(name,key))this.field(key,name[key]);
}

return this;
}

if(Array.isArray(val)){
for(var i in val){
if(Object.prototype.hasOwnProperty.call(val,i))this.field(name,val[i]);
}

return this;
}// val should be defined now


if(val===null||undefined===val){
throw new Error('.field(name, val) val can not be empty');
}

if(typeof val==='boolean'){
val=String(val);
}

this._getFormData().append(name,val);

return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */

RequestBase.prototype.abort=function(){
if(this._aborted){
return this;
}

this._aborted=true;
if(this.xhr)this.xhr.abort();// browser

if(this.req)this.req.abort();// node

this.clearTimeout();
this.emit('abort');
return this;
};

RequestBase.prototype._auth=function(user,pass,options,base64Encoder){
switch(options.type){
case'basic':
this.set('Authorization',"Basic ".concat(base64Encoder("".concat(user,":").concat(pass))));
break;

case'auto':
this.username=user;
this.password=pass;
break;

case'bearer':
// usage would be .auth(accessToken, { type: 'bearer' })
this.set('Authorization',"Bearer ".concat(user));
break;

default:
break;}


return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials=function(on){
// This is browser-only functionality. Node side is no-op.
if(on===undefined)on=true;
this._withCredentials=on;
return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects=function(n){
this._maxRedirects=n;
return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */

RequestBase.prototype.maxResponseSize=function(n){
if(typeof n!=='number'){
throw new TypeError('Invalid argument');
}

this._maxResponseSize=n;
return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON=function(){
return{
method:this.method,
url:this.url,
data:this._data,
headers:this._header};

};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send=function(data){
var isObj=isObject(data);
var type=this._header['content-type'];

if(this._formData){
throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
}

if(isObj&&!this._data){
if(Array.isArray(data)){
this._data=[];
}else if(!this._isHost(data)){
this._data={};
}
}else if(data&&this._data&&this._isHost(this._data)){
throw new Error("Can't merge these send calls");
}// merge


if(isObj&&isObject(this._data)){
for(var key in data){
if(Object.prototype.hasOwnProperty.call(data,key))this._data[key]=data[key];
}
}else if(typeof data==='string'){
// default to x-www-form-urlencoded
if(!type)this.type('form');
type=this._header['content-type'];

if(type==='application/x-www-form-urlencoded'){
this._data=this._data?"".concat(this._data,"&").concat(data):data;
}else{
this._data=(this._data||'')+data;
}
}else{
this._data=data;
}

if(!isObj||this._isHost(data)){
return this;
}// default to json


if(!type)this.type('json');
return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery=function(sort){
// _sort default to true but otherwise can be a function or boolean
this._sort=typeof sort==='undefined'?true:sort;
return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

RequestBase.prototype._finalizeQueryString=function(){
var query=this._query.join('&');

if(query){
this.url+=(this.url.includes('?')?'&':'?')+query;
}

this._query.length=0;// Makes the call idempotent

if(this._sort){
var index=this.url.indexOf('?');

if(index>=0){
var queryArr=this.url.slice(index+1).split('&');

if(typeof this._sort==='function'){
queryArr.sort(this._sort);
}else{
queryArr.sort();
}

this.url=this.url.slice(0,index)+'?'+queryArr.join('&');
}
}
};// For backwards compat only


RequestBase.prototype._appendQueryString=function(){
console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError=function(reason,timeout,errno){
if(this._aborted){
return;
}

var err=new Error("".concat(reason+timeout,"ms exceeded"));
err.timeout=timeout;
err.code='ECONNABORTED';
err.errno=errno;
this.timedout=true;
this.timedoutError=err;
this.abort();
this.callback(err);
};

RequestBase.prototype._setTimeouts=function(){
var self=this;// deadline

if(this._timeout&&!this._timer){
this._timer=setTimeout(function(){
self._timeoutError('Timeout of ',self._timeout,'ETIME');
},this._timeout);
}// response timeout


if(this._responseTimeout&&!this._responseTimeoutTimer){
this._responseTimeoutTimer=setTimeout(function(){
self._timeoutError('Response timeout of ',self._responseTimeout,'ETIMEDOUT');
},this._responseTimeout);
}
};

/***/},
/* 173 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Module dependencies.
 */

var utils=__webpack_require__(174);
/**
 * Expose `ResponseBase`.
 */

module.exports=ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj){
if(obj)return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj){
for(var key in ResponseBase.prototype){
if(Object.prototype.hasOwnProperty.call(ResponseBase.prototype,key))obj[key]=ResponseBase.prototype[key];
}

return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get=function(field){
return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties=function(header){
// TODO: moar!
// TODO: make this a util
// content-type
var ct=header['content-type']||'';
this.type=utils.type(ct);// params

var params=utils.params(ct);

for(var key in params){
if(Object.prototype.hasOwnProperty.call(params,key))this[key]=params[key];
}

this.links={};// links

try{
if(header.link){
this.links=utils.parseLinks(header.link);
}
}catch(_unused){// ignore
}
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties=function(status){
var type=status/100|0;// status / class

this.statusCode=status;
this.status=this.statusCode;
this.statusType=type;// basics

this.info=type===1;
this.ok=type===2;
this.redirect=type===3;
this.clientError=type===4;
this.serverError=type===5;
this.error=type===4||type===5?this.toError():false;// sugar

this.created=status===201;
this.accepted=status===202;
this.noContent=status===204;
this.badRequest=status===400;
this.unauthorized=status===401;
this.notAcceptable=status===406;
this.forbidden=status===403;
this.notFound=status===404;
this.unprocessableEntity=status===422;
};

/***/},
/* 174 */
/***/function(module,exports,__webpack_require__){

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type=function(str){
return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params=function(str){
return str.split(/ *; */).reduce(function(obj,str){
var parts=str.split(/ *= */);
var key=parts.shift();
var val=parts.shift();
if(key&&val)obj[key]=val;
return obj;
},{});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks=function(str){
return str.split(/ *, */).reduce(function(obj,str){
var parts=str.split(/ *; */);
var url=parts[0].slice(1,-1);
var rel=parts[1].split(/ *= */)[1].slice(1,-1);
obj[rel]=url;
return obj;
},{});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader=function(header,changesOrigin){
delete header['content-type'];
delete header['content-length'];
delete header['transfer-encoding'];
delete header.host;// secuirty

if(changesOrigin){
delete header.authorization;
delete header.cookie;
}

return header;
};

/***/},
/* 175 */
/***/function(module,exports,__webpack_require__){

"use strict";


var _from=__webpack_require__(176);

var _from2=_interopRequireDefault(_from);

var _isIterable2=__webpack_require__(79);

var _isIterable3=_interopRequireDefault(_isIterable2);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function _toConsumableArray(arr){
return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();
}

function _nonIterableSpread(){
throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter){
if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);
}

function _arrayWithoutHoles(arr){
if(Array.isArray(arr)){
for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){
arr2[i]=arr[i];
}return arr2;
}
}

function Agent(){
this._defaults=[];
}

['use','on','once','set','query','type','accept','auth','withCredentials','sortQuery','retry','ok','redirects','timeout','buffer','serialize','parse','ca','key','pfx','cert','disableTLSCerts'].forEach(function(fn){
// Default setting for all requests from this agent
Agent.prototype[fn]=function(){
for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){
args[_key]=arguments[_key];
}

this._defaults.push({
fn:fn,
args:args});


return this;
};
});

Agent.prototype._setDefaults=function(req){
this._defaults.forEach(function(def){
req[def.fn].apply(req,_toConsumableArray(def.args));
});
};

module.exports=Agent;

/***/},
/* 176 */
/***/function(module,exports,__webpack_require__){

module.exports={"default":__webpack_require__(177),__esModule:true};

/***/},
/* 177 */
/***/function(module,exports,__webpack_require__){

__webpack_require__(21);
__webpack_require__(178);
module.exports=__webpack_require__(1).Array.from;


/***/},
/* 178 */
/***/function(module,exports,__webpack_require__){

"use strict";

var ctx=__webpack_require__(23);
var $export=__webpack_require__(10);
var toObject=__webpack_require__(27);
var call=__webpack_require__(60);
var isArrayIter=__webpack_require__(61);
var toLength=__webpack_require__(40);
var createProperty=__webpack_require__(179);
var getIterFn=__webpack_require__(45);

$export($export.S+$export.F*!__webpack_require__(66)(function(iter){Array.from(iter);}),'Array',{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/* , mapfn = undefined, thisArg = undefined */){
var O=toObject(arrayLike);
var C=typeof this=='function'?this:Array;
var aLen=arguments.length;
var mapfn=aLen>1?arguments[1]:undefined;
var mapping=mapfn!==undefined;
var index=0;
var iterFn=getIterFn(O);
var length,result,step,iterator;
if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);
// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){
for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){
createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);
}
}else{
length=toLength(O.length);
for(result=new C(length);length>index;index++){
createProperty(result,index,mapping?mapfn(O[index],index):O[index]);
}
}
result.length=index;
return result;
}});



/***/},
/* 179 */
/***/function(module,exports,__webpack_require__){

"use strict";

var $defineProperty=__webpack_require__(7);
var createDesc=__webpack_require__(25);

module.exports=function(object,index,value){
if(index in object)$defineProperty.f(object,index,createDesc(0,value));else
object[index]=value;
};


/***/}
/******/]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 19)))

/***/ }),
/* 19 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 20);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 20 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 19)))

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map