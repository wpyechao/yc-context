import * as React from "react";
/**
 * @template V Value
 */
export type ContextHookFunction<V> = () => V;

export type MapPropsToProvider<P> = (props: any) => P;

export type ProviderExecute<T extends React.Component> = (Wrapped: T) => T;

/**
 * @template P Props
 * @template V Value
 */
export type ContextHookWithProvider<P> = (
  mapPropsToProvider?: MapPropsToProvider<P>
) => ProviderExecute<React.FC | any>;

/**
 * @template P Props
 * @template V Value
 */
export type ContextHookTuple<P, V> = [
  ContextHookWithProvider<P>,
  ContextHookFunction<V>
];

export type Selector<V> = (state: V) => any;
export type Comparer = (prev: any, curr: any) => boolean;
