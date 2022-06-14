import { useState, useEffect } from 'react';
import he from "he";
import Trivia from './Trivia';

function Quiz() {
  const [quizData, setQuizData] = useState({
    errorMessage: '',
    data: null,
  });

  useEffect(() => {
    async function getQuizData() {
      try {
        const url = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';
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
            incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))
          }
        })

        setQuizData({
          errorMessage: '',
          data: decodedResults,
        });

      } catch (err) {

        }
      }
      getQuizData()
    }, []);
    

  console.log(quizData)

  return (
    <>
      <Trivia triviaData={quizData} />
    </>
  )
}

export default Quiz;
