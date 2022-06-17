import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import he from 'he';

import '../quiz/QuizPage.css';

function QuizPage() {
  const [isData, setIsData] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [userSelections, setUserSelections] = useState({
    selectionDifficulty: '',
    selectionQuestions: 0,
  });
  const [quizData, setQuizData] = useState({
    question: '',
    incorrectAnswers: [],
    correctAnswer: '',
    allAnswers: [],
  });
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;

  console.log(quizData);

  const arrDifficultyLevels = ['Easy', 'Medium', 'Hard'];
  const optionDifficultyLevels = arrDifficultyLevels.map((level) => {
    return (
      <option key={level.toLowerCase()} value={level.toLowerCase()}>
        {level}
      </option>
    );
  });

  const arrNumOfQuestions = ['5', '10', '15'];
  const optionNumOfQuestions = arrNumOfQuestions.map((num) => {
    return (
      <option key={num} value={+num}>
        {num}
      </option>
    );
  });

  function getUserSelections(e) {
    e.preventDefault();
    setUserSelections({
      selectionDifficulty: difficultyLevel,
      selectionQuestions: +numOfQuestions,
    });
  }

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=12&difficulty=${difficultyLevel}&type=multiple`;

    if (numOfQuestions !== 0 && difficultyLevel !== '') {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          const decodedResults = data.results.map((item) => {
            return {
              question: he.decode(item.question),
              correctAnswer: he.decode(item.correct_answer),
              incorrectAnswers: item.incorrect_answers.map((incorrect) =>
                he.decode(incorrect)
              ),
              allAnswers: shuffle([
                ...item.incorrect_answers,
                item.correct_answer,
              ]),
            };
          });
          function shuffle(array) {
            const shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
              const swapIndex = Math.floor(Math.random() * (i + 1));
              const temp = shuffledArray[i];
              shuffledArray[i] = shuffledArray[swapIndex];
              shuffledArray[swapIndex] = temp;
            }
            return shuffledArray;
          }
          setQuizData(decodedResults);
          setIsData(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [difficultyLevel, numOfQuestions]);

  return (
    <motion.section
      className="section-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <h2>Welcome!</h2>
      <p>Make your pick below and start the quiz.</p>
      <p>
        Good luck!
        <FontAwesomeIcon icon={faMusic} className="fa-icon" />
      </p>

      <motion.form
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onSubmit={getUserSelections}
      >
        <div className="select-container">
          <label htmlFor="difficulty">Difficulty level:</label>
          <select
            value={difficultyLevel}
            id="difficulty"
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">-- Select --</option>
            {optionDifficultyLevels}
          </select>
        </div>
        <div className="select-container">
          <label htmlFor="numOfQuestions">Number of questions:</label>
          <select
            value={numOfQuestions}
            id="numOfQuestions"
            onChange={(e) => setNumOfQuestions(e.target.value)}
          >
            <option value="">-- Select --</option>
            {optionNumOfQuestions}
          </select>
        </div>
        <button className="start-quiz-button">Start!</button>
      </motion.form>

      <div>
        <ul className="stats">
          <li className="stat">
            <div>Score</div>
            <div>10</div>
          </li>
          <li className="stat">
            <div>Question</div>
            <div>{questionNumber} / {quizData.length}</div>
          </li>
        </ul>
      </div>

      {isData &&
        quizData.map((item) => {
          return (
            <div className="trivia-card-container" key={nanoid()}>
              <p className="trivia-card-question">{item.question}</p>
              <ul className="trivia-card-answers">
                {item.allAnswers.map((answer) => {
                  return (
                    <li key={nanoid()}>
                      <button className="trivia-card-button" >{he.decode(answer)}</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      <button className="trivia-card-next-button">
        Next
        <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
      </button>
    </motion.section>
  );
}

export default QuizPage;
