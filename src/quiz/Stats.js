import { useContext } from 'react';
import { motion } from 'framer-motion';
import { QuizContext } from './Contexts';

function Stats({ quizData }) {
  const { questionIndex } = useContext(QuizContext);
  const questionNumber = questionIndex + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      <ul className="stats">
        <li className="stat">
          <div>Score</div>
          <div>10</div>
        </li>
        <li className="stat">
          <div>Question</div>
          <div>
            {questionNumber} / {quizData.length}
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default Stats;
