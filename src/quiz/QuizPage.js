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
    selectionDifficulty: '',
    selectionQuestions: 0,
  });

  console.log(difficultyLevel)
  console.log(numOfQuestions)
  console.log(userSelections)

  const arrDifficultyLevels = ['Easy', 'Medium', 'Hard']
  const optionDifficultyLevels = arrDifficultyLevels.map((level) => {
    return <option key={level.toLowerCase()} value={level.toLowerCase()}>{level}</option>
  })

  const arrNumOfQuestions = ['5', '10', '15']
  const optionNumOfQuestions = arrNumOfQuestions.map((num) => {
    return <option key={num} value={+num}>{num}</option>
  })

  function getUserSelections(e) {
    e.preventDefault();
    setUserSelections({
      selectionDifficulty: difficultyLevel,
      selectionQuestions: +numOfQuestions,
    });
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
        <button className="start-quiz-button">
          Start!
        </button>
      </motion.form>
    </motion.section>
  );
}

export default QuizPage;
