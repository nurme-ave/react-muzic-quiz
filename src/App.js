import './index.css';
import Header from './header/Header';
import QuizPage from './quiz/QuizPage';
import Footer from './footer/Footer';
import { QuizContext } from './quiz/Contexts';
import { useState } from 'react';


function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  // const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0)


  return (
    <main className="main-container">
      <Header />
      <QuizContext.Provider value={{ isGameOver, setIsGameOver, questionIndex, setQuestionIndex }}>
        <QuizPage />
        
      </QuizContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
