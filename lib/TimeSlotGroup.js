"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _TimeSlot = _interopRequireDefault(require("./TimeSlot"));
var _dates = _interopRequireDefault(require("./utils/dates.js"));
var _localizer = _interopRequireDefault(require("./localizer"));
var _propTypes2 = require("./utils/propTypes");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var TimeSlotGroup = exports.default = /*#__PURE__*/function (_Component) {
  function TimeSlotGroup() {
    _classCallCheck(this, TimeSlotGroup);
    return _callSuper(this, TimeSlotGroup, arguments);
  }
  _inherits(TimeSlotGroup, _Component);
  return _createClass(TimeSlotGroup, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps /* , nextState */) {
      if (this.props.dayWrapperComponent !== nextProps.dayWrapperComponent || this.props.timeslots !== nextProps.timeslots || this.props.step !== nextProps.step || this.props.showLabels !== nextProps.showLabels || this.props.isNow !== nextProps.isNow || this.props.timeGutterFormat !== nextProps.timeGutterFormat || this.props.culture !== nextProps.culture || this.props.height !== nextProps.height ||
      // Highly experimental/aggressive extra condition here (this.props.showLabels),
      // in order to optimize calendar performance and prevent it from freezing
      // when loading a MultiView with many providers. This is based on the fact
      // that value doesn't seem to be used anywhere, even for slot selection
      // events.
      // The exception to the above observation is for the label column on the left
      // of the calendar, which is why we will re-render on value updates for
      // *only* those columns in particular.
      this.props.showLabels && _dates.default.neq(this.props.value, nextProps.value) || !this.props.showLabels && this.props.availabilities !== nextProps.availabilities) {
        return true;
      }
      return false;
    }
  }, {
    key: "renderSlice",
    value: function renderSlice(slotNumber, content, value) {
      var _this$props = this.props,
        dayWrapperComponent = _this$props.dayWrapperComponent,
        entityKey = _this$props.entityKey,
        showLabels = _this$props.showLabels,
        isMultiGrid = _this$props.isMultiGrid,
        isNow = _this$props.isNow,
        culture = _this$props.culture,
        slotPropGetter = _this$props.slotPropGetter;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeSlot.default, {
        dayWrapperComponent: dayWrapperComponent,
        showLabel: showLabels,
        content: content,
        culture: culture,
        isMultiGrid: isMultiGrid,
        isNow: isNow,
        value: value,
        slotPropGetter: slotPropGetter,
        entityKey: entityKey
      }, slotNumber);
    }
  }, {
    key: "renderSlices",
    value: function renderSlices() {
      var ret = [];
      var sliceLength = this.props.step;
      var sliceValue = this.props.value;
      var stepInterval = 0;
      for (var i = 0; i < this.props.timeslots; i++) {
        var content = void 0;
        if (i === 0) {
          content = _localizer.default.format(sliceValue, this.props.timeGutterFormat, this.props.culture);
        } else {
          content = ":".concat(stepInterval);
        }
        ret.push(this.renderSlice(i, content, sliceValue));
        sliceValue = _dates.default.add(sliceValue, sliceLength, 'minutes');
        stepInterval += this.props.step;
      }
      return ret;
    }
  }, {
    key: "render",
    value: function render() {
      // note that style is currently not passed to this component, but we're handling
      // height so it doesn't break styling if style IS passed in.
      var _this$props2 = this.props,
        style = _this$props2.style,
        height = _this$props2.height;
      var groupStyle = _objectSpread({}, style);
      if (height) {
        groupStyle.minHeight = height;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "rbc-timeslot-group",
        style: groupStyle,
        children: this.renderSlices()
      });
    }
  }]);
}(_react.Component);
_defineProperty(TimeSlotGroup, "propTypes", {
  availabilities: _propTypes.default.array,
  dayWrapperComponent: _propTypes2.elementType,
  timeslots: _propTypes.default.number.isRequired,
  step: _propTypes.default.number.isRequired,
  value: _propTypes.default.instanceOf(Date).isRequired,
  showLabels: _propTypes.default.bool,
  isMultiGrid: _propTypes.default.bool,
  isNow: _propTypes.default.bool,
  timeGutterFormat: _propTypes.default.string,
  culture: _propTypes.default.string,
  height: _propTypes.default.number,
  slotPropGetter: _propTypes.default.func,
  entityKey: _propTypes.default.number
});
_defineProperty(TimeSlotGroup, "defaultProps", {
  timeslots: 2,
  step: 30,
  isNow: false,
  showLabels: false
});