/**
 * title: 基础用法
 * desc: 隔空传值
 */

import React, { useState } from 'react';
import createPageContext from '@dragon/page-context';
import { Card, Button } from 'antd';

const useCount = props => {
  const { init } = props;

  const [count, setCount] = useState(init);
  const add = () => setCount(c => c + 1);

  return {
    count,
    add,
  };
};

const [withProvider, usePageContext] = createPageContext(useCount);

const Count = () => {
  const { count } = usePageContext();

  return <Card>{count}</Card>;
};

const Add = () => {
  const { add } = usePageContext();

  return <Button onClick={add}>点我点我点我</Button>;
};

export default withProvider(() => ({
  init: 888,
}))(props => {
  return (
    <React.Fragment>
      <Count />
      <Add />
    </React.Fragment>
  );
});
