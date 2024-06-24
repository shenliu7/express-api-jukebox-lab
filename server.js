// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));

// Define Routes
app.use('/', require('./routes/tracks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

