import PropTypes from 'prop-types';
import {
  memo, useEffect, useMemo, useState,
} from 'react';
import Button from './Button';

const computeLetterCount = (wrd) => {
  if (!wrd) {
    return 0;
  }

  const letterCount = [...wrd].length;
  /*
  let i = 0;
  while (i < 5E9) {
    i += 1;
  }
  */
  return letterCount;
};

const WordCounter = ({ words }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const word = useMemo(
    () => words[wordIndex],
    [wordIndex, words],
  );

  const letterCount = useMemo(
    () => computeLetterCount(word),
    [word],
  );

  useEffect(() => {
    setWordIndex(0);
  }, [words]);

  return (
    <div className="row">
      <h2>Počet slov</h2>

      <p>{words.join(', ')}</p>

      <p>
        {`Slovo ${word} má ${letterCount} písmen.`}
      </p>

      <Button
        onClick={() => setWordIndex((prevIndex) => {
          const next = prevIndex + 1 >= words.length ? 0 : prevIndex + 1;

          return next;
        })}
      >
        Další slovo
      </Button>

      <h2>Rendering</h2>

      <p>{`Počitadlo: ${count}`}</p>

      <Button
        onClick={() => setCount((prev) => prev + 1)}
      >
        Překresli
      </Button>
    </div>
  );
};

WordCounter.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(WordCounter);
