const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    const user = new User({ firstName, lastName, email, username, password });
    const savedUser = await user.save();
    res.status(201).json({ status: 201, message: 'User registered successfully!', user: savedUser });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      res.status(400).json({ message: `${field} already exists.`, status: 400 });
    } else {
      res.status(500).json({ message: 'Error registering user.', sttaus: 500 });
    }
  }
});

// Export the router correctly
module.exports = router;
