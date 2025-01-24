import { createContext } from 'react';

const CounterContext = createContext(0);
CounterContext.displayName = 'CounterContext';// abych ho videl v konzoli
export default CounterContext;
