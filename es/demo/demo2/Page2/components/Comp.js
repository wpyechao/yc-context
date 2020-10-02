import React from 'react';
import { usePageContext } from '../store';
import { Button, Card } from 'antd';

var Comp = function Comp() {
  var _usePageContext = usePageContext(),
      data = _usePageContext.data,
      addStr = _usePageContext.addStr;

  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", null, data), /*#__PURE__*/React.createElement(Button, {
    onClick: addStr
  }, "\u6DFB\u52A0\u6DFB\u52A0"));
};

export default Comp;