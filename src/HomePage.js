// src/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import OutdoorEvents from './components/OutdoorEvents';
import MoviesEvents from './components/MoviesEvents';

const sampleEvents = [
  {
    _id: '1',
    title: 'Bollywood Concert',
    location: 'Mumbai',
    dateTime: '2025-08-15T19:00:00',
    totalSeats: 500,
    bookedSeats: 320,
    pricePerSeat: 1500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhnNkklOAfxhVVDQWL_HcUDDq80S4LgfFqA&s',
  },
  {
    _id: '2',
    title: 'Food Festival',
    location: 'Delhi',
    dateTime: '2025-10-01T18:00:00',
    totalSeats: 400,
    bookedSeats: 220,
    pricePerSeat: 700,
    image: 'https://i.pinimg.com/736x/c7/b0/f9/c7b0f905e7f9e683a38a5d71dead6cc7.jpg',
  },
  {
    _id: '3',
    title: 'Classical Night',
    location: 'Chennai',
    dateTime: '2025-09-20T20:00:00',
    totalSeats: 300,
    bookedSeats: 150,
    pricePerSeat: 1200,
    image: 'https://media2.wnyc.org/i/313/234/l/80/1/new-world-symphony.jpg',
  },
  {
    _id: '4',
    title: 'Stand-Up Comedy Night',
    location: 'Bangalore',
    dateTime: '2025-07-15T20:00:00',
    totalSeats: 300,
    bookedSeats: 250,
    pricePerSeat: 900,
    image: 'https://t3.ftcdn.net/jpg/02/39/25/26/360_F_239252608_oxCmkHZ1ugqOPf6468xO22WacTz0JBPx.jpg',
  },
  {
    _id: '5',
    title: 'Tech Summit India 2025',
    location: 'Hyderabad',
    dateTime: '2025-09-05T10:00:00',
    totalSeats: 1000,
    bookedSeats: 700,
    pricePerSeat: 3000,
    image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974',
  },
  {
    _id: '6',
    title: 'India vs West Indies – 1st Test',
    location: 'Ahmedabad',
    dateTime: '2025-10-02T09:30:00',
    totalSeats: 50000,
    bookedSeats: 20000,
    pricePerSeat: 2000,
    image: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/26/Pictures/antigua-india-west-indies-cricket_d45d9d10-c781-11e9-b964-dfb37bdfef35.jpg',
  }
];

function HomePage() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEvents(sampleEvents);
  }, []);

  const handleBooking = (eventId) => {
    navigate(`/booking/${eventId}`);
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Welcome to FestiBuzz 🎉</h1>
          <p>Discover & Book India's Best Events</p>
         <button className="explore-btn" onClick={scrollToEvents}>
  Explore Events <span className="down-arrow">↓</span>
</button>
          <div className="down-arrow" onClick={scrollToEvents}>↓</div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="event-section">
        <h2>🎟️ Upcoming Events</h2>
        <div className="event-grid">
          {events.map((event) => (
            <div className="event-card" key={event._id}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>📍 {event.location}</p>
                <p>📅 {new Date(event.dateTime).toLocaleString()}</p>
                <p>🎟️ {event.bookedSeats} / {event.totalSeats}</p>
                <button
                  className="book-btn"
                  onClick={() => handleBooking(event._id)}
                  disabled={event.bookedSeats >= event.totalSeats}
                >
                  {event.bookedSeats >= event.totalSeats ? 'Sold Out' : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outdoor Events */}
      <div className="event-section">
        <h2>🏕️ Outdoor Adventures</h2>
        <OutdoorEvents />
      </div>

      {/* Movies Events */}
      <div className="event-section">
        <h2>🎬 Movies</h2>
        <MoviesEvents onBook={handleBooking} />
      </div>
    </div>
  );
}

export default HomePage;
