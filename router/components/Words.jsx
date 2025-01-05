import { useState } from 'react';
import SentenceChanger from './SentenceChanger';
import WordCounter from './WordCounter';

const Words = () => {
  const [words, setWords] = useState([]);

  return (
    <>
      <WordCounter words={words} />

      <SentenceChanger onSentenceChange={setWords} />
    </>
  );
};

export default Words;
