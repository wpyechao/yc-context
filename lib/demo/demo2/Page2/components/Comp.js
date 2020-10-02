"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _store = require("../store");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comp = function Comp() {
  var _usePageContext = (0, _store.usePageContext)(),
      data = _usePageContext.data,
      addStr = _usePageContext.addStr;

  return /*#__PURE__*/_react.default.createElement(_antd.Card, null, /*#__PURE__*/_react.default.createElement("p", null, data), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: addStr
  }, "\u6DFB\u52A0\u6DFB\u52A0"));
};

var _default = Comp;
exports.default = _default;