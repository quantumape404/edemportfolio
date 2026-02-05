import React from 'react';
import './Navbar.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaHome, FaFilePdf } from 'react-icons/fa';



const Navbar = () => {
    return (

      <nav  className="navbar"> 
        <div className='left'>
            <FaHome className="FaIcon" onClick={() => window.location.reload()} />
        </div>


        <ul className='right'>

          <li>
            <div  className="navItem">
                <a href="mailto:edem.ahorluk@gmail.com">
                    <FaEnvelope className = "navIcon" />
                </a>
                <p className="navName">Email</p>
            </div>
          </li>
          <li>
            <div className="navItem">
                <a href="https://www.linkedin.com/in/edem-ahorlu" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className = "navIcon" />
                </a>
                <p className="navName">LinkedIn</p>
            </div>
          </li>
          <li>
            <div className="navItem">
                <a href="https://github.com/Airdm404" target="_blank" rel="noopener noreferrer">
                <FaGithub className = "navIcon" />
                </a>
                <p className="navName">GitHub</p>
            </div>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;


  