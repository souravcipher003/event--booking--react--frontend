import React from 'react';
import './styles.css'; // or wherever your styles are

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>Welcome to FestiBuzz 🎉</h1>
        <p>Discover & Book India's Best Events, Concerts and Fests</p>
        <a href="#events" className="explore-btn">Explore Events ↓</a>
      </div>
    </div>
  );
}

export default HeroSection;
