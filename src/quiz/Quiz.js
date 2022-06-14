import { useState, useEffect } from 'react';
import he from 'he';
import Trivia from './Trivia';
import ErrorMessage from './ErrorMessage';

function Quiz() {
  const [quizData, setQuizData] = useState({
    errorMessage: '',
    data: null,
  });

  const { errorMessage, data } = quizData;

  useEffect(() => {
    async function getQuizData() {
      try {
        const url =
          'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Something went wrong, server responded with ${response.status}.`
          );
        }

        const jsonData = await response.json();
        const { response_code, results } = jsonData;

        if (response_code !== 0) {
          throw new Error('Error - no results!');
        }

        const decodedResults = results.map((item) => {
          return {
            ...item,
            question: he.decode(item.question),
            correct_answer: he.decode(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map((incorrect) =>
              he.decode(incorrect)
            ),
          };
        });

        setQuizData({
          errorMessage: '',
          data: decodedResults,
        });
      } catch (err) {
        setQuizData({
          errorMessage:
            'Something went wrong loading the quiz. Please try again later.',
          data: null,
        });
        console.error(err);
      }
    }
    getQuizData();
  }, []);

  console.log(data);

  return (
    <>
      {errorMessage !== '' ? <ErrorMessage>{errorMessage}</ErrorMessage> : <Trivia triviaData={data} />}
    </>
  );
}

export default Quiz;
