import PropTypes from 'prop-types';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import Button from './Button';

const sentences = [
  'T😊hle je fakt dost hustý',
  'Kobyla má malá bok',
  'Kuna nese nanuk',
  'Jelenovi pivo nelej',
  'Jedno kalné ráno které zaspat měl jsem spíš',
  'Já su dneska strašnej chrchla',
];

const SentenceChanger = ({ onSentenceChange }) => {
  const [index, setIndex] = useState(0);

  const onClickHandler = useCallback(
    () => setIndex((prevIndex) => {
      const next = prevIndex + 1 >= sentences.length ? 0 : prevIndex + 1;

      return next;
    }),
    [],
  );

  useEffect(
    () => {
      onSentenceChange(sentences[index].split(' '));
    },
    [index],
  );

  return (
    <div className="row">
      <p>{`Aktuální věta: ${sentences[index]}`}</p>

      <Button
        onClick={onClickHandler}
      >
        Změň větu
      </Button>
    </div>
  );
};

SentenceChanger.propTypes = {
  onSentenceChange: PropTypes.func.isRequired,
};

export default memo(SentenceChanger);
