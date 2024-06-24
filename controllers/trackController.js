// controllers/trackController.js
const Track = require('../models/Track');

// Create a track
const createTrack = async (req, res) => {
  try {
    const newTrack = new Track(req.body);
    const track = await newTrack.save();
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tracks
const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single track
const getTrackById = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a track
const updateTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a track
const deleteTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);
    if (!track) return res.status(404).json({ message: 'Track not found' });
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTrack,
  getTracks,
  getTrackById,
  updateTrack,
  deleteTrack,
};
