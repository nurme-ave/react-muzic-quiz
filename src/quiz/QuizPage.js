import { useState, useEffect, useContext } from 'react';
import { QuizContext } from './Contexts';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import he from 'he';

import '../quiz/QuizPage.css';
import TriviaCard from './TriviaCard';
import EndScreen from './EndScreen';
import Stats from './Stats';

function QuizPage() {
  const [isGameOver, setIsGameOver] = useState(false);

  // const { score, setScore } = useContext(QuizContext)
  const { questionIndex, setQuestionIndex } = useContext(QuizContext);

  // const [isData, setIsData] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [userSelections, setUserSelections] = useState({
    selectionDifficulty: '',
    selectionQuestions: 0,
  });

  const hasUserMadeSelections = [difficultyLevel, numOfQuestions].every(value => value);
  // console.log(hasUserMadeSelections)

  // let nextButtonClass = 'trivia-item__next-button';
  // if (!haspickedAnswer) nextButtonClass += ' trivia-item__button--disabled';

  let startButtonClasses = 'start-quiz-button';
  if (!hasUserMadeSelections) startButtonClasses += ' trivia-card-button-disabled';

  const [quizData, setQuizData] = useState({
    question: '',
    incorrectAnswers: [],
    correctAnswer: '',
    allAnswers: [],
  });
  // const [gameState, setGameState] = useState({
  //   score: 0,
  // });
  // const [showIntro, setShowIntro] = useState(true);
  const [showGame, setShowGame] = useState(false);

  // const questionNumber = questionIndex + 1;

  // console.log(quizData);
  // console.log('isgameover', isGameOver);
  // console.log('questionindex', questionIndex);
  // console.log('isdata', isData);
  // console.log('difflevel', difficultyLevel);
  // console.log('numofquestions', numOfQuestions);
  // console.log('userSelections', userSelections);

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

  function startTheGame(e) {
    e.preventDefault();
    // setShowIntro(false);
    setShowGame(true);
    setUserSelections({
      selectionDifficulty: difficultyLevel,
      selectionQuestions: +numOfQuestions,
    });
  }

  function restartGame() {
    setIsGameOver(false);
    // setShowIntro(true);
    setQuestionIndex(0);
    setDifficultyLevel('');
    setNumOfQuestions(0);
    setQuizData({
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
      allAnswers: [],
    });
  }

  function loadNextQuestion() {
    setQuestionIndex(questionIndex + 1);
  }

  function finishQuiz() {
    setIsGameOver(true);
    setShowGame(false);
    // setIsData(false);
  }

  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const haspickedAnswer = selectedAnswer !== null;

  // function isCorrectAnswer(e) {
  //   console.log(e.target.textContent)
  //   const userAnswer = e.target.textContent;
  //   console.log(userAnswer)
    // setSelectedAnswer(userAnswer)
    // console.log(selectedAnswer)
    // console.log(quizData[questionIndex].correctAnswer)
    // const isUserCorrect = (userAnswer === quizData[questionIndex].correctAnswer)
    // console.log(isUserCorrect)
    // onSelectedAnswer(isUserCorrect)

    // if (isUserCorrect) {
    //   setScore(score + 1)
    // }

    // onSelectedAnswer(isUserCorrect);
  // }

  // function onSelectedAnswer(isUserCorrect) {
  //   if (isUserCorrect) {
  //     setScore(score + 1)
  //   }
  // }

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
          // setIsData(true);
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
      {showGame ? (
        <div>
          <Stats quizData={quizData} />
          <TriviaCard
            quizData={quizData}
            onloadNextClick={loadNextQuestion}
            onFinishClick={finishQuiz}
            // onAnswerClick={isCorrectAnswer}
          />
        </div>
      ) : isGameOver ? (
        <EndScreen onRestartClick={restartGame} />
      ) : (
        <>
          <div className="intro">
            <h2>Welcome!</h2>
            <p>Make your pick below and start the quiz.</p>
            <p>
              Good luck!
              <FontAwesomeIcon icon={faMusic} className="fa-icon" />
            </p>
          </div>
          <motion.form
            className="form-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            onSubmit={startTheGame}
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
            <button className={startButtonClasses} disabled={!hasUserMadeSelections}>Start!</button>
          </motion.form>
        </>
      )}
    </motion.section>
  );
}

export default QuizPage;
