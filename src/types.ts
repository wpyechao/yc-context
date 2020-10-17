import * as React from "react";
/**
 * @template V Value
 */
export type TContextHookFunction<V> = () => V;

export type TWithProvider = <P>(Wrapped: React.ComponentType<P>) => React.FC<P>

export type TResult<V> = [
  TWithProvider,
  TContextHookFunction<V>
];