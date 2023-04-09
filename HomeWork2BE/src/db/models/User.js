const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  role: {
    type: String,
    enum: ["owner", "member"],
    required: true
  },
  shoppingLists: [{
    type: Schema.Types.ObjectId,
    ref: "ShoppingList"
  }]
});

module.exports = mongoose.model("User", userSchema);
