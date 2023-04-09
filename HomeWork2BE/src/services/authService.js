const User = require('../db/models/User');
const bcrypt = require('bcryptjs');

async function getUserByEmailAndPassword(email, password) {
  try {
    console.log('getUserByEmailAndPassword function called with email:', email);
    const user = await User.findOne({ email });
    console.log('User found:', user);

    if (!user) {
      console.log('No user found for email:', email);
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Invalid password for email:', email);
      return null;
    }

    console.log('getUserByEmailAndPassword function finished successfully for email:', email);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving user');
  }
}
async function createUser(username, email, password, role) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating user');
  }
}

module.exports = {
  createUser,
  getUserByEmailAndPassword,
};

module.exports = {
  createUser,
  getUserByEmailAndPassword,
};
