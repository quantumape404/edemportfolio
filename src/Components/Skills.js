import React from 'react';
import { 
    FaHtml5, 
    FaCss3, 
    FaJsSquare,  
    FaSwift, 
    FaJava,
    FaPython,
    FaReact,
    FaFigma,
    FaTerminal,
    FaPhp,
    FaRProject,
    FaDatabase,
    FaDocker,
    FaGit,
    FaNodeJs,
    FaCode
} from 'react-icons/fa';
import { DiWordpress } from 'react-icons/di';
import { SiJson, SiFlask } from 'react-icons/si';
import './Skills.css';


const skills = [
    { icon: <FaSwift />, name: "Swift" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { icon: <FaTerminal />, name: "Bash" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaRProject />, name: "R" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaCode />, name: 'C'},
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiJson />, name: 'JSON' },
    { icon: <DiWordpress />, name: 'WordPress' }
];


function Skills() {
    return (

        <div className='skills'>

            {skills.map((skill, index) => (
                <div className='icon-wrapper' key={index}>
                    <div className='icon'>{skill.icon}</div>
                    <div className='icon-name'>{skill.name}</div>
                </div>
            ))}
        </div>
    );
}


export default Skills;
