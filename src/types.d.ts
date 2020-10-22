import * as React from "react";
/**
 * @template V Value
 */
export declare type TContextHookFunction<V> = () => V;
export declare type TWithProvider = <P>(Wrapped: React.ComponentType<P>) => React.FC<P>;
export declare type TResult<V> = [
    TWithProvider,
    TContextHookFunction<V>
];
