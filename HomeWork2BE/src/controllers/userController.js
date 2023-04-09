const User = require('../db/models/User');
const userService = require('../services/userService');

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.send(user);
  } 
  catch (error)
  {
    res.status(500).send(error);
  }
}

async function updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.send(updatedUser);
    } 
    catch (error) 
    {
      res.status(500).send(error.message);
    }
  }

async function deleteUser(req, res) {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    res.send(deletedUser);
  } 
  catch (error)
  {
    res.status(500).send(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
