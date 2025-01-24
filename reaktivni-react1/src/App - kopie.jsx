import { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import CounterContext from './components/context/CounterContext';
import CountWrapper from './components/CountWrapper';
import SentenceChanger from './components/SentenceChanger';
import WordCOunter from './components/WordCounter';

const App = () => {
  // zavolám setcount a změní count a tím se komponenta překreslí, 0 - vyhcozí stav
  const [count, setCount] = useState(0);
  const [decimus, setDecimus] = useState(0);
  const [words, setWords] = useState(['decium', 'kvadirtus', 'ne', 'ja']);

  const onClickHandler = useCallback(
    (data) => {
      setCount((prevState) => {
        const newCount = prevState + data;
        setDecimus(Math.floor(newCount / 10));

        return newCount;
      });
    },
    [],
  );

  useMemo(
    () => {
      console.log('decium ', decimus);
    },
    [decimus],

  );
  const { Provider } = CounterContext;
  return (
    <>
      <h1>Hello world! I&apos;m first react component!</h1>

      <div className="row">
        {`${PRODUCTION ? 'Jde' : 'Nejde'} o produkční webovku.`}
      </div>
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

      <SentenceChanger onSentenceChange={setWords} />
      <WordCOunter words={words} />
    </>
  );
};

export default App;
