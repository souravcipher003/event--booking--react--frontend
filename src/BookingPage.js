import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css'; // Make sure this contains styling for booking-form, booking-image, etc.

const sampleEvents = [
  // 🎤 Upcoming Events
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
    title: 'Standup Comedy ',
    location: 'Chennai',
    dateTime: '2025-09-20T20:00:00',
    totalSeats: 100,
    bookedSeats: 150,
    pricePerSeat: 800,
    image: 'https://media2.wnyc.org/i/313/234/l/80/1/new-world-symphony.jpg',
  },
  {
    _id: '5',
    title: 'tech Summit India 2025',
    location: 'Hyderabad',
    dateTime: '2025-09-25T20:00:00',
    totalSeats: 300,
    bookedSeats: 150,
    pricePerSeat: 1200,
    image: 'https://media2.wnyc.org/i/313/234/l/80/1/new-world-symphony.jpg',
  },
  {
    _id: '6',
    title: 'India vs WestIndies-1st Test',
    location: 'Ahemdabad',
    dateTime: '2025-09-2T20:00:00',
    totalSeats: 300,
    bookedSeats: 150,
    pricePerSeat: 1200,
    image: 'https://media2.wnyc.org/i/313/234/l/80/1/new-world-symphony.jpg',
  },

  // 🌄 Outdoor Events
  {
    _id: '101',
    title: 'Paragliding',
    location: 'Himachal Pradesh',
    dateTime: '2025-06-25T10:00:00',
    totalSeats: 100,
    bookedSeats: 60,
    pricePerSeat: 1500,
    image: 'https://images.unsplash.com/photo-1651114025564-2aa8bc926329?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
  },
  {
    _id: '102',
    title: 'City Trekking Tour',
    location: 'Blue Mountain',
    dateTime: '2025-07-01T08:30:00',
    totalSeats: 80,
    bookedSeats: 40,
    pricePerSeat: 1200,
    image: 'https://snaptoro.com/wp-content/uploads/2023/02/Peb-Fort-Trek-Journey-View.jpeg',
  },
  {
    _id: '103',
    title: 'Summer Food Festival',
    location: 'Downtown Plaza',
    dateTime: '2025-07-10T18:00:00',
    totalSeats: 150,
    bookedSeats: 50,
    pricePerSeat: 700,
    image: 'https://i.pinimg.com/736x/c7/b0/f9/c7b0f905e7f9e683a38a5d71dead6cc7.jpg',
  },

  // 🎬 Movies
  {
    _id: 'm1',
    title: 'F1',
    location: 'PVR',
    dateTime: '2025-07-22T15:30:00',
    totalSeats: 120,
    bookedSeats: 70,
    pricePerSeat: 300,
    image: '/f1.jpg',
  },
  {
    _id: 'm2',
    title: 'Jurassic World Rebirth',
    location: 'PVR',
    dateTime: '2025-07-02T18:00:00',
    totalSeats: 100,
    bookedSeats: 55,
    pricePerSeat: 400,
    image: '/jwp.jpg',
  },
  {
    _id: 'm3',
    title: 'Ballerina',
    location: 'PVR Cinemas',
    dateTime: '2025-06-20T20:00:00',
    totalSeats: 90,
    bookedSeats: 30,
    pricePerSeat: 350,
    image: '/hq720.jpg',
  },
];

function BookingPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = sampleEvents.find(e => e._id === eventId);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState('');

  if (!event) {
    return <div style={{ padding: 20 }}><h2>Event not found!</h2></div>;
  }

  const availableSeats = event.totalSeats - event.bookedSeats;
  const totalPrice = seats * event.pricePerSeat;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please enter name and email.');
      return;
    }
    if (seats < 1 || seats > availableSeats) {
      setError(`Choose between 1 and ${availableSeats} seats.`);
      return;
    }

    alert(`✅ Booking Confirmed for ${name}\n🎫 Event: ${event.title}\n👤 Email: ${email}\n🪑 Seats: ${seats}\n💰 Total: ₹${totalPrice}`);
    navigate('/');
  };

  return (
    <div className="booking-container">
      <h1>Confirm Your Booking</h1>
      <img src={event.image} alt={event.title} className="booking-image" />
      <h2>{event.title}</h2>
      <p><strong>📍 Location:</strong> {event.location}</p>
      <p><strong>🗓️ Date & Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
      <p><strong>🎟️ Seats Available:</strong> {availableSeats}</p>
      <p><strong>💵 Price/Seat:</strong> ₹{event.pricePerSeat}</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="number" min={1} max={availableSeats} value={seats} onChange={e => setSeats(Number(e.target.value))} required />
        <p><strong>Total:</strong> ₹{totalPrice}</p>
        {error && <p className="error">{error}</p>}
        <button type="submit">Pay & Book Now</button>
      </form>
      <div style={{ marginTop: '20px' }}>
  
</div>
    </div>
    
  );
}

export default BookingPage;
