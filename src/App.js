import './index.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Quiz from './quiz/Quiz';

function App() {
  return (
    <main className="main-container">
      <Header />
      <Quiz />
      <Footer />
    </main>
  );
}

export default App;
