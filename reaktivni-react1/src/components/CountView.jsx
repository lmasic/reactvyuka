import { useContext } from 'react';
import CounterContext from './context/CounterContext';

const CountView = () => {
  const count = useContext(CounterContext);
  return `Počet kliknutí:${count}`; // plní se v setCount
};
export default CountView;
