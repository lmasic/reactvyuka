import { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import CountView from './components/CountView';

const App = () => {
  // zavolám setcount a změní count a tím se komponenta překreslí, 0 - vyhcozí stav
  const [count, setCount] = useState(0);
  const [decimus, setDecimus] = useState(0);

  const onClickHandler = useCallback(
    (data) => {
      setCount((prevState) => {
        const newCount = prevState + data;
        setDecimus(Math.floor(newCount / 10));
      });
    },
    [],
  );

  useMemo(
    () => {
      console.log('decium', decimus);
    },
    [decimus],

  );

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
      <div className="row">
        <CountView count={count} />

      </div>

    </>
  );
};

export default App;
