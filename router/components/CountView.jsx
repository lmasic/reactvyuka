import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

const CountView = () => {
  const count = useContext(CounterContext);

  return `Počet kliknutí: ${count}`;
};

export default CountView;
