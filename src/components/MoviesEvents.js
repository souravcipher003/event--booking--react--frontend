// src/components/MoviesEvents.js
import React from 'react';
import './MoviesEvents.css';
import { useNavigate } from 'react-router-dom';

const movieEvents = [
  {
    id: 'm1',
    title: 'F1',
    location: 'PVR',
    date: '2025-07-22',
    image: '/f1.jpg',
  },
  {
    id: 'm2',
    title: 'Jurassic World Rebirth',
    location: 'PVR',
    date: '2025-07-02',
    image: '/jwp.jpg',
  },
  {
    id: 'm3',
    title: 'From the World of John Wick: Ballerina',
    location: 'PVR Cinemas',
    date: '2025-06-20',
    image: '/hq720.jpg',
  },
];

export default function MoviesEvents() {
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/booking/${id}`); // ✅ same as Outdoor
  };

  return (
 <section className="movies-section"> {/* same styling reuse */}
      <div className="outdoor-grid">
        {movieEvents.map((movie) => (
          <div key={movie.id} className="outdoor-card">
            <img src={movie.image} alt={movie.title} className="outdoor-image" />
            <div className="outdoor-content">
              <h3>{movie.title}</h3>
              <p>📍 {movie.location}</p>
              <p>📅 {new Date(movie.date).toDateString()}</p>
              <button
                className="book-btn"
                onClick={() => handleBooking(movie.id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
