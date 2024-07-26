import React from 'react';
import './WelcomeMessage.css';
import profile from '../Assets/profiled.jpeg';
import AnimatedWelcome from './AnimatedWelcome';

function WelcomeMessage() {
  return (
    <div className="welcome">
        <div className="text">
            <AnimatedWelcome />
            <p>I'm Edem Ahorlu, a Computer Science graduate from Duke University and an international student from Ghana. I specialize in full-stack development, mobile development, data analysis, and cloud technologies. My startup experience has honed my ability to innovate and adapt quickly. I'm highly passionate about AI, machine learning, and blockchain technologies. With a global perspective and a drive for continuous learning, I'm eager to take on new challenges and contribute to impactful projects.
            </p>
        </div>
        <div className="image">
            <img src={profile} alt="edemahorlu" className="profile-image" />
        </div>
    </div>
  );
}

export default WelcomeMessage;
