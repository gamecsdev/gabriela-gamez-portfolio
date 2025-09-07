import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Certification from './pages/Certification';
//import Chatbot from './components/Chatbot'; // future implementation

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Starts in dark mode
  const toggleTheme = () => setDarkMode(prev => !prev);
  
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);   
    // change the favicon based on dark mode
    const updateFavicon = () => {
      const favicon = document.getElementById('favicon');
      const logoSrc = darkMode 
        ? `${process.env.PUBLIC_URL}/favicon-light.ico` 
        : `${process.env.PUBLIC_URL}/favicon-dark.ico`;
      favicon.href = logoSrc;
    };
    // Update the favicon 
    updateFavicon();
    // Listen for theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateFavicon);
    };
  }, [darkMode]);

  return (
    <Router>
      <GlobalStyle darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
      {/* <Chatbot /> */}
      <Footer />
    </Router>
  );
}
