import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

function EndScreen({ onRestartClick }) {
  return (
    <motion.div
      className="final-results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1>Quiz complete!</h1>
      <h2>
        Congrats!
        <FontAwesomeIcon icon={faMedal} className="fa-icon" />
      </h2>
      <div className="end-screen-stats">
        <div className="end-screen-stat-label">Final score</div>
        <div className="end-screen-stat-value">10</div>
      </div>
      <button className="trivia-card-next-button" onClick={onRestartClick}>
        Play again?
      </button>
    </motion.div>
  );
}

export default EndScreen;