"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var Header = function Header(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: label
  });
};
Header.propTypes = {
  label: _propTypes.default.node
};
var _default = exports.default = Header;