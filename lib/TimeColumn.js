"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _daylightSavings = require("./utils/daylightSavings");
var _propTypes2 = require("./utils/propTypes");
var _BackgroundWrapper = _interopRequireDefault(require("./BackgroundWrapper"));
var _TimeSlotGroup = _interopRequireDefault(require("./TimeSlotGroup"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var TimeColumn = exports.default = /*#__PURE__*/function (_Component) {
  function TimeColumn() {
    var _this;
    _classCallCheck(this, TimeColumn);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimeColumn, [].concat(args));
    _defineProperty(_this, "rootRef", function (div) {
      _this.root = div;
    });
    _defineProperty(_this, "indicatorRef", function (div) {
      _this.timeIndicator = div;
    });
    _defineProperty(_this, "positionTimeIndicator", function () {
      var _this$props = _this.props,
        min = _this$props.min,
        max = _this$props.max,
        dragThroughEvents = _this$props.dragThroughEvents,
        nowTimezone = _this$props.nowTimezone;

      // this prop is only passed into this component from DayColumn, so here we're
      // excluding the time gutter TimeColumn from having a time indicator.
      if (!dragThroughEvents) return;
      var now = _dates.default.now(nowTimezone);
      var dayEnd = _dates.default.endOf(now, 'day');
      var dayEndTimezoneOffset = dayEnd.getTimezoneOffset();
      var nowTimezoneOffset = now.getTimezoneOffset();
      var daylightSavingsShift = (0, _daylightSavings.getDaylightSavingsShift)(now);
      var isFallingBack = (0, _daylightSavings.isDaylightSavingsFall)(daylightSavingsShift);

      // This is generally at 2:00am on the day we fall back to standard time
      var isAfterFallBackTimeShift = isFallingBack && nowTimezoneOffset === dayEndTimezoneOffset;
      if (isAfterFallBackTimeShift) {
        now = _dates.default.add(now, daylightSavingsShift, 'minutes');
      }
      var secondsGrid = _dates.default.diff(max, min, 'seconds');
      var secondsPassed = _dates.default.diff(now, min, 'seconds');
      var timeIndicator = _this.timeIndicator;
      var factor = secondsPassed / secondsGrid;
      if (_this.root && now >= min && now <= max) {
        var pixelHeight = _this.root.offsetHeight;
        var offset = Math.floor(factor * pixelHeight);
        timeIndicator.style.display = 'block';
        timeIndicator.style.left = 0;
        timeIndicator.style.right = 0;
        timeIndicator.style.top = offset + 'px';
      } else {
        timeIndicator.style.display = 'none';
      }
    });
    return _this;
  }
  _inherits(TimeColumn, _Component);
  return _createClass(TimeColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.positionTimeIndicator();
      this.indicatorRefresh = window.setInterval(this.positionTimeIndicator, 60000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps /*, prevState */) {
      // Don't position indicator on update for multi grid if day didn't change,
      // because it can de-sync the lines across the different columns if only
      // some columns update but others don't.
      if (this.props.isMultiGrid && _dates.default.eq(prevProps.min, this.props.min)) return;
      this.positionTimeIndicator();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.indicatorRefresh);
    }
  }, {
    key: "renderTimeSliceGroup",
    value: function renderTimeSliceGroup(key, isNow, date) {
      var _this$props2 = this.props,
        availabilities = _this$props2.availabilities,
        dayWrapperComponent = _this$props2.dayWrapperComponent,
        entityKey = _this$props2.entityKey,
        isMultiGrid = _this$props2.isMultiGrid,
        timeslots = _this$props2.timeslots,
        showLabels = _this$props2.showLabels,
        step = _this$props2.step,
        timeGutterFormat = _this$props2.timeGutterFormat,
        culture = _this$props2.culture,
        groupHeight = _this$props2.groupHeight,
        slotPropGetter = _this$props2.slotPropGetter;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeSlotGroup.default, {
        availabilities: availabilities,
        entityKey: entityKey,
        isMultiGrid: isMultiGrid,
        isNow: isNow,
        value: date,
        step: step,
        culture: culture,
        timeslots: timeslots,
        showLabels: showLabels,
        timeGutterFormat: timeGutterFormat,
        dayWrapperComponent: dayWrapperComponent,
        height: groupHeight,
        slotPropGetter: slotPropGetter
      }, key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        className = _this$props3.className,
        children = _this$props3.children,
        style = _this$props3.style,
        now = _this$props3.now,
        min = _this$props3.min,
        max = _this$props3.max,
        step = _this$props3.step,
        timeslots = _this$props3.timeslots,
        isMultiGrid = _this$props3.isMultiGrid;
      var totalMin = _dates.default.diff(min, max, 'minutes');
      var numGroups = Math.ceil(totalMin / (step * timeslots));
      var renderedSlots = [];
      var groupLengthInMinutes = step * timeslots;
      var date = min;
      var next = date;
      var isNow = false;
      for (var i = 0; i < numGroups; i++) {
        isNow = _dates.default.inRange(now, date, _dates.default.add(next, groupLengthInMinutes - 1, 'minutes'), 'minutes');
        next = _dates.default.add(date, groupLengthInMinutes, 'minutes');
        renderedSlots.push(this.renderTimeSliceGroup(i, isNow, date));
        date = next;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames.default)(className, 'rbc-time-column'),
        style: style,
        ref: this.rootRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          ref: this.indicatorRef,
          className: "rbc-current-time-indicator"
        }), isMultiGrid ? children : renderedSlots, isMultiGrid ? renderedSlots : children]
      });
    }
  }]);
}(_react.Component);
_defineProperty(TimeColumn, "propTypes", {
  availabilities: _propTypes.default.array,
  step: _propTypes.default.number.isRequired,
  culture: _propTypes.default.string,
  timeslots: _propTypes.default.number.isRequired,
  now: _propTypes.default.instanceOf(Date).isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  showLabels: _propTypes.default.bool,
  timeGutterFormat: _propTypes.default.string,
  type: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  groupHeight: _propTypes.default.number,
  dayWrapperComponent: _propTypes2.elementType,
  dragThroughEvents: _propTypes.default.bool,
  nowTimezone: _propTypes.default.string,
  entityKey: _propTypes.default.number,
  slotPropGetter: _propTypes.default.func,
  // internal prop used to make slight changes in rendering
  isMultiGrid: _propTypes.default.bool
});
_defineProperty(TimeColumn, "defaultProps", {
  step: 30,
  timeslots: 2,
  showLabels: false,
  type: 'day',
  className: '',
  dayWrapperComponent: _BackgroundWrapper.default,
  isMultiGrid: false
});