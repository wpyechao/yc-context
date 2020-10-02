import createPageContext from '@dragon/page-context';
import { useRequest } from '@dragon/hooks';
import { useCallback } from 'react';

const useValue = props => {
  const { id } = props;

  const { loading, data = '', setData } = useRequest(() => get(id));

  const addStr = useCallback(() => {
    setData(s => `${s}1`);
  }, [setData]);

  return {
    loading,
    data,
    addStr,
  };
};

const [withProvider, usePageContext] = createPageContext(useValue);

export { withProvider, usePageContext };

//
function get(id) {
  return new Promise(r => {
    setTimeout(() => {
      r('data from remote server with id: ' + id);
    }, 1000);
  });
}
