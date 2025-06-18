// src/EventDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchEvent() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(`/api/events/${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }

        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  if (loading) return <div style={{ padding: 20 }}>Loading event details...</div>;
  if (error) return <div style={{ padding: 20, color: 'red' }}>Error: {error}</div>;
  if (!event) return <div style={{ padding: 20 }}>Event not found!</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date & Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
      <p><strong>Total Seats:</strong> {event.totalSeats}</p>
      <p><strong>Booked Seats:</strong> {event.bookedSeats}</p>
      <p><strong>Price Per Seat:</strong> ₹{event.pricePerSeat}</p>
    </div>
  );
}

export default EventDetailsPage;
