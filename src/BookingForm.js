// src/components/BookingForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample event data to fetch event details (same as OutdoorEvents and maybe HomePage)
const allEvents = [
  // Your existing events, outdoor + others combined for simplicity
  {
    id: '101',
    title: 'Paragliding',
    location: 'Himachal Pradesh',
    date: '2025-06-25',
    pricePerSeat: 1500,
  },
  {
    id: '102',
    title: 'City Hiking Tour',
    location: 'Blue Mountain',
    date: '2025-07-01',
    pricePerSeat: 1200,
  },
  {
    id: '103',
    title: 'Summer Food Festival',
    location: 'Downtown Plaza',
    date: '2025-07-10',
    pricePerSeat: 700,
  },
  
  // Add other events from your HomePage data if needed here
];

export default function BookingForm() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = allEvents.find(ev => ev.id === eventId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seats: 1,
  });

  if (!event) {
    return <p>Event not found!</p>;
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = event.pricePerSeat * formData.seats;
    const bookingId = 'BK' + Math.floor(Math.random() * 1000000);

    // Navigate to confirmation page with booking data in state
    navigate('/booking-confirmation', {
      state: {
        eventTitle: event.title,
        seats: formData.seats,
        totalPrice,
        bookingId,
      }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book: {event.title}</h2>
      <p>Location: {event.location}</p>
      <p>Date: {new Date(event.date).toDateString()}</p>
      <p>Price per Seat: ₹{event.pricePerSeat}</p>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label>Number of Seats:</label><br />
        <input type="number" name="seats" min="1" value={formData.seats} onChange={handleChange} required /><br /><br />

        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
}
