import React, { useEffect, useState } from 'react';
import './AnimatedWelcome.css';

const AnimatedWelcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h2 className={`welcomeh1 ${isVisible ? 'visible' : ''}`} aria-label="Welcome..." data-text="Welcome...">Welcome...</h2>
  );
};

export default AnimatedWelcome;
