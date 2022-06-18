import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import he from 'he';
import { QuizContext } from './Contexts';


function TriviaCard({ quizData }) {
  const { isGameOver, setIsGameOver } = useContext(QuizContext)
  const { questionIndex, setQuestionIndex } = useContext(QuizContext)

  function loadNextQuestion() {
    if (questionIndex >= quizData.length - 1) {
      setIsGameOver(true)
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }


  return (
    <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            className="trivia-card-container"
            key={nanoid()}
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
                return (
                  <li key={nanoid()}>
                    <button className="trivia-card-button">
                      {he.decode(answer)}
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              className="trivia-card-next-button"
              onClick={loadNextQuestion}
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
            </button>
          </motion.div>
        </AnimatePresence>
  )
}

export default TriviaCard