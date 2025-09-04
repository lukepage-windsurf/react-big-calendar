"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Selection = _interopRequireWildcard(require("./Selection"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _selection = require("./utils/selection");
var _localizer = _interopRequireDefault(require("./localizer"));
var _helpers = require("./utils/helpers");
var _propTypes2 = require("./utils/propTypes");
var _accessors = require("./utils/accessors");
var _daylightSavings = require("./utils/daylightSavings");
var _dayViewLayout = _interopRequireWildcard(require("./utils/dayViewLayout"));
var _TimeColumn = _interopRequireDefault(require("./TimeColumn"));
var _bowser = _interopRequireDefault(require("bowser"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["min", "max", "step", "now", "nowTimezone", "selectRangeFormat", "culture", "isMultiGrid"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
function snapToSlot(date, step) {
  var roundTo = 1000 * 60 * step;
  return new Date(Math.floor(date.getTime() / roundTo) * roundTo);
}
function startsAfter(date, max) {
  return _dates.default.gt(_dates.default.merge(max, date), max, 'minutes');
}
var DaySlot = /*#__PURE__*/function (_React$Component) {
  function DaySlot(props) {
    var _this;
    _classCallCheck(this, DaySlot);
    _this = _callSuper(this, DaySlot, [props]);
    _defineProperty(_this, "state", {
      selecting: false
    });
    _defineProperty(_this, "renderAvailabilities", function () {
      var _this$props = _this.props,
        availabilities = _this$props.availabilities,
        availabilityComponent = _this$props.availabilityComponent,
        AvailabilityWrapper = _this$props.availabilityWrapperComponent,
        availabilityStartAccessor = _this$props.availabilityStartAccessor,
        availabilityEndAccessor = _this$props.availabilityEndAccessor,
        availabilityKeyAccessor = _this$props.availabilityKeyAccessor,
        min = _this$props.min,
        onSelectAvailability = _this$props.onSelectAvailability,
        step = _this$props.step;
      if (!availabilityComponent) return;
      var AvailabilityComponent = availabilityComponent;
      var styledAvailabilities = (0, _dayViewLayout.getStyledAvailabilities)({
        availabilities: availabilities,
        availabilityStartAccessor: availabilityStartAccessor,
        availabilityEndAccessor: availabilityEndAccessor,
        min: min,
        step: step,
        totalMin: _this._totalMin
      });
      return styledAvailabilities.map(function (_ref, idx) {
        var availability = _ref.availability,
          style = _ref.style;
        var height = style.height,
          top = style.top,
          xOffset = style.xOffset;
        var key = availabilityKeyAccessor && availability[availabilityKeyAccessor] ? availability[availabilityKeyAccessor] : "avbl_".concat(idx);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(AvailabilityWrapper, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames.default)('rbc-availability', onSelectAvailability && 'rbc-availability-selectable'),
            style: {
              top: "".concat(top, "%"),
              height: "".concat(height, "%"),
              left: xOffset
            },
            onClick: function onClick(e) {
              return _this._onSelectAvailability(availability, e);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "rbc-availability-content",
              children: AvailabilityComponent && /*#__PURE__*/(0, _jsxRuntime.jsx)(AvailabilityComponent, {
                availability: availability
              })
            })
          })
        }, key);
      });
    });
    _defineProperty(_this, "renderEvents", function () {
      var _this$props2 = _this.props,
        events = _this$props2.events,
        min = _this$props2.min,
        max = _this$props2.max,
        culture = _this$props2.culture,
        eventPropGetter = _this$props2.eventPropGetter,
        selected = _this$props2.selected,
        eventTimeRangeFormat = _this$props2.eventTimeRangeFormat,
        eventComponent = _this$props2.eventComponent,
        EventWrapper = _this$props2.eventWrapperComponent,
        isRtl = _this$props2.rtl,
        step = _this$props2.step,
        rightOffset = _this$props2.rightOffset,
        componentProps = _this$props2.componentProps,
        startAccessor = _this$props2.startAccessor,
        endAccessor = _this$props2.endAccessor,
        titleAccessor = _this$props2.titleAccessor,
        entityKeyAccessor = _this$props2.entityKeyAccessor;
      var EventComponent = eventComponent;
      var styledEvents = (0, _dayViewLayout.default)({
        events: events,
        entityKeyAccessor: entityKeyAccessor,
        startAccessor: startAccessor,
        endAccessor: endAccessor,
        min: min,
        totalMin: _this._totalMin,
        step: step,
        rightOffset: rightOffset
      });
      var eventProps = componentProps.event || {};
      return styledEvents.map(function (_ref2, idx) {
        var event = _ref2.event,
          style = _ref2.style;
        var start = (0, _accessors.accessor)(event, startAccessor);
        var end = (0, _accessors.accessor)(event, endAccessor);
        var key = entityKeyAccessor && event[entityKeyAccessor] ? event[entityKeyAccessor] : "evt_".concat(idx);
        var continuesPrior = (0, _dayViewLayout.startsBefore)(start, min);
        var continuesAfter = startsAfter(end, max);
        var title = (0, _accessors.accessor)(event, titleAccessor);
        var label = _localizer.default.format({
          start: start,
          end: end
        }, eventTimeRangeFormat, culture);
        var _isSelected = (0, _selection.isSelected)(event, selected);
        if (eventPropGetter) var _eventPropGetter = eventPropGetter(event, start, end, _isSelected),
          xStyle = _eventPropGetter.style,
          className = _eventPropGetter.className;
        var height = style.height,
          top = style.top,
          width = style.width,
          xOffset = style.xOffset;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(EventWrapper, {
          event: event,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: _objectSpread(_objectSpread({}, xStyle), {}, _defineProperty(_defineProperty({
              top: "".concat(top, "%"),
              height: "".concat(height, "%")
            }, isRtl ? 'right' : 'left', "".concat(Math.max(0, xOffset), "%")), "width", "".concat(width, "%"))),
            title: label + ': ' + title,
            onClick: function onClick(e) {
              return _this._select(event, e);
            },
            className: (0, _classnames.default)('rbc-event', className, {
              'rbc-selected': _isSelected,
              'rbc-event-continues-earlier': continuesPrior,
              'rbc-event-continues-later': continuesAfter
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "rbc-event-content",
              children: EventComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(EventComponent, _objectSpread({
                event: event,
                title: title
              }, eventProps)) : title
            })
          })
        }, key);
      });
    });
    _defineProperty(_this, "_slotStyle", function (startSlot, endSlot) {
      var top = startSlot / _this._totalMin * 100;
      var bottom = endSlot / _this._totalMin * 100;
      return {
        top: top + '%',
        height: bottom - top + '%'
      };
    });
    _defineProperty(_this, "_selectable", function () {
      var node = _this.nodeRef.current;
      var selector = _this._selector = new _Selection.default(function () {
        return _this.nodeRef.current;
      });

      /* Disabling drag-selection for now
      let maybeSelect = (box) => {
        let onSelecting = this.props.onSelecting
        let current = this.state || {};
        let state = selectionState(box);
        let { startDate: start, endDate: end } = state;
         if (onSelecting) {
          if (
            (dates.eq(current.startDate, start, 'minutes') &&
            dates.eq(current.endDate, end, 'minutes')) ||
            onSelecting({ start, end }) === false
          )
            return
        }
         this.setState(state)
      }
      */

      var selectionState = function selectionState(_ref3) {
        var y = _ref3.y;
        var _this$props3 = _this.props,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
        var _getBoundsForNode = (0, _Selection.getBoundsForNode)(node),
          top = _getBoundsForNode.top,
          bottom = _getBoundsForNode.bottom;
        var mins = _this._totalMin;
        var range = Math.abs(top - bottom);
        var current = (y - top) / range;
        current = snapToSlot(minutesToDate(mins * current, min), step);

        // This is needed to account for the removed 2 AM hour during spring
        // forward
        if ((0, _daylightSavings.isDaylightSavingsSpring)(min) && current.getTimezoneOffset() !== min.getTimezoneOffset()) {
          current = _dates.default.add(current, 60, 'minutes');
        }
        if (!_this.state.selecting) _this._initialDateSlot = current;
        var initial = _this._initialDateSlot;
        if (_dates.default.eq(initial, current, 'minutes')) current = _dates.default.add(current, step, 'minutes');
        var start = _dates.default.max(min, _dates.default.min(initial, current));
        var end = _dates.default.min(max, _dates.default.max(initial, current));
        return {
          selecting: true,
          startDate: start,
          endDate: end,
          startSlot: (0, _dayViewLayout.positionFromDate)(start, min, _this._totalMin),
          endSlot: (0, _dayViewLayout.positionFromDate)(end, min, _this._totalMin)
        };
      };

      /* Disabling drag-selection for now
      selector.on('selecting', maybeSelect)
      selector.on('selectStart', maybeSelect)
      */

      selector.on('mousedown', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !(0, _Selection.isEvent)(_this.nodeRef.current, box);
      });
      selector.on('click', function (box) {
        if (!(0, _Selection.isEvent)(_this.nodeRef.current, box)) _this._selectSlot(selectionState(box));
        _this.setState({
          selecting: false
        });
      });

      /* Disabling drag-selection for now
      selector
        .on('select', () => {
          if (this.state.selecting) {
            this._selectSlot(this.state)
            this.setState({ selecting: false })
          }
        })
      */
    });
    _defineProperty(_this, "_teardownSelectable", function () {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    });
    _defineProperty(_this, "_selectSlot", function (_ref4) {
      var startDate = _ref4.startDate,
        endDate = _ref4.endDate;
      var current = startDate,
        slots = [];
      while (_dates.default.lte(current, endDate)) {
        slots.push(current);
        current = _dates.default.add(current, _this.props.step, 'minutes');
      }
      (0, _helpers.notify)(_this.props.onSelectSlot, {
        slots: slots,
        entityKey: _this.props.entityKey,
        start: startDate,
        end: endDate
      });
    });
    _defineProperty(_this, "_select", function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    });
    _defineProperty(_this, "_onSelectAvailability", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      (0, _helpers.notify)(_this.props.onSelectAvailability, args);
    });
    _this.nodeRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(DaySlot, _React$Component);
  return _createClass(DaySlot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        min = _this$props4.min,
        max = _this$props4.max,
        step = _this$props4.step,
        now = _this$props4.now,
        nowTimezone = _this$props4.nowTimezone,
        selectRangeFormat = _this$props4.selectRangeFormat,
        culture = _this$props4.culture,
        isMultiGrid = _this$props4.isMultiGrid,
        props = _objectWithoutProperties(_this$props4, _excluded);
      this._totalMin = _dates.default.diff(min, max, 'minutes');
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startSlot = _this$state.startSlot,
        endSlot = _this$state.endSlot;
      var style = this._slotStyle(startSlot, endSlot);
      var selectDates = {
        start: this.state.startDate,
        end: this.state.endDate
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TimeColumn.default, _objectSpread(_objectSpread({}, props), {}, {
        ref: this.nodeRef,
        className: (0, _classnames.default)('rbc-day-slot', !isMultiGrid && _dates.default.isToday(max, nowTimezone) && 'rbc-today', _dates.default.lt(max, _dates.default.today(nowTimezone), 'day') && 'rbc-past', (_bowser.default.mobile || _bowser.default.tablet) && 'rbc-mobile-clickable'),
        now: now,
        nowTimezone: nowTimezone,
        min: min,
        max: max,
        step: step,
        isMultiGrid: isMultiGrid,
        children: [this.renderAvailabilities(), this.renderEvents(), selecting && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rbc-slot-selection",
          style: style,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: _localizer.default.format(selectDates, selectRangeFormat, culture)
          })
        })]
      }));
    }
  }]);
}(_react.default.Component);
_defineProperty(DaySlot, "propTypes", {
  availabilities: _propTypes.default.array,
  availabilityKeyAccessor: _propTypes.default.string,
  events: _propTypes.default.array.isRequired,
  entityKeyAccessor: _propTypes.default.string,
  step: _propTypes.default.number.isRequired,
  rightOffset: _propTypes.default.number.isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  now: _propTypes.default.instanceOf(Date),
  nowTimezone: _propTypes.default.string,
  date: _propTypes.default.instanceOf(Date),
  rtl: _propTypes.default.bool,
  titleAccessor: _propTypes2.accessor,
  allDayAccessor: _propTypes2.accessor.isRequired,
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  availabilityStartAccessor: _propTypes2.accessor,
  availabilityEndAccessor: _propTypes2.accessor,
  selectRangeFormat: _propTypes2.dateFormat,
  eventTimeRangeFormat: _propTypes2.dateFormat,
  culture: _propTypes.default.string,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes.default.number,
  entityKey: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  onSelecting: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEvent: _propTypes.default.func.isRequired,
  onSelectAvailability: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dragThroughEvents: _propTypes.default.bool,
  eventPropGetter: _propTypes.default.func,
  dayWrapperComponent: _propTypes2.elementType,
  eventComponent: _propTypes2.elementType,
  eventWrapperComponent: _propTypes2.elementType.isRequired,
  componentProps: _propTypes.default.shape({
    event: _propTypes.default.object,
    toolbar: _propTypes.default.object
  }),
  availabilityComponent: _propTypes2.elementType,
  availabilityWrapperComponent: _propTypes2.elementType,
  // internal prop used to make slight changes in rendering
  isMultiGrid: _propTypes.default.bool
});
_defineProperty(DaySlot, "defaultProps", {
  dragThroughEvents: true,
  rightOffset: 0,
  isMultiGrid: false
});
function minutesToDate(min, date) {
  var dt = new Date(date),
    totalMins = _dates.default.diff(_dates.default.startOf(date, 'day'), date, 'minutes');
  dt = _dates.default.hours(dt, 0);
  dt = _dates.default.minutes(dt, totalMins + min);
  dt = _dates.default.seconds(dt, 0);
  return _dates.default.milliseconds(dt, 0);
}
var _default = exports.default = DaySlot;