import * as React from 'react';
/**
 * @template V Value
 */
export declare type ContextHookFunction<V> = () => V;
export declare type MapPropsToProvider<P> = (props: any) => P;
export declare type ProviderExecute<T extends React.Component> = (Wrapped: T) => T;
/**
 * @template P Props
 * @template V Value
 */
export declare type ContextHookWithProvider<P> = (mapPropsToProvider: MapPropsToProvider<P>) => ProviderExecute<React.FC | any>;
/**
 * @template P Props
 * @template V Value
 */
export declare type ContextHookTuple<P, V> = [ContextHookWithProvider<P>, ContextHookFunction<V>];
export declare type Selector<V> = (state: V) => any;
export declare type Comparer = (prev: any, curr: any) => boolean;
