// src/components/OutdoorEvents.js
import React from 'react';
import './OutdoorEvents.css';
import { useNavigate } from 'react-router-dom';

const outdoorEvents = [
  {
    id: '101',
    title: 'Paragliding',
    location: 'Himachal Pradesh',
    date: '2025-06-25',
    image: 'https://images.unsplash.com/photo-1651114025564-2aa8bc926329?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
  },
  {
    id: '102',
    title: 'City Hiking Tour',
    location: 'Blue Mountain',
    date: '2025-07-01',
    image: 'https://snaptoro.com/wp-content/uploads/2023/02/Peb-Fort-Trek-Journey-View.jpeg',
  },
  {
    id: '103',
    title: 'Summer Food Festival',
    location: 'Downtown Plaza',
    date: '2025-07-10',
    image: 'https://i.pinimg.com/736x/c7/b0/f9/c7b0f905e7f9e683a38a5d71dead6cc7.jpg',
  }
];

export default function OutdoorEvents() {
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <section className="outdoor-section">
      
      <div className="outdoor-grid">
        {outdoorEvents.map(event => (
          <div key={event.id} className="outdoor-card">
            <img src={event.image} alt={event.title} className="outdoor-image" />
            <div className="outdoor-content">
              <h3>{event.title}</h3>
              <p>📍 {event.location}</p>
              <p>📅 {new Date(event.date).toDateString()}</p>
              <button className="book-btn" onClick={() => handleBooking(event.id)}>Book Now</button>
       

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
