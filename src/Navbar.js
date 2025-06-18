// src/Navbar.js
import React from 'react';
import './styles.css'; // use this only if navbar styles are inside styles.css

function Navbar() {
  return (
    <ul className="hero-navbar">
      <li><a href="/">Home</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
      
    </ul>
  );
}

export default Navbar;
