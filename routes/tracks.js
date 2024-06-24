// routes/tracks.js
const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController');

// Define Routes
router.post('/tracks', trackController.createTrack);
router.get('/tracks', trackController.getTracks);
router.get('/tracks/:id', trackController.getTrackById);
router.put('/tracks/:id', trackController.updateTrack);
router.delete('/tracks/:id', trackController.deleteTrack);

module.exports = router;
