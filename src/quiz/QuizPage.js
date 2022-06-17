import { useState } from 'react';
import { motion } from 'framer-motion';
// import he from "he";
import '../quiz/QuizPage.css';

function QuizPage() {
  const [quizDifficulty, setQuizDifficulty] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [userSelections, setUserSelections] = useState({
    difficulty: '',
    numOfQuestions: 0,
  });

  function getUserSelections() {
    return
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
      <p>Good luck!</p>

      <motion.form
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="select-container">
          <label htmlFor="difficulty">Difficulty level:</label>
          <select
            value={quizDifficulty}
            id="difficulty"
            onChange={(e) => setQuizDifficulty(e.target.value)}
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
      </motion.form>
      <button onClick={getUserSelections} className="start-quiz-button">
        Start!
      </button>
    </motion.section>
  );
}

export default QuizPage;
