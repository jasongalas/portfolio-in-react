import React from 'react'
import Me from '../assets/images/Me.jpeg';

export default function About() {
  return (
    <div className='aboutme-container'>
      <h2>About The Coder</h2>
      <img src={Me} alt="Me" className="aboutme-image" />
      <p className='blurb-container'>
        The spring of 2024 was a time spent trying to hone the act of coding. 
        In 3 short months, our cohort was crammed with so many topics and ideas,
        it was hard to keep it all in track. But with time and determination,
        these soft skills will be solid. After all, being bad at something is the
        first step at being good at something.
      </p>
    </div>
  );
}
