const { use } = require('express/lib/router');
const User = require('../db/models/User');


async function getUsers() {
  try {
    const users = await User.find({});
    return users;
  } 
  catch (error) 
  {
    throw new Error(`Could not get users: ${error.message}`);
  }
}

async function updateUser(userId, updatedUserData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error(`Could not update user: ${error.message}`);
  }
}

async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
        return user;
    } 
    catch (error)
   {
    throw new Error(`Could not find user: ${error.message}`);
  }
}

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  } 
  catch (error)
  {
    throw new Error(`Could not find user: ${error.message}`);
  }
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
