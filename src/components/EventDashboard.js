import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import AddEventForm from './AddEventForm';

const EventDashboard = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (eventData) => {
    try {
      const res = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });

      const newEvent = await res.json();
      setEvents(prev => [...prev, newEvent]);
    } catch (err) {
      console.error('Create error:', err);
    }
  };

  return (
    <>
      <AddEventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </>
  );
};

export default EventDashboard;
