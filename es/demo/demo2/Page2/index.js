import React from 'react';
import { Spin } from 'antd';
import { withProvider, usePageContext } from './store';
import Comp from './components/Comp';

var Page2 = function Page2(props) {
  var _usePageContext = usePageContext(),
      loading = _usePageContext.loading;

  return /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement(Comp, null));
};

export default withProvider(function (props) {
  var id = props.id;
  return {
    id: id
  };
})(Page2);