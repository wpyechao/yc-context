import * as React from 'react'
import {
  TResult,
  TWithProvider,
  TContextHookFunction
} from "./types"

const DEFAULT_CONTEXT_VALUE = "_dcv_" as any

// 根据传入的context返回useContext的方法
function createUseContext<T>(context: React.Context<T>): TContextHookFunction<T> {
  return () => {
    const value = React.useContext<T>(context)
    return value
  }
}

// factory function
function createContext<V>(
  useValue: () => V
): TResult<V> {
  const Context = React.createContext<V>(DEFAULT_CONTEXT_VALUE as V)

  const withProvider: TWithProvider = (Wrapped) => (props) => {
    // 生产者
    const Provider: React.FC = (props) => {
      const value = useValue()

      return <Context.Provider value={value}>{props.children}</Context.Provider>
    }

    return (
      <Provider>
        <Wrapped {...props} />
      </Provider>
    )
  }

  const tuple: TResult<V> = [
    withProvider,
    createUseContext<V>(Context),
  ]

  return tuple
}

export default createContext
