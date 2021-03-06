import { useContext } from 'react';
import { QuizContext } from './Contexts';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import './EndScreen.css';

function EndScreen({ onRestartClick, numOfQuestions }) {
  const { score } = useContext(QuizContext);

  return (
    <motion.div
      className="final-results"
      key="EndScreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1>Quiz complete!</h1>
      <h2>
        Congrats!
        <FontAwesomeIcon icon={faMedal} className="fa-icon-medal" />
      </h2>
      <div>
        <div className="end-screen-stat">Final score:</div>
        <div className="end-screen-stat">{score} / {numOfQuestions}</div>
      </div>
      <button
        className="trivia-card-next-button play-again-button"
        onClick={onRestartClick}
      >
        Play again ?
      </button>
    </motion.div>
  );
}

export default EndScreen;
