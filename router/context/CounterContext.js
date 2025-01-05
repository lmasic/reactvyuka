import { createContext } from 'react';

const CounterContext = createContext(0);

CounterContext.displayName = 'CounterContext';

export default CounterContext;
