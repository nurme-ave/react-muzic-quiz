import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

// import he from "he";
import '../quiz/QuizPage.css';

function QuizPage() {
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [userSelections, setUserSelections] = useState({
    difficulty: '',
    numOfQuestions: 0,
  });

  console.log(difficultyLevel)
  console.log(numOfQuestions)

  function getUserSelections() {
    return;
  }

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
        <FontAwesomeIcon icon={ faMusic } className="fa-icon" />
      </p>

      <motion.form
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="select-container">
          <label htmlFor="difficulty">Difficulty level:</label>
          <select
            value={difficultyLevel}
            id="difficulty"
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
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
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <button onClick={getUserSelections} className="start-quiz-button">
          Start!
        </button>
      </motion.form>
    </motion.section>
  );
}

export default QuizPage;