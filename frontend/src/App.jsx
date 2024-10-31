import { motion } from 'framer-motion';
import Countdown from './Countdown';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1>Coming Soon</h1>
        <p>Our site is launching shortly. Stay tuned.</p>
        <Countdown />

      </motion.div>
    </div>
  );
};

export default App;
