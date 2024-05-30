import React from 'react';
import weatherBall from '../assets/images/WeatherBall.png';
import TRVLR from '../assets/images/TRVLR.png';
import stickyNotes from '../assets/images/StickyNotes.png';
import getSpiced from '../assets/images/GetSpiced.png';
import JATE from '../assets/images/JATE.png';
import kanban from '../assets/images/TaskBoard.png';

export default function Portfolio() {

  const portfolioPieces = [
    {
      name: "Weather Ball",
      displayImage: weatherBall,
      liveLink: "https://jasongalas.github.io/weather-ball/",
      githubLink:"https://github.com/jasongalas/weather-ball"
    },
    {
      name: "TRVLR",
      displayImage: TRVLR,
      liveLink: "https://cfriedman2156.github.io/travel-companion-app/",
      githubLink:"https://github.com/cfriedman2156/travel-companion-app"
    },
    {
      name: "Sticky Notes",
      displayImage: stickyNotes,
      liveLink: "https://sticky-note-taker.onrender.com/",
      githubLink:"https://github.com/jasongalas/sticky-note-taker"
    },
    {
      name: "Get Spiced!",
      displayImage: getSpiced,
      liveLink: "https://the-workout.onrender.com/",
      githubLink:"https://github.com/G-code117/The-workout"
    },
    {
      name: "Just Another Text Editor",
      displayImage: JATE,
      liveLink: "https://mr-text-editor.onrender.com/",
      githubLink:"https://github.com/jasongalas/mr-text-editor"
    },
    {
      name: "KanBan Task Board",
      displayImage: kanban,
      liveLink: "https://jasongalas.github.io/task-board/",
      githubLink:"https://github.com/jasongalas/task-board"
    },
  ]
  return (
    <div>
      <h2>My Work</h2>
      <div className="project-grid">
        {portfolioPieces.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
               <div className="image-container">
                <img src={project.displayImage} alt={project.name} className="project-image" />
                  <div className="overlay">
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                  </div>
              </div>
            </div>
          ))}
      </div>  
    </div>
  );
}
