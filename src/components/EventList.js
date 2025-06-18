import React from 'react';

const EventList = ({ events, onBook }) => {
  const handleBook = async (id) => {
    await fetch(`http://localhost:5000/api/events/${id}/book`, {
      method: 'POST',
    });
    onBook();
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div className="event-card" key={event._id}>
          <h3>{event.title}</h3>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {new Date(event.dateTime).toLocaleString()}</p>
          <p><strong>Seats Left:</strong> {event.totalSeats - event.bookedSeats}</p>
          <button
            onClick={() => handleBook(event._id)}
            disabled={event.bookedSeats >= event.totalSeats}
          >
            {event.bookedSeats >= event.totalSeats ? 'Sold Out' : 'Book Now'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
