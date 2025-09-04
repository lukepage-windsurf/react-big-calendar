"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _localizer = _interopRequireDefault(require("./localizer"));
var _chunk = _interopRequireDefault(require("lodash/chunk"));
var _constants = require("./utils/constants");
var _helpers = require("./utils/helpers");
var _position = _interopRequireDefault(require("dom-helpers/query/position"));
var _requestAnimationFrame = _interopRequireDefault(require("dom-helpers/util/requestAnimationFrame"));
var _Popup = _interopRequireDefault(require("./Popup"));
var _Overlay = _interopRequireDefault(require("react-overlays/lib/Overlay"));
var _DateContentRow = _interopRequireDefault(require("./DateContentRow"));
var _Header = _interopRequireDefault(require("./Header"));
var _propTypes2 = require("./utils/propTypes");
var _eventLevels = require("./utils/eventLevels");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["date", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var eventsForWeek = function eventsForWeek(evts, start, end, props) {
  return evts.filter(function (e) {
    return (0, _eventLevels.inRange)(e, start, end, props);
  });
};
var propTypes = {
  events: _propTypes.default.array.isRequired,
  date: _propTypes.default.instanceOf(Date),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  step: _propTypes.default.number,
  now: _propTypes.default.instanceOf(Date),
  scrollToTime: _propTypes.default.instanceOf(Date),
  eventPropGetter: _propTypes.default.func,
  culture: _propTypes.default.string,
  dayFormat: _propTypes2.dateFormat,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  titleAccessor: _propTypes2.accessor.isRequired,
  allDayAccessor: _propTypes2.accessor.isRequired,
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onShowMore: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  dateFormat: _propTypes2.dateFormat,
  weekdayFormat: _propTypes2.dateFormat,
  popup: _propTypes.default.bool,
  messages: _propTypes.default.object,
  components: _propTypes.default.object.isRequired,
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })])
};
var MonthView = /*#__PURE__*/function (_React$Component) {
  function MonthView(_props) {
    var _this;
    _classCallCheck(this, MonthView);
    _this = _callSuper(this, MonthView, [_props]);
    _defineProperty(_this, "getContainer", function () {
      return _this.nodeRef.current;
    });
    _defineProperty(_this, "renderWeek", function (week, weekIdx) {
      var _this$props = _this.props,
        events = _this$props.events,
        components = _this$props.components,
        selectable = _this$props.selectable,
        titleAccessor = _this$props.titleAccessor,
        startAccessor = _this$props.startAccessor,
        endAccessor = _this$props.endAccessor,
        allDayAccessor = _this$props.allDayAccessor,
        eventPropGetter = _this$props.eventPropGetter,
        messages = _this$props.messages,
        selected = _this$props.selected;
      var _this$state = _this.state,
        needLimitMeasure = _this$state.needLimitMeasure,
        rowLimit = _this$state.rowLimit;
      events = eventsForWeek(events, week[0], week[week.length - 1], _this.props);
      events.sort(function (a, b) {
        return (0, _eventLevels.sortEvents)(a, b, _this.props);
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateContentRow.default, {
        ref: weekIdx === 0 ? _this.slotRowRef : undefined,
        container: _this.getContainer,
        className: "rbc-month-row",
        range: week,
        events: events,
        maxRows: rowLimit,
        selected: selected,
        selectable: selectable,
        messages: messages,
        titleAccessor: titleAccessor,
        startAccessor: startAccessor,
        endAccessor: endAccessor,
        allDayAccessor: allDayAccessor,
        eventPropGetter: eventPropGetter,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onSelectSlot: _this.handleSelectSlot,
        eventComponent: components.event,
        eventWrapperComponent: components.eventWrapper,
        dateCellWrapper: components.dateCellWrapper
      }, weekIdx);
    });
    _defineProperty(_this, "readerDateHeading", function (_ref) {
      var date = _ref.date,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, _excluded);
      var _this$props2 = _this.props,
        currentDate = _this$props2.date,
        getDrilldownView = _this$props2.getDrilldownView,
        dateFormat = _this$props2.dateFormat,
        culture = _this$props2.culture;
      var isOffRange = _dates.default.month(date) !== _dates.default.month(currentDate);
      var isCurrent = _dates.default.eq(date, currentDate, 'day');
      var drilldownView = getDrilldownView(date);
      var label = _localizer.default.format(date, dateFormat, culture);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({}, props), {}, {
        className: (0, _classnames.default)(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
        children: drilldownView ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: "#",
          onClick: function onClick(e) {
            return _this.handleHeadingClick(date, drilldownView, e);
          },
          children: label
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: label
        })
      }));
    });
    _defineProperty(_this, "_headers", function (row, format, culture) {
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = _this.props.components.header || _Header.default;
      return _dates.default.range(first, last, 'day').map(function (day, idx) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rbc-header",
          style: (0, _eventLevels.segStyle)(1, 7),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(HeaderComponent, {
            date: day,
            label: _localizer.default.format(day, format, culture),
            localizer: _localizer.default,
            format: format,
            culture: culture
          })
        }, 'header_' + idx);
      });
    });
    _defineProperty(_this, "_renderOverlay", function () {
      var overlay = _this.state && _this.state.overlay || {};
      var components = _this.props.components;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Overlay.default, {
        rootClose: true,
        placement: "bottom",
        container: _this,
        show: !!overlay.position,
        onHide: function onHide() {
          return _this.setState({
            overlay: null
          });
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popup.default, _objectSpread(_objectSpread({}, _this.props), {}, {
          eventComponent: components.event,
          eventWrapperComponent: components.eventWrapper,
          position: overlay.position,
          events: overlay.events,
          slotStart: overlay.date,
          slotEnd: overlay.end,
          onSelect: _this.handleSelectEvent
        }))
      });
    });
    _defineProperty(_this, "measureRowLimit", function () {
      _this.setState({
        needLimitMeasure: false,
        rowLimit: _this.slotRowRef.current.getRowLimit()
      });
    });
    _defineProperty(_this, "handleSelectSlot", function (range) {
      _this._pendingSelection = _this._pendingSelection.concat(range);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function () {
        return _this._selectDates();
      });
    });
    _defineProperty(_this, "handleHeadingClick", function (date, view, e) {
      e.preventDefault();
      _this.clearSelection();
      (0, _helpers.notify)(_this.props.onDrillDown, [date, view]);
    });
    _defineProperty(_this, "handleSelectEvent", function () {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    });
    _defineProperty(_this, "_selectDates", function () {
      var slots = _this._pendingSelection.slice();
      _this._pendingSelection = [];
      slots.sort(function (a, b) {
        return +a - +b;
      });
      (0, _helpers.notify)(_this.props.onSelectSlot, {
        slots: slots,
        start: slots[0],
        end: slots[slots.length - 1]
      });
    });
    _defineProperty(_this, "handleShowMore", function (events, date, cell, slot) {
      var _this$props3 = _this.props,
        popup = _this$props3.popup,
        onDrillDown = _this$props3.onDrillDown,
        onShowMore = _this$props3.onShowMore,
        getDrilldownView = _this$props3.getDrilldownView;
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      if (popup) {
        var position = (0, _position.default)(cell, _this.nodeRef.current);
        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position
          }
        });
      } else {
        (0, _helpers.notify)(onDrillDown, [date, getDrilldownView(date) || _constants.views.DAY]);
      }
      (0, _helpers.notify)(onShowMore, [events, date, slot]);
    });
    _defineProperty(_this, "clearSelection", function () {
      clearTimeout(_this._selectTimer);
      _this._pendingSelection = [];
    });
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
    _this._bgRows = [];
    _this._pendingSelection = [];
    _this.nodeRef = /*#__PURE__*/_react.default.createRef();
    _this.slotRowRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(MonthView, _React$Component);
  return _createClass(MonthView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_dates.default.eq(this.props.date, prevProps.date)) {
        this.setState({
          needLimitMeasure: true
        });
      }
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener('resize', this._resizeListener = function () {
        if (!running) {
          (0, _requestAnimationFrame.default)(function () {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            }); //eslint-disable-line
          });
        }
      }, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props4 = this.props,
        date = _this$props4.date,
        culture = _this$props4.culture,
        weekdayFormat = _this$props4.weekdayFormat,
        className = _this$props4.className,
        month = _dates.default.visibleDays(date, culture),
        weeks = (0, _chunk.default)(month, 7);
      this._weekCount = weeks.length;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames.default)('rbc-month-view', className),
        ref: this.nodeRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rbc-row rbc-month-header",
          children: this._headers(weeks[0], weekdayFormat, culture)
        }), weeks.map(function (week, idx) {
          return _this3.renderWeek(week, idx);
        }), this.props.popup && this._renderOverlay()]
      });
    }
  }]);
}(_react.default.Component);
_defineProperty(MonthView, "displayName", 'MonthView');
_defineProperty(MonthView, "propTypes", propTypes);
MonthView.navigate = function (date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'month');
    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'month');
    default:
      return date;
  }
};
MonthView.range = function (date, _ref2) {
  var culture = _ref2.culture;
  var start = _dates.default.firstVisibleDay(date, culture);
  var end = _dates.default.lastVisibleDay(date, culture);
  return {
    start: start,
    end: end
  };
};
var _default = exports.default = MonthView;