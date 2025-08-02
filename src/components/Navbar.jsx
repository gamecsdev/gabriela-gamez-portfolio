import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleMode from './ToggleMode';

export default function Navbar ({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSrc = darkMode ? '/dark-logo.png':'/light-logo.png';
  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='navbar'>
      <div className='logo'>
        <NavLink to='/' onClick={closeMenu}>
          <img src={logoSrc} alt='Logo' />
        </NavLink>
      </div>
      <div className='hamburger' onClick={handleToggle}> ☰ </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to='/certification' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
            Certifications
          </NavLink>
        </li>
        <ToggleMode darkMode={darkMode} toggleTheme={toggleTheme} />
      </ul>
    </nav>
  );
};
