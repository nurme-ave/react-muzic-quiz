import React from 'react';
import '../footer/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return <footer className='footer'>&copy; Ave Nurme {year}</footer>;
}

export default Footer;
