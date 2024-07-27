import React from 'react';
import './WelcomeMessage.css';
import profile from '../Assets/profiled.jpeg';
import AnimatedWelcome from './AnimatedWelcome';

function WelcomeMessage() {
  return (
    <div className="welcome">
        <div className="text">
            <AnimatedWelcome />
            <p>I’m Edem Ahorlu, a versatile software engineer specializing in full-stack development, mobile development, data analysis, and cloud technologies. I thrive in fast-paced environments and enjoy working within startup cultures. My interests lie in AI, machine learning, blockchain technologies, and finance. I bring a well-rounded perspective and a drive for continuous learning, eager to contribute to impactful projects and leverage my skills in innovative ways.
            </p>
        </div>
        <div className="image">
            <img src={profile} alt="edemahorlu" className="profile-image" />
        </div>
    </div>
  );
}

export default WelcomeMessage;
