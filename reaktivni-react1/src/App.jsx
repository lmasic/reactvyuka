// import { useMemo, useState } from 'react';
import { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const words = ['decium', 'kvadirtus', 'ne', 'ja'];
  const wordIndex = 0;
  const word = words[wordIndex];
  const [count, setCount] = useState(0);
  const coputeLetterCount = (wrd) => {
    const letterCount = wrd.length;
    let i = 0;
    while (i < 5E9) {
      i += 1;
    }

    return letterCount;
  };
  const letterCount = () => setCount(coputeLetterCount(word));
  /*
  const letterCount = useMemo(
    () => setCount(coputeLetterCount(word)),
    [word],
  );
  */
  return (
    <>

      <Button
        className="pill"
        large
        // onClick={() => {}}
        onClick={letterCount}
        variant="secondary"
      >
        spočti
      </Button>
      <p>{count}</p>

    </>
  );
};

export default App;
