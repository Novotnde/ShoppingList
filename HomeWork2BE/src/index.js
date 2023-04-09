const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');
const app = express();

// require the mongoose connection file
require('./db/mongoose');

// middleware to parse incoming request data
app.use(express.json());

// set up the user routes
app.use('/users', userRoutes);
app.use('/shopping-lists', shoppingListRoutes);

app.listen(3000, (error) => {
    if (error) {
      console.log('Unable to start the server on port 3000');
      console.error(error);
      return;
    }
    console.log('app is running on port 3000');
  });
  
