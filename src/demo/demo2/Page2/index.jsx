import React from 'react';
import { Spin } from 'antd';
import { withProvider, usePageContext } from './store';
import Comp from './components/Comp';

const Page2 = props => {
  const { loading } = usePageContext();

  return (
    <Spin spinning={loading}>
      <Comp />
    </Spin>
  );
};

export default withProvider(props => {
  const { id } = props;
  return { id };
})(Page2);
