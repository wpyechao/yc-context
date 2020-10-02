import React from 'react';
import { Spin } from 'antd';
import { withProvider, usePageContext } from './store';
import Comp from './components/Comp';

var Page1 = function Page1(props) {
  var loading = usePageContext(function (s) {
    return s.loading;
  });
  return /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement(Comp, null));
};

export default withProvider(function (props) {
  var id = props.id;
  return {
    id: id
  };
})(Page1);