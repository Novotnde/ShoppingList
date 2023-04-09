const jwt = require('jsonwebtoken');
require('dotenv').config();
const { createUser, getUserByEmailAndPassword } = require('../services/authService');

async function login(req, res) {
  console.log('login function called');
  const { email, password } = req.body;

  try {
    const user = await getUserByEmailAndPassword(email, password);
    console.log('test');
    if (!user) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }
    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    // Return the token to the client
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

async function signup(req, res) {
  console.log('signup function called');
  const { username, email, password, role } = req.body;

  try {
    const user = await createUser(username, email, password, role);

    if (!user) {
      return res.status(500).json({ error: 'Server error' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Return the token to the client
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  login,
  signup,
};