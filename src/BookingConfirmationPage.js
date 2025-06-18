// src/pages/BookingConfirmationPage.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function BookingConfirmationPage() {
  const { state } = useLocation();
  const bookingData = state || {};

  if (!bookingData.eventTitle) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>No booking data found</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎉 Booking Confirmed!</h2>
      <p><b>Event:</b> {bookingData.eventTitle}</p>
      <p><b>Seats Booked:</b> {bookingData.seats}</p>
      <p><b>Total Price:</b> ₹{bookingData.totalPrice}</p>
      <p><b>Booking ID:</b> {bookingData.bookingId || 'N/A'}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BookingConfirmationPage;
