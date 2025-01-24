import PropTypes from 'prop-types';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import Button from './Button';

const sentences = [
  'The sun sets over the horizon, painting the sky with brilliant hues of orange and pink.',
  'She enjoys reading books about ancient history and mythology.',
  'They decided to go for a walk in the park after the rain stopped.',
  'His favorite hobby is playing the guitar and composing music.',
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
      <p>{`Aktulální věta: ${sentences[index]}`}</p>
      <Button
        onClick={onClickHandler}
      >
        Změn větu
      </Button>
    </div>
  );
};
SentenceChanger.propTypes = {

  onSentenceChange: PropTypes.func.isRequired,

};

export default memo(SentenceChanger);
