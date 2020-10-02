import React from "react";
import {
  ContextHookTuple,
  ContextHookWithProvider,
  Selector,
  Comparer,
} from "./types";

const DEFAULT_CONTEXT_VALUE = "_dcv_" as any;

// 根据传入的context返回useContext的方法
function createUseContext<V>(context: React.Context<any>): any {
  return (selector: Selector<V> = (s) => s) => {
    const value = React.useContext(context);
    return selector(value);
  };
}

// factory function
function createPageContext<P, V>(
  useValue: (props: P) => V
): ContextHookTuple<P, V> {
  const Context = React.createContext(DEFAULT_CONTEXT_VALUE as V);

  // 生产者
  const Provider: React.FC<P> = (props) => {
    const value = useValue(props);

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  const withProvider: ContextHookWithProvider<P> = (mapPropsToProvider) => (
    Wrapped
  ) => {
    return class extends React.Component {
      render() {
        const { children, ...restProps } = this.props;

        const providerProps = (mapPropsToProvider &&
          mapPropsToProvider(restProps)) as P;

        return (
          <Provider {...providerProps}>
            <Wrapped {...restProps}>{children}</Wrapped>
          </Provider>
        );
      }
    };
  };

  const tuple: ContextHookTuple<P, V> = [
    withProvider,
    createUseContext<V>(Context),
  ];

  return tuple;
}

export default createPageContext;
