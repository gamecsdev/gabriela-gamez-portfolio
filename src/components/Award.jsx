import React from 'react';
import { PiStarFill } from 'react-icons/pi';

const awards = [
  {
    title: 'Best AR/VR Hack',
    description: 'Requirements: For this challenge, build the best AR/VR application using the echoAR platform! The only rule is that you must use the echoAR platform.'
  },
  {
    title: 'The Ultimate Failed Hack',
    description: 'Requirements: This prize is for the team who dreamed big and failed hard'
  }
];

export default function Award () {
  return (
    <div className = 'award-container'>
      {awards.map((award, idx) => (
        <div className = 'award-card' key={idx}>
          <PiStarFill className = 'award-icon' />
          <div className = 'award-text'>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
