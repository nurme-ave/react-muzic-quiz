import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="header">Muzic Quiz</h1>
    </motion.header>
  );
}

export default Header;
