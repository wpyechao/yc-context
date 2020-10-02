import createPageContext from '@dragon/page-context';
import { useRequest } from '@dragon/hooks';
import { useCallback } from 'react';

const useValue = props => {
  const { id } = props;

  const { loading, data = '', setData } = useRequest(() => get(id));

  const addStr = useCallback(() => {
    setData(s => `${s} $`);
  }, [setData]);

  return {
    loading,
    data,
    addStr,
  };
};

const [withProvider, usePageContext] = createPageContext(useValue);

export { withProvider, usePageContext };

// 模拟请求
function get(id) {
  return new Promise(r => {
    setTimeout(() => {
      r('page1 data from remote server with id: ' + id);
    }, 1000);
  });
}
