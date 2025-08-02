import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; 

export default function ToggleMode ({ darkMode, toggleTheme }) {
  return (
    <button
      className={`theme-button ${darkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
    >
      {darkMode ? <FiMoon /> : <FiSun />}
    </button>
  );
};
