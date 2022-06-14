import './index.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Quiz from './quiz/Quiz';
import Data from './quiz/Data';

function App() {
  return (
    <main className="main-container">
      <Header />
      <Quiz />
      <Data />
      <Footer />
    </main>
  );
}

export default App;
