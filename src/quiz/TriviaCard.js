import { useState, useContext, useEffect } from 'react';
import { QuizContext } from './Contexts';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import he from 'he';
import '../quiz/TriviaCard.css';
import Spinner from './Spinner';

function TriviaCard({
  quizData,
  onloadNextClick,
  onFinishClick,
}) {
  const { questionIndex } = useContext(QuizContext);
  const { selectedAnswer, setSelectedAnswer } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [loaded, setLoaded] = useState(false);

  // console.log(loaded)
  // console.log(quizData)

  useEffect(() => {
    setLoaded(true);
  }, [quizData])

  const haspickedAnswer = selectedAnswer !== null;

  function onAnswerClick(e) {
    const userAnswer = e.target.textContent;
    setSelectedAnswer(userAnswer);
    const isUserCorrect = userAnswer === quizData[questionIndex].correctAnswer;
    onSelectedAnswer(isUserCorrect);
  }

  function onSelectedAnswer(isUserCorrect) {
    if (isUserCorrect) {
      setScore(score + 1);
    }
  }

  return (
    <>
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        className="trivia-card-container"
        key={questionIndex}
        initial={{ opacity: 0, x: -300, transition: { ease: 'easeOut' } }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 1 }}
      >
        <p className="trivia-card-question">
          {quizData[questionIndex].question}
        </p>
        <ul className="trivia-card-answers">
          {quizData[questionIndex].allAnswers.map((answer) => {
            let answerButtonClasses = 'trivia-card-button';

            if (haspickedAnswer) {
              const pickedThisAnswer = answer === selectedAnswer;
              const isThisCorrect =
                answer === quizData[questionIndex].correctAnswer;

              if (pickedThisAnswer && isThisCorrect) {
                answerButtonClasses += ' trivia-card-button-correct';
              } else if (pickedThisAnswer && !isThisCorrect) {
                answerButtonClasses += ' trivia-card-button-incorrect';
              } else {
                answerButtonClasses += ' trivia-card-button-disabled';
              }
            }

            return (
              <li key={answer}>
                <button
                  className={answerButtonClasses}
                  onClick={onAnswerClick}
                  disabled={haspickedAnswer}
                >
                  {he.decode(answer)}
                </button>
              </li>
            );
          })}
        </ul>
        {questionIndex >= quizData.length - 1 ? (
          <button className="trivia-card-next-button" onClick={onFinishClick}>
            Finish quiz
            <FontAwesomeIcon icon={faArrowRight} className="fa-icon-arrow" />
          </button>
        ) : (
          <button
            className="trivia-card-next-button"
            onClick={onloadNextClick}
            disabled={!haspickedAnswer}
          >
            Next
            <FontAwesomeIcon icon={faArrowRight} className="fa-icon-arrow" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
    </>
  );
}

export default TriviaCard;
