import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

function EndScreen({ onRetryClick }) {

  // function restartGame() {
  //   setGameState({
  //     score: 0,
  //     questionIndex: 0,
  //     isGameOver: false,
  //   });
  //   setIsData(false);
  //   setDifficultyLevel('');
  //   console.log(quizData);
  //   setNumOfQuestions(0);
  //   setQuizData({
  //     question: '',
  //     incorrectAnswers: [],
  //     correctAnswer: '',
  //     allAnswers: [],
  //   });
  // }

  return (
    <div className="final-results">
    <h1>Quiz complete!</h1>
    <h2>
      Congrats!
      <FontAwesomeIcon icon={faMedal} className="fa-icon" />
    </h2>
    <div className="end-screen-stats">
      <div className="end-screen-stat-label">Final score</div>
      <div className="end-screen-stat-value">10</div>
    </div>
    <button className="trivia-card-next-button" onClick={onRetryClick}>
      Play again?
    </button>
  </div>
  )
}

export default EndScreen