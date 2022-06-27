import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy; {year}
        <a href="https://www.avenurme.dev">Ave Nurme | avenurme.dev</a>
      </p>
    </footer>
  );
}

export default Footer;
