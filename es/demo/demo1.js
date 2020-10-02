function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * title: 基础用法
 * desc: 隔空传值
 */
import React, { useState } from 'react';
import createPageContext from '@dragon/page-context';
import { Card, Button } from 'antd';

var useCount = function useCount(props) {
  var init = props.init;

  var _useState = useState(init),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var add = function add() {
    return setCount(function (c) {
      return c + 1;
    });
  };

  return {
    count: count,
    add: add
  };
};

var _createPageContext = createPageContext(useCount),
    _createPageContext2 = _slicedToArray(_createPageContext, 2),
    withProvider = _createPageContext2[0],
    usePageContext = _createPageContext2[1];

var Count = function Count() {
  var _usePageContext = usePageContext(),
      count = _usePageContext.count;

  return /*#__PURE__*/React.createElement(Card, null, count);
};

var Add = function Add() {
  var _usePageContext2 = usePageContext(),
      add = _usePageContext2.add;

  return /*#__PURE__*/React.createElement(Button, {
    onClick: add
  }, "\u70B9\u6211\u70B9\u6211\u70B9\u6211");
};

export default withProvider(function () {
  return {
    init: 888
  };
})(function (props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Count, null), /*#__PURE__*/React.createElement(Add, null));
});