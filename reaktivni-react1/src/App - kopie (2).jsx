/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  // zavolám setcount a změní count a tím se komponenta překreslí, 0 - vyhcozí stav
  const [count, setCount] = useState(0);
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
          // onClick={() => {}}
          onClick={() => setCount(count + 1)}
          variant="secondary"
        >
          Přičti
        </Button>
        <p>You&apos;ve clicked the button {count} times.</p>
      </div>

    </>
  );
};

export default App;
