import { useCallback, useState } from 'react';
import { CounterContext } from '../context';
import Button from './Button';
import CountWrapper from './CountWrapper';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = useCallback(
    (data) => {
      setCount((prevState) => {
        const newCount = prevState + data;

        return newCount;
      });
    },
    [],
  );

  const { Provider } = CounterContext;

  return (
    <>
      <div className="row">
        <Button
          className="pill"
          large
          onClick={onClickHandler}
          variant="secondary"
        >
          Přičti
        </Button>
      </div>

      <Provider value={count}>
        <CountWrapper />
      </Provider>
    </>
  );
};

export default Counter;
