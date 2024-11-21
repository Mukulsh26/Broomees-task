const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const formRoutes = require('./routes/form');
const path = require('path');

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the form route for POST requests
app.use('/api/form', formRoutes);

// Serve the index.html file from the 'views' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html')); // Serve the index.html from views folder
});

// Middleware to serve static files like CSS and JS from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
