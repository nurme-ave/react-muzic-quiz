import { useState } from 'react';
import { QuizContext } from './components/quiz/Contexts';
import QuizPage from './components/quiz/QuizPage';
import './index.css';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <main className="main-container">
      <QuizContext.Provider
        value={{
          questionIndex,
          setQuestionIndex,
          selectedAnswer,
          setSelectedAnswer,
          score,
          setScore,
        }}
      >
        <QuizPage />
      </QuizContext.Provider>
    </main>
  );
}

export default App;
