/**
 * title: 模拟一个详情页
 * desc: mount加载数据，前端可以进行页面切换，对数据进行编辑
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import Page1 from './Page1';
import Page2 from './Page2';

const Page = props => {
  const [value, setValue] = useState('page1');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group value={value} onChange={handleChange}>
        <Radio.Button value="page1">page1</Radio.Button>
        <Radio.Button value="page2">page2</Radio.Button>
      </Radio.Group>
      <div>{value === 'page1' ? <Page1 id="111" /> : <Page2 id="222" />}</div>
    </div>
  );
};

export default Page;
