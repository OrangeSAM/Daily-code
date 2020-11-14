(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/lyz-canvas/lyz-canvas"],{

/***/ 28:
/*!**************************************************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/canvas海报模版-海报组件/components/lyz-canvas/lyz-canvas.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lyz-canvas.vue?vue&type=template&id=5f6464c4& */ 29);
/* harmony import */ var _lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lyz-canvas.vue?vue&type=script&lang=js& */ 31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/lyz-canvas/lyz-canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/*!*********************************************************************************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/canvas海报模版-海报组件/components/lyz-canvas/lyz-canvas.vue?vue&type=template&id=5f6464c4& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./lyz-canvas.vue?vue&type=template&id=5f6464c4& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_template_id_5f6464c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 30:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Repo/Daily-code/UniApp/canvas海报模版-海报组件/components/lyz-canvas/lyz-canvas.vue?vue&type=template&id=5f6464c4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 31:
/*!***************************************************************************************************************!*\
  !*** D:/Repo/Daily-code/UniApp/canvas海报模版-海报组件/components/lyz-canvas/lyz-canvas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./lyz-canvas.vue?vue&type=script&lang=js& */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_lyz_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Repo/Daily-code/UniApp/canvas海报模版-海报组件/components/lyz-canvas/lyz-canvas.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//

/** 从 0x20 开始到 0x80 的字符宽度数据 */
var CHAR_WIDTH_SCALE_MAP = [0.296, 0.313, 0.436, 0.638, 0.586, 0.89, 0.87, 0.256, 0.334, 0.334, 0.455, 0.742, 0.241, 0.433, 0.241, 0.427, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.241, 0.241, 0.742, 0.742, 0.742, 0.483, 1.031, 0.704, 0.627, 0.669, 0.762, 0.55, 0.531, 0.744, 0.773, 0.294, 0.396, 0.635, 0.513, 0.977, 0.813, 0.815, 0.612, 0.815, 0.653, 0.577, 0.573, 0.747, 0.676, 1.018, 0.645, 0.604, 0.62, 0.334, 0.416, 0.334, 0.742, 0.448, 0.295, 0.553, 0.639, 0.501, 0.64, 0.567, 0.347, 0.64, 0.616, 0.266, 0.267, 0.544, 0.266, 0.937, 0.616, 0.636, 0.639, 0.64, 0.382, 0.463, 0.373, 0.616, 0.525, 0.79, 0.507, 0.529, 0.492, 0.334, 0.269, 0.334, 0.742, 0.296];

var setStringPrototype = function setStringPrototype(screen) {
  /* eslint-disable no-extend-native */
  /**
                                         * 是否支持负数
                                         * @param {Boolean} minus 是否支持负数
                                         * @param {Number} baseSize 当设置了 % 号时，设置的基准值
                                         */
  String.prototype.toPx = function (minus, baseSize) {
    var reg = minus ? /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g : /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g;
    var results = reg.exec(this);
    if (!this || !results) {
      return 0;
    }
    var unit = results[2];
    var value = parseFloat(this);
    var res = 0;
    if (unit === 'rpx') {
      res = Math.round(value * (screen || 0.5) * 1);
    } else if (unit === 'px') {
      res = Math.round(value * 1);
    } else if (unit === '%') {
      res = Math.round(value * baseSize / 100);
    }
    return res;
  };
};var _default =
{
  props: {
    board: {
      type: Object },

    isAsync: {
      type: Boolean,
      default: true },

    pixelRatio: Number,
    customStyle: String,
    isRenderImage: Boolean },

  data: function data() {
    return {
      timer: null,




      id: "painter" };


  },
  watch: {
    board: {
      handler: 'drawAll'
      // immediate: true 
      // deep: true
    } },

  computed: {
    dpr: function dpr() {
      return this.pixelRatio || uni.getSystemInfoSync().pixelRatio;
    },
    windowWidth: function windowWidth() {
      return uni.getSystemInfoSync().windowWidth;
    },
    boardWidth: function boardWidth() {var _ref =
      this.board || {},_ref$width = _ref.width,width = _ref$width === void 0 ? 200 : _ref$width;
      return width;
    },
    boardHeight: function boardHeight() {var _ref2 =
      this.board || {},_ref2$height = _ref2.height,height = _ref2$height === void 0 ? 200 : _ref2$height;
      return height;
    } },

  created: function created() {
    this.init();
  },
  mounted: function mounted() {
    if (this.context) {
      this.drawAll();
    }
  },
  methods: {
    initBoard: function initBoard() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _board$views;var board, result;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                board = _this.board;if (!(
                board === null || board === void 0 ? void 0 : (_board$views = board.views) === null || _board$views === void 0 ? void 0 : _board$views.length)) {_context2.next = 6;break;}_context2.next = 4;return (
                  Promise.all(board.views.map( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(item) {var _yield$_this$getImage, height, width, path;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                              item.type === 'image')) {_context.next = 8;break;}_context.next = 3;return (
                                _this.getImageInfo(item.url));case 3:_yield$_this$getImage = _context.sent;height = _yield$_this$getImage.height;width = _yield$_this$getImage.width;path = _yield$_this$getImage.path;return _context.abrupt("return",
                              Object.assign({}, item, { height: height, width: width, url: path }));case 8:return _context.abrupt("return",

                              item);case 9:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref3.apply(this, arguments);};}())));case 4:result = _context2.sent;return _context2.abrupt("return",

                result || []);case 6:return _context2.abrupt("return",

                []);case 7:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    init: function init() {
      this.context = uni.createCanvasContext(this.id, this);
      setStringPrototype(this.windowWidth / 750);
    },
    draw: function draw(view) {var _this2 = this;
      this.context.setFillStyle(view.background || 'white');
      this.context.fillRect(view.css.left.toPx(), view.css.top.toPx(), view.css.width.toPx(), view.css.height.toPx());
      this.context.clip();
      this.drawView(this.context, view);
      this.context.draw(true, function () {
        if (_this2.isRenderImage) {
          setTimeout(function () {
            _this2.saveImgToLocal();
          }, 100);
        }
      });
    },
    drawAll: function drawAll() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _this3$board, _this3$board2, _this3$board3;var views, board, promises;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                _this3.isAsync) {_context3.next = 6;break;}_context3.next = 3;return _this3.initBoard();case 3:_context3.t0 = _context3.sent;_context3.next = 7;break;case 6:_context3.t0 = _this3.board.views;case 7:views = _context3.t0;if (!(
                !_this3.context || !views.length)) {_context3.next = 10;break;}return _context3.abrupt("return");case 10:
                board = _this3.drawRect(_this3.context, { type: 'view', css: { left: "".concat(((_this3$board = _this3.board) === null || _this3$board === void 0 ? void 0 : _this3$board.left) || 0), top: "".concat(((_this3$board2 = _this3.board) === null || _this3$board2 === void 0 ? void 0 : _this3$board2.top) || 0), width: "".concat(_this3.boardWidth), height: "".concat(_this3.boardHeight), background: (_this3$board3 = _this3.board) === null || _this3$board3 === void 0 ? void 0 : _this3$board3.background } });
                promises = views.map(function (item) {return _this3.drawView(_this3.context, item);}) || [Promise.resolve()];
                Promise.all([board].concat(promises)).then(function (res) {
                  _this3.context.draw(true, function () {
                    // 防止字节大量生成
                    if (_this3.isRenderImage) {
                      clearTimeout(_this3.timer);
                      _this3.timer = setTimeout(function () {
                        _this3.saveImgToLocal();
                      }, 100);
                    }
                  });
                });case 13:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    saveImgToLocal: function saveImgToLocal() {var _this4 = this;
      uni.canvasToTempFilePath({
        // x: 0,
        // y: 0,
        // width:  this.boardWidth.toPx(),
        // height: this.boardWidth.toPx(),
        canvasId: this.id,
        destWidth: this.toNumber(this.boardWidth) * this.dpr,
        destHeight: this.toNumber(this.boardHeight) * this.dpr,
        success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {var photo;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                      _this4.getImageInfo(res.tempFilePath));case 2:photo = _context4.sent;
                    if (photo.path) {
                      _this4.$emit('success', photo.path);
                    }case 4:case "end":return _context4.stop();}}}, _callee4);}));function success(_x2) {return _success.apply(this, arguments);}return success;}(),

        fail: function fail(error) {
          console.error("canvasToTempFilePath failed, ".concat(JSON.stringify(error)));
          _this4.$emit('fail', {
            error: error });

        } },
      this);
    },
    drawView: function drawView(context, view) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _yield$_this5$getImag, _yield$_this5$getImag2, height, _yield$_this5$getImag3, width, url;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:if (!(
                view.type == 'view')) {_context5.next = 4;break;}return _context5.abrupt("return",
                _this5.drawRect(context, view));case 4:if (!(
                view.type == 'image')) {_context5.next = 20;break;}if (!
                _this5.isAsync) {_context5.next = 9;break;}return _context5.abrupt("return",
                _this5.drawRect(context, view));case 9:_context5.next = 11;return (

                  _this5.getImageInfo(view.url));case 11:_yield$_this5$getImag = _context5.sent;_yield$_this5$getImag2 = _yield$_this5$getImag.height;height = _yield$_this5$getImag2 === void 0 ? 0 : _yield$_this5$getImag2;_yield$_this5$getImag3 = _yield$_this5$getImag.width;width = _yield$_this5$getImag3 === void 0 ? 0 : _yield$_this5$getImag3;url = _yield$_this5$getImag.path;return _context5.abrupt("return",
                _this5.drawRect(context, Object.assign(view, { height: height, width: width, url: url })));case 18:_context5.next = 22;break;case 20:if (!(

                view.type == 'text')) {_context5.next = 22;break;}return _context5.abrupt("return",
                _this5.drawText(context, view));case 22:case "end":return _context5.stop();}}}, _callee5);}))();

    },
    toNumber: function toNumber(value) {var minus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var baseSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (typeof value === 'string') {
        return value.toPx(minus, baseSize);
      } else if (typeof value === 'number') {
        return value;
      } else {
        return 0;
      }
    },
    base64src: function base64src(base64data) {
      return new Promise(function (resolve, reject) {
        var fs = uni.getFileSystemManager();
        //自定义文件名
        var _ref4 = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [],_ref5 = _slicedToArray(_ref4, 3),format = _ref5[1],bodyData = _ref5[2];
        if (!format) {reject(new Error('ERROR_BASE64SRC_PARSE'));}
        var time = new Date().getTime();
        var filePath = "".concat(wx.env.USER_DATA_PATH, "/").concat(time, ".").concat(format);
        var buffer = uni.base64ToArrayBuffer(bodyData);
        fs.writeFile({
          filePath: filePath,
          data: buffer,
          encoding: 'binary',
          success: function success() {
            resolve(filePath);
          },
          fail: function fail(err) {
            reject();
            this.$emit('fail', {
              error: err });

            console.log('获取base64图片失败', err);
          } });

      });
    },
    //获取图片
    getImageInfo: function getImageInfo(imgSrc) {var _this6 = this;
      console.log(imgSrc);
      return new Promise( /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:if (!

                  /^data:image\/(\w+);base64/.test(imgSrc)) {_context6.next = 4;break;}_context6.next = 3;return (
                    _this6.base64src(imgSrc));case 3:imgSrc = _context6.sent;case 4:


                  uni.getImageInfo({
                    src: imgSrc,
                    success: function success(image) {
                      console.log(image);
                      // 微信小程序会把相对路径转为不完整的绝对路径，要在前面加'/'
                      // const res = await this.downloadImage(image.path)
                      image.path = /^(http|\/\/|\/|wxfile|data:image\/(\w+);base64|file|bdfile)/.test(image.path) ? image.path : "/".concat(image.path);
                      resolve(image);
                      // console.log('获取图片成功',image)
                    },
                    fail: function fail(err) {
                      console.log(image);
                      reject();
                      _this6.$emit('fail', {
                        error: err });

                      console.log('获取图片失败', err, imgSrc);
                    } });case 5:case "end":return _context6.stop();}}}, _callee6);}));return function (_x3, _x4) {return _ref6.apply(this, arguments);};}());


    },
    downloadImage: function downloadImage(url) {
      return new Promise(function (resolve, reject) {
        var downloadTask = uni.downloadFile({
          url: url,
          success: function success(res) {
            if (res.statusCode !== 200) {
              console.error("downloadFile ".concat(url, " failed res.statusCode is not 200"));
              reject();
              return;
            } else {
              resolve(res.tempFilePath);
            }
          },
          fail: function fail(error) {
            uni.showToast({
              title: error });

            console.error("downloadFile ".concat(url, " failed ").concat(JSON.stringify(error)));
            resolve(url);

          } });

      });
    },
    measureText: function measureText(context, text, fontSize) {

      return context.measureText(text).width;









    },
    calcTextArrs: function calcTextArrs(context, view) {
      // 拆分行
      var textArray = view.text.split('\n');
      // 设置属性

      var fontWeight = view.css.fontWeight === 'bold' ? 'bold' : 'normal';
      var textStyle = view.css.textStyle === 'italic' ? 'italic' : 'normal';





      var fontSize = view.css.fontSize ? this.toNumber(view.css.fontSize) : '20rpx'.toPx();
      var fontFamily = view.css.fontFamily || 'sans-serif';
      context.font = "".concat(textStyle, " ").concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);

      var width = 0;
      var height = 0;
      var lines = 0;
      var linesArray = [];
      for (var index = 0; index < textArray.length; index++) {
        var text = textArray[index];
        var textLength = this.measureText(context, text, fontSize); // context.measureText(text).width
        var minWidth = fontSize;
        var partWidth = view.css.width ? this.toNumber(view.css.width) : textLength;

        if (partWidth < minWidth) {
          partWidth = minWidth;
        }
        var calLines = Math.ceil(textLength / partWidth);
        width = partWidth > width ? partWidth : width;
        lines += calLines;
        linesArray[index] = calLines;
      }
      // 计算行数
      lines = view.css.maxLines < lines ? view.css.maxLines : lines;
      // 计算行高
      var lineHeight = view.css.lineHeight ? typeof view.css.lineHeight === 'number' ? this.toNumber(view.css.lineHeight) * fontSize : this.toNumber(view.css.lineHeight) : fontSize * 1.2;
      height = lineHeight * lines;

      return {
        fontSize: fontSize,
        width: width,
        height: height,
        lines: lines,
        lineHeight: lineHeight,
        textArray: textArray,
        linesArray: linesArray };


    },
    drawText: function drawText(context, view) {var _this7 = this;
      return new Promise( /*#__PURE__*/function () {var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(resolve, reject) {var _view$css;var _this7$calcTextArrs, width, height, lines, lineHeight, textArray, linesArray, fontSize, lineIndex, i, preLineLength, start, alreadyCount, j, text, measuredWith, x, lineX, y;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_this7$calcTextArrs =
                  _this7.calcTextArrs(context, view), width = _this7$calcTextArrs.width, height = _this7$calcTextArrs.height, lines = _this7$calcTextArrs.lines, lineHeight = _this7$calcTextArrs.lineHeight, textArray = _this7$calcTextArrs.textArray, linesArray = _this7$calcTextArrs.linesArray, fontSize = _this7$calcTextArrs.fontSize;
                  context.fillStyle = ((_view$css = view.css) === null || _view$css === void 0 ? void 0 : _view$css.color) || 'black';
                  // context.setTextBaseline('top')
                  lineIndex = 0;
                  i = 0;case 4:if (!(i < textArray.length)) {_context7.next = 62;break;}
                  preLineLength = Math.ceil(textArray[i].length / linesArray[i]);
                  start = 0;
                  alreadyCount = 0;
                  j = 0;case 9:if (!(j < linesArray[i])) {_context7.next = 59;break;}
                  context.save();
                  // 绘制行数大于最大行数，则直接跳出循环
                  if (!(lineIndex >= lines)) {_context7.next = 13;break;}return _context7.abrupt("break", 59);case 13:


                  alreadyCount = preLineLength;
                  text = textArray[i].substr(start, alreadyCount);
                  measuredWith = _this7.measureText(context, text, fontSize);
                  // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
                  // 如果已经到文本末尾，也不要进行该循环
                case 16:if (!(start + alreadyCount <= textArray[i].length && (width - measuredWith > fontSize || measuredWith - width > fontSize))) {_context7.next = 27;break;}if (!(
                  measuredWith < width)) {_context7.next = 21;break;}
                  text = textArray[i].substr(start, ++alreadyCount);_context7.next = 24;break;case 21:if (!(

                  text.length <= 1)) {_context7.next = 23;break;}return _context7.abrupt("break", 27);case 23:



                  text = textArray[i].substr(start, --alreadyCount);
                  // break;
                case 24:
                  measuredWith = _this7.measureText(context, text, fontSize);_context7.next = 16;break;case 27:

                  start += text.length;
                  // 如果是最后一行了，发现还有未绘制完的内容，则加...
                  if (!(lineIndex === lines - 1 && (i < textArray.length - 1 || start < textArray[i].length))) {_context7.next = 37;break;}case 29:if (!(
                  _this7.measureText(context, "".concat(text, "..."), fontSize) > width)) {_context7.next = 35;break;}if (!(
                  text.length <= 1)) {_context7.next = 32;break;}return _context7.abrupt("break", 35);case 32:



                  text = text.substring(0, text.length - 1);_context7.next = 29;break;case 35:

                  text += '...';
                  measuredWith = _this7.measureText(context, text, fontSize);case 37:

                  context.setTextAlign(view.css.textAlign ? view.css.textAlign : 'left');
                  x = _this7.toNumber(view.css.left);
                  lineX = void 0;_context7.t0 =
                  view.css.textAlign;_context7.next = _context7.t0 ===
                  'center' ? 43 : _context7.t0 ===



                  'right' ? 46 : 49;break;case 43:x = x + measuredWith / 2 + ((_this7.toNumber(view.css.width) || _this7.toNumber(_this7.boardWidth, 0, _this7.windowWidth)) - measuredWith) / 2;lineX = x - measuredWith / 2;return _context7.abrupt("break", 51);case 46:
                  x = x + (_this7.toNumber(view.css.width) || _this7.toNumber(_this7.boardWidth, 0, _this7.windowWidth));
                  lineX = x - measuredWith;return _context7.abrupt("break", 51);case 49:


                  lineX = x;return _context7.abrupt("break", 51);case 51:


                  // top 等于字体高度加行高
                  y = _this7.toNumber(view.css.top) + (lineIndex === 0 ? fontSize : fontSize + lineIndex * lineHeight);
                  //const y = (view.css?.top?.toPx() || 0) + (this.toNumber(view.css.fontSize) + lineIndex * lineHeight) - this.toNumber(view.css.fontSize)
                  lineIndex++;
                  if (view.css.textStyle === 'stroke') {
                    context.strokeText(text, x, y, measuredWith);
                  } else {
                    context.fillText(text, x, y, measuredWith * _this7.dpr);
                  }
                  if (view.css.textDecoration) {
                    context.lineWidth = fontSize / 13;
                    context.beginPath();
                    if (/\bunderline\b/.test(view.css.textDecoration)) {
                      context.moveTo(lineX, y);
                      context.lineTo(lineX + measuredWith, y);
                    }
                    if (/\boverline\b/.test(view.css.textDecoration)) {
                      context.moveTo(lineX, y - fontSize);
                      context.lineTo(lineX + measuredWith, y - fontSize);
                    }
                    if (/\bline-through\b/.test(view.css.textDecoration)) {
                      context.moveTo(lineX, y - fontSize / 2.5);
                      context.lineTo(lineX + measuredWith, y - fontSize / 2.5);
                    }
                    context.closePath();
                    context.strokeStyle = view.css.color;
                    context.stroke();
                  }
                  context.restore();case 56:j++;_context7.next = 9;break;case 59:i++;_context7.next = 4;break;case 62:


                  setTimeout(function () {return resolve('ok');}, 100);case 63:case "end":return _context7.stop();}}}, _callee7);}));return function (_x5, _x6) {return _ref7.apply(this, arguments);};}());

    },
    drawRect: function drawRect(context, view) {
      return new Promise(function (resolve, reject) {var _view$css2, _view$css2$left, _view$css3, _view$css3$top, _view$css4, _view$css5, _view$css6, _view$css6$radius, _view$css7, _view$css8, _view$css9, _view$css9$border, _view$css10, _view$css11;
        var left = ((_view$css2 = view.css) === null || _view$css2 === void 0 ? void 0 : (_view$css2$left = _view$css2.left) === null || _view$css2$left === void 0 ? void 0 : _view$css2$left.toPx()) || 0;
        var top = ((_view$css3 = view.css) === null || _view$css3 === void 0 ? void 0 : (_view$css3$top = _view$css3.top) === null || _view$css3$top === void 0 ? void 0 : _view$css3$top.toPx()) || 0;
        var width = ((_view$css4 = view.css) === null || _view$css4 === void 0 ? void 0 : _view$css4.width.toPx()) || 0;
        var height = ((_view$css5 = view.css) === null || _view$css5 === void 0 ? void 0 : _view$css5.height.toPx()) || 0;

        // 圆角
        var _ref8 = ((_view$css6 = view.css) === null || _view$css6 === void 0 ? void 0 : (_view$css6$radius = _view$css6.radius) === null || _view$css6$radius === void 0 ? void 0 : _view$css6$radius.split(' ').map(function (item) {return /^\d/.test(item) && item.toPx(0, width);}, [])) || [0],_ref9 = _slicedToArray(_ref8, 4),topLeftRadius = _ref9[0],topRightRadius = _ref9[1],bottomRightRadius = _ref9[2],bottomLeftRadius = _ref9[3];
        var radius = topLeftRadius;
        topRightRadius = topRightRadius || topLeftRadius;
        bottomRightRadius = bottomRightRadius || topLeftRadius;
        bottomLeftRadius = bottomLeftRadius || topRightRadius;


        // 字节不支持 transparent
        var color = ((_view$css7 = view.css) === null || _view$css7 === void 0 ? void 0 : _view$css7.backgroundColor) || ((_view$css8 = view.css) === null || _view$css8 === void 0 ? void 0 : _view$css8.background) || 'white'; //'transparent'
        var border = (_view$css9 = view.css) === null || _view$css9 === void 0 ? void 0 : (_view$css9$border = _view$css9.border) === null || _view$css9$border === void 0 ? void 0 : _view$css9$border.split(' ').map(function (item) {return /^\d/.test(item) ? item.toPx() : item;});
        var shadow = (_view$css10 = view.css) === null || _view$css10 === void 0 ? void 0 : _view$css10.shadow;
        var angle = (_view$css11 = view.css) === null || _view$css11 === void 0 ? void 0 : _view$css11.rotate;

        context.save();
        context.setFillStyle(color);
        // 旋转 
        if (angle) {
          context.translate(left + width / 2, top + height / 2);
          context.rotate(angle * Math.PI / 180);
          context.translate(-left - width / 2, -top - height / 2);
        }
        // 投影
        if (shadow) {var _shadow$split =
          shadow.split(' '),_shadow$split2 = _slicedToArray(_shadow$split, 4),x = _shadow$split2[0],y = _shadow$split2[1],b = _shadow$split2[2],c = _shadow$split2[3];
          context.shadowOffsetX = x.toPx();
          context.shadowOffsetY = y.toPx();
          context.shadowBlur = b.toPx();
          context.shadowColor = c;
        }
        // 圆角
        if (radius) {
          context.beginPath();
          // 右下角
          context.arc(left + width - (bottomRightRadius || radius), top + height - (bottomRightRadius || radius), bottomRightRadius || radius, 0, Math.PI * 0.5);
          context.lineTo(left + (bottomLeftRadius || radius), top + height);
          // 左下角
          context.arc(left + (bottomLeftRadius || radius), top + height - (bottomLeftRadius || radius), bottomLeftRadius || radius, Math.PI * 0.5, Math.PI);
          context.lineTo(left, top + radius);
          // 左上角
          context.arc(left + radius, top + radius, radius, Math.PI, Math.PI * 1.5);
          context.lineTo(left + width - (topRightRadius || radius), top);
          // 右上角
          context.arc(left + width - (topRightRadius || radius), top + (topRightRadius || radius), topRightRadius || radius, Math.PI * 1.5, Math.PI * 2);
          context.closePath();
          context.fill();
        } else {
          context.fillRect(left, top, width, height);
        }

        // 填充图片
        if ((view === null || view === void 0 ? void 0 : view.type) == 'image') {
          // 字节不支持 transparent
          context.fillStyle = 'white';
          radius && context.clip();
          // 获得缩放到图片大小级别的裁减框
          var rWidth = view.width;
          var rHeight = view.height;

          var startX = 0;
          var startY = 0;
          // 绘画区域比例
          var cp = width / height;
          // 原图比例
          var op = rWidth / rHeight;
          if (cp >= op) {
            rHeight = rWidth / cp;
            // startY = Math.round((view.height - rHeight) / 2)
          } else {
            rWidth = rHeight * cp;
            startX = Math.round((view.width - rWidth) / 2);
          }
          if (view.css && view.mode === 'scaleToFill') {
            console.log(view);
            context.drawImage(view.url, left, top, width, height);
          } else {
            console.log(view);
            context.drawImage(view.url, startX, startY, rWidth, rHeight, left, top, width, height);
          }
        }
        // 描边
        if (border) {
          var lineWidth = border[0];
          context.lineWidth = lineWidth;
          if (border[1] == 'dashed') {
            context.setLineDash([Math.ceil(lineWidth * 4 / 3), Math.ceil(lineWidth * 4 / 3)]);
          } else if (border[1] == 'dotted') {
            context.setLineDash([lineWidth, lineWidth]);
          }
          // 字节不支持strokeStyle
          context.setStrokeStyle(border[2]);
          // context.strokeStyle = border[2]
          if (radius) {
            context.stroke();
          } else {
            context.strokeRect(left, top, width, height);
          }
        }
        context.restore();
        setTimeout(function () {return resolve('ok');}, 50);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/lyz-canvas/lyz-canvas.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/lyz-canvas/lyz-canvas-create-component',
    {
        'components/lyz-canvas/lyz-canvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(28))
        })
    },
    [['components/lyz-canvas/lyz-canvas-create-component']]
]);
