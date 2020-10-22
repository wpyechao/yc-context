import { TResult } from "./types";
declare function createContext<V>(useValue: () => V): TResult<V>;
export default createContext;
