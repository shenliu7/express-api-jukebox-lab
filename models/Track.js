// models/Track.js
const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Track', TrackSchema);
