import React from 'react'

export default function ResumePage() {
  const downloadResume = () => {
      const anchor = document.createElement("a");
      anchor.href = "../assets/JasonGAlas_Resume.pdf";
      anchor.download = "JasonGAlas_Resume.pdf";
      anchor.click();
  };
  return (
    <section className="resume-section">
      <h1>My Resume</h1>
        <button onClick={downloadResume} className="download-button">Download Resume as PDF</button>
    </section>
  );
}