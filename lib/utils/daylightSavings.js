"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaylightSavingsShift = getDaylightSavingsShift;
exports.isDaylightSavingsFall = isDaylightSavingsFall;
exports.isDaylightSavingsSpring = isDaylightSavingsSpring;
var _dates = _interopRequireDefault(require("./dates"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Gets the timezone offset difference between the start of the given day and
 * the end of the given day. This usually only happens during daylight savings,
 * springing forward/falling back.
 */
function getDaylightSavingsShift(date) {
  var dayStart = _dates.default.startOf(date, 'day');
  var dayEnd = _dates.default.endOf(date, 'day');
  return dayStart.getTimezoneOffset() - dayEnd.getTimezoneOffset();
}

/**
 * @param {Date|number} dateOrShift - either a date to check, or a shift value
 * obtained via getDaylightSavingsShift
 */
function isDaylightSavingsSpring(dateOrShift) {
  var shift = dateOrShift instanceof Date ? getDaylightSavingsShift(dateOrShift) : dateOrShift;
  return shift > 0;
}

/**
 * @param {Date|number} dateOrShift - either a date to check, or a shift value
 * obtained via getDaylightSavingsShift
 */
function isDaylightSavingsFall(dateOrShift) {
  var shift = dateOrShift instanceof Date ? getDaylightSavingsShift(dateOrShift) : dateOrShift;
  return shift < 0;
}