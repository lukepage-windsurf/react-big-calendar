"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _localizer = _interopRequireDefault(require("./localizer"));
var _DayColumn = _interopRequireDefault(require("./DayColumn"));
var _TimeColumn = _interopRequireDefault(require("./TimeColumn"));
var _DateContentRow = _interopRequireDefault(require("./DateContentRow"));
var _Header = _interopRequireDefault(require("./Header"));
var _width = _interopRequireDefault(require("dom-helpers/query/width"));
var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));
var _messages = _interopRequireDefault(require("./utils/messages"));
var _propTypes2 = require("./utils/propTypes");
var _helpers = require("./utils/helpers");
var _eventLevels = require("./utils/eventLevels");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var TimeGrid = exports.default = /*#__PURE__*/function (_Component) {
  function TimeGrid(props) {
    var _this;
    _classCallCheck(this, TimeGrid);
    _this = _callSuper(this, TimeGrid, [props]);
    _defineProperty(_this, "handleSelectAllDaySlot", function (slots) {
      var onSelectSlot = _this.props.onSelectSlot;
      (0, _helpers.notify)(onSelectSlot, {
        slots: slots,
        start: slots[0],
        end: slots[slots.length - 1]
      });
    });
    _this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    _this.handleSelectEvent = _this.handleSelectEvent.bind(_this);
    _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
    _this._gutters = [];
    _this.calculateScroll();
    _this.contentRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(TimeGrid, _Component);
  return _createClass(TimeGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkOverflow();
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.applyScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var start = prevProps.start,
        scrollToTime = prevProps.scrollToTime;
      if (this.props.width == null && !this.state.gutterWidth) {
        this.measureGutter();
      }
      this.applyScroll();
      //this.checkOverflow()

      // When paginating, reset scroll
      if (this.props.view !== prevProps.view && (!_dates.default.eq(this.props.start, start, 'minute') || !_dates.default.eq(this.props.scrollToTime, scrollToTime, 'minute'))) {
        this.calculateScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        events = _this$props.events,
        singleDayEventsOnly = _this$props.singleDayEventsOnly,
        start = _this$props.start,
        end = _this$props.end,
        width = _this$props.width,
        startAccessor = _this$props.startAccessor,
        endAccessor = _this$props.endAccessor,
        allDayAccessor = _this$props.allDayAccessor;
      width = width || this.state.gutterWidth;
      var range = _dates.default.range(start, end, 'day');
      this.slots = range.length;
      var allDayEvents = [],
        rangeEvents = [];
      events.forEach(function (event) {
        if ((0, _eventLevels.inRange)(event, start, end, _this2.props)) {
          if ((0, _helpers.isAllDayEvent)(event, {
            startAccessor: startAccessor,
            endAccessor: endAccessor,
            allDayAccessor: allDayAccessor
          })) {
            if (!singleDayEventsOnly) {
              allDayEvents.push(event);
            }
          } else {
            rangeEvents.push(event);
          }
        }
      });
      allDayEvents.sort(function (a, b) {
        return (0, _eventLevels.sortEvents)(a, b, _this2.props);
      });
      var gutterRef = function gutterRef(ref) {
        return _this2._gutters[1] = ref && ref;
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rbc-time-view rbc-time-view-".concat(this.props.view),
        children: [this.renderHeader(range, allDayEvents, width), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: this.contentRef,
          className: "rbc-time-content",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: 'none'
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeColumn.default, _objectSpread(_objectSpread({}, this.props), {}, {
            min: _dates.default.merge(start, this.props.min),
            max: _dates.default.merge(start, this.props.max),
            showLabels: true,
            style: {
              width: width
            },
            ref: gutterRef,
            className: "rbc-time-gutter"
          })), this.renderEventsAndAvailabilities(range, rangeEvents, this.props.now)]
        })]
      });
    }
  }, {
    key: "renderEventsAndAvailabilities",
    value: function renderEventsAndAvailabilities(range, events, today) {
      var _this3 = this;
      var _this$props2 = this.props,
        availabilities = _this$props2.availabilities,
        availabilityStartAccessor = _this$props2.availabilityStartAccessor,
        availabilityEndAccessor = _this$props2.availabilityEndAccessor,
        min = _this$props2.min,
        max = _this$props2.max,
        endAccessor = _this$props2.endAccessor,
        startAccessor = _this$props2.startAccessor,
        components = _this$props2.components;
      return range.map(function (date, idx) {
        var daysEvents = events.filter((0, _helpers.makeEventOrAvailabilityFilter)(date, startAccessor, endAccessor));
        var daysAvailabilities = (availabilities || []).filter((0, _helpers.makeEventOrAvailabilityFilter)(date, availabilityStartAccessor, availabilityEndAccessor));
        return /*#__PURE__*/(0, _react.createElement)(_DayColumn.default, _objectSpread(_objectSpread({}, _this3.props), {}, {
          min: _dates.default.merge(date, min),
          max: _dates.default.merge(date, max),
          availabilityComponent: components.availability,
          availabilityWrapperComponent: components.availabilityWrapper,
          eventComponent: components.event,
          eventWrapperComponent: components.eventWrapper,
          dayWrapperComponent: components.dayWrapper,
          className: (0, _classnames.default)({
            'rbc-now': _dates.default.eq(date, today, 'day')
          }),
          style: (0, _eventLevels.segStyle)(1, _this3.slots),
          key: idx,
          date: date,
          events: daysEvents,
          availabilities: daysAvailabilities
        }));
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(range, events, width) {
      var _this4 = this;
      var _this$props3 = this.props,
        messages = _this$props3.messages,
        rtl = _this$props3.rtl,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        singleDayEventsOnly = _this$props3.singleDayEventsOnly;
      var _ref = this.state || {},
        isOverflowing = _ref.isOverflowing;
      var style = {};
      if (isOverflowing) style[rtl ? 'marginLeft' : 'marginRight'] = (0, _scrollbarSize.default)() + 'px';
      var firstGutterRef = function firstGutterRef(ref) {
        return _this4._gutters[0] = ref;
      };
      var headerProps = {};
      var messageProps = {};
      if (singleDayEventsOnly) {
        headerProps.ref = firstGutterRef;
      } else {
        messageProps.ref = firstGutterRef;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: "headerCell",
        className: (0, _classnames.default)('rbc-time-header', isOverflowing && 'rbc-overflowing'),
        style: style,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "rbc-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, headerProps), {}, {
            className: "rbc-label rbc-header-gutter",
            style: {
              width: width
            }
          })), this.renderHeaderCells(range)]
        }), !singleDayEventsOnly && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "rbc-row",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, messageProps), {}, {
            className: "rbc-label rbc-header-gutter",
            style: {
              width: width
            },
            children: (0, _messages.default)(messages).allDay
          })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateContentRow.default, {
            minRows: 2,
            range: range,
            rtl: this.props.rtl,
            events: events,
            className: "rbc-allday-cell",
            selectable: selectable,
            onSelectSlot: this.handleSelectAllDaySlot,
            dateCellWrapper: components.dateCellWrapper,
            eventComponent: this.props.components.event,
            eventWrapperComponent: this.props.components.eventWrapper,
            titleAccessor: this.props.titleAccessor,
            startAccessor: this.props.startAccessor,
            endAccessor: this.props.endAccessor,
            allDayAccessor: this.props.allDayAccessor,
            eventPropGetter: this.props.eventPropGetter,
            selected: this.props.selected,
            onSelect: this.handleSelectEvent
          })]
        })]
      });
    }
  }, {
    key: "renderHeaderCells",
    value: function renderHeaderCells(range) {
      var _this5 = this;
      var _this$props4 = this.props,
        dayFormat = _this$props4.dayFormat,
        culture = _this$props4.culture,
        components = _this$props4.components,
        getDrilldownView = _this$props4.getDrilldownView,
        nowTimezone = _this$props4.nowTimezone;
      var HeaderComponent = components.header || _Header.default;
      return range.map(function (date, i) {
        var drilldownView = getDrilldownView(date);
        var label = _localizer.default.format(date, dayFormat, culture);
        var header = /*#__PURE__*/(0, _jsxRuntime.jsx)(HeaderComponent, {
          date: date,
          label: label,
          localizer: _localizer.default,
          format: dayFormat,
          culture: culture
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames.default)('rbc-header', _dates.default.isToday(date, nowTimezone) && 'rbc-today'),
          style: (0, _eventLevels.segStyle)(1, _this5.slots),
          children: drilldownView ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#",
            onClick: function onClick(e) {
              return _this5.handleHeaderClick(date, drilldownView, e);
            },
            children: header
          }) : header
        }, i);
      });
    }
  }, {
    key: "handleHeaderClick",
    value: function handleHeaderClick(date, view, e) {
      e.preventDefault();
      (0, _helpers.notify)(this.props.onDrillDown, [date, view]);
    }
  }, {
    key: "handleSelectEvent",
    value: function handleSelectEvent() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0, _helpers.notify)(this.props.onSelectEvent, args);
    }
  }, {
    key: "handleSelectAlldayEvent",
    value: function handleSelectAlldayEvent() {
      //cancel any pending selections so only the event click goes through.
      this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      (0, _helpers.notify)(this.props.onSelectEvent, args);
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var width = this.state.gutterWidth;
      var gutterCells = this._gutters;
      if (!width) {
        width = Math.max.apply(Math, _toConsumableArray(gutterCells.map(_width.default)));
        if (width) {
          this.setState({
            gutterWidth: width
          });
        }
      }
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      if (this._scrollRatio && this.contentRef.current) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        // Only do this once
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var _this$props5 = this.props,
        min = _this$props5.min,
        max = _this$props5.max,
        scrollToTime = _this$props5.scrollToTime;
      var diffMillis = scrollToTime - _dates.default.startOf(scrollToTime, 'day');
      var totalMillis = _dates.default.diff(max, min);
      this._scrollRatio = diffMillis / totalMillis;
    }
  }, {
    key: "checkOverflow",
    value: function checkOverflow() {
      var _this6 = this;
      if (this._updatingOverflow || !this.contentRef.current) return;
      var isOverflowing = this.contentRef.current.scrollHeight > this.contentRef.current.clientHeight;
      if (this.state.isOverflowing !== isOverflowing) {
        this._updatingOverflow = true;
        this.setState({
          isOverflowing: isOverflowing
        }, function () {
          _this6._updatingOverflow = false;
        });
      }
    }
  }]);
}(_react.Component);
_defineProperty(TimeGrid, "propTypes", {
  view: _propTypes.default.string.isRequired,
  availabilities: _propTypes.default.array,
  events: _propTypes.default.array.isRequired,
  singleDayEventsOnly: _propTypes.default.bool,
  step: _propTypes.default.number,
  start: _propTypes.default.instanceOf(Date),
  end: _propTypes.default.instanceOf(Date),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  now: _propTypes.default.instanceOf(Date),
  nowTimezone: _propTypes.default.string,
  scrollToTime: _propTypes.default.instanceOf(Date),
  eventPropGetter: _propTypes.default.func,
  slotPropGetter: _propTypes.default.func,
  dayFormat: _propTypes2.dateFormat,
  culture: _propTypes.default.string,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  titleAccessor: _propTypes2.accessor.isRequired,
  allDayAccessor: _propTypes2.accessor.isRequired,
  availabilityStartAccessor: _propTypes2.accessor,
  availabilityEndAccessor: _propTypes2.accessor,
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onSelectAvailability: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  messages: _propTypes.default.object,
  components: _propTypes.default.object.isRequired
});
_defineProperty(TimeGrid, "defaultProps", {
  step: 30,
  min: _dates.default.startOf(new Date(), 'day'),
  max: _dates.default.endOf(new Date(), 'day'),
  scrollToTime: _dates.default.startOf(new Date(), 'day'),
  /* these 2 are needed to satisfy requirements from TimeColumn required props
   * There is a strange bug in React, using ...TimeColumn.defaultProps causes weird crashes
   */
  type: 'gutter',
  now: new Date()
});