import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import he from 'he';
import { QuizContext } from './Contexts';


function TriviaCard({ quizData, onloadNextClick, onFinishClick }) {
  const { questionIndex } = useContext(QuizContext)

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
            { questionIndex >= quizData.length - 1 ?
              <button
                className="trivia-card-next-button"
                onClick={onFinishClick}
              >
                Finish quiz
                <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
              </button> :
              <button
                className="trivia-card-next-button"
                onClick={onloadNextClick}
              >
                Next
                <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
              </button>
          }
          </motion.div>
        </AnimatePresence>
  )
}

export default TriviaCard;