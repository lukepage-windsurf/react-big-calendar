"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _messages = _interopRequireDefault(require("./utils/messages"));
var _constants = require("./utils/constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Toolbar = /*#__PURE__*/function (_React$Component) {
  function Toolbar() {
    var _this;
    _classCallCheck(this, Toolbar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Toolbar, [].concat(args));
    _defineProperty(_this, "navigate", function (action) {
      _this.props.onNavigate(action);
    });
    _defineProperty(_this, "view", function (view) {
      _this.props.onViewChange(view);
    });
    return _this;
  }
  _inherits(Toolbar, _React$Component);
  return _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        messages = _this$props.messages,
        label = _this$props.label;
      messages = (0, _messages.default)(messages);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rbc-toolbar",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          className: "rbc-btn-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: this.navigate.bind(null, _constants.navigate.TODAY),
            children: messages.today
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS),
            children: messages.previous
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            onClick: this.navigate.bind(null, _constants.navigate.NEXT),
            children: messages.next
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "rbc-toolbar-label",
          children: label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "rbc-btn-group",
          children: this.viewNamesGroup(messages)
        })]
      });
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages) {
      var _this2 = this;
      var viewNames = this.props.views;
      var view = this.props.view;
      if (viewNames.length > 1) {
        return viewNames.map(function (name) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: (0, _classnames.default)({
              'rbc-active': view === name
            }),
            onClick: _this2.view.bind(null, name),
            children: messages[name]
          }, name);
        });
      }
    }
  }]);
}(_react.default.Component);
_defineProperty(Toolbar, "propTypes", {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  messages: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onViewChange: _propTypes.default.func.isRequired
});
var _default = exports.default = Toolbar;