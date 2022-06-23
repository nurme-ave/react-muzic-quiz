import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Intro() {
  return (
    <div className="intro">
      <h2>Welcome!</h2>
      <p>Make your pick below and start the quiz.</p>
      <p>
        Good luck!
        <FontAwesomeIcon icon={faMusic} className="fa-icon-music-notes" />
      </p>
    </div>
  );
}

export default Intro;
