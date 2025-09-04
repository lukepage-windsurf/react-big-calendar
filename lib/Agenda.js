"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _class = _interopRequireDefault(require("dom-helpers/class"));
var _width = _interopRequireDefault(require("dom-helpers/query/width"));
var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));
var _localizer = _interopRequireDefault(require("./localizer"));
var _messages = _interopRequireDefault(require("./utils/messages"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _constants = require("./utils/constants");
var _accessors = require("./utils/accessors");
var _propTypes2 = require("./utils/propTypes");
var _eventLevels = require("./utils/eventLevels");
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
var Agenda = /*#__PURE__*/function (_React$Component) {
  function Agenda() {
    var _this;
    _classCallCheck(this, Agenda);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Agenda, [].concat(args));
    _defineProperty(_this, "renderDay", function (day, events, dayKey) {
      var _this$props = _this.props,
        culture = _this$props.culture,
        components = _this$props.components,
        titleAccessor = _this$props.titleAccessor,
        agendaDateFormat = _this$props.agendaDateFormat;
      var EventComponent = components.event;
      var DateComponent = components.date;
      events = events.filter(function (e) {
        return (0, _eventLevels.inRange)(e, day, day, _this.props);
      });
      return events.map(function (event, idx) {
        var dateLabel = idx === 0 && _localizer.default.format(day, agendaDateFormat, culture);
        var first = idx === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
          rowSpan: events.length,
          className: "rbc-agenda-date-cell",
          children: DateComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(DateComponent, {
            day: day,
            label: dateLabel
          }) : dateLabel
        }) : false;
        var title = (0, _accessors.accessor)(event, titleAccessor);
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
          children: [first, /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            className: "rbc-agenda-time-cell",
            children: _this.timeRangeLabel(day, event)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            className: "rbc-agenda-event-cell",
            children: EventComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(EventComponent, {
              event: event,
              title: title
            }) : title
          })]
        }, dayKey + '_' + idx);
      }, []);
    });
    _defineProperty(_this, "timeRangeLabel", function (day, event) {
      var _this$props2 = _this.props,
        endAccessor = _this$props2.endAccessor,
        startAccessor = _this$props2.startAccessor,
        allDayAccessor = _this$props2.allDayAccessor,
        culture = _this$props2.culture,
        messages = _this$props2.messages,
        components = _this$props2.components;
      var labelClass = '',
        TimeComponent = components.time,
        label = (0, _messages.default)(messages).allDay;
      var start = (0, _accessors.accessor)(event, startAccessor);
      var end = (0, _accessors.accessor)(event, endAccessor);
      if (!(0, _accessors.accessor)(event, allDayAccessor)) {
        if (_dates.default.eq(start, end, 'day')) {
          label = _localizer.default.format({
            start: start,
            end: end
          }, _this.props.agendaTimeRangeFormat, culture);
        } else if (_dates.default.eq(day, start, 'day')) {
          label = _localizer.default.format(start, _this.props.agendaTimeFormat, culture);
        } else if (_dates.default.eq(day, end, 'day')) {
          label = _localizer.default.format(end, _this.props.agendaTimeFormat, culture);
        }
      }
      if (_dates.default.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
      if (_dates.default.lt(day, end, 'day')) labelClass += ' rbc-continues-after';
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: labelClass.trim(),
        children: TimeComponent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(TimeComponent, {
          event: event,
          label: label
        }) : label
      });
    });
    _defineProperty(_this, "_adjustHeader", function () {
      var header = _this.refs.header;
      var firstRow = _this.refs.tbody.firstChild;
      if (!firstRow) return;
      var isOverflowing = _this.refs.content.scrollHeight > _this.refs.content.clientHeight;
      var widths = _this._widths || [];
      _this._widths = [(0, _width.default)(firstRow.children[0]), (0, _width.default)(firstRow.children[1])];
      if (widths[0] !== _this._widths[0] || widths[1] !== _this._widths[1]) {
        _this.refs.dateCol.style.width = _this._widths[0] + 'px';
        _this.refs.timeCol.style.width = _this._widths[1] + 'px';
      }
      if (isOverflowing) {
        _class.default.addClass(header, 'rbc-header-overflowing');
        header.style.marginRight = (0, _scrollbarSize.default)() + 'px';
      } else {
        _class.default.removeClass(header, 'rbc-header-overflowing');
      }
    });
    return _this;
  }
  _inherits(Agenda, _React$Component);
  return _createClass(Agenda, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._adjustHeader();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._adjustHeader();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        length = _this$props3.length,
        date = _this$props3.date,
        events = _this$props3.events,
        startAccessor = _this$props3.startAccessor;
      var messages = (0, _messages.default)(this.props.messages);
      var end = _dates.default.add(date, length, 'day');
      var range = _dates.default.range(date, end, 'day');
      events = events.filter(function (event) {
        return (0, _eventLevels.inRange)(event, date, end, _this2.props);
      });
      events.sort(function (a, b) {
        return +(0, _accessors.accessor)(a, startAccessor) - +(0, _accessors.accessor)(b, startAccessor);
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rbc-agenda-view",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
          ref: "header",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                className: "rbc-header",
                ref: "dateCol",
                children: messages.date
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                className: "rbc-header",
                ref: "timeCol",
                children: messages.time
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                className: "rbc-header",
                children: messages.event
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rbc-agenda-content",
          ref: "content",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
              ref: "tbody",
              children: range.map(function (day, idx) {
                return _this2.renderDay(day, events, idx);
              })
            })
          })
        })]
      });
    }
  }]);
}(_react.default.Component);
_defineProperty(Agenda, "propTypes", {
  events: _propTypes.default.array,
  date: _propTypes.default.instanceOf(Date),
  length: _propTypes.default.number.isRequired,
  titleAccessor: _propTypes2.accessor.isRequired,
  allDayAccessor: _propTypes2.accessor.isRequired,
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  agendaDateFormat: _propTypes2.dateFormat,
  agendaTimeFormat: _propTypes2.dateFormat,
  agendaTimeRangeFormat: _propTypes2.dateRangeFormat,
  culture: _propTypes.default.string,
  components: _propTypes.default.object.isRequired,
  messages: _propTypes.default.shape({
    date: _propTypes.default.string,
    time: _propTypes.default.string
  })
});
_defineProperty(Agenda, "defaultProps", {
  length: 30
});
Agenda.navigate = function (date, action) {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return _dates.default.add(date, -1, 'day');
    case _constants.navigate.NEXT:
      return _dates.default.add(date, 1, 'day');
    default:
      return date;
  }
};
Agenda.range = function (start, _ref) {
  var _ref$length = _ref.length,
    length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length;
  var end = _dates.default.add(start, length, 'day');
  return {
    start: start,
    end: end
  };
};
var _default = exports.default = Agenda;