import PropTypes from 'prop-types';
import {
  memo, useEffect, useMemo, useState,
} from 'react';
import Button from './Button';

// const words = ['decium', 'kvadirtus', 'ne', 'ja'];
const coputeLetterCount = (wrd) => {
  if (!wrd) {
    return 0;
  }
  const letterCount = [...wrd].length;
  return letterCount;
};

const WordCOunter = ({ words }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const word = useMemo(
    () => words[wordIndex],
    [wordIndex, words],

  );

  const letterCount = useMemo(
    () => coputeLetterCount(word),
    [word],

  );
  useEffect(() => {
    setWordIndex(0);
  }, [words]);

  return (
    <div className="row">
      <h2>Počet slov</h2>
      <p>{words.join(', ')}</p>
      <p>{`Slovo ${word} má ${letterCount} písmen.`}</p>
      <Button
        onClick={() => setWordIndex((prevIndex) => {
          const next = prevIndex + 1 >= words.length ? 0 : prevIndex + 1;
          return next;
        })}
      >
        Další slovo
      </Button>

      <h2>Rendering </h2>
      <p>{`POčítadlo ${count}`}</p>
      <Button
        onClick={() => setCount((prev) => prev + 1)}
      >
        Překresli
      </Button>
    </div>

  );
};
WordCOunter.propTypes = {

  words: PropTypes.arrayOf(PropTypes.string).isRequired,

};
export default memo(WordCOunter);
