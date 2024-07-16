const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
// import connectDB from './config/db';

const app = express();

// Connect to the database
// connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

module.exports = app;