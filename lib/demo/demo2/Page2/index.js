"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _store = require("./store");

var _Comp = _interopRequireDefault(require("./components/Comp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page2 = function Page2(props) {
  var _usePageContext = (0, _store.usePageContext)(),
      loading = _usePageContext.loading;

  return /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    spinning: loading
  }, /*#__PURE__*/_react.default.createElement(_Comp.default, null));
};

var _default = (0, _store.withProvider)(function (props) {
  var id = props.id;
  return {
    id: id
  };
})(Page2);

exports.default = _default;