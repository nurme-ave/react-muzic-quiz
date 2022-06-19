import './index.css';
import Header from './header/Header';
import QuizPage from './quiz/QuizPage';
import Footer from './footer/Footer';
import { QuizContext } from './quiz/Contexts';
import { useState } from 'react';


function App() {
  // const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <main className="main-container">
      <Header />
      <QuizContext.Provider value={{ questionIndex, setQuestionIndex, score, setScore, selectedAnswer, setSelectedAnswer }}>
        <QuizPage />
      </QuizContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
