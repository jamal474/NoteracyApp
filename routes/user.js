const express = require('express');
const router = express.Router();

// Import Passport and any relevant strategies you are using.
const passport = require('passport');

// Middleware to check if the user is authenticated.
router.get('/check-auth-status', (req, res) => {
  if (req.isAuthenticated()) {
    // User is authenticated; you can access user data from req.user.
    res.status(200).json({ user: req.user });
  } else {
    // User is not authenticated.
    res.status(401).json({ message: 'User is not authenticated' });
  }
});

module.exports = router;