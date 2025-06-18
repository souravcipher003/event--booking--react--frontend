const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Event schema & model
const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  dateTime: Date,
  totalSeats: Number,
  bookedSeats: { type: Number, default: 0 }
});

const Event = mongoose.model('Event', eventSchema);

// Routes
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/api/events/:id/book', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (event.bookedSeats >= event.totalSeats)
      return res.status(400).json({ message: 'No seats available' });

    event.bookedSeats += 1;
    await event.save();

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
