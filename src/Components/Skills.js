import React from 'react';
import { 
    FaJsSquare,  
    FaSwift, 
    FaJava,
    FaPython,
    FaReact,
    FaRProject,
    FaDatabase,
    FaDocker,
    FaPhp,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaAngular,
    FaVuejs,
    FaAws,
    
} from 'react-icons/fa';
import { 
    SiFlask,
    SiKubernetes,
    SiTypescript,
    SiKotlin,
    SiDjango,
    SiGraphql,
    SiExpress,
    SiIbmcloud
} from 'react-icons/si';
import { FaGolang } from 'react-icons/fa6'
import { 
    TbHexagonLetterC,
    TbBrandReactNative,
    TbBrandNextjs
} from "react-icons/tb";

import { DiGoogleCloudPlatform } from "react-icons/di";
import './Skills.css';





const languages = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaSwift />, name: "Swift" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <FaGolang />, name: "Go" },
    { icon: <TbHexagonLetterC />, name: "C/C++" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaRProject />, name: "R" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiGraphql />, name: "GraphQL" },
];

const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <TbBrandReactNative />, name: "Native" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "K8s" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaAngular />, name: "Angular.js"},
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <DiGoogleCloudPlatform />, name: "GCP" },

];

function Skills() {
    return (

        <div>
            <div className='skills'>
                <h2 className='skills-title'>Languages</h2>
                {languages.map((skill, index) => (
                    <div className='icon-wrapper' key={index}>
                        <div className='icon'>{skill.icon}</div>
                        <div className='icon-name'>{skill.name}</div>
                    </div>
                ))}
            </div>

            <div className='skills'>
                <h2 className='skills-title'>Technologies</h2>
                {technologies.map((skill, index) => (
                    <div className='icon-wrapper' key={index}>
                        <div className='icon'>{skill.icon}</div>
                        <div className='icon-name'>{skill.name}</div>
                    </div>
                ))}
            </div>

        </div>

    );
}


export default Skills;
