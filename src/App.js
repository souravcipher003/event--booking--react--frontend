import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import BookingPage from './BookingPage'; // For Upcoming Events
import BookingForm from './components/BookingForm'; // For Movies  and Outdoor
import OutdoorEvents from './components/OutdoorEvents';
import MoviesEvents from './components/MoviesEvents';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Booking pages */}
        <Route path="/booking/:eventId" element={<BookingPage />} />
        <Route path="/book/:eventId" element={<BookingForm />} />

        {/* Optional: Direct outdoor route */}
        <Route path="/outdoor" element={<OutdoorEvents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;