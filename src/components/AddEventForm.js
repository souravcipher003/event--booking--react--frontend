import React, { useState } from 'react';

const AddEventForm = ({ onAddEvent }) => {
  const [form, setForm] = useState({
    title: '',
    location: '',
    dateTime: '',
    totalSeats: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({
      ...form,
      totalSeats: Number(form.totalSeats),
      bookedSeats: 0
    });
    setForm({ title: '', location: '', dateTime: '', totalSeats: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Event Title" value={form.title} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <input type="datetime-local" name="dateTime" value={form.dateTime} onChange={handleChange} required />
      <input type="number" name="totalSeats" placeholder="Total Seats" value={form.totalSeats} onChange={handleChange} required min="1" />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default AddEventForm;
