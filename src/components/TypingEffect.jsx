import React, { useState, useEffect } from 'react';


export default function TypingEffect ({ text, speed = 100 }) {

  const [displayedText, setDisplayedText] = useState('');

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); // Add next character
        setIndex((prev) => prev + 1); // Move to next character
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span> 
      {displayedText}
      <span className='cursor'>|</span>
    </span> 
  );
};