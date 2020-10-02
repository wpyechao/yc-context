import { ContextHookTuple } from './types';
declare function createPageContext<P, V>(useValue: (props: P) => V): ContextHookTuple<P, V>;
export default createPageContext;
