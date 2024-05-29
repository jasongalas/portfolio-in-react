import React from 'react'

export default function Portfolio() {

  const portfolioPieces = [
    {
      name: "Weather Ball",
      displayImage: "./assets/images/WeatherBall.png",
      liveLink: "https://jasongalas.github.io/weather-ball/",
      githubLink:"https://github.com/jasongalas/weather-ball"
    },
    {
      name: "TRVLR",
      displayImage: "./assets/images/TRVLR.png",
      liveLink: "https://cfriedman2156.github.io/travel-companion-app/",
      githubLink:"https://github.com/cfriedman2156/travel-companion-app"
    },
    {
      name: "Sticky Notes",
      displayImage: "./assets/images/StickyNotes.png",
      liveLink: "https://sticky-note-taker.onrender.com/",
      githubLink:"https://github.com/jasongalas/sticky-note-taker"
    },
    {
      name: "Get Spiced!",
      displayImage: "./assets/images/GetSpiced.png",
      liveLink: "https://the-workout.onrender.com/",
      githubLink:"https://github.com/G-code117/The-workout"
    },
    {
      name: "Just Another Text Editor",
      displayImage: "./assets/images/JATE.png",
      liveLink: "https://mr-text-editor.onrender.com/",
      githubLink:"https://github.com/jasongalas/mr-text-editor"
    },
    {
      name: "KanBan Task Board",
      displayImage: "./assets/images/JATE.png",
      liveLink: "https://jasongalas.github.io/task-board/",
      githubLink:"https://github.com/jasongalas/task-board"
    },
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="project-grid">
                {portfolioPieces.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <div className="image-container">
                            <img src={project.displayImage} alt={project.name} className="project-image" />
                            <div className="overlay">
                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
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
