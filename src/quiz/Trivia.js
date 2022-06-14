import '../quiz/Trivia.css';
import Stats from './Stats';

function Trivia({ triviaData }) {
  console.log(triviaData);

  return (
    <section className="trivia-container">
      <Stats />
    </section>
  );
}

export default Trivia;
