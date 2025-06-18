import React, { useState } from 'react';

const CreateEventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    dateTime: '',
    totalSeats: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({
      title: '',
      location: '',
      dateTime: '',
      totalSeats: '',
    });
    onEventCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Event Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
      <input type="number" name="totalSeats" placeholder="Total Seats" value={formData.totalSeats} onChange={handleChange} required />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
