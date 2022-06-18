import { useContext } from 'react';
import { QuizContext } from './Contexts';

function Stats({ quizData }) {
  const { questionIndex } = useContext(QuizContext);
  const questionNumber = questionIndex + 1;

  return (
    <div>
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
    </div>
  )
}

export default Stats