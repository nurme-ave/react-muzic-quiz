import React from 'react';
import { useState, useEffect } from 'react';
import Quiz from './Quiz';

function Data() {
  const url = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';
  const [quizData, setQuizData] = useState({
    errorMessage: '',
    data: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        console.log(results)
        setQuizData({
          errorMessage: '',
          data: results,
        })
      })
  }, []);

  console.log(quizData)

  return (
    <>
      <Quiz triviaData={quizData} />
    </>
  )
}

export default Data;
