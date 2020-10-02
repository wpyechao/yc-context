import React from 'react';
import { usePageContext } from '../store';
import { Button, Card } from 'antd';

const Comp = () => {
  const { data, addStr } = usePageContext();

  return (
    <Card>
      <p>{data}</p>
      <Button onClick={addStr}>添加添加</Button>
    </Card>
  );
};

export default Comp;
