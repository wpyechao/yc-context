function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * title: 模拟一个详情页
 * desc: mount加载数据，前端可以进行页面切换，对数据进行编辑
 */
import React, { useState } from 'react';
import { Radio } from 'antd';
import Page1 from './Page1';
import Page2 from './Page2';

var Page = function Page(props) {
  var _useState = useState('page1'),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Radio.Group, {
    value: value,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement(Radio.Button, {
    value: "page1"
  }, "page1"), /*#__PURE__*/React.createElement(Radio.Button, {
    value: "page2"
  }, "page2")), /*#__PURE__*/React.createElement("div", null, value === 'page1' ? /*#__PURE__*/React.createElement(Page1, {
    id: "111"
  }) : /*#__PURE__*/React.createElement(Page2, {
    id: "222"
  })));
};

export default Page;