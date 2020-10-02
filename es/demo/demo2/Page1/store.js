function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import createPageContext from '@dragon/page-context';
import { useRequest } from '@dragon/hooks';
import { useCallback } from 'react';

var useValue = function useValue(props) {
  var id = props.id;

  var _useRequest = useRequest(function () {
    return get(id);
  }),
      loading = _useRequest.loading,
      _useRequest$data = _useRequest.data,
      data = _useRequest$data === void 0 ? '' : _useRequest$data,
      setData = _useRequest.setData;

  var addStr = useCallback(function () {
    setData(function (s) {
      return "".concat(s, " $");
    });
  }, [setData]);
  return {
    loading: loading,
    data: data,
    addStr: addStr
  };
};

var _createPageContext = createPageContext(useValue),
    _createPageContext2 = _slicedToArray(_createPageContext, 2),
    withProvider = _createPageContext2[0],
    usePageContext = _createPageContext2[1];

export { withProvider, usePageContext }; // 模拟请求

function get(id) {
  return new Promise(function (r) {
    setTimeout(function () {
      r('page1 data from remote server with id: ' + id);
    }, 1000);
  });
}