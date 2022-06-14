import React from 'react';
import '../footer/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      &copy; {year}
      <a href="https://www.avenurme.dev">Ave Nurme | avenurme.dev</a>
    </footer>
  );
}

export default Footer;
