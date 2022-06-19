import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import he from 'he';
import { QuizContext } from './Contexts';

function TriviaCard({ quizData, onloadNextClick, onFinishClick, onSelectedAnswer }) {
  const { questionIndex } = useContext(QuizContext);
  const { selectedAnswer, setSelectedAnswer } = useContext(QuizContext);
  // const { score, setScore } = useContext(QuizContext);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  const haspickedAnswer = selectedAnswer !== null;
  
  // console.log(selectedAnswer)
  // console.log(haspickedAnswer)
  
  function onAnswerClick(e) {
    // console.log("clicked")
    // console.log('selected answer', selectedAnswer);
    const userAnswer = e.target.innerHTML;
    setSelectedAnswer(userAnswer);
    // console.log(userAnswer)
    // console.log('selected answer', selectedAnswer);
    const isUserCorrect = userAnswer === quizData[questionIndex].correctAnswer;
    onSelectedAnswer(isUserCorrect);
  }



  return (
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
          
          // console.log(quizData[questionIndex].allAnswers)
          // console.log(answer)

          let answerButtonClasses = 'trivia-card-button';

          if (haspickedAnswer) {
            const pickedThisAnswer = answer === selectedAnswer;
            // console.log(pickedThisAnswer)
            const isThisCorrect = answer === quizData[questionIndex].correctAnswer;
            // console.log(isThisCorrect)

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
                  // className='trivia-card-button'
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
            <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
          </button>
        ) : (
          <button
            className="trivia-card-next-button"
            onClick={onloadNextClick}
            disabled={!haspickedAnswer}
          >
            Next
            <FontAwesomeIcon icon={faArrowRight} className="fa-icon" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default TriviaCard;
