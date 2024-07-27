import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';




function Projects() {
    return (
      <div className="projects">

        <div className='eachProject'>
            <div className='column'>

                <ProjectCard
                    title="DealerView360"
                    description="A full-stack cloud application for a car dealership, focusing on user authentication, car model management, and external data integration. Implemented IBM Cloud Functions for CRUD operations and IBM Watson for sentiment analysis, providing insights for dealership management. Designed user-friendly frontend templates to enhance interaction. Containerized with Docker and deployed on a Kubernetes cluster for scalability. Automated testing and deployment with CI/CD pipelines using GitHub Actions."
                    skills={['Django', 'Express.js', 'Flask', 'Node.js', 'Bootstrap', 'IBM Cloudant', 'PostgreSQL']}
                    githubUrl="https://github.com/Airdm404/DealerView360"
                />
                <ProjectCard
                    title="Smart Home Bot"
                    description="The project involved developing an interactive Slack bot using Python and the Slack SDK, enabling seamless queries of product information from a Home Depot website database. The bot handled queries for product ID, category, and brand, while additional features like slash commands for listing brands and categories enhanced usability. This innovation transformed the user experience within Slack by providing instant access to detailed product information and streamlining workflows for greater efficiency."
                    skills={['Flask', 'Python', 'Slack API', 'Web Scraping']}
                    githubUrl="https://github.com/Airdm404/SmartHomeBot"
                />

                <ProjectCard
                    title="Scrolling Platformer Game"
                    description="A scrolling platformer games framework that supports various game variations while maintaining a consistent user experience. The intuitive user interface allows players to effortlessly switch between game versions, select language preferences, and save their progress. The implementation reflects mastery of game design principles and mechanics. Additionally, the proficient use of APIs, Data-Driven Design, and SOLID principles contributed to a robust and extensible codebase, resulting in a polished and engaging gaming experience."
                    skills={['Java', 'Maven', 'JavaFX', 'JUnit']}
                    githubUrl="https://github.com/Airdm404/ScrollingPlatformerGame"
                /> 
                
            </div>

            <div className='column'>

                <ProjectCard
                    title="ConcertConnect"
                    description="Developed and deployed a full-stack web application for a music band using Flask, Django, and MongoDB. Implemented a microservices architecture for handling pictures and songs, ensuring scalability. Managed data models for concert registration and user management in Django. Deployed on IBM Kubernetes Services with Docker and Kubernetes orchestration. Ensured robust performance with thorough testing and implemented secure user authentication for concert registration."
                    skills={['Flask', 'Django', 'MongoDB','IBM Code Engine','Docker', 'RedHat OpenShift', 'Kubernetes']}
                    githubUrl="https://github.com/Airdm404/ConcertConnect"
                />


                <ProjectCard
                    title="Course Builder"
                    description="This project entailed the development of a comprehensive course planning iOS app, tailor-made for Duke ECE Master’s students. The app features an intuitive drag-and-drop interface and is scalable for other degree tracks. It boasts real-time class information through integration with Duke’s Streamer API and an efficient search feature for course browsing. Additionally, the app conducts graduation requirement checks and facilitates exporting course plans as PDFs or images, which can be conveniently stored in the device’s Photos app."
                    skills={['Swift', 'SwiftUI', 'JSON', 'Streamer API', 'CI/CD', 'Git']}
                    githubUrl="https://github.com/Airdm404/Course-Builder"
                /> 

                <ProjectCard
                    title="Cellular Automata"
                    description="This project involved developing a Java program employing OpenJFX to animate 2D grid Cellular Automata simulations. An interactive GUI was constructed to facilitate running, loading, and saving simulations, with strict adherence to coding and design conventions. The development process showcased proficiency in Java, Maven, and JUnit, and also incorporated the Dependency Inversion Principle to build a streamlined and efficient application."
                    skills={['Java', 'JUnit', 'JavaFX', 'Git', 'MVC', 'CI/CD']}
                    githubUrl="https://github.com/Airdm404/CellularAutomataSimulator"
                /> 
            </div>

            <div className='column'>
                <ProjectCard
                    title="LittleLemon Food"
                    description="Developed a scalable restaurant ordering Android app using Kotlin and Jetpack Compose, featuring a clean architecture for efficient menu management. The app utilized Room Database and Ktor to enable real-time menu updates and offline capabilities, ensuring seamless user experience. Enhanced user interaction with personalized onboarding processes and intuitive dish selection navigation. Focused on maintaining app quality and security through extensive unit and instrumental testing, resulting in a robust and reliable application."
                    skills={['Kotlin', 'Jetpack Compose', 'Room Database', 'Ktor']}
                    githubUrl="https://github.com/Airdm404/LittleLemonFoodApp"
                />


                <ProjectCard
                    title="ClassMateFinder"
                    description="The project involved the development of a versatile SwiftUI iOS app designed for efficient class data management. The app features an intuitive user interface with robust search capabilities. A standout feature is the immersive detail view, enriched with custom graphics, animations, audio, and integration with UIKit. Additionally, responsive UI elements were developed using SwiftUI, and real-time filtering capabilities were incorporated to substantially enhance the user experience."
                    skills={['Swift', 'SwiftUI', 'UIKit', 'JSON', 'REST APIs', 'Git']}
                    githubUrl="https://github.com/Airdm404/ClassMateFinder"
                />

                <ProjectCard
                    title="Super Breakout"
                    description="In this project, a fully functional variation of the classic Breakout game was implemented, complete with cheat keys, level transitions, and configurable controls using mouse and keyboard inputs. The game was further enriched by designing and integrating interactive power-ups to boost gameplay dynamics and user engagement. The development process demonstrated strong time management skills and adherence to coding best practices, successfully delivering a high-quality game within stringent deadlines and meeting all project requirements."
                    skills={['Java', 'OpenJFX', 'JavaFX', 'CI/CD', 'Git']}
                    githubUrl="https://github.com/Airdm404/Breakout"
                /> 
            </div>

        </div>


      </div>
    );
  }
  
  export default Projects;