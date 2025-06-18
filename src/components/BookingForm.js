// src/components/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookingForm({ eventId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/api/events/${eventId}/book`, {
        name,
        email,
      });

      navigate('/booking-confirmation', {
        state: {
          eventTitle: res.data.event.title,
          seats: 1,
          totalPrice: 499, // static or dynamic
          bookingId: res.data.event._id,
        },
      });
    } catch (err) {
      alert('Booking failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Book Your Seat</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
