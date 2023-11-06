import React from 'react';
import './ProjectCard.css';



const ProjectCard = ({ title, description, skills, githubUrl }) => {
    const handleCardClick = () => {
        window.open(githubUrl, '_blank');
    };

    return (
        <div className="projectCard" onClick={handleCardClick}>
            <h3 className='pname'>{title}</h3>
            <div className="projectContent">
                <p>{description}</p>
                <ul className="pskills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;