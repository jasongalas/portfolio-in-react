import React from 'react'
import resume from '../assets/JasonGAlas_Resume.pdf'

export default function Resume() {
  const downloadResume = () => {
      const anchor = document.createElement("a");
      anchor.href = resume;
      anchor.download = "JasonGAlas_Resume.pdf";
      anchor.click();
  };
  return (
    <section className="resume-section">
      <h2>Resume</h2>
        <button onClick={downloadResume} className="download-button">Download Resume as PDF</button>
    </section>
  );
}