import React from 'react';
import './WelcomeMessage.css';
import profile from '../Assets/profiled.jpeg';
import AnimatedWelcome from './AnimatedWelcome';

function WelcomeMessage() {
  return (
    <div className="welcome">
        <div className="text">
            <AnimatedWelcome />
            <p>I'm Edem Ahorlu, a recent Computer Science graduate from Duke University and an international student from Ghana. I have experience in data analysis, web development, and iOS app building. My problem-solving approach combines creativity, innovation, and the latest tools for scalable solutions. As an international student, I possess adaptability and a global perspective. I'm passionate about software development and seek meaningful opportunities to apply my skills. I'm also interested in NLP, LLM, Langchain and Blockchain technologies.
            </p>
        </div>
        <div className="image">
            <img src={profile} alt="Profile" className="profile-image" />
        </div>
    </div>
  );
}

export default WelcomeMessage;
